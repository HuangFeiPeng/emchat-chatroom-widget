import { reactive, ref, defineComponent, watch, nextTick, createVNode, Fragment, onMounted } from "vue";
var commonjsGlobal = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function getDefaultExportFromCjs(p) {
  return p && p.__esModule && Object.prototype.hasOwnProperty.call(p, "default") ? p.default : p;
}
var EasemobChat = { exports: {} };
(function(module, exports) {
  (function(p, R) {
    module.exports = R();
  })(commonjsGlobal, function() {
    return function() {
      var __webpack_modules__ = { 4537: function(p) {
        p.exports = function(R, e) {
          for (var r = new Array(arguments.length - 1), t = 0, a = 2, s = !0; a < arguments.length; )
            r[t++] = arguments[a++];
          return new Promise(function(i, o) {
            r[t] = function(n) {
              if (s)
                if (s = !1, n)
                  o(n);
                else {
                  for (var l = new Array(arguments.length - 1), u = 0; u < l.length; )
                    l[u++] = arguments[u];
                  i.apply(null, l);
                }
            };
            try {
              R.apply(e || null, r);
            } catch (n) {
              s && (s = !1, o(n));
            }
          });
        };
      }, 7419: function(p, R) {
        var e = R;
        e.length = function(i) {
          var o = i.length;
          if (!o)
            return 0;
          for (var n = 0; --o % 4 > 1 && i.charAt(o) === "="; )
            ++n;
          return Math.ceil(3 * i.length) / 4 - n;
        };
        for (var r = new Array(64), t = new Array(123), a = 0; a < 64; )
          t[r[a] = a < 26 ? a + 65 : a < 52 ? a + 71 : a < 62 ? a - 4 : a - 59 | 43] = a++;
        e.encode = function(i, o, n) {
          for (var l, u = null, m = [], g = 0, h = 0; o < n; ) {
            var d = i[o++];
            switch (h) {
              case 0:
                m[g++] = r[d >> 2], l = (3 & d) << 4, h = 1;
                break;
              case 1:
                m[g++] = r[l | d >> 4], l = (15 & d) << 2, h = 2;
                break;
              case 2:
                m[g++] = r[l | d >> 6], m[g++] = r[63 & d], h = 0;
            }
            g > 8191 && ((u || (u = [])).push(String.fromCharCode.apply(String, m)), g = 0);
          }
          return h && (m[g++] = r[l], m[g++] = 61, h === 1 && (m[g++] = 61)), u ? (g && u.push(String.fromCharCode.apply(String, m.slice(0, g))), u.join("")) : String.fromCharCode.apply(String, m.slice(0, g));
        };
        var s = "invalid encoding";
        e.decode = function(i, o, n) {
          for (var l, u = n, m = 0, g = 0; g < i.length; ) {
            var h = i.charCodeAt(g++);
            if (h === 61 && m > 1)
              break;
            if ((h = t[h]) === void 0)
              throw Error(s);
            switch (m) {
              case 0:
                l = h, m = 1;
                break;
              case 1:
                o[n++] = l << 2 | (48 & h) >> 4, l = h, m = 2;
                break;
              case 2:
                o[n++] = (15 & l) << 4 | (60 & h) >> 2, l = h, m = 3;
                break;
              case 3:
                o[n++] = (3 & l) << 6 | h, m = 0;
            }
          }
          if (m === 1)
            throw Error(s);
          return n - u;
        }, e.test = function(i) {
          return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(i);
        };
      }, 5124: function(p) {
        function R(e, r) {
          typeof e == "string" && (r = e, e = void 0);
          var t = [];
          function a(i) {
            if (typeof i != "string") {
              var o = s();
              if (R.verbose && console.log("codegen: " + o), o = "return " + o, i) {
                for (var n = Object.keys(i), l = new Array(n.length + 1), u = new Array(n.length), m = 0; m < n.length; )
                  l[m] = n[m], u[m] = i[n[m++]];
                return l[m] = o, Function.apply(null, l).apply(null, u);
              }
              return Function(o)();
            }
            for (var g = new Array(arguments.length - 1), h = 0; h < g.length; )
              g[h] = arguments[++h];
            if (h = 0, i = i.replace(/%([%dfijs])/g, function(d, f) {
              var b = g[h++];
              switch (f) {
                case "d":
                case "f":
                  return String(Number(b));
                case "i":
                  return String(Math.floor(b));
                case "j":
                  return JSON.stringify(b);
                case "s":
                  return String(b);
              }
              return "%";
            }), h !== g.length)
              throw Error("parameter count mismatch");
            return t.push(i), a;
          }
          function s(i) {
            return "function " + (i || r || "") + "(" + (e && e.join(",") || "") + `){
  ` + t.join(`
  `) + `
}`;
          }
          return a.toString = s, a;
        }
        p.exports = R, R.verbose = !1;
      }, 9211: function(p) {
        function R() {
          this._listeners = {};
        }
        p.exports = R, R.prototype.on = function(e, r, t) {
          return (this._listeners[e] || (this._listeners[e] = [])).push({ fn: r, ctx: t || this }), this;
        }, R.prototype.off = function(e, r) {
          if (e === void 0)
            this._listeners = {};
          else if (r === void 0)
            this._listeners[e] = [];
          else
            for (var t = this._listeners[e], a = 0; a < t.length; )
              t[a].fn === r ? t.splice(a, 1) : ++a;
          return this;
        }, R.prototype.emit = function(e) {
          var r = this._listeners[e];
          if (r) {
            for (var t = [], a = 1; a < arguments.length; )
              t.push(arguments[a++]);
            for (a = 0; a < r.length; )
              r[a].fn.apply(r[a++].ctx, t);
          }
          return this;
        };
      }, 9054: function(p, R, e) {
        p.exports = a;
        var r = e(4537), t = e(7199)("fs");
        function a(s, i, o) {
          return typeof i == "function" ? (o = i, i = {}) : i || (i = {}), o ? !i.xhr && t && t.readFile ? t.readFile(s, function(n, l) {
            return n && typeof XMLHttpRequest < "u" ? a.xhr(s, i, o) : n ? o(n) : o(null, i.binary ? l : l.toString("utf8"));
          }) : a.xhr(s, i, o) : r(a, this, s, i);
        }
        a.xhr = function(s, i, o) {
          var n = new XMLHttpRequest();
          n.onreadystatechange = function() {
            if (n.readyState === 4) {
              if (n.status !== 0 && n.status !== 200)
                return o(Error("status " + n.status));
              if (i.binary) {
                var l = n.response;
                if (!l) {
                  l = [];
                  for (var u = 0; u < n.responseText.length; ++u)
                    l.push(255 & n.responseText.charCodeAt(u));
                }
                return o(null, typeof Uint8Array < "u" ? new Uint8Array(l) : l);
              }
              return o(null, n.responseText);
            }
          }, i.binary && ("overrideMimeType" in n && n.overrideMimeType("text/plain; charset=x-user-defined"), n.responseType = "arraybuffer"), n.open("GET", s), n.send();
        };
      }, 945: function(p) {
        function R(s) {
          return typeof Float32Array < "u" ? function() {
            var i = new Float32Array([-0]), o = new Uint8Array(i.buffer), n = o[3] === 128;
            function l(h, d, f) {
              i[0] = h, d[f] = o[0], d[f + 1] = o[1], d[f + 2] = o[2], d[f + 3] = o[3];
            }
            function u(h, d, f) {
              i[0] = h, d[f] = o[3], d[f + 1] = o[2], d[f + 2] = o[1], d[f + 3] = o[0];
            }
            function m(h, d) {
              return o[0] = h[d], o[1] = h[d + 1], o[2] = h[d + 2], o[3] = h[d + 3], i[0];
            }
            function g(h, d) {
              return o[3] = h[d], o[2] = h[d + 1], o[1] = h[d + 2], o[0] = h[d + 3], i[0];
            }
            s.writeFloatLE = n ? l : u, s.writeFloatBE = n ? u : l, s.readFloatLE = n ? m : g, s.readFloatBE = n ? g : m;
          }() : function() {
            function i(n, l, u, m) {
              var g = l < 0 ? 1 : 0;
              if (g && (l = -l), l === 0)
                n(1 / l > 0 ? 0 : 2147483648, u, m);
              else if (isNaN(l))
                n(2143289344, u, m);
              else if (l > 34028234663852886e22)
                n((g << 31 | 2139095040) >>> 0, u, m);
              else if (l < 11754943508222875e-54)
                n((g << 31 | Math.round(l / 1401298464324817e-60)) >>> 0, u, m);
              else {
                var h = Math.floor(Math.log(l) / Math.LN2);
                n((g << 31 | h + 127 << 23 | 8388607 & Math.round(l * Math.pow(2, -h) * 8388608)) >>> 0, u, m);
              }
            }
            function o(n, l, u) {
              var m = n(l, u), g = 2 * (m >> 31) + 1, h = m >>> 23 & 255, d = 8388607 & m;
              return h === 255 ? d ? NaN : g * (1 / 0) : h === 0 ? 1401298464324817e-60 * g * d : g * Math.pow(2, h - 150) * (d + 8388608);
            }
            s.writeFloatLE = i.bind(null, e), s.writeFloatBE = i.bind(null, r), s.readFloatLE = o.bind(null, t), s.readFloatBE = o.bind(null, a);
          }(), typeof Float64Array < "u" ? function() {
            var i = new Float64Array([-0]), o = new Uint8Array(i.buffer), n = o[7] === 128;
            function l(h, d, f) {
              i[0] = h, d[f] = o[0], d[f + 1] = o[1], d[f + 2] = o[2], d[f + 3] = o[3], d[f + 4] = o[4], d[f + 5] = o[5], d[f + 6] = o[6], d[f + 7] = o[7];
            }
            function u(h, d, f) {
              i[0] = h, d[f] = o[7], d[f + 1] = o[6], d[f + 2] = o[5], d[f + 3] = o[4], d[f + 4] = o[3], d[f + 5] = o[2], d[f + 6] = o[1], d[f + 7] = o[0];
            }
            function m(h, d) {
              return o[0] = h[d], o[1] = h[d + 1], o[2] = h[d + 2], o[3] = h[d + 3], o[4] = h[d + 4], o[5] = h[d + 5], o[6] = h[d + 6], o[7] = h[d + 7], i[0];
            }
            function g(h, d) {
              return o[7] = h[d], o[6] = h[d + 1], o[5] = h[d + 2], o[4] = h[d + 3], o[3] = h[d + 4], o[2] = h[d + 5], o[1] = h[d + 6], o[0] = h[d + 7], i[0];
            }
            s.writeDoubleLE = n ? l : u, s.writeDoubleBE = n ? u : l, s.readDoubleLE = n ? m : g, s.readDoubleBE = n ? g : m;
          }() : function() {
            function i(n, l, u, m, g, h) {
              var d = m < 0 ? 1 : 0;
              if (d && (m = -m), m === 0)
                n(0, g, h + l), n(1 / m > 0 ? 0 : 2147483648, g, h + u);
              else if (isNaN(m))
                n(0, g, h + l), n(2146959360, g, h + u);
              else if (m > 17976931348623157e292)
                n(0, g, h + l), n((d << 31 | 2146435072) >>> 0, g, h + u);
              else {
                var f;
                if (m < 22250738585072014e-324)
                  n((f = m / 5e-324) >>> 0, g, h + l), n((d << 31 | f / 4294967296) >>> 0, g, h + u);
                else {
                  var b = Math.floor(Math.log(m) / Math.LN2);
                  b === 1024 && (b = 1023), n(4503599627370496 * (f = m * Math.pow(2, -b)) >>> 0, g, h + l), n((d << 31 | b + 1023 << 20 | 1048576 * f & 1048575) >>> 0, g, h + u);
                }
              }
            }
            function o(n, l, u, m, g) {
              var h = n(m, g + l), d = n(m, g + u), f = 2 * (d >> 31) + 1, b = d >>> 20 & 2047, c = 4294967296 * (1048575 & d) + h;
              return b === 2047 ? c ? NaN : f * (1 / 0) : b === 0 ? 5e-324 * f * c : f * Math.pow(2, b - 1075) * (c + 4503599627370496);
            }
            s.writeDoubleLE = i.bind(null, e, 0, 4), s.writeDoubleBE = i.bind(null, r, 4, 0), s.readDoubleLE = o.bind(null, t, 0, 4), s.readDoubleBE = o.bind(null, a, 4, 0);
          }(), s;
        }
        function e(s, i, o) {
          i[o] = 255 & s, i[o + 1] = s >>> 8 & 255, i[o + 2] = s >>> 16 & 255, i[o + 3] = s >>> 24;
        }
        function r(s, i, o) {
          i[o] = s >>> 24, i[o + 1] = s >>> 16 & 255, i[o + 2] = s >>> 8 & 255, i[o + 3] = 255 & s;
        }
        function t(s, i) {
          return (s[i] | s[i + 1] << 8 | s[i + 2] << 16 | s[i + 3] << 24) >>> 0;
        }
        function a(s, i) {
          return (s[i] << 24 | s[i + 1] << 16 | s[i + 2] << 8 | s[i + 3]) >>> 0;
        }
        p.exports = R(R);
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
      }, 8626: function(p, R) {
        var e = R, r = e.isAbsolute = function(a) {
          return /^(?:\/|\w+:)/.test(a);
        }, t = e.normalize = function(a) {
          var s = (a = a.replace(/\\/g, "/").replace(/\/{2,}/g, "/")).split("/"), i = r(a), o = "";
          i && (o = s.shift() + "/");
          for (var n = 0; n < s.length; )
            s[n] === ".." ? n > 0 && s[n - 1] !== ".." ? s.splice(--n, 2) : i ? s.splice(n, 1) : ++n : s[n] === "." ? s.splice(n, 1) : ++n;
          return o + s.join("/");
        };
        e.resolve = function(a, s, i) {
          return i || (s = t(s)), r(s) ? s : (i || (a = t(a)), (a = a.replace(/(?:\/|^)[^/]+$/, "")).length ? t(a + "/" + s) : s);
        };
      }, 6662: function(p) {
        p.exports = function(R, e, r) {
          var t = r || 8192, a = t >>> 1, s = null, i = t;
          return function(o) {
            if (o < 1 || o > a)
              return R(o);
            i + o > t && (s = R(t), i = 0);
            var n = e.call(s, i, i += o);
            return 7 & i && (i = 1 + (7 | i)), n;
          };
        };
      }, 4997: function(p, R) {
        var e = R;
        e.length = function(r) {
          for (var t = 0, a = 0, s = 0; s < r.length; ++s)
            (a = r.charCodeAt(s)) < 128 ? t += 1 : a < 2048 ? t += 2 : (64512 & a) == 55296 && (64512 & r.charCodeAt(s + 1)) == 56320 ? (++s, t += 4) : t += 3;
          return t;
        }, e.read = function(r, t, a) {
          if (a - t < 1)
            return "";
          for (var s, i = null, o = [], n = 0; t < a; )
            (s = r[t++]) < 128 ? o[n++] = s : s > 191 && s < 224 ? o[n++] = (31 & s) << 6 | 63 & r[t++] : s > 239 && s < 365 ? (s = ((7 & s) << 18 | (63 & r[t++]) << 12 | (63 & r[t++]) << 6 | 63 & r[t++]) - 65536, o[n++] = 55296 + (s >> 10), o[n++] = 56320 + (1023 & s)) : o[n++] = (15 & s) << 12 | (63 & r[t++]) << 6 | 63 & r[t++], n > 8191 && ((i || (i = [])).push(String.fromCharCode.apply(String, o)), n = 0);
          return i ? (n && i.push(String.fromCharCode.apply(String, o.slice(0, n))), i.join("")) : String.fromCharCode.apply(String, o.slice(0, n));
        }, e.write = function(r, t, a) {
          for (var s, i, o = a, n = 0; n < r.length; ++n)
            (s = r.charCodeAt(n)) < 128 ? t[a++] = s : s < 2048 ? (t[a++] = s >> 6 | 192, t[a++] = 63 & s | 128) : (64512 & s) == 55296 && (64512 & (i = r.charCodeAt(n + 1))) == 56320 ? (s = 65536 + ((1023 & s) << 10) + (1023 & i), ++n, t[a++] = s >> 18 | 240, t[a++] = s >> 12 & 63 | 128, t[a++] = s >> 6 & 63 | 128, t[a++] = 63 & s | 128) : (t[a++] = s >> 12 | 224, t[a++] = s >> 6 & 63 | 128, t[a++] = 63 & s | 128);
          return a - o;
        };
      }, 4188: function(p, R, e) {
        var r, t, a;
        (function(s) {
          if (R != null && typeof R.nodeType != "number")
            p.exports = s();
          else if (e.amdO != null)
            t = [], (a = typeof (r = s) == "function" ? r.apply(R, t) : r) === void 0 || (p.exports = a);
          else {
            var i = s(), o = typeof self < "u" ? self : $.global;
            typeof o.btoa != "function" && (o.btoa = i.btoa), typeof o.atob != "function" && (o.atob = i.atob);
          }
        })(function() {
          var s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          function i(o) {
            this.message = o;
          }
          return i.prototype = new Error(), i.prototype.name = "InvalidCharacterError", { btoa: function(o) {
            for (var n, l, u = String(o), m = 0, g = s, h = ""; u.charAt(0 | m) || (g = "=", m % 1); h += g.charAt(63 & n >> 8 - m % 1 * 8)) {
              if ((l = u.charCodeAt(m += 0.75)) > 255)
                throw new i("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
              n = n << 8 | l;
            }
            return h;
          }, atob: function(o) {
            var n = String(o).replace(/[=]+$/, "");
            if (n.length % 4 == 1)
              throw new i("'atob' failed: The string to be decoded is not correctly encoded.");
            for (var l, u, m = 0, g = 0, h = ""; u = n.charAt(g++); ~u && (l = m % 4 ? 64 * l + u : u, m++ % 4) ? h += String.fromCharCode(255 & l >> (-2 * m & 6)) : 0)
              u = s.indexOf(u);
            return h;
          } };
        });
      }, 9667: function(p, R, e) {
        e.r(R), e.d(R, { addUsersToChatRoom: function() {
          return S;
        }, addUsersToChatRoomAllowlist: function() {
          return Ve;
        }, addUsersToChatRoomWhitelist: function() {
          return $e;
        }, blockChatRoomMember: function() {
          return se;
        }, blockChatRoomMembers: function() {
          return me;
        }, chatRoomBlockMulti: function() {
          return ue;
        }, chatRoomBlockSingle: function() {
          return ae;
        }, createChatRoom: function() {
          return u;
        }, deleteChatRoomSharedFile: function() {
          return B;
        }, destroyChatRoom: function() {
          return m;
        }, disableSendChatRoomMsg: function() {
          return Ue;
        }, enableSendChatRoomMsg: function() {
          return Ke;
        }, fetchChatRoomAnnouncement: function() {
          return ke;
        }, fetchChatRoomSharedFileList: function() {
          return T;
        }, getChatRoomAdmin: function() {
          return E;
        }, getChatRoomAllowlist: function() {
          return Le;
        }, getChatRoomAttributes: function() {
          return _;
        }, getChatRoomBlacklist: function() {
          return fe;
        }, getChatRoomBlacklistNew: function() {
          return Oe;
        }, getChatRoomBlocklist: function() {
          return ce;
        }, getChatRoomDetails: function() {
          return g;
        }, getChatRoomMuteList: function() {
          return V;
        }, getChatRoomMuted: function() {
          return K;
        }, getChatRoomMutelist: function() {
          return ne;
        }, getChatRoomSharedFilelist: function() {
          return W;
        }, getChatRoomWhitelist: function() {
          return Pe;
        }, getChatRooms: function() {
          return l;
        }, isChatRoomWhiteUser: function() {
          return xe;
        }, isInChatRoomAllowlist: function() {
          return ve;
        }, isInChatRoomMutelist: function() {
          return we;
        }, joinChatRoom: function() {
          return v;
        }, leaveChatRoom: function() {
          return x;
        }, listChatRoomMember: function() {
          return O;
        }, listChatRoomMembers: function() {
          return C;
        }, modifyChatRoom: function() {
          return h;
        }, muteChatRoomMember: function() {
          return Z;
        }, quitChatRoom: function() {
          return N;
        }, removeChatRoomAdmin: function() {
          return G;
        }, removeChatRoomAllowlistMember: function() {
          return Qe;
        }, removeChatRoomAttribute: function() {
          return k;
        }, removeChatRoomAttributes: function() {
          return w;
        }, removeChatRoomBlockMulti: function() {
          return Re;
        }, removeChatRoomBlockSingle: function() {
          return ge;
        }, removeChatRoomMember: function() {
          return f;
        }, removeChatRoomMembers: function() {
          return c;
        }, removeChatRoomWhitelistMember: function() {
          return Ze;
        }, removeMultiChatRoomMember: function() {
          return b;
        }, removeMuteChatRoomMember: function() {
          return F;
        }, removeSingleChatRoomMember: function() {
          return d;
        }, rmUsersFromChatRoomWhitelist: function() {
          return Be;
        }, setChatRoomAdmin: function() {
          return P;
        }, setChatRoomAttribute: function() {
          return L;
        }, setChatRoomAttributes: function() {
          return A;
        }, unblockChatRoomMember: function() {
          return Ce;
        }, unblockChatRoomMembers: function() {
          return Ie;
        }, unmuteChatRoomMember: function() {
          return Y;
        }, updateChatRoomAnnouncement: function() {
          return Ne;
        }, uploadChatRoomSharedFile: function() {
          return j;
        } }), e(1539), e(8674), e(8309), e(2526), e(1817), e(2222), e(9753), e(9600), e(2165), e(6992), e(8783), e(3948);
        var r = e(5531), t = e(7252), a = e(4370), s = e(3246), i = e(7360), o = e(1595);
        function n(y) {
          return n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(I) {
            return typeof I;
          } : function(I) {
            return I && typeof Symbol == "function" && I.constructor === Symbol && I !== Symbol.prototype ? "symbol" : typeof I;
          }, n(y);
        }
        function l(y) {
          var I = this;
          if (typeof y.pagenum != "number" || typeof y.pagesize != "number")
            throw Error("Invalid parameter");
          if (!s.XZ.call(this)) {
            var H = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(H);
          }
          var M = { pagenum: y.pagenum || 1, pagesize: y.pagesize || 20 }, D = this.context, J = D.orgName, X = D.appName, oe = D.accessToken, q = { url: this.apiUrl + "/" + J + "/" + X + "/chatrooms", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + oe }, data: M, success: function(z) {
            typeof y.success == "function" && y.success(z);
          }, error: function(z) {
            z.error && z.error_description && I.onError && I.onError({ type: r.E.WEBIM_CONNCTION_LOAD_CHATROOM_ERROR, message: z.error_description, data: z }), typeof y.error == "function" && y.error(z);
          } };
          return i.kg.debug("Call getChatRooms", y), a.hj.call(this, q, o.fI.GET_CHATROOM_LIST);
        }
        function u(y) {
          if (typeof y.name != "string")
            throw Error("Invalid parameter");
          if (!s.XZ.call(this)) {
            var I = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(I);
          }
          var H = { name: y.name, description: y.description, maxusers: y.maxusers, owner: this.user, members: y.members }, M = this.context, D = M.orgName, J = M.appName, X = (M.accessToken, M.jid), oe = { url: "".concat(this.apiUrl, "/").concat(D, "/").concat(J, "/chatrooms?resource=").concat(X.clientResource), dataType: "json", type: "POST", data: JSON.stringify(H), headers: { Authorization: "Bearer " + y.token || 0, "Content-Type": "application/json" }, success: y.success, error: y.error };
          return i.kg.debug("Call createChatRoom", y), a.hj.call(this, oe, o.fI.CREATE_CHATROOM);
        }
        function m(y) {
          if (typeof y.chatRoomId != "string" || y.chatRoomId === "")
            throw Error("Invalid parameter");
          if (!s.XZ.call(this)) {
            var I = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(I);
          }
          var H = this.context, M = H.orgName, D = H.appName, J = (H.accessToken, H.jid), X = { url: "".concat(this.apiUrl, "/").concat(M, "/").concat(D, "/chatrooms/").concat(y.chatRoomId, "?resource=").concat(J.clientResource), dataType: "json", type: "DELETE", headers: { Authorization: "Bearer " + y.token || 0 }, success: y.success, error: y.error };
          return i.kg.debug("Call destroyChatRoom", y), a.hj.call(this, X, o.fI.DESTROY_CHATROOM);
        }
        function g(y) {
          if (typeof y.chatRoomId != "string" || y.chatRoomId === "")
            throw Error("Invalid parameter");
          if (!s.XZ.call(this)) {
            var I = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(I);
          }
          var H = this.context, M = H.orgName, D = H.appName, J = H.accessToken, X = { url: this.apiUrl + "/" + M + "/" + D + "/chatrooms/" + y.chatRoomId, dataType: "json", type: "GET", headers: { Authorization: "Bearer " + J, "Content-Type": "application/json" }, success: y.success, error: y.error };
          return i.kg.debug("Call getChatRoomDetails", y), a.hj.call(this, X, o.fI.GET_CHATROOM_DETAIL);
        }
        function h(y) {
          if (typeof y.chatRoomId != "string" || y.chatRoomId === "")
            throw Error("Invalid parameter");
          if (!s.XZ.call(this)) {
            var I = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(I);
          }
          var H = this.context, M = H.orgName, D = H.appName, J = H.accessToken, X = H.jid, oe = y.chatRoomId, q = { groupname: y.chatRoomName, description: y.description, maxusers: y.maxusers }, z = { url: "".concat(this.apiUrl, "/").concat(M, "/").concat(D, "/chatrooms/").concat(oe, "?resource=").concat(X.clientResource), type: "PUT", data: JSON.stringify(q), dataType: "json", headers: { Authorization: "Bearer " + J, "Content-Type": "application/json" }, success: y.success, error: y.error };
          return i.kg.debug("Call modifyChatRoom", y), a.hj.call(this, z, o.fI.MODIFY_CHATROOM);
        }
        function d(y) {
          if (typeof y.chatRoomId != "string" || y.chatRoomId === "" || typeof y.username != "string")
            throw Error("Invalid parameter");
          if (!s.XZ.call(this)) {
            var I = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(I);
          }
          var H = this.context, M = H.orgName, D = H.appName, J = H.accessToken, X = H.jid, oe = y.chatRoomId, q = y.username, z = { url: "".concat(this.apiUrl, "/").concat(M, "/").concat(D, "/chatrooms/").concat(oe, "/users/").concat(q, "?resource=").concat(X.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + J, "Content-Type": "application/json" }, success: y.success, error: y.error };
          return i.kg.debug("Call removeChatRoomMember", y), a.hj.call(this, z, o.fI.REMOVE_CHATROOM_MEMBER);
        }
        var f = d;
        function b(y) {
          if (typeof y.chatRoomId != "string" || y.chatRoomId === "" || !Array.isArray(y.users))
            throw Error("Invalid parameter");
          if (!s.XZ.call(this)) {
            var I = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(I);
          }
          var H = y.chatRoomId, M = y.users.join(","), D = this.context, J = D.orgName, X = D.appName, oe = D.accessToken, q = D.jid, z = { url: "".concat(this.apiUrl, "/").concat(J, "/").concat(X, "/chatrooms/").concat(H, "/users/").concat(M, "?resource=").concat(q.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + oe, "Content-Type": "application/json" }, success: y.success, error: y.error };
          return i.kg.debug("Call removeChatRoomMembers", y), a.hj.call(this, z, o.fI.MULTI_REMOVE_CHATROOM_MEMBER);
        }
        var c = b;
        function S(y) {
          if (typeof y.chatRoomId != "string" || y.chatRoomId === "" || !Array.isArray(y.users))
            throw Error("Invalid parameter");
          if (!s.XZ.call(this)) {
            var I = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(I);
          }
          var H = y.chatRoomId, M = { usernames: y.users }, D = this.context, J = D.orgName, X = D.appName, oe = D.accessToken, q = D.jid, z = { url: "".concat(this.apiUrl, "/").concat(J, "/").concat(X, "/chatrooms/").concat(H, "/users?resource=").concat(q.clientResource), type: "POST", data: JSON.stringify(M), dataType: "json", headers: { Authorization: "Bearer " + oe, "Content-Type": "application/json" }, success: y.success, error: y.error };
          return i.kg.debug("Call addUsersToChatRoom", y), a.hj.call(this, z, o.fI.ADD_USERS_TO_CHATROOM);
        }
        function v(y) {
          if (typeof y.roomId != "string" || y.roomId === "")
            throw Error("Invalid parameter");
          if (!s.XZ.call(this)) {
            var I = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(I);
          }
          return i.kg.debug("Call joinChatRoom", y), this.mSync.handleChatRoom(y, "join");
        }
        function N(y) {
          if (typeof y.roomId != "string" || y.roomId === "")
            throw Error("Invalid parameter");
          if (!s.XZ.call(this)) {
            var I = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(I);
          }
          return i.kg.debug("Call leaveChatRoom", y), this.mSync.handleChatRoom(y, "leave");
        }
        var x = N;
        function O(y) {
          if (typeof y.chatRoomId != "string" || y.chatRoomId === "")
            throw Error('Invalid parameter: "chatRoomId"');
          if (isNaN(y.pageNum) || y.pageNum <= 0)
            throw Error('The parameter "pageNum" should be a positive number');
          if (isNaN(y.pageSize) || y.pageSize <= 0)
            throw Error('The parameter "pageSize" should be a positive number');
          if (!s.XZ.call(this)) {
            var I = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(I);
          }
          var H = { pagenum: y.pageNum, pagesize: y.pageSize }, M = this.context, D = M.orgName, J = M.appName, X = M.accessToken, oe = { url: this.apiUrl + "/" + D + "/" + J + "/chatrooms/" + y.chatRoomId + "/users", dataType: "json", type: "GET", data: H, headers: { Authorization: "Bearer " + X, "Content-Type": "application/json" }, success: y.success, error: y.error };
          return i.kg.debug("Call listChatRoomMembers", y), a.hj.call(this, oe, o.fI.LIST_CHATROOM_MEMBERS);
        }
        var C = O;
        function E(y) {
          if (typeof y.chatRoomId != "string" || y.chatRoomId === "")
            throw Error('Invalid parameter: "chatRoomId"');
          if (!s.XZ.call(this)) {
            var I = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(I);
          }
          var H = this.context, M = H.orgName, D = H.appName, J = H.accessToken, X = y.chatRoomId, oe = { url: this.apiUrl + "/" + M + "/" + D + "/chatrooms/" + X + "/admin", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + J, "Content-Type": "application/json" }, success: y.success, error: y.error };
          return i.kg.debug("Call getChatRoomAdmin", y), a.hj.call(this, oe, o.fI.GET_CHATROOM_ADMIN);
        }
        function P(y) {
          if (typeof y.chatRoomId != "string" || y.chatRoomId === "")
            throw Error('Invalid parameter: "chatRoomId"');
          if (typeof y.username != "string" || y.username === "")
            throw Error('Invalid parameter: "username"');
          if (!s.XZ.call(this)) {
            var I = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(I);
          }
          var H = this.context, M = H.orgName, D = H.appName, J = H.accessToken, X = H.jid, oe = y.chatRoomId, q = { newadmin: y.username }, z = { url: "".concat(this.apiUrl, "/").concat(M, "/").concat(D, "/chatrooms/").concat(oe, "/admin?resource=").concat(X.clientResource), type: "POST", dataType: "json", data: JSON.stringify(q), headers: { Authorization: "Bearer " + J, "Content-Type": "application/json" }, success: y.success, error: y.error };
          return i.kg.debug("Call setChatRoomAdmin", y), a.hj.call(this, z, o.fI.SET_CHATROOM_ADMIN);
        }
        function G(y) {
          if (typeof y.chatRoomId != "string" || y.chatRoomId === "")
            throw Error('Invalid parameter: "chatRoomId"');
          if (typeof y.username != "string" || y.username === "")
            throw Error('Invalid parameter: "username"');
          if (!s.XZ.call(this)) {
            var I = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(I);
          }
          var H = this.context, M = H.orgName, D = H.appName, J = H.accessToken, X = H.jid, oe = y.chatRoomId, q = y.username, z = { url: "".concat(this.apiUrl, "/").concat(M, "/").concat(D, "/chatrooms/").concat(oe, "/admin/").concat(q, "?resource=").concat(X.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + J, "Content-Type": "application/json" }, success: y.success, error: y.error };
          return i.kg.debug("Call removeChatRoomAdmin", y), a.hj.call(this, z, o.fI.REMOVE_CHATROOM_ADMIN);
        }
        function Z(y) {
          if (typeof y.chatRoomId != "string" || y.chatRoomId === "")
            throw Error('Invalid parameter: "groupId"');
          if (typeof y.username != "string" || y.username === "")
            throw Error('Invalid parameter: "username"');
          if (typeof y.muteDuration != "number")
            throw Error('Invalid parameter: "muteDuration"');
          if (!s.XZ.call(this)) {
            var I = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(I);
          }
          var H = this.context, M = H.orgName, D = H.appName, J = H.accessToken, X = H.jid, oe = y.chatRoomId, q = { usernames: [y.username], mute_duration: y.muteDuration }, z = { url: "".concat(this.apiUrl, "/").concat(M, "/").concat(D, "/chatrooms/").concat(oe, "/mute?resource=").concat(X.clientResource), dataType: "json", type: "POST", headers: { Authorization: "Bearer " + J, "Content-Type": "application/json" }, data: JSON.stringify(q), success: y.success, error: y.error };
          return i.kg.debug("Call muteChatRoomMember", y), a.hj.call(this, z, o.fI.MUTE_CHATROOM_MEMBER);
        }
        function F(y) {
          if (typeof y.chatRoomId != "string" || y.chatRoomId === "")
            throw Error('Invalid parameter: "chatRoomId"');
          if (typeof y.username != "string" || y.username === "")
            throw Error('Invalid parameter: "username"');
          if (!s.XZ.call(this)) {
            var I = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(I);
          }
          var H = this.context, M = H.orgName, D = H.appName, J = H.accessToken, X = H.jid, oe = y.chatRoomId, q = y.username, z = { url: "".concat(this.apiUrl, "/").concat(M, "/").concat(D, "/chatrooms/").concat(oe, "/mute/").concat(q, "?resource=").concat(X.clientResource), dataType: "json", type: "DELETE", headers: { Authorization: "Bearer " + J, "Content-Type": "application/json" }, success: y.success, error: y.error };
          return i.kg.debug("Call unmuteChatRoomMember", y), a.hj.call(this, z, o.fI.REMOVE_MUTE_CHATROOM_MEMBER);
        }
        var Y = F;
        function K(y) {
          if (typeof y.chatRoomId != "string" || y.chatRoomId === "")
            throw Error('Invalid parameter: "chatRoomId"');
          if (!s.XZ.call(this)) {
            var I = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(I);
          }
          var H = this.context, M = H.orgName, D = H.appName, J = H.accessToken, X = y.chatRoomId, oe = { url: this.apiUrl + "/" + M + "/" + D + "/chatrooms/" + X + "/mute", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + J, "Content-Type": "application/json" }, success: y.success, error: y.error };
          return i.kg.debug("Call getChatRoomMutelist", y), a.hj.call(this, oe, o.fI.GET_MUTE_CHATROOM_MEMBERS);
        }
        var V = K, ne = K;
        function ae(y) {
          if (typeof y.chatRoomId != "string" || y.chatRoomId === "")
            throw Error('Invalid parameter: "chatRoomId"');
          if (typeof y.username != "string" || y.username === "")
            throw Error('Invalid parameter: "username"');
          if (!s.XZ.call(this)) {
            var I = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(I);
          }
          var H = this.context, M = H.orgName, D = H.appName, J = H.accessToken, X = H.jid, oe = y.chatRoomId, q = y.username, z = { url: "".concat(this.apiUrl, "/").concat(M, "/").concat(D, "/chatrooms/").concat(oe, "/blocks/users/").concat(q, "?resource=").concat(X.clientResource), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + J, "Content-Type": "application/json" }, success: y.success, error: y.error };
          return i.kg.debug("Call blockChatRoomMember", y), a.hj.call(this, z, o.fI.SET_CHATROOM_MEMBER_TO_BLACK);
        }
        var se = ae;
        function ue(y) {
          if (typeof y.chatRoomId != "string" || y.chatRoomId === "")
            throw Error('Invalid parameter: "chatRoomId"');
          if (!Array.isArray(y.usernames))
            throw Error('Invalid parameter: "usernames"');
          if (!s.XZ.call(this)) {
            var I = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(I);
          }
          var H = this.context, M = H.orgName, D = H.appName, J = H.accessToken, X = H.jid, oe = y.chatRoomId, q = { usernames: y.usernames }, z = { url: "".concat(this.apiUrl, "/").concat(M, "/").concat(D, "/chatrooms/").concat(oe, "/blocks/users?resource=").concat(X.clientResource), data: JSON.stringify(q), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + J, "Content-Type": "application/json" }, success: y.success, error: y.error };
          return i.kg.debug("Chat blockChatRoomMembers:", z), a.hj.call(this, z, o.fI.MULTI_SET_CHATROOM_MEMBER_TO_BLACK);
        }
        var me = ue;
        function ge(y) {
          if (typeof y.chatRoomId != "string" || y.chatRoomId === "")
            throw Error('Invalid parameter: "chatRoomId"');
          if (typeof y.username != "string" || y.username === "")
            throw Error('Invalid parameter: "username"');
          if (!s.XZ.call(this)) {
            var I = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(I);
          }
          var H = this.context, M = H.orgName, D = H.appName, J = H.accessToken, X = H.jid, oe = y.chatRoomId, q = y.username, z = { url: "".concat(this.apiUrl, "/").concat(M, "/").concat(D, "/chatrooms/").concat(oe, "/blocks/users/").concat(q, "?resource=").concat(X.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + J, "Content-Type": "application/json" }, success: y.success, error: y.error };
          return i.kg.debug("Call unblockChatRoomMember", y), a.hj.call(this, z, o.fI.REMOVE_CHATROOM_MEMBER_BLACK);
        }
        var Ce = ge;
        function Re(y) {
          if (typeof y.chatRoomId != "string" || y.chatRoomId === "")
            throw Error('Invalid parameter: "chatRoomId"');
          if (!Array.isArray(y.usernames))
            throw Error('Invalid parameter: "usernames"');
          if (!s.XZ.call(this)) {
            var I = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(I);
          }
          var H = this.context, M = H.orgName, D = H.appName, J = H.accessToken, X = H.jid, oe = y.chatRoomId, q = y.usernames.join(","), z = { url: "".concat(this.apiUrl, "/").concat(M, "/").concat(D, "/chatrooms/").concat(oe, "/blocks/users/").concat(q, "?resource=").concat(X.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + J, "Content-Type": "application/json" }, success: y.success, error: y.error };
          return i.kg.debug("Call unblockChatRoomMembers", y), a.hj.call(this, z, o.fI.MULTI_REMOVE_CHATROOM_MEMBER_BLACK);
        }
        var Ie = Re;
        function Oe(y) {
          if (typeof y.chatRoomId != "string" || y.chatRoomId === "")
            throw Error('Invalid parameter: "chatRoomId"');
          if (!s.XZ.call(this)) {
            var I = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(I);
          }
          var H = this.context, M = H.orgName, D = H.appName, J = H.accessToken, X = y.chatRoomId, oe = { url: this.apiUrl + "/" + M + "/" + D + "/chatrooms/" + X + "/blocks/users", type: "GET", dataType: "json", headers: { Authorization: "Bearer " + J, "Content-Type": "application/json" }, success: y.success, error: y.error };
          return i.kg.debug("Call getChatRoomBlocklist", y), a.hj.call(this, oe, o.fI.GET_CHATROOM_BLOCK_MEMBERS);
        }
        var fe = Oe, ce = Oe;
        function Ue(y) {
          if (typeof y.chatRoomId != "string" || y.chatRoomId === "")
            throw Error('Invalid parameter: "chatRoomId"');
          if (!s.XZ.call(this)) {
            var I = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(I);
          }
          var H = this.context, M = H.orgName, D = H.appName, J = H.accessToken, X = H.jid, oe = y.chatRoomId, q = { url: "".concat(this.apiUrl, "/").concat(M, "/").concat(D, "/chatrooms/").concat(oe, "/ban?resource=").concat(X.clientResource), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + J, "Content-Type": "application/json" }, success: y.success, error: y.error };
          return i.kg.debug("Call disableSendChatRoomMsg", y), a.hj.call(this, q, o.fI.DISABLED_CHATROOM_SEND_MSG);
        }
        function Ke(y) {
          if (typeof y.chatRoomId != "string" || y.chatRoomId === "")
            throw Error('Invalid parameter: "chatRoomId"');
          if (!s.XZ.call(this)) {
            var I = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(I);
          }
          var H = this.context, M = H.orgName, D = H.appName, J = H.accessToken, X = H.jid, oe = y.chatRoomId, q = { url: "".concat(this.apiUrl, "/").concat(M, "/").concat(D, "/chatrooms/").concat(oe, "/ban?resource=").concat(X.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + J, "Content-Type": "application/json" }, success: y.success, error: y.error };
          return i.kg.debug("Call enableSendChatRoomMsg", y), a.hj.call(this, q, o.fI.ENABLE_CHATROOM_SEND_MSG);
        }
        function $e(y) {
          if (typeof y.chatRoomId != "string" || y.chatRoomId === "")
            throw Error('Invalid parameter: "chatRoomId"');
          if (!Array.isArray(y.users))
            throw Error('Invalid parameter: "users"');
          if (!s.XZ.call(this)) {
            var I = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(I);
          }
          var H = this.context, M = H.orgName, D = H.appName, J = H.accessToken, X = H.jid, oe = y.chatRoomId, q = { usernames: y.users }, z = { url: "".concat(this.apiUrl, "/").concat(M, "/").concat(D, "/chatrooms/").concat(oe, "/white/users?resource=").concat(X.clientResource), type: "POST", data: JSON.stringify(q), dataType: "json", headers: { Authorization: "Bearer " + J, "Content-Type": "application/json" }, success: y.success, error: y.error };
          return i.kg.debug("Call addUsersToChatRoomWhitelist", y), a.hj.call(this, z, o.fI.ADD_USERS_TO_CHATROOM);
        }
        var Ve = $e;
        function Be(y) {
          if (typeof y.chatRoomId != "string" || y.chatRoomId === "")
            throw Error('Invalid parameter: "chatRoomId"');
          if (typeof y.userName != "string" || y.userName === "")
            throw Error('Invalid parameter: "userName"');
          if (!s.XZ.call(this)) {
            var I = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(I);
          }
          var H = this.context, M = H.orgName, D = H.appName, J = H.accessToken, X = H.jid, oe = y.chatRoomId, q = { url: "".concat(this.apiUrl, "/").concat(M, "/").concat(D, "/chatrooms/").concat(oe, "/white/users/").concat(y.userName, "?resource=").concat(X.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + J, "Content-Type": "application/json" }, success: y.success, error: y.error };
          return i.kg.debug("Call removeChatRoomAllowlistMember", y), a.hj.call(this, q, o.fI.REMOVE_CHATROOM_WHITE_USERS);
        }
        var Ze = Be, Qe = Be;
        function Pe(y) {
          if (typeof y.chatRoomId != "string" || y.chatRoomId === "")
            throw Error('Invalid parameter: "chatRoomId"');
          if (!s.XZ.call(this)) {
            var I = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(I);
          }
          var H = this.context, M = H.orgName, D = H.appName, J = H.accessToken, X = y.chatRoomId, oe = { url: this.apiUrl + "/" + M + "/" + D + "/chatrooms/" + X + "/white/users", type: "GET", dataType: "json", headers: { Authorization: "Bearer " + J, "Content-Type": "application/json" }, success: y.success, error: y.error };
          return i.kg.debug("Call getChatRoomAllowlist", y), a.hj.call(this, oe, o.fI.GET_CHATROOM_WHITE_USERS);
        }
        var Le = Pe;
        function xe(y) {
          if (typeof y.chatRoomId != "string" || y.chatRoomId === "")
            throw Error('Invalid parameter: "chatRoomId"');
          if (typeof y.userName != "string" || y.userName === "")
            throw Error('Invalid parameter: "userName"');
          if (!s.XZ.call(this)) {
            var I = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(I);
          }
          var H = this.context, M = H.orgName, D = H.appName, J = H.accessToken, X = y.chatRoomId, oe = { url: this.apiUrl + "/" + M + "/" + D + "/chatrooms/" + X + "/white/users/" + y.userName, type: "GET", dataType: "json", headers: { Authorization: "Bearer " + J, "Content-Type": "application/json" }, success: y.success, error: y.error };
          return i.kg.debug("Call isInChatRoomAllowlist", y), a.hj.call(this, oe, o.fI.CHECK_CHATROOM_WHITE_USER);
        }
        var ve = xe;
        function we(y) {
          if (typeof y.chatRoomId != "string" || y.chatRoomId === "")
            throw Error('Invalid parameter: "chatRoomId"');
          if (!s.XZ.call(this)) {
            var I = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(I);
          }
          var H = this.context, M = H.orgName, D = H.appName, J = H.accessToken, X = H.userId, oe = { url: this.apiUrl + "/" + M + "/" + D + "/sdk/chatrooms/" + y.chatRoomId + "/mute/" + X, dataType: "json", type: "GET", headers: { Authorization: "Bearer " + J } };
          return i.kg.debug("Call isInChatRoomMutelist", y), a.hj.call(this, oe).then(function(q) {
            return q.data;
          });
        }
        function ke(y) {
          if (typeof y.roomId != "string" || y.roomId === "")
            throw Error('Invalid parameter: "roomId"');
          if (!s.XZ.call(this)) {
            var I = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(I);
          }
          var H = this.context, M = H.orgName, D = H.appName, J = H.accessToken, X = y.roomId, oe = { url: "".concat(this.apiUrl, "/").concat(M, "/").concat(D, "/chatrooms/").concat(X, "/announcement"), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + J, "Content-Type": "application/json" }, success: y.success, error: y.error };
          return i.kg.debug("Call fetchChatRoomAnnouncement", y), a.hj.call(this, oe, o.fI.GET_CHATROOM_ANN);
        }
        function Ne(y) {
          if (typeof y.roomId != "string" || y.roomId === "")
            throw Error('Invalid parameter: "roomId"');
          if (typeof y.announcement != "string")
            throw Error('Invalid parameter: "announcement"');
          if (!s.XZ.call(this)) {
            var I = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(I);
          }
          var H = this.context, M = H.orgName, D = H.appName, J = H.accessToken, X = H.jid, oe = y.roomId, q = { announcement: y.announcement }, z = { url: "".concat(this.apiUrl, "/").concat(M, "/").concat(D, "/chatrooms/").concat(oe, "/announcement?resource=").concat(X.clientResource), type: "POST", dataType: "json", data: JSON.stringify(q), headers: { Authorization: "Bearer " + J, "Content-Type": "application/json" }, success: y.success, error: y.error };
          return i.kg.debug("Call updateChatRoomAnnouncement:", y), a.hj.call(this, z, o.fI.UPDATE_CHATROOM_ANN);
        }
        function j(y) {
          if (typeof y.roomId != "string" || y.roomId === "")
            throw Error('Invalid parameter: "roomId"');
          if (n(y.file) !== "object")
            throw Error('Invalid parameter: "file"');
          if (s.XZ.call(this)) {
            var I = this.context, H = I.orgName, M = I.appName, D = I.accessToken, J = I.jid, X = y.roomId;
            a.cT.call(this, { uploadUrl: "".concat(this.apiUrl, "/").concat(H, "/").concat(M, "/chatrooms/").concat(X, "/share_files?resource=").concat(J.clientResource), onFileUploadProgress: y.onFileUploadProgress, onFileUploadComplete: y.onFileUploadComplete, onFileUploadError: y.onFileUploadError, onFileUploadCanceled: y.onFileUploadCanceled, accessToken: D, apiUrl: this.apiUrl, file: y.file, appKey: this.context.appKey }, o.fI.UPLOAD_CHATROOM_FILE), i.kg.debug("Call uploadChatRoomSharedFile", y);
          }
        }
        function B(y) {
          if (typeof y.roomId != "string" || y.roomId === "")
            throw Error('Invalid parameter: "roomId"');
          if (typeof y.fileId != "string" || y.fileId === "")
            throw Error('Invalid parameter: "fileId"');
          if (!s.XZ.call(this)) {
            var I = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(I);
          }
          var H = this.context, M = H.orgName, D = H.appName, J = H.accessToken, X = H.jid, oe = y.roomId, q = y.fileId, z = { url: "".concat(this.apiUrl, "/").concat(M, "/").concat(D, "/chatrooms/").concat(oe, "/share_files/").concat(q, "?resource=").concat(X.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + J, "Content-Type": "application/json" }, success: y.success, error: y.error };
          return i.kg.debug("Call deleteChatRoomSharedFile", y), a.hj.call(this, z, o.fI.DELETE_CHATROOM_FILE);
        }
        function T(y) {
          if (typeof y.roomId != "string" || y.roomId === "")
            throw Error('Invalid parameter: "roomId"');
          if (!s.XZ.call(this)) {
            var I = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(I);
          }
          var H = this.context, M = H.orgName, D = H.appName, J = H.accessToken, X = y.roomId, oe = { url: "".concat(this.apiUrl, "/").concat(M, "/").concat(D, "/chatrooms/").concat(X, "/share_files"), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + J, "Content-Type": "application/json", accept: "application/json" }, success: y.success, error: y.error };
          return i.kg.debug("Call fetchChatRoomSharedFileList", y), a.hj.call(this, oe, o.fI.GET_CHATROOM_FILES);
        }
        var W = T;
        function _(y) {
          if (typeof y.chatRoomId != "string" || y.chatRoomId === "")
            throw Error("Invalid parameter chatRoomId: " + y.chatRoomId);
          if (y.attributeKeys && !Array.isArray(y.attributeKeys))
            throw Error('"Invalid parameter attributeKeys": ' + y.attributeKeys);
          if (!s.XZ.call(this)) {
            var I = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(I);
          }
          var H = this.context, M = H.orgName, D = H.appName, J = H.accessToken, X = (H.jid, y.chatRoomId), oe = { keys: y.attributeKeys }, q = { url: "".concat(this.apiUrl, "/").concat(M, "/").concat(D, "/metadata/chatroom/").concat(X), type: "POST", dataType: "json", data: JSON.stringify(oe), headers: { Authorization: "Bearer " + J, "Content-Type": "application/json" } };
          return i.kg.debug("Call getChatRoomAttributes:", y), a.hj.call(this, q, o.fI.GET_CHATROOM_ATTR).then(function(z) {
            return { data: z.data, type: z.type };
          });
        }
        function A(y) {
          if (typeof y.chatRoomId != "string" || y.chatRoomId === "")
            throw Error("Invalid parameter chatRoomId: " + y.chatRoomId);
          if (n(y.attributes) !== "object")
            throw Error("Invalid parameter attributes: " + y.attributes);
          if (!s.XZ.call(this)) {
            var I = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(I);
          }
          var H = this.context, M = H.orgName, D = H.appName, J = H.accessToken, X = H.userId, oe = y.chatRoomId, q = y.attributes, z = y.autoDelete, te = z === void 0 || z, re = y.isForced ? "/forced" : "", Ae = { metaData: q, autoDelete: te ? "DELETE" : "NO_DELETE" }, We = { url: "".concat(this.apiUrl, "/").concat(M, "/").concat(D, "/metadata/chatroom/").concat(oe, "/user/").concat(X) + re, type: "PUT", dataType: "json", data: JSON.stringify(Ae), headers: { Authorization: "Bearer " + J, "Content-Type": "application/json" } };
          return i.kg.debug("Call setChatRoomAttributes:", y), a.hj.call(this, We, o.fI.SET_CHATROOM_ATTR).then(function(Te) {
            return (0, s._W)(Te);
          });
        }
        function L(y) {
          var I;
          if (typeof y.chatRoomId != "string" || y.chatRoomId === "")
            throw Error("Invalid parameter chatRoomId: " + y.chatRoomId);
          if (typeof y.attributeKey != "string" || y.attributeKey === "")
            throw Error("Invalid parameter attributeKey: " + y.attributeKey);
          if (typeof y.attributeValue != "string" || y.attributeValue === "")
            throw Error("Invalid parameter attributeValue: " + y.attributeValue);
          if (!s.XZ.call(this)) {
            var H = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(H);
          }
          var M = this.context, D = M.orgName, J = M.appName, X = M.accessToken, oe = M.userId, q = y.chatRoomId, z = y.attributeKey, te = y.attributeValue, re = y.autoDelete, Ae = re === void 0 || re, We = y.isForced ? "/forced" : "", Te = { metaData: (I = {}, I[z] = te, I), autoDelete: Ae ? "DELETE" : "NO_DELETE" }, je = { url: "".concat(this.apiUrl, "/").concat(D, "/").concat(J, "/metadata/chatroom/").concat(q, "/user/").concat(oe) + We, type: "PUT", dataType: "json", data: JSON.stringify(Te), headers: { Authorization: "Bearer " + X, "Content-Type": "application/json" } };
          return i.kg.debug("Call setChatRoomAttribute:", y), a.hj.call(this, je, o.fI.SET_CHATROOM_ATTR).then(function(ie) {
            var Je = (0, s.H7)(ie);
            if (Je)
              throw Je;
          });
        }
        function w(y) {
          if (typeof y.chatRoomId != "string" || y.chatRoomId === "")
            throw Error("Invalid parameter chatRoomId: " + y.chatRoomId);
          if (!Array.isArray(y.attributeKeys))
            throw Error('"Invalid parameter attributes": ' + y.attributeKeys);
          if (!s.XZ.call(this)) {
            var I = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(I);
          }
          var H = this.context, M = H.orgName, D = H.appName, J = H.accessToken, X = H.userId, oe = y.chatRoomId, q = y.attributeKeys, z = y.isForced ? "/forced" : "", te = { keys: q }, re = { url: "".concat(this.apiUrl, "/").concat(M, "/").concat(D, "/metadata/chatroom/").concat(oe, "/user/").concat(X) + z, type: "DELETE", dataType: "json", data: JSON.stringify(te), headers: { Authorization: "Bearer " + J, "Content-Type": "application/json" } };
          return i.kg.debug("Call removeChatRoomAttributes:", y), a.hj.call(this, re, o.fI.DELETE_CHATROOM_ATTR).then(function(Ae) {
            return (0, s._W)(Ae);
          });
        }
        function k(y) {
          if (typeof y.chatRoomId != "string" || y.chatRoomId === "")
            throw Error("Invalid parameter chatRoomId: " + y.chatRoomId);
          if (typeof y.attributeKey != "string" || y.attributeKey === "")
            throw Error('"Invalid parameter attributeKey": ' + y.attributeKey);
          if (!s.XZ.call(this)) {
            var I = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(I);
          }
          var H = this.context, M = H.orgName, D = H.appName, J = H.accessToken, X = H.userId, oe = y.chatRoomId, q = y.attributeKey, z = y.isForced ? "/forced" : "", te = { keys: [q] }, re = { url: "".concat(this.apiUrl, "/").concat(M, "/").concat(D, "/metadata/chatroom/").concat(oe, "/user/").concat(X) + z, type: "DELETE", dataType: "json", data: JSON.stringify(te), headers: { Authorization: "Bearer " + J, "Content-Type": "application/json" } };
          return i.kg.debug("Call removeChatRoomAttribute:", y), a.hj.call(this, re, o.fI.DELETE_CHATROOM_ATTR).then(function(Ae) {
            var We = (0, s.H7)(Ae);
            if (We)
              throw We;
          });
        }
      }, 4363: function(p, R, e) {
        e.d(R, { w: function() {
          return a;
        } }), e(9601), e(2772);
        var r = e(7360), t = function() {
          return t = Object.assign || function(s) {
            for (var i, o = 1, n = arguments.length; o < n; o++)
              for (var l in i = arguments[o])
                Object.prototype.hasOwnProperty.call(i, l) && (s[l] = i[l]);
            return s;
          }, t.apply(this, arguments);
        };
        function a(s) {
          var i, o, n, l = s.id, u = s.payload, m = s.timestamp, g = s.to, h = u.bodies && u.bodies.length > 0 ? u.bodies[0] : {}, d = {}, f = {}, b = u.type ? u.type : g.indexOf("@conference.easemob.com") > -1 ? "groupChat" : "singleChat";
          switch (b = b === "chat" ? "singleChat" : b, h.type) {
            case "txt":
              var c = (i = u == null ? void 0 : u.meta) === null || i === void 0 ? void 0 : i.edit_msg;
              if (d = { id: l, type: "txt", chatType: b, msg: h.msg || "", to: u.to || "", from: u.from, time: m, ext: u.ext }, c) {
                var S = c.edit_time, v = c.operator, N = c.count;
                d.modifiedInfo = { operationTime: S, operatorId: v, operationCount: N };
              }
              break;
            case "img":
              d = { id: l, type: "img", chatType: b, to: u.to, from: u.from, time: m, ext: u.ext, width: ((o = h.size) === null || o === void 0 ? void 0 : o.width) || 0, height: ((n = h.size) === null || n === void 0 ? void 0 : n.height) || 0, secret: h.secret || "", url: (h == null ? void 0 : h.url) || "", file_length: h.file_length || 0, file: {} };
              break;
            case "video":
              d = { id: l, type: "video", chatType: b, from: u.from, to: u.to, url: (h == null ? void 0 : h.url) || "", secret: h.secret || "", filename: h.filename, length: h.length || 0, file: {}, file_length: h.file_length || 0, filetype: u.ext.file_type || "", ext: u.ext, time: m };
              break;
            case "loc":
              d = { id: l, type: "loc", chatType: b, from: u.from, to: u.to, buildingName: h.buildingName || "", addr: h.addr, lat: h.lat, lng: h.lng, ext: u.ext, time: m };
              break;
            case "audio":
              d = { id: l, type: "audio", chatType: b, from: u.from, to: u.to, secret: h.secret || "", ext: u.ext, time: m, url: (h == null ? void 0 : h.url) || "", file: {}, filename: h.filename, length: h.length || 0, file_length: h.file_length || 0, filetype: u.ext.file_type || "" };
              break;
            case "file":
              d = { id: l, type: "file", chatType: b, from: u.from, to: u.to, ext: u.ext, time: m, url: (h == null ? void 0 : h.url) || "", secret: h.secret || "", file: {}, filename: h.filename || "", file_length: h.file_length || 0, filetype: u.ext.file_type || "" };
              break;
            case "cmd":
              d = { id: l, type: "cmd", chatType: b, from: u.from, to: u.to, ext: u.ext, time: m, action: h.action || "" };
              break;
            case "custom":
              d = { id: l, type: "custom", chatType: b, from: u.from, to: u.to, ext: u.ext, time: m, customEvent: h.customEvent || "", customExts: h.customExts || "" };
              break;
            case "combine":
              d = { id: l, type: "combine", chatType: b, msg: h.msg || "", to: u.to || "", from: u.from, time: m, ext: u.ext, title: h.title || "", summary: h.summary || "", url: (h == null ? void 0 : h.url) || "", compatibleText: h.text, combineLevel: h.combineLevel || 0, secret: h.secret || "", filename: h.filename || "", file_length: h.file_length || 0 };
              break;
            default:
              r.kg.error("unexpected message: ".concat(s));
          }
          if (u.msgConfig && (f.msgConfig = u.msgConfig), u == null ? void 0 : u.meta) {
            var x = u.meta;
            x.thread && (f.chatThread = { messageId: x.thread.msg_parent_id, parentId: x.thread.muc_parent_id, chatThreadName: x.thread.thread_name }), x.reactions && (f.reactions = x.reactions), x.translations && (f.translations = x.translations);
          }
          return t(t({}, d), f);
        }
      }, 2856: function(p, R, e) {
        e.r(R), e.d(R, { acceptGroupInvite: function() {
          return Ie;
        }, acceptGroupJoinRequest: function() {
          return me;
        }, addUsersToGroupAllowlist: function() {
          return I;
        }, addUsersToGroupWhitelist: function() {
          return y;
        }, agreeInviteIntoGroup: function() {
          return Re;
        }, agreeJoinGroup: function() {
          return ue;
        }, blockGroup: function() {
          return m;
        }, blockGroupMember: function() {
          return we;
        }, blockGroupMembers: function() {
          return Ne;
        }, blockGroupMessages: function() {
          return g;
        }, changeGroupOwner: function() {
          return S;
        }, changeOwner: function() {
          return c;
        }, createGroup: function() {
          return u;
        }, createGroupNew: function() {
          return l;
        }, deleteGroupSharedFile: function() {
          return je;
        }, destroyGroup: function() {
          return Y;
        }, disableSendGroupMsg: function() {
          return w;
        }, dissolveGroup: function() {
          return F;
        }, downloadGroupSharedFile: function() {
          return De;
        }, enableSendGroupMsg: function() {
          return k;
        }, fetchGroupAnnouncement: function() {
          return Ae;
        }, fetchGroupSharedFileList: function() {
          return ie;
        }, getGroup: function() {
          return f;
        }, getGroupAdmin: function() {
          return C;
        }, getGroupAllowlist: function() {
          return X;
        }, getGroupBlacklist: function() {
          return A;
        }, getGroupBlacklistNew: function() {
          return _;
        }, getGroupBlocklist: function() {
          return L;
        }, getGroupInfo: function() {
          return v;
        }, getGroupMemberAttributes: function() {
          return at;
        }, getGroupMembersAttributes: function() {
          return st;
        }, getGroupMsgReadUser: function() {
          return re;
        }, getGroupMuteList: function() {
          return Le;
        }, getGroupMutelist: function() {
          return xe;
        }, getGroupSharedFilelist: function() {
          return Je;
        }, getGroupWhitelist: function() {
          return J;
        }, getJoinedGroups: function() {
          return b;
        }, getMuted: function() {
          return Pe;
        }, getPublicGroups: function() {
          return d;
        }, groupBlockMulti: function() {
          return ke;
        }, groupBlockSingle: function() {
          return ve;
        }, inviteToGroup: function() {
          return ne;
        }, inviteUsersToGroup: function() {
          return ae;
        }, isGroupWhiteUser: function() {
          return oe;
        }, isInGroupAllowlist: function() {
          return z;
        }, isInGroupMutelist: function() {
          return te;
        }, isInGroupWhiteList: function() {
          return q;
        }, joinGroup: function() {
          return se;
        }, leaveGroup: function() {
          return V;
        }, listGroupMember: function() {
          return x;
        }, listGroupMembers: function() {
          return O;
        }, listGroups: function() {
          return h;
        }, modifyGroup: function() {
          return N;
        }, mute: function() {
          return Ve;
        }, muteGroupMember: function() {
          return Be;
        }, quitGroup: function() {
          return K;
        }, rejectGroupInvite: function() {
          return fe;
        }, rejectGroupJoinRequest: function() {
          return Ce;
        }, rejectInviteIntoGroup: function() {
          return Oe;
        }, rejectJoinGroup: function() {
          return ge;
        }, removeAdmin: function() {
          return G;
        }, removeGroupAdmin: function() {
          return Z;
        }, removeGroupAllowlistMember: function() {
          return D;
        }, removeGroupBlockMulti: function() {
          return T;
        }, removeGroupBlockSingle: function() {
          return j;
        }, removeGroupMember: function() {
          return Ue;
        }, removeGroupMembers: function() {
          return $e;
        }, removeGroupWhitelistMember: function() {
          return M;
        }, removeMultiGroupMember: function() {
          return Ke;
        }, removeMute: function() {
          return Ze;
        }, removeSingleGroupMember: function() {
          return ce;
        }, rmUsersFromGroupWhitelist: function() {
          return H;
        }, setAdmin: function() {
          return E;
        }, setGroupAdmin: function() {
          return P;
        }, setGroupMemberAttributes: function() {
          return ze;
        }, unblockGroupMember: function() {
          return B;
        }, unblockGroupMembers: function() {
          return W;
        }, unmuteGroupMember: function() {
          return Qe;
        }, updateGroupAnnouncement: function() {
          return We;
        }, uploadGroupSharedFile: function() {
          return Te;
        } }), e(1539), e(8674), e(2526), e(1817), e(2165), e(6992), e(8783), e(3948), e(2222), e(6699), e(2023), e(9554), e(4747), e(8309), e(9753), e(9600);
        var r = e(5531), t = e(7252), a = e(4370), s = e(3246), i = e(7360), o = e(1595);
        function n(U) {
          return n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(Ee) {
            return typeof Ee;
          } : function(Ee) {
            return Ee && typeof Symbol == "function" && Ee.constructor === Symbol && Ee !== Symbol.prototype ? "symbol" : typeof Ee;
          }, n(U);
        }
        function l(U) {
          if (!U || !U.data)
            throw Error("Invalid parameter");
          if (!s.XZ.call(this)) {
            var Ee = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Ee);
          }
          var Q = this.context, ye = Q.orgName, _e = Q.appName, be = Q.accessToken, Se = Q.jid, ee = { url: "".concat(this.apiUrl, "/").concat(ye, "/").concat(_e, "/chatgroups?resource=").concat(Se.clientResource), dataType: "json", type: "POST", data: JSON.stringify({ owner: this.user, groupname: U.data.groupname, desc: U.data.desc, members: U.data.members, public: U.data.public, approval: U.data.approval, allowinvites: U.data.allowinvites, invite_need_confirm: U.data.inviteNeedConfirm, maxusers: U.data.maxusers, custom: U.data.ext }), headers: { Authorization: "Bearer " + be, "Content-Type": "application/json" }, success: function(le) {
            U.success && U.success(le);
          }, error: U.error };
          return i.kg.debug("Call createGroup:", U), a.hj.call(this, ee, o.fI.CREATE_GROUP);
        }
        var u = l;
        function m(U) {
          var Ee;
          if (typeof U.groupId != "string" || U.groupId === "")
            throw Error("Invalid parameter");
          if (!s.XZ.call(this)) {
            var Q = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Q);
          }
          var ye = this.context, _e = ye.orgName, be = ye.appName, Se = ye.accessToken, ee = ye.jid, le = { entities: [(Ee = {}, Ee["notification_ignore_" + U.groupId] = !0, Ee)] }, de = { type: "PUT", url: "".concat(this.apiUrl, "/").concat(_e, "/").concat(be, "/users/").concat(this.user, "?resource=").concat(ee.clientResource), data: JSON.stringify(le), dataType: "json", headers: { Authorization: "Bearer " + Se, "Content-Type": "application/json" }, success: U.success, error: U.error };
          return i.kg.debug("Call blockGroupMessages", U), a.hj.call(this, de, o.fI.BLOCK_GROUP);
        }
        var g = m;
        function h(U) {
          if (typeof U.limit != "number")
            throw Error("Invalid parameter");
          if (!s.XZ.call(this)) {
            var Ee = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Ee);
          }
          var Q = this.context, ye = Q.orgName, _e = Q.appName, be = Q.accessToken, Se = { limit: U.limit, cursor: U.cursor };
          U.cursor || delete Se.cursor;
          var ee = { url: this.apiUrl + "/" + ye + "/" + _e + "/publicchatgroups", type: "GET", dataType: "json", data: Se, headers: { Authorization: "Bearer " + be, "Content-Type": "application/json" }, success: U.success, error: U.error };
          return i.kg.debug("Call listGroups", U), a.hj.call(this, ee, o.fI.LIST_GROUP);
        }
        var d = h;
        function f(U) {
          if (!s.XZ.call(this)) {
            var Ee = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Ee);
          }
          var Q = this.context, ye = Q.orgName, _e = Q.appName, be = Q.accessToken, Se = { url: this.apiUrl + "/" + ye + "/" + _e + "/users/" + this.user + "/joined_chatgroups", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + be, "Content-Type": "application/json" }, success: U && (U == null ? void 0 : U.success), error: U && (U == null ? void 0 : U.error) };
          return i.kg.debug("Call getJoinedGroups", U), a.hj.call(this, Se, o.fI.GET_USER_GROUP);
        }
        function b(U) {
          if (typeof U.pageNum != "number" || typeof U.pageSize != "number")
            throw Error('Invalid parameter: "pageNum or pageSize"');
          if (U.pageNum < 0 || U.pageSize < 0)
            throw Error('"pageNum" should >= 0 and "pageSize" should >= 0');
          if (!s.XZ.call(this)) {
            var Ee = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Ee);
          }
          var Q = this.context, ye = Q.orgName, _e = Q.appName, be = Q.accessToken, Se = U.needAffiliations || U.needRole ? "/chatgroups/user/".concat(this.user, "?pagenum=").concat(U.pageNum, "&pagesize=").concat(U.pageSize, "&needAffiliations=").concat(U.needAffiliations, "&needRole=").concat(U.needRole) : "/users/".concat(this.user, "/joined_chatgroups?pagenum=").concat(U.pageNum, "&pagesize=").concat(U.pageSize), ee = { url: this.apiUrl + "/" + ye + "/" + _e + Se, dataType: "json", type: "GET", headers: { Authorization: "Bearer " + be, "Content-Type": "application/json" }, success: U && (U == null ? void 0 : U.success), error: U && (U == null ? void 0 : U.error) };
          return i.kg.debug("Call getGroup", U), a.hj.call(this, ee, o.fI.GET_USER_GROUP).then(function(le) {
            var de = le.uri, He = le.entities, pe = [];
            return de.includes("joined_chatgroups") || (He.forEach(function(Xe) {
              var Ye = { affiliationsCount: Xe.affiliations_count, groupName: Xe.name, groupId: Xe.groupId, role: Xe.permission, disabled: Xe.disabled, approval: Xe.membersonly, allowInvites: Xe.allowinvites, description: Xe.description, maxUsers: Xe.maxusers, public: Xe.public };
              pe.push(Ye);
            }), le.entities = pe), le;
          });
        }
        function c(U) {
          if (typeof U.groupId != "string" || typeof U.newOwner != "string")
            throw Error("Invalid parameter");
          if (!s.XZ.call(this)) {
            var Ee = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Ee);
          }
          var Q = { newowner: U.newOwner }, ye = this.context, _e = ye.orgName, be = ye.appName, Se = ye.accessToken, ee = ye.jid, le = { url: "".concat(this.apiUrl, "/").concat(_e, "/").concat(be, "/chatgroups/").concat(U.groupId, "?resource=").concat(ee.clientResource), type: "PUT", dataType: "json", headers: { Authorization: "Bearer " + Se, "Content-Type": "application/json" }, data: JSON.stringify(Q), success: U.success, error: U.error };
          return i.kg.debug("Call changeOwner", U), a.hj.call(this, le, o.fI.CHANGE_OWNER);
        }
        var S = c;
        function v(U) {
          if (typeof U.groupId != "string" && !Array.isArray(U.groupId))
            throw Error('Invalid parameter: "groupId"');
          if (!s.XZ.call(this)) {
            var Ee = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Ee);
          }
          var Q = this.context, ye = Q.orgName, _e = Q.appName, be = Q.accessToken, Se = { url: this.apiUrl + "/" + ye + "/" + _e + "/chatgroups/" + U.groupId + "?joined_time=true", type: "GET", dataType: "json", headers: { Authorization: "Bearer " + be, "Content-Type": "application/json" }, success: U.success, error: U.error };
          return i.kg.debug("Call getGroupInfo", U), a.hj.call(this, Se, o.fI.GET_GROUP_INFO);
        }
        function N(U) {
          if (typeof U.groupId != "string" || U.groupId === "")
            throw Error("Invalid parameter");
          if (!s.XZ.call(this)) {
            var Ee = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Ee);
          }
          var Q = this.context, ye = Q.orgName, _e = Q.appName, be = Q.accessToken, Se = Q.jid, ee = U.groupId, le = { groupname: U.groupName, description: U.description, custom: U.ext }, de = { url: "".concat(this.apiUrl, "/").concat(ye, "/").concat(_e, "/chatgroups/").concat(ee, "?resource=").concat(Se.clientResource), type: "PUT", data: JSON.stringify(le), dataType: "json", headers: { Authorization: "Bearer " + be, "Content-Type": "application/json" }, success: U.success, error: U.error };
          return i.kg.debug("Call modifyGroup", U), a.hj.call(this, de, o.fI.MODIFY_GROUP);
        }
        function x(U) {
          if (typeof U.groupId != "string" || U.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (isNaN(U.pageNum) || U.pageNum <= 0)
            throw Error('The parameter "pageNum" should be a positive number');
          if (isNaN(U.pageSize) || U.pageSize <= 0)
            throw Error('The parameter "pageSize" should be a positive number');
          if (!s.XZ.call(this)) {
            var Ee = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Ee);
          }
          var Q = { pagenum: U.pageNum, pagesize: U.pageSize }, ye = this.context, _e = ye.orgName, be = ye.appName, Se = ye.accessToken, ee = { url: this.apiUrl + "/" + _e + "/" + be + "/chatgroups/" + U.groupId + "/users", dataType: "json", type: "GET", data: Q, headers: { Authorization: "Bearer " + Se, "Content-Type": "application/json" }, success: U.success, error: U.error };
          return i.kg.debug("Call listGroupMember", U), a.hj.call(this, ee, o.fI.LIST_GROUP_MEMBER);
        }
        var O = x;
        function C(U) {
          if (typeof U.groupId != "string" || U.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (!s.XZ.call(this)) {
            var Ee = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Ee);
          }
          var Q = this.context, ye = Q.orgName, _e = Q.appName, be = Q.accessToken, Se = U.groupId, ee = { url: this.apiUrl + "/" + ye + "/" + _e + "/chatgroups/" + Se + "/admin", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + be, "Content-Type": "application/json" }, success: U.success, error: U.error };
          return i.kg.debug("Call getGroupAdmin", U), a.hj.call(this, ee, o.fI.GET_GROUP_ADMIN);
        }
        function E(U) {
          if (typeof U.groupId != "string" || U.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (typeof U.username != "string" || U.username === "")
            throw Error('Invalid parameter: "username"');
          if (!s.XZ.call(this)) {
            var Ee = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Ee);
          }
          var Q = this.context, ye = Q.orgName, _e = Q.appName, be = Q.accessToken, Se = Q.jid, ee = U.groupId, le = { newadmin: U.username }, de = { url: "".concat(this.apiUrl, "/").concat(ye, "/").concat(_e, "/chatgroups/").concat(ee, "/admin?resource=").concat(Se.clientResource), type: "POST", dataType: "json", data: JSON.stringify(le), headers: { Authorization: "Bearer " + be, "Content-Type": "application/json" }, success: U.success, error: U.error };
          return i.kg.debug("Call setGroupAdmin", U), a.hj.call(this, de, o.fI.SET_GROUP_ADMIN);
        }
        var P = E;
        function G(U) {
          if (typeof U.groupId != "string" || U.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (typeof U.username != "string" || U.username === "")
            throw Error('Invalid parameter: "username"');
          if (!s.XZ.call(this)) {
            var Ee = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Ee);
          }
          var Q = this.context, ye = Q.orgName, _e = Q.appName, be = Q.accessToken, Se = Q.jid, ee = U.groupId, le = U.username, de = { url: "".concat(this.apiUrl, "/").concat(ye, "/").concat(_e, "/chatgroups/").concat(ee, "/admin/").concat(le, "?resource=").concat(Se.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + be, "Content-Type": "application/json" }, success: U.success, error: U.error };
          return i.kg.debug("Call removeAdmin", U), a.hj.call(this, de, o.fI.REMOVE_GROUP_ADMIN);
        }
        var Z = G;
        function F(U) {
          if (typeof U.groupId != "string" || U.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (!s.XZ.call(this)) {
            var Ee = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Ee);
          }
          var Q = this.context, ye = Q.orgName, _e = Q.appName, be = Q.accessToken, Se = Q.jid, ee = U.groupId, le = { url: "".concat(this.apiUrl, "/").concat(ye, "/").concat(_e, "/chatgroups/").concat(ee, "?version=v3&resource=").concat(Se.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + be, "Content-Type": "application/json" }, success: U.success, error: U.error };
          return i.kg.debug("Call destroyGroup", U), a.hj.call(this, le, o.fI.DISSOLVE_GROUP);
        }
        var Y = F;
        function K(U) {
          if (typeof U.groupId != "string" || U.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (!s.XZ.call(this)) {
            var Ee = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Ee);
          }
          var Q = this.context, ye = Q.orgName, _e = Q.appName, be = Q.accessToken, Se = Q.jid, ee = U.groupId, le = { url: "".concat(this.apiUrl, "/").concat(ye, "/").concat(_e, "/chatgroups/").concat(ee, "/quit?resource=").concat(Se.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + be, "Content-Type": "application/json" }, success: U.success, error: U.error };
          return i.kg.debug("Call quitGroup", U), a.hj.call(this, le, o.fI.QUIT_GROUP);
        }
        var V = K;
        function ne(U) {
          if (typeof U.groupId != "string" || U.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (!Array.isArray(U.users))
            throw Error('Invalid parameter: "users"');
          if (!s.XZ.call(this)) {
            var Ee = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Ee);
          }
          var Q = U.groupId, ye = { usernames: U.users }, _e = this.context, be = _e.orgName, Se = _e.appName, ee = _e.accessToken, le = _e.jid, de = { url: "".concat(this.apiUrl, "/").concat(be, "/").concat(Se, "/chatgroups/").concat(Q, "/invite?resource=").concat(le.clientResource), type: "POST", data: JSON.stringify(ye), dataType: "json", headers: { Authorization: "Bearer " + ee, "Content-Type": "application/json" }, success: U.success, error: U.error };
          return i.kg.debug("Call inviteUsersToGroup", U), a.hj.call(this, de, o.fI.INVITE_TO_GROUP);
        }
        var ae = ne;
        function se(U) {
          if (typeof U.groupId != "string" || U.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (!s.XZ.call(this)) {
            var Ee = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Ee);
          }
          var Q = this.context, ye = Q.orgName, _e = Q.appName, be = Q.accessToken, Se = Q.jid, ee = { url: "".concat(this.apiUrl, "/").concat(ye, "/").concat(_e, "/chatgroups/").concat(U.groupId, "/apply?resource=").concat(Se.clientResource), type: "POST", dataType: "json", data: JSON.stringify({ message: U.message || "" }), headers: { Authorization: "Bearer " + be, "Content-Type": "application/json" }, success: U.success, error: U.error };
          return i.kg.debug("Call joinGroup", U), a.hj.call(this, ee, o.fI.JOIN_GROUP);
        }
        function ue(U) {
          if (typeof U.groupId != "string" || U.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (typeof U.applicant != "string" || U.applicant === "")
            throw Error('Invalid parameter: "applicant"');
          if (!s.XZ.call(this)) {
            var Ee = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Ee);
          }
          var Q = this.context, ye = Q.orgName, _e = Q.appName, be = Q.accessToken, Se = Q.jid, ee = U.groupId, le = { applicant: U.applicant, verifyResult: !0, reason: "no clue" }, de = { url: "".concat(this.apiUrl, "/").concat(ye, "/").concat(_e, "/chatgroups/").concat(ee, "/apply_verify?resource=").concat(Se.clientResource), type: "POST", dataType: "json", data: JSON.stringify(le), headers: { Authorization: "Bearer " + be, "Content-Type": "application/json" }, success: U.success, error: U.error };
          return i.kg.debug("Call agreeJoinGroup", U), a.hj.call(this, de, o.fI.AGREE_JOIN_GROUP);
        }
        var me = ue;
        function ge(U) {
          if (typeof U.groupId != "string" || U.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (typeof U.applicant != "string" || U.applicant === "")
            throw Error('Invalid parameter: "applicant"');
          if (!s.XZ.call(this)) {
            var Ee = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Ee);
          }
          var Q = this.context, ye = Q.orgName, _e = Q.appName, be = Q.accessToken, Se = Q.jid, ee = U.groupId, le = { applicant: U.applicant, verifyResult: !1, reason: U.reason || "" }, de = { url: "".concat(this.apiUrl, "/").concat(ye, "/").concat(_e, "/chatgroups/").concat(ee, "/apply_verify?resource=").concat(Se.clientResource), type: "POST", dataType: "json", data: JSON.stringify(le), headers: { Authorization: "Bearer " + be, "Content-Type": "application/json" }, success: U.success, error: U.error };
          return i.kg.debug("Call rejectGroupJoinRequest", U), a.hj.call(this, de, o.fI.REJECT_JOIN_GROUP);
        }
        var Ce = ge;
        function Re(U) {
          if (typeof U.groupId != "string" || U.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (typeof U.invitee != "string" || U.invitee === "")
            throw Error('Invalid parameter: "invitee"');
          if (!s.XZ.call(this)) {
            var Ee = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Ee);
          }
          var Q = this.context, ye = Q.orgName, _e = Q.appName, be = Q.accessToken, Se = Q.jid, ee = U.groupId, le = { invitee: U.invitee, verifyResult: !0 }, de = { url: "".concat(this.apiUrl, "/").concat(ye, "/").concat(_e, "/chatgroups/").concat(ee, "/invite_verify?resource=").concat(Se.clientResource), type: "POST", dataType: "json", data: JSON.stringify(le), headers: { Authorization: "Bearer " + be, "Content-Type": "application/json" }, success: U.success, error: U.error };
          return i.kg.debug("Call acceptGroupInvite", U), a.hj.call(this, de, o.fI.AGREE_INVITE_GROUP);
        }
        var Ie = Re;
        function Oe(U) {
          if (typeof U.groupId != "string" || U.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (typeof U.invitee != "string" || U.invitee === "")
            throw Error('Invalid parameter: "invitee"');
          if (!s.XZ.call(this)) {
            var Ee = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Ee);
          }
          var Q = this.context, ye = Q.orgName, _e = Q.appName, be = Q.accessToken, Se = Q.jid, ee = U.groupId, le = { invitee: U.invitee, verifyResult: !1 }, de = { url: "".concat(this.apiUrl, "/").concat(ye, "/").concat(_e, "/chatgroups/").concat(ee, "/invite_verify?resource=").concat(Se.clientResource), type: "POST", dataType: "json", data: JSON.stringify(le), headers: { Authorization: "Bearer " + be, "Content-Type": "application/json" }, success: U.success, error: U.error };
          return i.kg.debug("Call rejectGroupInvite", U), a.hj.call(this, de, o.fI.REJECT_INVITE_GROUP);
        }
        var fe = Oe;
        function ce(U) {
          if (typeof U.groupId != "string" || U.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (typeof U.username != "string" || U.username === "")
            throw Error('Invalid parameter: "username"');
          if (!s.XZ.call(this)) {
            var Ee = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Ee);
          }
          var Q = U.groupId, ye = U.username, _e = this.context, be = _e.orgName, Se = _e.appName, ee = _e.accessToken, le = _e.jid, de = { url: "".concat(this.apiUrl, "/").concat(be, "/").concat(Se, "/chatgroups/").concat(Q, "/users/").concat(ye, "?resource=").concat(le.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + ee, "Content-Type": "application/json" }, success: U.success, error: U.error };
          return i.kg.debug("Call removeGroupMember", U), a.hj.call(this, de, o.fI.REMOVE_GROUP_MEMBER);
        }
        var Ue = ce;
        function Ke(U) {
          if (typeof U.groupId != "string" || U.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (!Array.isArray(U.users))
            throw Error('Invalid parameter: "users"');
          if (!s.XZ.call(this)) {
            var Ee = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Ee);
          }
          var Q = this.context, ye = Q.orgName, _e = Q.appName, be = Q.accessToken, Se = Q.jid, ee = U.groupId, le = U.users.join(","), de = { url: "".concat(this.apiUrl, "/").concat(ye, "/").concat(_e, "/chatgroups/").concat(ee, "/users/").concat(le, "?resource=").concat(Se.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + be, "Content-Type": "application/json" }, success: U.success, error: U.error };
          return i.kg.debug("Call removeGroupMembers", U), a.hj.call(this, de, o.fI.MULTI_REMOVE_GROUP_MEMBER);
        }
        var $e = Ke;
        function Ve(U) {
          if (typeof U.groupId != "string" || U.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (!(Array.isArray(U.username) || typeof U.username == "string" && U.username !== ""))
            throw Error('Invalid parameter: "username"');
          if (typeof U.muteDuration != "number")
            throw Error('Invalid parameter: "muteDuration"');
          if (!s.XZ.call(this)) {
            var Ee = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Ee);
          }
          var Q = this.context, ye = Q.orgName, _e = Q.appName, be = Q.accessToken, Se = Q.jid, ee = U.groupId, le = { usernames: typeof U.username == "string" ? [U.username] : U.username, mute_duration: U.muteDuration }, de = { url: "".concat(this.apiUrl, "/").concat(ye, "/").concat(_e, "/chatgroups/").concat(ee, "/mute?resource=").concat(Se.clientResource), dataType: "json", type: "POST", headers: { Authorization: "Bearer " + be, "Content-Type": "application/json" }, data: JSON.stringify(le), success: U.success, error: U.error };
          return i.kg.debug("Call muteGroupMember", U), a.hj.call(this, de, o.fI.MUTE_GROUP_MEMBER);
        }
        var Be = Ve;
        function Ze(U) {
          if (typeof U.groupId != "string" || U.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (!(Array.isArray(U.username) || typeof U.username == "string" && U.username !== ""))
            throw Error('Invalid parameter: "username"');
          if (!s.XZ.call(this)) {
            var Ee = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Ee);
          }
          var Q = this.context, ye = Q.orgName, _e = Q.appName, be = Q.accessToken, Se = Q.jid, ee = U.groupId, le = U.username, de = { url: "".concat(this.apiUrl, "/").concat(ye, "/").concat(_e, "/chatgroups/").concat(ee, "/mute/").concat(le, "?resource=").concat(Se.clientResource), dataType: "json", type: "DELETE", headers: { Authorization: "Bearer " + be, "Content-Type": "application/json" }, success: U.success, error: U.error };
          return i.kg.debug("Call unmuteGroupMember", U), a.hj.call(this, de, o.fI.UNMUTE_GROUP_MEMBER);
        }
        var Qe = Ze;
        function Pe(U) {
          if (typeof U.groupId != "string" || U.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (!s.XZ.call(this)) {
            var Ee = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Ee);
          }
          var Q = this.context, ye = Q.orgName, _e = Q.appName, be = Q.accessToken, Se = U.groupId, ee = { url: this.apiUrl + "/" + ye + "/" + _e + "/chatgroups/" + Se + "/mute", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + be, "Content-Type": "application/json" }, success: U.success, error: U.error };
          return i.kg.debug("Call getGroupMuteList", U), a.hj.call(this, ee, o.fI.GET_GROUP_MUTE_LIST);
        }
        var Le = Pe, xe = Pe;
        function ve(U) {
          if (typeof U.groupId != "string" || U.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (typeof U.username != "string" || U.username === "")
            throw Error('Invalid parameter: "username"');
          if (!s.XZ.call(this)) {
            var Ee = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Ee);
          }
          var Q = this.context, ye = Q.orgName, _e = Q.appName, be = Q.accessToken, Se = Q.jid, ee = U.groupId, le = U.username, de = { url: "".concat(this.apiUrl, "/").concat(ye, "/").concat(_e, "/chatgroups/").concat(ee, "/blocks/users/").concat(le, "?resource=").concat(Se.clientResource), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + be, "Content-Type": "application/json" }, success: U.success, error: U.error };
          return i.kg.debug("Call blockGroupMember", U), a.hj.call(this, de, o.fI.BLOCK_GROUP_MEMBER);
        }
        var we = ve;
        function ke(U) {
          if (typeof U.groupId != "string" || U.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (!Array.isArray(U.usernames))
            throw Error('Invalid parameter: "usernames"');
          if (!s.XZ.call(this)) {
            var Ee = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Ee);
          }
          var Q = this.context, ye = Q.orgName, _e = Q.appName, be = Q.accessToken, Se = Q.jid, ee = U.groupId, le = { usernames: U.usernames }, de = { url: "".concat(this.apiUrl, "/").concat(ye, "/").concat(_e, "/chatgroups/").concat(ee, "/blocks/users?resource=").concat(Se.clientResource), data: JSON.stringify(le), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + be, "Content-Type": "application/json" }, success: U.success, error: U.error };
          return i.kg.debug("Call blockGroupMembers", U), a.hj.call(this, de, o.fI.BLOCK_GROUP_MEMBERS);
        }
        var Ne = ke;
        function j(U) {
          if (typeof U.groupId != "string" || U.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (typeof U.username != "string" || U.username === "")
            throw Error('Invalid parameter: "username"');
          if (!s.XZ.call(this)) {
            var Ee = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Ee);
          }
          var Q = this.context, ye = Q.orgName, _e = Q.appName, be = Q.accessToken, Se = Q.jid, ee = U.groupId, le = U.username, de = { url: "".concat(this.apiUrl, "/").concat(ye, "/").concat(_e, "/chatgroups/").concat(ee, "/blocks/users/").concat(le, "?resource=").concat(Se.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + be, "Content-Type": "application/json" }, success: U.success, error: U.error };
          return i.kg.debug("Call unblockGroupMember", U), a.hj.call(this, de, o.fI.UNBLOCK_GROUP_MEMBER);
        }
        var B = j;
        function T(U) {
          if (typeof U.groupId != "string" || U.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (!Array.isArray(U.usernames))
            throw Error('Invalid parameter: "usernames"');
          if (!s.XZ.call(this)) {
            var Ee = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Ee);
          }
          var Q = this.context, ye = Q.orgName, _e = Q.appName, be = Q.accessToken, Se = Q.jid, ee = U.groupId, le = U.usernames.join(","), de = { url: "".concat(this.apiUrl, "/").concat(ye, "/").concat(_e, "/chatgroups/").concat(ee, "/blocks/users/").concat(le, "?resource=").concat(Se.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + be, "Content-Type": "application/json" }, success: U.success, error: U.error };
          return i.kg.debug("Call unblockGroupMembers", U), a.hj.call(this, de, o.fI.UNBLOCK_GROUP_MEMBERS);
        }
        var W = T;
        function _(U) {
          if (typeof U.groupId != "string" || U.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (!s.XZ.call(this)) {
            var Ee = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Ee);
          }
          var Q = this.context, ye = Q.orgName, _e = Q.appName, be = Q.accessToken, Se = U.groupId, ee = { url: this.apiUrl + "/" + ye + "/" + _e + "/chatgroups/" + Se + "/blocks/users", type: "GET", dataType: "json", headers: { Authorization: "Bearer " + be, "Content-Type": "application/json" }, success: U.success, error: U.error };
          return i.kg.debug("Call getGroupBlacklist", U), a.hj.call(this, ee, o.fI.GET_GROUP_BLACK_LIST);
        }
        var A = _, L = _;
        function w(U) {
          if (typeof U.groupId != "string" || U.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (!s.XZ.call(this)) {
            var Ee = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Ee);
          }
          var Q = this.context, ye = Q.orgName, _e = Q.appName, be = Q.accessToken, Se = Q.jid, ee = U.groupId, le = { url: "".concat(this.apiUrl, "/").concat(ye, "/").concat(_e, "/chatgroups/").concat(ee, "/ban?resource=").concat(Se.clientResource), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + be, "Content-Type": "application/json" }, success: U.success, error: U.error };
          return i.kg.debug("Call disableSendGroupMsg", U), a.hj.call(this, le, o.fI.DISABLED_SEND_GROUP_MSG);
        }
        function k(U) {
          if (typeof U.groupId != "string" || U.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (!s.XZ.call(this)) {
            var Ee = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Ee);
          }
          var Q = this.context, ye = Q.orgName, _e = Q.appName, be = Q.accessToken, Se = Q.jid, ee = U.groupId, le = { url: "".concat(this.apiUrl, "/").concat(ye, "/").concat(_e, "/chatgroups/").concat(ee, "/ban?resource=").concat(Se.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + be, "Content-Type": "application/json" }, success: U.success, error: U.error };
          return i.kg.debug("Call enableSendGroupMsg", U), a.hj.call(this, le, o.fI.ENABLE_SEND_GROUP_MSG);
        }
        function y(U) {
          if (typeof U.groupId != "string" || U.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (!Array.isArray(U.users))
            throw Error('Invalid parameter: "users"');
          if (!s.XZ.call(this)) {
            var Ee = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Ee);
          }
          var Q = this.context, ye = Q.orgName, _e = Q.appName, be = Q.accessToken, Se = Q.jid, ee = U.groupId, le = { usernames: U.users }, de = { url: "".concat(this.apiUrl, "/").concat(ye, "/").concat(_e, "/chatgroups/").concat(ee, "/white/users?resource=").concat(Se.clientResource), type: "POST", data: JSON.stringify(le), dataType: "json", headers: { Authorization: "Bearer " + be, "Content-Type": "application/json" }, success: U.success, error: U.error };
          return i.kg.debug("Call addUsersToGroupWhitelist", U), a.hj.call(this, de, o.fI.ADD_USERS_TO_GROUP_WHITE);
        }
        var I = y;
        function H(U) {
          if (typeof U.groupId != "string" || U.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (typeof U.userName != "string" || U.userName === "")
            throw Error('Invalid parameter: "userName"');
          if (!s.XZ.call(this)) {
            var Ee = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Ee);
          }
          var Q = this.context, ye = Q.orgName, _e = Q.appName, be = Q.accessToken, Se = Q.jid, ee = U.groupId, le = { url: "".concat(this.apiUrl, "/").concat(ye, "/").concat(_e, "/chatgroups/").concat(ee, "/white/users/").concat(U.userName, "?resource=").concat(Se.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + be, "Content-Type": "application/json" }, success: U.success, error: U.error };
          return i.kg.debug("Call removeGroupAllowlistMember", U), a.hj.call(this, le, o.fI.REMOVE_GROUP_WHITE_MEMBER);
        }
        var M = H, D = H;
        function J(U) {
          if (typeof U.groupId != "string" || U.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (!s.XZ.call(this)) {
            var Ee = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Ee);
          }
          var Q = this.context, ye = Q.orgName, _e = Q.appName, be = Q.accessToken, Se = U.groupId, ee = { url: this.apiUrl + "/" + ye + "/" + _e + "/chatgroups/" + Se + "/white/users", type: "GET", dataType: "json", headers: { Authorization: "Bearer " + be, "Content-Type": "application/json" }, success: U.success, error: U.error };
          return i.kg.debug("Call getGroupAllowlist", U), a.hj.call(this, ee, o.fI.GET_GROUP_WHITE_LIST);
        }
        var X = J;
        function oe(U) {
          if (typeof U.groupId != "string" || U.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (typeof U.userName != "string" || U.userName === "")
            throw Error('Invalid parameter: "userName"');
          if (!s.XZ.call(this)) {
            var Ee = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Ee);
          }
          var Q = this.context, ye = Q.orgName, _e = Q.appName, be = Q.accessToken, Se = U.groupId, ee = { url: this.apiUrl + "/" + ye + "/" + _e + "/chatgroups/" + Se + "/white/users/" + U.userName, type: "GET", dataType: "json", headers: { Authorization: "Bearer " + be, "Content-Type": "application/json" }, success: U.success, error: U.error };
          return i.kg.debug("Call isInGroupAllowlist", U), a.hj.call(this, ee, o.fI.IS_IN_GROUP_WHITE_LIST);
        }
        var q = oe, z = oe;
        function te(U) {
          if (typeof U.groupId != "string" || U.groupId === "")
            throw Error('Invalid parameter: "chatRoomId"');
          if (!s.XZ.call(this)) {
            var Ee = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Ee);
          }
          var Q = this.context, ye = Q.orgName, _e = Q.appName, be = Q.accessToken, Se = Q.userId, ee = { url: this.apiUrl + "/" + ye + "/" + _e + "/sdk/group/" + U.groupId + "/mute/" + Se, dataType: "json", type: "GET", headers: { Authorization: "Bearer " + be } };
          return i.kg.debug("Call isInGroupMutelist", U), a.hj.call(this, ee).then(function(le) {
            return le.data;
          });
        }
        function re(U) {
          if (typeof U.groupId != "string" || U.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (typeof U.msgId != "string" || U.msgId === "")
            throw Error('Invalid parameter: "msgId"');
          if (!s.XZ.call(this)) {
            var Ee = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Ee);
          }
          var Q = this.context, ye = Q.orgName, _e = Q.appName, be = Q.accessToken, Se = { url: this.apiUrl + "/" + ye + "/" + _e + "/chatgroups/" + U.groupId + "/acks/" + U.msgId, dataType: "json", type: "GET", data: { limit: 500, key: void 0 }, headers: { Authorization: "Bearer " + be }, success: U.success, error: U.error };
          return i.kg.debug("Call getGroupMsgReadUser", U), a.hj.call(this, Se, o.fI.GET_GROUP_MSG_READ_USER);
        }
        function Ae(U) {
          if (typeof U.groupId != "string" || U.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (!s.XZ.call(this)) {
            var Ee = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Ee);
          }
          var Q = this.context, ye = Q.orgName, _e = Q.appName, be = Q.accessToken, Se = U.groupId, ee = { url: "".concat(this.apiUrl, "/").concat(ye, "/").concat(_e, "/chatgroups/").concat(Se, "/announcement"), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + be, "Content-Type": "application/json" }, success: U.success, error: U.error };
          return i.kg.debug("Call fetchGroupAnnouncement", U), a.hj.call(this, ee, o.fI.GET_GROUP_ANN);
        }
        function We(U) {
          if (typeof U.groupId != "string" || U.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (typeof U.announcement != "string")
            throw Error('Invalid parameter: "announcement"');
          if (!s.XZ.call(this)) {
            var Ee = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Ee);
          }
          var Q = this.context, ye = Q.orgName, _e = Q.appName, be = Q.accessToken, Se = Q.jid, ee = U.groupId, le = { announcement: U.announcement }, de = { url: "".concat(this.apiUrl, "/").concat(ye, "/").concat(_e, "/chatgroups/").concat(ee, "/announcement?resource=").concat(Se.clientResource), type: "POST", dataType: "json", data: JSON.stringify(le), headers: { Authorization: "Bearer " + be, "Content-Type": "application/json" }, success: U.success, error: U.error };
          return i.kg.debug("Call updateGroupAnnouncement", U), a.hj.call(this, de, o.fI.UPDATE_GROUP_ANN);
        }
        function Te(U) {
          if (typeof U.groupId != "string" || U.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (n(U.file) !== "object")
            throw Error('Invalid parameter: "file"');
          if (s.XZ.call(this)) {
            var Ee = this.context, Q = Ee.orgName, ye = Ee.appName, _e = Ee.accessToken, be = Ee.jid, Se = U.groupId;
            a.cT.call(this, { uploadUrl: "".concat(this.apiUrl, "/").concat(Q, "/").concat(ye, "/chatgroups/").concat(Se, "/share_files?resource=").concat(be.clientResource), onFileUploadProgress: U.onFileUploadProgress, onFileUploadComplete: U.onFileUploadComplete, onFileUploadError: U.onFileUploadError, onFileUploadCanceled: U.onFileUploadCanceled, accessToken: _e, apiUrl: this.apiUrl, file: U.file, appKey: this.context.appKey }, o.fI.UPLOAD_GROUP_FILE), i.kg.debug("Call uploadGroupSharedFile", U);
          }
        }
        function je(U) {
          if (typeof U.groupId != "string" || U.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (typeof U.fileId != "string" || U.fileId === "")
            throw Error('Invalid parameter: "file"');
          if (!s.XZ.call(this)) {
            var Ee = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Ee);
          }
          var Q = this.context, ye = Q.orgName, _e = Q.appName, be = Q.accessToken, Se = Q.jid, ee = U.groupId, le = U.fileId, de = { url: "".concat(this.apiUrl, "/").concat(ye, "/").concat(_e, "/chatgroups/").concat(ee, "/share_files/").concat(le, "?resource=").concat(Se.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + be, "Content-Type": "application/json" }, success: U.success, error: U.error };
          return i.kg.debug("Call deleteGroupSharedFile", U), a.hj.call(this, de, o.fI.DELETE_GROUP_FILE);
        }
        function ie(U) {
          if (typeof U.groupId != "string" || U.groupId === "")
            throw Error('Invalid parameter: "groupId"');
          if (!s.XZ.call(this)) {
            var Ee = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(Ee);
          }
          var Q = this.context, ye = Q.orgName, _e = Q.appName, be = Q.accessToken, Se = U.pageNum || 1, ee = U.pageSize || 10, le = U.groupId, de = { url: "".concat(this.apiUrl, "/").concat(ye, "/").concat(_e, "/chatgroups/").concat(le, "/share_files?pagenum=").concat(Se, "&pagesize=").concat(ee), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + be, "Content-Type": "application/json" }, success: U.success, error: U.error };
          return i.kg.debug("Call getGroupSharedFilelist", U), a.hj.call(this, de, o.fI.GET_GROUP_FILE_LIST);
        }
        var Je = ie;
        function De(U) {
          var Ee = this.context, Q = Ee.orgName, ye = Ee.appName, _e = Ee.accessToken, be = this.apiUrl, Se = U.groupId, ee = U.fileId;
          a.LR.call(this, { url: "".concat(be, "/").concat(Q, "/").concat(ye, "/chatgroups/").concat(Se, "/share_files/").concat(ee), onFileDownloadComplete: U.onFileDownloadComplete, onFileDownloadError: U.onFileDownloadError, accessToken: _e, id: ee, secret: U.secret }, o.fI.DOWN_GROUP_FILE), i.kg.debug("Call downloadGroupSharedFile", U);
        }
        function ze(U) {
          return Ee = this, Q = void 0, _e = function() {
            var be, Se, ee, le, de, He, pe, Xe, Ye, et, he;
            return function(Me, rt) {
              var Ge, qe, Fe, ot, nt = { label: 0, sent: function() {
                if (1 & Fe[0])
                  throw Fe[1];
                return Fe[1];
              }, trys: [], ops: [] };
              return ot = { next: ct(0), throw: ct(1), return: ct(2) }, typeof Symbol == "function" && (ot[Symbol.iterator] = function() {
                return this;
              }), ot;
              function ct(lt) {
                return function(ut) {
                  return function(it) {
                    if (Ge)
                      throw new TypeError("Generator is already executing.");
                    for (; nt; )
                      try {
                        if (Ge = 1, qe && (Fe = 2 & it[0] ? qe.return : it[0] ? qe.throw || ((Fe = qe.return) && Fe.call(qe), 0) : qe.next) && !(Fe = Fe.call(qe, it[1])).done)
                          return Fe;
                        switch (qe = 0, Fe && (it = [2 & it[0], Fe.value]), it[0]) {
                          case 0:
                          case 1:
                            Fe = it;
                            break;
                          case 4:
                            return nt.label++, { value: it[1], done: !1 };
                          case 5:
                            nt.label++, qe = it[1], it = [0];
                            continue;
                          case 7:
                            it = nt.ops.pop(), nt.trys.pop();
                            continue;
                          default:
                            if (!((Fe = (Fe = nt.trys).length > 0 && Fe[Fe.length - 1]) || it[0] !== 6 && it[0] !== 2)) {
                              nt = 0;
                              continue;
                            }
                            if (it[0] === 3 && (!Fe || it[1] > Fe[0] && it[1] < Fe[3])) {
                              nt.label = it[1];
                              break;
                            }
                            if (it[0] === 6 && nt.label < Fe[1]) {
                              nt.label = Fe[1], Fe = it;
                              break;
                            }
                            if (Fe && nt.label < Fe[2]) {
                              nt.label = Fe[2], nt.ops.push(it);
                              break;
                            }
                            Fe[2] && nt.ops.pop(), nt.trys.pop();
                            continue;
                        }
                        it = rt.call(Me, nt);
                      } catch (pt) {
                        it = [6, pt], qe = 0;
                      } finally {
                        Ge = Fe = 0;
                      }
                    if (5 & it[0])
                      throw it[1];
                    return { value: it[0] ? it[1] : void 0, done: !0 };
                  }([lt, ut]);
                };
              }
            }(this, function(Me) {
              switch (Me.label) {
                case 0:
                  if (be = U.groupId, Se = U.userId, ee = U.memberAttributes, typeof be != "string" || be === "")
                    throw Error('Invalid parameter: "groupId"');
                  if (typeof Se != "string" || Se === "")
                    throw Error('Invalid parameter: "userId"');
                  if (n(ee) !== "object")
                    throw Error('Invalid parameter: "memberAttributes"');
                  return s.XZ.call(this) ? (de = this.context, He = de.orgName, pe = de.appName, Xe = de.accessToken, Ye = de.jid, et = { metaData: ee }, he = { url: "".concat(this.apiUrl, "/").concat(He, "/").concat(pe, "/sdk/metadata/chatgroup/").concat(be, "/user/").concat(Se, "?resource=").concat(Ye.clientResource), type: "PUT", dataType: "json", data: JSON.stringify(et), headers: { Authorization: "Bearer " + Xe, "Content-Type": "application/json" } }, i.kg.debug("Call setGroupMemberAttributes", U), [4, a.hj.call(this, he, o.fI.SET_GROUP_MEMBER_ATTRS)]) : (le = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(le)]);
                case 1:
                  return Me.sent(), [2];
              }
            });
          }, new ((ye = void 0) || (ye = Promise))(function(be, Se) {
            function ee(He) {
              try {
                de(_e.next(He));
              } catch (pe) {
                Se(pe);
              }
            }
            function le(He) {
              try {
                de(_e.throw(He));
              } catch (pe) {
                Se(pe);
              }
            }
            function de(He) {
              var pe;
              He.done ? be(He.value) : (pe = He.value, pe instanceof ye ? pe : new ye(function(Xe) {
                Xe(pe);
              })).then(ee, le);
            }
            de((_e = _e.apply(Ee, Q || [])).next());
          });
          var Ee, Q, ye, _e;
        }
        function at(U) {
          var Ee = U.groupId, Q = U.userId;
          return st.call(this, { groupId: Ee, userIds: [Q] }).then(function(ye) {
            var _e;
            return { type: ye.type, data: (_e = ye.data) === null || _e === void 0 ? void 0 : _e[Q] };
          });
        }
        function st(U) {
          var Ee = U.groupId, Q = U.userIds, ye = U.keys, _e = ye === void 0 ? [] : ye;
          if (typeof Ee != "string" || Ee === "")
            throw Error('Invalid parameter: "groupId"');
          if (!Array.isArray(Q) || (Q == null ? void 0 : Q.length) <= 0)
            throw Error('Invalid parameter: "userIds"');
          if (!Array.isArray(_e))
            throw Error('Invalid parameter: "keys"');
          if (!s.XZ.call(this)) {
            var be = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(be);
          }
          var Se = this.context, ee = Se.orgName, le = Se.appName, de = Se.accessToken, He = { targets: Q, properties: _e }, pe = { url: "".concat(this.apiUrl, "/").concat(ee, "/").concat(le, "/sdk/metadata/chatgroup/").concat(Ee, "/get"), type: "POST", dataType: "json", data: JSON.stringify(He), headers: { Authorization: "Bearer " + de, "Content-Type": "application/json" } };
          return i.kg.debug("Call getGroupMembersAttributes", U), a.hj.call(this, pe, o.fI.GET_GROUP_MEMBER_ATTR).then(function(Xe) {
            return { type: Xe.type, data: (Xe == null ? void 0 : Xe.data) || {} };
          });
        }
      }, 7479: function(p, R, e) {
        e.r(R), e.d(R, { acceptContactInvite: function() {
          return Ce;
        }, acceptInvitation: function() {
          return ge;
        }, addContact: function() {
          return se;
        }, addReaction: function() {
          return Ze;
        }, addToBlackList: function() {
          return Oe;
        }, addUsersToBlacklist: function() {
          return fe;
        }, addUsersToBlocklist: function() {
          return ce;
        }, declineContactInvite: function() {
          return Ie;
        }, declineInvitation: function() {
          return Re;
        }, deleteContact: function() {
          return me;
        }, deleteConversation: function() {
          return P;
        }, deleteReaction: function() {
          return Qe;
        }, deleteSession: function() {
          return E;
        }, fetchHistoryMessages: function() {
          return V;
        }, fetchUserInfoById: function() {
          return F;
        }, getBlacklist: function() {
          return b;
        }, getBlocklist: function() {
          return c;
        }, getChatToken: function() {
          return K;
        }, getContacts: function() {
          return v;
        }, getConversationlist: function() {
          return C;
        }, getHistoryMessages: function() {
          return ae;
        }, getReactionDetail: function() {
          return xe;
        }, getReactionList: function() {
          return Pe;
        }, getReactionlist: function() {
          return Le;
        }, getRoster: function() {
          return S;
        }, getServerConversations: function() {
          return ke;
        }, getServerPinnedConversations: function() {
          return j;
        }, getSessionList: function() {
          return O;
        }, modifyMessage: function() {
          return Be;
        }, pinConversation: function() {
          return B;
        }, recallMessage: function() {
          return Ve;
        }, removeFromBlackList: function() {
          return Ue;
        }, removeHistoryMessages: function() {
          return we;
        }, removeRoster: function() {
          return ue;
        }, removeUserFromBlackList: function() {
          return Ke;
        }, removeUserFromBlocklist: function() {
          return $e;
        }, reportMessage: function() {
          return ve;
        }, updateCurrentUserNick: function() {
          return Y;
        }, updateOwnUserInfo: function() {
          return G;
        }, updateUserInfo: function() {
          return Z;
        }, uploadPushToken: function() {
          return x;
        }, uploadToken: function() {
          return N;
        } }), e(9601), e(1539), e(8674), e(2526), e(1817), e(2165), e(6992), e(8783), e(3948), e(9554), e(4747), e(2222), e(6699), e(9600), e(5069), e(561), e(9753), e(8309), e(3710), e(9714);
        var r = e(3246), t = e(5531), a = e(7252), s = e(4370), i = e(8161), o = e(4968), n = e(4188), l = e.n(n), u = e(7360), m = e(1595), g = e(4363), h = function() {
          return h = Object.assign || function(T) {
            for (var W, _ = 1, A = arguments.length; _ < A; _++)
              for (var L in W = arguments[_])
                Object.prototype.hasOwnProperty.call(W, L) && (T[L] = W[L]);
            return T;
          }, h.apply(this, arguments);
        }, d = function(T, W, _, A) {
          return new (_ || (_ = Promise))(function(L, w) {
            function k(H) {
              try {
                I(A.next(H));
              } catch (M) {
                w(M);
              }
            }
            function y(H) {
              try {
                I(A.throw(H));
              } catch (M) {
                w(M);
              }
            }
            function I(H) {
              var M;
              H.done ? L(H.value) : (M = H.value, M instanceof _ ? M : new _(function(D) {
                D(M);
              })).then(k, y);
            }
            I((A = A.apply(T, W || [])).next());
          });
        }, f = function(T, W) {
          var _, A, L, w, k = { label: 0, sent: function() {
            if (1 & L[0])
              throw L[1];
            return L[1];
          }, trys: [], ops: [] };
          return w = { next: y(0), throw: y(1), return: y(2) }, typeof Symbol == "function" && (w[Symbol.iterator] = function() {
            return this;
          }), w;
          function y(I) {
            return function(H) {
              return function(M) {
                if (_)
                  throw new TypeError("Generator is already executing.");
                for (; k; )
                  try {
                    if (_ = 1, A && (L = 2 & M[0] ? A.return : M[0] ? A.throw || ((L = A.return) && L.call(A), 0) : A.next) && !(L = L.call(A, M[1])).done)
                      return L;
                    switch (A = 0, L && (M = [2 & M[0], L.value]), M[0]) {
                      case 0:
                      case 1:
                        L = M;
                        break;
                      case 4:
                        return k.label++, { value: M[1], done: !1 };
                      case 5:
                        k.label++, A = M[1], M = [0];
                        continue;
                      case 7:
                        M = k.ops.pop(), k.trys.pop();
                        continue;
                      default:
                        if (!((L = (L = k.trys).length > 0 && L[L.length - 1]) || M[0] !== 6 && M[0] !== 2)) {
                          k = 0;
                          continue;
                        }
                        if (M[0] === 3 && (!L || M[1] > L[0] && M[1] < L[3])) {
                          k.label = M[1];
                          break;
                        }
                        if (M[0] === 6 && k.label < L[1]) {
                          k.label = L[1], L = M;
                          break;
                        }
                        if (L && k.label < L[2]) {
                          k.label = L[2], k.ops.push(M);
                          break;
                        }
                        L[2] && k.ops.pop(), k.trys.pop();
                        continue;
                    }
                    M = W.call(T, k);
                  } catch (D) {
                    M = [6, D], A = 0;
                  } finally {
                    _ = L = 0;
                  }
                if (5 & M[0])
                  throw M[1];
                return { value: M[0] ? M[1] : void 0, done: !0 };
              }([I, H]);
            };
          }
        };
        function b(T) {
          if (!r.XZ.call(this)) {
            var W = a.Z.create({ type: t.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(W);
          }
          var _ = this.context, A = _.orgName, L = _.appName, w = _.accessToken, k = { url: this.apiUrl + "/" + A + "/" + L + "/users/" + this.user + "/blocks/users", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + w }, success: function(y) {
            y.data.forEach(function(I) {
            }), typeof (T == null ? void 0 : T.success) == "function" && T.success(y);
          }, error: function(y) {
            typeof (T == null ? void 0 : T.error) == "function" && T.error(y);
          } };
          return u.kg.debug("Call getBlocklist"), s.hj.call(this, k, m.fI.GET_BLACK_LIST);
        }
        var c = b, S = v;
        function v(T) {
          var W = this;
          if (!r.XZ.call(this)) {
            var _ = a.Z.create({ type: t.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(_);
          }
          var A = this.context, L = A.orgName, w = A.appName, k = A.accessToken, y = { url: this.apiUrl + "/" + L + "/" + w + "/users/" + this.user + "/contacts/users", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + k }, success: function(I) {
            var H = [];
            I.data.forEach(function(M) {
              H.push({ name: M, subscription: "both", jid: W.context.jid });
            }), typeof (T == null ? void 0 : T.success) == "function" && T.success(H);
          }, error: function(I) {
            typeof (T == null ? void 0 : T.error) == "function" && T.error(I);
          } };
          return u.kg.debug("Call getContacts"), s.hj.call(this, y, m.fI.GET_CONTACTS);
        }
        function N(T) {
          if (typeof T.deviceId != "string" || T.deviceId === "")
            throw Error('Invalid parameter: "deviceId"');
          if (typeof T.deviceToken != "string" || T.deviceToken === "")
            throw Error('Invalid parameter: "deviceToken"');
          if (typeof T.notifierName != "string" || T.notifierName === "")
            throw Error('Invalid parameter: "notifierName"');
          if (!r.XZ.call(this)) {
            var W = a.Z.create({ type: t.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(W);
          }
          var _ = this.context, A = _.orgName, L = _.appName, w = _.accessToken, k = { url: "".concat(this.apiUrl, "/").concat(A, "/").concat(L, "/users/").concat(this.user), type: "PUT", data: JSON.stringify({ device_id: T.deviceId, device_token: T.deviceToken, notifier_name: T.notifierName }), dataType: "json", headers: { Authorization: "Bearer " + w, "Content-Type": "application/json" }, success: T.success, error: T.error };
          return u.kg.debug("Call uploadPushToken", T), s.hj.call(this, k, m.fI.UPLOAD_PUSH_TOKEN);
        }
        var x = N;
        function O(T) {
          if (!r.XZ.call(this)) {
            var W = a.Z.create({ type: t.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(W);
          }
          var _ = this.context, A = _.orgName, L = _.appName, w = _.accessToken, k = { url: "".concat(this.apiUrl, "/").concat(A, "/").concat(L, "/users/").concat(this.user, "/user_channels"), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + w, "Content-Type": "application/json" }, success: T && (T == null ? void 0 : T.success), error: T && (T == null ? void 0 : T.error) };
          return u.kg.debug("Call getSessionList"), s.hj.call(this, k, m.fI.GET_SESSION_LIST);
        }
        function C(T) {
          if (!r.XZ.call(this)) {
            var W = a.Z.create({ type: t.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(W);
          }
          var _ = this.context, A = _.orgName, L = _.appName, w = _.accessToken, k = !!(T && typeof T.pageNum == "number" && typeof T.pageSize == "number" && T.pageNum > 0 && T.pageSize > 0), y = { url: "".concat(this.apiUrl, "/").concat(A, "/").concat(L, "/users/").concat(this.user, "/user_channels").concat(k ? "/page" : ""), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + w, "Content-Type": "application/json" }, success: T && (T == null ? void 0 : T.success), error: T && (T == null ? void 0 : T.error) };
          return k && (y.data = { pageNum: T.pageNum, pageSize: T.pageSize }), u.kg.debug("Call getConversationlist"), s.hj.call(this, y, m.fI.GET_SESSION_LIST).then(function(I) {
            return function(H) {
              var M = H.data.channel_infos;
              return M == null || M.forEach(function(D) {
                D.meta && JSON.stringify(D.meta) !== "{}" ? (D.meta.payload = JSON.parse(D.meta.payload), D.lastMessage = (0, g.w)(D.meta)) : D.lastMessage = D.meta, delete D.meta;
              }), H;
            }(I);
          });
        }
        function E(T) {
          if (T && typeof T.channel != "string")
            throw Error("Invalid parameter channel: ".concat(T.channel));
          if (T && T.chatType !== "singleChat" && T.chatType !== "groupChat")
            throw Error("Invalid parameter chatType: ".concat(T.chatType));
          if (T && typeof T.deleteRoam != "boolean")
            throw Error("Invalid parameter deleteRoam: ".concat(T.deleteRoam));
          if (!r.XZ.call(this)) {
            var W = a.Z.create({ type: t.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(W);
          }
          var _, A = this.context, L = A.orgName, w = A.appName, k = A.accessToken, y = A.jid;
          _ = T.chatType === "singleChat" ? "chat" : "groupChat";
          var I = { url: "".concat(this.apiUrl, "/").concat(L, "/").concat(w, "/user/").concat(this.user, "/user_channel?resource=").concat(y.clientResource), dataType: "json", type: "DELETE", data: JSON.stringify({ channel: T.channel, type: _, delete_roam: T.deleteRoam }), headers: { Authorization: "Bearer " + k, "Content-Type": "application/json" }, success: T.success, error: T.error };
          return u.kg.debug("Call deleteSession", T), s.hj.call(this, I, m.fI.DELETE_SESSION);
        }
        var P = E;
        function G(T, W) {
          if (!r.XZ.call(this)) {
            var _ = a.Z.create({ type: t.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(_);
          }
          var A = this.context, L = A.orgName, w = A.appName, k = A.accessToken, y = ["nickname", "avatarurl", "mail", "phone", "gender", "sign", "birth", "ext"], I = {};
          if (typeof wx < "u" || typeof qq < "u")
            if (typeof T == "string" && W !== void 0) {
              if (!y.includes(T))
                throw new Error("illegal key, only these keys: nickname, avatarurl, mail, phone, gender, sign, birth, ext are allowed");
              I[T] = W;
            } else {
              if (Object.prototype.toString.call(T) !== "[object Object]")
                throw new Error("illegal params");
              y.forEach(function(D) {
                y.includes(D) && T[D] !== void 0 && (I[D] = T[D]);
              });
            }
          else if (typeof T == "string") {
            if (!y.includes(T))
              throw new Error("illegal key, only these keys: nickname, avatarurl, mail, phone, gender, sign, birth, ext are allowed");
            I = T + "=" + W;
          } else {
            if (Object.prototype.toString.call(T) !== "[object Object]")
              throw new Error("illegal params");
            var H = [];
            y.forEach(function(D) {
              if (y.includes(D) && T[D] !== void 0) {
                var J = encodeURIComponent(D), X = encodeURIComponent(T[D]);
                H.push(J + "=" + X);
              }
            }), I = H.join("&");
          }
          var M = { url: "".concat(this.apiUrl, "/").concat(L, "/").concat(w, "/metadata/user/").concat(this.user), type: "PUT", data: I, dataType: "json", headers: { Authorization: "Bearer " + k, "Content-Type": "application/x-www-form-urlencoded" } };
          return u.kg.debug("Call updateOwnUserInfo", T), s.hj.call(this, M, m.fI.UPDATE_USER_INFO);
        }
        var Z = G;
        function F(T, W) {
          if (!r.XZ.call(this)) {
            var _ = a.Z.create({ type: t.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(_);
          }
          var A, L = this.context, w = L.orgName, k = L.appName, y = L.accessToken, I = [];
          if (typeof T == "string")
            I = [T];
          else {
            if (Object.prototype.toString.call(T) !== "[object Array]")
              throw new Error("illegal params");
            I = T;
          }
          A = typeof W == "string" ? [W] : W && Object.prototype.toString.call(W) === "[object Array]" ? W : ["nickname", "avatarurl", "mail", "phone", "gender", "sign", "birth", "ext"];
          var H = { url: "".concat(this.apiUrl, "/").concat(w, "/").concat(k, "/metadata/user/get"), type: "POST", data: JSON.stringify({ targets: I, properties: A }), dataType: "json", headers: { Authorization: "Bearer " + y, "Content-Type": "application/json" } };
          return u.kg.debug("Call fetchUserInfoById", T), s.hj.call(this, H, m.fI.GET_USER_INFO);
        }
        function Y(T) {
          if (!r.XZ.call(this)) {
            var W = a.Z.create({ type: t.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(W);
          }
          var _ = this.context, A = _.orgName, L = _.appName, w = _.accessToken, k = { url: "".concat(this.apiUrl, "/").concat(A, "/").concat(L, "/users/").concat(this.user), type: "PUT", dataType: "json", data: JSON.stringify({ nickname: T }), headers: { Authorization: "Bearer " + w, "Content-Type": "application/json" } };
          return u.kg.debug("Call updateCurrentUserNick", T), s.hj.call(this, k);
        }
        function K(T) {
          if (typeof T != "string" || T === "")
            throw Error('Invalid parameter: "agoraToken"');
          var W = this.context, _ = W.orgName, A = W.appName, L = { url: this.apiUrl + "/" + _ + "/" + A + "/token", dataType: "json", type: "POST", data: JSON.stringify({ grant_type: "agora" }), headers: { Authorization: "Bearer " + T, "Content-Type": "application/json" } };
          return u.kg.debug("Call getChatToken", T), s.hj.call(this, L, m.fI.SDK_INTERNAL);
        }
        function V(T) {
          var W = this;
          return new Promise(function(_, A) {
            if (!T.queue)
              throw Error('Invalid parameter: "specified"');
            if (!r.XZ.call(W)) {
              var L = a.Z.create({ type: t.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(L);
            }
            (function w(k) {
              var y = this, I = k.count || 20;
              ne.call(this, { count: I, isGroup: !!k.isGroup, queue: k.queue, start: k.start, format: k.format, success: function(H) {
                if (H.msgs.length >= I || H.is_last) {
                  var M = H.msgs.splice(0, I).reverse();
                  k.success && k.success(M), _(M);
                } else
                  w.call(y, h(h({}, k), { start: null }));
              }, fail: function(H) {
                A(H), k.fail && k.fail(H);
              } });
            }).call(W, T), u.kg.debug("Call fetchHistoryMessages", T);
          });
        }
        function ne(T) {
          var W = this, _ = T.queue, A = this.mr_cache[_] || (this.mr_cache[_] = { msgs: [] }), L = this.context.userId, w = T.start || -1, k = T.count || 20;
          if (A.msgs.length >= k || A.is_last)
            typeof T.success == "function" && T.success(A);
          else {
            A && A.next_key && (w = A.next_key), T.start && (w = T.start);
            var y = { queue: _ + (T.isGroup ? "@conference.easemob.com" : "@easemob.com"), start: w, end: -1 }, I = this.context, H = I.orgName, M = I.appName, D = { url: "".concat(this.apiUrl, "/").concat(H, "/").concat(M, "/users/").concat(L, "/messageroaming"), dataType: "json", type: "POST", headers: { Authorization: "Bearer " + this.token, "Content-Type": "application/json" }, data: JSON.stringify(y), success: function(J) {
              var X = J == null ? void 0 : J.data;
              if (!J.data.msgs)
                return typeof T.success == "function" && T.success(A), A.is_last = !0, void (A.next_key = "");
              var oe = X.msgs, q = oe.length;
              A.is_last = X.is_last, A.next_key = X.next_key;
              for (var z = function(Ae) {
                for (var We = [], Te = 0, je = (Ae = l().atob(Ae)).length; Te < je; ++Te)
                  We.push(Ae.charCodeAt(Te));
                var ie = W.context.root.lookup("easemob.pb.Meta");
                if ((ie = ie.decode(We)).ns === 1)
                  return i.Z.call(W, ie, { errorCode: 0, reason: "" }, !0, T.format);
              }, te = 0; te < q; te++) {
                var re = z(oe[te].msg);
                re && A.msgs.push(re);
              }
              typeof T.success == "function" && T.success(A);
            }, error: function(J) {
              if (J.error && J.error_description) {
                var X = a.Z.create({ type: t.E.WEBIM_CONNCTION_AJAX_ERROR, message: "fetch history messages error", data: J });
                W.onError && W.onError(X);
              }
            } };
            s.hj.call(this, D, m.fI.GET_HISTORY_MSG).catch(function(J) {
              typeof T.fail == "function" && T.fail(J);
            });
          }
        }
        function ae(T) {
          var W = this;
          return new Promise(function(_, A) {
            var L = T.targetId, w = T.cursor, k = w === void 0 ? -1 : w, y = T.pageSize, I = y === void 0 ? 20 : y, H = T.chatType, M = T.searchDirection, D = T.searchOptions, J = D === void 0 ? {} : D, X = J.msgTypes, oe = X === void 0 ? [] : X, q = J.startTime, z = q === void 0 ? null : q, te = J.endTime, re = te === void 0 ? null : te, Ae = J.from, We = Ae === void 0 ? null : Ae;
            if (typeof L != "string" || L === "")
              throw Error('"Invalid parameter": "targetId"');
            if (We && typeof We != "string")
              throw Error('"Invalid parameter": "searchOptions.from"');
            if (oe && !Array.isArray(oe))
              throw Error('"Invalid parameter": "searchOptions.msgTypes"');
            if (z && typeof z != "number")
              throw Error('"Invalid parameter": "searchOptions.startTime"');
            if (re && typeof z != "number")
              throw Error('"Invalid parameter": "searchOptions.endTime"');
            if (!r.XZ.call(W)) {
              var Te = a.Z.create({ type: t.E.REST_PARAMS_STATUS, message: "appkey or token error" });
              return A(Te);
            }
            var je = W.context, ie = je.orgName, Je = je.appName, De = je.userId, ze = T.chatType === "groupChat" ? "@conference.easemob.com" : "@easemob.com", at = { queue: "".concat(L).concat(ze), start: k, pull_number: I, is_positive: M === "down", msgType: oe.join(",") || "", end: -1, startTime: z, endTime: re, userId: H === "singleChat" ? null : We }, st = { url: "".concat(W.apiUrl, "/").concat(ie, "/").concat(Je, "/users/").concat(De, "/messageroaming"), dataType: "json", type: "POST", headers: { Authorization: "Bearer " + W.token, "Content-Type": "application/json" }, data: JSON.stringify(at), success: function(U) {
              for (var Ee, Q = U == null ? void 0 : U.data, ye = Q.msgs || [], _e = function(de) {
                for (var He = [], pe = 0, Xe = (de = l().atob(de)).length; pe < Xe; ++pe)
                  He.push(de.charCodeAt(pe));
                var Ye = W.context.root.lookup("easemob.pb.Meta");
                if ((Ye = Ye.decode(He)).ns === 1)
                  return i.Z.call(W, Ye, { errorCode: 0, reason: "" }, !0, !0);
              }, be = [], Se = 0; Se < ye.length; Se++) {
                var ee = _e(ye[Se].msg);
                ee && be.push(ee);
              }
              Q.msgs = be;
              var le = { cursor: Q.next_key, messages: be, isLast: Q.is_last };
              (Ee = T.success) === null || Ee === void 0 || Ee.call(T, le), _(le);
            }, error: T.fail };
            s.hj.call(W, st).catch(function(U) {
              A(U);
            }), u.kg.debug("Call getHistoryMessages", T);
          });
        }
        function se(T, W) {
          var _ = this;
          return new Promise(function(A, L) {
            var w = { id: _.getUniqueId(), to: T, message: W };
            o.Z.operatRoster.call(_, w, "add", A, L), u.kg.debug("Call addContact", w);
          });
        }
        var ue = me;
        function me(T) {
          var W = this;
          return new Promise(function(_, A) {
            var L = { id: W.getUniqueId(), to: T };
            o.Z.operatRoster.call(W, L, "remove", _, A), u.kg.debug("Call deleteContact", L);
          });
        }
        function ge(T) {
          var W = this;
          return new Promise(function(_, A) {
            var L = { id: W.getUniqueId(), to: T };
            o.Z.operatRoster.call(W, L, "accept", _, A), u.kg.debug("Call acceptInvitation", L);
          });
        }
        var Ce = ge;
        function Re(T) {
          var W = this;
          return new Promise(function(_, A) {
            var L = { id: W.getUniqueId(), to: T };
            o.Z.operatRoster.call(W, L, "decline", _, A), u.kg.debug("Call declineContactInvite", L);
          });
        }
        var Ie = Re;
        function Oe(T) {
          var W = this;
          return new Promise(function(_, A) {
            o.Z.operatRoster.call(W, { to: T.name }, "ban", _, A), u.kg.debug("Call addUsersToBlocklist", T);
          });
        }
        var fe = Oe, ce = Oe;
        function Ue(T) {
          var W = this;
          return new Promise(function(_, A) {
            o.Z.operatRoster.call(W, { to: T.name }, "allow", _, A), u.kg.debug("Call removeUserFromBlocklist", T);
          });
        }
        var Ke = Ue, $e = Ue;
        function Ve(T) {
          var W = this.getUniqueId(), _ = { id: W, to: T.to };
          this._msgHash[W] = h({}, _);
          var A = "";
          T.chatType !== void 0 ? A = T.chatType : T.type !== void 0 && (A = T.type === "chat" ? "singleChat" : T.type);
          var L = { id: W, type: "recall", chatType: A, ackId: T.mid, to: T.to, isChatThread: T.isChatThread || !1, success: T.success, fail: T.fail };
          return u.kg.debug("Call recallMessage", T), this.mSync.send(L, this);
        }
        function Be(T) {
          var W = T || {}, _ = W.messageId, A = W.modifiedMessage;
          if (u.kg.debug("Call modifyMessage", _, A), _ === "")
            throw Error('Invalid parameter: "messageId"');
          if (A.type !== "txt")
            throw Error('Invalid parameter: "modifiedMessage.type"');
          return this.mSync.send(h({ editMessageId: _ }, A));
        }
        function Ze(T) {
          return d(this, void 0, void 0, function() {
            var W, _, A, L, w, k, y, I, H;
            return f(this, function(M) {
              switch (M.label) {
                case 0:
                  if (typeof T.messageId != "string" || !T.messageId)
                    throw Error("Invalid parameter messageId: ".concat(T.messageId));
                  if (typeof T.reaction != "string" || !T.reaction)
                    throw Error("Invalid parameter reaction: ".concat(T.reaction));
                  return r.XZ.call(this) ? (_ = this.context, A = _.orgName, L = _.appName, w = _.accessToken, k = T.reaction, y = T.messageId, I = { msgId: y, message: k }, H = { url: "".concat(this.apiUrl, "/").concat(A, "/").concat(L, "/reaction/user/").concat(this.user), type: "POST", data: JSON.stringify(I), dataType: "json", headers: { Authorization: "Bearer " + w, "Content-Type": "application/json" } }, [4, s.hj.call(this, H)]) : (W = a.Z.create({ type: t.E.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(W)]);
                case 1:
                  return M.sent(), [2];
              }
            });
          });
        }
        function Qe(T) {
          return d(this, void 0, void 0, function() {
            var W, _, A, L, w, k, y, I;
            return f(this, function(H) {
              switch (H.label) {
                case 0:
                  if (typeof T.reaction != "string" || !T.reaction)
                    throw Error("Invalid parameter reactionId: ".concat(T.reaction));
                  return r.XZ.call(this) ? (_ = this.context, A = _.orgName, L = _.appName, w = _.accessToken, k = T.messageId, y = T.reaction, I = { url: "".concat(this.apiUrl, "/").concat(A, "/").concat(L, "/reaction/user/").concat(this.user, "?msgId=").concat(k, "&message=").concat(y), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + w, "Content-Type": "application/json" } }, [4, s.hj.call(this, I)]) : (W = a.Z.create({ type: t.E.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(W)]);
                case 1:
                  return H.sent(), [2];
              }
            });
          });
        }
        function Pe(T) {
          if (typeof T.chatType != "string" || !T.chatType)
            throw Error("Invalid parameter chatType: ".concat(T.chatType));
          if (!T.messageId)
            throw Error("Invalid parameter messageId: ".concat(T.messageId));
          if (!r.XZ.call(this)) {
            var W = a.Z.create({ type: t.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(W);
          }
          var _ = this.context, A = _.orgName, L = _.appName, w = _.accessToken, k = T.chatType, y = T.messageId, I = { msgIdList: typeof y == "string" ? [y] : y, msgType: k === "singleChat" ? "chat" : "groupchat", groupId: T.groupId || null }, H = { url: "".concat(this.apiUrl, "/").concat(A, "/").concat(L, "/reaction/user/").concat(this.user), type: "GET", data: I, dataType: "json", headers: { Authorization: "Bearer " + w, "Content-Type": "application/json" } };
          return s.hj.call(this, H).then(function(M) {
            var D = M.data;
            return D == null || D.forEach(function(J) {
              J == null || J.reactionList.forEach(function(X) {
                X.isAddedBySelf = X.state, delete X.state, delete X.reactionId;
              });
            }), M;
          });
        }
        var Le = Pe;
        function xe(T) {
          if (typeof T.reaction != "string" || !T.reaction)
            throw Error("Invalid parameter reaction: ".concat(T.reaction));
          if (typeof T.messageId != "string" || !T.messageId)
            throw Error("Invalid parameter messageId: ".concat(T.messageId));
          if (!r.XZ.call(this)) {
            var W = a.Z.create({ type: t.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(W);
          }
          var _ = this.context, A = _.orgName, L = _.appName, w = _.accessToken, k = T.cursor, y = T.pageSize, I = { msgId: T.messageId, message: T.reaction, currentPage: k || null, pageSize: y || 20 }, H = { url: "".concat(this.apiUrl, "/").concat(A, "/").concat(L, "/reaction/user/").concat(this.user, "/detail"), type: "GET", data: I, dataType: "json", headers: { Authorization: "Bearer " + w, "Content-Type": "application/json" } };
          return s.hj.call(this, H).then(function(M) {
            return M.data.isAddedBySelf = M.data.state, delete M.data.state, delete M.data.reactionId, M;
          });
        }
        function ve(T) {
          return d(this, void 0, void 0, function() {
            var W, _, A, L, w, k, y, I, H, M, D;
            return f(this, function(J) {
              switch (J.label) {
                case 0:
                  if (typeof T.reportType != "string" || !T.reportType)
                    throw Error("Invalid parameter reportType: ".concat(T.reportType));
                  if (typeof T.messageId != "string" || !T.messageId)
                    throw Error("Invalid parameter messageId: ".concat(T.messageId));
                  if (typeof T.reportReason != "string" || !T.reportReason)
                    throw Error("Invalid parameter messageId: ".concat(T.reportReason));
                  return r.XZ.call(this) ? (_ = this.context, A = _.orgName, L = _.appName, w = _.accessToken, k = T.reportType, y = T.reportReason, I = T.messageId, H = { username: this.user, reportType: k, reportReason: y }, M = "".concat(this.apiUrl, "/").concat(A, "/").concat(L, "/user/").concat(this.user, "/moderation/report/message/").concat(I), D = { url: M, type: "POST", data: JSON.stringify(H), dataType: "json", headers: { Authorization: "Bearer " + w, "Content-Type": "application/json" } }, [4, s.hj.call(this, D)]) : (W = a.Z.create({ type: t.E.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(W)]);
                case 1:
                  return J.sent(), [2];
              }
            });
          });
        }
        function we(T) {
          var W;
          return d(this, void 0, void 0, function() {
            var _, A, L, w, k, y, I, H, M;
            return f(this, function(D) {
              switch (D.label) {
                case 0:
                  if (typeof T.targetId != "string" || T.targetId === "")
                    throw Error('"Invalid parameter targetId": ' + T.targetId);
                  if (!["singleChat", "groupChat"].includes(T.chatType))
                    throw Error('"Invalid parameter chatType": ' + T.chatType);
                  if (T.beforeTimeStamp && (typeof T.beforeTimeStamp != "number" || T.beforeTimeStamp < 0 || ((W = T.beforeTimeStamp) === null || W === void 0 ? void 0 : W.toString().length) > 18))
                    throw Error('"Invalid parameter beforeTimeStamp": ' + T.beforeTimeStamp);
                  if (T.messageIds && !(Array.isArray(T.messageIds) && T.messageIds.length > 0 && T.messageIds.length <= 20))
                    throw Error('"Invalid parameter messageIds": ' + T.messageIds);
                  if (!T.messageIds && !T.beforeTimeStamp)
                    throw Error("messageIds or beforeTimeStamp field is required.");
                  return r.XZ.call(this) ? (A = this.context, L = A.orgName, w = A.appName, k = A.userId, y = T.chatType === "singleChat" ? "userId" : "groupId", I = T.chatType === "singleChat" ? "chat" : "group", H = T.messageIds ? "".concat(this.apiUrl, "/").concat(L, "/").concat(w, "/sdk/message/roaming/").concat(I, "/user/").concat(k, "?").concat(y, "=").concat(T.targetId, "&msgIdList=").concat(T.messageIds, "&resource=").concat(this.clientResource) : "".concat(this.apiUrl, "/").concat(L, "/").concat(w, "/sdk/message/roaming/").concat(I, "/user/").concat(k, "/time?").concat(y, "=").concat(T.targetId, "&delTime=").concat(T.beforeTimeStamp, "&&resource=").concat(this.clientResource), M = { url: H, dataType: "json", type: "DELETE", headers: { Authorization: "Bearer " + this.token, "Content-Type": "application/json" } }, u.kg.debug("Call removeHistoryMessages", T), [4, s.hj.call(this, M)]) : (_ = a.Z.create({ type: t.E.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(_)]);
                case 1:
                  return D.sent(), [2];
              }
            });
          });
        }
        function ke(T) {
          if (!r.XZ.call(this)) {
            var W = a.Z.create({ type: t.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(W);
          }
          if (T != null && T.pageSize && typeof T.pageSize != "number")
            throw Error("Invalid parameter pageSize: ".concat(T.pageSize));
          if (T != null && T.cursor && typeof T.cursor != "string")
            throw Error("Invalid parameter cursor: ".concat(T.cursor));
          var _ = this.context, A = _.orgName, L = _.appName, w = _.accessToken, k = { url: "".concat(this.apiUrl, "/").concat(A, "/").concat(L, "/sdk/user/").concat(this.user, "/user_channels/list?"), type: "GET", dataType: "json", data: { limit: (T == null ? void 0 : T.pageSize) || 20, cursor: (T == null ? void 0 : T.cursor) || "" }, headers: { Authorization: "Bearer " + w, "Content-Type": "application/json" } };
          return u.kg.debug("Call getServerConversations", T), s.hj.call(this, k, m.fI.GET_SESSION_LIST).then(function(y) {
            return Ne(y);
          });
        }
        function Ne(T) {
          var W = T.data, _ = W.cursor, A = W.channel_infos, L = [];
          A == null || A.forEach(function(k) {
            var y = null;
            k != null && k.meta && JSON.stringify(k.meta) !== "{}" && (k.meta.payload = JSON.parse(k.meta.payload), y = (0, g.w)(k.meta));
            var I = { conversationId: k.session_to, conversationType: k.session_type === "chat" ? "singleChat" : "groupChat", isPinned: k.is_top, pinnedTime: k.is_top ? k.update_top_status_time : 0, unReadCount: k.unread_num, lastMessage: y };
            L.push(I);
          });
          var w = { conversations: L, cursor: _ || "" };
          return { type: T.type, data: w };
        }
        function j(T) {
          if (!r.XZ.call(this)) {
            var W = a.Z.create({ type: t.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(W);
          }
          if (T != null && T.pageSize && typeof T.pageSize != "number")
            throw Error("Invalid parameter pageSize: ".concat(T.pageSize));
          if (T != null && T.cursor && typeof T.cursor != "string")
            throw Error("Invalid parameter cursor: ".concat(T.cursor));
          var _ = this.context, A = _.orgName, L = _.appName, w = _.accessToken, k = { url: "".concat(this.apiUrl, "/").concat(A, "/").concat(L, "/sdk/user/").concat(this.user, "/user_channels/list?"), type: "GET", dataType: "json", data: { limit: (T == null ? void 0 : T.pageSize) || 20, cursor: (T == null ? void 0 : T.cursor) || "", is_top: !0 }, headers: { Authorization: "Bearer " + w, "Content-Type": "application/json" } };
          return u.kg.debug("Call getServerConversations", T), s.hj.call(this, k, m.fI.GET_SESSION_LIST).then(function(y) {
            return Ne(y);
          });
        }
        function B(T) {
          return d(this, void 0, void 0, function() {
            var W, _, A, L, w, k, y, I, H, M, D, J, X, oe;
            return f(this, function(q) {
              if (!r.XZ.call(this))
                return W = a.Z.create({ type: t.E.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(W)];
              if (_ = T.conversationId, A = T.conversationType, L = T.isPinned, w = A === "singleChat" ? "chat" : "groupChat", typeof _ != "string" || _ === "")
                throw Error("Invalid parameter conversationId: ".concat(_));
              if (!["singleChat", "groupChat"].includes(A))
                throw Error("Invalid parameter conversationType: ".concat(A));
              if (typeof L != "boolean")
                throw Error("Invalid parameter isPinned: ".concat(L));
              return k = this.context, y = k.orgName, I = k.appName, H = k.accessToken, M = k.jid, D = { type: w, to: _ }, J = L ? "" : "type=".concat(w, "&to=").concat(_, "&"), X = "".concat(this.apiUrl, "/").concat(y, "/").concat(I, "/sdk/user/").concat(this.user, "/user_channel/top?").concat(J, "resource=").concat(M.clientResource), oe = { url: X, type: L ? "POST" : "DELETE", dataType: "json", headers: { Authorization: "Bearer " + H, "Content-Type": "application/json" } }, L && (oe.data = JSON.stringify(D)), u.kg.debug("Call pinConversation", T), [2, s.hj.call(this, oe, m.fI.PIN_CONVERSATION).then(function(z) {
                var te = z.type, re = z.data;
                return { type: te, data: { isPinned: re.is_top || !1, pinnedTime: re.is_top ? re.update_top_status_time : 0 } };
              })];
            });
          });
        }
      }, 3770: function(p, R, e) {
        e.r(R), e.d(R, { getPresenceStatus: function() {
          return d;
        }, getSubscribedPresenceList: function() {
          return g;
        }, getSubscribedPresencelist: function() {
          return h;
        }, publishPresence: function() {
          return l;
        }, subscribePresence: function() {
          return u;
        }, unsubscribePresence: function() {
          return m;
        } }), e(1539), e(8674), e(2526), e(1817), e(2165), e(6992), e(8783), e(3948), e(2222), e(9753);
        var r = e(4370), t = e(3246), a = e(7252), s = e(5531), i = e(7360), o = function(f, b, c, S) {
          return new (c || (c = Promise))(function(v, N) {
            function x(E) {
              try {
                C(S.next(E));
              } catch (P) {
                N(P);
              }
            }
            function O(E) {
              try {
                C(S.throw(E));
              } catch (P) {
                N(P);
              }
            }
            function C(E) {
              var P;
              E.done ? v(E.value) : (P = E.value, P instanceof c ? P : new c(function(G) {
                G(P);
              })).then(x, O);
            }
            C((S = S.apply(f, b || [])).next());
          });
        }, n = function(f, b) {
          var c, S, v, N, x = { label: 0, sent: function() {
            if (1 & v[0])
              throw v[1];
            return v[1];
          }, trys: [], ops: [] };
          return N = { next: O(0), throw: O(1), return: O(2) }, typeof Symbol == "function" && (N[Symbol.iterator] = function() {
            return this;
          }), N;
          function O(C) {
            return function(E) {
              return function(P) {
                if (c)
                  throw new TypeError("Generator is already executing.");
                for (; x; )
                  try {
                    if (c = 1, S && (v = 2 & P[0] ? S.return : P[0] ? S.throw || ((v = S.return) && v.call(S), 0) : S.next) && !(v = v.call(S, P[1])).done)
                      return v;
                    switch (S = 0, v && (P = [2 & P[0], v.value]), P[0]) {
                      case 0:
                      case 1:
                        v = P;
                        break;
                      case 4:
                        return x.label++, { value: P[1], done: !1 };
                      case 5:
                        x.label++, S = P[1], P = [0];
                        continue;
                      case 7:
                        P = x.ops.pop(), x.trys.pop();
                        continue;
                      default:
                        if (!((v = (v = x.trys).length > 0 && v[v.length - 1]) || P[0] !== 6 && P[0] !== 2)) {
                          x = 0;
                          continue;
                        }
                        if (P[0] === 3 && (!v || P[1] > v[0] && P[1] < v[3])) {
                          x.label = P[1];
                          break;
                        }
                        if (P[0] === 6 && x.label < v[1]) {
                          x.label = v[1], v = P;
                          break;
                        }
                        if (v && x.label < v[2]) {
                          x.label = v[2], x.ops.push(P);
                          break;
                        }
                        v[2] && x.ops.pop(), x.trys.pop();
                        continue;
                    }
                    P = b.call(f, x);
                  } catch (G) {
                    P = [6, G], S = 0;
                  } finally {
                    c = v = 0;
                  }
                if (5 & P[0])
                  throw P[1];
                return { value: P[0] ? P[1] : void 0, done: !0 };
              }([C, E]);
            };
          }
        };
        function l(f) {
          return o(this, void 0, void 0, function() {
            var b, c, S, v, N, x, O, C, E;
            return n(this, function(P) {
              switch (P.label) {
                case 0:
                  if (typeof f.description != "string")
                    throw Error('Invalid parameter: "description"');
                  return t.XZ.call(this) ? (c = this.context, S = c.accessToken, v = c.orgName, N = c.appName, x = c.userId, O = this.context.jid.clientResource, C = { ext: f.description }, E = { url: "".concat(this.apiUrl, "/").concat(v, "/").concat(N, "/users/").concat(x, "/presence/").concat(O, "/1"), type: "POST", dataType: "json", data: JSON.stringify(C), headers: { Authorization: "Bearer " + S, "Content-Type": "application/json" }, success: f.success, error: f.error }, i.kg.debug("Call publishPresence:", f), [4, r.hj.call(this, E)]) : (b = a.Z.create({ type: s.E.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(b)]);
                case 1:
                  return P.sent(), [2];
              }
            });
          });
        }
        function u(f) {
          if (!Array.isArray(f.usernames))
            throw Error('Invalid parameter: "usernames"');
          if (!f.usernames.length)
            throw Error('"usernames" can not be empty');
          if (typeof f.expiry != "number")
            throw Error('Invalid parameter: "expiry"');
          if (!t.XZ.call(this)) {
            var b = a.Z.create({ type: s.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(b);
          }
          var c = this.context, S = c.orgName, v = c.appName, N = c.userId, x = c.accessToken, O = { usernames: f.usernames }, C = { url: "".concat(this.apiUrl, "/").concat(S, "/").concat(v, "/users/").concat(N, "/presence/").concat(f.expiry), type: "POST", dataType: "json", data: JSON.stringify(O), headers: { Authorization: "Bearer " + x, "Content-Type": "application/json" }, success: f.success, error: f.error };
          return i.kg.debug("Call subscribePresence:", f), r.hj.call(this, C).then(function(E) {
            return E.data = { result: E == null ? void 0 : E.result }, E;
          });
        }
        function m(f) {
          return o(this, void 0, void 0, function() {
            var b, c, S, v, N, x, O;
            return n(this, function(C) {
              switch (C.label) {
                case 0:
                  if (!Array.isArray(f.usernames))
                    throw Error('Invalid parameter: "usernames"');
                  if (!f.usernames.length)
                    throw Error('"usernames" can not be empty');
                  return t.XZ.call(this) ? (c = this.context, S = c.orgName, v = c.appName, N = c.userId, x = c.accessToken, O = { url: "".concat(this.apiUrl, "/").concat(S, "/").concat(v, "/users/").concat(N, "/presence"), type: "DELETE", dataType: "json", data: JSON.stringify(f.usernames), headers: { Authorization: "Bearer " + x, "Content-Type": "application/json" }, success: f.success, error: f.error }, i.kg.debug("Call unsubscribePresence:", f), [4, r.hj.call(this, O)]) : (b = a.Z.create({ type: s.E.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(b)]);
                case 1:
                  return C.sent(), [2];
              }
            });
          });
        }
        function g(f) {
          if (typeof f.pageNum != "number" || typeof f.pageSize != "number")
            throw Error('Invalid parameter: "pageNum or pageSize"');
          if (f.pageNum < 0 || f.pageSize < 0)
            throw Error('"pageNum" should >= 0 and "pageSize" should >= 0');
          if (!t.XZ.call(this)) {
            var b = a.Z.create({ type: s.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(b);
          }
          var c = this.context, S = c.orgName, v = c.appName, N = c.userId, x = c.accessToken, O = { url: "".concat(this.apiUrl, "/").concat(S, "/").concat(v, "/users/").concat(N, "/presence/sublist?pageNum=").concat(f.pageNum, "&pageSize=").concat(f.pageSize), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + x, "Content-Type": "application/json" }, success: f.success, error: f.error };
          return i.kg.debug("Call getSubscribedPresenceList:", f), r.hj.call(this, O).then(function(C) {
            return C.data = { result: C == null ? void 0 : C.result }, C;
          });
        }
        var h = g;
        function d(f) {
          if (!Array.isArray(f.usernames))
            throw Error('Invalid parameter: "usernames"');
          if (!f.usernames.length)
            throw Error('"usernames" can not be empty');
          if (!t.XZ.call(this)) {
            var b = a.Z.create({ type: s.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(b);
          }
          var c = { usernames: f.usernames }, S = this.context, v = S.orgName, N = S.appName, x = S.userId, O = S.accessToken, C = { url: "".concat(this.apiUrl, "/").concat(v, "/").concat(N, "/users/").concat(x, "/presence"), type: "POST", dataType: "json", data: JSON.stringify(c), headers: { Authorization: "Bearer " + O, "Content-Type": "application/json" }, success: f.success, error: f.error };
          return i.kg.debug("Call getPresenceStatus:", f), r.hj.call(this, C).then(function(E) {
            return E.data = { result: E == null ? void 0 : E.result }, E;
          });
        }
      }, 1735: function(p, R, e) {
        e.r(R), e.d(R, { clearRemindTypeForConversation: function() {
          return u;
        }, getPushPerformLanguage: function() {
          return d;
        }, getSilentModeForAll: function() {
          return n;
        }, getSilentModeForConversation: function() {
          return m;
        }, getSilentModeForConversations: function() {
          return g;
        }, setPushPerformLanguage: function() {
          return h;
        }, setSilentModeForAll: function() {
          return o;
        }, setSilentModeForConversation: function() {
          return l;
        } }), e(7941), e(1539), e(8674), e(2222), e(9753), e(9554), e(4747), e(9600);
        var r = e(4370), t = e(3246), a = e(7252), s = e(5531), i = e(7360);
        function o(f) {
          if (!(f.options instanceof Object))
            throw Error('Invalid parameter: "options"');
          var b = f.options.paramType;
          if (typeof b != "number" || b < 0 || b > 2)
            throw Error('Invalid parameter: "options of paramType"');
          if (b === 0) {
            if (typeof f.options.remindType != "string")
              throw Error('Invalid parameter: "options of remindType"');
          } else if (b === 1) {
            if (typeof f.options.duration != "number")
              throw Error('Invalid parameter: "options of duration"');
          } else if (b === 2) {
            var c = f.options, S = c.startTime, v = c.endTime;
            if (!(S instanceof Object && Object.keys(S).length))
              throw Error('Invalid parameter: "options of startTime"');
            if (!S.hours || typeof S.hours != "number" || !S.minutes || typeof S.minutes != "number")
              throw Error('Invalid parameter: "options of startTime of hours or minutes"');
            if (!(v instanceof Object && Object.keys(v).length))
              throw Error('Invalid parameter: "options of endTime"');
            if (!v.hours || typeof v.hours != "number" || !v.minutes || typeof v.minutes != "number")
              throw Error('Invalid parameter: "options of endTime of hours or minutes"');
          }
          if (!t.XZ.call(this)) {
            var N = a.Z.create({ type: s.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(N);
          }
          var x = this.context, O = x.accessToken, C = x.orgName, E = x.appName, P = x.userId, G = {};
          switch (b) {
            case 0:
              G = { type: f.options.remindType };
              break;
            case 1:
              G = { ignoreDuration: f.options.duration };
              break;
            case 2:
              var Z = f.options;
              S = Z.startTime, v = Z.endTime, G = { ignoreInterval: "".concat(S.hours, ":").concat(S.minutes, "-").concat(v.hours, ":").concat(v.minutes) };
          }
          var F = { url: "".concat(this.apiUrl, "/").concat(C, "/").concat(E, "/users/").concat(P, "/notification/user/").concat(P), type: "PUT", dataType: "json", data: JSON.stringify(G), headers: { Authorization: "Bearer " + O, "Content-Type": "application/json" }, success: f.success, error: f.error };
          return i.kg.debug("Call setSilentModeForAll:", f), r.hj.call(this, F);
        }
        function n(f) {
          if (!t.XZ.call(this)) {
            var b = a.Z.create({ type: s.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(b);
          }
          var c = this.context, S = c.accessToken, v = c.orgName, N = c.appName, x = c.userId, O = { url: "".concat(this.apiUrl, "/").concat(v, "/").concat(N, "/users/").concat(x, "/notification/user/").concat(x), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + S, "Content-Type": "application/json" }, success: f == null ? void 0 : f.success, error: f == null ? void 0 : f.error };
          return i.kg.debug("Call getSilentModeForAll:", f), r.hj.call(this, O);
        }
        function l(f) {
          if (typeof f.conversationId != "string" || !f.conversationId)
            throw Error('Invalid parameter: "conversationId"');
          if (typeof f.type != "string" || !f.type)
            throw Error('Invalid parameter: "type"');
          if (!(f.options instanceof Object))
            throw Error('Invalid parameter: "options"');
          var b = f.options.paramType;
          if (typeof b != "number" || b < 0 || b > 2)
            throw Error('Invalid parameter: "options of paramType"');
          if (b === 0) {
            if (typeof f.options.remindType != "string")
              throw Error('Invalid parameter: "options of remindType"');
          } else if (b === 1) {
            if (typeof f.options.duration != "number")
              throw Error('Invalid parameter: "options of duration"');
          } else if (b === 2) {
            var c = f.options, S = c.startTime, v = c.endTime;
            if (!(S instanceof Object && Object.keys(S).length))
              throw Error('Invalid parameter: "options of startTime"');
            if (!S.hours || typeof S.hours != "number" || !S.minutes || typeof S.minutes != "number")
              throw Error('Invalid parameter: "options of startTime of hours or minutes"');
            if (!(v instanceof Object && Object.keys(v).length))
              throw Error('Invalid parameter: "options of endTime"');
            if (!v.hours || typeof v.hours != "number" || !v.minutes || typeof v.minutes != "number")
              throw Error('Invalid parameter: "options of endTime of hours or minutes"');
          }
          if (!t.XZ.call(this)) {
            var N = a.Z.create({ type: s.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(N);
          }
          var x = this.context, O = x.accessToken, C = x.orgName, E = x.appName, P = x.userId, G = "chatgroup", Z = {};
          switch (b) {
            case 0:
              Z = { type: f.options.remindType };
              break;
            case 1:
              Z = { ignoreDuration: f.options.duration };
              break;
            case 2:
              var F = f.options;
              S = F.startTime, v = F.endTime, Z = { ignoreInterval: "".concat(S.hours, ":").concat(S.minutes, "-").concat(v.hours, ":").concat(v.minutes) };
          }
          f.type === "singleChat" && (G = "user");
          var Y = { url: "".concat(this.apiUrl, "/").concat(C, "/").concat(E, "/users/").concat(P, "/notification/").concat(G, "/").concat(f.conversationId), type: "PUT", dataType: "json", data: JSON.stringify(Z), headers: { Authorization: "Bearer " + O, "Content-Type": "application/json" }, success: f.success, error: f.error };
          return i.kg.debug("Call setSilentModeForConversation:", f), r.hj.call(this, Y);
        }
        function u(f) {
          if (typeof f.conversationId != "string" || !f.conversationId)
            throw Error('Invalid parameter: "conversationId"');
          if (typeof f.type != "string" || !f.type)
            throw Error('Invalid parameter: "type"');
          if (!t.XZ.call(this)) {
            var b = a.Z.create({ type: s.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(b);
          }
          var c = this.context, S = c.accessToken, v = c.orgName, N = c.appName, x = c.userId, O = "chatgroup";
          f.type === "singleChat" && (O = "user");
          var C = { url: "".concat(this.apiUrl, "/").concat(v, "/").concat(N, "/users/").concat(x, "/notification/").concat(O, "/").concat(f.conversationId), type: "PUT", dataType: "json", data: JSON.stringify({ type: "DEFAULT" }), headers: { Authorization: "Bearer " + S, "Content-Type": "application/json" }, success: f.success, error: f.error };
          return i.kg.debug("Call clearRemindTypeForConversation:", f), r.hj.call(this, C);
        }
        function m(f) {
          if (typeof f.conversationId != "string" || !f.conversationId)
            throw Error('Invalid parameter: "conversationId"');
          if (typeof f.type != "string" || !f.type)
            throw Error('Invalid parameter: "type"');
          if (!t.XZ.call(this)) {
            var b = a.Z.create({ type: s.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(b);
          }
          var c = this.context, S = c.accessToken, v = c.orgName, N = c.appName, x = c.userId, O = "chatgroup";
          f.type === "singleChat" && (O = "user");
          var C = { url: "".concat(this.apiUrl, "/").concat(v, "/").concat(N, "/users/").concat(x, "/notification/").concat(O, "/").concat(f.conversationId), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + S, "Content-Type": "application/json" }, success: f.success, error: f.error };
          return i.kg.debug("Call getSilentModeForConversation:", f), r.hj.call(this, C);
        }
        function g(f) {
          if (!Array.isArray(f.conversationList))
            throw Error('Invalid parameter: "conversationList"');
          if (!t.XZ.call(this)) {
            var b = a.Z.create({ type: s.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(b);
          }
          var c = this.context, S = c.accessToken, v = c.orgName, N = c.appName, x = c.userId, O = [], C = [];
          f.conversationList.forEach(function(Z) {
            Z.type === "singleChat" ? O.push(Z.id) : C.push(Z.id);
          });
          var E = O.length ? O.join(",") : "", P = C.length ? C.join(",") : "", G = { url: "".concat(this.apiUrl, "/").concat(v, "/").concat(N, "/users/").concat(x, "/notification?user=").concat(E, "&group=").concat(P), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + S, "Content-Type": "application/json" }, success: f.success, error: f.error };
          return i.kg.debug("Call getSilentModeForConversations:", f), r.hj.call(this, G);
        }
        function h(f) {
          if (typeof f.language != "string" || !f.language)
            throw Error('Invalid parameter: "language"');
          if (!t.XZ.call(this)) {
            var b = a.Z.create({ type: s.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(b);
          }
          var c = { translationLanguage: f.language }, S = this.context, v = S.accessToken, N = S.orgName, x = S.appName, O = S.userId, C = { url: "".concat(this.apiUrl, "/").concat(N, "/").concat(x, "/users/").concat(O, "/notification/language"), type: "PUT", dataType: "json", data: JSON.stringify(c), headers: { Authorization: "Bearer " + v, "Content-Type": "application/json" }, success: f.success, error: f.error };
          return i.kg.debug("Call setPushPerformLanguage:", f), r.hj.call(this, C);
        }
        function d(f) {
          if (!t.XZ.call(this)) {
            var b = a.Z.create({ type: s.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(b);
          }
          var c = this.context, S = c.accessToken, v = c.orgName, N = c.appName, x = c.userId, O = { url: "".concat(this.apiUrl, "/").concat(v, "/").concat(N, "/users/").concat(x, "/notification/language"), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + S, "Content-Type": "application/json" }, success: f == null ? void 0 : f.success, error: f == null ? void 0 : f.error };
          return i.kg.debug("Call getPushPerformLanguage:", f), r.hj.call(this, O);
        }
      }, 7384: function(p, R, e) {
        e.r(R), e.d(R, { changeChatThreadName: function() {
          return h;
        }, createChatThread: function() {
          return l;
        }, destroyChatThread: function() {
          return g;
        }, getChatThreadDetail: function() {
          return v;
        }, getChatThreadLastMessage: function() {
          return S;
        }, getChatThreadMembers: function() {
          return d;
        }, getChatThreads: function() {
          return c;
        }, getJoinedChatThreads: function() {
          return b;
        }, joinChatThread: function() {
          return u;
        }, leaveChatThread: function() {
          return m;
        }, removeChatThreadMember: function() {
          return f;
        } }), e(1539), e(8674), e(2526), e(1817), e(2165), e(6992), e(8783), e(3948), e(8309), e(2222), e(9554), e(4747), e(9753);
        var r = e(5531), t = e(7252), a = e(4370), s = e(3246), i = e(4363), o = function(N, x, O, C) {
          return new (O || (O = Promise))(function(E, P) {
            function G(Y) {
              try {
                F(C.next(Y));
              } catch (K) {
                P(K);
              }
            }
            function Z(Y) {
              try {
                F(C.throw(Y));
              } catch (K) {
                P(K);
              }
            }
            function F(Y) {
              var K;
              Y.done ? E(Y.value) : (K = Y.value, K instanceof O ? K : new O(function(V) {
                V(K);
              })).then(G, Z);
            }
            F((C = C.apply(N, x || [])).next());
          });
        }, n = function(N, x) {
          var O, C, E, P, G = { label: 0, sent: function() {
            if (1 & E[0])
              throw E[1];
            return E[1];
          }, trys: [], ops: [] };
          return P = { next: Z(0), throw: Z(1), return: Z(2) }, typeof Symbol == "function" && (P[Symbol.iterator] = function() {
            return this;
          }), P;
          function Z(F) {
            return function(Y) {
              return function(K) {
                if (O)
                  throw new TypeError("Generator is already executing.");
                for (; G; )
                  try {
                    if (O = 1, C && (E = 2 & K[0] ? C.return : K[0] ? C.throw || ((E = C.return) && E.call(C), 0) : C.next) && !(E = E.call(C, K[1])).done)
                      return E;
                    switch (C = 0, E && (K = [2 & K[0], E.value]), K[0]) {
                      case 0:
                      case 1:
                        E = K;
                        break;
                      case 4:
                        return G.label++, { value: K[1], done: !1 };
                      case 5:
                        G.label++, C = K[1], K = [0];
                        continue;
                      case 7:
                        K = G.ops.pop(), G.trys.pop();
                        continue;
                      default:
                        if (!((E = (E = G.trys).length > 0 && E[E.length - 1]) || K[0] !== 6 && K[0] !== 2)) {
                          G = 0;
                          continue;
                        }
                        if (K[0] === 3 && (!E || K[1] > E[0] && K[1] < E[3])) {
                          G.label = K[1];
                          break;
                        }
                        if (K[0] === 6 && G.label < E[1]) {
                          G.label = E[1], E = K;
                          break;
                        }
                        if (E && G.label < E[2]) {
                          G.label = E[2], G.ops.push(K);
                          break;
                        }
                        E[2] && G.ops.pop(), G.trys.pop();
                        continue;
                    }
                    K = x.call(N, G);
                  } catch (V) {
                    K = [6, V], C = 0;
                  } finally {
                    O = E = 0;
                  }
                if (5 & K[0])
                  throw K[1];
                return { value: K[0] ? K[1] : void 0, done: !0 };
              }([F, Y]);
            };
          }
        };
        function l(N) {
          if (typeof N.name != "string" || N.name === "")
            throw Error("Invalid parameter name: ".concat(N.name));
          if (typeof N.messageId != "string" || N.messageId === "")
            throw Error("Invalid parameter messageId: ".concat(N.messageId));
          if (typeof N.parentId != "string" || N.parentId === "")
            throw Error("Invalid parameter parentId: ".concat(N.parentId));
          if (!s.XZ.call(this)) {
            var x = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(x);
          }
          var O = this.context, C = O.orgName, E = O.appName, P = O.accessToken, G = O.jid, Z = { name: N.name, msg_id: N.messageId, group_id: N.parentId, owner: this.user }, F = { url: "".concat(this.apiUrl, "/").concat(C, "/").concat(E, "/thread?resource=").concat(G.clientResource), type: "POST", dataType: "json", data: JSON.stringify(Z), headers: { Authorization: "Bearer " + P, "Content-Type": "application/json" } };
          return a.hj.call(this, F).then(function(Y) {
            var K = Y.data.thread_id;
            return Y.data = { chatThreadId: K }, Y;
          });
        }
        function u(N) {
          if (typeof N.chatThreadId != "string" || N.chatThreadId === "")
            throw Error("Invalid parameter chatThreadId: ".concat(N.chatThreadId));
          if (!s.XZ.call(this)) {
            var x = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(x);
          }
          var O = this.context, C = O.orgName, E = O.appName, P = O.accessToken, G = O.jid, Z = { url: "".concat(this.apiUrl, "/").concat(C, "/").concat(E, "/thread/").concat(N.chatThreadId, "/user/").concat(this.user, "/join?resource=").concat(G.clientResource), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + P, "Content-Type": "application/json" } };
          return a.hj.call(this, Z).then(function(F) {
            var Y = F.data.detail;
            return Y.messageId = Y.msgId, Y.parentId = Y.groupId, delete Y.msgId, delete Y.groupId, F;
          });
        }
        function m(N) {
          return o(this, void 0, void 0, function() {
            var x, O, C, E, P, G, Z;
            return n(this, function(F) {
              switch (F.label) {
                case 0:
                  if (typeof N.chatThreadId != "string" || N.chatThreadId === "")
                    throw Error("Invalid parameter chatThreadId: ".concat(N.chatThreadId));
                  return s.XZ.call(this) ? (O = this.context, C = O.orgName, E = O.appName, P = O.accessToken, G = O.jid, Z = { url: "".concat(this.apiUrl, "/").concat(C, "/").concat(E, "/thread/").concat(N.chatThreadId, "/user/").concat(this.user, "/quit?resource=").concat(G.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + P, "Content-Type": "application/json" } }, [4, a.hj.call(this, Z)]) : (x = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(x)]);
                case 1:
                  return F.sent(), [2];
              }
            });
          });
        }
        function g(N) {
          return o(this, void 0, void 0, function() {
            var x, O, C, E, P, G, Z;
            return n(this, function(F) {
              switch (F.label) {
                case 0:
                  if (typeof N.chatThreadId != "string" || N.chatThreadId === "")
                    throw Error("Invalid parameter chatThreadId: ".concat(N.chatThreadId));
                  return s.XZ.call(this) ? (O = this.context, C = O.orgName, E = O.appName, P = O.accessToken, G = O.jid, Z = { url: "".concat(this.apiUrl, "/").concat(C, "/").concat(E, "/thread/").concat(N.chatThreadId, "?resource=").concat(G.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + P, "Content-Type": "application/json" } }, [4, a.hj.call(this, Z)]) : (x = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(x)]);
                case 1:
                  return F.sent(), [2];
              }
            });
          });
        }
        function h(N) {
          if (typeof N.chatThreadId != "string" || N.chatThreadId === "")
            throw Error("Invalid parameter chatThreadId: ".concat(N.chatThreadId));
          if (typeof N.name != "string" || N.name === "")
            throw Error("Invalid parameter name: ".concat(N.name));
          if (!s.XZ.call(this)) {
            var x = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(x);
          }
          var O = this.context, C = O.orgName, E = O.appName, P = O.accessToken, G = O.jid, Z = { name: N.name }, F = { url: "".concat(this.apiUrl, "/").concat(C, "/").concat(E, "/thread/").concat(N.chatThreadId, "?resource=").concat(G.clientResource), type: "PUT", dataType: "json", data: JSON.stringify(Z), headers: { Authorization: "Bearer " + P, "Content-Type": "application/json" } };
          return a.hj.call(this, F);
        }
        function d(N) {
          if (typeof N.chatThreadId != "string" || N.chatThreadId === "")
            throw Error("Invalid parameter chatThreadId: ".concat(N.chatThreadId));
          if (!s.XZ.call(this)) {
            var x = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(x);
          }
          var O = this.context, C = O.orgName, E = O.appName, P = O.accessToken, G = { limit: N.pageSize || 20, cursor: N.cursor || "" }, Z = { url: "".concat(this.apiUrl, "/").concat(C, "/").concat(E, "/thread/").concat(N.chatThreadId, "/users"), type: "GET", dataType: "json", data: G, headers: { Authorization: "Bearer " + P, "Content-Type": "application/json" } };
          return a.hj.call(this, Z);
        }
        function f(N) {
          if (typeof N.chatThreadId != "string" || N.chatThreadId === "")
            throw Error("Invalid parameter chatThreadId: ".concat(N.chatThreadId));
          if (typeof N.username != "string" || N.username === "")
            throw Error("Invalid parameter username: ".concat(N.username));
          if (!s.XZ.call(this)) {
            var x = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(x);
          }
          var O = this.context, C = O.orgName, E = O.appName, P = O.accessToken, G = O.jid, Z = { url: "".concat(this.apiUrl, "/").concat(C, "/").concat(E, "/thread/").concat(N.chatThreadId, "/users/").concat(N.username, "?resource=").concat(G.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + P, "Content-Type": "application/json" } };
          return a.hj.call(this, Z);
        }
        function b(N) {
          if (!s.XZ.call(this)) {
            var x = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(x);
          }
          var O = this.context, C = O.orgName, E = O.appName, P = O.accessToken, G = { limit: N.pageSize || 20, cursor: N.cursor || "" }, Z = { url: N.parentId ? "".concat(this.apiUrl, "/").concat(C, "/").concat(E, "/threads/chatgroups/").concat(N.parentId, "/user/").concat(this.user) : "".concat(this.apiUrl, "/").concat(C, "/").concat(E, "/threads/user/").concat(this.user), type: "GET", dataType: "json", data: G, headers: { Authorization: "Bearer " + P, "Content-Type": "application/json" } };
          return a.hj.call(this, Z).then(function(F) {
            var Y = F.entities;
            return Y == null || Y.forEach(function(K) {
              K.parentId = K.groupId, K.messageId = K.msgId, delete K.groupId, delete K.msgId;
            }), F;
          });
        }
        function c(N) {
          if (typeof N.parentId != "string" || N.parentId === "")
            throw Error("Invalid parameter parentId: ".concat(N.parentId));
          if (!s.XZ.call(this)) {
            var x = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(x);
          }
          var O = this.context, C = O.orgName, E = O.appName, P = O.accessToken, G = { cursor: N.cursor || "", limit: N.pageSize || 20 }, Z = { url: "".concat(this.apiUrl, "/").concat(C, "/").concat(E, "/threads/chatgroups/").concat(N.parentId), type: "GET", dataType: "json", data: G, headers: { Authorization: "Bearer " + P, "Content-Type": "application/json" } };
          return a.hj.call(this, Z).then(function(F) {
            var Y = F.entities;
            return Y == null || Y.forEach(function(K) {
              K.parentId = K.groupId, K.messageId = K.msgId, delete K.groupId, delete K.msgId;
            }), F;
          });
        }
        function S(N) {
          if (!Array.isArray(N.chatThreadIds))
            throw Error("Invalid parameter chatThreadIds: ".concat(N.chatThreadIds));
          if (!s.XZ.call(this)) {
            var x = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(x);
          }
          var O = this.context, C = O.orgName, E = O.appName, P = O.accessToken, G = { threadIds: N.chatThreadIds }, Z = { url: "".concat(this.apiUrl, "/").concat(C, "/").concat(E, "/thread/message"), type: "POST", dataType: "json", data: JSON.stringify(G), headers: { Authorization: "Bearer " + P, "Content-Type": "application/json" } };
          return a.hj.call(this, Z).then(function(F) {
            return function(Y) {
              var K = Y.entities;
              return K == null || K.forEach(function(V) {
                V.chatThreadId = V.thread_id, V.last_message && JSON.stringify(V.last_message) !== "{}" ? V.lastMessage = (0, i.w)(V.last_message) : V.lastMessage = V.last_message, delete V.thread_id, delete V.last_message;
              }), Y;
            }(F);
          });
        }
        function v(N) {
          if (typeof N.chatThreadId != "string" || N.chatThreadId === "")
            throw Error("Invalid parameter chatThreadId: ".concat(N.chatThreadId));
          if (!s.XZ.call(this)) {
            var x = t.Z.create({ type: r.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(x);
          }
          var O = this.context, C = O.orgName, E = O.appName, P = O.accessToken, G = { url: "".concat(this.apiUrl, "/").concat(C, "/").concat(E, "/thread/").concat(N.chatThreadId), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + P, "Content-Type": "application/json" } };
          return a.hj.call(this, G).then(function(Z) {
            return Z.data.affiliationsCount = Z.data.affiliations_count, Z.data.messageId = Z.data.msgId, Z.data.parentId = Z.data.groupId, delete Z.data.affiliations_count, delete Z.data.msgId, delete Z.data.groupId, Z;
          });
        }
      }, 70: function(p, R, e) {
        e.r(R), e.d(R, { getSupportedLanguages: function() {
          return o;
        }, translateMessage: function() {
          return n;
        } }), e(1539), e(8674), e(2222), e(9753);
        var r = e(3246), t = e(5531), a = e(7252), s = e(7360), i = e(4370);
        function o() {
          if (!r.XZ.call(this)) {
            var l = a.Z.create({ type: t.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(l);
          }
          var u = this.context, m = u.orgName, g = u.appName, h = u.accessToken, d = { url: "".concat(this.apiUrl, "/").concat(m, "/").concat(g, "/users/").concat(this.user, "/translate/support/language"), dataType: "json", type: "GET", headers: { Authorization: "Bearer " + h } };
          return s.kg.debug("Call getSupportedLanguages"), i.hj.call(this, d);
        }
        function n(l) {
          if (typeof l.text != "string" || l.text === "")
            throw Error('Invalid parameter: "text"');
          if (!Array.isArray(l.languages))
            throw Error('Invalid parameter: "language"');
          if (!r.XZ.call(this)) {
            var u = a.Z.create({ type: t.E.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(u);
          }
          var m = this.context, g = m.orgName, h = m.appName, d = m.accessToken, f = "".concat(this.apiUrl, "/").concat(g, "/").concat(h, "/users/").concat(this.user, "/translate"), b = { text: l.text, to: l.languages }, c = { url: f, dataType: "json", type: "POST", data: JSON.stringify(b), headers: { Authorization: "Bearer " + d } };
          return s.kg.debug("Call translateMessage"), i.hj.call(this, c);
        }
      }, 3246: function(p, R, e) {
        e.d(R, { H7: function() {
          return n;
        }, XZ: function() {
          return i;
        }, _W: function() {
          return o;
        } }), e(7941), e(9554), e(1539), e(4747), e(6699), e(2023);
        var r = e(5531), t = e(7252);
        function a() {
          var l = this.context.appName, u = this.context.orgName;
          return !(!l || !u) || (this.onError && this.onError({ type: r.E.WEBIM_CONNCTION_AUTH_ERROR, message: "appName or orgName is illegal" }), !1);
        }
        function s() {
          var l;
          if (!this.context.accessToken) {
            var u = t.Z.create({ type: r.E.WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR, message: "token not assign error" });
            return this.onError && this.onError(u), (l = this.eventHandler) === null || l === void 0 || l.dispatch("onError", u), !1;
          }
          return !0;
        }
        function i() {
          return s.call(this) && a.call(this);
        }
        function o(l) {
          var u = l.data, m = l.type;
          return { data: { status: Object.keys(u.errorKeys).length > 0 ? "fail" : "success", errorKeys: u.errorKeys, successKeys: u.successKeys }, type: m };
        }
        function n(l) {
          var u = l.data, m = void 0;
          return Object.keys(u.errorKeys).length > 0 && Object.keys(u.errorKeys).forEach(function(g) {
            var h = u.errorKeys[g];
            m = h.includes("is not part of you") ? t.Z.create({ type: r.E.NO_PERMISSION, message: h }) : h.includes("size of metadata for this single chatroom exceeds the user defined limit") || h.includes("total size of chatroom metadata for this app exceeds the user defined limit") || h.includes("is exceeding maximum limit") ? t.Z.create({ type: r.E.MAX_LIMIT, message: h }) : h.includes("is not Legal") ? t.Z.create({ type: r.E.REQUEST_PARAMETER_ERROR, message: h }) : h.includes("Failed to update userMetadata. Concurrent updates not allowed") ? t.Z.create({ type: r.E.OPERATION_NOT_ALLOWED, message: h }) : t.Z.create({ type: r.E.WEBIM_CONNCTION_AJAX_ERROR, message: h });
          }), m;
        }
      }, 2071: function(p, R, e) {
        e.d(R, { $x: function() {
          return i;
        }, F3: function() {
          return o;
        }, Nl: function() {
          return t;
        }, TJ: function() {
          return a;
        }, Tp: function() {
          return u;
        }, Wc: function() {
          return r;
        }, el: function() {
          return s;
        }, iB: function() {
          return n;
        }, yK: function() {
          return l;
        } }), e(6992), e(1532), e(1539), e(8783), e(3948);
        var r = 7, t = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), s = "im", i = "32f24ab2ddb74f508aa9286c356cec84", o = 1e3, n = { INIT: 9674, API: 9675 }, l = "direct", u = -1;
      }, 1595: function(p, R, e) {
        var r, t, a, s, i, o;
        e.d(R, { C8: function() {
          return r;
        }, aC: function() {
          return o;
        }, c: function() {
          return a;
        }, dd: function() {
          return i;
        }, fI: function() {
          return t;
        }, td: function() {
          return s;
        } }), function(n) {
          n[n.UNKNOWOPERATION = -1] = "UNKNOWOPERATION", n[n.REST_GET_SESSION_LIST = 1] = "REST_GET_SESSION_LIST", n[n.REST_DEL_SESSION = 2] = "REST_DEL_SESSION", n[n.REST_GET_HISTORY_MESSAGE = 3] = "REST_GET_HISTORY_MESSAGE", n[n.REST_PIN_CONVERSATION = 4] = "REST_PIN_CONVERSATION", n[n.REST_OPERATE = 10] = "REST_OPERATE", n[n.MSYNC_SENDMESSAGE = 11] = "MSYNC_SENDMESSAGE", n[n.MSYNC_RECALLMESSAGE = 12] = "MSYNC_RECALLMESSAGE", n[n.MSYNC_MODIFYMESSAGE = 13] = "MSYNC_MODIFYMESSAGE", n[n.MSYNC_OPERATE = 20] = "MSYNC_OPERATE", n[n.ROSTER_ADD = 21] = "ROSTER_ADD", n[n.ROSTER_REMOVE = 22] = "ROSTER_REMOVE", n[n.ROSTER_ACCEPT = 23] = "ROSTER_ACCEPT", n[n.ROSTER_DECLINE = 24] = "ROSTER_DECLINE", n[n.ROSTER_BAN = 25] = "ROSTER_BAN", n[n.ROSTER_ALLOW = 26] = "ROSTER_ALLOW", n[n.ROSTER_BLACKLIST = 27] = "ROSTER_BLACKLIST", n[n.ROSTER_CONTACTS = 28] = "ROSTER_CONTACTS", n[n.ROSTER_OPERATE = 30] = "ROSTER_OPERATE", n[n.USER_LOGIN = 31] = "USER_LOGIN", n[n.USER_CREATE = 32] = "USER_CREATE", n[n.USER_UPDATE_USERINFO = 33] = "USER_UPDATE_USERINFO", n[n.USER_FETCH_USERINFO = 34] = "USER_FETCH_USERINFO", n[n.USER_UPDATE_NICK = 35] = "USER_UPDATE_NICK", n[n.USER_UPLOAD_PUSH_TOKEN = 36] = "USER_UPLOAD_PUSH_TOKEN", n[n.USER_OPERATE = 40] = "USER_OPERATE", n[n.GROUP_CREATEGROUP = 41] = "GROUP_CREATEGROUP", n[n.GROUP_BLOCK_MESSAGE = 42] = "GROUP_BLOCK_MESSAGE", n[n.GROUP_FETCH_PUBLICGROUPS_WITHCURSOR = 43] = "GROUP_FETCH_PUBLICGROUPS_WITHCURSOR", n[n.GROUP_FETCH_USERS_GROUP = 44] = "GROUP_FETCH_USERS_GROUP", n[n.GROUP_CHANGE_OWNER = 45] = "GROUP_CHANGE_OWNER", n[n.GROUP_FETCH_SPECIFICATION = 46] = "GROUP_FETCH_SPECIFICATION", n[n.GROUP_CHANGE_GROUPATTRIBUTE = 47] = "GROUP_CHANGE_GROUPATTRIBUTE", n[n.GROUP_FETCH_MEMEBERS = 48] = "GROUP_FETCH_MEMEBERS", n[n.GROUP_GET_ADMIN = 49] = "GROUP_GET_ADMIN", n[n.GROUP_SET_ADMIN = 50] = "GROUP_SET_ADMIN", n[n.GROUP_REMOVE_ADMIN = 51] = "GROUP_REMOVE_ADMIN", n[n.GROUP_DESTOTYGROUP = 52] = "GROUP_DESTOTYGROUP", n[n.GROUP_LEAVEGROUP = 53] = "GROUP_LEAVEGROUP", n[n.GROUP_INVITE_TO_GROUP = 54] = "GROUP_INVITE_TO_GROUP", n[n.GROUP_JOIN_PUBLICGROUP = 55] = "GROUP_JOIN_PUBLICGROUP", n[n.GROUP_ACCEPT_JOINPUBLICGROUPAPPL = 56] = "GROUP_ACCEPT_JOINPUBLICGROUPAPPL", n[n.GROUP_DECLINE_JOINPUBLICGROUPAPPL = 57] = "GROUP_DECLINE_JOINPUBLICGROUPAPPL", n[n.GROUP_ACCEPT_INVITATION = 58] = "GROUP_ACCEPT_INVITATION", n[n.GROUP_DECLINE_INVITATION = 59] = "GROUP_DECLINE_INVITATION", n[n.GROUP_REMOVE_MEMBER = 60] = "GROUP_REMOVE_MEMBER", n[n.GROUP_REMOVE_MEMBERS = 61] = "GROUP_REMOVE_MEMBERS", n[n.GROUP_MUTE_MEMBERS = 62] = "GROUP_MUTE_MEMBERS", n[n.GROUP_UNMUTE_MEMBERS = 63] = "GROUP_UNMUTE_MEMBERS", n[n.GROUP_FETCH_MUTES = 64] = "GROUP_FETCH_MUTES", n[n.GROUP_BLOCK_MEMBER = 65] = "GROUP_BLOCK_MEMBER", n[n.GROUP_BLOCK_MEMBERS = 66] = "GROUP_BLOCK_MEMBERS", n[n.GROUP_UNBLOCK_MEMBER = 67] = "GROUP_UNBLOCK_MEMBER", n[n.GROUP_UNBLOCK_MEMBERS = 68] = "GROUP_UNBLOCK_MEMBERS", n[n.GROUP_GET_BLOCK_LIST = 69] = "GROUP_GET_BLOCK_LIST", n[n.GROUP_MUTE_ALLMEMBERS = 70] = "GROUP_MUTE_ALLMEMBERS", n[n.GROUP_UNMUTE_ALLMEMBERS = 71] = "GROUP_UNMUTE_ALLMEMBERS", n[n.GROUP_ADD_WHITELIST = 72] = "GROUP_ADD_WHITELIST", n[n.GROUP_REMOVE_WHITELIST = 73] = "GROUP_REMOVE_WHITELIST", n[n.GROUP_FETCH_WHITELIST = 74] = "GROUP_FETCH_WHITELIST", n[n.GROUP_IS_IN_WHITELIST = 75] = "GROUP_IS_IN_WHITELIST", n[n.GROUP_GET_READ_USERS = 76] = "GROUP_GET_READ_USERS", n[n.GROUP_FETCH_ANNOUNCEMENT = 77] = "GROUP_FETCH_ANNOUNCEMENT", n[n.GROUP_UPDATE_ANNOUNCEMENT = 78] = "GROUP_UPDATE_ANNOUNCEMENT", n[n.GROUP_UPLOAD_SHAREDFILE = 79] = "GROUP_UPLOAD_SHAREDFILE", n[n.GROUP_DELETE_SHAREDFILE = 80] = "GROUP_DELETE_SHAREDFILE", n[n.GROUP_FETCH_SHAREDFILE = 81] = "GROUP_FETCH_SHAREDFILE", n[n.GROUP_DOWNLOAD_SHAREDFILE = 82] = "GROUP_DOWNLOAD_SHAREDFILE", n[n.GROUP_MEMBER_SET_META_DATA = 83] = "GROUP_MEMBER_SET_META_DATA", n[n.GROUP_MEMBER_FETCH_META_DATA = 84] = "GROUP_MEMBER_FETCH_META_DATA", n[n.GROUP_OPERATE = 100] = "GROUP_OPERATE", n[n.CHATROOM_FETCH_CHATROOMSWITHPAGE = 101] = "CHATROOM_FETCH_CHATROOMSWITHPAGE", n[n.CHATROOM_CREATECHATROOM = 102] = "CHATROOM_CREATECHATROOM", n[n.CHATROOM_DESTORYCHATROOM = 103] = "CHATROOM_DESTORYCHATROOM", n[n.CHATROOM_FETCH_SPECIFICATION = 104] = "CHATROOM_FETCH_SPECIFICATION", n[n.CHATROOM_CHANGE_ATTRIBUTE = 105] = "CHATROOM_CHANGE_ATTRIBUTE", n[n.CHATROOM_REMOVE_MEMBER = 106] = "CHATROOM_REMOVE_MEMBER", n[n.CHATROOM_REMOVE_MEMBERS = 107] = "CHATROOM_REMOVE_MEMBERS", n[n.CHATROOM_ADD_MEMBERS = 108] = "CHATROOM_ADD_MEMBERS", n[n.CHATROOM_JOINCAHTROOM = 109] = "CHATROOM_JOINCAHTROOM", n[n.CHATROOM_LEAVECAHTROOM = 110] = "CHATROOM_LEAVECAHTROOM", n[n.CHATROOM_FETCH_MEMBERS = 111] = "CHATROOM_FETCH_MEMBERS", n[n.CHATROOM_GET_ADMIN = 112] = "CHATROOM_GET_ADMIN", n[n.CHATROOM_SET_ADMIN = 113] = "CHATROOM_SET_ADMIN", n[n.CHATROOM_REMOVE_ADMIN = 114] = "CHATROOM_REMOVE_ADMIN", n[n.CHATROOM_MUTE_USER = 115] = "CHATROOM_MUTE_USER", n[n.CHATROOM_UNMUTE_USER = 116] = "CHATROOM_UNMUTE_USER", n[n.CHATROOM_FETCH_MUTES = 117] = "CHATROOM_FETCH_MUTES", n[n.CHATROOM_BLOCK_USER = 118] = "CHATROOM_BLOCK_USER", n[n.CHATROOM_BLOCK_USERS = 119] = "CHATROOM_BLOCK_USERS", n[n.CHATROOM_UNBLOCK_USER = 120] = "CHATROOM_UNBLOCK_USER", n[n.CHATROOM_UNBLOCK_USERS = 121] = "CHATROOM_UNBLOCK_USERS", n[n.CHATROOM_FETCH_BANS = 122] = "CHATROOM_FETCH_BANS", n[n.CHATROOM_MUTE_ALLMEMEBERS = 123] = "CHATROOM_MUTE_ALLMEMEBERS", n[n.CHATROOM_UNMUTE_ALLMEMEBERS = 124] = "CHATROOM_UNMUTE_ALLMEMEBERS", n[n.CHATROOM_ADD_WHITELIST = 125] = "CHATROOM_ADD_WHITELIST", n[n.CHATROOM_REMOVE_WHITELIST = 126] = "CHATROOM_REMOVE_WHITELIST", n[n.CHATROOM_FETCH_WHITELIST = 127] = "CHATROOM_FETCH_WHITELIST", n[n.CHATROOM_FETCH_MEMBERIN_WHITELIST = 128] = "CHATROOM_FETCH_MEMBERIN_WHITELIST", n[n.CHATROOM_FETCH_ANNOUNCEMENT = 129] = "CHATROOM_FETCH_ANNOUNCEMENT", n[n.CHATROOM_UPDATE_ANNOUNCEMENT = 130] = "CHATROOM_UPDATE_ANNOUNCEMENT", n[n.CHATROOM_REMOVE_SHARE_FILE = 131] = "CHATROOM_REMOVE_SHARE_FILE", n[n.CHATROOM_GET_SHARE_FILE_LIST = 132] = "CHATROOM_GET_SHARE_FILE_LIST", n[n.CHATROOM_UPLOAD_FILE = 133] = "CHATROOM_UPLOAD_FILE", n[n.CHATROOM_SET_META_DATA = 134] = "CHATROOM_SET_META_DATA", n[n.CHATROOM_DELETE_META_DATA = 135] = "CHATROOM_DELETE_META_DATA", n[n.CHATROOM_FETCH_META_DATA = 136] = "CHATROOM_FETCH_META_DATA", n[n.CHATROOM_OPERATE = 150] = "CHATROOM_OPERATE";
        }(r || (r = {})), function(n) {
          n.SDK_INTERNAL = "SDK_INTERNAL", n.LOGIN = "USER_LOGIN", n.REGISTER = "USER_CREATE", n.GET_CHATROOM_LIST = "CHATROOM_FETCH_CHATROOMSWITHPAGE", n.CREATE_CHATROOM = "CHATROOM_CREATECHATROOM", n.DESTROY_CHATROOM = "CHATROOM_DESTORYCHATROOM", n.GET_CHATROOM_DETAIL = "CHATROOM_FETCH_SPECIFICATION", n.MODIFY_CHATROOM = "CHATROOM_CHANGE_ATTRIBUTE", n.REMOVE_CHATROOM_MEMBER = "CHATROOM_REMOVE_MEMBER", n.MULTI_REMOVE_CHATROOM_MEMBER = "CHATROOM_REMOVE_MEMBERS", n.ADD_USERS_TO_CHATROOM = "CHATROOM_ADD_MEMBERS", n.JOIN_CHATROOM = "CHATROOM_JOINCAHTROOM", n.QUIT_CHATROOM = "CHATROOM_LEAVECAHTROOM", n.LIST_CHATROOM_MEMBERS = "CHATROOM_FETCH_MEMBERS", n.GET_CHATROOM_ADMIN = "CHATROOM_GET_ADMIN", n.SET_CHATROOM_ADMIN = "CHATROOM_SET_ADMIN", n.REMOVE_CHATROOM_ADMIN = "CHATROOM_REMOVE_ADMIN", n.MUTE_CHATROOM_MEMBER = "CHATROOM_MUTE_USER", n.REMOVE_MUTE_CHATROOM_MEMBER = "CHATROOM_UNMUTE_USER", n.GET_MUTE_CHATROOM_MEMBERS = "CHATROOM_FETCH_MUTES", n.SET_CHATROOM_MEMBER_TO_BLACK = "CHATROOM_BLOCK_USER", n.MULTI_SET_CHATROOM_MEMBER_TO_BLACK = "CHATROOM_BLOCK_USERS", n.REMOVE_CHATROOM_MEMBER_BLACK = "CHATROOM_UNBLOCK_USER", n.MULTI_REMOVE_CHATROOM_MEMBER_BLACK = "CHATROOM_UNBLOCK_USERS", n.GET_CHATROOM_BLOCK_MEMBERS = "CHATROOM_FETCH_BANS", n.DISABLED_CHATROOM_SEND_MSG = "CHATROOM_MUTE_ALLMEMEBERS", n.ENABLE_CHATROOM_SEND_MSG = "CHATROOM_UNMUTE_ALLMEMEBERS", n.ADD_CHATROOM_WHITE_USERS = "CHATROOM_ADD_WHITELIST", n.REMOVE_CHATROOM_WHITE_USERS = "CHATROOM_REMOVE_WHITELIST", n.GET_CHATROOM_WHITE_USERS = "CHATROOM_FETCH_WHITELIST", n.CHECK_CHATROOM_WHITE_USER = "CHATROOM_FETCH_MEMBERIN_WHITELIST", n.GET_CHATROOM_ANN = "CHATROOM_FETCH_ANNOUNCEMENT", n.UPDATE_CHATROOM_ANN = "CHATROOM_UPDATE_ANNOUNCEMENT", n.DELETE_CHATROOM_FILE = "CHATROOM_REMOVE_SHARE_FILE", n.GET_CHATROOM_FILES = "CHATROOM_GET_SHARE_FILE_LIST", n.UPLOAD_CHATROOM_FILE = "CHATROOM_UPLOAD_FILE", n.SET_CHATROOM_ATTR = "CHATROOM_SET_META_DATA", n.DELETE_CHATROOM_ATTR = "CHATROOM_DELETE_META_DATA", n.GET_CHATROOM_ATTR = "CHATROOM_FETCH_META_DATA", n.CREATE_GROUP = "GROUP_CREATEGROUP", n.BLOCK_GROUP = "GROUP_BLOCK_MESSAGE", n.LIST_GROUP = "GROUP_FETCH_PUBLICGROUPS_WITHCURSOR", n.GET_USER_GROUP = "GROUP_FETCH_USERS_GROUP", n.CHANGE_OWNER = "GROUP_CHANGE_OWNER", n.GET_GROUP_INFO = "GROUP_FETCH_SPECIFICATION", n.MODIFY_GROUP = "GROUP_CHANGE_GROUPATTRIBUTE", n.LIST_GROUP_MEMBER = "GROUP_FETCH_MEMEBERS", n.GET_GROUP_ADMIN = "GROUP_GET_ADMIN", n.SET_GROUP_ADMIN = "GROUP_SET_ADMIN", n.REMOVE_GROUP_ADMIN = "GROUP_REMOVE_ADMIN", n.DISSOLVE_GROUP = "GROUP_DESTOTYGROUP", n.QUIT_GROUP = "GROUP_LEAVEGROUP", n.INVITE_TO_GROUP = "GROUP_INVITE_TO_GROUP", n.JOIN_GROUP = "GROUP_JOIN_PUBLICGROUP", n.AGREE_JOIN_GROUP = "GROUP_ACCEPT_JOINPUBLICGROUPAPPL", n.REJECT_JOIN_GROUP = "GROUP_DECLINE_JOINPUBLICGROUPAPPL", n.AGREE_INVITE_GROUP = "GROUP_ACCEPT_INVITATION", n.REJECT_INVITE_GROUP = "GROUP_DECLINE_INVITATION", n.REMOVE_GROUP_MEMBER = "GROUP_REMOVE_MEMBER", n.MULTI_REMOVE_GROUP_MEMBER = "GROUP_REMOVE_MEMBERS", n.MUTE_GROUP_MEMBER = "GROUP_MUTE_MEMBERS", n.UNMUTE_GROUP_MEMBER = "GROUP_UNMUTE_MEMBERS", n.GET_GROUP_MUTE_LIST = "GROUP_FETCH_MUTES", n.BLOCK_GROUP_MEMBER = "GROUP_BLOCK_MEMBER", n.BLOCK_GROUP_MEMBERS = "GROUP_BLOCK_MEMBERS", n.UNBLOCK_GROUP_MEMBER = "GROUP_UNBLOCK_MEMBER", n.UNBLOCK_GROUP_MEMBERS = "GROUP_UNBLOCK_MEMBERS", n.GET_GROUP_BLACK_LIST = "GROUP_GET_BLOCK_LIST", n.DISABLED_SEND_GROUP_MSG = "GROUP_MUTE_ALLMEMBERS", n.ENABLE_SEND_GROUP_MSG = "GROUP_UNMUTE_ALLMEMBERS", n.ADD_USERS_TO_GROUP_WHITE = "GROUP_ADD_WHITELIST", n.REMOVE_GROUP_WHITE_MEMBER = "GROUP_REMOVE_WHITELIST", n.GET_GROUP_WHITE_LIST = "GROUP_FETCH_WHITELIST", n.IS_IN_GROUP_WHITE_LIST = "GROUP_IS_IN_WHITELIST", n.GET_GROUP_MSG_READ_USER = "GROUP_GET_READ_USERS", n.GET_GROUP_ANN = "GROUP_FETCH_ANNOUNCEMENT", n.UPDATE_GROUP_ANN = "GROUP_UPDATE_ANNOUNCEMENT", n.UPLOAD_GROUP_FILE = "GROUP_UPLOAD_SHAREDFILE", n.DELETE_GROUP_FILE = "GROUP_DELETE_SHAREDFILE", n.GET_GROUP_FILE_LIST = "GROUP_FETCH_SHAREDFILE", n.DOWN_GROUP_FILE = "GROUP_DOWNLOAD_SHAREDFILE", n.SET_GROUP_MEMBER_ATTRS = "GROUP_MEMBER_SET_META_DATA", n.GET_GROUP_MEMBER_ATTR = "GROUP_MEMBER_FETCH_META_DATA", n.GET_SESSION_LIST = "REST_GET_SESSION_LIST", n.DELETE_SESSION = "REST_DEL_SESSION", n.GET_HISTORY_MSG = "REST_GET_HISTORY_MESSAGE", n.PIN_CONVERSATION = "REST_PIN_CONVERSATION", n.UPDATE_USER_INFO = "USER_UPDATE_USERINFO", n.GET_USER_INFO = "USER_FETCH_USERINFO", n.UPDATE_USER_NICK = "USER_UPDATE_NICK", n.UPLOAD_PUSH_TOKEN = "USER_UPLOAD_PUSH_TOKEN", n.GET_BLACK_LIST = "ROSTER_BLACKLIST", n.GET_CONTACTS = "ROSTER_CONTACTS", n.add = "ROSTER_ADD", n.remove = "ROSTER_REMOVE", n.accept = "ROSTER_ACCEPT", n.decline = "ROSTER_DECLINE", n.ban = "ROSTER_BAN", n.allow = "ROSTER_ALLOW", n.SEND_MSG = "MSYNC_SENDMESSAGE", n.UPLOAD_MSG_ATTACH = "UPLOAD_MSG_ATTACH", n.SEND_RECALL_MSG = "MSYNC_RECALLMESSAGE", n.MODIFY_MESSAGE = "MSYNC_MODIFYMESSAGE";
        }(t || (t = {})), function(n) {
          n.GET_DNS = "REST_DNSLIST", n.LOGIN_BY_AGORA_TOKEN = "LOGIN_BY_AGORA_TOKEN", n.LOGIN_BY_PWD = "LOGIN_BY_PWD", n.RESISTER = "REGISTER";
        }(a || (a = {})), function(n) {
          n[n["5G"] = 7] = "5G", n[n["4G"] = 7] = "4G", n[n["3G"] = 7] = "3G", n[n["2G"] = 7] = "2G", n[n["SLOW-2G"] = 7] = "SLOW-2G", n[n.WIFI = 2] = "WIFI", n[n.LAN = 1] = "LAN", n[n.DISCONNECTED = 0] = "DISCONNECTED", n[n.NONE = 0] = "NONE", n[n.UNKNOWN = -1] = "UNKNOWN", n[n["WEBIM UNABLE TO GET"] = -2] = "WEBIM UNABLE TO GET";
        }(s || (s = {})), function(n) {
          n[n.success = 200] = "success", n[n.failed = 500] = "failed";
        }(i || (i = {})), function(n) {
          n[n.web = 0] = "web", n[n.native = 1] = "native";
        }(o || (o = {}));
      }, 1070: function(p, R, e) {
        e.d(R, { g: function() {
          return Z;
        }, Z: function() {
          return W;
        } }), e(9601), e(1539), e(8674), e(2526), e(1817), e(2165), e(6992), e(8783), e(3948), e(7042), e(2222), e(3710), e(9714), e(5212), e(8309), e(2772), e(9653), e(3843), e(1038), e(2564), e(9753), e(8264), e(9575), e(2472), e(2990), e(8927), e(3105), e(5035), e(4345), e(7174), e(2846), e(4731), e(7209), e(6319), e(8867), e(7789), e(3739), e(9368), e(4483), e(2056), e(3462), e(678), e(7462), e(3824), e(5021), e(2974), e(5016), e(561), e(6699), e(2023), e(3161), e(7941), e(9554), e(4747), e(285), e(1637), e(8145), e(1249), e(4812);
        var r = e(4188), t = e.n(r), a = e(3720), s = e.n(a), i = e(5531), o = e(8161), n = e(7360), l = ["public", "members_only", "allow_user_invites", "invite_need_confirm"], u = { name: "name", title: "name", description: "description", public: "public", members_only: "approval", allow_user_invites: "allowInvites", max_users: "maxUsers", invite_need_confirm: "inviteNeedConfirm", custom: "ext", last_modified: "lastModified" };
        function m(_, A) {
          var L, w, k, y, I, H, M = this, D = this.context, J = D.userId, X = D.jid, oe = A.from.name === J && X.clientResource !== A.from.clientResource;
          return A.isThread ? (k = { id: A.mucId.name, name: A.mucName, operation: "", parentId: A.mucParentId.name, operator: A.from.name, userName: A.to.length ? A.to[0].name : "" }, y = { chatThreadId: A.mucId.name, chatThreadName: A.mucName, operation: "", parentId: A.mucParentId.name }) : (w = { type: "", owner: A.from.name, gid: A.mucId.name, from: A.from.name, fromJid: A.from, to: A.to.length ? A.to[0].name : "", toJid: A.to, chatroom: A.isChatroom, status: A.status }, I = { operation: "", id: A.mucId.name, from: A.from.name }, A.isChatroom && (!((L = A == null ? void 0 : A.eventInfo) === null || L === void 0) && L.ext) && (H = JSON.parse(A.eventInfo.ext))), ({ 45: function() {
            var q, z, te;
            I.operation = "memberAttributesUpdate";
            var re = JSON.parse((q = A == null ? void 0 : A.eventInfo) === null || q === void 0 ? void 0 : q.ext) || {};
            I.attributes = re.properties || {}, I.userId = re.username || "", oe ? (z = M.eventHandler) === null || z === void 0 || z.dispatch("onMultiDeviceEvent", I) : (te = M.eventHandler) === null || te === void 0 || te.dispatch("onGroupEvent", I);
          }, 44: function() {
            var q;
            I.operation = "removeChatRoomAttributes", I.attributes = H.result.successKeys, H.result.successKeys.length > 0 && ((q = M.eventHandler) === null || q === void 0 || q.dispatch("onChatroomEvent", I));
          }, 43: function() {
            var q;
            I.operation = "updateChatRoomAttributes";
            var z = {};
            H.result.successKeys.forEach(function(te) {
              z[te] = H.properties[te];
            }), I.attributes = z, H.result.successKeys.length > 0 && ((q = M.eventHandler) === null || q === void 0 || q.dispatch("onChatroomEvent", I));
          }, 42: function() {
          }, 41: function() {
          }, 40: function() {
          }, 39: function() {
          }, 38: function() {
            var q;
            y.operation = "chatThreadNameUpdate", (q = M.eventHandler) === null || q === void 0 || q.dispatch("onMultiDeviceEvent", y);
          }, 37: function() {
            var q;
            k.operation = "userRemove", (q = M.eventHandler) === null || q === void 0 || q.dispatch("onChatThreadChange", k);
          }, 36: function() {
            var q;
            y.operation = "chatThreadLeave", (q = M.eventHandler) === null || q === void 0 || q.dispatch("onMultiDeviceEvent", y);
          }, 35: function() {
            var q;
            y.operation = "chatThreadJoin", (q = M.eventHandler) === null || q === void 0 || q.dispatch("onMultiDeviceEvent", y);
          }, 34: function() {
            var q;
            y.operation = "chatThreadDestroy", (q = M.eventHandler) === null || q === void 0 || q.dispatch("onMultiDeviceEvent", y);
          }, 33: function() {
            var q;
            y.operation = "chatThreadCreate", (q = M.eventHandler) === null || q === void 0 || q.dispatch("onMultiDeviceEvent", y);
          }, 32: function() {
            var q, z, te, re;
            w.type = A.isChatroom ? "rmChatRoomMute" : "rmGroupMute", M.onPresence && M.onPresence(w), A.isChatroom ? (q = M.eventHandler) === null || q === void 0 || q.dispatch("onChatroomChange", w) : (z = M.eventHandler) === null || z === void 0 || z.dispatch("onGroupChange", w), I.operation = "unmuteAllMembers", A.isChatroom ? (te = M.eventHandler) === null || te === void 0 || te.dispatch("onChatroomEvent", I) : (re = M.eventHandler) === null || re === void 0 || re.dispatch("onGroupEvent", I);
          }, 31: function() {
            var q, z, te, re;
            w.type = A.isChatroom ? "muteChatRoom" : "muteGroup", M.onPresence && M.onPresence(w), A.isChatroom ? (q = M.eventHandler) === null || q === void 0 || q.dispatch("onChatroomChange", w) : (z = M.eventHandler) === null || z === void 0 || z.dispatch("onGroupChange", w), I.operation = "muteAllMembers", A.isChatroom ? (te = M.eventHandler) === null || te === void 0 || te.dispatch("onChatroomEvent", I) : (re = M.eventHandler) === null || re === void 0 || re.dispatch("onGroupEvent", I);
          }, 30: function() {
            var q, z, te, re;
            w.type = A.isChatroom ? "rmUserFromChatRoomWhiteList" : "rmUserFromGroupWhiteList", M.onPresence && M.onPresence(w), A.isChatroom ? (q = M.eventHandler) === null || q === void 0 || q.dispatch("onChatroomChange", w) : (z = M.eventHandler) === null || z === void 0 || z.dispatch("onGroupChange", w), I.operation = "removeAllowlistMember", A.isChatroom ? (te = M.eventHandler) === null || te === void 0 || te.dispatch("onChatroomEvent", I) : (re = M.eventHandler) === null || re === void 0 || re.dispatch("onGroupEvent", I);
          }, 29: function() {
            var q, z, te, re;
            w.type = A.isChatroom ? "addUserToChatRoomWhiteList" : "addUserToGroupWhiteList", M.onPresence && M.onPresence(w), A.isChatroom ? (q = M.eventHandler) === null || q === void 0 || q.dispatch("onChatroomChange", w) : (z = M.eventHandler) === null || z === void 0 || z.dispatch("onGroupChange", w), I.operation = "addUserToAllowlist", A.isChatroom ? (te = M.eventHandler) === null || te === void 0 || te.dispatch("onChatroomEvent", I) : (re = M.eventHandler) === null || re === void 0 || re.dispatch("onGroupEvent", I);
          }, 28: function() {
            var q, z, te, re;
            w.type = "deleteFile", M.onPresence && M.onPresence(w), A.isChatroom ? (q = M.eventHandler) === null || q === void 0 || q.dispatch("onChatroomChange", w) : (z = M.eventHandler) === null || z === void 0 || z.dispatch("onGroupChange", w), I.operation = "deleteFile", A.isChatroom ? (te = M.eventHandler) === null || te === void 0 || te.dispatch("onChatroomEvent", I) : (re = M.eventHandler) === null || re === void 0 || re.dispatch("onGroupEvent", I);
          }, 27: function() {
            var q, z, te, re;
            w.type = "uploadFile", M.onPresence && M.onPresence(w), A.isChatroom ? (q = M.eventHandler) === null || q === void 0 || q.dispatch("onChatroomChange", w) : (z = M.eventHandler) === null || z === void 0 || z.dispatch("onGroupChange", w), I.operation = "uploadFile", A.isChatroom ? (te = M.eventHandler) === null || te === void 0 || te.dispatch("onChatroomEvent", I) : (re = M.eventHandler) === null || re === void 0 || re.dispatch("onGroupEvent", I);
          }, 26: function() {
            var q, z, te, re;
            w.type = "deleteAnnouncement", M.onPresence && M.onPresence(w), A.isChatroom ? (q = M.eventHandler) === null || q === void 0 || q.dispatch("onChatroomChange", w) : (z = M.eventHandler) === null || z === void 0 || z.dispatch("onGroupChange", w), I.operation = "deleteAnnouncement", A.isChatroom ? (te = M.eventHandler) === null || te === void 0 || te.dispatch("onChatroomEvent", I) : (re = M.eventHandler) === null || re === void 0 || re.dispatch("onGroupEvent", I);
          }, 25: function() {
            var q, z, te, re;
            w.type = "updateAnnouncement", M.onPresence && M.onPresence(w), A.isChatroom ? (q = M.eventHandler) === null || q === void 0 || q.dispatch("onChatroomChange", w) : (z = M.eventHandler) === null || z === void 0 || z.dispatch("onGroupChange", w), I.operation = "updateAnnouncement", A.isChatroom ? (te = M.eventHandler) === null || te === void 0 || te.dispatch("onChatroomEvent", I) : (re = M.eventHandler) === null || re === void 0 || re.dispatch("onGroupEvent", I);
          }, 24: function() {
            var q, z, te, re;
            w.type = "removeMute", M.onPresence && M.onPresence(w), A.isChatroom ? (q = M.eventHandler) === null || q === void 0 || q.dispatch("onChatroomChange", w) : (z = M.eventHandler) === null || z === void 0 || z.dispatch("onGroupChange", w), I.operation = "unmuteMember", A.isChatroom ? (te = M.eventHandler) === null || te === void 0 || te.dispatch("onChatroomEvent", I) : (re = M.eventHandler) === null || re === void 0 || re.dispatch("onGroupEvent", I);
          }, 23: function() {
            var q, z, te, re;
            w.type = "addMute", M.onPresence && M.onPresence(w), A.isChatroom ? (q = M.eventHandler) === null || q === void 0 || q.dispatch("onChatroomChange", w) : (z = M.eventHandler) === null || z === void 0 || z.dispatch("onGroupChange", w), I.operation = "muteMember", A.isChatroom ? (te = M.eventHandler) === null || te === void 0 || te.dispatch("onChatroomEvent", I) : (re = M.eventHandler) === null || re === void 0 || re.dispatch("onGroupEvent", I);
          }, 22: function() {
            var q, z, te, re;
            w.type = "removeAdmin", M.onPresence && M.onPresence(w), A.isChatroom ? (q = M.eventHandler) === null || q === void 0 || q.dispatch("onChatroomChange", w) : (z = M.eventHandler) === null || z === void 0 || z.dispatch("onGroupChange", w), I.operation = "removeAdmin", A.isChatroom ? (te = M.eventHandler) === null || te === void 0 || te.dispatch("onChatroomEvent", I) : (re = M.eventHandler) === null || re === void 0 || re.dispatch("onGroupEvent", I);
          }, 21: function() {
            var q, z, te, re;
            w.type = "addAdmin", M.onPresence && M.onPresence(w), A.isChatroom ? (q = M.eventHandler) === null || q === void 0 || q.dispatch("onChatroomChange", w) : (z = M.eventHandler) === null || z === void 0 || z.dispatch("onGroupChange", w), I.operation = "setAdmin", A.isChatroom ? (te = M.eventHandler) === null || te === void 0 || te.dispatch("onChatroomEvent", I) : (re = M.eventHandler) === null || re === void 0 || re.dispatch("onGroupEvent", I);
          }, 20: function() {
            var q, z, te, re;
            w.type = "changeOwner", M.onPresence && M.onPresence(w), A.isChatroom ? (q = M.eventHandler) === null || q === void 0 || q.dispatch("onChatroomChange", w) : (z = M.eventHandler) === null || z === void 0 || z.dispatch("onGroupChange", w), I.operation = "changeOwner", A.isChatroom ? (te = M.eventHandler) === null || te === void 0 || te.dispatch("onChatroomEvent", I) : (re = M.eventHandler) === null || re === void 0 || re.dispatch("onGroupEvent", I);
          }, 19: function() {
            var q, z, te, re;
            w.type = "direct_joined", w.groupName = A.mucName, M.onPresence && M.onPresence(w), A.isChatroom ? (q = M.eventHandler) === null || q === void 0 || q.dispatch("onChatroomChange", w) : (z = M.eventHandler) === null || z === void 0 || z.dispatch("onGroupChange", w), I.operation = "directJoined", I.name = A.mucName, A.isChatroom ? (te = M.eventHandler) === null || te === void 0 || te.dispatch("onChatroomEvent", I) : (re = M.eventHandler) === null || re === void 0 || re.dispatch("onGroupEvent", I);
          }, 18: function() {
            var q, z, te, re;
            w.type = A.isChatroom ? "leaveChatRoom" : "leaveGroup", M.onPresence && M.onPresence(w), A.isChatroom ? (q = M.eventHandler) === null || q === void 0 || q.dispatch("onChatroomChange", w) : (z = M.eventHandler) === null || z === void 0 || z.dispatch("onGroupChange", w), I.operation = "memberAbsence", A.isChatroom ? (te = M.eventHandler) === null || te === void 0 || te.dispatch("onChatroomEvent", I) : (re = M.eventHandler) === null || re === void 0 || re.dispatch("onGroupEvent", I);
          }, 17: function() {
            var q, z, te, re;
            w.type = A.isChatroom ? "memberJoinChatRoomSuccess" : "memberJoinPublicGroupSuccess", M.onPresence && M.onPresence(w), A.isChatroom ? (q = M.eventHandler) === null || q === void 0 || q.dispatch("onChatroomChange", w) : (z = M.eventHandler) === null || z === void 0 || z.dispatch("onGroupChange", w), I.operation = "memberPresence", A.isChatroom ? (te = M.eventHandler) === null || te === void 0 || te.dispatch("onChatroomEvent", I) : (re = M.eventHandler) === null || re === void 0 || re.dispatch("onGroupEvent", I);
          }, 16: function() {
            var q, z;
            w.type = "unblock", M.onPresence && M.onPresence(w), A.isChatroom ? (q = M.eventHandler) === null || q === void 0 || q.dispatch("onChatroomChange", w) : (z = M.eventHandler) === null || z === void 0 || z.dispatch("onGroupChange", w);
          }, 15: function() {
            var q, z;
            w.type = "block", M.onPresence && M.onPresence(w), A.isChatroom ? (q = M.eventHandler) === null || q === void 0 || q.dispatch("onChatroomChange", w) : (z = M.eventHandler) === null || z === void 0 || z.dispatch("onGroupChange", w);
          }, 14: function() {
            var q, z, te, re, Ae, We = A.isChatroom;
            if (!We) {
              var Te = JSON.parse(((q = A == null ? void 0 : A.eventInfo) === null || q === void 0 ? void 0 : q.ext) || "{}", function(je, ie) {
                return je === "last_modified" ? Number(ie) : l.includes(je) ? ie === "true" || ie === !0 : ie;
              });
              I.detail = w.detail = {}, Object.keys(Te).forEach(function(je) {
                var ie = u[je];
                if (ie) {
                  var Je = Te[je];
                  I.detail && (I.detail[ie] = Je), w.detail && (w.detail[ie] = Je);
                }
              });
            }
            w.type = "update", M.onPresence && M.onPresence(w), We ? (z = M.eventHandler) === null || z === void 0 || z.dispatch("onChatroomChange", w) : (te = M.eventHandler) === null || te === void 0 || te.dispatch("onGroupChange", w), I.operation = "updateInfo", We ? (re = M.eventHandler) === null || re === void 0 || re.dispatch("onChatroomEvent", I) : (Ae = M.eventHandler) === null || Ae === void 0 || Ae.dispatch("onGroupEvent", I);
          }, 13: function() {
            var q, z, te, re;
            w.type = "allow", w.reason = A.reason, M.onPresence && M.onPresence(w), A.isChatroom ? (q = M.eventHandler) === null || q === void 0 || q.dispatch("onChatroomChange", w) : (z = M.eventHandler) === null || z === void 0 || z.dispatch("onGroupChange", w), I.operation = "unblockMember", A.isChatroom ? (te = M.eventHandler) === null || te === void 0 || te.dispatch("onChatroomEvent", I) : (re = M.eventHandler) === null || re === void 0 || re.dispatch("onGroupEvent", I);
          }, 12: function() {
            var q, z;
            w.type = "ban", M.onPresence && M.onPresence(w), A.isChatroom ? (q = M.eventHandler) === null || q === void 0 || q.dispatch("onChatroomChange", w) : (z = M.eventHandler) === null || z === void 0 || z.dispatch("onGroupChange", w);
          }, 11: function() {
            var q, z;
            w.type = "getBlackList", M.onPresence && M.onPresence(w), A.isChatroom ? (q = M.eventHandler) === null || q === void 0 || q.dispatch("onChatroomChange", w) : (z = M.eventHandler) === null || z === void 0 || z.dispatch("onGroupChange", w);
          }, 10: function() {
            var q, z, te, re;
            w.type = "removedFromGroup", w.kicked = w.to, M.onPresence && M.onPresence(w), A.isChatroom ? (q = M.eventHandler) === null || q === void 0 || q.dispatch("onChatroomChange", w) : (z = M.eventHandler) === null || z === void 0 || z.dispatch("onGroupChange", w), I.operation = "removeMember", A.isChatroom ? (te = M.eventHandler) === null || te === void 0 || te.dispatch("onChatroomEvent", I) : (re = M.eventHandler) === null || re === void 0 || re.dispatch("onGroupEvent", I);
          }, 9: function() {
            var q, z, te, re;
            w.type = "invite_decline", w.kicked = w.to, M.onPresence && M.onPresence(w), A.isChatroom ? (q = M.eventHandler) === null || q === void 0 || q.dispatch("onChatroomChange", w) : (z = M.eventHandler) === null || z === void 0 || z.dispatch("onGroupChange", w), I.operation = "rejectInvite", A.isChatroom ? (te = M.eventHandler) === null || te === void 0 || te.dispatch("onChatroomEvent", I) : (re = M.eventHandler) === null || re === void 0 || re.dispatch("onGroupEvent", I);
          }, 8: function() {
            var q, z, te, re;
            w.type = "invite_accept", w.kicked = w.to, M.onPresence && M.onPresence(w), A.isChatroom ? (q = M.eventHandler) === null || q === void 0 || q.dispatch("onChatroomChange", w) : (z = M.eventHandler) === null || z === void 0 || z.dispatch("onGroupChange", w), I.operation = "acceptInvite", A.isChatroom ? (te = M.eventHandler) === null || te === void 0 || te.dispatch("onChatroomEvent", I) : (re = M.eventHandler) === null || re === void 0 || re.dispatch("onGroupEvent", I);
          }, 7: function() {
            var q, z, te, re;
            w.type = "invite", w.kicked = w.to, w.groupName = A.mucName, M.onPresence && M.onPresence(w), A.isChatroom ? (q = M.eventHandler) === null || q === void 0 || q.dispatch("onChatroomChange", w) : (z = M.eventHandler) === null || z === void 0 || z.dispatch("onGroupChange", w), I.operation = "inviteToJoin", I.name = A.mucName, A.isChatroom ? (te = M.eventHandler) === null || te === void 0 || te.dispatch("onChatroomEvent", I) : (re = M.eventHandler) === null || re === void 0 || re.dispatch("onGroupEvent", I);
          }, 6: function() {
            var q, z, te, re;
            w.type = "joinPublicGroupDeclined", M.onPresence && M.onPresence(w), A.isChatroom ? (q = M.eventHandler) === null || q === void 0 || q.dispatch("onChatroomChange", w) : (z = M.eventHandler) === null || z === void 0 || z.dispatch("onGroupChange", w), I.operation = "joinPublicGroupDeclined", A.isChatroom ? (te = M.eventHandler) === null || te === void 0 || te.dispatch("onChatroomEvent", I) : (re = M.eventHandler) === null || re === void 0 || re.dispatch("onGroupEvent", I);
          }, 5: function() {
            var q, z, te, re;
            w.type = "joinPublicGroupSuccess", M.onPresence && M.onPresence(w), A.isChatroom ? (q = M.eventHandler) === null || q === void 0 || q.dispatch("onChatroomChange", w) : (z = M.eventHandler) === null || z === void 0 || z.dispatch("onGroupChange", w), I.operation = "acceptRequest", A.isChatroom ? (te = M.eventHandler) === null || te === void 0 || te.dispatch("onChatroomEvent", I) : (re = M.eventHandler) === null || re === void 0 || re.dispatch("onGroupEvent", I);
          }, 4: function() {
            var q, z, te, re;
            w.type = "joinGroupNotifications", w.reason = A.reason, M.onPresence && M.onPresence(w), A.isChatroom ? (q = M.eventHandler) === null || q === void 0 || q.dispatch("onChatroomChange", w) : (z = M.eventHandler) === null || z === void 0 || z.dispatch("onGroupChange", w), I.operation = "requestToJoin", A.isChatroom ? (te = M.eventHandler) === null || te === void 0 || te.dispatch("onChatroomEvent", I) : (re = M.eventHandler) === null || re === void 0 || re.dispatch("onGroupEvent", I);
          }, 3: function() {
            var q, z;
            w.type = "leave", M.onPresence && M.onPresence(w), A.isChatroom ? (q = M.eventHandler) === null || q === void 0 || q.dispatch("onChatroomChange", w) : (z = M.eventHandler) === null || z === void 0 || z.dispatch("onGroupChange", w);
          }, 2: function() {
            var q, z;
            w.type = "join", M.onPresence && M.onPresence(w), A.isChatroom ? (q = M.eventHandler) === null || q === void 0 || q.dispatch("onChatroomChange", w) : (z = M.eventHandler) === null || z === void 0 || z.dispatch("onGroupChange", w);
          }, 1: function() {
            var q, z, te, re;
            w.type = "deleteGroupChat", M.onPresence && M.onPresence(w), A.isChatroom ? (q = M.eventHandler) === null || q === void 0 || q.dispatch("onChatroomChange", w) : (z = M.eventHandler) === null || z === void 0 || z.dispatch("onGroupChange", w), I.operation = "destroy", A.isChatroom ? (te = M.eventHandler) === null || te === void 0 || te.dispatch("onChatroomEvent", I) : (re = M.eventHandler) === null || re === void 0 || re.dispatch("onGroupEvent", I);
          }, 0: function() {
            var q, z;
            I.operation = "create", A.isChatroom ? (q = M.eventHandler) === null || q === void 0 || q.dispatch("onChatroomEvent", I) : (z = M.eventHandler) === null || z === void 0 || z.dispatch("onGroupEvent", I);
          } }[_] || function() {
            console.error("No match operation ".concat(_));
          })();
        }
        var g = function(_) {
          var A = this.root.lookup("easemob.pb.MUCBody").decode(_.payload), L = A.operation;
          n.kg.debug("onMucMessage", A), m.call(this, L, A);
        }, h = e(4968), d = e(7252), f = function(_) {
          var A, L, w, k, y, I, H = this.root.lookup("easemob.pb.StatisticsBody").decode(_.payload);
          switch (H.operation) {
            case 0:
              this.onStatisticMessage && this.onStatisticMessage(H), (A = this.eventHandler) === null || A === void 0 || A.dispatch("onStatisticMessage", H);
              break;
            case 1:
              I = d.Z.create({ type: i.E.WEBIM_CONNCTION_USER_REMOVED, message: "user has been removed" }), this.logOut = !0, this.onError && this.onError(I), (L = this.eventHandler) === null || L === void 0 || L.dispatch("onError", I);
              break;
            case 2:
              I = d.Z.create({ type: i.E.WEBIM_CONNCTION_USER_LOGIN_ANOTHER_DEVICE, message: "the user is already logged on another device" }), this.logOut = !0, this.onError && this.onError(I), (w = this.eventHandler) === null || w === void 0 || w.dispatch("onError", I);
              break;
            case 3:
              I = d.Z.create({ type: i.E.WEBIM_CONNCTION_USER_KICKED_BY_CHANGE_PASSWORD, message: "the user was kicked by changing password" }), this.logOut = !0, this.onError && this.onError(I), (k = this.eventHandler) === null || k === void 0 || k.dispatch("onError", I);
              break;
            case 4:
              I = d.Z.create({ type: i.E.WEBIM_CONNCTION_USER_KICKED_BY_OTHER_DEVICE, message: "the user was kicked by other device" }), this.logOut = !0, this.onError && this.onError(I), (y = this.eventHandler) === null || y === void 0 || y.dispatch("onError", I);
              break;
            default:
              n.kg.error("handleStatisticsMsg:", H);
          }
        }, b = (e(9720), e(4370)), c = e(4363);
        function S(_) {
          var A, L = [], w = [], k = _.data;
          k && k.values && k.values.forEach(function(y) {
            Object.entries(y.status).forEach(function(I) {
              w.push({ device: I[0], status: Number(I[1]) });
            }), L.push({ userId: y.uid, lastTime: Number(y.last_time), expire: Number(y.expiry), ext: y.ext, statusDetails: w });
          }), this.onPresenceStatusChange && this.onPresenceStatusChange(L), (A = this.eventHandler) === null || A === void 0 || A.dispatch("onPresenceStatusChange", L);
        }
        function v(_) {
          var A = this;
          _.data.forEach(function(L) {
            var w, k = { from: L.from, to: L.to, chatType: L.channel_type === "chat" ? "singleChat" : "groupChat", messageId: L.messageId, reactions: L.reactions, ts: L.ts };
            (w = A.eventHandler) === null || w === void 0 || w.dispatch("onReactionChange", k);
          });
        }
        function N(_) {
          var A, L, w, k;
          if (_.data) {
            var y = _.data, I = { id: y.id || "", name: y.name || "", parentId: y.muc_parent_id || "", messageId: y.msg_parent_id || "", timestamp: y.timestamp || 0, operator: y.from || "", operation: "" };
            switch (y.operation) {
              case "create":
                I.operation = "create", I.createTimestamp = I.timestamp, I.messageCount = 0, (A = this.eventHandler) === null || A === void 0 || A.dispatch("onChatThreadChange", I);
                break;
              case "update_msg":
                I.operation = "update", I.messageCount = y.message_count, y.last_message && JSON.stringify(y.last_message) !== "{}" ? I.lastMessage = (0, c.w)(y.last_message) : JSON.stringify(y.last_message) === "{}" && (I.lastMessage = {}), (L = this.eventHandler) === null || L === void 0 || L.dispatch("onChatThreadChange", I);
                break;
              case "update":
                I.operation = "update", I.messageCount = y.message_count, (w = this.eventHandler) === null || w === void 0 || w.dispatch("onChatThreadChange", I);
                break;
              case "delete":
                I.operation = "destroy", (k = this.eventHandler) === null || k === void 0 || k.dispatch("onChatThreadChange", I);
            }
          }
        }
        function x(_) {
          var A, L = _.data;
          if (L.resource !== this.clientResource) {
            var w = { operation: "deleteRoaming", conversationId: L.to, chatType: L.chatType === "chat" ? "singleChat" : "groupChat", resource: L.resource };
            (A = this.eventHandler) === null || A === void 0 || A.dispatch("onMultiDeviceEvent", w);
          }
        }
        function O(_) {
          var A, L = _.data, w = { operation: L.op === "del" ? "deleteConversation" : L.op === "top" ? "pinnedConversation" : "unpinnedConversation", conversationId: L.id, conversationType: L.type === "chat" ? "singleChat" : "groupChat", timestamp: L.ts };
          this.clientResource !== L.res && ((A = this.eventHandler) === null || A === void 0 || A.dispatch("onMultiDeviceEvent", w));
        }
        var C = function(_) {
          var A = b.P6.parseNotify(_.payload);
          switch (A.type) {
            case "presence":
              S.call(this, A);
              break;
            case "reaction":
              v.call(this, A);
              break;
            case "thread":
              N.call(this, A);
              break;
            case "roaming_delete":
              x.call(this, A);
              break;
            case "conv":
              O.call(this, A);
              break;
            default:
              n.kg.error("unexpected notify type: ".concat(A.type));
          }
        }, E = e(2071), P = e(1595);
        function G(_) {
          return G = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(A) {
            return typeof A;
          } : function(A) {
            return A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A;
          }, G(_);
        }
        var Z, F = function() {
          return F = Object.assign || function(_) {
            for (var A, L = 1, w = arguments.length; L < w; L++)
              for (var k in A = arguments[L])
                Object.prototype.hasOwnProperty.call(A, k) && (_[k] = A[k]);
            return _;
          }, F.apply(this, arguments);
        };
        (function(_) {
          _[_.NORMAL = 0] = "NORMAL", _[_.SINGLECHAT = 1] = "SINGLECHAT", _[_.GROUPCHAT = 2] = "GROUPCHAT", _[_.CHATROOM = 3] = "CHATROOM", _[_.READ_ACK = 4] = "READ_ACK", _[_.DELIVER_ACK = 5] = "DELIVER_ACK", _[_.RECALL = 6] = "RECALL", _[_.CHANNEL_ACK = 7] = "CHANNEL_ACK", _[_.EDIT = 8] = "EDIT";
        })(Z || (Z = {}));
        var Y = b.P6.getEnvInfo();
        function K() {
          var _ = "webim", A = "", L = "", w = [], k = (/* @__PURE__ */ new Date()).valueOf();
          this.deviceId === "webim" ? (L = "random_" + k.toString(), _ = this.deviceId + "_" + L, A = this.deviceId) : _ = A = L = "webim_" + this.deviceId, this.context.jid && (this.context.jid.clientResource = _);
          var y = this.root.lookup("easemob.pb.Provision"), I = y.decode(w);
          I.compressType = this.compressType, I.encryptType = this.encryptType, I.osType = this.osType, I.version = this.version, I.deviceName = A, I.resource = _, I.deviceUuid = L, I.auth = "$t$" + this.token, I.actionVersion = "v2.0", I = y.encode(I).finish();
          var H = this.root.lookup("easemob.pb.MSync"), M = H.decode(w);
          return M.version = this.version, M.guid = this.context.jid, M.auth = "$t$" + this.token, M.command = 3, M.deviceId = A, M.serviceId = this.dataReport.getServiceId(), M.encryptType = this.encryptType, M.payload = I, H.encode(M).finish();
        }
        function V(_, A) {
          var L = this, w = b.P6.getEnvInfo();
          if (w.platform === "web" || w.platform === "zfb" || w.platform === "dd") {
            for (var k = "", y = 0; y < _.length; y++)
              k += String.fromCharCode(_[y]);
            return k = t().btoa(k), w.platform === "web" ? k : { data: k, isBuffer: !1, complete: function() {
            }, fail: function(H) {
              H.errMsg !== "sendSocketMessage:fail taskID not exist" && H.errMsg !== "SocketTast.send:fail SocketTask.readyState is not OPEN" || (n.kg.debug("send message fail and reconnect"), L.reconnecting || L.reconnect()), A && L._msgHash && L._msgHash[A] && L._msgHash[A].fail({ id: A });
            } };
          }
          var I = _;
          return { data: I.buffer.slice(I.byteOffset, I.byteOffset + I.byteLength), fail: function(H) {
            H.errMsg !== "sendSocketMessage:fail taskID not exist" && H.errMsg !== "SocketTast.send:fail SocketTask.readyState is not OPEN" || L.reconnecting || L.reconnect(), A && L._msgHash && L._msgHash[A] && L._msgHash[A].fail({ id: A });
          } };
        }
        function ne(_, A) {
          switch (_.ns) {
            case 0:
              f.call(this, _);
              break;
            case 1:
              o.Z.call(this, _, A);
              break;
            case 2:
              g.call(this, _);
              break;
            case 3:
              h.Z.handleRosterMsg.call(this, _);
              break;
            case 4:
              this.registerConfrIQHandler && this.registerConfrIQHandler(_, A, this);
              break;
            case 5:
              C.call(this, _);
              break;
            default:
              n.kg.error("distributeMeta", _);
          }
        }
        function ae(_, A) {
          for (var L = function(y) {
            var I = new (s())(_[y].id.low, _[y].id.high, _[y].id.unsigned).toString();
            if (w._load_msg_cache.some(function(J) {
              return J.msgId === I;
            }))
              return "continue";
            var H = _[y].from.name, M = _[y].to ? _[y].to.name : "", D = !!_[y].to && _[y].to.domain.indexOf("conference") !== -1;
            w._load_msg_cache.length <= w.max_cache_length || w._load_msg_cache.shift(), w._load_msg_cache.push({ msgId: I, from: H, to: M, isGroup: D }), ne.call(w, _[y], A);
          }, w = this, k = 0; k < _.length; k++)
            L(k);
        }
        function se(_) {
          var A = this.root.lookup("easemob.pb.CommUnreadDL");
          if (A = A.decode(_.payload), this.grantType === "agoraToken") {
            var L = new (s())(A.timestamp.low, A.timestamp.high, A.timestamp.unsigned).toString();
            this.compareTokenExpireTime(Number(L), this.expirationTime);
          }
          if (A.unread.length === 0)
            fe.call(this);
          else
            for (var w = 0; w < A.unread.length; w++)
              n.kg.debug("pull unread message", A.unread), ge.call(this, A.unread[w].queue);
          fe.call(this);
        }
        function ue() {
          var _ = [], A = this.root.lookup("easemob.pb.StatisticsBody"), L = A.decode(_);
          L.operation = 0, L = A.encode(L).finish();
          var w = this.root.lookup("easemob.pb.Meta").decode(_);
          w.id = (/* @__PURE__ */ new Date()).valueOf(), w.ns = 0, w.payload = L;
          var k = this.root.lookup("easemob.pb.CommSyncUL"), y = k.decode(_);
          y.meta = w, y = k.encode(y).finish();
          var I = this.root.lookup("easemob.pb.MSync"), H = I.decode(_);
          return H.version = this.version, H.encryptType = [0], H.command = 0, H.payload = y, I.encode(H).finish();
        }
        function me(_) {
          var A = [], L = this.root.lookup("easemob.pb.CommSyncUL"), w = L.decode(A);
          w.queue = _, w = L.encode(w).finish();
          var k = this.root.lookup("easemob.pb.MSync"), y = k.decode(A);
          return y.version = this.version, y.encryptType = this.encryptType, y.command = 0, y.payload = w, k.encode(y).finish();
        }
        function ge(_) {
          n.kg.debug("sendBackqueue");
          var A = me.call(this, _);
          T.call(this, A);
        }
        function Ce(_, A) {
          var L = [], w = this.root.lookup("easemob.pb.CommSyncUL"), k = w.decode(L);
          k.queue = A, k.key = new (s())(_.low, _.high, _.unsigned).toString(), k = w.encode(k).finish();
          var y = this.root.lookup("easemob.pb.MSync"), I = y.decode(L);
          return I.version = this.version, I.encryptType = this.encryptType, I.command = 0, I.payload = k, y.encode(I).finish();
        }
        function Re(_, A) {
          n.kg.debug("sendLastSession");
          var L = Ce.call(this, _, A);
          T.call(this, L);
        }
        function Ie(_) {
          var A, L, w, k, y, I, H = this.root.lookup("easemob.pb.Provision").decode(_.payload);
          if (this.context.jid && (this.context.jid.clientResource = H.resource), this.clientResource = H.resource, H.status.errorCode === 0) {
            if (this.reconnecting = !1, this.logOut = !1, Y.platform !== "zfb" && Y.platform !== "dd" || (this.sock.readyState = 1), this.times = 1, this.autoReconnectNumTotal = 0, this.onOpened && this.onOpened(), (A = this.eventHandler) === null || A === void 0 || A.dispatch("onConnected"), this.grantType === "agoraToken") {
              var M = Date.now();
              this.expiresIn = this.expirationTime - M, this.tokenExpireTimeCountDown(this.expiresIn);
            }
            Oe.call(this), Ue.call(this), ce.call(this), fe.call(this);
          } else {
            var D = void 0, J = H.status.reason;
            switch (J) {
              case "Sorry, the app day live count limit":
                D = d.Z.create({ type: i.E.MAX_LIMIT, message: "Sorry, the daily active user limit for this app has been reached" }), (L = this.eventHandler) === null || L === void 0 || L.dispatch("onError", D);
                break;
              case "Sorry, the app online count limit":
                D = d.Z.create({ type: i.E.MAX_LIMIT, message: "Sorry, the maximum number limit of online users for this app has been reached" }), (w = this.eventHandler) === null || w === void 0 || w.dispatch("onError", D);
                break;
              case "Sorry, the app month live count limit":
                D = d.Z.create({ type: i.E.MAX_LIMIT, message: "Sorry, the monthly active user limit for this app has been reached" }), (k = this.eventHandler) === null || k === void 0 || k.dispatch("onError", D);
                break;
              case "Sorry, who are you?":
                D = d.Z.create({ type: i.E.WEBIM_CONNCTION_AUTH_ERROR, message: "Auth failed" }), (y = this.eventHandler) === null || y === void 0 || y.dispatch("onError", D);
                break;
              default:
                D = d.Z.create({ type: i.E.SERVER_UNKNOWN_ERROR, message: J }), (I = this.eventHandler) === null || I === void 0 || I.dispatch("onError", D);
            }
          }
        }
        function Oe() {
          var _, A;
          if (((_ = this.unMSyncSendMsgMap) === null || _ === void 0 ? void 0 : _.size) > 0) {
            for (var L = Array.from(this.unMSyncSendMsgMap.keys()), w = 0; w < L.length; w++) {
              var k = this.unMSyncSendMsgMap.get(L[w]);
              T.call(this, k, L[w]);
            }
            (A = this.unMSyncSendMsgMap) === null || A === void 0 || A.clear();
          }
        }
        function fe() {
          var _ = ue.call(this);
          T.call(this, _);
        }
        function ce() {
          var _ = $e.call(this);
          T.call(this, _);
        }
        function Ue() {
          var _ = this;
          Ke.call(this), this.heartBeatID = setInterval(function() {
            ce.call(_);
          }, this.heartBeatWait);
        }
        function Ke() {
          clearInterval(this.heartBeatID);
        }
        function $e() {
          var _ = this.root.lookup("easemob.pb.MSync"), A = _.decode([]);
          return A.version = this.version, A.encryptType = this.encryptType, A.command = 1, _.encode(A).finish();
        }
        function Ve(_, A) {
          return _.some(function(L) {
            return L.name === A.name;
          });
        }
        function Be(_) {
          var A = this, L = this.root.lookup("easemob.pb.CommNotice"), w = L.decode(_.payload), k = Ve(this._queues, w.queue);
          n.kg.debug("receive notice", L, this._queues), k || this.clientResource === w.queue.clientResource && w.queue.name === this.context.userId || (this.qTimer && clearTimeout(this.qTimer), this.qTimer = setTimeout(function() {
            var y = w.queue;
            Ve(A._queues, y) && (ge.call(A, y), n.kg.debug("⬇q:", y));
          }, 1e4), this._queues.push(w.queue), this._queues.length === 1 && ge.call(this, w.queue));
        }
        function Ze(_) {
          if (typeof _ == "string") {
            var A = JSON.parse(_);
            if (Array.isArray(A)) {
              var L = A[0], w = A[1];
              this.closeInfo = { code: L, reason: w };
            }
          }
        }
        function Qe(_) {
          return A = this, L = void 0, k = function() {
            var y, I, H, M, D, J, X, oe;
            return function(q, z) {
              var te, re, Ae, We, Te = { label: 0, sent: function() {
                if (1 & Ae[0])
                  throw Ae[1];
                return Ae[1];
              }, trys: [], ops: [] };
              return We = { next: je(0), throw: je(1), return: je(2) }, typeof Symbol == "function" && (We[Symbol.iterator] = function() {
                return this;
              }), We;
              function je(ie) {
                return function(Je) {
                  return function(De) {
                    if (te)
                      throw new TypeError("Generator is already executing.");
                    for (; Te; )
                      try {
                        if (te = 1, re && (Ae = 2 & De[0] ? re.return : De[0] ? re.throw || ((Ae = re.return) && Ae.call(re), 0) : re.next) && !(Ae = Ae.call(re, De[1])).done)
                          return Ae;
                        switch (re = 0, Ae && (De = [2 & De[0], Ae.value]), De[0]) {
                          case 0:
                          case 1:
                            Ae = De;
                            break;
                          case 4:
                            return Te.label++, { value: De[1], done: !1 };
                          case 5:
                            Te.label++, re = De[1], De = [0];
                            continue;
                          case 7:
                            De = Te.ops.pop(), Te.trys.pop();
                            continue;
                          default:
                            if (!((Ae = (Ae = Te.trys).length > 0 && Ae[Ae.length - 1]) || De[0] !== 6 && De[0] !== 2)) {
                              Te = 0;
                              continue;
                            }
                            if (De[0] === 3 && (!Ae || De[1] > Ae[0] && De[1] < Ae[3])) {
                              Te.label = De[1];
                              break;
                            }
                            if (De[0] === 6 && Te.label < Ae[1]) {
                              Te.label = Ae[1], Ae = De;
                              break;
                            }
                            if (Ae && Te.label < Ae[2]) {
                              Te.label = Ae[2], Te.ops.push(De);
                              break;
                            }
                            Ae[2] && Te.ops.pop(), Te.trys.pop();
                            continue;
                        }
                        De = z.call(q, Te);
                      } catch (ze) {
                        De = [6, ze], re = 0;
                      } finally {
                        te = Ae = 0;
                      }
                    if (5 & De[0])
                      throw De[1];
                    return { value: De[0] ? De[1] : void 0, done: !0 };
                  }([ie, Je]);
                };
              }
            }(this, function(q) {
              if (y = b.P6.getEnvInfo(), I = this.root.lookup("easemob.pb.MSync"), this.name === "miniCore") {
                try {
                  _.data instanceof ArrayBuffer || (n.kg.debug("received message: ".concat(_.data)), Ze.call(this, _.data)), M = new Uint8Array(_.data), H = I.decode(M);
                } catch {
                  throw new Error("decode message fail.");
                }
                return [2, H];
              }
              if (y.platform === "web" || y.platform === "zfb" || y.platform === "dd") {
                for (_.data === '[401,"normal closed"]' && (n.kg.debug("received message: ".concat(_.data)), Ze.call(this, _.data)), D = t().atob(_.data), J = [], X = 0, oe = D.length; X < oe; ++X)
                  J.push(D.charCodeAt(X));
                return [2, I.decode(J)];
              }
              try {
                _.data instanceof ArrayBuffer || (n.kg.debug("received message: ".concat(_.data)), Ze.call(this, _.data)), H = I.decode(_.data);
              } catch {
                throw new Error("decode message fail.");
              }
              return [2, H];
            });
          }, new ((w = void 0) || (w = Promise))(function(y, I) {
            function H(J) {
              try {
                D(k.next(J));
              } catch (X) {
                I(X);
              }
            }
            function M(J) {
              try {
                D(k.throw(J));
              } catch (X) {
                I(X);
              }
            }
            function D(J) {
              var X;
              J.done ? y(J.value) : (X = J.value, X instanceof w ? X : new w(function(oe) {
                oe(X);
              })).then(H, M);
            }
            D((k = k.apply(A, L || [])).next());
          });
          var A, L, w, k;
        }
        function Pe(_) {
          var A = this;
          _.then(function(L) {
            if (L)
              switch (L.command) {
                case 0:
                  Le.call(A, L);
                  break;
                case 1:
                  se.call(A, L);
                  break;
                case 2:
                  Be.call(A, L);
                  break;
                case 3:
                  Ie.call(A, L);
                  break;
                default:
                  n.kg.error("unexpected msync command: ".concat(L.command));
              }
            else
              n.kg.error("unexpected msync result: ".concat(L));
          });
        }
        function Le(_) {
          var A, L, w, k, y, I, H, M, D, J, X, oe, q, z, te, re, Ae, We, Te = this.root.lookup("easemob.pb.CommSyncDL");
          Te = Te.decode(_.payload);
          var je = new (s())(Te.serverId.low, Te.serverId.high, Te.serverId.unsigned).toString(), ie = new (s())(Te.metaId.low, Te.metaId.high, Te.metaId.unsigned).toString();
          if (Te.status)
            if (Te.status.errorCode === 0) {
              if (Number(ie) > 0) {
                (Fe = E.Nl.get(ie)) && ((0, Fe.rpt)({ isEndApi: !0, data: { isSuccess: 1, requestName: Fe.requestName, requestMethod: "WEBSOCKET", requestUrl: this.url, code: P.dd.success } }), E.Nl.delete(ie));
                var Je = this._msgHash[ie];
                if (Je != null && Je.isHandleChatroom) {
                  try {
                    var De = ((A = this._msgHash[ie]) === null || A === void 0 ? void 0 : A.operation) === "join";
                    ((L = this._msgHash[ie]) === null || L === void 0 ? void 0 : L.resolve) instanceof Function && De && this._msgHash[ie].resolve({ type: 0, data: { action: "apply", id: this._msgHash[ie].roomId, result: !0, user: this.context.userId } }), ((w = this._msgHash[ie]) === null || w === void 0 ? void 0 : w.success) instanceof Function && De && this._msgHash[ie].success({ type: 0, data: { action: "apply", id: this._msgHash[ie].roomId, result: !0, user: this.context.userId } }), ((k = this._msgHash[ie]) === null || k === void 0 ? void 0 : k.resolve) instanceof Function && !De && this._msgHash[ie].resolve({ type: 0, data: { result: !0 } }), ((y = this._msgHash[ie]) === null || y === void 0 ? void 0 : y.success) instanceof Function && !De && this._msgHash[ie].success({ type: 0, data: { result: !0 } });
                  } catch (ot) {
                    var ze = d.Z.create({ type: i.E.WEBIM_CONNCTION_CALLBACK_INNER_ERROR, message: "when executing success function error", data: ot });
                    this.onError && this.onError(ze), (I = this.eventHandler) === null || I === void 0 || I.dispatch("onError", ze);
                  }
                  delete this._msgHash[ie];
                }
                if (Je && !Je.isHandleChatroom) {
                  var at = null, st = "", U = 0;
                  if (Te.metas.length !== 0)
                    try {
                      var Ee = b.P6.parseNotify(Te.metas[0].payload);
                      if (Ee.edit_msg) {
                        var Q = Ee.edit_msg, ye = Q.count, _e = Q.operator, be = Q.edit_time, Se = Q.sender, ee = Q.send_time;
                        at = { operationTime: be, operatorId: _e, operationCount: ye }, st = Se, U = Number(ee);
                      }
                    } catch (ot) {
                      ze = d.Z.create({ type: i.E.WEBIM_LOAD_MSG_ERROR, message: "decode message error", data: ot }), this.onError && this.onError(ze), (H = this.eventHandler) === null || H === void 0 || H.dispatch("onError", ze);
                    }
                  E.TJ.has(ie) && (E.TJ.get(ie).rpt({ isEndApi: !0, data: { isSuccess: 1, requestMethod: "WEBSOCKET", requestUrl: this.url, code: P.dd.success, msgId: je } }), E.TJ.delete(ie));
                  try {
                    var le = { localMsgId: ie, serverMsgId: je };
                    if (at) {
                      this._msgHash[ie].modifiedInfo = at;
                      var de = this._msgHash[ie], He = de.editMessageId, pe = de.type, Xe = de.chatType, Ye = de.msg, et = de.to, he = de.translations, Me = { id: He, type: pe, chatType: Xe, msg: Ye, modifiedInfo: at, to: et, from: st, time: Number(U) };
                      he && (Me.translations = he), le.message = Me;
                    }
                    ((M = this._msgHash[ie]) === null || M === void 0 ? void 0 : M.resolve) instanceof Function && this._msgHash[ie].resolve(le), ((D = this._msgHash[ie]) === null || D === void 0 ? void 0 : D.success) instanceof Function && this._msgHash[ie].success(ie, je);
                  } catch (ot) {
                    ze = d.Z.create({ type: i.E.WEBIM_CONNCTION_CALLBACK_INNER_ERROR, message: "when executing success function error", data: ot }), this.onError && this.onError(ze), (J = this.eventHandler) === null || J === void 0 || J.dispatch("onError", ze);
                  }
                  this.onReceivedMessage && this.onReceivedMessage({ id: ie, mid: je, to: this._msgHash[ie].to, time: 0 }), (X = this.eventHandler) === null || X === void 0 || X.dispatch("onReceivedMessage", { id: ie, mid: je, to: this._msgHash[ie].to }), delete this._msgHash[ie];
                }
              } else if (Te.metas.length !== 0)
                try {
                  ae.call(this, Te.metas, Te.status);
                } catch (ot) {
                  ze = d.Z.create({ type: i.E.WEBIM_LOAD_MSG_ERROR, message: "decode message error", data: ot }), this.onError && this.onError(ze), (oe = this.eventHandler) === null || oe === void 0 || oe.dispatch("onError", ze);
                } finally {
                  if (Te.isLast) {
                    var rt = -1;
                    this._queues.some(function(ot, nt) {
                      return ot.name === Te.name && (rt = nt, !0);
                    }) && rt > 0 && this._queues.splice(rt, 1), this._queues.length > 0 && (ge.call(this, this._queues[0]), this.qTimer && clearTimeout(this.qTimer));
                  } else
                    Re.call(this, Te.nextKey, Te.queue);
                }
              else if (Te.isLast) {
                var Ge = -1;
                this._queues.some(function(ot, nt) {
                  return ot.name === Te.queue.name && (Ge = nt, !0);
                }) && this._queues.splice(Ge, 1), this._queues.length > 0 && (ge.call(this, this._queues[0]), this.qTimer && clearTimeout(this.qTimer));
              }
            } else if (Te.status.errorCode === 15)
              ((q = this._msgHash[ie]) === null || q === void 0 ? void 0 : q.fail) instanceof Function && this._msgHash[ie].fail({ type: i.E.SERVICE_NOT_ALLOW_MESSAGING_MUTE, reason: "you were muted" }), this._msgHash[ie].reject instanceof Function && this._msgHash[ie].reject({ type: i.E.SERVICE_NOT_ALLOW_MESSAGING_MUTE, reason: "you were muted" });
            else if (Te.status.errorCode === 1) {
              switch (pe = void 0, Te.status.reason) {
                case "blocked":
                  pe = i.E.PERMISSION_DENIED;
                  break;
                case "group not found":
                  pe = i.E.GROUP_NOT_EXIST;
                  break;
                case "not in group or chatroom":
                  pe = i.E.GROUP_NOT_JOINED;
                  break;
                case "exceed recall time limit":
                  pe = i.E.MESSAGE_RECALL_TIME_LIMIT;
                  break;
                case "message recall disabled":
                  pe = i.E.SERVICE_NOT_ENABLED;
                  break;
                case "not in group or chatroom white list":
                  pe = i.E.SERVICE_NOT_ALLOW_MESSAGING;
                  break;
                case "nonroster":
                  pe = i.E.USER_NOT_FRIEND, Te.status.reason = "not contact";
                  break;
                case "group is disabled":
                  pe = i.E.GROUP_IS_DISABLED, Te.status.reason = "group is disabled";
                  break;
                case "limit directed users":
                  pe = i.E.MAX_LIMIT;
                  break;
                case "Sorry, edit limit reached":
                  pe = i.E.MAX_LIMIT, Te.status.reason = "Modify message limit reached";
                  break;
                case "Sorry, message does not exist":
                  pe = i.E.MODIFY_MESSAGE_NOT_EXIST, Te.status.reason = "The message does not exist.";
                  break;
                case "Sorry, You do not have permission":
                  pe = i.E.PERMISSION_DENIED, Te.status.reason = "You do not have the modified permission.";
                  break;
                case "Sorry, format is incorrect":
                  pe = i.E.MODIFY_MESSAGE_FORMAT_ERROR, Te.status.reason = "The modify messaged format error.";
                  break;
                case "Sorry, edit is not available":
                  pe = i.E.SERVICE_NOT_ENABLED, Te.status.reason = "The message modify function is not activated.";
                  break;
                case "Sorry, edit fail":
                  pe = i.E.MODIFY_MESSAGE_FAILED, Te.status.reason = "Modify message failed.";
                  break;
                default:
                  Te.status.reason.includes("grpID") && Te.status.reason.includes("does not exist!") ? (pe = i.E.CHATROOM_NOT_EXIST, Te.status.reason = "The chat room dose not exist.") : Te.status.reason.includes("username") && Te.status.reason.includes("doesn't exist!") ? pe = i.E.USER_NOT_FOUND : Te.status.reason === "group member list is full!" ? pe = i.E.CHATROOM_MEMBERS_FULL : Te.status.reason.includes("can not join this group") && Te.status.reason.includes("is in the blacklist") ? (pe = i.E.PERMISSION_DENIED, Te.status.reason = "permission denied") : pe = Te.status.reason === "can not operate this group, reason: group is disabled" ? i.E.GROUP_IS_DISABLED : Te.status.reason.includes("moderation") ? i.E.MESSAGE_MODERATION_BLOCKED : i.E.SERVER_UNKNOWN_ERROR;
              }
              if (this._msgHash[ie]) {
                if (!((z = this._msgHash[ie]) === null || z === void 0) && z.isHandleChatroom) {
                  var qe = d.Z.create({ type: pe, message: Te.status.reason || "", data: "" });
                  this._msgHash[ie].reject instanceof Function && this._msgHash[ie].reject(qe), this._msgHash[ie].error instanceof Function && this._msgHash[ie].error(qe);
                } else
                  qe = d.Z.create({ type: pe, message: Te.status.reason || "", data: { id: ie, mid: je } }), this._msgHash[ie].reject instanceof Function && this._msgHash[ie].reject(qe), this._msgHash[ie].fail instanceof Function && this._msgHash[ie].fail({ type: pe, reason: Te.status.reason ? Te.status.reason : "", data: { id: ie, mid: je } });
                delete this._msgHash[ie];
              }
            } else if (Te.status.errorCode === 7)
              Te.status.reason === "sensitive words" && this._msgHash[ie] ? (qe = d.Z.create({ type: i.E.MESSAGE_INCLUDE_ILLEGAL_CONTENT, message: "sensitive words", data: { id: ie, mid: je } }), this._msgHash[ie].reject instanceof Function && this._msgHash[ie].reject(qe), this._msgHash[ie].fail instanceof Function && this._msgHash[ie].fail({ type: i.E.MESSAGE_INCLUDE_ILLEGAL_CONTENT, data: { id: ie, mid: je, reason: "sensitive words" } })) : Te.status.reason === "blocked by mod_antispam" && this._msgHash[ie] ? (qe = d.Z.create({ type: i.E.MESSAGE_INCLUDE_ILLEGAL_CONTENT, message: "blocked by mod_antispam", data: { id: ie, mid: je } }), this._msgHash[ie].reject instanceof Function && this._msgHash[ie].reject(qe), this._msgHash[ie].fail instanceof Function && this._msgHash[ie].fail({ type: i.E.MESSAGE_INCLUDE_ILLEGAL_CONTENT, data: { id: ie, mid: je, reason: "blocked by mod_antispam" } })) : Te.status.reason === "user is mute" && this._msgHash[ie] ? (qe = d.Z.create({ type: i.E.USER_MUTED_BY_ADMIN, message: "user is mute", data: { id: ie, mid: je } }), this._msgHash[ie].reject instanceof Function && this._msgHash[ie].reject(qe), this._msgHash[ie].fail instanceof Function && this._msgHash[ie].fail(qe)) : Te.status.reason === "traffic limit" && this._msgHash[ie] ? (qe = d.Z.create({ type: i.E.MESSAGE_CURRENT_LIMITING, message: "traffic limit", data: { id: ie, mid: je } }), this._msgHash[ie].reject instanceof Function && this._msgHash[ie].reject(qe), this._msgHash[ie].fail instanceof Function && this._msgHash[ie].fail(qe)) : Te.status.reason === "Sorry, data is too large" && this._msgHash[ie] && (qe = d.Z.create({ type: i.E.MESSAGE_SIZE_LIMIT, message: "Sorry, data is too large", data: { id: ie, mid: je } }), this._msgHash[ie].reject instanceof Function && this._msgHash[ie].reject(qe), this._msgHash[ie].fail instanceof Function && this._msgHash[ie].fail(qe));
            else if (Te.status.errorCode === 19)
              this._msgHash[ie] && (E.TJ.has(ie) && (E.TJ.get(ie).rpt({ isEndApi: !0, data: { isSuccess: 0, requestMethod: "WEBSOCKET", requestUrl: this.url, code: i.E.MESSAGE_EXTERNAL_LOGIC_BLOCKED, codeDesc: Te.status.reason || "", msgId: je } }), E.TJ.delete(ie)), qe = d.Z.create({ type: i.E.MESSAGE_EXTERNAL_LOGIC_BLOCKED, message: Te.status.reason || "", data: { id: ie, mid: je } }), this._msgHash[ie].reject instanceof Function && this._msgHash[ie].reject(qe), this._msgHash[ie].fail instanceof Function && this._msgHash[ie].fail({ type: i.E.MESSAGE_EXTERNAL_LOGIC_BLOCKED, data: { id: ie, mid: je, reason: Te.status.reason } }));
            else if (this._msgHash[ie]) {
              E.TJ.has(ie) && (E.TJ.get(ie).rpt({ isEndApi: !0, data: { isSuccess: 0, requestMethod: "WEBSOCKET", requestUrl: this.url, code: i.E.WEBIM_LOAD_MSG_ERROR, codeDesc: ((te = Te.status) === null || te === void 0 ? void 0 : te.reason) || "", msgId: je } }), E.TJ.delete(ie));
              try {
                qe = d.Z.create({ type: i.E.WEBIM_LOAD_MSG_ERROR, message: ((re = Te.status) === null || re === void 0 ? void 0 : re.reason) || "", data: { id: ie, mid: je, reason: Te.status && Te.status.reason } }), this._msgHash[ie].reject instanceof Function && this._msgHash[ie].reject(qe), this._msgHash[ie].fail instanceof Function && this._msgHash[ie].fail({ type: i.E.WEBIM_LOAD_MSG_ERROR, data: { errorCode: Te.status && Te.status.errorCode, reason: Te.status && Te.status.reason } });
              } catch (ot) {
                ze = d.Z.create({ type: i.E.WEBIM_CONNCTION_CALLBACK_INNER_ERROR, message: "when executing fail function error", data: ot }), this.onError && this.onError(ze), (Ae = this.eventHandler) === null || Ae === void 0 || Ae.dispatch("onError", ze);
              }
              delete this._msgHash[ie];
            } else {
              var Fe;
              E.TJ.has(ie) && (E.TJ.get(ie).rpt({ isEndApi: !0, data: { isSuccess: 0, requestMethod: "WEBSOCKET", requestUrl: this.url, code: i.E.WEBIM_CONNCTION_CALLBACK_INNER_ERROR, codeDesc: "on message error", msgId: je } }), E.TJ.delete(ie)), (Fe = E.Nl.get(ie)) && ((0, Fe.rpt)({ isEndApi: !0, data: { isSuccess: 0, requestName: Fe.requestName, requestMethod: "WEBSOCKET", requestUrl: this.url, code: P.dd.failed, codeDesc: "on message error" } }), E.Nl.delete(ie)), ze = d.Z.create({ type: i.E.WEBIM_CONNCTION_CALLBACK_INNER_ERROR, message: "on message error" }), this.onError && this.onError(ze), (We = this.eventHandler) === null || We === void 0 || We.dispatch("onError", ze);
            }
        }
        function xe(_) {
          var A = [], L = this.root.lookup("easemob.pb.KeyValue"), w = [];
          for (var k in _) {
            var y = L.decode(A);
            y.key = k, G(_[k]) === "object" ? (y.type = 8, y.stringValue = JSON.stringify(_[k])) : typeof _[k] == "string" ? (y.type = 7, y.stringValue = _[k]) : typeof _[k] == "boolean" ? (y.type = 1, y.varintValue = _[k] === !0 ? 1 : 0) : Number.isInteger(_[k]) ? (y.type = 2, y.varintValue = _[k]) : (y.type = 6, y.doubleValue = _[k]), w.push(y);
          }
          return w;
        }
        function ve(_) {
          var A, L, w, k = [];
          if (this.root) {
            var y, I = this.root.lookup("easemob.pb.MessageBody.Content").decode(k);
            switch (y = !_.group && ((A = _ == null ? void 0 : _.chatType) === null || A === void 0 ? void 0 : A.toLowerCase()) !== "groupchat" || _.roomType ? _.group && _.roomType || ((L = _ == null ? void 0 : _.chatType) === null || L === void 0 ? void 0 : L.toLowerCase()) === "chatroom" ? "chatRoom" : "singleChat" : "groupChat", _.type) {
              case "txt":
                I.type = 0, I.text = _.msg;
                break;
              case "img":
                I.type = 1, _.body ? (I.displayName = _.body.filename, I.remotePath = _.body.url, I.secretKey = _.body.secret, I.fileLength = _.body.file_length, I.size = _.body.size, I.thumbnailDisplayName = _.body.filename) : _.file ? (I.displayName = _.file.filename, I.remotePath = _.file.url, I.secretKey = _.file.secret, I.fileLength = _.file.file_length, I.size = _.file.size, I.thumbnailDisplayName = _.file.filename) : (I.displayName = _.filename, I.remotePath = _.url, I.secretKey = _.secret, I.fileLength = _.file_length, I.size = _.size, I.thumbnailDisplayName = _.filename), _.isBuildCombinedMsg && (I.size = { height: _.height, width: _.width });
                break;
              case "video":
                I.type = 2, _.body ? (I.displayName = _.body.filename, I.remotePath = _.body.url, I.secretKey = _.body.secret, I.fileLength = _.body.file_length, I.duration = _.body.length, I.thumbnailDisplayName = _.body.filename) : _.isBuildCombinedMsg && (I.displayName = _.filename, I.remotePath = _.url, I.secretKey = _.secret, I.fileLength = _.file_length, I.duration = _.length, I.thumbnailDisplayName = _.filename);
                break;
              case "loc":
                I.type = 3, I.latitude = _.lat, I.longitude = _.lng, I.address = _.addr, I.buildingName = _.buildingName, I.latitude = _.lat;
                break;
              case "audio":
                I.type = 4, _.body ? (I.displayName = _.body.filename, I.remotePath = _.body.url, I.secretKey = _.body.secret, I.fileLength = _.body.file_length, I.duration = _.body.length, I.thumbnailDisplayName = _.body.filename) : _.isBuildCombinedMsg && (I.displayName = _.filename, I.remotePath = _.url, I.secretKey = _.secret, I.fileLength = _.file_length, I.duration = _.length, I.thumbnailDisplayName = _.filename);
                break;
              case "file":
                I.type = 5, _.body ? (I.displayName = _.body.filename, I.remotePath = _.body.url, I.secretKey = _.body.secret, I.fileLength = _.body.file_length, I.thumbnailDisplayName = _.body.filename) : _.isBuildCombinedMsg && (I.displayName = _.filename, I.remotePath = _.url, I.secretKey = _.secret, I.fileLength = _.file_length, I.thumbnailDisplayName = _.filename);
                break;
              case "cmd":
                I.type = 6, I.action = _.action;
                break;
              case "custom":
                I.type = 7, I.customEvent = _.customEvent, I.customExts = xe.call(this, _.customExts);
                break;
              case "combine":
                I.type = 0, I.subType = 0, I.text = _.compatibleText, I.displayName = _.filename, I.remotePath = _.url, I.secretKey = _.secret, I.fileLength = _.file_length, I.title = _.title, I.summary = _.summary;
            }
            var H = [];
            _.ext && (H = xe.call(this, _.ext));
            var M = this.root.lookup("easemob.pb.MessageBody"), D = M.decode(k), J = _.from || this.context.jid.name;
            D.from = { name: _.isBuildCombinedMsg ? J : this.context.jid.name }, D.to = { name: _.to }, _.type === "channel" ? D.type = Z.CHANNEL_ACK : _.type === "recall" ? (D.type = Z.RECALL, D.ackMessageId = _.ackId) : _.type === "delivery" ? (D.type = Z.DELIVER_ACK, D.ackMessageId = _.ackId) : _.type === "read" ? (D.type = Z.READ_ACK, D.ackMessageId = _.ackId, y === "groupChat" && (D.msgConfig = { allowGroupAck: !0 }, D.ackContent = _.ackContent)) : y === "chatRoom" ? D.type = Z.CHATROOM : y === "groupChat" ? (D.type = Z.GROUPCHAT, _.msgConfig && (D.msgConfig = { allowGroupAck: !0 })) : y === "singleChat" && (D.type = Z.SINGLECHAT), _.editMessageId && (D.type = Z.EDIT, D.editMessageId = _.editMessageId), D.contents = [I], D.ext = H;
            var X = function(Te) {
              var je = {};
              return "translations" in Te && (je.translations = Te.translations), "isChatThread" in Te && Te.isChatThread && (je.thread = {}), Object.keys(je).length > 0 ? JSON.stringify(je) : "";
            }(_);
            X && (D.meta = X), D = M.encode(D).finish();
            var oe = this.root.lookup("easemob.pb.Meta"), q = oe.decode(k);
            q.id = _.id;
            var z = "easemob.com";
            if (y !== "chatRoom" && y !== "groupChat" || (z = "conference.easemob.com"), q.to = { appKey: this.appKey, name: _.to, domain: z }, y === "chatRoom" && (q.ext = xe.call(this, function(Te) {
              return { chatroom_msg_tag: Te.priority === "high" ? 0 : Te.priority === "low" ? 2 : 1 };
            }(_))[0]), q.ns = 1, q.payload = D, q.routetype = _.deliverOnlineOnly ? 1 : 0, y !== "singleChat" && Array.isArray(_.receiverList) && ((w = _.receiverList) === null || w === void 0 ? void 0 : w.length) > 0 && (q.directedUsers = _.receiverList, q.routetype = 2, n.kg.debug("receiverList:", _.receiverList, "thirdMessage", q)), _.isBuildCombinedMsg)
              return q.timestamp = s().fromValue(_.time), oe.encode(q).finish();
            var te = this.root.lookup("easemob.pb.CommSyncUL"), re = te.decode(k);
            re.meta = q, re = te.encode(re).finish();
            var Ae = this.root.lookup("easemob.pb.MSync"), We = Ae.decode(k);
            return We.version = this.version, We.encryptType = this.encryptType, We.command = 0, We.payload = re, Ae.encode(We).finish();
          }
          _.fail && _.fail({ type: i.E.WEBIM_CONNCTION_CLIENT_OFFLINE, message: "Not logged in" });
        }
        function we(_) {
          var A = this, L = F({}, _);
          if (_.file)
            return L.accessToken = this.token, L.appKey = this.appKey, L.apiUrl = this.apiUrl, L.body && L.body.url ? ve.call(this, L) : new Promise(function(I, H) {
              var M = L.onFileUploadComplete;
              L.onFileUploadComplete = function(D) {
                var J, X;
                if (D.entities[0]["file-metadata"]) {
                  var oe = D.entities[0]["file-metadata"]["content-length"];
                  L.file_length = oe, L.filetype = D.entities[0]["file-metadata"]["content-type"], oe > 204800 && (L.thumbnail = !0);
                }
                L.body = { type: L.type || "file", secret: D.entities[0]["share-secret"], filename: L.file.filename || L.filename, url: (A.isHttpDNS ? A.apiUrl + D.uri.substr(D.uri.indexOf("/", 9)) : D.uri) + "/" + D.entities[0].uuid, length: L.length || 0, filetype: L.filetype || L.file.filetype, file_length: ((X = (J = L.file) === null || J === void 0 ? void 0 : J.data) === null || X === void 0 ? void 0 : X.size) || 0, size: { width: L.width || 0, height: L.height || 0 } }, L.file.url = D.uri, _.secret = D.entities[0]["share-secret"];
                var q = (A.isHttpDNS ? A.apiUrl + D.uri.substr(D.uri.indexOf("/", 9)) : D.uri) + "/" + D.entities[0].uuid;
                _.url = q, D.url = q, L.type === "img" && (_.thumb = "".concat(q, "?thumbnail=true"), D.thumb = "".concat(q, "?thumbnail=true")), M instanceof Function && M(D, L.id);
                var z = ve.call(A, L);
                E.TJ.size <= E.F3 && E.TJ.set(L.id, { rpt: A.dataReport.geOperateFun({ operationName: P.fI.SEND_MSG }) }), T.call(A, z);
              }, b.P6.uploadFile.call(A, L, P.fI.UPLOAD_MSG_ATTACH);
            });
          if (_.type === "combine") {
            L.accessToken = this.token, L.appKey = this.appKey, L.apiUrl = this.apiUrl;
            var w = L.onFileUploadComplete, k = L.onFileUploadError;
            return new Promise(function(I, H) {
              var M, D, J, X;
              if (((M = _.messageList) === null || M === void 0 ? void 0 : M.length) > 300 || ((D = _.messageList) === null || D === void 0 ? void 0 : D.length) === 0)
                return A._msgHash[L.id].reject({ type: i.E.MAX_LIMIT, message: "The number of combined messages exceeded the limit." });
              var oe = function(ie, Je, De) {
                if (De || arguments.length === 2)
                  for (var ze, at = 0, st = Je.length; at < st; at++)
                    !ze && at in Je || (ze || (ze = Array.prototype.slice.call(Je, 0, at)), ze[at] = Je[at]);
                return ie.concat(ze || Array.prototype.slice.call(Je));
              }([], _.messageList, !0), q = 0;
              oe.forEach(function(ie) {
                if (ie.type === "combine" && (ie == null ? void 0 : ie.combineLevel) >= 10)
                  return A._msgHash[L.id].reject({ type: i.E.MAX_LIMIT, message: "The level of the merged message exceeded the limit." });
                (ie == null ? void 0 : ie.combineLevel) > q && (q = ie == null ? void 0 : ie.combineLevel);
              }), L.combineLevel = q + 1;
              var z = ke.call(A, oe), te = function(ie, Je) {
                var De, ze, at, st, U = (A.isHttpDNS ? A.apiUrl + ie.uri.substr(ie.uri.indexOf("/", 9)) : ie.uri) + "/" + ie.entities[0].uuid, Ee = (De = ie.entities[0]) === null || De === void 0 ? void 0 : De["share-secret"], Q = U + "?em-redirect=true";
                Ee && (Q = "".concat(Q, "&share-secret=").concat(Ee)), w instanceof Function && w({ url: Q, secret: Ee }), _.url = Q, _.secret = Ee, L.url = U, L.secret = ie.entities[0]["share-secret"], L.filename = ((ze = L.file) === null || ze === void 0 ? void 0 : ze.filename) || (Je == null ? void 0 : Je.fileName), L.file_length = ((st = (at = L.file) === null || at === void 0 ? void 0 : at.data) === null || st === void 0 ? void 0 : st.size) || (Je == null ? void 0 : Je.fileLength) || 0;
                var ye = ve.call(A, L);
                T.call(A, ye);
              }, re = b.P6.getEnvInfo();
              if (re.platform !== "web" && re.platform !== "node" && re.platform !== "quick_app" && (!((X = (J = re.global) === null || J === void 0 ? void 0 : J.canIUse) === null || X === void 0) && X.call(J, "getFileSystemManager"))) {
                var Ae = re.global.getFileSystemManager(), We = A.apiUrl + "/" + A.orgName + "/" + A.appName + "/chatfiles";
                Ae.writeFile({ filePath: "".concat(re.global.env.USER_DATA_PATH, "/combine"), data: z.buffer, encoding: "binary", success: function(ie) {
                  re.global.uploadFile({ url: We, filePath: "".concat(re.global.env.USER_DATA_PATH, "/combine"), name: "file", header: { "Content-Type": "multipart/form-data", Authorization: "Bearer " + L.accessToken }, success: function(Je) {
                    if (Je.statusCode === 200) {
                      n.kg.debug("upload success", Je);
                      var De = JSON.parse(Je.data);
                      te(De, { fileName: "combine", fileLength: z.length });
                    } else
                      n.kg.debug("upload fail"), L.onFileUploadError instanceof Function && L.onFileUploadError(Je), this._msgHash[L.id].reject({ type: i.E.WEBIM_UPLOADFILE_ERROR, message: "Failed to upload the merge message.Please try again", data: Je });
                  }, fail: function(Je) {
                    n.kg.debug("upload fail"), L.onFileUploadError instanceof Function && L.onFileUploadError(ie), this._msgHash[L.id].reject({ type: i.E.WEBIM_UPLOADFILE_ERROR, message: "Failed to upload the merge message.Please try again", data: Je });
                  } });
                }, fail: function(ie) {
                  n.kg.debug("write file fail", ie), this._msgHash[L.id].reject({ type: i.E.WEBIM_UPLOADFILE_ERROR, message: "Failed to upload the merge message.Please try again", data: ie });
                } });
              } else {
                var Te = new File([z], "combine", { type: "application/octet-stream" }), je = { url: URL.createObjectURL(Te), filename: L.id, data: Te };
                L.file = je, L.onFileUploadComplete = function(ie) {
                  te(ie);
                }, L.onFileUploadError = function(ie) {
                  k instanceof Function && k(ie), A._msgHash[L.id].reject({ type: i.E.WEBIM_UPLOADFILE_ERROR, message: "Failed to upload the merge message.Please try again", data: ie });
                }, b.P6.uploadFile.call(A, L, P.fI.UPLOAD_MSG_ATTACH);
              }
            });
          }
          _.type === "img" && (L.body || (L.body = F(F({}, L), { size: { width: L.width || 0, height: L.height || 0 } })));
          var y = ve.call(this, L);
          T.call(this, y);
        }
        function ke(_) {
          for (var A = Uint8Array.from("cm", function(oe) {
            return oe.charCodeAt(0);
          }), L = 0; L < _.length; L++) {
            for (var w = _[L], k = F(F({}, w), { isBuildCombinedMsg: !0 }), y = this.mSync.encodeChatMsg.call(this, k), I = y.length, H = new Uint8Array(4), M = 0; M < 4; M++)
              H[M] = I >> 8 * (3 - M) & 255;
            n.kg.debug("message length:", H);
            var D = new Uint8Array(A.length + H.length + y.length);
            D.set(A), D.set(H, A.length), D.set(y, A.length + H.length), A = D;
          }
          var J = new Uint8Array(A.length + 1), X = 0;
          for (L = 2; L < A.length; L++)
            L % 2 == 1 && (X ^= A[L]);
          return J.set(A), n.kg.debug("checkResult:", X), J[A.length] = X, J;
        }
        function Ne(_, A, L) {
          var w = [], k = this.root.lookup("easemob.pb.MUCBody"), y = k.decode(w);
          y.mucId = { appKey: this.appKey, name: _, domain: "conference.easemob.com" }, y.operation = L === "join" ? 2 : 3, y.from = { name: this.context.userId }, y.isChatroom = !0, y = k.encode(y).finish();
          var I = this.root.lookup("easemob.pb.Meta").decode(w);
          I.id = A, I.from = { appKey: this.appKey, name: this.context.userId, domain: "easemob.com", client_resource: this.context.jid.clientResource }, I.to = { domain: "easemob.com" }, I.ns = 2, I.payload = y;
          var H = this.root.lookup("easemob.pb.CommSyncUL"), M = H.decode(w);
          M.meta = I, M = H.encode(M).finish();
          var D = this.root.lookup("easemob.pb.MSync"), J = D.decode(w);
          return J.version = this.version, J.encryptType = this.encryptType, J.command = 0, J.payload = M, D.encode(J).finish();
        }
        function j(_, A) {
          var L = b.P6.getUniqueId(), w = Ne.call(this, _.roomId, L, A);
          return T.call(this, F(F({}, _), { isHandleChatroom: !0, joinMsg: w, id: L, operation: A }), L);
        }
        function B(_) {
          var A = this;
          return new Promise(function(L, w) {
            var k, y;
            if (A.logOut)
              return w({ type: i.E.WEBIM_CONNECTION_CLOSED, message: "not login" });
            if (!_.id || typeof _.id != "string" || _.id === "")
              return w({ type: i.E.MESSAGE_PARAMETER_ERROR, message: 'Missing required parameter: "id"' });
            if (!_.to || typeof _.to != "string" || _.to === "")
              return w({ type: i.E.MESSAGE_PARAMETER_ERROR, message: 'Missing required parameter: "to"' });
            var I = _.type === "file" || _.type === "img" || _.type === "audio" || _.type === "video", H = _.type === "delivery" || _.type === "read" || _.type === "channel";
            if (_.id) {
              if (!I && !H || I && A.useOwnUploadFun) {
                var M = _.type === "recall" ? P.fI.SEND_RECALL_MSG : P.fI.SEND_MSG;
                _ != null && _.editMessageId && (M = P.fI.MODIFY_MESSAGE), E.TJ.size <= E.F3 && E.TJ.set(_.id, { rpt: A.dataReport.geOperateFun({ operationName: M }) });
              }
              A._msgHash[_.id] = F(F({}, _), { resolve: L, reject: w });
            }
            if (I || _.type === "combine")
              return we.call(A, _);
            if (_.type === "txt" && (!((k = _.msgConfig) === null || k === void 0) && k.languages) && Array.isArray((y = _.msgConfig) === null || y === void 0 ? void 0 : y.languages) && _.msgConfig.languages.length > 0) {
              var D = A.translateMessage || A.translation.translateMessage;
              if (!D)
                throw new Error("there is no method to translate message");
              D.call(A, { text: _.msg, languages: _.msgConfig.languages }).then(function(X) {
                var oe, q = (oe = X.data[0]) === null || oe === void 0 ? void 0 : oe.translations;
                q = q.map(function(te) {
                  return { code: te.to, text: te.text };
                }), _.translations = q, A._msgHash[_.id].translations = q;
                var z = ve.call(A, _);
                T.call(A, z, _.id);
              }).catch(function(X) {
                w(X);
              });
            } else {
              var J = ve.call(A, _);
              T.call(A, J, _.id);
            }
          });
        }
        function T(_, A) {
          var L, w, k = this;
          if (_.isHandleChatroom) {
            if (!this.isOpened()) {
              var y = { data: "", type: i.E.WEBIM_CONNCTION_DISCONNECTED, message: "websocket has been disconnected" };
              return Promise.reject(y);
            }
            return new Promise(function(I, H) {
              var M;
              k._msgHash[_.id] = F(F({}, _), { resolve: I, reject: H }), M = k.name === "miniCore" ? _.joinMsg : V.call(k, _.joinMsg, A), k.sock.send(M);
            });
          }
          if (!this.isOpened())
            return (L = this.unMSyncSendMsgMap) === null || L === void 0 || L.set(A, _), !this.logOut && this.autoReconnectNumTotal < this.autoReconnectNumMax && (this.autoReconnectNumTotal <= this.socketHost.length && this.isHttpDNS || !this.isHttpDNS) && (n.kg.debug("need to reconnect", this.autoReconnectNumTotal, this.autoReconnectNumMax), this.offLineSendConnecting = !0, this.reconnecting || this.reconnect()), void (this.onError && this.onError({ type: i.E.WEBIM_CONNCTION_DISCONNECTED, message: "websocket has been disconnected" }));
          w = this.name === "miniCore" ? _ : V.call(this, _, A), this.sock.send(w);
        }
        var W = function(_, A) {
          return _.send = B, _.sendMsg = B, n.kg.debug("init Msync by ".concat(_.name)), { generateProvision: K.bind(_), base64transform: V.bind(_), distributeMeta: ne.bind(_), decodeMeta: ae.bind(_), decodeUnreadDL: se.bind(_), _rebuild: ue.bind(_), _lastsession: Ce.bind(_), receiveProvision: Ie.bind(_), isInQueue: Ve.bind(_), decodeNotice: Be.bind(_), decodeMSync: Qe.bind(_), distributeMSync: Pe.bind(_), encodeChatMsg: ve.bind(_), upLoadFile: we.bind(_), send: B.bind(_), stopHeartBeat: Ke.bind(_), handleChatRoom: j.bind(_) };
        };
      }, 7252: function(p, R) {
        var e = function() {
          function r(t) {
            this.type = t.type, this.message = t.message, this.data = t.data;
          }
          return r.create = function(t) {
            return new r(t);
          }, r;
        }();
        R.Z = e;
      }, 8161: function(p, R, e) {
        e(3710), e(1539), e(9714), e(9653), e(9554), e(4747), e(8309), e(2772), e(2222);
        var r = e(3720), t = e.n(r), a = e(4363), s = e(4370), i = e(1070), o = e(7360), n = e(2449), l = { 0: "TEXT", 1: "IMAGE", 2: "VIDEO", 3: "LOCATION", 4: "VOICE", 5: "FILE", 6: "COMMAND", 7: "CUSTOM", 8: "COMBINE" };
        function u(h) {
          for (var d = {}, f = 0; f < h.length; f++)
            if (h[f].type === 8)
              d[h[f].key] = JSON.parse(h[f].stringValue);
            else if (h[f].type === 7)
              d[h[f].key] = h[f].stringValue;
            else if (h[f].type === 6)
              d[h[f].key] = h[f].doubleValue;
            else if (h[f].type === 5)
              d[h[f].key] = h[f].floatValue;
            else if (h[f].type === 1) {
              var b = h[f].varintValue, c = new (t())(b.low, b.high, b.unsigned).toString();
              d[h[f].key] = Number(c) !== 0;
            } else
              h[f].type !== 2 && h[f].type !== 3 && h[f].type !== 4 || (b = h[f].varintValue, c = new (t())(b.low, b.high, b.unsigned).toString(), d[h[f].key] = Number(c));
          return d;
        }
        function m(h) {
          var d, f, b, c = h.status, S = h.thirdMessage, v = h.msgBody, N = h.msgId, x = h.type, O = h.from, C = h.to, E = h.time, P = h.onlineState, G = h.chatType, Z = h.ignoreCallback, F = h.priority, Y = h.format, K = {}, V = {}, ne = c.errorCode > 0, ae = c.errorCode, se = c.reason, ue = {}, me = [], ge = [], Ce = {}, Re = "", Ie = 0, Oe = null, fe = null;
          if (S.ext && (ue = u(S.ext)), S.meta && typeof S.meta == "string") {
            var ce = JSON.parse(S.meta);
            if (ce.reaction && (me = ce.reaction).forEach(function(W) {
              W.isAddedBySelf = W.state, delete W.state;
            }), ce.translations && (ge = ce.translations), ce.edit_msg) {
              var Ue = ce.edit_msg, Ke = Ue.count, $e = Ue.operator;
              Ce = { operationTime: Ue.edit_time, operatorId: $e, operationCount: Ke }, Re = Ue.sender, Ie = Ue.send_time;
            }
            ce.thread && JSON.stringify(ce.thread) !== "{}" && (Oe = { messageId: ce.thread.msg_parent_id, parentId: ce.thread.muc_parent_id, chatThreadName: ce.thread.thread_name }), ce.thread_overview && JSON.stringify(ce.thread_overview) !== "{}" && (fe = { id: ce.thread_overview.id, parentId: ce.thread_overview.muc_parent_id, name: ce.thread_overview.name, lastMessage: ce.thread_overview.last_message ? (0, a.w)(ce.thread_overview.last_message) : null, createTimestamp: ce.thread_overview.create_timestamp, updateTimestamp: ce.thread_overview.update_timestamp, messageCount: ce.thread_overview.message_count || 0 });
          }
          switch (v.type) {
            case 0:
              if (Object.prototype.hasOwnProperty.call(v, "subType") && v.subType === 0) {
                b = (v.remotePath && this.apiUrl + v.remotePath.substr(v.remotePath.indexOf("/", 9))) + "?em-redirect=true", v.secretKey && (b = "".concat(b, "&share-secret=").concat(v.secretKey));
                var Ve = { id: N, type: "combine", chatType: G, to: C, from: O, ext: ue, time: Number(E), onlineState: P, title: v.title || "", summary: v.summary || "", url: b || "", secret: v.secretKey || "", file_length: v.fileLength || 0, filename: v.displayName || "", compatibleText: v.text, combineLevel: v.combineLevel || 0 };
                K.msgConfig && (Ve.msgConfig = K.msgConfig), me.length > 0 && (Ve.reactions = me), Oe && (Ve.chatThread = Oe), fe && (Ve.chatThreadOverview = fe), G === "chatRoom" && (Ve.priority = F), V = Ve, !Z && this.eventHandler && this.eventHandler.dispatch("onCombineMessage", Ve);
                break;
              }
              !(K = { id: N, type: x, contentsType: l[v.type], from: O, to: C, data: v.text, ext: ue, sourceMsg: v.text, time: E, msgConfig: S.msgConfig, onlineState: P }).msgConfig && delete S.msgConfig, K.error = ne, K.errorText = se, K.errorCode = ae, !Z && this.onTextMessage && this.onTextMessage(K);
              var Be = { id: N, type: "txt", chatType: G, msg: v.text, to: C, from: O, ext: ue, time: Number(E), onlineState: P };
              K.msgConfig && (Be.msgConfig = K.msgConfig), me.length > 0 && (Be.reactions = me), Oe && (Be.chatThread = Oe), fe && (Be.chatThreadOverview = fe), ge.length > 0 && (Be.translations = ge), Ce.operationCount > 0 && (Be.modifiedInfo = Ce, S.type === i.g.EDIT && (Be.from = Re, Be.time = Ie)), G === "chatRoom" && (Be.priority = F), V = Be, !Z && this.eventHandler && this.eventHandler.dispatch("onTextMessage", Be);
              break;
            case 1:
              var Ze = ((d = v == null ? void 0 : v.size) === null || d === void 0 ? void 0 : d.width) || 0, Qe = ((f = v == null ? void 0 : v.size) === null || f === void 0 ? void 0 : f.height) || 0;
              b = this.useOwnUploadFun ? v.remotePath : (v.remotePath && this.apiUrl + v.remotePath.substr(v.remotePath.indexOf("/", 9))) + "?em-redirect=true", v.secretKey && !this.useOwnUploadFun && (b = "".concat(b, "&share-secret=").concat(v.secretKey)), !(K = { id: N, type: x, contentsType: l[v.type], from: O, to: C, url: b, secret: v.secretKey, filename: v.displayName, thumb: this.useOwnUploadFun ? "" : "".concat(b, "&thumbnail=true"), thumb_secret: v.secretKey, file_length: v.fileLength || "", width: Ze, height: Qe, filetype: v.filetype || "", accessToken: this.token, ext: ue, time: E, msgConfig: S.msgConfig, onlineState: P }).delay && delete K.delay, !K.msgConfig && delete S.msgConfig, K.error = ne, K.errorText = se, K.errorCode = ae, !Z && this.onPictureMessage && this.onPictureMessage(K);
              var Pe = { id: N, type: "img", chatType: G, from: O, to: C, url: b || "", width: Ze, height: Qe, secret: v.secretKey || "", thumb: this.useOwnUploadFun ? "" : "".concat(b, "&thumbnail=true"), thumb_secret: v.secretKey, file_length: v.fileLength || 0, ext: ue, time: Number(E), onlineState: P };
              K.msgConfig && (Pe.msgConfig = K.msgConfig), me.length > 0 && (Pe.reactions = me), Oe && (Pe.chatThread = Oe), fe && (Pe.chatThreadOverview = fe), G === "chatRoom" && (Pe.priority = F), V = Pe, !Z && this.eventHandler && this.eventHandler.dispatch("onImageMessage", Pe);
              break;
            case 2:
              b = this.useOwnUploadFun ? v.remotePath : (v.remotePath && this.apiUrl + v.remotePath.substr(v.remotePath.indexOf("/", 9))) + "?em-redirect=true", v.secretKey && !this.useOwnUploadFun && (b = "".concat(b, "&share-secret=").concat(v.secretKey)), !(K = { id: N, type: x, contentsType: l[v.type], from: O, to: C, url: b, secret: v.secretKey, filename: v.displayName, length: v.duration || "", file_length: v.fileLength || "", filetype: v.filetype || "", accessToken: this.token || "", ext: ue, time: E, msgConfig: S.msgConfig, onlineState: P }).delay && delete K.delay, !K.msgConfig && delete S.msgConfig, K.error = ne, K.errorText = se, K.errorCode = ae, !Z && this.onVideoMessage && this.onVideoMessage(K);
              var Le = { id: N, type: "video", chatType: G, from: O, to: C, url: b, secret: v.secretKey, filename: v.displayName, length: v.duration || 0, file: {}, file_length: v.fileLength || 0, filetype: v.filetype || "", accessToken: this.token || "", ext: ue, time: Number(E), onlineState: P };
              K.msgConfig && (Le.msgConfig = K.msgConfig), me.length > 0 && (Le.reactions = me), Oe && (Le.chatThread = Oe), fe && (Le.chatThreadOverview = fe), G === "chatRoom" && (Le.priority = F), V = Le, !Z && this.eventHandler && this.eventHandler.dispatch("onVideoMessage", Le);
              break;
            case 3:
              !(K = { id: N, type: x, contentsType: l[v.type], from: O, to: C, addr: v.address, buildingName: v.buildingName, lat: v.latitude, lng: v.longitude, ext: ue, time: E, msgConfig: S.msgConfig, onlineState: P }).delay && delete K.delay, !K.msgConfig && delete S.msgConfig, K.error = ne, K.errorText = se, K.errorCode = ae, !Z && this.onLocationMessage && this.onLocationMessage(K);
              var xe = { id: N, type: "loc", chatType: G, from: O, to: C, buildingName: v.buildingName, addr: v.address, lat: v.latitude, lng: v.longitude, ext: ue, time: Number(E), onlineState: P };
              K.msgConfig && (xe.msgConfig = K.msgConfig), me.length > 0 && (xe.reactions = me), Oe && (xe.chatThread = Oe), fe && (xe.chatThreadOverview = fe), G === "chatRoom" && (xe.priority = F), V = xe, !Z && this.eventHandler && this.eventHandler.dispatch("onLocationMessage", xe);
              break;
            case 4:
              b = this.useOwnUploadFun ? v.remotePath : (v.remotePath && this.apiUrl + v.remotePath.substr(v.remotePath.indexOf("/", 9))) + "?em-redirect=true", v.secretKey && !this.useOwnUploadFun && (b = "".concat(b, "&share-secret=").concat(v.secretKey)), !(K = { id: N, type: x, contentsType: l[v.type], from: O, to: C, url: b, secret: v.secretKey, filename: v.displayName, file_length: v.fileLength || "", accessToken: this.token || "", ext: ue, length: v.duration, time: E, msgConfig: S.msgConfig, onlineState: P }).delay && delete K.delay, !K.msgConfig && delete S.msgConfig, K.error = ne, K.errorText = se, K.errorCode = ae, !Z && this.onAudioMessage && this.onAudioMessage(K);
              var ve = { id: N, type: "audio", chatType: G, from: O, to: C, url: b, secret: v.secretKey, file: {}, filename: v.displayName, length: v.duration || 0, file_length: v.fileLength || 0, filetype: v.filetype || "", accessToken: this.token || "", ext: ue, time: Number(E), onlineState: P };
              K.msgConfig && (ve.msgConfig = K.msgConfig), me.length > 0 && (ve.reactions = me), Oe && (ve.chatThread = Oe), fe && (ve.chatThreadOverview = fe), G === "chatRoom" && (ve.priority = F), V = ve, !Z && this.eventHandler && this.eventHandler.dispatch("onAudioMessage", ve);
              break;
            case 5:
              b = this.useOwnUploadFun ? v.remotePath : (v.remotePath && this.apiUrl + v.remotePath.substr(v.remotePath.indexOf("/", 9))) + "?em-redirect=true", v.secretKey && !this.useOwnUploadFun && (b = "".concat(b, "&share-secret=").concat(v.secretKey)), !(K = { id: N, type: x, contentsType: l[v.type], from: O, to: C, url: b, secret: v.secretKey, filename: v.displayName, file_length: v.fileLength, accessToken: this.token || "", ext: ue, time: E, msgConfig: S.msgConfig, onlineState: P }).delay && delete K.delay, !K.msgConfig && delete S.msgConfig, K.error = ne, K.errorText = se, K.errorCode = ae, !Z && this.onFileMessage && this.onFileMessage(K);
              var we = { id: N, type: "file", chatType: G, from: O, to: C, url: b, secret: v.secretKey, file: {}, filename: v.displayName, length: v.duration || 0, file_length: v.fileLength || 0, filetype: v.filetype || "", accessToken: this.token || "", ext: ue, time: Number(E), onlineState: P };
              K.msgConfig && (we.msgConfig = K.msgConfig), me.length > 0 && (we.reactions = me), Oe && (we.chatThread = Oe), fe && (we.chatThreadOverview = fe), G === "chatRoom" && (we.priority = F), V = we, !Z && this.eventHandler && this.eventHandler.dispatch("onFileMessage", we);
              break;
            case 6:
              !(K = { id: N, type: x, contentsType: l[v.type], from: O, to: C, action: v.action, ext: ue, time: E, msgConfig: S.msgConfig, onlineState: P }).msgConfig && delete S.msgConfig, K.error = ne, K.errorText = se, K.errorCode = ae, !Z && this.onCmdMessage && this.onCmdMessage(K);
              var ke = { id: N, type: "cmd", chatType: G, from: O, to: C, action: v.action, ext: ue, time: Number(E), onlineState: P };
              K.msgConfig && (ke.msgConfig = K.msgConfig), me.length > 0 && (ke.reactions = me), Oe && (ke.chatThread = Oe), fe && (ke.chatThreadOverview = fe), G === "chatRoom" && (ke.priority = F), V = ke, !Z && this.eventHandler && this.eventHandler.dispatch("onCmdMessage", ke);
              break;
            case 7:
              var Ne = {}, j = {};
              S.contents[0].customExts && (Ne = u(S.contents[0].customExts)), S.contents[0].params && (j = u(S.contents[0].params)), K = { id: N, type: x, contentsType: l[v.type], from: O, to: C, customEvent: v.customEvent, params: j, customExts: Ne, ext: ue, time: E, onlineState: P }, !Z && this.onCustomMessage && this.onCustomMessage(K);
              var B = { id: N, type: "custom", chatType: G, from: O, to: C, customEvent: v.customEvent, params: j, customExts: Ne, ext: ue, time: Number(E), onlineState: P };
              K.msgConfig && (B.msgConfig = K.msgConfig), me.length > 0 && (B.reactions = me), Oe && (B.chatThread = Oe), fe && (B.chatThreadOverview = fe), G === "chatRoom" && (B.priority = F), V = B, !Z && this.eventHandler && this.eventHandler.dispatch("onCustomMessage", B);
              break;
            case 8:
              b = (v.remotePath && this.apiUrl + v.remotePath.substr(v.remotePath.indexOf("/", 9))) + "?em-redirect=true", v.secretKey && (b = "".concat(b, "&share-secret=").concat(v.secretKey));
              var T = { id: N, type: "combine", chatType: G, to: C, from: O, ext: ue, time: Number(E), onlineState: P, title: v.title || "", summary: v.summary || "", url: b || "", secret: v.secretKey || "", file_length: v.fileLength || 0, filename: v.displayName || "", compatibleText: v.text, combineLevel: v.combineLevel || 0 };
              K.msgConfig && (T.msgConfig = K.msgConfig), me.length > 0 && (T.reactions = me), Oe && (T.chatThread = Oe), fe && (T.chatThreadOverview = fe), G === "chatRoom" && (T.priority = F), V = T, !Z && this.eventHandler && this.eventHandler.dispatch("onCombineMessage", T);
              break;
            default:
              o.kg.error("Unknow message type, message:", v);
          }
          return Y ? V : K;
        }
        function g(h, d, f) {
          if (this.delivery && h !== d) {
            var b = this.getUniqueId(), c = new n.Message("delivery", b);
            c.set({ ackId: f, to: h }), o.kg.debug("send delivery ack"), this.send(c.body);
          }
        }
        R.Z = function(h, d, f, b) {
          var c, S, v, N, x, O, C = new (t())(h.timestamp.low, h.timestamp.high, h.timestamp.unsigned).toString(), E = this.root.lookup("easemob.pb.MessageBody").decode(h.payload), P = 1;
          if (h.meta && h.meta.length)
            switch (s.P6.parseNotify(h.meta).is_online) {
              case 0:
                P = 0;
                break;
              case 1:
                P = 1;
                break;
              default:
                P = 2;
            }
          else
            P = 3;
          var G = new (t())(h.id.low, h.id.high, h.id.unsigned).toString(), Z = E.ackMessageId ? new (t())(E.ackMessageId.low, E.ackMessageId.high, E.ackMessageId.unsigned).toString() : "", F = "", Y = E.from && E.from.name, K = E.to && E.to.name;
          switch (o.kg.debug("thirdMessage:", E), E.type) {
            case i.g.SINGLECHAT:
              F = "chat", this.grantType === "agoraToken" && (F = "singleChat"), this.delivery && !f && Y !== this.context.userId && g.call(this, Y, K, G);
              break;
            case i.g.GROUPCHAT:
              F = "groupchat", this.grantType === "agoraToken" && (F = "groupChat");
              break;
            case i.g.CHATROOM:
              F = "chatroom", this.grantType === "agoraToken" && (F = "chatRoom"), P = 1;
              break;
            case i.g.READ_ACK:
              F = "read_ack";
              var V = void 0;
              return E.ext[0] && JSON.parse(E.ext[0].stringValue) ? (V = { id: G, type: "read", from: Y, to: K, mid: Z, groupReadCount: E.ext[0] && JSON.parse(E.ext[0].stringValue), ackContent: E.ackContent, onlineState: P }, this.onReadMessage && this.onReadMessage(V), void ((c = this.eventHandler) === null || c === void 0 || c.dispatch("onReadMessage", V))) : (V = { id: G, type: "read", from: Y, to: K, mid: Z, onlineState: P }, this.onReadMessage && this.onReadMessage(V), void ((S = this.eventHandler) === null || S === void 0 || S.dispatch("onReadMessage", V)));
            case i.g.DELIVER_ACK:
              F = "deliver_ack", this.onDeliveredMessage && this.onDeliveredMessage({ id: G, type: "delivery", from: Y, to: K, mid: Z, onlineState: P });
              var ne = { id: G, type: "delivery", from: Y, to: K, mid: Z, onlineState: P };
              return void ((v = this.eventHandler) === null || v === void 0 || v.dispatch("onDeliveredMessage", ne));
            case i.g.RECALL:
              F = "recall";
              var ae = { id: G, from: Y || "admin", to: K, mid: Z, onlineState: P };
              return this.onRecallMessage && this.onRecallMessage(ae), void ((N = this.eventHandler) === null || N === void 0 || N.dispatch("onRecallMessage", ae));
            case i.g.CHANNEL_ACK:
              this.onChannelMessage && this.onChannelMessage({ id: G, type: "channel", chatType: "singleChat", from: Y, to: K, time: Number(C), onlineState: P });
              var se = { id: G, type: "channel", chatType: "singleChat", from: Y, to: K, time: Number(C), onlineState: P };
              return void ((x = this.eventHandler) === null || x === void 0 || x.dispatch("onChannelMessage", se));
            case i.g.EDIT:
              var ue = m.call(this, { status: { errorCode: 0, reason: "" }, thirdMessage: E, msgBody: E.contents[0], msgId: G, type: F, from: Y, to: K, time: C, onlineState: P, ignoreCallback: !0, format: !0 }), me = !!h.to && h.to.domain.indexOf("conference") !== -1;
              ue.chatType = me ? "groupChat" : "singleChat";
              var ge = { id: E.editMessageId && new (t())(E.editMessageId.low, E.editMessageId.high, E.editMessageId.unsigned).toString(), type: ue.type, chatType: ue.chatType, msg: ue.msg, to: ue.to, from: ue.from, time: ue.time, modifiedInfo: ue.modifiedInfo };
              return ue.translations && (ge.translations = ue.translations), void (ue.type === "txt" && ((O = this.eventHandler) === null || O === void 0 || O.dispatch("onModifiedMessage", ge)));
            default:
              return void o.kg.error("unexpected message type: ".concat(E.type));
          }
          var Ce, Re = "normal";
          if (F.toLowerCase() === "chat" || F === "singleChat")
            Ce = "singleChat";
          else if (F.toLowerCase() === "groupchat" || F === "groupChat")
            Ce = "groupChat";
          else if (Ce = "chatRoom", P = 1, h.ext) {
            var Ie = u([h.ext]);
            Re = Ie.chatroom_msg_tag === 0 ? "high" : Ie.chatroom_msg_tag === 2 ? "low" : "normal";
          }
          for (var Oe = 0; Oe < E.contents.length; Oe++)
            return m.call(this, { status: d, thirdMessage: E, msgBody: E.contents[Oe], msgId: G, type: F, from: Y, to: K, time: C, onlineState: P, chatType: Ce, ignoreCallback: f, priority: Re, format: b });
        };
      }, 4968: function(p, R, e) {
        e(8309);
        var r, t = e(7360), a = e(2071), s = e(1595);
        (function(o) {
          o[o.Add = 2] = "Add", o[o.Remove = 3] = "Remove", o[o.Accept = 4] = "Accept", o[o.Decline = 5] = "Decline", o[o.Ban = 6] = "Ban", o[o.Allow = 7] = "Allow";
        })(r || (r = {}));
        var i = { operatRoster: function(o, n, l, u) {
          var m = [], g = this.root.lookup("easemob.pb.RosterBody"), h = g.decode(m);
          switch (n) {
            case "add":
              h.operation = r.Add;
              break;
            case "remove":
              h.operation = r.Remove;
              break;
            case "accept":
              h.operation = r.Accept;
              break;
            case "decline":
              h.operation = r.Decline;
              break;
            case "ban":
              h.operation = r.Ban;
              break;
            case "allow":
              h.operation = r.Allow;
              break;
            default:
              t.kg.error("operatRoster:", n);
          }
          h.from = this.context.jid;
          var d = [];
          if (typeof o.to == "string")
            d.push({ appKey: this.appKey || this.context.appKey, name: o.to, domain: "easemob.com" });
          else if (o.to instanceof Array)
            for (var f = 0; f < o.to.length; f++)
              d.push({ appKey: this.appKey, name: o.to[f], domain: "easemob.com" });
          h.to = d, h.reason = o.message || "", h = g.encode(h).finish();
          var b = this.root.lookup("easemob.pb.Meta").decode(m);
          b.id = o.id || this.getUniqueId();
          var c = this.dataReport.geOperateFun({ operationName: s.fI[n] });
          a.Nl.size <= a.F3 && a.Nl.set(b.id, { rpt: c, requestName: s.fI[n], resolve: l, reject: u }), b.from = this.context.jid, b.to = { domain: "@easemob.com" }, b.ns = 3, b.payload = h;
          var S = this.root.lookup("easemob.pb.CommSyncUL"), v = S.decode(m);
          v.meta = b, v = S.encode(v).finish();
          var N = this.root.lookup("easemob.pb.MSync"), x = N.decode(m);
          if (x.version = this.version, x.encryptType = [0], x.command = 0, x.guid = this.jid, x.payload = v, x = N.encode(x).finish(), this.name === "miniCore")
            this.sock.send(x);
          else {
            var O = this.mSync.base64transform(x);
            this.sock.send(O);
          }
        }, handleRosterMsg: function(o) {
          var n, l, u, m, g, h, d = this.root.lookup("easemob.pb.RosterBody").decode(o.payload), f = { type: "", to: d.to[0].name, from: d.from.name, status: d.reason };
          switch (d.operation) {
            case 2:
              f.type = "subscribe", this.onContactInvited && this.onContactInvited(f), (n = this.eventHandler) === null || n === void 0 || n.dispatch("onContactInvited", f);
              break;
            case 3:
              f.type = "unsubscribed", this.onContactDeleted && this.onContactDeleted(f), (l = this.eventHandler) === null || l === void 0 || l.dispatch("onContactDeleted", f);
              break;
            case 4:
              f.type = "subscribed", this.onContactAdded && this.onContactAdded(f), (u = this.eventHandler) === null || u === void 0 || u.dispatch("onContactAdded", f);
              break;
            case 5:
              f.type = "unsubscribed", this.onContactRefuse && this.onContactRefuse(f), (m = this.eventHandler) === null || m === void 0 || m.dispatch("onContactRefuse", f);
              break;
            case 6:
            case 7:
              break;
            case 8:
              f.type = "subscribed", this.onContactAgreed && this.onContactAgreed(f), (g = this.eventHandler) === null || g === void 0 || g.dispatch("onContactAgreed", f);
              break;
            case 9:
              f.type = "unsubscribed", this.onContactRefuse && this.onContactRefuse(f), (h = this.eventHandler) === null || h === void 0 || h.dispatch("onContactRefuse", f);
              break;
            default:
              t.kg.error("handleRosterMsg:", d);
          }
          this.onPresence && f.type && this.onPresence(f);
        } };
        R.Z = i;
      }, 7360: function(p, R, e) {
        function r() {
          console.log && (console.log.apply ? console.log.apply(console, Array.prototype.slice.call(arguments)) : Function.prototype.apply.apply(console.log, [console, arguments])), console.trace && console.trace();
        }
        e.d(R, { kg: function() {
          return h;
        } }), e(7042), e(2222), e(8309), e(9600), e(6992), e(1539), e(8783), e(3948), e(285), e(1637), e(4812), e(3710), e(9554), e(2772), e(4916), e(2526), e(1817), e(2165);
        var t = typeof window < "u" && window.navigator !== void 0 && /Trident\/|MSIE /.test(window.navigator.userAgent);
        function a(d) {
          return a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(f) {
            return typeof f;
          } : function(f) {
            return f && typeof Symbol == "function" && f.constructor === Symbol && f !== Symbol.prototype ? "symbol" : typeof f;
          }, a(d);
        }
        var s, i = function(d, f, b) {
          if (b || arguments.length === 2)
            for (var c, S = 0, v = f.length; S < v; S++)
              !c && S in f || (c || (c = Array.prototype.slice.call(f, 0, S)), c[S] = f[S]);
          return d.concat(c || Array.prototype.slice.call(f));
        }, o = function() {
        }, n = {};
        (function(d) {
          d[d.TRACE = 0] = "TRACE", d[d.DEBUG = 1] = "DEBUG", d[d.INFO = 2] = "INFO", d[d.WARN = 3] = "WARN", d[d.ERROR = 4] = "ERROR", d[d.SILENT = 5] = "SILENT";
        })(s || (s = {}));
        var l = function() {
          function d(f, b, c) {
            this.name = f || "defaultLogger", this.currentLevel = 0, this.useCookiePersist = !1, this.storageLogLevelKey = "loglevel", this.levels = s, this.logMethods = ["trace", "debug", "info", "warn", "error"], this.methodFactory = c || this.defaultMethodFactory;
            var S = this._getPersistedLevel();
            S == null && (S = b === null ? "WARN" : b), this.logs = [], this.config = { useCache: !1, maxCache: 3145728, color: "", background: "" }, this.logBytes = 0, this.setLevel(S, !1, "");
          }
          return d.prototype.setConfig = function(f) {
            this.config = f;
          }, d.prototype.getLevel = function() {
            return this.currentLevel;
          }, d.prototype.setLevel = function(f, b, c) {
            if (typeof f == "string" && (f = s[f]), f === void 0 && (f = 0), !(typeof f == "number" && f >= 0 && f <= this.levels.SILENT))
              throw Error("log.setLevel() called with invalid level: " + f);
            if (this.currentLevel = f, b !== !1 && this._persistLevel(f), this.replaceLoggingMethods(f, c), typeof console > "u" && f < s.SILENT)
              throw Error("No console available for logging");
          }, d.prototype.setDefaultLevel = function(f) {
            this._getPersistedLevel() || this.setLevel(f, !1, "");
          }, d.prototype.enableAll = function(f) {
            this.setLevel(this.levels.TRACE, !0, "");
          }, d.prototype.disableAll = function(f) {
            this.setLevel(this.levels.SILENT, !0, "");
          }, d.prototype.getLogs = function() {
            return this.logs;
          }, d.prototype.download = function() {
            if (typeof window < "u" && typeof document < "u") {
              var f = this.getLogs().join(`
`), b = new Blob([f], { type: "text/plain;charset=UTF-8" }), c = window.URL.createObjectURL(b), S = document.createElement("a");
              S.style.display = "none", S.href = c, S.setAttribute("download", "sdklog"), document.body.appendChild(S), S.click();
            }
          }, d.prototype._bindMethod = function(f, b, c) {
            var S = this, v = f[b], N = this.getTime();
            if (c)
              return this._cacheLog;
            if (typeof v.bind == "function")
              return function() {
                for (var x = [], O = 0; O < arguments.length; O++)
                  x[O] = arguments[O];
                var C = S.getTime();
                v.call.apply(v, i([f, "".concat(C, " IM SDK [").concat(b === "log" ? "debug" : b, "]: ")], x, !1)), S.onLog && S.onLog({ time: C, level: b === "log" ? "debug" : b, logs: x });
              };
            try {
              return Function.prototype.bind.call(v, f, "".concat(N, " IM SDK [").concat(b === "log" ? "debug" : b, "]: "));
            } catch {
              return function() {
                return Function.prototype.apply.apply(v, [f, arguments]);
              };
            }
          }, d.prototype.getTime = function() {
            var f = /* @__PURE__ */ new Date();
            return f.toTimeString().split(" ")[0] + ":" + f.getMilliseconds();
          }, d.prototype._cacheLog = function() {
            for (var f = [], b = 0; b < arguments.length; b++)
              f[b] = arguments[b];
            var c = (/* @__PURE__ */ new Date()).toLocaleString() + ": ", S = "";
            f.forEach(function(v) {
              a(v) === "object" ? S += JSON.stringify(v) + " " : S += v + " ";
            }), this._cacheLogCall(c + S);
          }, d.prototype._cacheLogCall = function(f) {
            var b = u(f), c = this.logBytes + b, S = this.config.maxCache;
            if (!(b >= S)) {
              if (c < S)
                this.logBytes += b;
              else
                for (var v = c - S, N = 0; N < v; ) {
                  var x = this.logs.shift();
                  x !== void 0 && (N += u(x));
                }
              this.logs.push(f);
            }
          }, d.prototype._getPersistedLevel = function() {
            var f;
            if (typeof window > "u")
              return 5;
            if ((f = window && window.localStorage && window.localStorage[this.storageLogLevelKey]) === "undefined") {
              var b = window.document.cookie, c = b.indexOf(encodeURIComponent(this.storageLogLevelKey));
              c !== -1 && (f = /^([^;]+)/.exec(b.slice(c))[1]);
            }
            return f || 5;
          }, d.prototype._persistLevel = function(f) {
            var b = this.logMethods[f] || "SILENT";
            typeof window < "u" && (window.localStorage && (window.localStorage[this.storageLogLevelKey] = b), this.useCookiePersist && (window.document.cookie = encodeURIComponent(this.storageLogLevelKey) + "=" + b + ";"));
          }, d.prototype.replaceLoggingMethods = function(f, b) {
            for (var c = 0; c < this.logMethods.length; c++) {
              var S = this.logMethods[c];
              this[S] = c < f ? o : this.methodFactory(S, f, b);
            }
            this.log = this.debug;
          }, d.prototype.defaultMethodFactory = function(f, b, c) {
            return this.realMethod(f) || this.enableLoggingWhenConsoleArrives.apply(this, [f, b, c]);
          }, d.prototype.realMethod = function(f) {
            return f === "debug" && (f = "log"), typeof console < "u" && (f === "trace" && t ? r : console[f] !== void 0 ? this._bindMethod(console, f, this.config.useCache) : console.log !== void 0 ? this._bindMethod(console, "log", this.config.useCache) : o);
          }, d.prototype.enableLoggingWhenConsoleArrives = function(f, b, c) {
            return (function() {
              typeof console < "u" && (this.replaceLoggingMethods.call(this, b, c), this[f].apply(this, arguments));
            }).bind(this);
          }, d;
        }();
        function u(d) {
          for (var f = d.length, b = 0; b < d.length; b++)
            d.charCodeAt(b) > 255 && f++;
          return f;
        }
        var m = new l();
        m.getLogger = function(d) {
          if (typeof d != "string" || d === "")
            throw new TypeError("You must supply a name when creating a logger.");
          return this;
        };
        var g = typeof window < "u" ? window.log : void 0;
        m.noConflict = function() {
          return typeof window < "u" && window.log === m && (window.log = g), m;
        }, m.getLoggers = function() {
          return n;
        };
        var h = m;
      }, 2449: function(p, R, e) {
        e.d(R, { Message: function() {
          return f;
        } });
        var r = e(4370), t = function() {
          function b(c) {
            var S = c.id;
            this.id = S, this.type = c.type;
          }
          return b.prototype.set = function(c) {
            this.body = { id: this.id, ackId: c.id, type: "read", to: c.to, from: c.from || "", chatType: c.chatType };
          }, b.create = function(c) {
            return { id: r.P6.getUniqueId(), chatType: c.chatType, ackId: c.id, type: "read", to: c.to, from: c.from || "", ackContent: c.ackContent, isChatThread: c.isChatThread, priority: c.priority, deliverOnlineOnly: c.deliverOnlineOnly };
          }, b;
        }(), a = function() {
          function b(c) {
            this.id = c.id, this.type = c.type;
          }
          return b.prototype.set = function(c) {
            this.body = { id: this.id, ackId: c.ackId, type: "delivery", to: c.to, from: c.from || "" };
          }, b.create = function(c) {
            return { id: r.P6.getUniqueId(), ackId: c.ackId, type: "delivery", to: c.to, from: c.from || "", isChatThread: c.isChatThread, priority: c.priority, deliverOnlineOnly: c.deliverOnlineOnly };
          }, b;
        }(), s = (e(3843), e(3710), function() {
          function b(c) {
            var S = c.type, v = c.id;
            this.id = v, this.type = S;
          }
          return b.prototype.set = function(c) {
            this.body = { id: this.id, chatType: c.chatType || "singleChat", type: "channel", to: c.to, from: c.from || "", time: Date.now() };
          }, b.prototype.setChatType = function(c) {
            return !!this.body && (this.body.chatType = c, !0);
          }, b.prototype.setGroup = function(c) {
            return !!this.body && (this.body.group = c, !0);
          }, b.create = function(c) {
            return { id: r.P6.getUniqueId(), type: "channel", chatType: c.chatType || "singleChat", to: c.to, from: c.from || "", time: Date.now(), isChatThread: c.isChatThread, priority: c.priority, deliverOnlineOnly: c.deliverOnlineOnly };
          }, b;
        }()), i = (e(9753), function() {
          function b(c) {
            var S = c.type, v = c.id || r.P6.getUniqueId();
            this.id = v, this.type = S, this.value = "";
          }
          return b.prototype.set = function(c) {
            this.body = { id: this.id, chatType: c.chatType || "singleChat", type: "txt", to: c.to, msg: c.msg, from: c.from, roomType: c.roomType, success: c.success, fail: c.fail, ext: c.ext, time: Date.now(), isChatThread: c.isChatThread }, this.value = c.msg;
          }, b.prototype.setChatType = function(c) {
            return !!this.body && (this.body.chatType = c, !0);
          }, b.prototype.setGroup = function(c) {
            return !!this.body && (this.body.group = c, !0);
          }, b.create = function(c) {
            var S, v;
            return !((S = c.msgConfig) === null || S === void 0) && S.languages && Array.isArray((v = c.msgConfig) === null || v === void 0 ? void 0 : v.languages), { type: "txt", id: r.P6.getUniqueId(), msg: c.msg, to: c.to, from: c.from || "", chatType: c.chatType, ext: c.ext, time: Date.now(), msgConfig: c.msgConfig, isChatThread: c.isChatThread, priority: c.priority, deliverOnlineOnly: c.deliverOnlineOnly, receiverList: c.receiverList };
          }, b;
        }()), o = function() {
          function b(c) {
            var S = c.type, v = c.id;
            this.id = v || r.P6.getUniqueId(), this.type = S;
          }
          return b.prototype.set = function(c) {
            this.body = { id: this.id, chatType: c.chatType || "singleChat", type: "cmd", to: c.to, action: c.action, from: c.from, roomType: c.roomType, success: c.success, fail: c.fail, ext: c.ext, time: Date.now() };
          }, b.prototype.setChatType = function(c) {
            return !!this.body && (this.body.chatType = c, !0);
          }, b.prototype.setGroup = function(c) {
            return !!this.body && (this.body.group = c, !0);
          }, b.create = function(c) {
            return { id: r.P6.getUniqueId(), type: "cmd", to: c.to, from: c.from || "", chatType: c.chatType || "singleChat", action: c.action, time: Date.now(), ext: c.ext, msgConfig: c.msgConfig, isChatThread: c.isChatThread, priority: c.priority, deliverOnlineOnly: c.deliverOnlineOnly, receiverList: c.receiverList };
          }, b;
        }(), n = function() {
          function b(c) {
            var S = c.type, v = c.id || r.P6.getUniqueId();
            this.id = v, this.type = S;
          }
          return b.prototype.set = function(c) {
            this.body = { id: this.id, chatType: c.chatType || "singleChat", type: "custom", to: c.to, customEvent: c.customEvent, customExts: c.customExts, from: c.from, roomType: c.roomType, success: c.success, fail: c.fail, ext: c.ext, time: Date.now() };
          }, b.prototype.setChatType = function(c) {
            return !!this.body && (this.body.chatType = c, !0);
          }, b.prototype.setGroup = function(c) {
            return !!this.body && (this.body.group = c, !0);
          }, b.create = function(c) {
            return { id: r.P6.getUniqueId(), chatType: c.chatType || "singleChat", type: "custom", to: c.to, customEvent: c.customEvent, customExts: c.customExts, from: c.from || "", ext: c.ext, time: Date.now(), msgConfig: c.msgConfig, isChatThread: c.isChatThread, priority: c.priority, deliverOnlineOnly: c.deliverOnlineOnly, receiverList: c.receiverList };
          }, b;
        }(), l = function() {
          function b(c) {
            var S = c.type, v = c.id;
            this.id = v || r.P6.getUniqueId(), this.type = S;
          }
          return b.prototype.set = function(c) {
            this.body = { id: this.id, chatType: c.chatType || "singleChat", type: "loc", to: c.to, addr: c.addr, buildingName: c.buildingName, lat: c.lat, lng: c.lng, from: c.from, roomType: c.roomType, success: c.success, fail: c.fail, ext: c.ext, time: Date.now() };
          }, b.prototype.setChatType = function(c) {
            return !!this.body && (this.body.chatType = c, !0);
          }, b.prototype.setGroup = function(c) {
            return !!this.body && (this.body.group = c, !0);
          }, b.create = function(c) {
            return { id: r.P6.getUniqueId(), chatType: c.chatType || "singleChat", type: "loc", to: c.to, addr: c.addr, buildingName: c.buildingName, lat: c.lat, lng: c.lng, from: c.from || "", ext: c.ext, time: Date.now(), msgConfig: c.msgConfig, isChatThread: c.isChatThread, priority: c.priority, deliverOnlineOnly: c.deliverOnlineOnly, receiverList: c.receiverList };
          }, b;
        }(), u = function() {
          function b(c) {
            var S = c.type, v = c.id || r.P6.getUniqueId();
            this.id = v, this.type = S;
          }
          return b.prototype.set = function(c) {
            c.file = c.file || c.fileInputId && r.P6.getFileUrl(c.fileInputId), this.body = { id: this.id, chatType: c.chatType || "singleChat", type: "img", file: c.file, width: c.width, height: c.height, to: c.to, from: c.from || "", roomType: c.roomType, success: c.success, fail: c.fail, ext: c.ext, time: Date.now(), onFileUploadError: c.onFileUploadError, onFileUploadComplete: c.onFileUploadComplete, onFileUploadProgress: c.onFileUploadProgress, body: c.body, isChatThread: c.isChatThread };
          }, b.prototype.setChatType = function(c) {
            return !!this.body && (this.body.chatType = c, !0);
          }, b.prototype.setGroup = function(c) {
            return !!this.body && (this.body.group = c, !0);
          }, b.create = function(c) {
            return { id: r.P6.getUniqueId(), chatType: c.chatType, type: "img", url: c.url, width: c.width, height: c.height, file: c.file, to: c.to, from: c.from || "", ext: c.ext, time: Date.now(), msgConfig: c.msgConfig, file_length: c.file_length, onFileUploadError: c.onFileUploadError, onFileUploadComplete: c.onFileUploadComplete, onFileUploadProgress: c.onFileUploadProgress, isChatThread: c.isChatThread, priority: c.priority, deliverOnlineOnly: c.deliverOnlineOnly, receiverList: c.receiverList, thumbnailWidth: c.thumbnailWidth, thumbnailHeight: c.thumbnailHeight };
          }, b;
        }(), m = function() {
          function b(c) {
            var S = c.type, v = c.id || r.P6.getUniqueId();
            this.id = v, this.type = S;
          }
          return b.prototype.set = function(c) {
            c.file = c.file || c.fileInputId && r.P6.getFileUrl(c.fileInputId), this.body = { id: this.id, chatType: c.chatType || "singleChat", type: "audio", file: c.file, filename: c.filename, length: c.length, file_length: c.file_length, fileInputId: c.fileInputId, to: c.to, from: c.from, roomType: c.roomType, success: c.success, fail: c.fail, ext: c.ext, time: Date.now(), onFileUploadError: c.onFileUploadError, onFileUploadComplete: c.onFileUploadComplete, onFileUploadProgress: c.onFileUploadProgress, body: c.body, isChatThread: c.isChatThread };
          }, b.prototype.setChatType = function(c) {
            return !!this.body && (this.body.chatType = c, !0);
          }, b.prototype.setGroup = function(c) {
            return !!this.body && (this.body.group = c, !0);
          }, b.create = function(c) {
            return { id: r.P6.getUniqueId(), chatType: c.chatType, type: "audio", filename: c.filename, length: c.length, file: c.file, to: c.to, from: c.from || "", ext: c.ext, time: Date.now(), onFileUploadError: c.onFileUploadError, onFileUploadComplete: c.onFileUploadComplete, onFileUploadProgress: c.onFileUploadProgress, body: c.body, file_length: c.file_length, msgConfig: c.msgConfig, isChatThread: c.isChatThread, priority: c.priority, deliverOnlineOnly: c.deliverOnlineOnly, receiverList: c.receiverList };
          }, b;
        }(), g = function() {
          function b(c) {
            var S = c.type, v = c.id;
            this.id = v, this.type = S;
          }
          return b.prototype.set = function(c) {
            c.file = c.file || c.fileInputId && r.P6.getFileUrl(c.fileInputId), this.body = { id: this.id, chatType: c.chatType || "singleChat", type: "video", file: c.file, filename: c.filename, length: c.length, file_length: c.file_length, fileInputId: c.fileInputId, to: c.to, from: c.from, roomType: c.roomType, success: c.success, fail: c.fail, ext: c.ext, time: Date.now(), apiUrl: c.apiUrl, onFileUploadError: c.onFileUploadError, onFileUploadComplete: c.onFileUploadComplete, onFileUploadProgress: c.onFileUploadProgress, body: c.body, isChatThread: c.isChatThread };
          }, b.prototype.setChatType = function(c) {
            return !!this.body && (this.body.chatType = c, !0);
          }, b.prototype.setGroup = function(c) {
            return !!this.body && (this.body.group = c, !0);
          }, b.create = function(c) {
            return { id: r.P6.getUniqueId(), chatType: c.chatType || "singleChat", type: "video", file: c.file, filename: c.filename, length: c.length, file_length: c.file_length, fileInputId: c.fileInputId, to: c.to, from: c.from || "", ext: c.ext, time: Date.now(), onFileUploadError: c.onFileUploadError, onFileUploadComplete: c.onFileUploadComplete, onFileUploadProgress: c.onFileUploadProgress, body: c.body, msgConfig: c.msgConfig, isChatThread: c.isChatThread, priority: c.priority, deliverOnlineOnly: c.deliverOnlineOnly, receiverList: c.receiverList };
          }, b;
        }(), h = function() {
          function b(c) {
            var S = c.type, v = c.id;
            this.id = v, this.type = S;
          }
          return b.prototype.set = function(c) {
            c.file = c.file || c.fileInputId && r.P6.getFileUrl(c.fileInputId), this.body = { id: this.id, chatType: c.chatType || "singleChat", type: "file", file: c.file, filename: c.filename, fileInputId: c.fileInputId, to: c.to, from: c.from, roomType: c.roomType, success: c.success, fail: c.fail, ext: c.ext, time: Date.now(), onFileUploadError: c.onFileUploadError, onFileUploadComplete: c.onFileUploadComplete, onFileUploadProgress: c.onFileUploadProgress, body: c.body, isChatThread: c.isChatThread };
          }, b.prototype.setChatType = function(c) {
            return !!this.body && (this.body.chatType = c, !0);
          }, b.prototype.setGroup = function(c) {
            return !!this.body && (this.body.group = c, !0);
          }, b.create = function(c) {
            return { id: r.P6.getUniqueId(), chatType: c.chatType || "singleChat", type: "file", file: c.file, filename: c.filename, fileInputId: c.fileInputId, file_length: c.file_length, to: c.to, from: c.from || "", ext: c.ext, onFileUploadError: c.onFileUploadError, onFileUploadComplete: c.onFileUploadComplete, onFileUploadProgress: c.onFileUploadProgress, body: c.body, time: Date.now(), msgConfig: c.msgConfig, isChatThread: c.isChatThread, priority: c.priority, deliverOnlineOnly: c.deliverOnlineOnly, receiverList: c.receiverList };
          }, b;
        }(), d = function() {
          function b(c) {
            var S = c.type, v = c.id || r.P6.getUniqueId();
            this.id = v, this.type = S, this.value = "";
          }
          return b.create = function(c) {
            return { type: "combine", id: r.P6.getUniqueId(), to: c.to, from: c.from || "", chatType: c.chatType, ext: c.ext, time: Date.now(), msgConfig: c.msgConfig, isChatThread: c.isChatThread, priority: c.priority, deliverOnlineOnly: c.deliverOnlineOnly, receiverList: c.receiverList, compatibleText: c.compatibleText, title: c.title, summary: c.summary, messageList: c.messageList, onFileUploadError: c.onFileUploadError, onFileUploadComplete: c.onFileUploadComplete };
          }, b;
        }(), f = function() {
          function b(c, S) {
            return this.type = c, this.id = S || r.P6.getUniqueId(), b.createOldMsg({ type: c, id: this.id });
          }
          return b.createOldMsg = function(c) {
            switch (c.type) {
              case "read":
                return new t({ type: "read", id: c.id });
              case "delivery":
                return new a({ type: "delivery", id: c.id });
              case "channel":
                return new s({ type: "channel", id: c.id });
              case "txt":
                return new i({ type: "txt", id: c.id });
              case "cmd":
                return new o({ type: "cmd", id: c.id });
              case "custom":
                return new n({ type: "custom", id: c.id });
              case "loc":
                return new l({ type: "loc", id: c.id });
              case "img":
                return new u({ type: "img", id: c.id });
              case "audio":
                return new m({ type: "audio", id: c.id });
              case "video":
                return new g({ type: "video", id: c.id });
              case "file":
                return new h({ type: "file", id: c.id });
            }
          }, b.create = function(c) {
            return (S = c).type !== "txt" || "version" in S ? function(v) {
              return v.type === "img" && !("version" in v);
            }(c) ? u.create(c) : function(v) {
              return v.type === "cmd" && !("version" in v);
            }(c) ? o.create(c) : function(v) {
              return v.type === "file" && !("version" in v);
            }(c) ? h.create(c) : function(v) {
              return v.type === "audio" && !("version" in v);
            }(c) ? m.create(c) : function(v) {
              return v.type === "video" && !("version" in v);
            }(c) ? g.create(c) : function(v) {
              return v.type === "custom" && !("version" in v);
            }(c) ? n.create(c) : function(v) {
              return v.type === "loc" && !("version" in v);
            }(c) ? l.create(c) : function(v) {
              return v.type === "channel" && !("version" in v);
            }(c) ? s.create(c) : function(v) {
              return v.type === "delivery" && !("version" in v);
            }(c) ? a.create(c) : function(v) {
              return v.type === "read" && !("version" in v);
            }(c) ? t.create(c) : function(v) {
              return v.type === "combine" && !("version" in v);
            }(c) ? d.create(c) : {} : i.create(c);
            var S;
          }, b.prototype.set = function(c) {
          }, b;
        }();
      }, 5531: function(p, R, e) {
        var r;
        e.d(R, { E: function() {
          return r;
        } }), function(t) {
          t[t.REQUEST_SUCCESS = 0] = "REQUEST_SUCCESS", t[t.REQUEST_TIMEOUT = -1] = "REQUEST_TIMEOUT", t[t.REQUEST_UNKNOWN = -2] = "REQUEST_UNKNOWN", t[t.REQUEST_PARAMETER_ERROR = -3] = "REQUEST_PARAMETER_ERROR", t[t.REQUEST_ABORT = -4] = "REQUEST_ABORT", t[t.WEBIM_CONNCTION_USER_NOT_ASSIGN_ERROR = 0] = "WEBIM_CONNCTION_USER_NOT_ASSIGN_ERROR", t[t.WEBIM_CONNCTION_OPEN_ERROR = 1] = "WEBIM_CONNCTION_OPEN_ERROR", t[t.WEBIM_CONNCTION_AUTH_ERROR = 2] = "WEBIM_CONNCTION_AUTH_ERROR", t[t.WEBIM_CONNCTION_OPEN_USERGRID_ERROR = 3] = "WEBIM_CONNCTION_OPEN_USERGRID_ERROR", t[t.WEBIM_CONNCTION_ATTACH_ERROR = 4] = "WEBIM_CONNCTION_ATTACH_ERROR", t[t.WEBIM_CONNCTION_ATTACH_USERGRID_ERROR = 5] = "WEBIM_CONNCTION_ATTACH_USERGRID_ERROR", t[t.WEBIM_CONNCTION_REOPEN_ERROR = 6] = "WEBIM_CONNCTION_REOPEN_ERROR", t[t.WEBIM_CONNCTION_SERVER_CLOSE_ERROR = 7] = "WEBIM_CONNCTION_SERVER_CLOSE_ERROR", t[t.WEBIM_CONNCTION_SERVER_ERROR = 8] = "WEBIM_CONNCTION_SERVER_ERROR", t[t.WEBIM_CONNCTION_IQ_ERROR = 9] = "WEBIM_CONNCTION_IQ_ERROR", t[t.WEBIM_CONNCTION_PING_ERROR = 10] = "WEBIM_CONNCTION_PING_ERROR", t[t.WEBIM_CONNCTION_NOTIFYVERSION_ERROR = 11] = "WEBIM_CONNCTION_NOTIFYVERSION_ERROR", t[t.WEBIM_CONNCTION_GETROSTER_ERROR = 12] = "WEBIM_CONNCTION_GETROSTER_ERROR", t[t.WEBIM_CONNCTION_CROSSDOMAIN_ERROR = 13] = "WEBIM_CONNCTION_CROSSDOMAIN_ERROR", t[t.WEBIM_CONNCTION_LISTENING_OUTOF_MAXRETRIES = 14] = "WEBIM_CONNCTION_LISTENING_OUTOF_MAXRETRIES", t[t.WEBIM_CONNCTION_RECEIVEMSG_CONTENTERROR = 15] = "WEBIM_CONNCTION_RECEIVEMSG_CONTENTERROR", t[t.WEBIM_CONNCTION_DISCONNECTED = 16] = "WEBIM_CONNCTION_DISCONNECTED", t[t.WEBIM_CONNCTION_AJAX_ERROR = 17] = "WEBIM_CONNCTION_AJAX_ERROR", t[t.WEBIM_CONNCTION_JOINROOM_ERROR = 18] = "WEBIM_CONNCTION_JOINROOM_ERROR", t[t.WEBIM_CONNCTION_GETROOM_ERROR = 19] = "WEBIM_CONNCTION_GETROOM_ERROR", t[t.WEBIM_CONNCTION_GETROOMINFO_ERROR = 20] = "WEBIM_CONNCTION_GETROOMINFO_ERROR", t[t.WEBIM_CONNCTION_GETROOMMEMBER_ERROR = 21] = "WEBIM_CONNCTION_GETROOMMEMBER_ERROR", t[t.WEBIM_CONNCTION_GETROOMOCCUPANTS_ERROR = 22] = "WEBIM_CONNCTION_GETROOMOCCUPANTS_ERROR", t[t.WEBIM_CONNCTION_LOAD_CHATROOM_ERROR = 23] = "WEBIM_CONNCTION_LOAD_CHATROOM_ERROR", t[t.WEBIM_CONNCTION_NOT_SUPPORT_CHATROOM_ERROR = 24] = "WEBIM_CONNCTION_NOT_SUPPORT_CHATROOM_ERROR", t[t.WEBIM_CONNCTION_JOINCHATROOM_ERROR = 25] = "WEBIM_CONNCTION_JOINCHATROOM_ERROR", t[t.WEBIM_CONNCTION_QUITCHATROOM_ERROR = 26] = "WEBIM_CONNCTION_QUITCHATROOM_ERROR", t[t.WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR = 27] = "WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR", t[t.WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR = 28] = "WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR", t[t.WEBIM_CONNCTION_SESSIONID_NOT_ASSIGN_ERROR = 29] = "WEBIM_CONNCTION_SESSIONID_NOT_ASSIGN_ERROR", t[t.WEBIM_CONNCTION_RID_NOT_ASSIGN_ERROR = 30] = "WEBIM_CONNCTION_RID_NOT_ASSIGN_ERROR", t[t.WEBIM_CONNCTION_CALLBACK_INNER_ERROR = 31] = "WEBIM_CONNCTION_CALLBACK_INNER_ERROR", t[t.WEBIM_CONNCTION_CLIENT_OFFLINE = 32] = "WEBIM_CONNCTION_CLIENT_OFFLINE", t[t.WEBIM_CONNCTION_CLIENT_LOGOUT = 33] = "WEBIM_CONNCTION_CLIENT_LOGOUT", t[t.WEBIM_CONNCTION_CLIENT_TOO_MUCH_ERROR = 34] = "WEBIM_CONNCTION_CLIENT_TOO_MUCH_ERROR", t[t.WEBIM_CONNECTION_ACCEPT_INVITATION_FROM_GROUP = 35] = "WEBIM_CONNECTION_ACCEPT_INVITATION_FROM_GROUP", t[t.WEBIM_CONNECTION_DECLINE_INVITATION_FROM_GROUP = 36] = "WEBIM_CONNECTION_DECLINE_INVITATION_FROM_GROUP", t[t.WEBIM_CONNECTION_ACCEPT_JOIN_GROUP = 37] = "WEBIM_CONNECTION_ACCEPT_JOIN_GROUP", t[t.WEBIM_CONNECTION_DECLINE_JOIN_GROUP = 38] = "WEBIM_CONNECTION_DECLINE_JOIN_GROUP", t[t.WEBIM_CONNECTION_CLOSED = 39] = "WEBIM_CONNECTION_CLOSED", t[t.WEBIM_CONNECTION_ERROR = 40] = "WEBIM_CONNECTION_ERROR", t[t.MAX_LIMIT = 50] = "MAX_LIMIT", t[t.MESSAGE_NOT_FOUND = 51] = "MESSAGE_NOT_FOUND", t[t.NO_PERMISSION = 52] = "NO_PERMISSION", t[t.OPERATION_UNSUPPORTED = 53] = "OPERATION_UNSUPPORTED", t[t.OPERATION_NOT_ALLOWED = 54] = "OPERATION_NOT_ALLOWED", t[t.WEBIM_UPLOADFILE_BROWSER_ERROR = 100] = "WEBIM_UPLOADFILE_BROWSER_ERROR", t[t.WEBIM_UPLOADFILE_ERROR = 101] = "WEBIM_UPLOADFILE_ERROR", t[t.WEBIM_UPLOADFILE_NO_LOGIN = 102] = "WEBIM_UPLOADFILE_NO_LOGIN", t[t.WEBIM_UPLOADFILE_NO_FILE = 103] = "WEBIM_UPLOADFILE_NO_FILE", t[t.WEBIM_DOWNLOADFILE_ERROR = 200] = "WEBIM_DOWNLOADFILE_ERROR", t[t.WEBIM_DOWNLOADFILE_NO_LOGIN = 201] = "WEBIM_DOWNLOADFILE_NO_LOGIN", t[t.WEBIM_DOWNLOADFILE_BROWSER_ERROR = 202] = "WEBIM_DOWNLOADFILE_BROWSER_ERROR", t[t.PARSE_FILE_ERROR = 203] = "PARSE_FILE_ERROR", t[t.USER_NOT_FOUND = 204] = "USER_NOT_FOUND", t[t.MESSAGE_PARAMETER_ERROR = 205] = "MESSAGE_PARAMETER_ERROR", t[t.WEBIM_CONNCTION_USER_LOGIN_ANOTHER_DEVICE = 206] = "WEBIM_CONNCTION_USER_LOGIN_ANOTHER_DEVICE", t[t.WEBIM_CONNCTION_USER_REMOVED = 207] = "WEBIM_CONNCTION_USER_REMOVED", t[t.WEBIM_CONNCTION_USER_KICKED_BY_CHANGE_PASSWORD = 216] = "WEBIM_CONNCTION_USER_KICKED_BY_CHANGE_PASSWORD", t[t.WEBIM_CONNCTION_USER_KICKED_BY_OTHER_DEVICE = 217] = "WEBIM_CONNCTION_USER_KICKED_BY_OTHER_DEVICE", t[t.USER_MUTED_BY_ADMIN = 219] = "USER_MUTED_BY_ADMIN", t[t.USER_NOT_FRIEND = 221] = "USER_NOT_FRIEND", t[t.WEBIM_MESSAGE_REC_TEXT = 300] = "WEBIM_MESSAGE_REC_TEXT", t[t.WEBIM_MESSAGE_REC_TEXT_ERROR = 301] = "WEBIM_MESSAGE_REC_TEXT_ERROR", t[t.WEBIM_MESSAGE_REC_EMOTION = 302] = "WEBIM_MESSAGE_REC_EMOTION", t[t.WEBIM_MESSAGE_REC_PHOTO = 303] = "WEBIM_MESSAGE_REC_PHOTO", t[t.WEBIM_MESSAGE_REC_AUDIO = 304] = "WEBIM_MESSAGE_REC_AUDIO", t[t.WEBIM_MESSAGE_REC_AUDIO_FILE = 305] = "WEBIM_MESSAGE_REC_AUDIO_FILE", t[t.WEBIM_MESSAGE_REC_VEDIO = 306] = "WEBIM_MESSAGE_REC_VEDIO", t[t.WEBIM_MESSAGE_REC_VEDIO_FILE = 307] = "WEBIM_MESSAGE_REC_VEDIO_FILE", t[t.WEBIM_MESSAGE_REC_FILE = 308] = "WEBIM_MESSAGE_REC_FILE", t[t.WEBIM_MESSAGE_SED_TEXT = 309] = "WEBIM_MESSAGE_SED_TEXT", t[t.WEBIM_MESSAGE_SED_EMOTION = 310] = "WEBIM_MESSAGE_SED_EMOTION", t[t.WEBIM_MESSAGE_SED_PHOTO = 311] = "WEBIM_MESSAGE_SED_PHOTO", t[t.WEBIM_MESSAGE_SED_AUDIO = 312] = "WEBIM_MESSAGE_SED_AUDIO", t[t.WEBIM_MESSAGE_SED_AUDIO_FILE = 313] = "WEBIM_MESSAGE_SED_AUDIO_FILE", t[t.WEBIM_MESSAGE_SED_VEDIO = 314] = "WEBIM_MESSAGE_SED_VEDIO", t[t.WEBIM_MESSAGE_SED_VEDIO_FILE = 315] = "WEBIM_MESSAGE_SED_VEDIO_FILE", t[t.WEBIM_MESSAGE_SED_FILE = 316] = "WEBIM_MESSAGE_SED_FILE", t[t.WEBIM_MESSAGE_SED_ERROR = 317] = "WEBIM_MESSAGE_SED_ERROR", t[t.STATUS_INIT = 400] = "STATUS_INIT", t[t.STATUS_DOLOGIN_USERGRID = 401] = "STATUS_DOLOGIN_USERGRID", t[t.STATUS_DOLOGIN_IM = 402] = "STATUS_DOLOGIN_IM", t[t.STATUS_OPENED = 403] = "STATUS_OPENED", t[t.STATUS_CLOSING = 404] = "STATUS_CLOSING", t[t.STATUS_CLOSED = 405] = "STATUS_CLOSED", t[t.STATUS_ERROR = 406] = "STATUS_ERROR", t[t.SERVER_BUSY = 500] = "SERVER_BUSY", t[t.MESSAGE_INCLUDE_ILLEGAL_CONTENT = 501] = "MESSAGE_INCLUDE_ILLEGAL_CONTENT", t[t.MESSAGE_EXTERNAL_LOGIC_BLOCKED = 502] = "MESSAGE_EXTERNAL_LOGIC_BLOCKED", t[t.SERVER_UNKNOWN_ERROR = 503] = "SERVER_UNKNOWN_ERROR", t[t.MESSAGE_RECALL_TIME_LIMIT = 504] = "MESSAGE_RECALL_TIME_LIMIT", t[t.SERVICE_NOT_ENABLED = 505] = "SERVICE_NOT_ENABLED", t[t.SERVICE_NOT_ALLOW_MESSAGING = 506] = "SERVICE_NOT_ALLOW_MESSAGING", t[t.SERVICE_NOT_ALLOW_MESSAGING_MUTE = 507] = "SERVICE_NOT_ALLOW_MESSAGING_MUTE", t[t.MESSAGE_MODERATION_BLOCKED = 508] = "MESSAGE_MODERATION_BLOCKED", t[t.MESSAGE_CURRENT_LIMITING = 509] = "MESSAGE_CURRENT_LIMITING", t[t.MESSAGE_WEBSOCKET_DISCONNECTED = 510] = "MESSAGE_WEBSOCKET_DISCONNECTED", t[t.MESSAGE_SIZE_LIMIT = 511] = "MESSAGE_SIZE_LIMIT", t[t.GROUP_NOT_EXIST = 605] = "GROUP_NOT_EXIST", t[t.GROUP_NOT_JOINED = 602] = "GROUP_NOT_JOINED", t[t.GROUP_MEMBERS_FULL = 606] = "GROUP_MEMBERS_FULL", t[t.PERMISSION_DENIED = 603] = "PERMISSION_DENIED", t[t.WEBIM_LOAD_MSG_ERROR = 604] = "WEBIM_LOAD_MSG_ERROR", t[t.GROUP_ALREADY_JOINED = 601] = "GROUP_ALREADY_JOINED", t[t.GROUP_MEMBERS_LIMIT = 607] = "GROUP_MEMBERS_LIMIT", t[t.GROUP_IS_DISABLED = 608] = "GROUP_IS_DISABLED", t[t.GROUP_MEMBER_ATTRIBUTES_SET_FAILED = 609] = "GROUP_MEMBER_ATTRIBUTES_SET_FAILED", t[t.REST_PARAMS_STATUS = 700] = "REST_PARAMS_STATUS", t[t.CHATROOM_NOT_JOINED = 702] = "CHATROOM_NOT_JOINED", t[t.CHATROOM_MEMBERS_FULL = 704] = "CHATROOM_MEMBERS_FULL", t[t.CHATROOM_NOT_EXIST = 705] = "CHATROOM_NOT_EXIST", t[t.SDK_RUNTIME_ERROR = 999] = "SDK_RUNTIME_ERROR", t[t.PRESENCE_PARAM_EXCEED = 1100] = "PRESENCE_PARAM_EXCEED", t[t.REACTION_ALREADY_ADDED = 1101] = "REACTION_ALREADY_ADDED", t[t.REACTION_CREATING = 1102] = "REACTION_CREATING", t[t.REACTION_OPERATION_IS_ILLEGAL = 1103] = "REACTION_OPERATION_IS_ILLEGAL", t[t.TRANSLATION_NOT_VALID = 1200] = "TRANSLATION_NOT_VALID", t[t.TRANSLATION_TEXT_TOO_LONG = 1201] = "TRANSLATION_TEXT_TOO_LONG", t[t.TRANSLATION_FAILED = 1204] = "TRANSLATION_FAILED", t[t.THREAD_NOT_EXIST = 1300] = "THREAD_NOT_EXIST", t[t.THREAD_ALREADY_EXIST = 1301] = "THREAD_ALREADY_EXIST", t[t.MODIFY_MESSAGE_NOT_EXIST = 1302] = "MODIFY_MESSAGE_NOT_EXIST", t[t.MODIFY_MESSAGE_FORMAT_ERROR = 1303] = "MODIFY_MESSAGE_FORMAT_ERROR", t[t.MODIFY_MESSAGE_FAILED = 1304] = "MODIFY_MESSAGE_FAILED", t[t.CONVERSATION_NOT_EXIST = 1400] = "CONVERSATION_NOT_EXIST";
        }(r || (r = {}));
      }, 4370: function(p, R, e) {
        e.d(R, { iw: function() {
          return d;
        }, hj: function() {
          return l;
        }, LR: function() {
          return v;
        }, cT: function() {
          return S;
        }, P6: function() {
          return x;
        } }), e(9601), e(1539), e(8674), e(3710), e(6699), e(7042), e(2772), e(9653), e(9714), e(6992), e(8783), e(3948), e(285), e(1637), e(8309), e(4986), e(2023);
        var r = e(5531), t = function() {
          return t = Object.assign || function(O) {
            for (var C, E = 1, P = arguments.length; E < P; E++)
              for (var G in C = arguments[E])
                Object.prototype.hasOwnProperty.call(C, G) && (O[G] = C[G]);
            return O;
          }, t.apply(this, arguments);
        }, a = e(1595), s = e(2071), i = e(7360), o = function() {
          return o = Object.assign || function(O) {
            for (var C, E = 1, P = arguments.length; E < P; E++)
              for (var G in C = arguments[E])
                Object.prototype.hasOwnProperty.call(C, G) && (O[G] = C[G]);
            return O;
          }, o.apply(this, arguments);
        }, n = function() {
        };
        function l(O, C) {
          var E, P = this;
          return b().platform === d.WEB ? new Promise(function(G, Z) {
            var F = O.dataType || "text", Y = O.success || n, K = O.error || n, V = new XMLHttpRequest();
            V.ontimeout = function() {
              Z({ type: r.E.REQUEST_TIMEOUT, message: "Request Timeout", errorType: "timeout_error", xhr: V });
            }, V.onerror = function() {
              Z({ type: r.E.REQUEST_UNKNOWN, message: "Request Unknow Error", errorType: "onerror", xhr: V });
            }, V.onabort = function() {
              Z({ type: r.E.REQUEST_ABORT, message: "Request Abort", errorType: "onabort", xhr: V });
            }, V.onreadystatechange = function() {
              if (V.readyState === 4) {
                var Ce = (/* @__PURE__ */ new Date()).getTime() - E, Re = V.status || 0, Ie = { elapse: Ce, httpCode: Re };
                if (Re === 200) {
                  x.ajaxUnconventionalErrorTimes = 0;
                  try {
                    switch (F) {
                      case "text":
                        return Y(V.responseText), void G(V.responseText);
                      case "json":
                        var Oe = JSON.parse(V.responseText);
                        return Oe.extraInfo = Ie, Y(Oe), void G(Oe);
                      case "xml":
                        return V.responseXML && V.responseXML.documentElement ? (Y(V.responseXML.documentElement), void G(V.responseXML.documentElement)) : (K({ type: r.E.WEBIM_CONNCTION_AJAX_ERROR, data: V.responseText, message: "XHR.responseXML is null or XHR.responseXML.documentElement is null" }), void Z({ type: r.E.WEBIM_CONNCTION_AJAX_ERROR, data: V.responseText, message: "XHR.responseXML is null or XHR.responseXML.documentElement is null" }));
                      default:
                        K({ type: r.E.WEBIM_CONNCTION_AJAX_ERROR, data: V.responseText, message: "Invalid dataType" }), Z({ type: r.E.WEBIM_CONNCTION_AJAX_ERROR, data: V.responseText, message: "Invalid dataType" });
                    }
                    return G(V.response || V.responseText), void Y(V.response || V.responseText, V);
                  } catch (fe) {
                    Z(fe);
                  }
                  return;
                }
                [400, 401, 403, 404, 429, 500, 503].includes(Re) || (i.kg.debug("rest api request fail status:", Re), x.ajaxUnconventionalErrorTimes++), function(fe, ce, Ue, Ke) {
                  var $e, Ve, Be, Ze, Qe, Pe, Le, xe, ve, we, ke, Ne, j, B, T, W, _, A, L, w, k = fe.response;
                  k && typeof k == "string" && (k = JSON.parse(k));
                  var y = fe.status, I = { elapse: Ke, httpCode: y, errDesc: k == null ? void 0 : k.error_description };
                  if (y === 400) {
                    if (k.error_code === 40002)
                      return void ce({ type: r.E.THREAD_ALREADY_EXIST, message: k == null ? void 0 : k.error_description, extraInfo: I });
                    if (k.error_code === 40009)
                      return void ce({ type: r.E.OPERATION_UNSUPPORTED, message: k == null ? void 0 : k.error_description, extraInfo: I });
                    if (k.error_code === 60005)
                      return void ce({ type: r.E.GROUP_MEMBER_ATTRIBUTES_SET_FAILED, message: (k == null ? void 0 : k.desc) || (k == null ? void 0 : k.error_description), extraInfo: I });
                    if (k.error_code === 60010)
                      return void (k != null && k.error_description.includes("exceeds chatgroup user metadata single value limit") ? ce({ type: r.E.MAX_LIMIT, message: (k == null ? void 0 : k.desc) || k.error_description, extraInfo: I }) : ce({ type: r.E.NO_PERMISSION, message: (k == null ? void 0 : k.desc) || k.error_description, extraInfo: I }));
                    if (k.error_code === 60011)
                      return void ce({ type: r.E.CHATROOM_NOT_JOINED, message: k == null ? void 0 : k.desc, extraInfo: I });
                    if (k.error_code === 60006 || k.error_code === 60007 || k.error_code === 60009 || k.error_code === 60012)
                      return void ce({ type: r.E.MAX_LIMIT, message: (k == null ? void 0 : k.desc) || (k == null ? void 0 : k.error_description), extraInfo: I });
                    if (!(($e = k.error_description) === null || $e === void 0) && $e.includes("are not members of this group"))
                      return !((Ve = fe.responseURL) === null || Ve === void 0) && Ve.includes("chatgroups") ? ce({ type: r.E.GROUP_NOT_JOINED, data: fe.response || fe.responseText, message: k.error_description, extraInfo: I }) : ce({ type: r.E.CHATROOM_NOT_JOINED, data: fe.response || fe.responseText, message: k.error_description, extraInfo: I }), void Ue({ type: r.E.WEBIM_CONNCTION_AJAX_ERROR, message: k == null ? void 0 : k.error_description, data: fe.responseText, extraInfo: I });
                    if ((k == null ? void 0 : k.result) === "the app not open presence")
                      return void ce({ type: r.E.SERVICE_NOT_ENABLED, message: k == null ? void 0 : k.result, extraInfo: I });
                    switch (k == null ? void 0 : k.error_description) {
                      case "the user is already operation this message":
                        ce({ type: r.E.REACTION_ALREADY_ADDED, message: k == null ? void 0 : k.error_description, extraInfo: I });
                        break;
                      case "The quantity has exceeded the limit!":
                        ce({ type: r.E.MAX_LIMIT, message: k == null ? void 0 : k.error_description, extraInfo: I });
                        break;
                      case "The user not in this group!":
                        ce({ type: r.E.GROUP_NOT_JOINED, message: k == null ? void 0 : k.error_description, extraInfo: I });
                        break;
                      case "the user operation is illegal!":
                        ce({ type: r.E.REACTION_OPERATION_IS_ILLEGAL, message: k == null ? void 0 : k.error_description, extraInfo: I });
                        break;
                      case "this appKey is not open reaction service!":
                      case "this appKey not open message roaming":
                        ce({ type: r.E.SERVICE_NOT_ENABLED, message: k == null ? void 0 : k.error_description, extraInfo: I });
                        break;
                      case "this message is creating reaction, please try again.":
                        ce({ type: r.E.REACTION_CREATING, message: k == null ? void 0 : k.error_description, extraInfo: I });
                        break;
                      case "groupId can not be null!":
                        ce({ type: r.E.GROUP_NOT_EXIST, message: k == null ? void 0 : k.error_description, extraInfo: I });
                        break;
                      case "The input text is too long.":
                        ce({ type: r.E.TRANSLATION_TEXT_TOO_LONG, message: k == null ? void 0 : k.error_description, extraInfo: I });
                        break;
                      case "The target language is not valid.":
                        ce({ type: r.E.TRANSLATION_NOT_VALID, message: k == null ? void 0 : k.error_description, extraInfo: I });
                        break;
                      case "report failed, get message by id failed":
                        ce({ type: r.E.MESSAGE_NOT_FOUND, message: k == null ? void 0 : k.error_description, extraInfo: I });
                        break;
                      case "ext is too big ":
                        ce({ type: r.E.PRESENCE_PARAM_EXCEED, message: k == null ? void 0 : k.error_description, extraInfo: I });
                        break;
                      case "Request body not readable.Please check content type is correct!":
                        ce({ type: r.E.REQUEST_PARAMETER_ERROR, message: k == null ? void 0 : k.error_description, extraInfo: I });
                        break;
                      default:
                        ce({ type: r.E.WEBIM_CONNCTION_AJAX_ERROR, message: k == null ? void 0 : k.error_description, data: fe.responseText, extraInfo: I }), Ue({ type: r.E.WEBIM_CONNCTION_AJAX_ERROR, message: k == null ? void 0 : k.error_description, data: fe.responseText, extraInfo: I });
                    }
                  } else if (y === 401)
                    k.error_code === 40001 || k.error_code === 60001 || k.error_description === "Unable to authenticate (OAuth)" ? ce({ type: r.E.NO_PERMISSION, message: k == null ? void 0 : k.error_description, extraInfo: I }) : (Ue({ type: r.E.WEBIM_CONNCTION_AJAX_ERROR, data: fe.responseText, message: fe.responseText, extraInfo: I }), ce({ type: r.E.WEBIM_CONNCTION_AJAX_ERROR, data: fe.responseText, message: fe.responseText, extraInfo: I }));
                  else if (y === 403)
                    k.error_code === 4e4 || k.error_code === 60004 || k.error_code === 15002 ? ce({ type: r.E.SERVICE_NOT_ENABLED, message: k == null ? void 0 : k.error_description, extraInfo: I }) : k.error_code === 40003 || k.error_code === 40004 ? ce({ type: r.E.THREAD_ALREADY_EXIST, message: k == null ? void 0 : k.error_description, extraInfo: I }) : k.error_code === 40005 || k.error_code === 40007 || k.error_code === 91002 ? ce({ type: r.E.MAX_LIMIT, message: k == null ? void 0 : k.error_description, extraInfo: I }) : k.error_code === 60002 && ce({ type: r.E.PERMISSION_DENIED, message: k == null ? void 0 : k.error_description, extraInfo: I }), k.error_description === "group member list is full!" ? !((Be = fe.responseURL) === null || Be === void 0) && Be.includes("chatgroups") ? ce({ type: r.E.GROUP_MEMBERS_FULL, data: fe.response || fe.responseText, message: k.error_description, extraInfo: I }) : ce({ type: r.E.CHATROOM_MEMBERS_FULL, data: fe.response || fe.responseText, message: k.error_description, extraInfo: I }) : !((Ze = k.error_description) === null || Ze === void 0) && Ze.includes(k.error_description.includes("already in group")) ? !((Qe = fe.responseURL) === null || Qe === void 0) && Qe.includes("chatgroups") && ce({ type: r.E.GROUP_ALREADY_JOINED, data: fe.response || fe.responseText, message: k.error_description, extraInfo: I }) : !((Pe = k.error_description) === null || Pe === void 0) && Pe.includes("are not members of this group") ? !((Le = fe.responseURL) === null || Le === void 0) && Le.includes("chatgroups") ? ce({ type: r.E.GROUP_NOT_JOINED, data: fe.response || fe.responseText, message: k.error_description, extraInfo: I }) : ce({ type: r.E.CHATROOM_NOT_JOINED, data: fe.response || fe.responseText, message: k.error_description, extraInfo: I }) : !((xe = k.error_description) === null || xe === void 0) && xe.includes("service not open!") || !((ve = k.error_description) === null || ve === void 0) && ve.includes("message report not open") || !((we = k.error_description) === null || we === void 0) && we.includes("messageroaming function not open") ? ce({ type: r.E.SERVICE_NOT_ENABLED, data: fe.response || fe.responseText, message: k.error_description, extraInfo: I }) : !((ke = k.error_description) === null || ke === void 0) && ke.includes("members size is greater than max user size !") ? ce({ type: r.E.GROUP_MEMBERS_LIMIT, data: fe.response || fe.responseText, message: k.error_description, extraInfo: I }) : !((Ne = k.error_description) === null || Ne === void 0) && Ne.includes("can not operate this group, reason: group is disabled") ? ce({ type: r.E.GROUP_IS_DISABLED, data: fe.response || fe.responseText, message: k.error_description, extraInfo: I }) : ce({ type: r.E.PERMISSION_DENIED, data: fe.response || fe.responseText, message: "permission denied", extraInfo: t(t({}, I), { errDesc: "permission denied" }) }), Ue({ type: r.E.WEBIM_CONNCTION_AJAX_ERROR, data: fe.responseText, message: fe.responseText, extraInfo: I });
                  else if (y === 404)
                    k.error_code === 40011 ? ce({ type: r.E.THREAD_NOT_EXIST, message: k == null ? void 0 : k.error_description, extraInfo: I }) : k.error_code === 40012 ? ce({ type: r.E.NO_PERMISSION, message: k == null ? void 0 : k.error_description, extraInfo: I }) : k.error_code === 60003 || k.error_code === 20004 ? ce({ type: r.E.GROUP_NOT_JOINED, message: k == null ? void 0 : k.error_description, extraInfo: I }) : k.error_code === 91001 && ce({ type: r.E.CONVERSATION_NOT_EXIST, message: k == null ? void 0 : k.error_description, extraInfo: I }), !((j = k.error_description) === null || j === void 0) && j.includes("do not find this group") || !((B = k.error_description) === null || B === void 0) && B.includes("does not exist") ? !((T = fe.responseURL) === null || T === void 0) && T.includes("chatgroups") ? ce({ type: r.E.GROUP_NOT_EXIST, data: fe.response || fe.responseText, message: "The chat room dose not exist.", extraInfo: t(t({}, I), { errDesc: "The chat room dose not exist." }) }) : ce({ type: r.E.CHATROOM_NOT_EXIST, data: fe.response || fe.responseText, message: "The chat room dose not exist.", extraInfo: t(t({}, I), { errDesc: "The chat room dose not exist." }) }) : !((W = k.error_description) === null || W === void 0) && W.includes("username") && (!((_ = k.error_description) === null || _ === void 0) && _.includes("doesn't exist!'")) || !((A = k.error_description) === null || A === void 0) && A.includes("user not found") ? ce({ type: r.E.USER_NOT_FOUND, data: fe.response || fe.responseText, message: k.error_description, extraInfo: I }) : ce({ type: r.E.WEBIM_CONNCTION_AJAX_ERROR, data: fe.response || fe.responseText, message: fe.responseText, extraInfo: I }), Ue({ type: r.E.WEBIM_CONNCTION_AJAX_ERROR, data: fe.response || fe.responseText, message: fe.responseText, extraInfo: I });
                  else if (y === 406)
                    k.error_code === 90004 && ce({ type: r.E.OPERATION_NOT_ALLOWED, message: k == null ? void 0 : k.error_description, extraInfo: I });
                  else if (y === 429 || y === 503) {
                    if (!((L = k.error_description) === null || L === void 0) && L.includes("The request has reached the maximum limit"))
                      return void ce({ type: r.E.MAX_LIMIT, message: fe.responseText, extraInfo: I });
                    ce({ type: r.E.SERVER_BUSY, data: fe.response || fe.responseText, message: "Server is busy.", extraInfo: t(t({}, I), { errDesc: "Server is busy." }) }), Ue({ type: r.E.WEBIM_CONNCTION_AJAX_ERROR, data: fe.responseText, message: "Server is busy.", extraInfo: t(t({}, I), { errDesc: "Server is busy." }) });
                  } else if (y === 500) {
                    if (k.error_code === 40006 || k.error_code === 40008 || k.error_code === 40010)
                      return void ce({ type: r.E.SERVER_UNKNOWN_ERROR, message: k == null ? void 0 : k.error_description, extraInfo: I });
                    if (k.error_code === 90005 || k.error_code === 99999)
                      return void ce({ type: r.E.REQUEST_UNKNOWN, message: k == null ? void 0 : k.error_description, extraInfo: I });
                    if (!((w = k.error_description) === null || w === void 0) && w.includes("translte failed!"))
                      return void ce({ type: r.E.TRANSLATION_FAILED, message: fe.responseText, extraInfo: I });
                    ce({ type: r.E.WEBIM_CONNCTION_AJAX_ERROR, data: fe.responseText, message: "", extraInfo: I }), Ue({ type: r.E.WEBIM_CONNCTION_AJAX_ERROR, data: fe.responseText, message: "", extraInfo: I });
                  } else
                    ce({ type: r.E.WEBIM_CONNCTION_AJAX_ERROR, data: fe.responseText, message: fe.responseText, extraInfo: t(t({}, I), { errDesc: "ajax error" }) }), Ue({ type: r.E.WEBIM_CONNCTION_AJAX_ERROR, data: fe.responseText, message: fe.responseText, extraInfo: t(t({}, I), { errDesc: "ajax error" }) });
                }(V, Z, K, Ce);
              }
              V.readyState === 0 && (K({ type: r.E.WEBIM_CONNCTION_AJAX_ERROR, data: V.responseText, message: "Request not initialized" }), Z({ type: r.E.WEBIM_CONNCTION_AJAX_ERROR, data: V.responseText, message: "Request not initialized" }));
            }, O.responseType && V.responseType && (V.responseType = O.responseType), O.mimeType && V.overrideMimeType(O.mimeType);
            var ne = O.type || "POST", ae = O.data || null, se = "";
            if (ne.toLowerCase() === "get" && ae) {
              for (var ue in ae)
                ae.hasOwnProperty(ue) && (se += ue + "=" + ae[ue] + "&");
              se = se && se.slice(0, -1), O.url += (O.url.indexOf("?") > 0 ? "&" : "?") + (se && se + "&") + "_v=" + (/* @__PURE__ */ new Date()).getTime(), ae = null, se = "";
            }
            E = (/* @__PURE__ */ new Date()).getTime(), V.open(ne, O.url);
            var me = O.headers || {};
            for (var ge in me["Content-Type"] || (me["Content-Type"] = "application/json"), me)
              me.hasOwnProperty(ge) && V.setRequestHeader(ge, me[ge]);
            V.send(ae);
          }).then(function(G) {
            return P.dataReport && C && C !== a.fI.SDK_INTERNAL && P.dataReport.geOperateFun({ operationName: C })({ isEndApi: !0, data: o({ isSuccess: 1, requestUrl: O.url, requestName: C, requestMethod: O.type }, N(G.extraInfo)) }), C !== a.fI.SDK_INTERNAL && delete G.extraInfo, u(G) === "Object" ? o(o({}, G), { type: r.E.REQUEST_SUCCESS }) : { data: G, type: r.E.REQUEST_SUCCESS };
          }).catch(function(G) {
            throw P.dataReport && C && C !== a.fI.SDK_INTERNAL && P.dataReport.geOperateFun({ operationName: C })({ isEndApi: !0, data: o({ isSuccess: 0, requestUrl: O.url, requestName: C, requestMethod: O.type }, N(G.extraInfo)) }), C !== a.fI.SDK_INTERNAL && delete G.extraInfo, G;
          }) : m.call(this, O, C);
        }
        function u(O) {
          return Object.prototype.toString.call(O).slice(8, -1);
        }
        function m(O, C) {
          var E = this;
          return new Promise(function(P, G) {
            var Z = O.success || n, F = O.error || n, Y = O.type || "POST", K = O.data || null, V = "", ne = (/* @__PURE__ */ new Date()).getTime(), ae = x.getEnvInfo();
            if (Y.toLowerCase() === "get" && K) {
              for (var se in K)
                K.hasOwnProperty(se) && (V += se + "=" + K[se] + "&");
              V = V && V.slice(0, -1), O.url += (O.url.indexOf("?") > 0 ? "&" : "?") + (V && V + "&") + "_v=" + (/* @__PURE__ */ new Date()).getTime(), K = null, V = "";
            }
            var ue = { url: O.url, data: O.data, method: Y, headers: {}, success: function(me) {
              var ge, Ce, Re, Ie, Oe, fe = { elapse: (/* @__PURE__ */ new Date()).getTime() - ne, httpCode: Number(((ge = me.statusCode) === null || ge === void 0 ? void 0 : ge.toString()) || ((Ce = me.status) === null || Ce === void 0 ? void 0 : Ce.toString())), errDesc: ((Re = me == null ? void 0 : me.data) === null || Re === void 0 ? void 0 : Re.error_description) || "" };
              if (((Ie = me.statusCode) === null || Ie === void 0 ? void 0 : Ie.toString()) === "200" || ((Oe = me.status) === null || Oe === void 0 ? void 0 : Oe.toString()) === "200") {
                me.data.extraInfo = fe;
                var ce = me.data;
                Z(ce), P(ce);
              } else
                me.extraInfo = fe, F(ce = me), G(ce);
            }, complete: function() {
            }, fail: function(me) {
              var ge = { elapse: (/* @__PURE__ */ new Date()).getTime() - ne, httpCode: s.Tp, errDesc: "request:fail" };
              me.extraInfo = ge, me.data = { error: "request:fail", error_description: "request:fail" }, F(me), G(me);
            } };
            if (ae.platform === "zfb" || ae.platform === "dd" ? ue.headers = O.headers : ue.header = O.headers, ae.platform === "dd")
              return dd.httpRequest(ue);
            ae.global.request(ue);
          }).then(function(P) {
            return E.dataReport && C && C !== a.fI.SDK_INTERNAL && E.dataReport.geOperateFun({ operationName: C })({ isEndApi: !0, data: o({ isSuccess: 1, requestUrl: O.url, requestName: C, requestMethod: O.type }, N(P.extraInfo)) }), C !== a.fI.SDK_INTERNAL && delete P.extraInfo, u(P) === "Object" ? o(o({}, P), { type: r.E.REQUEST_SUCCESS }) : { data: P, type: r.E.REQUEST_SUCCESS };
          }).catch(function(P) {
            throw E.dataReport && C && C !== a.fI.SDK_INTERNAL && E.dataReport.geOperateFun({ operationName: C })({ isEndApi: !0, data: o({ isSuccess: 0, requestUrl: O.url, requestName: C, requestMethod: O.type }, N(P.extraInfo)) }), C !== a.fI.SDK_INTERNAL && delete P.extraInfo, P;
          });
        }
        var g, h, d, f = (g = function(O, C) {
          var E = b();
          if (E.platform !== d.WEB) {
            var P = E.global, G = function(Z) {
              Z.isConnected ? O() : C();
            };
            P.offNetworkStatusChange && P.offNetworkStatusChange(G), P.onNetworkStatusChange && P.onNetworkStatusChange(G);
          } else
            typeof addEventListener < "u" && (window.addEventListener("online", O), window.addEventListener("offline", C));
        }, function() {
          for (var O = [], C = 0; C < arguments.length; C++)
            O[C] = arguments[C];
          if (!g)
            return h;
          h = g.apply(void 0, O), g = null;
        });
        function b() {
          return typeof swan < "u" && c(swan) ? { platform: d.BAIDU, global: swan } : typeof tt < "u" && c(tt) ? { platform: d.TT, global: tt } : typeof dd < "u" && c(dd) ? { platform: d.DD, global: dd } : typeof my < "u" && c(my) ? { platform: d.ZFB, global: my } : typeof wx < "u" && c(wx) ? { platform: d.WX, global: wx } : typeof uni < "u" && c(uni) ? { platform: d.UNI, global: uni } : typeof window < "u" && window.WebSocket ? { platform: d.WEB, global: window } : { platform: d.NODE, global: e.g || {} };
        }
        function c(O) {
          for (var C = ["canIUse", "getSystemInfo"], E = 0, P = C.length; E < P; E++)
            if (!O[C[E]])
              return !1;
          return !0;
        }
        function S(O, C) {
          var E, P, G = this, Z = (/* @__PURE__ */ new Date()).getTime(), F = O.accessToken;
          if (F) {
            var Y = O.appKey, K = [], V = "", ne = "";
            if (Y && (V = (K = Y.split("#"))[0], ne = K[1]), V || ne) {
              var ae = O.apiUrl, se = O.uploadUrl || ae + "/" + V + "/" + ne + "/chatfiles";
              if (((P = (E = O == null ? void 0 : O.file) === null || E === void 0 ? void 0 : E.data) === null || P === void 0 ? void 0 : P.size) <= 0)
                O.onFileUploadError && O.onFileUploadError({ type: r.E.WEBIM_UPLOADFILE_ERROR, message: "fileSize must be greater than 0" });
              else {
                var ue = new XMLHttpRequest();
                ue.upload && ue.upload.addEventListener("progress", O.onFileUploadProgress || n, !1), ue.addEventListener("abort", O.onFileUploadCanceled || n, !1), ue.addEventListener("error", function(Ce) {
                  ge({ type: r.E.WEBIM_UPLOADFILE_ERROR, data: ue });
                }, !1), ue.addEventListener("load", function(Ce) {
                  try {
                    var Re = JSON.parse(ue.responseText);
                    if (ue.status === 400)
                      return ge({ type: r.E.WEBIM_UPLOADFILE_ERROR, data: Re }), !1;
                    try {
                      (function(Ie) {
                        var Oe = (/* @__PURE__ */ new Date()).getTime() - Z;
                        G.dataReport && C && [a.fI.UPLOAD_MSG_ATTACH, a.fI.UPLOAD_CHATROOM_FILE, a.fI.UPLOAD_GROUP_FILE].includes(C) && G.dataReport.geOperateFun({ operationName: C })({ isEndApi: !0, data: { isSuccess: Ie != null && Ie.error ? 0 : 1, requestMethod: "POST", requestName: C, requestElapse: Oe, requestUrl: se, code: ue.status, codeDesc: (Ie == null ? void 0 : Ie.error_description) || "" } }), O.onFileUploadComplete && O.onFileUploadComplete(Ie);
                      })(Re);
                    } catch (Ie) {
                      ge({ type: r.E.WEBIM_CONNCTION_CALLBACK_INNER_ERROR, data: Ie });
                    }
                  } catch {
                    ge({ type: r.E.WEBIM_UPLOADFILE_ERROR, data: ue.responseText });
                  }
                }, !1), ue.open("POST", se), ue.setRequestHeader("restrict-access", "true"), ue.setRequestHeader("Accept", "*/*"), ue.setRequestHeader("Authorization", "Bearer " + F);
                var me = new FormData();
                me.append("file", O.file.data), O.thumbnailWidth && me.append("thumbnail-width", O.thumbnailWidth + ""), O.thumbnailHeight && me.append("thumbnail-height", O.thumbnailHeight + ""), ue.send(me);
              }
            } else
              O.onFileUploadError && O.onFileUploadError({ type: r.E.WEBIM_UPLOADFILE_ERROR, message: "AppKey illegal" });
          } else
            O.onFileUploadError && O.onFileUploadError({ type: r.E.WEBIM_UPLOADFILE_NO_LOGIN, message: "AccessToken cannot be empty" });
          function ge(Ce) {
            var Re = (/* @__PURE__ */ new Date()).getTime() - Z;
            G.dataReport && C && [a.fI.UPLOAD_MSG_ATTACH, a.fI.UPLOAD_CHATROOM_FILE, a.fI.UPLOAD_GROUP_FILE].includes(C) && G.dataReport.geOperateFun({ operationName: C })({ isEndApi: !0, data: { isSuccess: 0, requestMethod: "POST", requestName: C, requestElapse: Re, requestUrl: se, code: (ue == null ? void 0 : ue.status) || 0, codeDesc: "upload file error" } }), O.onFileUploadError && O.onFileUploadError(Ce);
          }
        }
        function v(O, C) {
          O.onFileDownloadComplete = O.onFileDownloadComplete || n, O.onFileDownloadError = O.onFileDownloadError || n;
          var E = (/* @__PURE__ */ new Date()).getTime(), P = new XMLHttpRequest(), G = this;
          P.addEventListener("load", function(ae) {
            var se = (/* @__PURE__ */ new Date()).getTime() - E;
            G.dataReport && C && C === a.fI.DOWN_GROUP_FILE && G.dataReport.geOperateFun({ operationName: C })({ isEndApi: !0, data: { isSuccess: P.status === 200 ? 1 : 0, requestMethod: "POST", requestName: C, requestElapse: se, requestUrl: O == null ? void 0 : O.url, code: P.status, codeDesc: P.status === 200 ? "" : "download file error" } }), O.onFileDownloadComplete && O.onFileDownloadComplete(P.response);
          }, !1), P.addEventListener("error", function(ae) {
            var se = (/* @__PURE__ */ new Date()).getTime() - E;
            G.dataReport && C && C === a.fI.DOWN_GROUP_FILE && G.dataReport.geOperateFun({ operationName: C })({ isEndApi: !0, data: { isSuccess: 0, requestMethod: "POST", requestName: C, requestElapse: se, requestUrl: O == null ? void 0 : O.url, code: (P == null ? void 0 : P.status) || 0, codeDesc: "download file error" } }), O.onFileDownloadError && O.onFileDownloadError({ type: r.E.WEBIM_DOWNLOADFILE_ERROR, id: O.id, xhr: P });
          }, !1);
          var Z = O.method || "GET", F = O.responseType || "blob", Y = O.mimeType || "text/plain; charset=x-user-defined";
          P.open(Z, O.url), typeof Blob < "u" ? P.responseType = F : P.overrideMimeType(Y);
          var K = { "X-Requested-With": "XMLHttpRequest", Accept: "application/octet-stream", "share-secret": O.secret, Authorization: "Bearer " + this.context.accessToken }, V = O.headers || {};
          for (var ne in V)
            K[ne] = V[ne];
          for (var ne in K)
            K[ne] && P.setRequestHeader(ne, K[ne]);
          P.send(null);
        }
        function N(O) {
          O === void 0 && (O = {});
          var C = O.elapse, E = C === void 0 ? 0 : C, P = O.httpCode, G = P === void 0 ? 0 : P, Z = O.errDesc;
          return { requestElapse: E, code: G, codeDesc: Z === void 0 ? "" : Z };
        }
        (function(O) {
          O.WEB = "web", O.WX = "wx", O.ZFB = "zfb", O.DD = "dd", O.TT = "tt", O.BAIDU = "baidu", O.QUICK_APP = "quick_app", O.UNI = "uni", O.NODE = "node";
        })(d || (d = {}));
        var x = { autoIncrement: 0, ajaxUnconventionalErrorTimes: 0, ajax: l, getUniqueId: function() {
          this.autoIncrement ? this.autoIncrement++ : this.autoIncrement = 1;
          var O = /* @__PURE__ */ new Date(), C = new Date(2010, 1, 1);
          return (O.getTime() - C.getTime() + this.autoIncrement).toString();
        }, getFileUrl: function(O) {
          var C = { url: "", filename: "", filetype: "", data: {} }, E = typeof O == "string" ? document.getElementById(O) : O;
          if (window.URL.createObjectURL) {
            if (!E.files)
              throw Error("this is not HTMLInputElement");
            var P = E.files;
            if (P.length > 0) {
              var G = P.item(0);
              C.data = G, C.url = window.URL.createObjectURL(G), C.filename = (G == null ? void 0 : G.name) || "";
            }
          } else {
            if (typeof O != "string")
              throw Error("in IE fileInputId must be string");
            G = document.getElementById(O).value, C.url = G;
            var Z = G.lastIndexOf("/"), F = G.lastIndexOf("\\"), Y = Math.max(Z, F);
            C.filename = Y < 0 ? G : G.substring(Y + 1);
          }
          var K = C.filename.lastIndexOf(".");
          return K !== -1 && (C.filetype = C.filename.substring(K + 1).toLowerCase()), C;
        }, uploadFile: S, flow: function(O) {
          for (var C = O.length, E = C; E--; )
            if (typeof O[E] != "function")
              throw new TypeError("Expected a function");
          return function() {
            for (var P = [], G = 0; G < arguments.length; G++)
              P[G] = arguments[G];
            for (var Z = 0, F = C ? O[Z].apply(this, P) : P[0]; ++Z < C; )
              F = O[Z].call(this, F);
            return F;
          };
        }, listenNetwork: f, getEnvInfo: b, wxRequest: m, parseDownloadResponse: function(O) {
          if (!window || !window.URL)
            throw Error("parseDownloadResponse can be used in broswer only");
          return O && O.type && O.type === "application/json" || 0 > Object.prototype.toString.call(O).indexOf("Blob") ? this.url + "?token=" : window.URL.createObjectURL(O);
        }, download: v, parseNotify: function(O) {
          for (var C = "", E = 0; E < O.length; E++)
            C += "%" + O[E].toString(16);
          return JSON.parse(decodeURIComponent(C));
        }, getExtraData: N, Uint8ArrayToString: function(O) {
          for (var C = "", E = 0; E < O.length; E++)
            C += String.fromCharCode(O[E]);
          return C;
        } };
      }, 9662: function(p, R, e) {
        var r = e(614), t = e(6330), a = TypeError;
        p.exports = function(s) {
          if (r(s))
            return s;
          throw a(t(s) + " is not a function");
        };
      }, 9483: function(p, R, e) {
        var r = e(4411), t = e(6330), a = TypeError;
        p.exports = function(s) {
          if (r(s))
            return s;
          throw a(t(s) + " is not a constructor");
        };
      }, 6077: function(p, R, e) {
        var r = e(614), t = String, a = TypeError;
        p.exports = function(s) {
          if (typeof s == "object" || r(s))
            return s;
          throw a("Can't set " + t(s) + " as a prototype");
        };
      }, 1223: function(p, R, e) {
        var r = e(5112), t = e(30), a = e(3070).f, s = r("unscopables"), i = Array.prototype;
        i[s] == null && a(i, s, { configurable: !0, value: t(null) }), p.exports = function(o) {
          i[s][o] = !0;
        };
      }, 5787: function(p, R, e) {
        var r = e(7976), t = TypeError;
        p.exports = function(a, s) {
          if (r(s, a))
            return a;
          throw t("Incorrect invocation");
        };
      }, 9670: function(p, R, e) {
        var r = e(111), t = String, a = TypeError;
        p.exports = function(s) {
          if (r(s))
            return s;
          throw a(t(s) + " is not an object");
        };
      }, 3013: function(p) {
        p.exports = typeof ArrayBuffer < "u" && typeof DataView < "u";
      }, 7556: function(p, R, e) {
        var r = e(7293);
        p.exports = r(function() {
          if (typeof ArrayBuffer == "function") {
            var t = new ArrayBuffer(8);
            Object.isExtensible(t) && Object.defineProperty(t, "a", { value: 8 });
          }
        });
      }, 260: function(p, R, e) {
        var r, t, a, s = e(3013), i = e(9781), o = e(7854), n = e(614), l = e(111), u = e(2597), m = e(648), g = e(6330), h = e(8880), d = e(8052), f = e(7045), b = e(7976), c = e(9518), S = e(7674), v = e(5112), N = e(9711), x = e(9909), O = x.enforce, C = x.get, E = o.Int8Array, P = E && E.prototype, G = o.Uint8ClampedArray, Z = G && G.prototype, F = E && c(E), Y = P && c(P), K = Object.prototype, V = o.TypeError, ne = v("toStringTag"), ae = N("TYPED_ARRAY_TAG"), se = s && !!S && m(o.opera) !== "Opera", ue = !1, me = { Int8Array: 1, Uint8Array: 1, Uint8ClampedArray: 1, Int16Array: 2, Uint16Array: 2, Int32Array: 4, Uint32Array: 4, Float32Array: 4, Float64Array: 8 }, ge = { BigInt64Array: 8, BigUint64Array: 8 }, Ce = function(Ie) {
          var Oe = c(Ie);
          if (l(Oe)) {
            var fe = C(Oe);
            return fe && u(fe, "TypedArrayConstructor") ? fe.TypedArrayConstructor : Ce(Oe);
          }
        }, Re = function(Ie) {
          if (!l(Ie))
            return !1;
          var Oe = m(Ie);
          return u(me, Oe) || u(ge, Oe);
        };
        for (r in me)
          (a = (t = o[r]) && t.prototype) ? O(a).TypedArrayConstructor = t : se = !1;
        for (r in ge)
          (a = (t = o[r]) && t.prototype) && (O(a).TypedArrayConstructor = t);
        if ((!se || !n(F) || F === Function.prototype) && (F = function() {
          throw V("Incorrect invocation");
        }, se))
          for (r in me)
            o[r] && S(o[r], F);
        if ((!se || !Y || Y === K) && (Y = F.prototype, se))
          for (r in me)
            o[r] && S(o[r].prototype, Y);
        if (se && c(Z) !== Y && S(Z, Y), i && !u(Y, ne))
          for (r in ue = !0, f(Y, ne, { configurable: !0, get: function() {
            return l(this) ? this[ae] : void 0;
          } }), me)
            o[r] && h(o[r], ae, r);
        p.exports = { NATIVE_ARRAY_BUFFER_VIEWS: se, TYPED_ARRAY_TAG: ue && ae, aTypedArray: function(Ie) {
          if (Re(Ie))
            return Ie;
          throw V("Target is not a typed array");
        }, aTypedArrayConstructor: function(Ie) {
          if (n(Ie) && (!S || b(F, Ie)))
            return Ie;
          throw V(g(Ie) + " is not a typed array constructor");
        }, exportTypedArrayMethod: function(Ie, Oe, fe, ce) {
          if (i) {
            if (fe)
              for (var Ue in me) {
                var Ke = o[Ue];
                if (Ke && u(Ke.prototype, Ie))
                  try {
                    delete Ke.prototype[Ie];
                  } catch {
                    try {
                      Ke.prototype[Ie] = Oe;
                    } catch {
                    }
                  }
              }
            Y[Ie] && !fe || d(Y, Ie, fe ? Oe : se && P[Ie] || Oe, ce);
          }
        }, exportTypedArrayStaticMethod: function(Ie, Oe, fe) {
          var ce, Ue;
          if (i) {
            if (S) {
              if (fe) {
                for (ce in me)
                  if ((Ue = o[ce]) && u(Ue, Ie))
                    try {
                      delete Ue[Ie];
                    } catch {
                    }
              }
              if (F[Ie] && !fe)
                return;
              try {
                return d(F, Ie, fe ? Oe : se && F[Ie] || Oe);
              } catch {
              }
            }
            for (ce in me)
              !(Ue = o[ce]) || Ue[Ie] && !fe || d(Ue, Ie, Oe);
          }
        }, getTypedArrayConstructor: Ce, isView: function(Ie) {
          if (!l(Ie))
            return !1;
          var Oe = m(Ie);
          return Oe === "DataView" || u(me, Oe) || u(ge, Oe);
        }, isTypedArray: Re, TypedArray: F, TypedArrayPrototype: Y };
      }, 3331: function(p, R, e) {
        var r = e(7854), t = e(1702), a = e(9781), s = e(3013), i = e(6530), o = e(8880), n = e(7045), l = e(9190), u = e(7293), m = e(5787), g = e(9303), h = e(7466), d = e(7067), f = e(1179), b = e(9518), c = e(7674), S = e(8006).f, v = e(1285), N = e(1589), x = e(8003), O = e(9909), C = i.PROPER, E = i.CONFIGURABLE, P = "ArrayBuffer", G = "DataView", Z = "Wrong index", F = O.getterFor(P), Y = O.getterFor(G), K = O.set, V = r.ArrayBuffer, ne = V, ae = ne && ne.prototype, se = r.DataView, ue = se && se.prototype, me = Object.prototype, ge = r.Array, Ce = r.RangeError, Re = t(v), Ie = t([].reverse), Oe = f.pack, fe = f.unpack, ce = function(j) {
          return [255 & j];
        }, Ue = function(j) {
          return [255 & j, j >> 8 & 255];
        }, Ke = function(j) {
          return [255 & j, j >> 8 & 255, j >> 16 & 255, j >> 24 & 255];
        }, $e = function(j) {
          return j[3] << 24 | j[2] << 16 | j[1] << 8 | j[0];
        }, Ve = function(j) {
          return Oe(j, 23, 4);
        }, Be = function(j) {
          return Oe(j, 52, 8);
        }, Ze = function(j, B, T) {
          n(j.prototype, B, { configurable: !0, get: function() {
            return T(this)[B];
          } });
        }, Qe = function(j, B, T, W) {
          var _ = d(T), A = Y(j);
          if (_ + B > A.byteLength)
            throw Ce(Z);
          var L = A.bytes, w = _ + A.byteOffset, k = N(L, w, w + B);
          return W ? k : Ie(k);
        }, Pe = function(j, B, T, W, _, A) {
          var L = d(T), w = Y(j);
          if (L + B > w.byteLength)
            throw Ce(Z);
          for (var k = w.bytes, y = L + w.byteOffset, I = W(+_), H = 0; H < B; H++)
            k[y + H] = I[A ? H : B - H - 1];
        };
        if (s) {
          var Le = C && V.name !== P;
          if (u(function() {
            V(1);
          }) && u(function() {
            new V(-1);
          }) && !u(function() {
            return new V(), new V(1.5), new V(NaN), V.length != 1 || Le && !E;
          }))
            Le && E && o(V, "name", P);
          else {
            (ne = function(j) {
              return m(this, ae), new V(d(j));
            }).prototype = ae;
            for (var xe, ve = S(V), we = 0; ve.length > we; )
              (xe = ve[we++]) in ne || o(ne, xe, V[xe]);
            ae.constructor = ne;
          }
          c && b(ue) !== me && c(ue, me);
          var ke = new se(new ne(2)), Ne = t(ue.setInt8);
          ke.setInt8(0, 2147483648), ke.setInt8(1, 2147483649), !ke.getInt8(0) && ke.getInt8(1) || l(ue, { setInt8: function(j, B) {
            Ne(this, j, B << 24 >> 24);
          }, setUint8: function(j, B) {
            Ne(this, j, B << 24 >> 24);
          } }, { unsafe: !0 });
        } else
          ae = (ne = function(j) {
            m(this, ae);
            var B = d(j);
            K(this, { type: P, bytes: Re(ge(B), 0), byteLength: B }), a || (this.byteLength = B, this.detached = !1);
          }).prototype, ue = (se = function(j, B, T) {
            m(this, ue), m(j, ae);
            var W = F(j), _ = W.byteLength, A = g(B);
            if (A < 0 || A > _)
              throw Ce("Wrong offset");
            if (A + (T = T === void 0 ? _ - A : h(T)) > _)
              throw Ce("Wrong length");
            K(this, { type: G, buffer: j, byteLength: T, byteOffset: A, bytes: W.bytes }), a || (this.buffer = j, this.byteLength = T, this.byteOffset = A);
          }).prototype, a && (Ze(ne, "byteLength", F), Ze(se, "buffer", Y), Ze(se, "byteLength", Y), Ze(se, "byteOffset", Y)), l(ue, { getInt8: function(j) {
            return Qe(this, 1, j)[0] << 24 >> 24;
          }, getUint8: function(j) {
            return Qe(this, 1, j)[0];
          }, getInt16: function(j) {
            var B = Qe(this, 2, j, arguments.length > 1 ? arguments[1] : void 0);
            return (B[1] << 8 | B[0]) << 16 >> 16;
          }, getUint16: function(j) {
            var B = Qe(this, 2, j, arguments.length > 1 ? arguments[1] : void 0);
            return B[1] << 8 | B[0];
          }, getInt32: function(j) {
            return $e(Qe(this, 4, j, arguments.length > 1 ? arguments[1] : void 0));
          }, getUint32: function(j) {
            return $e(Qe(this, 4, j, arguments.length > 1 ? arguments[1] : void 0)) >>> 0;
          }, getFloat32: function(j) {
            return fe(Qe(this, 4, j, arguments.length > 1 ? arguments[1] : void 0), 23);
          }, getFloat64: function(j) {
            return fe(Qe(this, 8, j, arguments.length > 1 ? arguments[1] : void 0), 52);
          }, setInt8: function(j, B) {
            Pe(this, 1, j, ce, B);
          }, setUint8: function(j, B) {
            Pe(this, 1, j, ce, B);
          }, setInt16: function(j, B) {
            Pe(this, 2, j, Ue, B, arguments.length > 2 ? arguments[2] : void 0);
          }, setUint16: function(j, B) {
            Pe(this, 2, j, Ue, B, arguments.length > 2 ? arguments[2] : void 0);
          }, setInt32: function(j, B) {
            Pe(this, 4, j, Ke, B, arguments.length > 2 ? arguments[2] : void 0);
          }, setUint32: function(j, B) {
            Pe(this, 4, j, Ke, B, arguments.length > 2 ? arguments[2] : void 0);
          }, setFloat32: function(j, B) {
            Pe(this, 4, j, Ve, B, arguments.length > 2 ? arguments[2] : void 0);
          }, setFloat64: function(j, B) {
            Pe(this, 8, j, Be, B, arguments.length > 2 ? arguments[2] : void 0);
          } });
        x(ne, P), x(se, G), p.exports = { ArrayBuffer: ne, DataView: se };
      }, 1048: function(p, R, e) {
        var r = e(7908), t = e(1400), a = e(6244), s = e(5117), i = Math.min;
        p.exports = [].copyWithin || function(o, n) {
          var l = r(this), u = a(l), m = t(o, u), g = t(n, u), h = arguments.length > 2 ? arguments[2] : void 0, d = i((h === void 0 ? u : t(h, u)) - g, u - m), f = 1;
          for (g < m && m < g + d && (f = -1, g += d - 1, m += d - 1); d-- > 0; )
            g in l ? l[m] = l[g] : s(l, m), m += f, g += f;
          return l;
        };
      }, 1285: function(p, R, e) {
        var r = e(7908), t = e(1400), a = e(6244);
        p.exports = function(s) {
          for (var i = r(this), o = a(i), n = arguments.length, l = t(n > 1 ? arguments[1] : void 0, o), u = n > 2 ? arguments[2] : void 0, m = u === void 0 ? o : t(u, o); m > l; )
            i[l++] = s;
          return i;
        };
      }, 8533: function(p, R, e) {
        var r = e(2092).forEach, t = e(9341)("forEach");
        p.exports = t ? [].forEach : function(a) {
          return r(this, a, arguments.length > 1 ? arguments[1] : void 0);
        };
      }, 7745: function(p, R, e) {
        var r = e(6244);
        p.exports = function(t, a) {
          for (var s = 0, i = r(a), o = new t(i); i > s; )
            o[s] = a[s++];
          return o;
        };
      }, 8457: function(p, R, e) {
        var r = e(9974), t = e(6916), a = e(7908), s = e(3411), i = e(7659), o = e(4411), n = e(6244), l = e(6135), u = e(4121), m = e(1246), g = Array;
        p.exports = function(h) {
          var d = a(h), f = o(this), b = arguments.length, c = b > 1 ? arguments[1] : void 0, S = c !== void 0;
          S && (c = r(c, b > 2 ? arguments[2] : void 0));
          var v, N, x, O, C, E, P = m(d), G = 0;
          if (!P || this === g && i(P))
            for (v = n(d), N = f ? new this(v) : g(v); v > G; G++)
              E = S ? c(d[G], G) : d[G], l(N, G, E);
          else
            for (C = (O = u(d, P)).next, N = f ? new this() : []; !(x = t(C, O)).done; G++)
              E = S ? s(O, c, [x.value, G], !0) : x.value, l(N, G, E);
          return N.length = G, N;
        };
      }, 1318: function(p, R, e) {
        var r = e(5656), t = e(1400), a = e(6244), s = function(i) {
          return function(o, n, l) {
            var u, m = r(o), g = a(m), h = t(l, g);
            if (i && n != n) {
              for (; g > h; )
                if ((u = m[h++]) != u)
                  return !0;
            } else
              for (; g > h; h++)
                if ((i || h in m) && m[h] === n)
                  return i || h || 0;
            return !i && -1;
          };
        };
        p.exports = { includes: s(!0), indexOf: s(!1) };
      }, 2092: function(p, R, e) {
        var r = e(9974), t = e(1702), a = e(8361), s = e(7908), i = e(6244), o = e(5417), n = t([].push), l = function(u) {
          var m = u == 1, g = u == 2, h = u == 3, d = u == 4, f = u == 6, b = u == 7, c = u == 5 || f;
          return function(S, v, N, x) {
            for (var O, C, E = s(S), P = a(E), G = r(v, N), Z = i(P), F = 0, Y = x || o, K = m ? Y(S, Z) : g || b ? Y(S, 0) : void 0; Z > F; F++)
              if ((c || F in P) && (C = G(O = P[F], F, E), u))
                if (m)
                  K[F] = C;
                else if (C)
                  switch (u) {
                    case 3:
                      return !0;
                    case 5:
                      return O;
                    case 6:
                      return F;
                    case 2:
                      n(K, O);
                  }
                else
                  switch (u) {
                    case 4:
                      return !1;
                    case 7:
                      n(K, O);
                  }
            return f ? -1 : h || d ? d : K;
          };
        };
        p.exports = { forEach: l(0), map: l(1), filter: l(2), some: l(3), every: l(4), find: l(5), findIndex: l(6), filterReject: l(7) };
      }, 6583: function(p, R, e) {
        var r = e(2104), t = e(5656), a = e(9303), s = e(6244), i = e(9341), o = Math.min, n = [].lastIndexOf, l = !!n && 1 / [1].lastIndexOf(1, -0) < 0, u = i("lastIndexOf"), m = l || !u;
        p.exports = m ? function(g) {
          if (l)
            return r(n, this, arguments) || 0;
          var h = t(this), d = s(h), f = d - 1;
          for (arguments.length > 1 && (f = o(f, a(arguments[1]))), f < 0 && (f = d + f); f >= 0; f--)
            if (f in h && h[f] === g)
              return f || 0;
          return -1;
        } : n;
      }, 1194: function(p, R, e) {
        var r = e(7293), t = e(5112), a = e(7392), s = t("species");
        p.exports = function(i) {
          return a >= 51 || !r(function() {
            var o = [];
            return (o.constructor = {})[s] = function() {
              return { foo: 1 };
            }, o[i](Boolean).foo !== 1;
          });
        };
      }, 9341: function(p, R, e) {
        var r = e(7293);
        p.exports = function(t, a) {
          var s = [][t];
          return !!s && r(function() {
            s.call(null, a || function() {
              return 1;
            }, 1);
          });
        };
      }, 3671: function(p, R, e) {
        var r = e(9662), t = e(7908), a = e(8361), s = e(6244), i = TypeError, o = function(n) {
          return function(l, u, m, g) {
            r(u);
            var h = t(l), d = a(h), f = s(h), b = n ? f - 1 : 0, c = n ? -1 : 1;
            if (m < 2)
              for (; ; ) {
                if (b in d) {
                  g = d[b], b += c;
                  break;
                }
                if (b += c, n ? b < 0 : f <= b)
                  throw i("Reduce of empty array with no initial value");
              }
            for (; n ? b >= 0 : f > b; b += c)
              b in d && (g = u(g, d[b], b, h));
            return g;
          };
        };
        p.exports = { left: o(!1), right: o(!0) };
      }, 3658: function(p, R, e) {
        var r = e(9781), t = e(3157), a = TypeError, s = Object.getOwnPropertyDescriptor, i = r && !function() {
          if (this !== void 0)
            return !0;
          try {
            Object.defineProperty([], "length", { writable: !1 }).length = 1;
          } catch (o) {
            return o instanceof TypeError;
          }
        }();
        p.exports = i ? function(o, n) {
          if (t(o) && !s(o, "length").writable)
            throw a("Cannot set read only .length");
          return o.length = n;
        } : function(o, n) {
          return o.length = n;
        };
      }, 1589: function(p, R, e) {
        var r = e(1400), t = e(6244), a = e(6135), s = Array, i = Math.max;
        p.exports = function(o, n, l) {
          for (var u = t(o), m = r(n, u), g = r(l === void 0 ? u : l, u), h = s(i(g - m, 0)), d = 0; m < g; m++, d++)
            a(h, d, o[m]);
          return h.length = d, h;
        };
      }, 206: function(p, R, e) {
        var r = e(1702);
        p.exports = r([].slice);
      }, 4362: function(p, R, e) {
        var r = e(1589), t = Math.floor, a = function(o, n) {
          var l = o.length, u = t(l / 2);
          return l < 8 ? s(o, n) : i(o, a(r(o, 0, u), n), a(r(o, u), n), n);
        }, s = function(o, n) {
          for (var l, u, m = o.length, g = 1; g < m; ) {
            for (u = g, l = o[g]; u && n(o[u - 1], l) > 0; )
              o[u] = o[--u];
            u !== g++ && (o[u] = l);
          }
          return o;
        }, i = function(o, n, l, u) {
          for (var m = n.length, g = l.length, h = 0, d = 0; h < m || d < g; )
            o[h + d] = h < m && d < g ? u(n[h], l[d]) <= 0 ? n[h++] : l[d++] : h < m ? n[h++] : l[d++];
          return o;
        };
        p.exports = a;
      }, 7475: function(p, R, e) {
        var r = e(3157), t = e(4411), a = e(111), s = e(5112)("species"), i = Array;
        p.exports = function(o) {
          var n;
          return r(o) && (n = o.constructor, (t(n) && (n === i || r(n.prototype)) || a(n) && (n = n[s]) === null) && (n = void 0)), n === void 0 ? i : n;
        };
      }, 5417: function(p, R, e) {
        var r = e(7475);
        p.exports = function(t, a) {
          return new (r(t))(a === 0 ? 0 : a);
        };
      }, 3411: function(p, R, e) {
        var r = e(9670), t = e(9212);
        p.exports = function(a, s, i, o) {
          try {
            return o ? s(r(i)[0], i[1]) : s(i);
          } catch (n) {
            t(a, "throw", n);
          }
        };
      }, 7072: function(p, R, e) {
        var r = e(5112)("iterator"), t = !1;
        try {
          var a = 0, s = { next: function() {
            return { done: !!a++ };
          }, return: function() {
            t = !0;
          } };
          s[r] = function() {
            return this;
          }, Array.from(s, function() {
            throw 2;
          });
        } catch {
        }
        p.exports = function(i, o) {
          if (!o && !t)
            return !1;
          var n = !1;
          try {
            var l = {};
            l[r] = function() {
              return { next: function() {
                return { done: n = !0 };
              } };
            }, i(l);
          } catch {
          }
          return n;
        };
      }, 4326: function(p, R, e) {
        var r = e(1702), t = r({}.toString), a = r("".slice);
        p.exports = function(s) {
          return a(t(s), 8, -1);
        };
      }, 648: function(p, R, e) {
        var r = e(1694), t = e(614), a = e(4326), s = e(5112)("toStringTag"), i = Object, o = a(function() {
          return arguments;
        }()) == "Arguments";
        p.exports = r ? a : function(n) {
          var l, u, m;
          return n === void 0 ? "Undefined" : n === null ? "Null" : typeof (u = function(g, h) {
            try {
              return g[h];
            } catch {
            }
          }(l = i(n), s)) == "string" ? u : o ? a(l) : (m = a(l)) == "Object" && t(l.callee) ? "Arguments" : m;
        };
      }, 5631: function(p, R, e) {
        var r = e(30), t = e(7045), a = e(9190), s = e(9974), i = e(5787), o = e(8554), n = e(408), l = e(1656), u = e(6178), m = e(6340), g = e(9781), h = e(2423).fastKey, d = e(9909), f = d.set, b = d.getterFor;
        p.exports = { getConstructor: function(c, S, v, N) {
          var x = c(function(G, Z) {
            i(G, O), f(G, { type: S, index: r(null), first: void 0, last: void 0, size: 0 }), g || (G.size = 0), o(Z) || n(Z, G[N], { that: G, AS_ENTRIES: v });
          }), O = x.prototype, C = b(S), E = function(G, Z, F) {
            var Y, K, V = C(G), ne = P(G, Z);
            return ne ? ne.value = F : (V.last = ne = { index: K = h(Z, !0), key: Z, value: F, previous: Y = V.last, next: void 0, removed: !1 }, V.first || (V.first = ne), Y && (Y.next = ne), g ? V.size++ : G.size++, K !== "F" && (V.index[K] = ne)), G;
          }, P = function(G, Z) {
            var F, Y = C(G), K = h(Z);
            if (K !== "F")
              return Y.index[K];
            for (F = Y.first; F; F = F.next)
              if (F.key == Z)
                return F;
          };
          return a(O, { clear: function() {
            for (var G = C(this), Z = G.index, F = G.first; F; )
              F.removed = !0, F.previous && (F.previous = F.previous.next = void 0), delete Z[F.index], F = F.next;
            G.first = G.last = void 0, g ? G.size = 0 : this.size = 0;
          }, delete: function(G) {
            var Z = this, F = C(Z), Y = P(Z, G);
            if (Y) {
              var K = Y.next, V = Y.previous;
              delete F.index[Y.index], Y.removed = !0, V && (V.next = K), K && (K.previous = V), F.first == Y && (F.first = K), F.last == Y && (F.last = V), g ? F.size-- : Z.size--;
            }
            return !!Y;
          }, forEach: function(G) {
            for (var Z, F = C(this), Y = s(G, arguments.length > 1 ? arguments[1] : void 0); Z = Z ? Z.next : F.first; )
              for (Y(Z.value, Z.key, this); Z && Z.removed; )
                Z = Z.previous;
          }, has: function(G) {
            return !!P(this, G);
          } }), a(O, v ? { get: function(G) {
            var Z = P(this, G);
            return Z && Z.value;
          }, set: function(G, Z) {
            return E(this, G === 0 ? 0 : G, Z);
          } } : { add: function(G) {
            return E(this, G = G === 0 ? 0 : G, G);
          } }), g && t(O, "size", { configurable: !0, get: function() {
            return C(this).size;
          } }), x;
        }, setStrong: function(c, S, v) {
          var N = S + " Iterator", x = b(S), O = b(N);
          l(c, S, function(C, E) {
            f(this, { type: N, target: C, state: x(C), kind: E, last: void 0 });
          }, function() {
            for (var C = O(this), E = C.kind, P = C.last; P && P.removed; )
              P = P.previous;
            return C.target && (C.last = P = P ? P.next : C.state.first) ? u(E == "keys" ? P.key : E == "values" ? P.value : [P.key, P.value], !1) : (C.target = void 0, u(void 0, !0));
          }, v ? "entries" : "values", !v, !0), m(S);
        } };
      }, 7710: function(p, R, e) {
        var r = e(2109), t = e(7854), a = e(1702), s = e(4705), i = e(8052), o = e(2423), n = e(408), l = e(5787), u = e(614), m = e(8554), g = e(111), h = e(7293), d = e(7072), f = e(8003), b = e(9587);
        p.exports = function(c, S, v) {
          var N = c.indexOf("Map") !== -1, x = c.indexOf("Weak") !== -1, O = N ? "set" : "add", C = t[c], E = C && C.prototype, P = C, G = {}, Z = function(ae) {
            var se = a(E[ae]);
            i(E, ae, ae == "add" ? function(ue) {
              return se(this, ue === 0 ? 0 : ue), this;
            } : ae == "delete" ? function(ue) {
              return !(x && !g(ue)) && se(this, ue === 0 ? 0 : ue);
            } : ae == "get" ? function(ue) {
              return x && !g(ue) ? void 0 : se(this, ue === 0 ? 0 : ue);
            } : ae == "has" ? function(ue) {
              return !(x && !g(ue)) && se(this, ue === 0 ? 0 : ue);
            } : function(ue, me) {
              return se(this, ue === 0 ? 0 : ue, me), this;
            });
          };
          if (s(c, !u(C) || !(x || E.forEach && !h(function() {
            new C().entries().next();
          }))))
            P = v.getConstructor(S, c, N, O), o.enable();
          else if (s(c, !0)) {
            var F = new P(), Y = F[O](x ? {} : -0, 1) != F, K = h(function() {
              F.has(1);
            }), V = d(function(ae) {
              new C(ae);
            }), ne = !x && h(function() {
              for (var ae = new C(), se = 5; se--; )
                ae[O](se, se);
              return !ae.has(-0);
            });
            V || ((P = S(function(ae, se) {
              l(ae, E);
              var ue = b(new C(), ae, P);
              return m(se) || n(se, ue[O], { that: ue, AS_ENTRIES: N }), ue;
            })).prototype = E, E.constructor = P), (K || ne) && (Z("delete"), Z("has"), N && Z("get")), (ne || Y) && Z(O), x && E.clear && delete E.clear;
          }
          return G[c] = P, r({ global: !0, constructor: !0, forced: P != C }, G), f(P, c), x || v.setStrong(P, c, N), P;
        };
      }, 9920: function(p, R, e) {
        var r = e(2597), t = e(3887), a = e(1236), s = e(3070);
        p.exports = function(i, o, n) {
          for (var l = t(o), u = s.f, m = a.f, g = 0; g < l.length; g++) {
            var h = l[g];
            r(i, h) || n && r(n, h) || u(i, h, m(o, h));
          }
        };
      }, 4964: function(p, R, e) {
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
      }, 8544: function(p, R, e) {
        var r = e(7293);
        p.exports = !r(function() {
          function t() {
          }
          return t.prototype.constructor = null, Object.getPrototypeOf(new t()) !== t.prototype;
        });
      }, 6178: function(p) {
        p.exports = function(R, e) {
          return { value: R, done: e };
        };
      }, 8880: function(p, R, e) {
        var r = e(9781), t = e(3070), a = e(9114);
        p.exports = r ? function(s, i, o) {
          return t.f(s, i, a(1, o));
        } : function(s, i, o) {
          return s[i] = o, s;
        };
      }, 9114: function(p) {
        p.exports = function(R, e) {
          return { enumerable: !(1 & R), configurable: !(2 & R), writable: !(4 & R), value: e };
        };
      }, 6135: function(p, R, e) {
        var r = e(4948), t = e(3070), a = e(9114);
        p.exports = function(s, i, o) {
          var n = r(i);
          n in s ? t.f(s, n, a(0, o)) : s[n] = o;
        };
      }, 7045: function(p, R, e) {
        var r = e(6339), t = e(3070);
        p.exports = function(a, s, i) {
          return i.get && r(i.get, s, { getter: !0 }), i.set && r(i.set, s, { setter: !0 }), t.f(a, s, i);
        };
      }, 8052: function(p, R, e) {
        var r = e(614), t = e(3070), a = e(6339), s = e(3072);
        p.exports = function(i, o, n, l) {
          l || (l = {});
          var u = l.enumerable, m = l.name !== void 0 ? l.name : o;
          if (r(n) && a(n, m, l), l.global)
            u ? i[o] = n : s(o, n);
          else {
            try {
              l.unsafe ? i[o] && (u = !0) : delete i[o];
            } catch {
            }
            u ? i[o] = n : t.f(i, o, { value: n, enumerable: !1, configurable: !l.nonConfigurable, writable: !l.nonWritable });
          }
          return i;
        };
      }, 9190: function(p, R, e) {
        var r = e(8052);
        p.exports = function(t, a, s) {
          for (var i in a)
            r(t, i, a[i], s);
          return t;
        };
      }, 3072: function(p, R, e) {
        var r = e(7854), t = Object.defineProperty;
        p.exports = function(a, s) {
          try {
            t(r, a, { value: s, configurable: !0, writable: !0 });
          } catch {
            r[a] = s;
          }
          return s;
        };
      }, 5117: function(p, R, e) {
        var r = e(6330), t = TypeError;
        p.exports = function(a, s) {
          if (!delete a[s])
            throw t("Cannot delete property " + r(s) + " of " + r(a));
        };
      }, 9781: function(p, R, e) {
        var r = e(7293);
        p.exports = !r(function() {
          return Object.defineProperty({}, 1, { get: function() {
            return 7;
          } })[1] != 7;
        });
      }, 4154: function(p) {
        var R = typeof document == "object" && document.all, e = R === void 0 && R !== void 0;
        p.exports = { all: R, IS_HTMLDDA: e };
      }, 317: function(p, R, e) {
        var r = e(7854), t = e(111), a = r.document, s = t(a) && t(a.createElement);
        p.exports = function(i) {
          return s ? a.createElement(i) : {};
        };
      }, 7207: function(p) {
        var R = TypeError;
        p.exports = function(e) {
          if (e > 9007199254740991)
            throw R("Maximum allowed index exceeded");
          return e;
        };
      }, 8324: function(p) {
        p.exports = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 };
      }, 8509: function(p, R, e) {
        var r = e(317)("span").classList, t = r && r.constructor && r.constructor.prototype;
        p.exports = t === Object.prototype ? void 0 : t;
      }, 8886: function(p, R, e) {
        var r = e(8113).match(/firefox\/(\d+)/i);
        p.exports = !!r && +r[1];
      }, 7871: function(p, R, e) {
        var r = e(3823), t = e(5268);
        p.exports = !r && !t && typeof window == "object" && typeof document == "object";
      }, 9363: function(p) {
        p.exports = typeof Bun == "function" && Bun && typeof Bun.version == "string";
      }, 3823: function(p) {
        p.exports = typeof Deno == "object" && Deno && typeof Deno.version == "object";
      }, 256: function(p, R, e) {
        var r = e(8113);
        p.exports = /MSIE|Trident/.test(r);
      }, 1528: function(p, R, e) {
        var r = e(8113);
        p.exports = /ipad|iphone|ipod/i.test(r) && typeof Pebble < "u";
      }, 6833: function(p, R, e) {
        var r = e(8113);
        p.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(r);
      }, 5268: function(p, R, e) {
        var r = e(4326);
        p.exports = typeof process < "u" && r(process) == "process";
      }, 1036: function(p, R, e) {
        var r = e(8113);
        p.exports = /web0s(?!.*chrome)/i.test(r);
      }, 8113: function(p) {
        p.exports = typeof navigator < "u" && String(navigator.userAgent) || "";
      }, 7392: function(p, R, e) {
        var r, t, a = e(7854), s = e(8113), i = a.process, o = a.Deno, n = i && i.versions || o && o.version, l = n && n.v8;
        l && (t = (r = l.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])), !t && s && (!(r = s.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = s.match(/Chrome\/(\d+)/)) && (t = +r[1]), p.exports = t;
      }, 8008: function(p, R, e) {
        var r = e(8113).match(/AppleWebKit\/(\d+)\./);
        p.exports = !!r && +r[1];
      }, 748: function(p) {
        p.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
      }, 2109: function(p, R, e) {
        var r = e(7854), t = e(1236).f, a = e(8880), s = e(8052), i = e(3072), o = e(9920), n = e(4705);
        p.exports = function(l, u) {
          var m, g, h, d, f, b = l.target, c = l.global, S = l.stat;
          if (m = c ? r : S ? r[b] || i(b, {}) : (r[b] || {}).prototype)
            for (g in u) {
              if (d = u[g], h = l.dontCallGetSet ? (f = t(m, g)) && f.value : m[g], !n(c ? g : b + (S ? "." : "#") + g, l.forced) && h !== void 0) {
                if (typeof d == typeof h)
                  continue;
                o(d, h);
              }
              (l.sham || h && h.sham) && a(d, "sham", !0), s(m, g, d, l);
            }
        };
      }, 7293: function(p) {
        p.exports = function(R) {
          try {
            return !!R();
          } catch {
            return !0;
          }
        };
      }, 6677: function(p, R, e) {
        var r = e(7293);
        p.exports = !r(function() {
          return Object.isExtensible(Object.preventExtensions({}));
        });
      }, 2104: function(p, R, e) {
        var r = e(4374), t = Function.prototype, a = t.apply, s = t.call;
        p.exports = typeof Reflect == "object" && Reflect.apply || (r ? s.bind(a) : function() {
          return s.apply(a, arguments);
        });
      }, 9974: function(p, R, e) {
        var r = e(1470), t = e(9662), a = e(4374), s = r(r.bind);
        p.exports = function(i, o) {
          return t(i), o === void 0 ? i : a ? s(i, o) : function() {
            return i.apply(o, arguments);
          };
        };
      }, 4374: function(p, R, e) {
        var r = e(7293);
        p.exports = !r(function() {
          var t = (function() {
          }).bind();
          return typeof t != "function" || t.hasOwnProperty("prototype");
        });
      }, 7065: function(p, R, e) {
        var r = e(1702), t = e(9662), a = e(111), s = e(2597), i = e(206), o = e(4374), n = Function, l = r([].concat), u = r([].join), m = {}, g = function(h, d, f) {
          if (!s(m, d)) {
            for (var b = [], c = 0; c < d; c++)
              b[c] = "a[" + c + "]";
            m[d] = n("C,a", "return new C(" + u(b, ",") + ")");
          }
          return m[d](h, f);
        };
        p.exports = o ? n.bind : function(h) {
          var d = t(this), f = d.prototype, b = i(arguments, 1), c = function() {
            var S = l(b, i(arguments));
            return this instanceof c ? g(d, S.length, S) : d.apply(h, S);
          };
          return a(f) && (c.prototype = f), c;
        };
      }, 6916: function(p, R, e) {
        var r = e(4374), t = Function.prototype.call;
        p.exports = r ? t.bind(t) : function() {
          return t.apply(t, arguments);
        };
      }, 6530: function(p, R, e) {
        var r = e(9781), t = e(2597), a = Function.prototype, s = r && Object.getOwnPropertyDescriptor, i = t(a, "name"), o = i && (function() {
        }).name === "something", n = i && (!r || r && s(a, "name").configurable);
        p.exports = { EXISTS: i, PROPER: o, CONFIGURABLE: n };
      }, 5668: function(p, R, e) {
        var r = e(1702), t = e(9662);
        p.exports = function(a, s, i) {
          try {
            return r(t(Object.getOwnPropertyDescriptor(a, s)[i]));
          } catch {
          }
        };
      }, 1470: function(p, R, e) {
        var r = e(4326), t = e(1702);
        p.exports = function(a) {
          if (r(a) === "Function")
            return t(a);
        };
      }, 1702: function(p, R, e) {
        var r = e(4374), t = Function.prototype, a = t.call, s = r && t.bind.bind(a, a);
        p.exports = r ? s : function(i) {
          return function() {
            return a.apply(i, arguments);
          };
        };
      }, 5005: function(p, R, e) {
        var r = e(7854), t = e(614), a = function(s) {
          return t(s) ? s : void 0;
        };
        p.exports = function(s, i) {
          return arguments.length < 2 ? a(r[s]) : r[s] && r[s][i];
        };
      }, 1246: function(p, R, e) {
        var r = e(648), t = e(8173), a = e(8554), s = e(7497), i = e(5112)("iterator");
        p.exports = function(o) {
          if (!a(o))
            return t(o, i) || t(o, "@@iterator") || s[r(o)];
        };
      }, 4121: function(p, R, e) {
        var r = e(6916), t = e(9662), a = e(9670), s = e(6330), i = e(1246), o = TypeError;
        p.exports = function(n, l) {
          var u = arguments.length < 2 ? i(n) : l;
          if (t(u))
            return a(r(u, n));
          throw o(s(n) + " is not iterable");
        };
      }, 8044: function(p, R, e) {
        var r = e(1702), t = e(3157), a = e(614), s = e(4326), i = e(1340), o = r([].push);
        p.exports = function(n) {
          if (a(n))
            return n;
          if (t(n)) {
            for (var l = n.length, u = [], m = 0; m < l; m++) {
              var g = n[m];
              typeof g == "string" ? o(u, g) : typeof g != "number" && s(g) != "Number" && s(g) != "String" || o(u, i(g));
            }
            var h = u.length, d = !0;
            return function(f, b) {
              if (d)
                return d = !1, b;
              if (t(this))
                return b;
              for (var c = 0; c < h; c++)
                if (u[c] === f)
                  return b;
            };
          }
        };
      }, 8173: function(p, R, e) {
        var r = e(9662), t = e(8554);
        p.exports = function(a, s) {
          var i = a[s];
          return t(i) ? void 0 : r(i);
        };
      }, 7854: function(p, R, e) {
        var r = function(t) {
          return t && t.Math == Math && t;
        };
        p.exports = r(typeof globalThis == "object" && globalThis) || r(typeof window == "object" && window) || r(typeof self == "object" && self) || r(typeof e.g == "object" && e.g) || function() {
          return this;
        }() || Function("return this")();
      }, 2597: function(p, R, e) {
        var r = e(1702), t = e(7908), a = r({}.hasOwnProperty);
        p.exports = Object.hasOwn || function(s, i) {
          return a(t(s), i);
        };
      }, 3501: function(p) {
        p.exports = {};
      }, 842: function(p) {
        p.exports = function(R, e) {
          try {
            arguments.length == 1 ? console.error(R) : console.error(R, e);
          } catch {
          }
        };
      }, 490: function(p, R, e) {
        var r = e(5005);
        p.exports = r("document", "documentElement");
      }, 4664: function(p, R, e) {
        var r = e(9781), t = e(7293), a = e(317);
        p.exports = !r && !t(function() {
          return Object.defineProperty(a("div"), "a", { get: function() {
            return 7;
          } }).a != 7;
        });
      }, 1179: function(p) {
        var R = Array, e = Math.abs, r = Math.pow, t = Math.floor, a = Math.log, s = Math.LN2;
        p.exports = { pack: function(i, o, n) {
          var l, u, m, g = R(n), h = 8 * n - o - 1, d = (1 << h) - 1, f = d >> 1, b = o === 23 ? r(2, -24) - r(2, -77) : 0, c = i < 0 || i === 0 && 1 / i < 0 ? 1 : 0, S = 0;
          for ((i = e(i)) != i || i === 1 / 0 ? (u = i != i ? 1 : 0, l = d) : (l = t(a(i) / s), i * (m = r(2, -l)) < 1 && (l--, m *= 2), (i += l + f >= 1 ? b / m : b * r(2, 1 - f)) * m >= 2 && (l++, m /= 2), l + f >= d ? (u = 0, l = d) : l + f >= 1 ? (u = (i * m - 1) * r(2, o), l += f) : (u = i * r(2, f - 1) * r(2, o), l = 0)); o >= 8; )
            g[S++] = 255 & u, u /= 256, o -= 8;
          for (l = l << o | u, h += o; h > 0; )
            g[S++] = 255 & l, l /= 256, h -= 8;
          return g[--S] |= 128 * c, g;
        }, unpack: function(i, o) {
          var n, l = i.length, u = 8 * l - o - 1, m = (1 << u) - 1, g = m >> 1, h = u - 7, d = l - 1, f = i[d--], b = 127 & f;
          for (f >>= 7; h > 0; )
            b = 256 * b + i[d--], h -= 8;
          for (n = b & (1 << -h) - 1, b >>= -h, h += o; h > 0; )
            n = 256 * n + i[d--], h -= 8;
          if (b === 0)
            b = 1 - g;
          else {
            if (b === m)
              return n ? NaN : f ? -1 / 0 : 1 / 0;
            n += r(2, o), b -= g;
          }
          return (f ? -1 : 1) * n * r(2, b - o);
        } };
      }, 8361: function(p, R, e) {
        var r = e(1702), t = e(7293), a = e(4326), s = Object, i = r("".split);
        p.exports = t(function() {
          return !s("z").propertyIsEnumerable(0);
        }) ? function(o) {
          return a(o) == "String" ? i(o, "") : s(o);
        } : s;
      }, 9587: function(p, R, e) {
        var r = e(614), t = e(111), a = e(7674);
        p.exports = function(s, i, o) {
          var n, l;
          return a && r(n = i.constructor) && n !== o && t(l = n.prototype) && l !== o.prototype && a(s, l), s;
        };
      }, 2788: function(p, R, e) {
        var r = e(1702), t = e(614), a = e(5465), s = r(Function.toString);
        t(a.inspectSource) || (a.inspectSource = function(i) {
          return s(i);
        }), p.exports = a.inspectSource;
      }, 2423: function(p, R, e) {
        var r = e(2109), t = e(1702), a = e(3501), s = e(111), i = e(2597), o = e(3070).f, n = e(8006), l = e(1156), u = e(2050), m = e(9711), g = e(6677), h = !1, d = m("meta"), f = 0, b = function(S) {
          o(S, d, { value: { objectID: "O" + f++, weakData: {} } });
        }, c = p.exports = { enable: function() {
          c.enable = function() {
          }, h = !0;
          var S = n.f, v = t([].splice), N = {};
          N[d] = 1, S(N).length && (n.f = function(x) {
            for (var O = S(x), C = 0, E = O.length; C < E; C++)
              if (O[C] === d) {
                v(O, C, 1);
                break;
              }
            return O;
          }, r({ target: "Object", stat: !0, forced: !0 }, { getOwnPropertyNames: l.f }));
        }, fastKey: function(S, v) {
          if (!s(S))
            return typeof S == "symbol" ? S : (typeof S == "string" ? "S" : "P") + S;
          if (!i(S, d)) {
            if (!u(S))
              return "F";
            if (!v)
              return "E";
            b(S);
          }
          return S[d].objectID;
        }, getWeakData: function(S, v) {
          if (!i(S, d)) {
            if (!u(S))
              return !0;
            if (!v)
              return !1;
            b(S);
          }
          return S[d].weakData;
        }, onFreeze: function(S) {
          return g && h && u(S) && !i(S, d) && b(S), S;
        } };
        a[d] = !0;
      }, 9909: function(p, R, e) {
        var r, t, a, s = e(4811), i = e(7854), o = e(111), n = e(8880), l = e(2597), u = e(5465), m = e(6200), g = e(3501), h = "Object already initialized", d = i.TypeError, f = i.WeakMap;
        if (s || u.state) {
          var b = u.state || (u.state = new f());
          b.get = b.get, b.has = b.has, b.set = b.set, r = function(S, v) {
            if (b.has(S))
              throw d(h);
            return v.facade = S, b.set(S, v), v;
          }, t = function(S) {
            return b.get(S) || {};
          }, a = function(S) {
            return b.has(S);
          };
        } else {
          var c = m("state");
          g[c] = !0, r = function(S, v) {
            if (l(S, c))
              throw d(h);
            return v.facade = S, n(S, c, v), v;
          }, t = function(S) {
            return l(S, c) ? S[c] : {};
          }, a = function(S) {
            return l(S, c);
          };
        }
        p.exports = { set: r, get: t, has: a, enforce: function(S) {
          return a(S) ? t(S) : r(S, {});
        }, getterFor: function(S) {
          return function(v) {
            var N;
            if (!o(v) || (N = t(v)).type !== S)
              throw d("Incompatible receiver, " + S + " required");
            return N;
          };
        } };
      }, 7659: function(p, R, e) {
        var r = e(5112), t = e(7497), a = r("iterator"), s = Array.prototype;
        p.exports = function(i) {
          return i !== void 0 && (t.Array === i || s[a] === i);
        };
      }, 3157: function(p, R, e) {
        var r = e(4326);
        p.exports = Array.isArray || function(t) {
          return r(t) == "Array";
        };
      }, 4067: function(p, R, e) {
        var r = e(648);
        p.exports = function(t) {
          var a = r(t);
          return a == "BigInt64Array" || a == "BigUint64Array";
        };
      }, 614: function(p, R, e) {
        var r = e(4154), t = r.all;
        p.exports = r.IS_HTMLDDA ? function(a) {
          return typeof a == "function" || a === t;
        } : function(a) {
          return typeof a == "function";
        };
      }, 4411: function(p, R, e) {
        var r = e(1702), t = e(7293), a = e(614), s = e(648), i = e(5005), o = e(2788), n = function() {
        }, l = [], u = i("Reflect", "construct"), m = /^\s*(?:class|function)\b/, g = r(m.exec), h = !m.exec(n), d = function(b) {
          if (!a(b))
            return !1;
          try {
            return u(n, l, b), !0;
          } catch {
            return !1;
          }
        }, f = function(b) {
          if (!a(b))
            return !1;
          switch (s(b)) {
            case "AsyncFunction":
            case "GeneratorFunction":
            case "AsyncGeneratorFunction":
              return !1;
          }
          try {
            return h || !!g(m, o(b));
          } catch {
            return !0;
          }
        };
        f.sham = !0, p.exports = !u || t(function() {
          var b;
          return d(d.call) || !d(Object) || !d(function() {
            b = !0;
          }) || b;
        }) ? f : d;
      }, 4705: function(p, R, e) {
        var r = e(7293), t = e(614), a = /#|\.prototype\./, s = function(u, m) {
          var g = o[i(u)];
          return g == l || g != n && (t(m) ? r(m) : !!m);
        }, i = s.normalize = function(u) {
          return String(u).replace(a, ".").toLowerCase();
        }, o = s.data = {}, n = s.NATIVE = "N", l = s.POLYFILL = "P";
        p.exports = s;
      }, 5988: function(p, R, e) {
        var r = e(111), t = Math.floor;
        p.exports = Number.isInteger || function(a) {
          return !r(a) && isFinite(a) && t(a) === a;
        };
      }, 8554: function(p) {
        p.exports = function(R) {
          return R == null;
        };
      }, 111: function(p, R, e) {
        var r = e(614), t = e(4154), a = t.all;
        p.exports = t.IS_HTMLDDA ? function(s) {
          return typeof s == "object" ? s !== null : r(s) || s === a;
        } : function(s) {
          return typeof s == "object" ? s !== null : r(s);
        };
      }, 1913: function(p) {
        p.exports = !1;
      }, 7850: function(p, R, e) {
        var r = e(111), t = e(4326), a = e(5112)("match");
        p.exports = function(s) {
          var i;
          return r(s) && ((i = s[a]) !== void 0 ? !!i : t(s) == "RegExp");
        };
      }, 2190: function(p, R, e) {
        var r = e(5005), t = e(614), a = e(7976), s = e(3307), i = Object;
        p.exports = s ? function(o) {
          return typeof o == "symbol";
        } : function(o) {
          var n = r("Symbol");
          return t(n) && a(n.prototype, i(o));
        };
      }, 408: function(p, R, e) {
        var r = e(9974), t = e(6916), a = e(9670), s = e(6330), i = e(7659), o = e(6244), n = e(7976), l = e(4121), u = e(1246), m = e(9212), g = TypeError, h = function(f, b) {
          this.stopped = f, this.result = b;
        }, d = h.prototype;
        p.exports = function(f, b, c) {
          var S, v, N, x, O, C, E, P = c && c.that, G = !(!c || !c.AS_ENTRIES), Z = !(!c || !c.IS_RECORD), F = !(!c || !c.IS_ITERATOR), Y = !(!c || !c.INTERRUPTED), K = r(b, P), V = function(ae) {
            return S && m(S, "normal", ae), new h(!0, ae);
          }, ne = function(ae) {
            return G ? (a(ae), Y ? K(ae[0], ae[1], V) : K(ae[0], ae[1])) : Y ? K(ae, V) : K(ae);
          };
          if (Z)
            S = f.iterator;
          else if (F)
            S = f;
          else {
            if (!(v = u(f)))
              throw g(s(f) + " is not iterable");
            if (i(v)) {
              for (N = 0, x = o(f); x > N; N++)
                if ((O = ne(f[N])) && n(d, O))
                  return O;
              return new h(!1);
            }
            S = l(f, v);
          }
          for (C = Z ? f.next : S.next; !(E = t(C, S)).done; ) {
            try {
              O = ne(E.value);
            } catch (ae) {
              m(S, "throw", ae);
            }
            if (typeof O == "object" && O && n(d, O))
              return O;
          }
          return new h(!1);
        };
      }, 9212: function(p, R, e) {
        var r = e(6916), t = e(9670), a = e(8173);
        p.exports = function(s, i, o) {
          var n, l;
          t(s);
          try {
            if (!(n = a(s, "return"))) {
              if (i === "throw")
                throw o;
              return o;
            }
            n = r(n, s);
          } catch (u) {
            l = !0, n = u;
          }
          if (i === "throw")
            throw o;
          if (l)
            throw n;
          return t(n), o;
        };
      }, 3061: function(p, R, e) {
        var r = e(3383).IteratorPrototype, t = e(30), a = e(9114), s = e(8003), i = e(7497), o = function() {
          return this;
        };
        p.exports = function(n, l, u, m) {
          var g = l + " Iterator";
          return n.prototype = t(r, { next: a(+!m, u) }), s(n, g, !1, !0), i[g] = o, n;
        };
      }, 1656: function(p, R, e) {
        var r = e(2109), t = e(6916), a = e(1913), s = e(6530), i = e(614), o = e(3061), n = e(9518), l = e(7674), u = e(8003), m = e(8880), g = e(8052), h = e(5112), d = e(7497), f = e(3383), b = s.PROPER, c = s.CONFIGURABLE, S = f.IteratorPrototype, v = f.BUGGY_SAFARI_ITERATORS, N = h("iterator"), x = "keys", O = "values", C = "entries", E = function() {
          return this;
        };
        p.exports = function(P, G, Z, F, Y, K, V) {
          o(Z, G, F);
          var ne, ae, se, ue = function(fe) {
            if (fe === Y && Ie)
              return Ie;
            if (!v && fe in Ce)
              return Ce[fe];
            switch (fe) {
              case x:
              case O:
              case C:
                return function() {
                  return new Z(this, fe);
                };
            }
            return function() {
              return new Z(this);
            };
          }, me = G + " Iterator", ge = !1, Ce = P.prototype, Re = Ce[N] || Ce["@@iterator"] || Y && Ce[Y], Ie = !v && Re || ue(Y), Oe = G == "Array" && Ce.entries || Re;
          if (Oe && (ne = n(Oe.call(new P()))) !== Object.prototype && ne.next && (a || n(ne) === S || (l ? l(ne, S) : i(ne[N]) || g(ne, N, E)), u(ne, me, !0, !0), a && (d[me] = E)), b && Y == O && Re && Re.name !== O && (!a && c ? m(Ce, "name", O) : (ge = !0, Ie = function() {
            return t(Re, this);
          })), Y)
            if (ae = { values: ue(O), keys: K ? Ie : ue(x), entries: ue(C) }, V)
              for (se in ae)
                (v || ge || !(se in Ce)) && g(Ce, se, ae[se]);
            else
              r({ target: G, proto: !0, forced: v || ge }, ae);
          return a && !V || Ce[N] === Ie || g(Ce, N, Ie, { name: Y }), d[G] = Ie, ae;
        };
      }, 3383: function(p, R, e) {
        var r, t, a, s = e(7293), i = e(614), o = e(111), n = e(30), l = e(9518), u = e(8052), m = e(5112), g = e(1913), h = m("iterator"), d = !1;
        [].keys && ("next" in (a = [].keys()) ? (t = l(l(a))) !== Object.prototype && (r = t) : d = !0), !o(r) || s(function() {
          var f = {};
          return r[h].call(f) !== f;
        }) ? r = {} : g && (r = n(r)), i(r[h]) || u(r, h, function() {
          return this;
        }), p.exports = { IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: d };
      }, 7497: function(p) {
        p.exports = {};
      }, 6244: function(p, R, e) {
        var r = e(7466);
        p.exports = function(t) {
          return r(t.length);
        };
      }, 6339: function(p, R, e) {
        var r = e(1702), t = e(7293), a = e(614), s = e(2597), i = e(9781), o = e(6530).CONFIGURABLE, n = e(2788), l = e(9909), u = l.enforce, m = l.get, g = String, h = Object.defineProperty, d = r("".slice), f = r("".replace), b = r([].join), c = i && !t(function() {
          return h(function() {
          }, "length", { value: 8 }).length !== 8;
        }), S = String(String).split("String"), v = p.exports = function(N, x, O) {
          d(g(x), 0, 7) === "Symbol(" && (x = "[" + f(g(x), /^Symbol\(([^)]*)\)/, "$1") + "]"), O && O.getter && (x = "get " + x), O && O.setter && (x = "set " + x), (!s(N, "name") || o && N.name !== x) && (i ? h(N, "name", { value: x, configurable: !0 }) : N.name = x), c && O && s(O, "arity") && N.length !== O.arity && h(N, "length", { value: O.arity });
          try {
            O && s(O, "constructor") && O.constructor ? i && h(N, "prototype", { writable: !1 }) : N.prototype && (N.prototype = void 0);
          } catch {
          }
          var C = u(N);
          return s(C, "source") || (C.source = b(S, typeof x == "string" ? x : "")), N;
        };
        Function.prototype.toString = v(function() {
          return a(this) && m(this).source || n(this);
        }, "toString");
      }, 4758: function(p) {
        var R = Math.ceil, e = Math.floor;
        p.exports = Math.trunc || function(r) {
          var t = +r;
          return (t > 0 ? e : R)(t);
        };
      }, 5948: function(p, R, e) {
        var r, t, a, s, i, o = e(7854), n = e(9974), l = e(1236).f, u = e(261).set, m = e(8572), g = e(6833), h = e(1528), d = e(1036), f = e(5268), b = o.MutationObserver || o.WebKitMutationObserver, c = o.document, S = o.process, v = o.Promise, N = l(o, "queueMicrotask"), x = N && N.value;
        if (!x) {
          var O = new m(), C = function() {
            var E, P;
            for (f && (E = S.domain) && E.exit(); P = O.get(); )
              try {
                P();
              } catch (G) {
                throw O.head && r(), G;
              }
            E && E.enter();
          };
          g || f || d || !b || !c ? !h && v && v.resolve ? ((s = v.resolve(void 0)).constructor = v, i = n(s.then, s), r = function() {
            i(C);
          }) : f ? r = function() {
            S.nextTick(C);
          } : (u = n(u, o), r = function() {
            u(C);
          }) : (t = !0, a = c.createTextNode(""), new b(C).observe(a, { characterData: !0 }), r = function() {
            a.data = t = !t;
          }), x = function(E) {
            O.head || r(), O.add(E);
          };
        }
        p.exports = x;
      }, 8523: function(p, R, e) {
        var r = e(9662), t = TypeError, a = function(s) {
          var i, o;
          this.promise = new s(function(n, l) {
            if (i !== void 0 || o !== void 0)
              throw t("Bad Promise constructor");
            i = n, o = l;
          }), this.resolve = r(i), this.reject = r(o);
        };
        p.exports.f = function(s) {
          return new a(s);
        };
      }, 3929: function(p, R, e) {
        var r = e(7850), t = TypeError;
        p.exports = function(a) {
          if (r(a))
            throw t("The method doesn't accept regular expressions");
          return a;
        };
      }, 1574: function(p, R, e) {
        var r = e(9781), t = e(1702), a = e(6916), s = e(7293), i = e(1956), o = e(5181), n = e(5296), l = e(7908), u = e(8361), m = Object.assign, g = Object.defineProperty, h = t([].concat);
        p.exports = !m || s(function() {
          if (r && m({ b: 1 }, m(g({}, "a", { enumerable: !0, get: function() {
            g(this, "b", { value: 3, enumerable: !1 });
          } }), { b: 2 })).b !== 1)
            return !0;
          var d = {}, f = {}, b = Symbol(), c = "abcdefghijklmnopqrst";
          return d[b] = 7, c.split("").forEach(function(S) {
            f[S] = S;
          }), m({}, d)[b] != 7 || i(m({}, f)).join("") != c;
        }) ? function(d, f) {
          for (var b = l(d), c = arguments.length, S = 1, v = o.f, N = n.f; c > S; )
            for (var x, O = u(arguments[S++]), C = v ? h(i(O), v(O)) : i(O), E = C.length, P = 0; E > P; )
              x = C[P++], r && !a(N, O, x) || (b[x] = O[x]);
          return b;
        } : m;
      }, 30: function(p, R, e) {
        var r, t = e(9670), a = e(6048), s = e(748), i = e(3501), o = e(490), n = e(317), l = e(6200)("IE_PROTO"), u = function() {
        }, m = function(d) {
          return "<script>" + d + "<\/script>";
        }, g = function(d) {
          d.write(m("")), d.close();
          var f = d.parentWindow.Object;
          return d = null, f;
        }, h = function() {
          try {
            r = new ActiveXObject("htmlfile");
          } catch {
          }
          var d, f;
          h = typeof document < "u" ? document.domain && r ? g(r) : ((f = n("iframe")).style.display = "none", o.appendChild(f), f.src = "javascript:", (d = f.contentWindow.document).open(), d.write(m("document.F=Object")), d.close(), d.F) : g(r);
          for (var b = s.length; b--; )
            delete h.prototype[s[b]];
          return h();
        };
        i[l] = !0, p.exports = Object.create || function(d, f) {
          var b;
          return d !== null ? (u.prototype = t(d), b = new u(), u.prototype = null, b[l] = d) : b = h(), f === void 0 ? b : a.f(b, f);
        };
      }, 6048: function(p, R, e) {
        var r = e(9781), t = e(3353), a = e(3070), s = e(9670), i = e(5656), o = e(1956);
        R.f = r && !t ? Object.defineProperties : function(n, l) {
          s(n);
          for (var u, m = i(l), g = o(l), h = g.length, d = 0; h > d; )
            a.f(n, u = g[d++], m[u]);
          return n;
        };
      }, 3070: function(p, R, e) {
        var r = e(9781), t = e(4664), a = e(3353), s = e(9670), i = e(4948), o = TypeError, n = Object.defineProperty, l = Object.getOwnPropertyDescriptor;
        R.f = r ? a ? function(u, m, g) {
          if (s(u), m = i(m), s(g), typeof u == "function" && m === "prototype" && "value" in g && "writable" in g && !g.writable) {
            var h = l(u, m);
            h && h.writable && (u[m] = g.value, g = { configurable: "configurable" in g ? g.configurable : h.configurable, enumerable: "enumerable" in g ? g.enumerable : h.enumerable, writable: !1 });
          }
          return n(u, m, g);
        } : n : function(u, m, g) {
          if (s(u), m = i(m), s(g), t)
            try {
              return n(u, m, g);
            } catch {
            }
          if ("get" in g || "set" in g)
            throw o("Accessors not supported");
          return "value" in g && (u[m] = g.value), u;
        };
      }, 1236: function(p, R, e) {
        var r = e(9781), t = e(6916), a = e(5296), s = e(9114), i = e(5656), o = e(4948), n = e(2597), l = e(4664), u = Object.getOwnPropertyDescriptor;
        R.f = r ? u : function(m, g) {
          if (m = i(m), g = o(g), l)
            try {
              return u(m, g);
            } catch {
            }
          if (n(m, g))
            return s(!t(a.f, m, g), m[g]);
        };
      }, 1156: function(p, R, e) {
        var r = e(4326), t = e(5656), a = e(8006).f, s = e(1589), i = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        p.exports.f = function(o) {
          return i && r(o) == "Window" ? function(n) {
            try {
              return a(n);
            } catch {
              return s(i);
            }
          }(o) : a(t(o));
        };
      }, 8006: function(p, R, e) {
        var r = e(6324), t = e(748).concat("length", "prototype");
        R.f = Object.getOwnPropertyNames || function(a) {
          return r(a, t);
        };
      }, 5181: function(p, R) {
        R.f = Object.getOwnPropertySymbols;
      }, 9518: function(p, R, e) {
        var r = e(2597), t = e(614), a = e(7908), s = e(6200), i = e(8544), o = s("IE_PROTO"), n = Object, l = n.prototype;
        p.exports = i ? n.getPrototypeOf : function(u) {
          var m = a(u);
          if (r(m, o))
            return m[o];
          var g = m.constructor;
          return t(g) && m instanceof g ? g.prototype : m instanceof n ? l : null;
        };
      }, 2050: function(p, R, e) {
        var r = e(7293), t = e(111), a = e(4326), s = e(7556), i = Object.isExtensible, o = r(function() {
        });
        p.exports = o || s ? function(n) {
          return !!t(n) && (!s || a(n) != "ArrayBuffer") && (!i || i(n));
        } : i;
      }, 7976: function(p, R, e) {
        var r = e(1702);
        p.exports = r({}.isPrototypeOf);
      }, 6324: function(p, R, e) {
        var r = e(1702), t = e(2597), a = e(5656), s = e(1318).indexOf, i = e(3501), o = r([].push);
        p.exports = function(n, l) {
          var u, m = a(n), g = 0, h = [];
          for (u in m)
            !t(i, u) && t(m, u) && o(h, u);
          for (; l.length > g; )
            t(m, u = l[g++]) && (~s(h, u) || o(h, u));
          return h;
        };
      }, 1956: function(p, R, e) {
        var r = e(6324), t = e(748);
        p.exports = Object.keys || function(a) {
          return r(a, t);
        };
      }, 5296: function(p, R) {
        var e = {}.propertyIsEnumerable, r = Object.getOwnPropertyDescriptor, t = r && !e.call({ 1: 2 }, 1);
        R.f = t ? function(a) {
          var s = r(this, a);
          return !!s && s.enumerable;
        } : e;
      }, 7674: function(p, R, e) {
        var r = e(5668), t = e(9670), a = e(6077);
        p.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
          var s, i = !1, o = {};
          try {
            (s = r(Object.prototype, "__proto__", "set"))(o, []), i = o instanceof Array;
          } catch {
          }
          return function(n, l) {
            return t(n), a(l), i ? s(n, l) : n.__proto__ = l, n;
          };
        }() : void 0);
      }, 4699: function(p, R, e) {
        var r = e(9781), t = e(1702), a = e(1956), s = e(5656), i = t(e(5296).f), o = t([].push), n = function(l) {
          return function(u) {
            for (var m, g = s(u), h = a(g), d = h.length, f = 0, b = []; d > f; )
              m = h[f++], r && !i(g, m) || o(b, l ? [m, g[m]] : g[m]);
            return b;
          };
        };
        p.exports = { entries: n(!0), values: n(!1) };
      }, 288: function(p, R, e) {
        var r = e(1694), t = e(648);
        p.exports = r ? {}.toString : function() {
          return "[object " + t(this) + "]";
        };
      }, 2140: function(p, R, e) {
        var r = e(6916), t = e(614), a = e(111), s = TypeError;
        p.exports = function(i, o) {
          var n, l;
          if (o === "string" && t(n = i.toString) && !a(l = r(n, i)) || t(n = i.valueOf) && !a(l = r(n, i)) || o !== "string" && t(n = i.toString) && !a(l = r(n, i)))
            return l;
          throw s("Can't convert object to primitive value");
        };
      }, 3887: function(p, R, e) {
        var r = e(5005), t = e(1702), a = e(8006), s = e(5181), i = e(9670), o = t([].concat);
        p.exports = r("Reflect", "ownKeys") || function(n) {
          var l = a.f(i(n)), u = s.f;
          return u ? o(l, u(n)) : l;
        };
      }, 857: function(p, R, e) {
        var r = e(7854);
        p.exports = r;
      }, 2534: function(p) {
        p.exports = function(R) {
          try {
            return { error: !1, value: R() };
          } catch (e) {
            return { error: !0, value: e };
          }
        };
      }, 3702: function(p, R, e) {
        var r = e(7854), t = e(2492), a = e(614), s = e(4705), i = e(2788), o = e(5112), n = e(7871), l = e(3823), u = e(1913), m = e(7392), g = t && t.prototype, h = o("species"), d = !1, f = a(r.PromiseRejectionEvent), b = s("Promise", function() {
          var c = i(t), S = c !== String(t);
          if (!S && m === 66 || u && (!g.catch || !g.finally))
            return !0;
          if (!m || m < 51 || !/native code/.test(c)) {
            var v = new t(function(x) {
              x(1);
            }), N = function(x) {
              x(function() {
              }, function() {
              });
            };
            if ((v.constructor = {})[h] = N, !(d = v.then(function() {
            }) instanceof N))
              return !0;
          }
          return !S && (n || l) && !f;
        });
        p.exports = { CONSTRUCTOR: b, REJECTION_EVENT: f, SUBCLASSING: d };
      }, 2492: function(p, R, e) {
        var r = e(7854);
        p.exports = r.Promise;
      }, 9478: function(p, R, e) {
        var r = e(9670), t = e(111), a = e(8523);
        p.exports = function(s, i) {
          if (r(s), t(i) && i.constructor === s)
            return i;
          var o = a.f(s);
          return (0, o.resolve)(i), o.promise;
        };
      }, 612: function(p, R, e) {
        var r = e(2492), t = e(7072), a = e(3702).CONSTRUCTOR;
        p.exports = a || !t(function(s) {
          r.all(s).then(void 0, function() {
          });
        });
      }, 8572: function(p) {
        var R = function() {
          this.head = null, this.tail = null;
        };
        R.prototype = { add: function(e) {
          var r = { item: e, next: null }, t = this.tail;
          t ? t.next = r : this.head = r, this.tail = r;
        }, get: function() {
          var e = this.head;
          if (e)
            return (this.head = e.next) === null && (this.tail = null), e.item;
        } }, p.exports = R;
      }, 2261: function(p, R, e) {
        var r, t, a = e(6916), s = e(1702), i = e(1340), o = e(7066), n = e(2999), l = e(2309), u = e(30), m = e(9909).get, g = e(9441), h = e(7168), d = l("native-string-replace", String.prototype.replace), f = RegExp.prototype.exec, b = f, c = s("".charAt), S = s("".indexOf), v = s("".replace), N = s("".slice), x = (t = /b*/g, a(f, r = /a/, "a"), a(f, t, "a"), r.lastIndex !== 0 || t.lastIndex !== 0), O = n.BROKEN_CARET, C = /()??/.exec("")[1] !== void 0;
        (x || C || O || g || h) && (b = function(E) {
          var P, G, Z, F, Y, K, V, ne = this, ae = m(ne), se = i(E), ue = ae.raw;
          if (ue)
            return ue.lastIndex = ne.lastIndex, P = a(b, ue, se), ne.lastIndex = ue.lastIndex, P;
          var me = ae.groups, ge = O && ne.sticky, Ce = a(o, ne), Re = ne.source, Ie = 0, Oe = se;
          if (ge && (Ce = v(Ce, "y", ""), S(Ce, "g") === -1 && (Ce += "g"), Oe = N(se, ne.lastIndex), ne.lastIndex > 0 && (!ne.multiline || ne.multiline && c(se, ne.lastIndex - 1) !== `
`) && (Re = "(?: " + Re + ")", Oe = " " + Oe, Ie++), G = new RegExp("^(?:" + Re + ")", Ce)), C && (G = new RegExp("^" + Re + "$(?!\\s)", Ce)), x && (Z = ne.lastIndex), F = a(f, ge ? G : ne, Oe), ge ? F ? (F.input = N(F.input, Ie), F[0] = N(F[0], Ie), F.index = ne.lastIndex, ne.lastIndex += F[0].length) : ne.lastIndex = 0 : x && F && (ne.lastIndex = ne.global ? F.index + F[0].length : Z), C && F && F.length > 1 && a(d, F[0], G, function() {
            for (Y = 1; Y < arguments.length - 2; Y++)
              arguments[Y] === void 0 && (F[Y] = void 0);
          }), F && me)
            for (F.groups = K = u(null), Y = 0; Y < me.length; Y++)
              K[(V = me[Y])[0]] = F[V[1]];
          return F;
        }), p.exports = b;
      }, 7066: function(p, R, e) {
        var r = e(9670);
        p.exports = function() {
          var t = r(this), a = "";
          return t.hasIndices && (a += "d"), t.global && (a += "g"), t.ignoreCase && (a += "i"), t.multiline && (a += "m"), t.dotAll && (a += "s"), t.unicode && (a += "u"), t.unicodeSets && (a += "v"), t.sticky && (a += "y"), a;
        };
      }, 4706: function(p, R, e) {
        var r = e(6916), t = e(2597), a = e(7976), s = e(7066), i = RegExp.prototype;
        p.exports = function(o) {
          var n = o.flags;
          return n !== void 0 || "flags" in i || t(o, "flags") || !a(i, o) ? n : r(s, o);
        };
      }, 2999: function(p, R, e) {
        var r = e(7293), t = e(7854).RegExp, a = r(function() {
          var o = t("a", "y");
          return o.lastIndex = 2, o.exec("abcd") != null;
        }), s = a || r(function() {
          return !t("a", "y").sticky;
        }), i = a || r(function() {
          var o = t("^r", "gy");
          return o.lastIndex = 2, o.exec("str") != null;
        });
        p.exports = { BROKEN_CARET: i, MISSED_STICKY: s, UNSUPPORTED_Y: a };
      }, 9441: function(p, R, e) {
        var r = e(7293), t = e(7854).RegExp;
        p.exports = r(function() {
          var a = t(".", "s");
          return !(a.dotAll && a.exec(`
`) && a.flags === "s");
        });
      }, 7168: function(p, R, e) {
        var r = e(7293), t = e(7854).RegExp;
        p.exports = r(function() {
          var a = t("(?<a>b)", "g");
          return a.exec("b").groups.a !== "b" || "b".replace(a, "$<a>c") !== "bc";
        });
      }, 4488: function(p, R, e) {
        var r = e(8554), t = TypeError;
        p.exports = function(a) {
          if (r(a))
            throw t("Can't call method on " + a);
          return a;
        };
      }, 7152: function(p, R, e) {
        var r, t = e(7854), a = e(2104), s = e(614), i = e(9363), o = e(8113), n = e(206), l = e(8053), u = t.Function, m = /MSIE .\./.test(o) || i && ((r = t.Bun.version.split(".")).length < 3 || r[0] == 0 && (r[1] < 3 || r[1] == 3 && r[2] == 0));
        p.exports = function(g, h) {
          var d = h ? 2 : 1;
          return m ? function(f, b) {
            var c = l(arguments.length, 1) > d, S = s(f) ? f : u(f), v = c ? n(arguments, d) : [], N = c ? function() {
              a(S, this, v);
            } : S;
            return h ? g(N, b) : g(N);
          } : g;
        };
      }, 6340: function(p, R, e) {
        var r = e(5005), t = e(7045), a = e(5112), s = e(9781), i = a("species");
        p.exports = function(o) {
          var n = r(o);
          s && n && !n[i] && t(n, i, { configurable: !0, get: function() {
            return this;
          } });
        };
      }, 8003: function(p, R, e) {
        var r = e(3070).f, t = e(2597), a = e(5112)("toStringTag");
        p.exports = function(s, i, o) {
          s && !o && (s = s.prototype), s && !t(s, a) && r(s, a, { configurable: !0, value: i });
        };
      }, 6200: function(p, R, e) {
        var r = e(2309), t = e(9711), a = r("keys");
        p.exports = function(s) {
          return a[s] || (a[s] = t(s));
        };
      }, 5465: function(p, R, e) {
        var r = e(7854), t = e(3072), a = "__core-js_shared__", s = r[a] || t(a, {});
        p.exports = s;
      }, 2309: function(p, R, e) {
        var r = e(1913), t = e(5465);
        (p.exports = function(a, s) {
          return t[a] || (t[a] = s !== void 0 ? s : {});
        })("versions", []).push({ version: "3.29.1", mode: r ? "pure" : "global", copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.29.1/LICENSE", source: "https://github.com/zloirock/core-js" });
      }, 6707: function(p, R, e) {
        var r = e(9670), t = e(9483), a = e(8554), s = e(5112)("species");
        p.exports = function(i, o) {
          var n, l = r(i).constructor;
          return l === void 0 || a(n = r(l)[s]) ? o : t(n);
        };
      }, 8710: function(p, R, e) {
        var r = e(1702), t = e(9303), a = e(1340), s = e(4488), i = r("".charAt), o = r("".charCodeAt), n = r("".slice), l = function(u) {
          return function(m, g) {
            var h, d, f = a(s(m)), b = t(g), c = f.length;
            return b < 0 || b >= c ? u ? "" : void 0 : (h = o(f, b)) < 55296 || h > 56319 || b + 1 === c || (d = o(f, b + 1)) < 56320 || d > 57343 ? u ? i(f, b) : h : u ? n(f, b, b + 2) : d - 56320 + (h - 55296 << 10) + 65536;
          };
        };
        p.exports = { codeAt: l(!1), charAt: l(!0) };
      }, 3197: function(p, R, e) {
        var r = e(1702), t = 2147483647, a = /[^\0-\u007E]/, s = /[.\u3002\uFF0E\uFF61]/g, i = "Overflow: input needs wider integers to process", o = RangeError, n = r(s.exec), l = Math.floor, u = String.fromCharCode, m = r("".charCodeAt), g = r([].join), h = r([].push), d = r("".replace), f = r("".split), b = r("".toLowerCase), c = function(N) {
          return N + 22 + 75 * (N < 26);
        }, S = function(N, x, O) {
          var C = 0;
          for (N = O ? l(N / 700) : N >> 1, N += l(N / x); N > 455; )
            N = l(N / 35), C += 36;
          return l(C + 36 * N / (N + 38));
        }, v = function(N) {
          var x = [];
          N = function(ge) {
            for (var Ce = [], Re = 0, Ie = ge.length; Re < Ie; ) {
              var Oe = m(ge, Re++);
              if (Oe >= 55296 && Oe <= 56319 && Re < Ie) {
                var fe = m(ge, Re++);
                (64512 & fe) == 56320 ? h(Ce, ((1023 & Oe) << 10) + (1023 & fe) + 65536) : (h(Ce, Oe), Re--);
              } else
                h(Ce, Oe);
            }
            return Ce;
          }(N);
          var O, C, E = N.length, P = 128, G = 0, Z = 72;
          for (O = 0; O < N.length; O++)
            (C = N[O]) < 128 && h(x, u(C));
          var F = x.length, Y = F;
          for (F && h(x, "-"); Y < E; ) {
            var K = t;
            for (O = 0; O < N.length; O++)
              (C = N[O]) >= P && C < K && (K = C);
            var V = Y + 1;
            if (K - P > l((t - G) / V))
              throw o(i);
            for (G += (K - P) * V, P = K, O = 0; O < N.length; O++) {
              if ((C = N[O]) < P && ++G > t)
                throw o(i);
              if (C == P) {
                for (var ne = G, ae = 36; ; ) {
                  var se = ae <= Z ? 1 : ae >= Z + 26 ? 26 : ae - Z;
                  if (ne < se)
                    break;
                  var ue = ne - se, me = 36 - se;
                  h(x, u(c(se + ue % me))), ne = l(ue / me), ae += 36;
                }
                h(x, u(c(ne))), Z = S(G, V, Y == F), G = 0, Y++;
              }
            }
            G++, P++;
          }
          return g(x, "");
        };
        p.exports = function(N) {
          var x, O, C = [], E = f(d(b(N), s, "."), ".");
          for (x = 0; x < E.length; x++)
            O = E[x], h(C, n(a, O) ? "xn--" + v(O) : O);
          return g(C, ".");
        };
      }, 3111: function(p, R, e) {
        var r = e(1702), t = e(4488), a = e(1340), s = e(1361), i = r("".replace), o = RegExp("^[" + s + "]+"), n = RegExp("(^|[^" + s + "])[" + s + "]+$"), l = function(u) {
          return function(m) {
            var g = a(t(m));
            return 1 & u && (g = i(g, o, "")), 2 & u && (g = i(g, n, "$1")), g;
          };
        };
        p.exports = { start: l(1), end: l(2), trim: l(3) };
      }, 6293: function(p, R, e) {
        var r = e(7392), t = e(7293);
        p.exports = !!Object.getOwnPropertySymbols && !t(function() {
          var a = Symbol();
          return !String(a) || !(Object(a) instanceof Symbol) || !Symbol.sham && r && r < 41;
        });
      }, 6532: function(p, R, e) {
        var r = e(6916), t = e(5005), a = e(5112), s = e(8052);
        p.exports = function() {
          var i = t("Symbol"), o = i && i.prototype, n = o && o.valueOf, l = a("toPrimitive");
          o && !o[l] && s(o, l, function(u) {
            return r(n, this);
          }, { arity: 1 });
        };
      }, 2015: function(p, R, e) {
        var r = e(6293);
        p.exports = r && !!Symbol.for && !!Symbol.keyFor;
      }, 261: function(p, R, e) {
        var r, t, a, s, i = e(7854), o = e(2104), n = e(9974), l = e(614), u = e(2597), m = e(7293), g = e(490), h = e(206), d = e(317), f = e(8053), b = e(6833), c = e(5268), S = i.setImmediate, v = i.clearImmediate, N = i.process, x = i.Dispatch, O = i.Function, C = i.MessageChannel, E = i.String, P = 0, G = {};
        m(function() {
          r = i.location;
        });
        var Z = function(V) {
          if (u(G, V)) {
            var ne = G[V];
            delete G[V], ne();
          }
        }, F = function(V) {
          return function() {
            Z(V);
          };
        }, Y = function(V) {
          Z(V.data);
        }, K = function(V) {
          i.postMessage(E(V), r.protocol + "//" + r.host);
        };
        S && v || (S = function(V) {
          f(arguments.length, 1);
          var ne = l(V) ? V : O(V), ae = h(arguments, 1);
          return G[++P] = function() {
            o(ne, void 0, ae);
          }, t(P), P;
        }, v = function(V) {
          delete G[V];
        }, c ? t = function(V) {
          N.nextTick(F(V));
        } : x && x.now ? t = function(V) {
          x.now(F(V));
        } : C && !b ? (s = (a = new C()).port2, a.port1.onmessage = Y, t = n(s.postMessage, s)) : i.addEventListener && l(i.postMessage) && !i.importScripts && r && r.protocol !== "file:" && !m(K) ? (t = K, i.addEventListener("message", Y, !1)) : t = "onreadystatechange" in d("script") ? function(V) {
          g.appendChild(d("script")).onreadystatechange = function() {
            g.removeChild(this), Z(V);
          };
        } : function(V) {
          setTimeout(F(V), 0);
        }), p.exports = { set: S, clear: v };
      }, 863: function(p, R, e) {
        var r = e(1702);
        p.exports = r(1 .valueOf);
      }, 1400: function(p, R, e) {
        var r = e(9303), t = Math.max, a = Math.min;
        p.exports = function(s, i) {
          var o = r(s);
          return o < 0 ? t(o + i, 0) : a(o, i);
        };
      }, 4599: function(p, R, e) {
        var r = e(7593), t = TypeError;
        p.exports = function(a) {
          var s = r(a, "number");
          if (typeof s == "number")
            throw t("Can't convert number to bigint");
          return BigInt(s);
        };
      }, 7067: function(p, R, e) {
        var r = e(9303), t = e(7466), a = RangeError;
        p.exports = function(s) {
          if (s === void 0)
            return 0;
          var i = r(s), o = t(i);
          if (i !== o)
            throw a("Wrong length or index");
          return o;
        };
      }, 5656: function(p, R, e) {
        var r = e(8361), t = e(4488);
        p.exports = function(a) {
          return r(t(a));
        };
      }, 9303: function(p, R, e) {
        var r = e(4758);
        p.exports = function(t) {
          var a = +t;
          return a != a || a === 0 ? 0 : r(a);
        };
      }, 7466: function(p, R, e) {
        var r = e(9303), t = Math.min;
        p.exports = function(a) {
          return a > 0 ? t(r(a), 9007199254740991) : 0;
        };
      }, 7908: function(p, R, e) {
        var r = e(4488), t = Object;
        p.exports = function(a) {
          return t(r(a));
        };
      }, 4590: function(p, R, e) {
        var r = e(3002), t = RangeError;
        p.exports = function(a, s) {
          var i = r(a);
          if (i % s)
            throw t("Wrong offset");
          return i;
        };
      }, 3002: function(p, R, e) {
        var r = e(9303), t = RangeError;
        p.exports = function(a) {
          var s = r(a);
          if (s < 0)
            throw t("The argument can't be less than 0");
          return s;
        };
      }, 7593: function(p, R, e) {
        var r = e(6916), t = e(111), a = e(2190), s = e(8173), i = e(2140), o = e(5112), n = TypeError, l = o("toPrimitive");
        p.exports = function(u, m) {
          if (!t(u) || a(u))
            return u;
          var g, h = s(u, l);
          if (h) {
            if (m === void 0 && (m = "default"), g = r(h, u, m), !t(g) || a(g))
              return g;
            throw n("Can't convert object to primitive value");
          }
          return m === void 0 && (m = "number"), i(u, m);
        };
      }, 4948: function(p, R, e) {
        var r = e(7593), t = e(2190);
        p.exports = function(a) {
          var s = r(a, "string");
          return t(s) ? s : s + "";
        };
      }, 1694: function(p, R, e) {
        var r = {};
        r[e(5112)("toStringTag")] = "z", p.exports = String(r) === "[object z]";
      }, 1340: function(p, R, e) {
        var r = e(648), t = String;
        p.exports = function(a) {
          if (r(a) === "Symbol")
            throw TypeError("Cannot convert a Symbol value to a string");
          return t(a);
        };
      }, 6330: function(p) {
        var R = String;
        p.exports = function(e) {
          try {
            return R(e);
          } catch {
            return "Object";
          }
        };
      }, 9843: function(p, R, e) {
        var r = e(2109), t = e(7854), a = e(6916), s = e(9781), i = e(3832), o = e(260), n = e(3331), l = e(5787), u = e(9114), m = e(8880), g = e(5988), h = e(7466), d = e(7067), f = e(4590), b = e(4948), c = e(2597), S = e(648), v = e(111), N = e(2190), x = e(30), O = e(7976), C = e(7674), E = e(8006).f, P = e(7321), G = e(2092).forEach, Z = e(6340), F = e(7045), Y = e(3070), K = e(1236), V = e(9909), ne = e(9587), ae = V.get, se = V.set, ue = V.enforce, me = Y.f, ge = K.f, Ce = Math.round, Re = t.RangeError, Ie = n.ArrayBuffer, Oe = Ie.prototype, fe = n.DataView, ce = o.NATIVE_ARRAY_BUFFER_VIEWS, Ue = o.TYPED_ARRAY_TAG, Ke = o.TypedArray, $e = o.TypedArrayPrototype, Ve = o.aTypedArrayConstructor, Be = o.isTypedArray, Ze = "BYTES_PER_ELEMENT", Qe = "Wrong length", Pe = function(Ne, j) {
          Ve(Ne);
          for (var B = 0, T = j.length, W = new Ne(T); T > B; )
            W[B] = j[B++];
          return W;
        }, Le = function(Ne, j) {
          F(Ne, j, { configurable: !0, get: function() {
            return ae(this)[j];
          } });
        }, xe = function(Ne) {
          var j;
          return O(Oe, Ne) || (j = S(Ne)) == "ArrayBuffer" || j == "SharedArrayBuffer";
        }, ve = function(Ne, j) {
          return Be(Ne) && !N(j) && j in Ne && g(+j) && j >= 0;
        }, we = function(Ne, j) {
          return j = b(j), ve(Ne, j) ? u(2, Ne[j]) : ge(Ne, j);
        }, ke = function(Ne, j, B) {
          return j = b(j), !(ve(Ne, j) && v(B) && c(B, "value")) || c(B, "get") || c(B, "set") || B.configurable || c(B, "writable") && !B.writable || c(B, "enumerable") && !B.enumerable ? me(Ne, j, B) : (Ne[j] = B.value, Ne);
        };
        s ? (ce || (K.f = we, Y.f = ke, Le($e, "buffer"), Le($e, "byteOffset"), Le($e, "byteLength"), Le($e, "length")), r({ target: "Object", stat: !0, forced: !ce }, { getOwnPropertyDescriptor: we, defineProperty: ke }), p.exports = function(Ne, j, B) {
          var T = Ne.match(/\d+/)[0] / 8, W = Ne + (B ? "Clamped" : "") + "Array", _ = "get" + Ne, A = "set" + Ne, L = t[W], w = L, k = w && w.prototype, y = {}, I = function(M, D) {
            me(M, D, { get: function() {
              return function(J, X) {
                var oe = ae(J);
                return oe.view[_](X * T + oe.byteOffset, !0);
              }(this, D);
            }, set: function(J) {
              return function(X, oe, q) {
                var z = ae(X);
                B && (q = (q = Ce(q)) < 0 ? 0 : q > 255 ? 255 : 255 & q), z.view[A](oe * T + z.byteOffset, q, !0);
              }(this, D, J);
            }, enumerable: !0 });
          };
          ce ? i && (w = j(function(M, D, J, X) {
            return l(M, k), ne(v(D) ? xe(D) ? X !== void 0 ? new L(D, f(J, T), X) : J !== void 0 ? new L(D, f(J, T)) : new L(D) : Be(D) ? Pe(w, D) : a(P, w, D) : new L(d(D)), M, w);
          }), C && C(w, Ke), G(E(L), function(M) {
            M in w || m(w, M, L[M]);
          }), w.prototype = k) : (w = j(function(M, D, J, X) {
            l(M, k);
            var oe, q, z, te = 0, re = 0;
            if (v(D)) {
              if (!xe(D))
                return Be(D) ? Pe(w, D) : a(P, w, D);
              oe = D, re = f(J, T);
              var Ae = D.byteLength;
              if (X === void 0) {
                if (Ae % T || (q = Ae - re) < 0)
                  throw Re(Qe);
              } else if ((q = h(X) * T) + re > Ae)
                throw Re(Qe);
              z = q / T;
            } else
              z = d(D), oe = new Ie(q = z * T);
            for (se(M, { buffer: oe, byteOffset: re, byteLength: q, length: z, view: new fe(oe) }); te < z; )
              I(M, te++);
          }), C && C(w, Ke), k = w.prototype = x($e)), k.constructor !== w && m(k, "constructor", w), ue(k).TypedArrayConstructor = w, Ue && m(k, Ue, W);
          var H = w != L;
          y[W] = w, r({ global: !0, constructor: !0, forced: H, sham: !ce }, y), Ze in w || m(w, Ze, T), Ze in k || m(k, Ze, T), Z(W);
        }) : p.exports = function() {
        };
      }, 3832: function(p, R, e) {
        var r = e(7854), t = e(7293), a = e(7072), s = e(260).NATIVE_ARRAY_BUFFER_VIEWS, i = r.ArrayBuffer, o = r.Int8Array;
        p.exports = !s || !t(function() {
          o(1);
        }) || !t(function() {
          new o(-1);
        }) || !a(function(n) {
          new o(), new o(null), new o(1.5), new o(n);
        }, !0) || t(function() {
          return new o(new i(2), 1, void 0).length !== 1;
        });
      }, 3074: function(p, R, e) {
        var r = e(7745), t = e(6304);
        p.exports = function(a, s) {
          return r(t(a), s);
        };
      }, 7321: function(p, R, e) {
        var r = e(9974), t = e(6916), a = e(9483), s = e(7908), i = e(6244), o = e(4121), n = e(1246), l = e(7659), u = e(4067), m = e(260).aTypedArrayConstructor, g = e(4599);
        p.exports = function(h) {
          var d, f, b, c, S, v, N, x, O = a(this), C = s(h), E = arguments.length, P = E > 1 ? arguments[1] : void 0, G = P !== void 0, Z = n(C);
          if (Z && !l(Z))
            for (x = (N = o(C, Z)).next, C = []; !(v = t(x, N)).done; )
              C.push(v.value);
          for (G && E > 2 && (P = r(P, arguments[2])), f = i(C), b = new (m(O))(f), c = u(b), d = 0; f > d; d++)
            S = G ? P(C[d], d) : C[d], b[d] = c ? g(S) : +S;
          return b;
        };
      }, 6304: function(p, R, e) {
        var r = e(260), t = e(6707), a = r.aTypedArrayConstructor, s = r.getTypedArrayConstructor;
        p.exports = function(i) {
          return a(t(i, s(i)));
        };
      }, 9711: function(p, R, e) {
        var r = e(1702), t = 0, a = Math.random(), s = r(1 .toString);
        p.exports = function(i) {
          return "Symbol(" + (i === void 0 ? "" : i) + ")_" + s(++t + a, 36);
        };
      }, 5143: function(p, R, e) {
        var r = e(7293), t = e(5112), a = e(9781), s = e(1913), i = t("iterator");
        p.exports = !r(function() {
          var o = new URL("b?a=1&b=2&c=3", "http://a"), n = o.searchParams, l = "";
          return o.pathname = "c%20d", n.forEach(function(u, m) {
            n.delete("b"), l += m + u;
          }), s && !o.toJSON || !n.size && (s || !a) || !n.sort || o.href !== "http://a/c%20d?a=1&c=3" || n.get("c") !== "3" || String(new URLSearchParams("?a=1")) !== "a=1" || !n[i] || new URL("https://a@b").username !== "a" || new URLSearchParams(new URLSearchParams("a=b")).get("a") !== "b" || new URL("http://тест").host !== "xn--e1aybc" || new URL("http://a#б").hash !== "#%D0%B1" || l !== "a1c3" || new URL("http://x", void 0).host !== "x";
        });
      }, 3307: function(p, R, e) {
        var r = e(6293);
        p.exports = r && !Symbol.sham && typeof Symbol.iterator == "symbol";
      }, 3353: function(p, R, e) {
        var r = e(9781), t = e(7293);
        p.exports = r && t(function() {
          return Object.defineProperty(function() {
          }, "prototype", { value: 42, writable: !1 }).prototype != 42;
        });
      }, 8053: function(p) {
        var R = TypeError;
        p.exports = function(e, r) {
          if (e < r)
            throw R("Not enough arguments");
          return e;
        };
      }, 4811: function(p, R, e) {
        var r = e(7854), t = e(614), a = r.WeakMap;
        p.exports = t(a) && /native code/.test(String(a));
      }, 6800: function(p, R, e) {
        var r = e(857), t = e(2597), a = e(6061), s = e(3070).f;
        p.exports = function(i) {
          var o = r.Symbol || (r.Symbol = {});
          t(o, i) || s(o, i, { value: a.f(i) });
        };
      }, 6061: function(p, R, e) {
        var r = e(5112);
        R.f = r;
      }, 5112: function(p, R, e) {
        var r = e(7854), t = e(2309), a = e(2597), s = e(9711), i = e(6293), o = e(3307), n = r.Symbol, l = t("wks"), u = o ? n.for || n : n && n.withoutSetter || s;
        p.exports = function(m) {
          return a(l, m) || (l[m] = i && a(n, m) ? n[m] : u("Symbol." + m)), l[m];
        };
      }, 1361: function(p) {
        p.exports = `	
\v\f\r                　\u2028\u2029\uFEFF`;
      }, 8264: function(p, R, e) {
        var r = e(2109), t = e(7854), a = e(3331), s = e(6340), i = a.ArrayBuffer;
        r({ global: !0, constructor: !0, forced: t.ArrayBuffer !== i }, { ArrayBuffer: i }), s("ArrayBuffer");
      }, 9575: function(p, R, e) {
        var r = e(2109), t = e(1470), a = e(7293), s = e(3331), i = e(9670), o = e(1400), n = e(7466), l = e(6707), u = s.ArrayBuffer, m = s.DataView, g = m.prototype, h = t(u.prototype.slice), d = t(g.getUint8), f = t(g.setUint8);
        r({ target: "ArrayBuffer", proto: !0, unsafe: !0, forced: a(function() {
          return !new u(2).slice(1, void 0).byteLength;
        }) }, { slice: function(b, c) {
          if (h && c === void 0)
            return h(i(this), b);
          for (var S = i(this).byteLength, v = o(b, S), N = o(c === void 0 ? S : c, S), x = new (l(this, u))(n(N - v)), O = new m(this), C = new m(x), E = 0; v < N; )
            f(C, E++, d(O, v++));
          return x;
        } });
      }, 2222: function(p, R, e) {
        var r = e(2109), t = e(7293), a = e(3157), s = e(111), i = e(7908), o = e(6244), n = e(7207), l = e(6135), u = e(5417), m = e(1194), g = e(5112), h = e(7392), d = g("isConcatSpreadable"), f = h >= 51 || !t(function() {
          var c = [];
          return c[d] = !1, c.concat()[0] !== c;
        }), b = function(c) {
          if (!s(c))
            return !1;
          var S = c[d];
          return S !== void 0 ? !!S : a(c);
        };
        r({ target: "Array", proto: !0, arity: 1, forced: !f || !m("concat") }, { concat: function(c) {
          var S, v, N, x, O, C = i(this), E = u(C, 0), P = 0;
          for (S = -1, N = arguments.length; S < N; S++)
            if (b(O = S === -1 ? C : arguments[S]))
              for (x = o(O), n(P + x), v = 0; v < x; v++, P++)
                v in O && l(E, P, O[v]);
            else
              n(P + 1), l(E, P++, O);
          return E.length = P, E;
        } });
      }, 7327: function(p, R, e) {
        var r = e(2109), t = e(2092).filter;
        r({ target: "Array", proto: !0, forced: !e(1194)("filter") }, { filter: function(a) {
          return t(this, a, arguments.length > 1 ? arguments[1] : void 0);
        } });
      }, 9554: function(p, R, e) {
        var r = e(2109), t = e(8533);
        r({ target: "Array", proto: !0, forced: [].forEach != t }, { forEach: t });
      }, 1038: function(p, R, e) {
        var r = e(2109), t = e(8457);
        r({ target: "Array", stat: !0, forced: !e(7072)(function(a) {
          Array.from(a);
        }) }, { from: t });
      }, 6699: function(p, R, e) {
        var r = e(2109), t = e(1318).includes, a = e(7293), s = e(1223);
        r({ target: "Array", proto: !0, forced: a(function() {
          return !Array(1).includes();
        }) }, { includes: function(i) {
          return t(this, i, arguments.length > 1 ? arguments[1] : void 0);
        } }), s("includes");
      }, 2772: function(p, R, e) {
        var r = e(2109), t = e(1470), a = e(1318).indexOf, s = e(9341), i = t([].indexOf), o = !!i && 1 / i([1], 1, -0) < 0;
        r({ target: "Array", proto: !0, forced: o || !s("indexOf") }, { indexOf: function(n) {
          var l = arguments.length > 1 ? arguments[1] : void 0;
          return o ? i(this, n, l) || 0 : a(this, n, l);
        } });
      }, 9753: function(p, R, e) {
        e(2109)({ target: "Array", stat: !0 }, { isArray: e(3157) });
      }, 6992: function(p, R, e) {
        var r = e(5656), t = e(1223), a = e(7497), s = e(9909), i = e(3070).f, o = e(1656), n = e(6178), l = e(1913), u = e(9781), m = "Array Iterator", g = s.set, h = s.getterFor(m);
        p.exports = o(Array, "Array", function(f, b) {
          g(this, { type: m, target: r(f), index: 0, kind: b });
        }, function() {
          var f = h(this), b = f.target, c = f.kind, S = f.index++;
          return !b || S >= b.length ? (f.target = void 0, n(void 0, !0)) : n(c == "keys" ? S : c == "values" ? b[S] : [S, b[S]], !1);
        }, "values");
        var d = a.Arguments = a.Array;
        if (t("keys"), t("values"), t("entries"), !l && u && d.name !== "values")
          try {
            i(d, "name", { value: "values" });
          } catch {
          }
      }, 9600: function(p, R, e) {
        var r = e(2109), t = e(1702), a = e(8361), s = e(5656), i = e(9341), o = t([].join);
        r({ target: "Array", proto: !0, forced: a != Object || !i("join", ",") }, { join: function(n) {
          return o(s(this), n === void 0 ? "," : n);
        } });
      }, 4986: function(p, R, e) {
        var r = e(2109), t = e(6583);
        r({ target: "Array", proto: !0, forced: t !== [].lastIndexOf }, { lastIndexOf: t });
      }, 1249: function(p, R, e) {
        var r = e(2109), t = e(2092).map;
        r({ target: "Array", proto: !0, forced: !e(1194)("map") }, { map: function(a) {
          return t(this, a, arguments.length > 1 ? arguments[1] : void 0);
        } });
      }, 5827: function(p, R, e) {
        var r = e(2109), t = e(3671).left, a = e(9341), s = e(7392);
        r({ target: "Array", proto: !0, forced: !e(5268) && s > 79 && s < 83 || !a("reduce") }, { reduce: function(i) {
          var o = arguments.length;
          return t(this, i, o, o > 1 ? arguments[1] : void 0);
        } });
      }, 5069: function(p, R, e) {
        var r = e(2109), t = e(1702), a = e(3157), s = t([].reverse), i = [1, 2];
        r({ target: "Array", proto: !0, forced: String(i) === String(i.reverse()) }, { reverse: function() {
          return a(this) && (this.length = this.length), s(this);
        } });
      }, 7042: function(p, R, e) {
        var r = e(2109), t = e(3157), a = e(4411), s = e(111), i = e(1400), o = e(6244), n = e(5656), l = e(6135), u = e(5112), m = e(1194), g = e(206), h = m("slice"), d = u("species"), f = Array, b = Math.max;
        r({ target: "Array", proto: !0, forced: !h }, { slice: function(c, S) {
          var v, N, x, O = n(this), C = o(O), E = i(c, C), P = i(S === void 0 ? C : S, C);
          if (t(O) && (v = O.constructor, (a(v) && (v === f || t(v.prototype)) || s(v) && (v = v[d]) === null) && (v = void 0), v === f || v === void 0))
            return g(O, E, P);
          for (N = new (v === void 0 ? f : v)(b(P - E, 0)), x = 0; E < P; E++, x++)
            E in O && l(N, x, O[E]);
          return N.length = x, N;
        } });
      }, 5212: function(p, R, e) {
        var r = e(2109), t = e(2092).some;
        r({ target: "Array", proto: !0, forced: !e(9341)("some") }, { some: function(a) {
          return t(this, a, arguments.length > 1 ? arguments[1] : void 0);
        } });
      }, 561: function(p, R, e) {
        var r = e(2109), t = e(7908), a = e(1400), s = e(9303), i = e(6244), o = e(3658), n = e(7207), l = e(5417), u = e(6135), m = e(5117), g = e(1194)("splice"), h = Math.max, d = Math.min;
        r({ target: "Array", proto: !0, forced: !g }, { splice: function(f, b) {
          var c, S, v, N, x, O, C = t(this), E = i(C), P = a(f, E), G = arguments.length;
          for (G === 0 ? c = S = 0 : G === 1 ? (c = 0, S = E - P) : (c = G - 2, S = d(h(s(b), 0), E - P)), n(E + c - S), v = l(C, S), N = 0; N < S; N++)
            (x = P + N) in C && u(v, N, C[x]);
          if (v.length = S, c < S) {
            for (N = P; N < E - S; N++)
              O = N + c, (x = N + S) in C ? C[O] = C[x] : m(C, O);
            for (N = E; N > E - S + c; N--)
              m(C, N - 1);
          } else if (c > S)
            for (N = E - S; N > P; N--)
              O = N + c - 1, (x = N + S - 1) in C ? C[O] = C[x] : m(C, O);
          for (N = 0; N < c; N++)
            C[N + P] = arguments[N + 2];
          return o(C, E - S + c), v;
        } });
      }, 3843: function(p, R, e) {
        var r = e(2109), t = e(1702), a = Date, s = t(a.prototype.getTime);
        r({ target: "Date", stat: !0 }, { now: function() {
          return s(new a());
        } });
      }, 3710: function(p, R, e) {
        var r = e(1702), t = e(8052), a = Date.prototype, s = "Invalid Date", i = r(a.toString), o = r(a.getTime);
        String(/* @__PURE__ */ new Date(NaN)) != s && t(a, "toString", function() {
          var n = o(this);
          return n == n ? i(this) : s;
        });
      }, 4812: function(p, R, e) {
        var r = e(2109), t = e(7065);
        r({ target: "Function", proto: !0, forced: Function.bind !== t }, { bind: t });
      }, 8309: function(p, R, e) {
        var r = e(9781), t = e(6530).EXISTS, a = e(1702), s = e(7045), i = Function.prototype, o = a(i.toString), n = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/, l = a(n.exec);
        r && !t && s(i, "name", { configurable: !0, get: function() {
          try {
            return l(n, o(this))[1];
          } catch {
            return "";
          }
        } });
      }, 8862: function(p, R, e) {
        var r = e(2109), t = e(5005), a = e(2104), s = e(6916), i = e(1702), o = e(7293), n = e(614), l = e(2190), u = e(206), m = e(8044), g = e(6293), h = String, d = t("JSON", "stringify"), f = i(/./.exec), b = i("".charAt), c = i("".charCodeAt), S = i("".replace), v = i(1 .toString), N = /[\uD800-\uDFFF]/g, x = /^[\uD800-\uDBFF]$/, O = /^[\uDC00-\uDFFF]$/, C = !g || o(function() {
          var Z = t("Symbol")();
          return d([Z]) != "[null]" || d({ a: Z }) != "{}" || d(Object(Z)) != "{}";
        }), E = o(function() {
          return d("\uDF06\uD834") !== '"\\udf06\\ud834"' || d("\uDEAD") !== '"\\udead"';
        }), P = function(Z, F) {
          var Y = u(arguments), K = m(F);
          if (n(K) || Z !== void 0 && !l(Z))
            return Y[1] = function(V, ne) {
              if (n(K) && (ne = s(K, this, h(V), ne)), !l(ne))
                return ne;
            }, a(d, null, Y);
        }, G = function(Z, F, Y) {
          var K = b(Y, F - 1), V = b(Y, F + 1);
          return f(x, Z) && !f(O, V) || f(O, Z) && !f(x, K) ? "\\u" + v(c(Z, 0), 16) : Z;
        };
        d && r({ target: "JSON", stat: !0, arity: 3, forced: C || E }, { stringify: function(Z, F, Y) {
          var K = u(arguments), V = a(C ? P : d, null, K);
          return E && typeof V == "string" ? S(V, N, G) : V;
        } });
      }, 9098: function(p, R, e) {
        e(7710)("Map", function(r) {
          return function() {
            return r(this, arguments.length ? arguments[0] : void 0);
          };
        }, e(5631));
      }, 1532: function(p, R, e) {
        e(9098);
      }, 9653: function(p, R, e) {
        var r = e(2109), t = e(1913), a = e(9781), s = e(7854), i = e(857), o = e(1702), n = e(4705), l = e(2597), u = e(9587), m = e(7976), g = e(2190), h = e(7593), d = e(7293), f = e(8006).f, b = e(1236).f, c = e(3070).f, S = e(863), v = e(3111).trim, N = s.Number, x = i.Number, O = N.prototype, C = s.TypeError, E = o("".slice), P = o("".charCodeAt), G = function(ne) {
          var ae = h(ne, "number");
          return typeof ae == "bigint" ? ae : Z(ae);
        }, Z = function(ne) {
          var ae, se, ue, me, ge, Ce, Re, Ie, Oe = h(ne, "number");
          if (g(Oe))
            throw C("Cannot convert a Symbol value to a number");
          if (typeof Oe == "string" && Oe.length > 2) {
            if (Oe = v(Oe), (ae = P(Oe, 0)) === 43 || ae === 45) {
              if ((se = P(Oe, 2)) === 88 || se === 120)
                return NaN;
            } else if (ae === 48) {
              switch (P(Oe, 1)) {
                case 66:
                case 98:
                  ue = 2, me = 49;
                  break;
                case 79:
                case 111:
                  ue = 8, me = 55;
                  break;
                default:
                  return +Oe;
              }
              for (Ce = (ge = E(Oe, 2)).length, Re = 0; Re < Ce; Re++)
                if ((Ie = P(ge, Re)) < 48 || Ie > me)
                  return NaN;
              return parseInt(ge, ue);
            }
          }
          return +Oe;
        }, F = n("Number", !N(" 0o1") || !N("0b1") || N("+0x1")), Y = function(ne) {
          return m(O, ne) && d(function() {
            S(ne);
          });
        }, K = function(ne) {
          var ae = arguments.length < 1 ? 0 : N(G(ne));
          return Y(this) ? u(Object(ae), this, K) : ae;
        };
        K.prototype = O, F && !t && (O.constructor = K), r({ global: !0, constructor: !0, wrap: !0, forced: F }, { Number: K });
        var V = function(ne, ae) {
          for (var se, ue = a ? f(ae) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), me = 0; ue.length > me; me++)
            l(ae, se = ue[me]) && !l(ne, se) && c(ne, se, b(ae, se));
        };
        t && x && V(i.Number, x), (F || t) && V(i.Number, N);
      }, 3161: function(p, R, e) {
        e(2109)({ target: "Number", stat: !0 }, { isInteger: e(5988) });
      }, 9601: function(p, R, e) {
        var r = e(2109), t = e(1574);
        r({ target: "Object", stat: !0, arity: 2, forced: Object.assign !== t }, { assign: t });
      }, 9070: function(p, R, e) {
        var r = e(2109), t = e(9781), a = e(3070).f;
        r({ target: "Object", stat: !0, forced: Object.defineProperty !== a, sham: !t }, { defineProperty: a });
      }, 9720: function(p, R, e) {
        var r = e(2109), t = e(4699).entries;
        r({ target: "Object", stat: !0 }, { entries: function(a) {
          return t(a);
        } });
      }, 9660: function(p, R, e) {
        var r = e(2109), t = e(6293), a = e(7293), s = e(5181), i = e(7908);
        r({ target: "Object", stat: !0, forced: !t || a(function() {
          s.f(1);
        }) }, { getOwnPropertySymbols: function(o) {
          var n = s.f;
          return n ? n(i(o)) : [];
        } });
      }, 7941: function(p, R, e) {
        var r = e(2109), t = e(7908), a = e(1956);
        r({ target: "Object", stat: !0, forced: e(7293)(function() {
          a(1);
        }) }, { keys: function(s) {
          return a(t(s));
        } });
      }, 1539: function(p, R, e) {
        var r = e(1694), t = e(8052), a = e(288);
        r || t(Object.prototype, "toString", a, { unsafe: !0 });
      }, 821: function(p, R, e) {
        var r = e(2109), t = e(6916), a = e(9662), s = e(8523), i = e(2534), o = e(408);
        r({ target: "Promise", stat: !0, forced: e(612) }, { all: function(n) {
          var l = this, u = s.f(l), m = u.resolve, g = u.reject, h = i(function() {
            var d = a(l.resolve), f = [], b = 0, c = 1;
            o(n, function(S) {
              var v = b++, N = !1;
              c++, t(d, l, S).then(function(x) {
                N || (N = !0, f[v] = x, --c || m(f));
              }, g);
            }), --c || m(f);
          });
          return h.error && g(h.value), u.promise;
        } });
      }, 4164: function(p, R, e) {
        var r = e(2109), t = e(1913), a = e(3702).CONSTRUCTOR, s = e(2492), i = e(5005), o = e(614), n = e(8052), l = s && s.prototype;
        if (r({ target: "Promise", proto: !0, forced: a, real: !0 }, { catch: function(m) {
          return this.then(void 0, m);
        } }), !t && o(s)) {
          var u = i("Promise").prototype.catch;
          l.catch !== u && n(l, "catch", u, { unsafe: !0 });
        }
      }, 3401: function(p, R, e) {
        var r, t, a, s = e(2109), i = e(1913), o = e(5268), n = e(7854), l = e(6916), u = e(8052), m = e(7674), g = e(8003), h = e(6340), d = e(9662), f = e(614), b = e(111), c = e(5787), S = e(6707), v = e(261).set, N = e(5948), x = e(842), O = e(2534), C = e(8572), E = e(9909), P = e(2492), G = e(3702), Z = e(8523), F = "Promise", Y = G.CONSTRUCTOR, K = G.REJECTION_EVENT, V = G.SUBCLASSING, ne = E.getterFor(F), ae = E.set, se = P && P.prototype, ue = P, me = se, ge = n.TypeError, Ce = n.document, Re = n.process, Ie = Z.f, Oe = Ie, fe = !!(Ce && Ce.createEvent && n.dispatchEvent), ce = "unhandledrejection", Ue = function(ve) {
          var we;
          return !(!b(ve) || !f(we = ve.then)) && we;
        }, Ke = function(ve, we) {
          var ke, Ne, j, B = we.value, T = we.state == 1, W = T ? ve.ok : ve.fail, _ = ve.resolve, A = ve.reject, L = ve.domain;
          try {
            W ? (T || (we.rejection === 2 && Qe(we), we.rejection = 1), W === !0 ? ke = B : (L && L.enter(), ke = W(B), L && (L.exit(), j = !0)), ke === ve.promise ? A(ge("Promise-chain cycle")) : (Ne = Ue(ke)) ? l(Ne, ke, _, A) : _(ke)) : A(B);
          } catch (w) {
            L && !j && L.exit(), A(w);
          }
        }, $e = function(ve, we) {
          ve.notified || (ve.notified = !0, N(function() {
            for (var ke, Ne = ve.reactions; ke = Ne.get(); )
              Ke(ke, ve);
            ve.notified = !1, we && !ve.rejection && Be(ve);
          }));
        }, Ve = function(ve, we, ke) {
          var Ne, j;
          fe ? ((Ne = Ce.createEvent("Event")).promise = we, Ne.reason = ke, Ne.initEvent(ve, !1, !0), n.dispatchEvent(Ne)) : Ne = { promise: we, reason: ke }, !K && (j = n["on" + ve]) ? j(Ne) : ve === ce && x("Unhandled promise rejection", ke);
        }, Be = function(ve) {
          l(v, n, function() {
            var we, ke = ve.facade, Ne = ve.value;
            if (Ze(ve) && (we = O(function() {
              o ? Re.emit("unhandledRejection", Ne, ke) : Ve(ce, ke, Ne);
            }), ve.rejection = o || Ze(ve) ? 2 : 1, we.error))
              throw we.value;
          });
        }, Ze = function(ve) {
          return ve.rejection !== 1 && !ve.parent;
        }, Qe = function(ve) {
          l(v, n, function() {
            var we = ve.facade;
            o ? Re.emit("rejectionHandled", we) : Ve("rejectionhandled", we, ve.value);
          });
        }, Pe = function(ve, we, ke) {
          return function(Ne) {
            ve(we, Ne, ke);
          };
        }, Le = function(ve, we, ke) {
          ve.done || (ve.done = !0, ke && (ve = ke), ve.value = we, ve.state = 2, $e(ve, !0));
        }, xe = function(ve, we, ke) {
          if (!ve.done) {
            ve.done = !0, ke && (ve = ke);
            try {
              if (ve.facade === we)
                throw ge("Promise can't be resolved itself");
              var Ne = Ue(we);
              Ne ? N(function() {
                var j = { done: !1 };
                try {
                  l(Ne, we, Pe(xe, j, ve), Pe(Le, j, ve));
                } catch (B) {
                  Le(j, B, ve);
                }
              }) : (ve.value = we, ve.state = 1, $e(ve, !1));
            } catch (j) {
              Le({ done: !1 }, j, ve);
            }
          }
        };
        if (Y && (me = (ue = function(ve) {
          c(this, me), d(ve), l(r, this);
          var we = ne(this);
          try {
            ve(Pe(xe, we), Pe(Le, we));
          } catch (ke) {
            Le(we, ke);
          }
        }).prototype, (r = function(ve) {
          ae(this, { type: F, done: !1, notified: !1, parent: !1, reactions: new C(), rejection: !1, state: 0, value: void 0 });
        }).prototype = u(me, "then", function(ve, we) {
          var ke = ne(this), Ne = Ie(S(this, ue));
          return ke.parent = !0, Ne.ok = !f(ve) || ve, Ne.fail = f(we) && we, Ne.domain = o ? Re.domain : void 0, ke.state == 0 ? ke.reactions.add(Ne) : N(function() {
            Ke(Ne, ke);
          }), Ne.promise;
        }), t = function() {
          var ve = new r(), we = ne(ve);
          this.promise = ve, this.resolve = Pe(xe, we), this.reject = Pe(Le, we);
        }, Z.f = Ie = function(ve) {
          return ve === ue || ve === void 0 ? new t(ve) : Oe(ve);
        }, !i && f(P) && se !== Object.prototype)) {
          a = se.then, V || u(se, "then", function(ve, we) {
            var ke = this;
            return new ue(function(Ne, j) {
              l(a, ke, Ne, j);
            }).then(ve, we);
          }, { unsafe: !0 });
          try {
            delete se.constructor;
          } catch {
          }
          m && m(se, me);
        }
        s({ global: !0, constructor: !0, wrap: !0, forced: Y }, { Promise: ue }), g(ue, F, !1, !0), h(F);
      }, 8674: function(p, R, e) {
        e(3401), e(821), e(4164), e(6027), e(683), e(6294);
      }, 6027: function(p, R, e) {
        var r = e(2109), t = e(6916), a = e(9662), s = e(8523), i = e(2534), o = e(408);
        r({ target: "Promise", stat: !0, forced: e(612) }, { race: function(n) {
          var l = this, u = s.f(l), m = u.reject, g = i(function() {
            var h = a(l.resolve);
            o(n, function(d) {
              t(h, l, d).then(u.resolve, m);
            });
          });
          return g.error && m(g.value), u.promise;
        } });
      }, 683: function(p, R, e) {
        var r = e(2109), t = e(6916), a = e(8523);
        r({ target: "Promise", stat: !0, forced: e(3702).CONSTRUCTOR }, { reject: function(s) {
          var i = a.f(this);
          return t(i.reject, void 0, s), i.promise;
        } });
      }, 6294: function(p, R, e) {
        var r = e(2109), t = e(5005), a = e(1913), s = e(2492), i = e(3702).CONSTRUCTOR, o = e(9478), n = t("Promise"), l = a && !i;
        r({ target: "Promise", stat: !0, forced: a || i }, { resolve: function(u) {
          return o(l && this === n ? s : this, u);
        } });
      }, 4916: function(p, R, e) {
        var r = e(2109), t = e(2261);
        r({ target: "RegExp", proto: !0, forced: /./.exec !== t }, { exec: t });
      }, 9714: function(p, R, e) {
        var r = e(6530).PROPER, t = e(8052), a = e(9670), s = e(1340), i = e(7293), o = e(4706), n = "toString", l = RegExp.prototype.toString, u = i(function() {
          return l.call({ source: "a", flags: "b" }) != "/a/b";
        }), m = r && l.name != n;
        (u || m) && t(RegExp.prototype, n, function() {
          var g = a(this);
          return "/" + s(g.source) + "/" + s(o(g));
        }, { unsafe: !0 });
      }, 2023: function(p, R, e) {
        var r = e(2109), t = e(1702), a = e(3929), s = e(4488), i = e(1340), o = e(4964), n = t("".indexOf);
        r({ target: "String", proto: !0, forced: !o("includes") }, { includes: function(l) {
          return !!~n(i(s(this)), i(a(l)), arguments.length > 1 ? arguments[1] : void 0);
        } });
      }, 8783: function(p, R, e) {
        var r = e(8710).charAt, t = e(1340), a = e(9909), s = e(1656), i = e(6178), o = "String Iterator", n = a.set, l = a.getterFor(o);
        s(String, "String", function(u) {
          n(this, { type: o, string: t(u), index: 0 });
        }, function() {
          var u, m = l(this), g = m.string, h = m.index;
          return h >= g.length ? i(void 0, !0) : (u = r(g, h), m.index += u.length, i(u, !1));
        });
      }, 4032: function(p, R, e) {
        var r = e(2109), t = e(7854), a = e(6916), s = e(1702), i = e(1913), o = e(9781), n = e(6293), l = e(7293), u = e(2597), m = e(7976), g = e(9670), h = e(5656), d = e(4948), f = e(1340), b = e(9114), c = e(30), S = e(1956), v = e(8006), N = e(1156), x = e(5181), O = e(1236), C = e(3070), E = e(6048), P = e(5296), G = e(8052), Z = e(7045), F = e(2309), Y = e(6200), K = e(3501), V = e(9711), ne = e(5112), ae = e(6061), se = e(6800), ue = e(6532), me = e(8003), ge = e(9909), Ce = e(2092).forEach, Re = Y("hidden"), Ie = "Symbol", Oe = ge.set, fe = ge.getterFor(Ie), ce = Object.prototype, Ue = t.Symbol, Ke = Ue && Ue.prototype, $e = t.TypeError, Ve = t.QObject, Be = O.f, Ze = C.f, Qe = N.f, Pe = P.f, Le = s([].push), xe = F("symbols"), ve = F("op-symbols"), we = F("wks"), ke = !Ve || !Ve.prototype || !Ve.prototype.findChild, Ne = o && l(function() {
          return c(Ze({}, "a", { get: function() {
            return Ze(this, "a", { value: 7 }).a;
          } })).a != 7;
        }) ? function(w, k, y) {
          var I = Be(ce, k);
          I && delete ce[k], Ze(w, k, y), I && w !== ce && Ze(ce, k, I);
        } : Ze, j = function(w, k) {
          var y = xe[w] = c(Ke);
          return Oe(y, { type: Ie, tag: w, description: k }), o || (y.description = k), y;
        }, B = function(w, k, y) {
          w === ce && B(ve, k, y), g(w);
          var I = d(k);
          return g(y), u(xe, I) ? (y.enumerable ? (u(w, Re) && w[Re][I] && (w[Re][I] = !1), y = c(y, { enumerable: b(0, !1) })) : (u(w, Re) || Ze(w, Re, b(1, {})), w[Re][I] = !0), Ne(w, I, y)) : Ze(w, I, y);
        }, T = function(w, k) {
          g(w);
          var y = h(k), I = S(y).concat(L(y));
          return Ce(I, function(H) {
            o && !a(W, y, H) || B(w, H, y[H]);
          }), w;
        }, W = function(w) {
          var k = d(w), y = a(Pe, this, k);
          return !(this === ce && u(xe, k) && !u(ve, k)) && (!(y || !u(this, k) || !u(xe, k) || u(this, Re) && this[Re][k]) || y);
        }, _ = function(w, k) {
          var y = h(w), I = d(k);
          if (y !== ce || !u(xe, I) || u(ve, I)) {
            var H = Be(y, I);
            return !H || !u(xe, I) || u(y, Re) && y[Re][I] || (H.enumerable = !0), H;
          }
        }, A = function(w) {
          var k = Qe(h(w)), y = [];
          return Ce(k, function(I) {
            u(xe, I) || u(K, I) || Le(y, I);
          }), y;
        }, L = function(w) {
          var k = w === ce, y = Qe(k ? ve : h(w)), I = [];
          return Ce(y, function(H) {
            !u(xe, H) || k && !u(ce, H) || Le(I, xe[H]);
          }), I;
        };
        n || (Ue = function() {
          if (m(Ke, this))
            throw $e("Symbol is not a constructor");
          var w = arguments.length && arguments[0] !== void 0 ? f(arguments[0]) : void 0, k = V(w), y = function(I) {
            this === ce && a(y, ve, I), u(this, Re) && u(this[Re], k) && (this[Re][k] = !1), Ne(this, k, b(1, I));
          };
          return o && ke && Ne(ce, k, { configurable: !0, set: y }), j(k, w);
        }, G(Ke = Ue.prototype, "toString", function() {
          return fe(this).tag;
        }), G(Ue, "withoutSetter", function(w) {
          return j(V(w), w);
        }), P.f = W, C.f = B, E.f = T, O.f = _, v.f = N.f = A, x.f = L, ae.f = function(w) {
          return j(ne(w), w);
        }, o && (Z(Ke, "description", { configurable: !0, get: function() {
          return fe(this).description;
        } }), i || G(ce, "propertyIsEnumerable", W, { unsafe: !0 }))), r({ global: !0, constructor: !0, wrap: !0, forced: !n, sham: !n }, { Symbol: Ue }), Ce(S(we), function(w) {
          se(w);
        }), r({ target: Ie, stat: !0, forced: !n }, { useSetter: function() {
          ke = !0;
        }, useSimple: function() {
          ke = !1;
        } }), r({ target: "Object", stat: !0, forced: !n, sham: !o }, { create: function(w, k) {
          return k === void 0 ? c(w) : T(c(w), k);
        }, defineProperty: B, defineProperties: T, getOwnPropertyDescriptor: _ }), r({ target: "Object", stat: !0, forced: !n }, { getOwnPropertyNames: A }), ue(), me(Ue, Ie), K[Re] = !0;
      }, 1817: function(p, R, e) {
        var r = e(2109), t = e(9781), a = e(7854), s = e(1702), i = e(2597), o = e(614), n = e(7976), l = e(1340), u = e(7045), m = e(9920), g = a.Symbol, h = g && g.prototype;
        if (t && o(g) && (!("description" in h) || g().description !== void 0)) {
          var d = {}, f = function() {
            var O = arguments.length < 1 || arguments[0] === void 0 ? void 0 : l(arguments[0]), C = n(h, this) ? new g(O) : O === void 0 ? g() : g(O);
            return O === "" && (d[C] = !0), C;
          };
          m(f, g), f.prototype = h, h.constructor = f;
          var b = String(g("test")) == "Symbol(test)", c = s(h.valueOf), S = s(h.toString), v = /^Symbol\((.*)\)[^)]+$/, N = s("".replace), x = s("".slice);
          u(h, "description", { configurable: !0, get: function() {
            var O = c(this);
            if (i(d, O))
              return "";
            var C = S(O), E = b ? x(C, 7, -1) : N(C, v, "$1");
            return E === "" ? void 0 : E;
          } }), r({ global: !0, constructor: !0, forced: !0 }, { Symbol: f });
        }
      }, 763: function(p, R, e) {
        var r = e(2109), t = e(5005), a = e(2597), s = e(1340), i = e(2309), o = e(2015), n = i("string-to-symbol-registry"), l = i("symbol-to-string-registry");
        r({ target: "Symbol", stat: !0, forced: !o }, { for: function(u) {
          var m = s(u);
          if (a(n, m))
            return n[m];
          var g = t("Symbol")(m);
          return n[m] = g, l[g] = m, g;
        } });
      }, 2165: function(p, R, e) {
        e(6800)("iterator");
      }, 2526: function(p, R, e) {
        e(4032), e(763), e(6620), e(8862), e(9660);
      }, 6620: function(p, R, e) {
        var r = e(2109), t = e(2597), a = e(2190), s = e(6330), i = e(2309), o = e(2015), n = i("symbol-to-string-registry");
        r({ target: "Symbol", stat: !0, forced: !o }, { keyFor: function(l) {
          if (!a(l))
            throw TypeError(s(l) + " is not a symbol");
          if (t(n, l))
            return n[l];
        } });
      }, 2990: function(p, R, e) {
        var r = e(1702), t = e(260), a = r(e(1048)), s = t.aTypedArray;
        (0, t.exportTypedArrayMethod)("copyWithin", function(i, o) {
          return a(s(this), i, o, arguments.length > 2 ? arguments[2] : void 0);
        });
      }, 8927: function(p, R, e) {
        var r = e(260), t = e(2092).every, a = r.aTypedArray;
        (0, r.exportTypedArrayMethod)("every", function(s) {
          return t(a(this), s, arguments.length > 1 ? arguments[1] : void 0);
        });
      }, 3105: function(p, R, e) {
        var r = e(260), t = e(1285), a = e(4599), s = e(648), i = e(6916), o = e(1702), n = e(7293), l = r.aTypedArray, u = r.exportTypedArrayMethod, m = o("".slice);
        u("fill", function(g) {
          var h = arguments.length;
          l(this);
          var d = m(s(this), 0, 3) === "Big" ? a(g) : +g;
          return i(t, this, d, h > 1 ? arguments[1] : void 0, h > 2 ? arguments[2] : void 0);
        }, n(function() {
          var g = 0;
          return new Int8Array(2).fill({ valueOf: function() {
            return g++;
          } }), g !== 1;
        }));
      }, 5035: function(p, R, e) {
        var r = e(260), t = e(2092).filter, a = e(3074), s = r.aTypedArray;
        (0, r.exportTypedArrayMethod)("filter", function(i) {
          var o = t(s(this), i, arguments.length > 1 ? arguments[1] : void 0);
          return a(this, o);
        });
      }, 7174: function(p, R, e) {
        var r = e(260), t = e(2092).findIndex, a = r.aTypedArray;
        (0, r.exportTypedArrayMethod)("findIndex", function(s) {
          return t(a(this), s, arguments.length > 1 ? arguments[1] : void 0);
        });
      }, 4345: function(p, R, e) {
        var r = e(260), t = e(2092).find, a = r.aTypedArray;
        (0, r.exportTypedArrayMethod)("find", function(s) {
          return t(a(this), s, arguments.length > 1 ? arguments[1] : void 0);
        });
      }, 2846: function(p, R, e) {
        var r = e(260), t = e(2092).forEach, a = r.aTypedArray;
        (0, r.exportTypedArrayMethod)("forEach", function(s) {
          t(a(this), s, arguments.length > 1 ? arguments[1] : void 0);
        });
      }, 8145: function(p, R, e) {
        var r = e(3832);
        (0, e(260).exportTypedArrayStaticMethod)("from", e(7321), r);
      }, 4731: function(p, R, e) {
        var r = e(260), t = e(1318).includes, a = r.aTypedArray;
        (0, r.exportTypedArrayMethod)("includes", function(s) {
          return t(a(this), s, arguments.length > 1 ? arguments[1] : void 0);
        });
      }, 7209: function(p, R, e) {
        var r = e(260), t = e(1318).indexOf, a = r.aTypedArray;
        (0, r.exportTypedArrayMethod)("indexOf", function(s) {
          return t(a(this), s, arguments.length > 1 ? arguments[1] : void 0);
        });
      }, 6319: function(p, R, e) {
        var r = e(7854), t = e(7293), a = e(1702), s = e(260), i = e(6992), o = e(5112)("iterator"), n = r.Uint8Array, l = a(i.values), u = a(i.keys), m = a(i.entries), g = s.aTypedArray, h = s.exportTypedArrayMethod, d = n && n.prototype, f = !t(function() {
          d[o].call([1]);
        }), b = !!d && d.values && d[o] === d.values && d.values.name === "values", c = function() {
          return l(g(this));
        };
        h("entries", function() {
          return m(g(this));
        }, f), h("keys", function() {
          return u(g(this));
        }, f), h("values", c, f || !b, { name: "values" }), h(o, c, f || !b, { name: "values" });
      }, 8867: function(p, R, e) {
        var r = e(260), t = e(1702), a = r.aTypedArray, s = r.exportTypedArrayMethod, i = t([].join);
        s("join", function(o) {
          return i(a(this), o);
        });
      }, 7789: function(p, R, e) {
        var r = e(260), t = e(2104), a = e(6583), s = r.aTypedArray;
        (0, r.exportTypedArrayMethod)("lastIndexOf", function(i) {
          var o = arguments.length;
          return t(a, s(this), o > 1 ? [i, arguments[1]] : [i]);
        });
      }, 3739: function(p, R, e) {
        var r = e(260), t = e(2092).map, a = e(6304), s = r.aTypedArray;
        (0, r.exportTypedArrayMethod)("map", function(i) {
          return t(s(this), i, arguments.length > 1 ? arguments[1] : void 0, function(o, n) {
            return new (a(o))(n);
          });
        });
      }, 4483: function(p, R, e) {
        var r = e(260), t = e(3671).right, a = r.aTypedArray;
        (0, r.exportTypedArrayMethod)("reduceRight", function(s) {
          var i = arguments.length;
          return t(a(this), s, i, i > 1 ? arguments[1] : void 0);
        });
      }, 9368: function(p, R, e) {
        var r = e(260), t = e(3671).left, a = r.aTypedArray;
        (0, r.exportTypedArrayMethod)("reduce", function(s) {
          var i = arguments.length;
          return t(a(this), s, i, i > 1 ? arguments[1] : void 0);
        });
      }, 2056: function(p, R, e) {
        var r = e(260), t = r.aTypedArray, a = r.exportTypedArrayMethod, s = Math.floor;
        a("reverse", function() {
          for (var i, o = this, n = t(o).length, l = s(n / 2), u = 0; u < l; )
            i = o[u], o[u++] = o[--n], o[n] = i;
          return o;
        });
      }, 3462: function(p, R, e) {
        var r = e(7854), t = e(6916), a = e(260), s = e(6244), i = e(4590), o = e(7908), n = e(7293), l = r.RangeError, u = r.Int8Array, m = u && u.prototype, g = m && m.set, h = a.aTypedArray, d = a.exportTypedArrayMethod, f = !n(function() {
          var c = new Uint8ClampedArray(2);
          return t(g, c, { length: 1, 0: 3 }, 1), c[1] !== 3;
        }), b = f && a.NATIVE_ARRAY_BUFFER_VIEWS && n(function() {
          var c = new u(2);
          return c.set(1), c.set("2", 1), c[0] !== 0 || c[1] !== 2;
        });
        d("set", function(c) {
          h(this);
          var S = i(arguments.length > 1 ? arguments[1] : void 0, 1), v = o(c);
          if (f)
            return t(g, this, v, S);
          var N = this.length, x = s(v), O = 0;
          if (x + S > N)
            throw l("Wrong length");
          for (; O < x; )
            this[S + O] = v[O++];
        }, !f || b);
      }, 678: function(p, R, e) {
        var r = e(260), t = e(6304), a = e(7293), s = e(206), i = r.aTypedArray;
        (0, r.exportTypedArrayMethod)("slice", function(o, n) {
          for (var l = s(i(this), o, n), u = t(this), m = 0, g = l.length, h = new u(g); g > m; )
            h[m] = l[m++];
          return h;
        }, a(function() {
          new Int8Array(1).slice();
        }));
      }, 7462: function(p, R, e) {
        var r = e(260), t = e(2092).some, a = r.aTypedArray;
        (0, r.exportTypedArrayMethod)("some", function(s) {
          return t(a(this), s, arguments.length > 1 ? arguments[1] : void 0);
        });
      }, 3824: function(p, R, e) {
        var r = e(7854), t = e(1470), a = e(7293), s = e(9662), i = e(4362), o = e(260), n = e(8886), l = e(256), u = e(7392), m = e(8008), g = o.aTypedArray, h = o.exportTypedArrayMethod, d = r.Uint16Array, f = d && t(d.prototype.sort), b = !(!f || a(function() {
          f(new d(2), null);
        }) && a(function() {
          f(new d(2), {});
        })), c = !!f && !a(function() {
          if (u)
            return u < 74;
          if (n)
            return n < 67;
          if (l)
            return !0;
          if (m)
            return m < 602;
          var S, v, N = new d(516), x = Array(516);
          for (S = 0; S < 516; S++)
            v = S % 4, N[S] = 515 - S, x[S] = S - 2 * v + 3;
          for (f(N, function(O, C) {
            return (O / 4 | 0) - (C / 4 | 0);
          }), S = 0; S < 516; S++)
            if (N[S] !== x[S])
              return !0;
        });
        h("sort", function(S) {
          return S !== void 0 && s(S), c ? f(this, S) : i(g(this), function(v) {
            return function(N, x) {
              return v !== void 0 ? +v(N, x) || 0 : x != x ? -1 : N != N ? 1 : N === 0 && x === 0 ? 1 / N > 0 && 1 / x < 0 ? 1 : -1 : N > x;
            };
          }(S));
        }, !c || b);
      }, 5021: function(p, R, e) {
        var r = e(260), t = e(7466), a = e(1400), s = e(6304), i = r.aTypedArray;
        (0, r.exportTypedArrayMethod)("subarray", function(o, n) {
          var l = i(this), u = l.length, m = a(o, u);
          return new (s(l))(l.buffer, l.byteOffset + m * l.BYTES_PER_ELEMENT, t((n === void 0 ? u : a(n, u)) - m));
        });
      }, 2974: function(p, R, e) {
        var r = e(7854), t = e(2104), a = e(260), s = e(7293), i = e(206), o = r.Int8Array, n = a.aTypedArray, l = a.exportTypedArrayMethod, u = [].toLocaleString, m = !!o && s(function() {
          u.call(new o(1));
        });
        l("toLocaleString", function() {
          return t(u, m ? i(n(this)) : n(this), i(arguments));
        }, s(function() {
          return [1, 2].toLocaleString() != new o([1, 2]).toLocaleString();
        }) || !s(function() {
          o.prototype.toLocaleString.call([1, 2]);
        }));
      }, 5016: function(p, R, e) {
        var r = e(260).exportTypedArrayMethod, t = e(7293), a = e(7854), s = e(1702), i = a.Uint8Array, o = i && i.prototype || {}, n = [].toString, l = s([].join);
        t(function() {
          n.call({});
        }) && (n = function() {
          return l(this);
        });
        var u = o.toString != n;
        r("toString", n, u);
      }, 2472: function(p, R, e) {
        e(9843)("Uint8", function(r) {
          return function(t, a, s) {
            return r(this, t, a, s);
          };
        });
      }, 4747: function(p, R, e) {
        var r = e(7854), t = e(8324), a = e(8509), s = e(8533), i = e(8880), o = function(l) {
          if (l && l.forEach !== s)
            try {
              i(l, "forEach", s);
            } catch {
              l.forEach = s;
            }
        };
        for (var n in t)
          t[n] && o(r[n] && r[n].prototype);
        o(a);
      }, 3948: function(p, R, e) {
        var r = e(7854), t = e(8324), a = e(8509), s = e(6992), i = e(8880), o = e(5112), n = o("iterator"), l = o("toStringTag"), u = s.values, m = function(h, d) {
          if (h) {
            if (h[n] !== u)
              try {
                i(h, n, u);
              } catch {
                h[n] = u;
              }
            if (h[l] || i(h, l, d), t[d]) {
              for (var f in s)
                if (h[f] !== s[f])
                  try {
                    i(h, f, s[f]);
                  } catch {
                    h[f] = s[f];
                  }
            }
          }
        };
        for (var g in t)
          m(r[g] && r[g].prototype, g);
        m(a, "DOMTokenList");
      }, 6815: function(p, R, e) {
        var r = e(2109), t = e(7854), a = e(7152)(t.setInterval, !0);
        r({ global: !0, bind: !0, forced: t.setInterval !== a }, { setInterval: a });
      }, 8417: function(p, R, e) {
        var r = e(2109), t = e(7854), a = e(7152)(t.setTimeout, !0);
        r({ global: !0, bind: !0, forced: t.setTimeout !== a }, { setTimeout: a });
      }, 2564: function(p, R, e) {
        e(6815), e(8417);
      }, 5556: function(p, R, e) {
        e(6992);
        var r = e(2109), t = e(7854), a = e(6916), s = e(1702), i = e(9781), o = e(5143), n = e(8052), l = e(7045), u = e(9190), m = e(8003), g = e(3061), h = e(9909), d = e(5787), f = e(614), b = e(2597), c = e(9974), S = e(648), v = e(9670), N = e(111), x = e(1340), O = e(30), C = e(9114), E = e(4121), P = e(1246), G = e(8053), Z = e(5112), F = e(4362), Y = Z("iterator"), K = "URLSearchParams", V = "URLSearchParamsIterator", ne = h.set, ae = h.getterFor(K), se = h.getterFor(V), ue = Object.getOwnPropertyDescriptor, me = function(D) {
          if (!i)
            return t[D];
          var J = ue(t, D);
          return J && J.value;
        }, ge = me("fetch"), Ce = me("Request"), Re = me("Headers"), Ie = Ce && Ce.prototype, Oe = Re && Re.prototype, fe = t.RegExp, ce = t.TypeError, Ue = t.decodeURIComponent, Ke = t.encodeURIComponent, $e = s("".charAt), Ve = s([].join), Be = s([].push), Ze = s("".replace), Qe = s([].shift), Pe = s([].splice), Le = s("".split), xe = s("".slice), ve = /\+/g, we = Array(4), ke = function(D) {
          return we[D - 1] || (we[D - 1] = fe("((?:%[\\da-f]{2}){" + D + "})", "gi"));
        }, Ne = function(D) {
          try {
            return Ue(D);
          } catch {
            return D;
          }
        }, j = function(D) {
          var J = Ze(D, ve, " "), X = 4;
          try {
            return Ue(J);
          } catch {
            for (; X; )
              J = Ze(J, ke(X--), Ne);
            return J;
          }
        }, B = /[!'()~]|%20/g, T = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+" }, W = function(D) {
          return T[D];
        }, _ = function(D) {
          return Ze(Ke(D), B, W);
        }, A = g(function(D, J) {
          ne(this, { type: V, iterator: E(ae(D).entries), kind: J });
        }, "Iterator", function() {
          var D = se(this), J = D.kind, X = D.iterator.next(), oe = X.value;
          return X.done || (X.value = J === "keys" ? oe.key : J === "values" ? oe.value : [oe.key, oe.value]), X;
        }, !0), L = function(D) {
          this.entries = [], this.url = null, D !== void 0 && (N(D) ? this.parseObject(D) : this.parseQuery(typeof D == "string" ? $e(D, 0) === "?" ? xe(D, 1) : D : x(D)));
        };
        L.prototype = { type: K, bindURL: function(D) {
          this.url = D, this.update();
        }, parseObject: function(D) {
          var J, X, oe, q, z, te, re, Ae = P(D);
          if (Ae)
            for (X = (J = E(D, Ae)).next; !(oe = a(X, J)).done; ) {
              if (z = (q = E(v(oe.value))).next, (te = a(z, q)).done || (re = a(z, q)).done || !a(z, q).done)
                throw ce("Expected sequence with length 2");
              Be(this.entries, { key: x(te.value), value: x(re.value) });
            }
          else
            for (var We in D)
              b(D, We) && Be(this.entries, { key: We, value: x(D[We]) });
        }, parseQuery: function(D) {
          if (D)
            for (var J, X, oe = Le(D, "&"), q = 0; q < oe.length; )
              (J = oe[q++]).length && (X = Le(J, "="), Be(this.entries, { key: j(Qe(X)), value: j(Ve(X, "=")) }));
        }, serialize: function() {
          for (var D, J = this.entries, X = [], oe = 0; oe < J.length; )
            D = J[oe++], Be(X, _(D.key) + "=" + _(D.value));
          return Ve(X, "&");
        }, update: function() {
          this.entries.length = 0, this.parseQuery(this.url.query);
        }, updateURL: function() {
          this.url && this.url.update();
        } };
        var w = function() {
          d(this, k);
          var D = arguments.length > 0 ? arguments[0] : void 0, J = ne(this, new L(D));
          i || (this.length = J.entries.length);
        }, k = w.prototype;
        if (u(k, { append: function(D, J) {
          G(arguments.length, 2);
          var X = ae(this);
          Be(X.entries, { key: x(D), value: x(J) }), i || this.length++, X.updateURL();
        }, delete: function(D) {
          G(arguments.length, 1);
          for (var J = ae(this), X = J.entries, oe = x(D), q = 0; q < X.length; )
            X[q].key === oe ? Pe(X, q, 1) : q++;
          i || (this.length = X.length), J.updateURL();
        }, get: function(D) {
          G(arguments.length, 1);
          for (var J = ae(this).entries, X = x(D), oe = 0; oe < J.length; oe++)
            if (J[oe].key === X)
              return J[oe].value;
          return null;
        }, getAll: function(D) {
          G(arguments.length, 1);
          for (var J = ae(this).entries, X = x(D), oe = [], q = 0; q < J.length; q++)
            J[q].key === X && Be(oe, J[q].value);
          return oe;
        }, has: function(D) {
          G(arguments.length, 1);
          for (var J = ae(this).entries, X = x(D), oe = 0; oe < J.length; )
            if (J[oe++].key === X)
              return !0;
          return !1;
        }, set: function(D, J) {
          G(arguments.length, 1);
          for (var X, oe = ae(this), q = oe.entries, z = !1, te = x(D), re = x(J), Ae = 0; Ae < q.length; Ae++)
            (X = q[Ae]).key === te && (z ? Pe(q, Ae--, 1) : (z = !0, X.value = re));
          z || Be(q, { key: te, value: re }), i || (this.length = q.length), oe.updateURL();
        }, sort: function() {
          var D = ae(this);
          F(D.entries, function(J, X) {
            return J.key > X.key ? 1 : -1;
          }), D.updateURL();
        }, forEach: function(D) {
          for (var J, X = ae(this).entries, oe = c(D, arguments.length > 1 ? arguments[1] : void 0), q = 0; q < X.length; )
            oe((J = X[q++]).value, J.key, this);
        }, keys: function() {
          return new A(this, "keys");
        }, values: function() {
          return new A(this, "values");
        }, entries: function() {
          return new A(this, "entries");
        } }, { enumerable: !0 }), n(k, Y, k.entries, { name: "entries" }), n(k, "toString", function() {
          return ae(this).serialize();
        }, { enumerable: !0 }), i && l(k, "size", { get: function() {
          return ae(this).entries.length;
        }, configurable: !0, enumerable: !0 }), m(w, K), r({ global: !0, constructor: !0, forced: !o }, { URLSearchParams: w }), !o && f(Re)) {
          var y = s(Oe.has), I = s(Oe.set), H = function(D) {
            if (N(D)) {
              var J, X = D.body;
              if (S(X) === K)
                return J = D.headers ? new Re(D.headers) : new Re(), y(J, "content-type") || I(J, "content-type", "application/x-www-form-urlencoded;charset=UTF-8"), O(D, { body: C(0, x(X)), headers: C(0, J) });
            }
            return D;
          };
          if (f(ge) && r({ global: !0, enumerable: !0, dontCallGetSet: !0, forced: !0 }, { fetch: function(D) {
            return ge(D, arguments.length > 1 ? H(arguments[1]) : {});
          } }), f(Ce)) {
            var M = function(D) {
              return d(this, Ie), new Ce(D, arguments.length > 1 ? H(arguments[1]) : {});
            };
            Ie.constructor = M, M.prototype = Ie, r({ global: !0, constructor: !0, dontCallGetSet: !0, forced: !0 }, { Request: M });
          }
        }
        p.exports = { URLSearchParams: w, getState: ae };
      }, 1637: function(p, R, e) {
        e(5556);
      }, 8789: function(p, R, e) {
        e(8783);
        var r, t = e(2109), a = e(9781), s = e(5143), i = e(7854), o = e(9974), n = e(1702), l = e(8052), u = e(7045), m = e(5787), g = e(2597), h = e(1574), d = e(8457), f = e(1589), b = e(8710).codeAt, c = e(3197), S = e(1340), v = e(8003), N = e(8053), x = e(5556), O = e(9909), C = O.set, E = O.getterFor("URL"), P = x.URLSearchParams, G = x.getState, Z = i.URL, F = i.TypeError, Y = i.parseInt, K = Math.floor, V = Math.pow, ne = n("".charAt), ae = n(/./.exec), se = n([].join), ue = n(1 .toString), me = n([].pop), ge = n([].push), Ce = n("".replace), Re = n([].shift), Ie = n("".split), Oe = n("".slice), fe = n("".toLowerCase), ce = n([].unshift), Ue = "Invalid scheme", Ke = "Invalid host", $e = "Invalid port", Ve = /[a-z]/i, Be = /[\d+-.a-z]/i, Ze = /\d/, Qe = /^0x/i, Pe = /^[0-7]+$/, Le = /^\d+$/, xe = /^[\da-f]+$/i, ve = /[\0\t\n\r #%/:<>?@[\\\]^|]/, we = /[\0\t\n\r #/:<>?@[\\\]^|]/, ke = /^[\u0000-\u0020]+/, Ne = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/, j = /[\t\n\r]/g, B = function(ee) {
          var le, de, He, pe;
          if (typeof ee == "number") {
            for (le = [], de = 0; de < 4; de++)
              ce(le, ee % 256), ee = K(ee / 256);
            return se(le, ".");
          }
          if (typeof ee == "object") {
            for (le = "", He = function(Xe) {
              for (var Ye = null, et = 1, he = null, Me = 0, rt = 0; rt < 8; rt++)
                Xe[rt] !== 0 ? (Me > et && (Ye = he, et = Me), he = null, Me = 0) : (he === null && (he = rt), ++Me);
              return Me > et && (Ye = he, et = Me), Ye;
            }(ee), de = 0; de < 8; de++)
              pe && ee[de] === 0 || (pe && (pe = !1), He === de ? (le += de ? ":" : "::", pe = !0) : (le += ue(ee[de], 16), de < 7 && (le += ":")));
            return "[" + le + "]";
          }
          return ee;
        }, T = {}, W = h({}, T, { " ": 1, '"': 1, "<": 1, ">": 1, "`": 1 }), _ = h({}, W, { "#": 1, "?": 1, "{": 1, "}": 1 }), A = h({}, _, { "/": 1, ":": 1, ";": 1, "=": 1, "@": 1, "[": 1, "\\": 1, "]": 1, "^": 1, "|": 1 }), L = function(ee, le) {
          var de = b(ee, 0);
          return de > 32 && de < 127 && !g(le, ee) ? ee : encodeURIComponent(ee);
        }, w = { ftp: 21, file: null, http: 80, https: 443, ws: 80, wss: 443 }, k = function(ee, le) {
          var de;
          return ee.length == 2 && ae(Ve, ne(ee, 0)) && ((de = ne(ee, 1)) == ":" || !le && de == "|");
        }, y = function(ee) {
          var le;
          return ee.length > 1 && k(Oe(ee, 0, 2)) && (ee.length == 2 || (le = ne(ee, 2)) === "/" || le === "\\" || le === "?" || le === "#");
        }, I = function(ee) {
          return ee === "." || fe(ee) === "%2e";
        }, H = {}, M = {}, D = {}, J = {}, X = {}, oe = {}, q = {}, z = {}, te = {}, re = {}, Ae = {}, We = {}, Te = {}, je = {}, ie = {}, Je = {}, De = {}, ze = {}, at = {}, st = {}, U = {}, Ee = function(ee, le, de) {
          var He, pe, Xe, Ye = S(ee);
          if (le) {
            if (pe = this.parse(Ye))
              throw F(pe);
            this.searchParams = null;
          } else {
            if (de !== void 0 && (He = new Ee(de, !0)), pe = this.parse(Ye, null, He))
              throw F(pe);
            (Xe = G(new P())).bindURL(this), this.searchParams = Xe;
          }
        };
        Ee.prototype = { type: "URL", parse: function(ee, le, de) {
          var He, pe, Xe, Ye, et, he = this, Me = le || H, rt = 0, Ge = "", qe = !1, Fe = !1, ot = !1;
          for (ee = S(ee), le || (he.scheme = "", he.username = "", he.password = "", he.host = null, he.port = null, he.path = [], he.query = null, he.fragment = null, he.cannotBeABaseURL = !1, ee = Ce(ee, ke, ""), ee = Ce(ee, Ne, "$1")), ee = Ce(ee, j, ""), He = d(ee); rt <= He.length; ) {
            switch (pe = He[rt], Me) {
              case H:
                if (!pe || !ae(Ve, pe)) {
                  if (le)
                    return Ue;
                  Me = D;
                  continue;
                }
                Ge += fe(pe), Me = M;
                break;
              case M:
                if (pe && (ae(Be, pe) || pe == "+" || pe == "-" || pe == "."))
                  Ge += fe(pe);
                else {
                  if (pe != ":") {
                    if (le)
                      return Ue;
                    Ge = "", Me = D, rt = 0;
                    continue;
                  }
                  if (le && (he.isSpecial() != g(w, Ge) || Ge == "file" && (he.includesCredentials() || he.port !== null) || he.scheme == "file" && !he.host))
                    return;
                  if (he.scheme = Ge, le)
                    return void (he.isSpecial() && w[he.scheme] == he.port && (he.port = null));
                  Ge = "", he.scheme == "file" ? Me = je : he.isSpecial() && de && de.scheme == he.scheme ? Me = J : he.isSpecial() ? Me = z : He[rt + 1] == "/" ? (Me = X, rt++) : (he.cannotBeABaseURL = !0, ge(he.path, ""), Me = at);
                }
                break;
              case D:
                if (!de || de.cannotBeABaseURL && pe != "#")
                  return Ue;
                if (de.cannotBeABaseURL && pe == "#") {
                  he.scheme = de.scheme, he.path = f(de.path), he.query = de.query, he.fragment = "", he.cannotBeABaseURL = !0, Me = U;
                  break;
                }
                Me = de.scheme == "file" ? je : oe;
                continue;
              case J:
                if (pe != "/" || He[rt + 1] != "/") {
                  Me = oe;
                  continue;
                }
                Me = te, rt++;
                break;
              case X:
                if (pe == "/") {
                  Me = re;
                  break;
                }
                Me = ze;
                continue;
              case oe:
                if (he.scheme = de.scheme, pe == r)
                  he.username = de.username, he.password = de.password, he.host = de.host, he.port = de.port, he.path = f(de.path), he.query = de.query;
                else if (pe == "/" || pe == "\\" && he.isSpecial())
                  Me = q;
                else if (pe == "?")
                  he.username = de.username, he.password = de.password, he.host = de.host, he.port = de.port, he.path = f(de.path), he.query = "", Me = st;
                else {
                  if (pe != "#") {
                    he.username = de.username, he.password = de.password, he.host = de.host, he.port = de.port, he.path = f(de.path), he.path.length--, Me = ze;
                    continue;
                  }
                  he.username = de.username, he.password = de.password, he.host = de.host, he.port = de.port, he.path = f(de.path), he.query = de.query, he.fragment = "", Me = U;
                }
                break;
              case q:
                if (!he.isSpecial() || pe != "/" && pe != "\\") {
                  if (pe != "/") {
                    he.username = de.username, he.password = de.password, he.host = de.host, he.port = de.port, Me = ze;
                    continue;
                  }
                  Me = re;
                } else
                  Me = te;
                break;
              case z:
                if (Me = te, pe != "/" || ne(Ge, rt + 1) != "/")
                  continue;
                rt++;
                break;
              case te:
                if (pe != "/" && pe != "\\") {
                  Me = re;
                  continue;
                }
                break;
              case re:
                if (pe == "@") {
                  qe && (Ge = "%40" + Ge), qe = !0, Xe = d(Ge);
                  for (var nt = 0; nt < Xe.length; nt++) {
                    var ct = Xe[nt];
                    if (ct != ":" || ot) {
                      var lt = L(ct, A);
                      ot ? he.password += lt : he.username += lt;
                    } else
                      ot = !0;
                  }
                  Ge = "";
                } else if (pe == r || pe == "/" || pe == "?" || pe == "#" || pe == "\\" && he.isSpecial()) {
                  if (qe && Ge == "")
                    return "Invalid authority";
                  rt -= d(Ge).length + 1, Ge = "", Me = Ae;
                } else
                  Ge += pe;
                break;
              case Ae:
              case We:
                if (le && he.scheme == "file") {
                  Me = Je;
                  continue;
                }
                if (pe != ":" || Fe) {
                  if (pe == r || pe == "/" || pe == "?" || pe == "#" || pe == "\\" && he.isSpecial()) {
                    if (he.isSpecial() && Ge == "")
                      return Ke;
                    if (le && Ge == "" && (he.includesCredentials() || he.port !== null))
                      return;
                    if (Ye = he.parseHost(Ge))
                      return Ye;
                    if (Ge = "", Me = De, le)
                      return;
                    continue;
                  }
                  pe == "[" ? Fe = !0 : pe == "]" && (Fe = !1), Ge += pe;
                } else {
                  if (Ge == "")
                    return Ke;
                  if (Ye = he.parseHost(Ge))
                    return Ye;
                  if (Ge = "", Me = Te, le == We)
                    return;
                }
                break;
              case Te:
                if (!ae(Ze, pe)) {
                  if (pe == r || pe == "/" || pe == "?" || pe == "#" || pe == "\\" && he.isSpecial() || le) {
                    if (Ge != "") {
                      var ut = Y(Ge, 10);
                      if (ut > 65535)
                        return $e;
                      he.port = he.isSpecial() && ut === w[he.scheme] ? null : ut, Ge = "";
                    }
                    if (le)
                      return;
                    Me = De;
                    continue;
                  }
                  return $e;
                }
                Ge += pe;
                break;
              case je:
                if (he.scheme = "file", pe == "/" || pe == "\\")
                  Me = ie;
                else {
                  if (!de || de.scheme != "file") {
                    Me = ze;
                    continue;
                  }
                  if (pe == r)
                    he.host = de.host, he.path = f(de.path), he.query = de.query;
                  else if (pe == "?")
                    he.host = de.host, he.path = f(de.path), he.query = "", Me = st;
                  else {
                    if (pe != "#") {
                      y(se(f(He, rt), "")) || (he.host = de.host, he.path = f(de.path), he.shortenPath()), Me = ze;
                      continue;
                    }
                    he.host = de.host, he.path = f(de.path), he.query = de.query, he.fragment = "", Me = U;
                  }
                }
                break;
              case ie:
                if (pe == "/" || pe == "\\") {
                  Me = Je;
                  break;
                }
                de && de.scheme == "file" && !y(se(f(He, rt), "")) && (k(de.path[0], !0) ? ge(he.path, de.path[0]) : he.host = de.host), Me = ze;
                continue;
              case Je:
                if (pe == r || pe == "/" || pe == "\\" || pe == "?" || pe == "#") {
                  if (!le && k(Ge))
                    Me = ze;
                  else if (Ge == "") {
                    if (he.host = "", le)
                      return;
                    Me = De;
                  } else {
                    if (Ye = he.parseHost(Ge))
                      return Ye;
                    if (he.host == "localhost" && (he.host = ""), le)
                      return;
                    Ge = "", Me = De;
                  }
                  continue;
                }
                Ge += pe;
                break;
              case De:
                if (he.isSpecial()) {
                  if (Me = ze, pe != "/" && pe != "\\")
                    continue;
                } else if (le || pe != "?")
                  if (le || pe != "#") {
                    if (pe != r && (Me = ze, pe != "/"))
                      continue;
                  } else
                    he.fragment = "", Me = U;
                else
                  he.query = "", Me = st;
                break;
              case ze:
                if (pe == r || pe == "/" || pe == "\\" && he.isSpecial() || !le && (pe == "?" || pe == "#")) {
                  if ((et = fe(et = Ge)) === ".." || et === "%2e." || et === ".%2e" || et === "%2e%2e" ? (he.shortenPath(), pe == "/" || pe == "\\" && he.isSpecial() || ge(he.path, "")) : I(Ge) ? pe == "/" || pe == "\\" && he.isSpecial() || ge(he.path, "") : (he.scheme == "file" && !he.path.length && k(Ge) && (he.host && (he.host = ""), Ge = ne(Ge, 0) + ":"), ge(he.path, Ge)), Ge = "", he.scheme == "file" && (pe == r || pe == "?" || pe == "#"))
                    for (; he.path.length > 1 && he.path[0] === ""; )
                      Re(he.path);
                  pe == "?" ? (he.query = "", Me = st) : pe == "#" && (he.fragment = "", Me = U);
                } else
                  Ge += L(pe, _);
                break;
              case at:
                pe == "?" ? (he.query = "", Me = st) : pe == "#" ? (he.fragment = "", Me = U) : pe != r && (he.path[0] += L(pe, T));
                break;
              case st:
                le || pe != "#" ? pe != r && (pe == "'" && he.isSpecial() ? he.query += "%27" : he.query += pe == "#" ? "%23" : L(pe, T)) : (he.fragment = "", Me = U);
                break;
              case U:
                pe != r && (he.fragment += L(pe, W));
            }
            rt++;
          }
        }, parseHost: function(ee) {
          var le, de, He;
          if (ne(ee, 0) == "[") {
            if (ne(ee, ee.length - 1) != "]" || (le = function(pe) {
              var Xe, Ye, et, he, Me, rt, Ge, qe = [0, 0, 0, 0, 0, 0, 0, 0], Fe = 0, ot = null, nt = 0, ct = function() {
                return ne(pe, nt);
              };
              if (ct() == ":") {
                if (ne(pe, 1) != ":")
                  return;
                nt += 2, ot = ++Fe;
              }
              for (; ct(); ) {
                if (Fe == 8)
                  return;
                if (ct() != ":") {
                  for (Xe = Ye = 0; Ye < 4 && ae(xe, ct()); )
                    Xe = 16 * Xe + Y(ct(), 16), nt++, Ye++;
                  if (ct() == ".") {
                    if (Ye == 0 || (nt -= Ye, Fe > 6))
                      return;
                    for (et = 0; ct(); ) {
                      if (he = null, et > 0) {
                        if (!(ct() == "." && et < 4))
                          return;
                        nt++;
                      }
                      if (!ae(Ze, ct()))
                        return;
                      for (; ae(Ze, ct()); ) {
                        if (Me = Y(ct(), 10), he === null)
                          he = Me;
                        else {
                          if (he == 0)
                            return;
                          he = 10 * he + Me;
                        }
                        if (he > 255)
                          return;
                        nt++;
                      }
                      qe[Fe] = 256 * qe[Fe] + he, ++et != 2 && et != 4 || Fe++;
                    }
                    if (et != 4)
                      return;
                    break;
                  }
                  if (ct() == ":") {
                    if (nt++, !ct())
                      return;
                  } else if (ct())
                    return;
                  qe[Fe++] = Xe;
                } else {
                  if (ot !== null)
                    return;
                  nt++, ot = ++Fe;
                }
              }
              if (ot !== null)
                for (rt = Fe - ot, Fe = 7; Fe != 0 && rt > 0; )
                  Ge = qe[Fe], qe[Fe--] = qe[ot + rt - 1], qe[ot + --rt] = Ge;
              else if (Fe != 8)
                return;
              return qe;
            }(Oe(ee, 1, -1)), !le))
              return Ke;
            this.host = le;
          } else if (this.isSpecial()) {
            if (ee = c(ee), ae(ve, ee) || (le = function(pe) {
              var Xe, Ye, et, he, Me, rt, Ge, qe = Ie(pe, ".");
              if (qe.length && qe[qe.length - 1] == "" && qe.length--, (Xe = qe.length) > 4)
                return pe;
              for (Ye = [], et = 0; et < Xe; et++) {
                if ((he = qe[et]) == "")
                  return pe;
                if (Me = 10, he.length > 1 && ne(he, 0) == "0" && (Me = ae(Qe, he) ? 16 : 8, he = Oe(he, Me == 8 ? 1 : 2)), he === "")
                  rt = 0;
                else {
                  if (!ae(Me == 10 ? Le : Me == 8 ? Pe : xe, he))
                    return pe;
                  rt = Y(he, Me);
                }
                ge(Ye, rt);
              }
              for (et = 0; et < Xe; et++)
                if (rt = Ye[et], et == Xe - 1) {
                  if (rt >= V(256, 5 - Xe))
                    return null;
                } else if (rt > 255)
                  return null;
              for (Ge = me(Ye), et = 0; et < Ye.length; et++)
                Ge += Ye[et] * V(256, 3 - et);
              return Ge;
            }(ee), le === null))
              return Ke;
            this.host = le;
          } else {
            if (ae(we, ee))
              return Ke;
            for (le = "", de = d(ee), He = 0; He < de.length; He++)
              le += L(de[He], T);
            this.host = le;
          }
        }, cannotHaveUsernamePasswordPort: function() {
          return !this.host || this.cannotBeABaseURL || this.scheme == "file";
        }, includesCredentials: function() {
          return this.username != "" || this.password != "";
        }, isSpecial: function() {
          return g(w, this.scheme);
        }, shortenPath: function() {
          var ee = this.path, le = ee.length;
          !le || this.scheme == "file" && le == 1 && k(ee[0], !0) || ee.length--;
        }, serialize: function() {
          var ee = this, le = ee.scheme, de = ee.username, He = ee.password, pe = ee.host, Xe = ee.port, Ye = ee.path, et = ee.query, he = ee.fragment, Me = le + ":";
          return pe !== null ? (Me += "//", ee.includesCredentials() && (Me += de + (He ? ":" + He : "") + "@"), Me += B(pe), Xe !== null && (Me += ":" + Xe)) : le == "file" && (Me += "//"), Me += ee.cannotBeABaseURL ? Ye[0] : Ye.length ? "/" + se(Ye, "/") : "", et !== null && (Me += "?" + et), he !== null && (Me += "#" + he), Me;
        }, setHref: function(ee) {
          var le = this.parse(ee);
          if (le)
            throw F(le);
          this.searchParams.update();
        }, getOrigin: function() {
          var ee = this.scheme, le = this.port;
          if (ee == "blob")
            try {
              return new Q(ee.path[0]).origin;
            } catch {
              return "null";
            }
          return ee != "file" && this.isSpecial() ? ee + "://" + B(this.host) + (le !== null ? ":" + le : "") : "null";
        }, getProtocol: function() {
          return this.scheme + ":";
        }, setProtocol: function(ee) {
          this.parse(S(ee) + ":", H);
        }, getUsername: function() {
          return this.username;
        }, setUsername: function(ee) {
          var le = d(S(ee));
          if (!this.cannotHaveUsernamePasswordPort()) {
            this.username = "";
            for (var de = 0; de < le.length; de++)
              this.username += L(le[de], A);
          }
        }, getPassword: function() {
          return this.password;
        }, setPassword: function(ee) {
          var le = d(S(ee));
          if (!this.cannotHaveUsernamePasswordPort()) {
            this.password = "";
            for (var de = 0; de < le.length; de++)
              this.password += L(le[de], A);
          }
        }, getHost: function() {
          var ee = this.host, le = this.port;
          return ee === null ? "" : le === null ? B(ee) : B(ee) + ":" + le;
        }, setHost: function(ee) {
          this.cannotBeABaseURL || this.parse(ee, Ae);
        }, getHostname: function() {
          var ee = this.host;
          return ee === null ? "" : B(ee);
        }, setHostname: function(ee) {
          this.cannotBeABaseURL || this.parse(ee, We);
        }, getPort: function() {
          var ee = this.port;
          return ee === null ? "" : S(ee);
        }, setPort: function(ee) {
          this.cannotHaveUsernamePasswordPort() || ((ee = S(ee)) == "" ? this.port = null : this.parse(ee, Te));
        }, getPathname: function() {
          var ee = this.path;
          return this.cannotBeABaseURL ? ee[0] : ee.length ? "/" + se(ee, "/") : "";
        }, setPathname: function(ee) {
          this.cannotBeABaseURL || (this.path = [], this.parse(ee, De));
        }, getSearch: function() {
          var ee = this.query;
          return ee ? "?" + ee : "";
        }, setSearch: function(ee) {
          (ee = S(ee)) == "" ? this.query = null : (ne(ee, 0) == "?" && (ee = Oe(ee, 1)), this.query = "", this.parse(ee, st)), this.searchParams.update();
        }, getSearchParams: function() {
          return this.searchParams.facade;
        }, getHash: function() {
          var ee = this.fragment;
          return ee ? "#" + ee : "";
        }, setHash: function(ee) {
          (ee = S(ee)) != "" ? (ne(ee, 0) == "#" && (ee = Oe(ee, 1)), this.fragment = "", this.parse(ee, U)) : this.fragment = null;
        }, update: function() {
          this.query = this.searchParams.serialize() || null;
        } };
        var Q = function(ee) {
          var le = m(this, ye), de = N(arguments.length, 1) > 1 ? arguments[1] : void 0, He = C(le, new Ee(ee, !1, de));
          a || (le.href = He.serialize(), le.origin = He.getOrigin(), le.protocol = He.getProtocol(), le.username = He.getUsername(), le.password = He.getPassword(), le.host = He.getHost(), le.hostname = He.getHostname(), le.port = He.getPort(), le.pathname = He.getPathname(), le.search = He.getSearch(), le.searchParams = He.getSearchParams(), le.hash = He.getHash());
        }, ye = Q.prototype, _e = function(ee, le) {
          return { get: function() {
            return E(this)[ee]();
          }, set: le && function(de) {
            return E(this)[le](de);
          }, configurable: !0, enumerable: !0 };
        };
        if (a && (u(ye, "href", _e("serialize", "setHref")), u(ye, "origin", _e("getOrigin")), u(ye, "protocol", _e("getProtocol", "setProtocol")), u(ye, "username", _e("getUsername", "setUsername")), u(ye, "password", _e("getPassword", "setPassword")), u(ye, "host", _e("getHost", "setHost")), u(ye, "hostname", _e("getHostname", "setHostname")), u(ye, "port", _e("getPort", "setPort")), u(ye, "pathname", _e("getPathname", "setPathname")), u(ye, "search", _e("getSearch", "setSearch")), u(ye, "searchParams", _e("getSearchParams")), u(ye, "hash", _e("getHash", "setHash"))), l(ye, "toJSON", function() {
          return E(this).serialize();
        }, { enumerable: !0 }), l(ye, "toString", function() {
          return E(this).serialize();
        }, { enumerable: !0 }), Z) {
          var be = Z.createObjectURL, Se = Z.revokeObjectURL;
          be && l(Q, "createObjectURL", o(be, Z)), Se && l(Q, "revokeObjectURL", o(Se, Z));
        }
        v(Q, "URL"), t({ global: !0, constructor: !0, forced: !s, sham: !a }, { URL: Q });
      }, 285: function(p, R, e) {
        e(8789);
      }, 5717: function(p) {
        typeof Object.create == "function" ? p.exports = function(R, e) {
          e && (R.super_ = e, R.prototype = Object.create(e.prototype, { constructor: { value: R, enumerable: !1, writable: !0, configurable: !0 } }));
        } : p.exports = function(R, e) {
          if (e) {
            R.super_ = e;
            var r = function() {
            };
            r.prototype = e.prototype, R.prototype = new r(), R.prototype.constructor = R;
          }
        };
      }, 3720: function(p) {
        p.exports = e;
        var R = null;
        try {
          R = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports;
        } catch {
        }
        function e(E, P, G) {
          this.low = 0 | E, this.high = 0 | P, this.unsigned = !!G;
        }
        function r(E) {
          return (E && E.__isLong__) === !0;
        }
        e.prototype.__isLong__, Object.defineProperty(e.prototype, "__isLong__", { value: !0 }), e.isLong = r;
        var t = {}, a = {};
        function s(E, P) {
          var G, Z, F;
          return P ? (F = 0 <= (E >>>= 0) && E < 256) && (Z = a[E]) ? Z : (G = o(E, (0 | E) < 0 ? -1 : 0, !0), F && (a[E] = G), G) : (F = -128 <= (E |= 0) && E < 128) && (Z = t[E]) ? Z : (G = o(E, E < 0 ? -1 : 0, !1), F && (t[E] = G), G);
        }
        function i(E, P) {
          if (isNaN(E))
            return P ? b : f;
          if (P) {
            if (E < 0)
              return b;
            if (E >= g)
              return x;
          } else {
            if (E <= -h)
              return O;
            if (E + 1 >= h)
              return N;
          }
          return E < 0 ? i(-E, P).neg() : o(E % m | 0, E / m | 0, P);
        }
        function o(E, P, G) {
          return new e(E, P, G);
        }
        e.fromInt = s, e.fromNumber = i, e.fromBits = o;
        var n = Math.pow;
        function l(E, P, G) {
          if (E.length === 0)
            throw Error("empty string");
          if (E === "NaN" || E === "Infinity" || E === "+Infinity" || E === "-Infinity")
            return f;
          if (typeof P == "number" ? (G = P, P = !1) : P = !!P, (G = G || 10) < 2 || 36 < G)
            throw RangeError("radix");
          var Z;
          if ((Z = E.indexOf("-")) > 0)
            throw Error("interior hyphen");
          if (Z === 0)
            return l(E.substring(1), P, G).neg();
          for (var F = i(n(G, 8)), Y = f, K = 0; K < E.length; K += 8) {
            var V = Math.min(8, E.length - K), ne = parseInt(E.substring(K, K + V), G);
            if (V < 8) {
              var ae = i(n(G, V));
              Y = Y.mul(ae).add(i(ne));
            } else
              Y = (Y = Y.mul(F)).add(i(ne));
          }
          return Y.unsigned = P, Y;
        }
        function u(E, P) {
          return typeof E == "number" ? i(E, P) : typeof E == "string" ? l(E, P) : o(E.low, E.high, typeof P == "boolean" ? P : E.unsigned);
        }
        e.fromString = l, e.fromValue = u;
        var m = 4294967296, g = m * m, h = g / 2, d = s(1 << 24), f = s(0);
        e.ZERO = f;
        var b = s(0, !0);
        e.UZERO = b;
        var c = s(1);
        e.ONE = c;
        var S = s(1, !0);
        e.UONE = S;
        var v = s(-1);
        e.NEG_ONE = v;
        var N = o(-1, 2147483647, !1);
        e.MAX_VALUE = N;
        var x = o(-1, -1, !0);
        e.MAX_UNSIGNED_VALUE = x;
        var O = o(0, -2147483648, !1);
        e.MIN_VALUE = O;
        var C = e.prototype;
        C.toInt = function() {
          return this.unsigned ? this.low >>> 0 : this.low;
        }, C.toNumber = function() {
          return this.unsigned ? (this.high >>> 0) * m + (this.low >>> 0) : this.high * m + (this.low >>> 0);
        }, C.toString = function(E) {
          if ((E = E || 10) < 2 || 36 < E)
            throw RangeError("radix");
          if (this.isZero())
            return "0";
          if (this.isNegative()) {
            if (this.eq(O)) {
              var P = i(E), G = this.div(P), Z = G.mul(P).sub(this);
              return G.toString(E) + Z.toInt().toString(E);
            }
            return "-" + this.neg().toString(E);
          }
          for (var F = i(n(E, 6), this.unsigned), Y = this, K = ""; ; ) {
            var V = Y.div(F), ne = (Y.sub(V.mul(F)).toInt() >>> 0).toString(E);
            if ((Y = V).isZero())
              return ne + K;
            for (; ne.length < 6; )
              ne = "0" + ne;
            K = "" + ne + K;
          }
        }, C.getHighBits = function() {
          return this.high;
        }, C.getHighBitsUnsigned = function() {
          return this.high >>> 0;
        }, C.getLowBits = function() {
          return this.low;
        }, C.getLowBitsUnsigned = function() {
          return this.low >>> 0;
        }, C.getNumBitsAbs = function() {
          if (this.isNegative())
            return this.eq(O) ? 64 : this.neg().getNumBitsAbs();
          for (var E = this.high != 0 ? this.high : this.low, P = 31; P > 0 && !(E & 1 << P); P--)
            ;
          return this.high != 0 ? P + 33 : P + 1;
        }, C.isZero = function() {
          return this.high === 0 && this.low === 0;
        }, C.eqz = C.isZero, C.isNegative = function() {
          return !this.unsigned && this.high < 0;
        }, C.isPositive = function() {
          return this.unsigned || this.high >= 0;
        }, C.isOdd = function() {
          return (1 & this.low) == 1;
        }, C.isEven = function() {
          return (1 & this.low) == 0;
        }, C.equals = function(E) {
          return r(E) || (E = u(E)), (this.unsigned === E.unsigned || this.high >>> 31 != 1 || E.high >>> 31 != 1) && this.high === E.high && this.low === E.low;
        }, C.eq = C.equals, C.notEquals = function(E) {
          return !this.eq(E);
        }, C.neq = C.notEquals, C.ne = C.notEquals, C.lessThan = function(E) {
          return this.comp(E) < 0;
        }, C.lt = C.lessThan, C.lessThanOrEqual = function(E) {
          return this.comp(E) <= 0;
        }, C.lte = C.lessThanOrEqual, C.le = C.lessThanOrEqual, C.greaterThan = function(E) {
          return this.comp(E) > 0;
        }, C.gt = C.greaterThan, C.greaterThanOrEqual = function(E) {
          return this.comp(E) >= 0;
        }, C.gte = C.greaterThanOrEqual, C.ge = C.greaterThanOrEqual, C.compare = function(E) {
          if (r(E) || (E = u(E)), this.eq(E))
            return 0;
          var P = this.isNegative(), G = E.isNegative();
          return P && !G ? -1 : !P && G ? 1 : this.unsigned ? E.high >>> 0 > this.high >>> 0 || E.high === this.high && E.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(E).isNegative() ? -1 : 1;
        }, C.comp = C.compare, C.negate = function() {
          return !this.unsigned && this.eq(O) ? O : this.not().add(c);
        }, C.neg = C.negate, C.add = function(E) {
          r(E) || (E = u(E));
          var P = this.high >>> 16, G = 65535 & this.high, Z = this.low >>> 16, F = 65535 & this.low, Y = E.high >>> 16, K = 65535 & E.high, V = E.low >>> 16, ne = 0, ae = 0, se = 0, ue = 0;
          return se += (ue += F + (65535 & E.low)) >>> 16, ae += (se += Z + V) >>> 16, ne += (ae += G + K) >>> 16, ne += P + Y, o((se &= 65535) << 16 | (ue &= 65535), (ne &= 65535) << 16 | (ae &= 65535), this.unsigned);
        }, C.subtract = function(E) {
          return r(E) || (E = u(E)), this.add(E.neg());
        }, C.sub = C.subtract, C.multiply = function(E) {
          if (this.isZero())
            return f;
          if (r(E) || (E = u(E)), R)
            return o(R.mul(this.low, this.high, E.low, E.high), R.get_high(), this.unsigned);
          if (E.isZero())
            return f;
          if (this.eq(O))
            return E.isOdd() ? O : f;
          if (E.eq(O))
            return this.isOdd() ? O : f;
          if (this.isNegative())
            return E.isNegative() ? this.neg().mul(E.neg()) : this.neg().mul(E).neg();
          if (E.isNegative())
            return this.mul(E.neg()).neg();
          if (this.lt(d) && E.lt(d))
            return i(this.toNumber() * E.toNumber(), this.unsigned);
          var P = this.high >>> 16, G = 65535 & this.high, Z = this.low >>> 16, F = 65535 & this.low, Y = E.high >>> 16, K = 65535 & E.high, V = E.low >>> 16, ne = 65535 & E.low, ae = 0, se = 0, ue = 0, me = 0;
          return ue += (me += F * ne) >>> 16, se += (ue += Z * ne) >>> 16, ue &= 65535, se += (ue += F * V) >>> 16, ae += (se += G * ne) >>> 16, se &= 65535, ae += (se += Z * V) >>> 16, se &= 65535, ae += (se += F * K) >>> 16, ae += P * ne + G * V + Z * K + F * Y, o((ue &= 65535) << 16 | (me &= 65535), (ae &= 65535) << 16 | (se &= 65535), this.unsigned);
        }, C.mul = C.multiply, C.divide = function(E) {
          if (r(E) || (E = u(E)), E.isZero())
            throw Error("division by zero");
          var P, G, Z;
          if (R)
            return this.unsigned || this.high !== -2147483648 || E.low !== -1 || E.high !== -1 ? o((this.unsigned ? R.div_u : R.div_s)(this.low, this.high, E.low, E.high), R.get_high(), this.unsigned) : this;
          if (this.isZero())
            return this.unsigned ? b : f;
          if (this.unsigned) {
            if (E.unsigned || (E = E.toUnsigned()), E.gt(this))
              return b;
            if (E.gt(this.shru(1)))
              return S;
            Z = b;
          } else {
            if (this.eq(O))
              return E.eq(c) || E.eq(v) ? O : E.eq(O) ? c : (P = this.shr(1).div(E).shl(1)).eq(f) ? E.isNegative() ? c : v : (G = this.sub(E.mul(P)), Z = P.add(G.div(E)));
            if (E.eq(O))
              return this.unsigned ? b : f;
            if (this.isNegative())
              return E.isNegative() ? this.neg().div(E.neg()) : this.neg().div(E).neg();
            if (E.isNegative())
              return this.div(E.neg()).neg();
            Z = f;
          }
          for (G = this; G.gte(E); ) {
            P = Math.max(1, Math.floor(G.toNumber() / E.toNumber()));
            for (var F = Math.ceil(Math.log(P) / Math.LN2), Y = F <= 48 ? 1 : n(2, F - 48), K = i(P), V = K.mul(E); V.isNegative() || V.gt(G); )
              V = (K = i(P -= Y, this.unsigned)).mul(E);
            K.isZero() && (K = c), Z = Z.add(K), G = G.sub(V);
          }
          return Z;
        }, C.div = C.divide, C.modulo = function(E) {
          return r(E) || (E = u(E)), R ? o((this.unsigned ? R.rem_u : R.rem_s)(this.low, this.high, E.low, E.high), R.get_high(), this.unsigned) : this.sub(this.div(E).mul(E));
        }, C.mod = C.modulo, C.rem = C.modulo, C.not = function() {
          return o(~this.low, ~this.high, this.unsigned);
        }, C.and = function(E) {
          return r(E) || (E = u(E)), o(this.low & E.low, this.high & E.high, this.unsigned);
        }, C.or = function(E) {
          return r(E) || (E = u(E)), o(this.low | E.low, this.high | E.high, this.unsigned);
        }, C.xor = function(E) {
          return r(E) || (E = u(E)), o(this.low ^ E.low, this.high ^ E.high, this.unsigned);
        }, C.shiftLeft = function(E) {
          return r(E) && (E = E.toInt()), (E &= 63) == 0 ? this : E < 32 ? o(this.low << E, this.high << E | this.low >>> 32 - E, this.unsigned) : o(0, this.low << E - 32, this.unsigned);
        }, C.shl = C.shiftLeft, C.shiftRight = function(E) {
          return r(E) && (E = E.toInt()), (E &= 63) == 0 ? this : E < 32 ? o(this.low >>> E | this.high << 32 - E, this.high >> E, this.unsigned) : o(this.high >> E - 32, this.high >= 0 ? 0 : -1, this.unsigned);
        }, C.shr = C.shiftRight, C.shiftRightUnsigned = function(E) {
          if (r(E) && (E = E.toInt()), (E &= 63) == 0)
            return this;
          var P = this.high;
          return E < 32 ? o(this.low >>> E | P << 32 - E, P >>> E, this.unsigned) : o(E === 32 ? P : P >>> E - 32, 0, this.unsigned);
        }, C.shru = C.shiftRightUnsigned, C.shr_u = C.shiftRightUnsigned, C.toSigned = function() {
          return this.unsigned ? o(this.low, this.high, !1) : this;
        }, C.toUnsigned = function() {
          return this.unsigned ? this : o(this.low, this.high, !0);
        }, C.toBytes = function(E) {
          return E ? this.toBytesLE() : this.toBytesBE();
        }, C.toBytesLE = function() {
          var E = this.high, P = this.low;
          return [255 & P, P >>> 8 & 255, P >>> 16 & 255, P >>> 24, 255 & E, E >>> 8 & 255, E >>> 16 & 255, E >>> 24];
        }, C.toBytesBE = function() {
          var E = this.high, P = this.low;
          return [E >>> 24, E >>> 16 & 255, E >>> 8 & 255, 255 & E, P >>> 24, P >>> 16 & 255, P >>> 8 & 255, 255 & P];
        }, e.fromBytes = function(E, P, G) {
          return G ? e.fromBytesLE(E, P) : e.fromBytesBE(E, P);
        }, e.fromBytesLE = function(E, P) {
          return new e(E[0] | E[1] << 8 | E[2] << 16 | E[3] << 24, E[4] | E[5] << 8 | E[6] << 16 | E[7] << 24, P);
        }, e.fromBytesBE = function(E, P) {
          return new e(E[4] << 24 | E[5] << 16 | E[6] << 8 | E[7], E[0] << 24 | E[1] << 16 | E[2] << 8 | E[3], P);
        };
      }, 3281: function(p, R, e) {
        p.exports = e(9050);
      }, 2967: function(p) {
        p.exports = r;
        var R, e = /\/|\./;
        function r(t, a) {
          e.test(t) || (t = "google/protobuf/" + t + ".proto", a = { nested: { google: { nested: { protobuf: { nested: a } } } } }), r[t] = a;
        }
        r("any", { Any: { fields: { type_url: { type: "string", id: 1 }, value: { type: "bytes", id: 2 } } } }), r("duration", { Duration: R = { fields: { seconds: { type: "int64", id: 1 }, nanos: { type: "int32", id: 2 } } } }), r("timestamp", { Timestamp: R }), r("empty", { Empty: { fields: {} } }), r("struct", { Struct: { fields: { fields: { keyType: "string", type: "Value", id: 1 } } }, Value: { oneofs: { kind: { oneof: ["nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue"] } }, fields: { nullValue: { type: "NullValue", id: 1 }, numberValue: { type: "double", id: 2 }, stringValue: { type: "string", id: 3 }, boolValue: { type: "bool", id: 4 }, structValue: { type: "Struct", id: 5 }, listValue: { type: "ListValue", id: 6 } } }, NullValue: { values: { NULL_VALUE: 0 } }, ListValue: { fields: { values: { rule: "repeated", type: "Value", id: 1 } } } }), r("wrappers", { DoubleValue: { fields: { value: { type: "double", id: 1 } } }, FloatValue: { fields: { value: { type: "float", id: 1 } } }, Int64Value: { fields: { value: { type: "int64", id: 1 } } }, UInt64Value: { fields: { value: { type: "uint64", id: 1 } } }, Int32Value: { fields: { value: { type: "int32", id: 1 } } }, UInt32Value: { fields: { value: { type: "uint32", id: 1 } } }, BoolValue: { fields: { value: { type: "bool", id: 1 } } }, StringValue: { fields: { value: { type: "string", id: 1 } } }, BytesValue: { fields: { value: { type: "bytes", id: 1 } } } }), r("field_mask", { FieldMask: { fields: { paths: { rule: "repeated", type: "string", id: 1 } } } }), r.get = function(t) {
          return r[t] || null;
        };
      }, 3996: function(p, R, e) {
        var r = R, t = e(7025), a = e(9935);
        function s(o, n, l, u) {
          if (n.resolvedType)
            if (n.resolvedType instanceof t) {
              o("switch(d%s){", u);
              for (var m = n.resolvedType.values, g = Object.keys(m), h = 0; h < g.length; ++h)
                n.repeated && m[g[h]] === n.typeDefault && o("default:"), o("case%j:", g[h])("case %i:", m[g[h]])("m%s=%j", u, m[g[h]])("break");
              o("}");
            } else
              o('if(typeof d%s!=="object")', u)("throw TypeError(%j)", n.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", u, l, u);
          else {
            var d = !1;
            switch (n.type) {
              case "double":
              case "float":
                o("m%s=Number(d%s)", u, u);
                break;
              case "uint32":
              case "fixed32":
                o("m%s=d%s>>>0", u, u);
                break;
              case "int32":
              case "sint32":
              case "sfixed32":
                o("m%s=d%s|0", u, u);
                break;
              case "uint64":
                d = !0;
              case "int64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                o("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", u, u, d)('else if(typeof d%s==="string")', u)("m%s=parseInt(d%s,10)", u, u)('else if(typeof d%s==="number")', u)("m%s=d%s", u, u)('else if(typeof d%s==="object")', u)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", u, u, u, d ? "true" : "");
                break;
              case "bytes":
                o('if(typeof d%s==="string")', u)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", u, u, u)("else if(d%s.length)", u)("m%s=d%s", u, u);
                break;
              case "string":
                o("m%s=String(d%s)", u, u);
                break;
              case "bool":
                o("m%s=Boolean(d%s)", u, u);
            }
          }
          return o;
        }
        function i(o, n, l, u) {
          if (n.resolvedType)
            n.resolvedType instanceof t ? o("d%s=o.enums===String?types[%i].values[m%s]:m%s", u, l, u, u) : o("d%s=types[%i].toObject(m%s,o)", u, l, u);
          else {
            var m = !1;
            switch (n.type) {
              case "double":
              case "float":
                o("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", u, u, u, u);
                break;
              case "uint64":
                m = !0;
              case "int64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                o('if(typeof m%s==="number")', u)("d%s=o.longs===String?String(m%s):m%s", u, u, u)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", u, u, u, u, m ? "true" : "", u);
                break;
              case "bytes":
                o("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", u, u, u, u, u);
                break;
              default:
                o("d%s=m%s", u, u);
            }
          }
          return o;
        }
        r.fromObject = function(o) {
          var n = o.fieldsArray, l = a.codegen(["d"], o.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
          if (!n.length)
            return l("return new this.ctor");
          l("var m=new this.ctor");
          for (var u = 0; u < n.length; ++u) {
            var m = n[u].resolve(), g = a.safeProp(m.name);
            m.map ? (l("if(d%s){", g)('if(typeof d%s!=="object")', g)("throw TypeError(%j)", m.fullName + ": object expected")("m%s={}", g)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", g), s(l, m, u, g + "[ks[i]]")("}")("}")) : m.repeated ? (l("if(d%s){", g)("if(!Array.isArray(d%s))", g)("throw TypeError(%j)", m.fullName + ": array expected")("m%s=[]", g)("for(var i=0;i<d%s.length;++i){", g), s(l, m, u, g + "[i]")("}")("}")) : (m.resolvedType instanceof t || l("if(d%s!=null){", g), s(l, m, u, g), m.resolvedType instanceof t || l("}"));
          }
          return l("return m");
        }, r.toObject = function(o) {
          var n = o.fieldsArray.slice().sort(a.compareFieldsById);
          if (!n.length)
            return a.codegen()("return {}");
          for (var l = a.codegen(["m", "o"], o.name + "$toObject")("if(!o)")("o={}")("var d={}"), u = [], m = [], g = [], h = 0; h < n.length; ++h)
            n[h].partOf || (n[h].resolve().repeated ? u : n[h].map ? m : g).push(n[h]);
          if (u.length) {
            for (l("if(o.arrays||o.defaults){"), h = 0; h < u.length; ++h)
              l("d%s=[]", a.safeProp(u[h].name));
            l("}");
          }
          if (m.length) {
            for (l("if(o.objects||o.defaults){"), h = 0; h < m.length; ++h)
              l("d%s={}", a.safeProp(m[h].name));
            l("}");
          }
          if (g.length) {
            for (l("if(o.defaults){"), h = 0; h < g.length; ++h) {
              var d = g[h], f = a.safeProp(d.name);
              if (d.resolvedType instanceof t)
                l("d%s=o.enums===String?%j:%j", f, d.resolvedType.valuesById[d.typeDefault], d.typeDefault);
              else if (d.long)
                l("if(util.Long){")("var n=new util.Long(%i,%i,%j)", d.typeDefault.low, d.typeDefault.high, d.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", f)("}else")("d%s=o.longs===String?%j:%i", f, d.typeDefault.toString(), d.typeDefault.toNumber());
              else if (d.bytes) {
                var b = "[" + Array.prototype.slice.call(d.typeDefault).join(",") + "]";
                l("if(o.bytes===String)d%s=%j", f, String.fromCharCode.apply(String, d.typeDefault))("else{")("d%s=%s", f, b)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", f, f)("}");
              } else
                l("d%s=%j", f, d.typeDefault);
            }
            l("}");
          }
          var c = !1;
          for (h = 0; h < n.length; ++h) {
            d = n[h];
            var S = o._fieldsArray.indexOf(d);
            f = a.safeProp(d.name), d.map ? (c || (c = !0, l("var ks2")), l("if(m%s&&(ks2=Object.keys(m%s)).length){", f, f)("d%s={}", f)("for(var j=0;j<ks2.length;++j){"), i(l, d, S, f + "[ks2[j]]")("}")) : d.repeated ? (l("if(m%s&&m%s.length){", f, f)("d%s=[]", f)("for(var j=0;j<m%s.length;++j){", f), i(l, d, S, f + "[j]")("}")) : (l("if(m%s!=null&&m.hasOwnProperty(%j)){", f, d.name), i(l, d, S, f), d.partOf && l("if(o.oneofs)")("d%s=%j", a.safeProp(d.partOf.name), d.name)), l("}");
          }
          return l("return d");
        };
      }, 5305: function(p, R, e) {
        p.exports = function(i) {
          var o = a.codegen(["r", "l"], i.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (i.fieldsArray.filter(function(h) {
            return h.map;
          }).length ? ",k,value" : ""))("while(r.pos<c){")("var t=r.uint32()");
          i.group && o("if((t&7)===4)")("break"), o("switch(t>>>3){");
          for (var n = 0; n < i.fieldsArray.length; ++n) {
            var l = i._fieldsArray[n].resolve(), u = l.resolvedType instanceof r ? "int32" : l.type, m = "m" + a.safeProp(l.name);
            o("case %i:", l.id), l.map ? (o("if(%s===util.emptyObject)", m)("%s={}", m)("var c2 = r.uint32()+r.pos"), t.defaults[l.keyType] !== void 0 ? o("k=%j", t.defaults[l.keyType]) : o("k=null"), t.defaults[u] !== void 0 ? o("value=%j", t.defaults[u]) : o("value=null"), o("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", l.keyType)("case 2:"), t.basic[u] === void 0 ? o("value=types[%i].decode(r,r.uint32())", n) : o("value=r.%s()", u), o("break")("default:")("r.skipType(tag2&7)")("break")("}")("}"), t.long[l.keyType] !== void 0 ? o('%s[typeof k==="object"?util.longToHash(k):k]=value', m) : o("%s[k]=value", m)) : l.repeated ? (o("if(!(%s&&%s.length))", m, m)("%s=[]", m), t.packed[u] !== void 0 && o("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", m, u)("}else"), t.basic[u] === void 0 ? o(l.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", m, n) : o("%s.push(r.%s())", m, u)) : t.basic[u] === void 0 ? o(l.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", m, n) : o("%s=r.%s()", m, u), o("break");
          }
          for (o("default:")("r.skipType(t&7)")("break")("}")("}"), n = 0; n < i._fieldsArray.length; ++n) {
            var g = i._fieldsArray[n];
            g.required && o("if(!m.hasOwnProperty(%j))", g.name)("throw util.ProtocolError(%j,{instance:m})", s(g));
          }
          return o("return m");
        };
        var r = e(7025), t = e(7063), a = e(9935);
        function s(i) {
          return "missing required '" + i.name + "'";
        }
      }, 4928: function(p, R, e) {
        p.exports = function(i) {
          for (var o, n = a.codegen(["m", "w"], i.name + "$encode")("if(!w)")("w=Writer.create()"), l = i.fieldsArray.slice().sort(a.compareFieldsById), u = 0; u < l.length; ++u) {
            var m = l[u].resolve(), g = i._fieldsArray.indexOf(m), h = m.resolvedType instanceof r ? "int32" : m.type, d = t.basic[h];
            o = "m" + a.safeProp(m.name), m.map ? (n("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", o, m.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", o)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (m.id << 3 | 2) >>> 0, 8 | t.mapKey[m.keyType], m.keyType), d === void 0 ? n("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", g, o) : n(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | d, h, o), n("}")("}")) : m.repeated ? (n("if(%s!=null&&%s.length){", o, o), m.packed && t.packed[h] !== void 0 ? n("w.uint32(%i).fork()", (m.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", o)("w.%s(%s[i])", h, o)("w.ldelim()") : (n("for(var i=0;i<%s.length;++i)", o), d === void 0 ? s(n, m, g, o + "[i]") : n("w.uint32(%i).%s(%s[i])", (m.id << 3 | d) >>> 0, h, o)), n("}")) : (m.optional && n("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", o, m.name), d === void 0 ? s(n, m, g, o) : n("w.uint32(%i).%s(%s)", (m.id << 3 | d) >>> 0, h, o));
          }
          return n("return w");
        };
        var r = e(7025), t = e(7063), a = e(9935);
        function s(i, o, n, l) {
          return o.resolvedType.group ? i("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", n, l, (o.id << 3 | 3) >>> 0, (o.id << 3 | 4) >>> 0) : i("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", n, l, (o.id << 3 | 2) >>> 0);
        }
      }, 7025: function(p, R, e) {
        p.exports = s;
        var r = e(3243);
        ((s.prototype = Object.create(r.prototype)).constructor = s).className = "Enum";
        var t = e(9313), a = e(9935);
        function s(i, o, n, l, u) {
          if (r.call(this, i, n), o && typeof o != "object")
            throw TypeError("values must be an object");
          if (this.valuesById = {}, this.values = Object.create(this.valuesById), this.comment = l, this.comments = u || {}, this.reserved = void 0, o)
            for (var m = Object.keys(o), g = 0; g < m.length; ++g)
              typeof o[m[g]] == "number" && (this.valuesById[this.values[m[g]] = o[m[g]]] = m[g]);
        }
        s.fromJSON = function(i, o) {
          var n = new s(i, o.values, o.options, o.comment, o.comments);
          return n.reserved = o.reserved, n;
        }, s.prototype.toJSON = function(i) {
          var o = !!i && !!i.keepComments;
          return a.toObject(["options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : void 0, "comment", o ? this.comment : void 0, "comments", o ? this.comments : void 0]);
        }, s.prototype.add = function(i, o, n) {
          if (!a.isString(i))
            throw TypeError("name must be a string");
          if (!a.isInteger(o))
            throw TypeError("id must be an integer");
          if (this.values[i] !== void 0)
            throw Error("duplicate name '" + i + "' in " + this);
          if (this.isReservedId(o))
            throw Error("id " + o + " is reserved in " + this);
          if (this.isReservedName(i))
            throw Error("name '" + i + "' is reserved in " + this);
          if (this.valuesById[o] !== void 0) {
            if (!this.options || !this.options.allow_alias)
              throw Error("duplicate id " + o + " in " + this);
            this.values[i] = o;
          } else
            this.valuesById[this.values[i] = o] = i;
          return this.comments[i] = n || null, this;
        }, s.prototype.remove = function(i) {
          if (!a.isString(i))
            throw TypeError("name must be a string");
          var o = this.values[i];
          if (o == null)
            throw Error("name '" + i + "' does not exist in " + this);
          return delete this.valuesById[o], delete this.values[i], delete this.comments[i], this;
        }, s.prototype.isReservedId = function(i) {
          return t.isReservedId(this.reserved, i);
        }, s.prototype.isReservedName = function(i) {
          return t.isReservedName(this.reserved, i);
        };
      }, 3548: function(p, R, e) {
        p.exports = n;
        var r = e(3243);
        ((n.prototype = Object.create(r.prototype)).constructor = n).className = "Field";
        var t, a = e(7025), s = e(7063), i = e(9935), o = /^required|optional|repeated$/;
        function n(l, u, m, g, h, d, f) {
          if (i.isObject(g) ? (f = h, d = g, g = h = void 0) : i.isObject(h) && (f = d, d = h, h = void 0), r.call(this, l, d), !i.isInteger(u) || u < 0)
            throw TypeError("id must be a non-negative integer");
          if (!i.isString(m))
            throw TypeError("type must be a string");
          if (g !== void 0 && !o.test(g = g.toString().toLowerCase()))
            throw TypeError("rule must be a string rule");
          if (h !== void 0 && !i.isString(h))
            throw TypeError("extend must be a string");
          g === "proto3_optional" && (g = "optional"), this.rule = g && g !== "optional" ? g : void 0, this.type = m, this.id = u, this.extend = h || void 0, this.required = g === "required", this.optional = !this.required, this.repeated = g === "repeated", this.map = !1, this.message = null, this.partOf = null, this.typeDefault = null, this.defaultValue = null, this.long = !!i.Long && s.long[m] !== void 0, this.bytes = m === "bytes", this.resolvedType = null, this.extensionField = null, this.declaringField = null, this._packed = null, this.comment = f;
        }
        n.fromJSON = function(l, u) {
          return new n(l, u.id, u.type, u.rule, u.extend, u.options, u.comment);
        }, Object.defineProperty(n.prototype, "packed", { get: function() {
          return this._packed === null && (this._packed = this.getOption("packed") !== !1), this._packed;
        } }), n.prototype.setOption = function(l, u, m) {
          return l === "packed" && (this._packed = null), r.prototype.setOption.call(this, l, u, m);
        }, n.prototype.toJSON = function(l) {
          var u = !!l && !!l.keepComments;
          return i.toObject(["rule", this.rule !== "optional" && this.rule || void 0, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", u ? this.comment : void 0]);
        }, n.prototype.resolve = function() {
          if (this.resolved)
            return this;
          if ((this.typeDefault = s.defaults[this.type]) === void 0 && (this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type), this.resolvedType instanceof t ? this.typeDefault = null : this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]), this.options && this.options.default != null && (this.typeDefault = this.options.default, this.resolvedType instanceof a && typeof this.typeDefault == "string" && (this.typeDefault = this.resolvedType.values[this.typeDefault])), this.options && (this.options.packed !== !0 && (this.options.packed === void 0 || !this.resolvedType || this.resolvedType instanceof a) || delete this.options.packed, Object.keys(this.options).length || (this.options = void 0)), this.long)
            this.typeDefault = i.Long.fromNumber(this.typeDefault, this.type.charAt(0) === "u"), Object.freeze && Object.freeze(this.typeDefault);
          else if (this.bytes && typeof this.typeDefault == "string") {
            var l;
            i.base64.test(this.typeDefault) ? i.base64.decode(this.typeDefault, l = i.newBuffer(i.base64.length(this.typeDefault)), 0) : i.utf8.write(this.typeDefault, l = i.newBuffer(i.utf8.length(this.typeDefault)), 0), this.typeDefault = l;
          }
          return this.map ? this.defaultValue = i.emptyObject : this.repeated ? this.defaultValue = i.emptyArray : this.defaultValue = this.typeDefault, this.parent instanceof t && (this.parent.ctor.prototype[this.name] = this.defaultValue), r.prototype.resolve.call(this);
        }, n.d = function(l, u, m, g) {
          return typeof u == "function" ? u = i.decorateType(u).name : u && typeof u == "object" && (u = i.decorateEnum(u).name), function(h, d) {
            i.decorateType(h.constructor).add(new n(d, l, u, m, { default: g }));
          };
        }, n._configure = function(l) {
          t = l;
        };
      }, 8836: function(p, R, e) {
        var r = p.exports = e(9482);
        r.build = "light", r.load = function(t, a, s) {
          return typeof a == "function" ? (s = a, a = new r.Root()) : a || (a = new r.Root()), a.load(t, s);
        }, r.loadSync = function(t, a) {
          return a || (a = new r.Root()), a.loadSync(t);
        }, r.encoder = e(4928), r.decoder = e(5305), r.verifier = e(4497), r.converter = e(3996), r.ReflectionObject = e(3243), r.Namespace = e(9313), r.Root = e(9424), r.Enum = e(7025), r.Type = e(7645), r.Field = e(3548), r.OneOf = e(7598), r.MapField = e(6039), r.Service = e(7513), r.Method = e(4429), r.Message = e(8368), r.wrappers = e(1667), r.types = e(7063), r.util = e(9935), r.ReflectionObject._configure(r.Root), r.Namespace._configure(r.Type, r.Service, r.Enum), r.Root._configure(r.Type), r.Field._configure(r.Type);
      }, 9482: function(p, R, e) {
        var r = R;
        function t() {
          r.util._configure(), r.Writer._configure(r.BufferWriter), r.Reader._configure(r.BufferReader);
        }
        r.build = "minimal", r.Writer = e(1173), r.BufferWriter = e(3155), r.Reader = e(1408), r.BufferReader = e(593), r.util = e(9693), r.rpc = e(5994), r.roots = e(5054), r.configure = t, t();
      }, 9050: function(p, R, e) {
        var r = p.exports = e(8836);
        r.build = "full", r.tokenize = e(626), r.parse = e(2228), r.common = e(2967), r.Root._configure(r.Type, r.parse, r.common);
      }, 6039: function(p, R, e) {
        p.exports = s;
        var r = e(3548);
        ((s.prototype = Object.create(r.prototype)).constructor = s).className = "MapField";
        var t = e(7063), a = e(9935);
        function s(i, o, n, l, u, m) {
          if (r.call(this, i, o, l, void 0, void 0, u, m), !a.isString(n))
            throw TypeError("keyType must be a string");
          this.keyType = n, this.resolvedKeyType = null, this.map = !0;
        }
        s.fromJSON = function(i, o) {
          return new s(i, o.id, o.keyType, o.type, o.options, o.comment);
        }, s.prototype.toJSON = function(i) {
          var o = !!i && !!i.keepComments;
          return a.toObject(["keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", o ? this.comment : void 0]);
        }, s.prototype.resolve = function() {
          if (this.resolved)
            return this;
          if (t.mapKey[this.keyType] === void 0)
            throw Error("invalid key type: " + this.keyType);
          return r.prototype.resolve.call(this);
        }, s.d = function(i, o, n) {
          return typeof n == "function" ? n = a.decorateType(n).name : n && typeof n == "object" && (n = a.decorateEnum(n).name), function(l, u) {
            a.decorateType(l.constructor).add(new s(u, i, o, n));
          };
        };
      }, 8368: function(p, R, e) {
        p.exports = t;
        var r = e(9693);
        function t(a) {
          if (a)
            for (var s = Object.keys(a), i = 0; i < s.length; ++i)
              this[s[i]] = a[s[i]];
        }
        t.create = function(a) {
          return this.$type.create(a);
        }, t.encode = function(a, s) {
          return this.$type.encode(a, s);
        }, t.encodeDelimited = function(a, s) {
          return this.$type.encodeDelimited(a, s);
        }, t.decode = function(a) {
          return this.$type.decode(a);
        }, t.decodeDelimited = function(a) {
          return this.$type.decodeDelimited(a);
        }, t.verify = function(a) {
          return this.$type.verify(a);
        }, t.fromObject = function(a) {
          return this.$type.fromObject(a);
        }, t.toObject = function(a, s) {
          return this.$type.toObject(a, s);
        }, t.prototype.toJSON = function() {
          return this.$type.toObject(this, r.toJSONOptions);
        };
      }, 4429: function(p, R, e) {
        p.exports = a;
        var r = e(3243);
        ((a.prototype = Object.create(r.prototype)).constructor = a).className = "Method";
        var t = e(9935);
        function a(s, i, o, n, l, u, m, g, h) {
          if (t.isObject(l) ? (m = l, l = u = void 0) : t.isObject(u) && (m = u, u = void 0), i !== void 0 && !t.isString(i))
            throw TypeError("type must be a string");
          if (!t.isString(o))
            throw TypeError("requestType must be a string");
          if (!t.isString(n))
            throw TypeError("responseType must be a string");
          r.call(this, s, m), this.type = i || "rpc", this.requestType = o, this.requestStream = !!l || void 0, this.responseType = n, this.responseStream = !!u || void 0, this.resolvedRequestType = null, this.resolvedResponseType = null, this.comment = g, this.parsedOptions = h;
        }
        a.fromJSON = function(s, i) {
          return new a(s, i.type, i.requestType, i.responseType, i.requestStream, i.responseStream, i.options, i.comment, i.parsedOptions);
        }, a.prototype.toJSON = function(s) {
          var i = !!s && !!s.keepComments;
          return t.toObject(["type", this.type !== "rpc" && this.type || void 0, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", i ? this.comment : void 0, "parsedOptions", this.parsedOptions]);
        }, a.prototype.resolve = function() {
          return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), r.prototype.resolve.call(this));
        };
      }, 9313: function(p, R, e) {
        p.exports = u;
        var r = e(3243);
        ((u.prototype = Object.create(r.prototype)).constructor = u).className = "Namespace";
        var t, a, s, i = e(3548), o = e(7598), n = e(9935);
        function l(g, h) {
          if (g && g.length) {
            for (var d = {}, f = 0; f < g.length; ++f)
              d[g[f].name] = g[f].toJSON(h);
            return d;
          }
        }
        function u(g, h) {
          r.call(this, g, h), this.nested = void 0, this._nestedArray = null;
        }
        function m(g) {
          return g._nestedArray = null, g;
        }
        u.fromJSON = function(g, h) {
          return new u(g, h.options).addJSON(h.nested);
        }, u.arrayToJSON = l, u.isReservedId = function(g, h) {
          if (g) {
            for (var d = 0; d < g.length; ++d)
              if (typeof g[d] != "string" && g[d][0] <= h && g[d][1] > h)
                return !0;
          }
          return !1;
        }, u.isReservedName = function(g, h) {
          if (g) {
            for (var d = 0; d < g.length; ++d)
              if (g[d] === h)
                return !0;
          }
          return !1;
        }, Object.defineProperty(u.prototype, "nestedArray", { get: function() {
          return this._nestedArray || (this._nestedArray = n.toArray(this.nested));
        } }), u.prototype.toJSON = function(g) {
          return n.toObject(["options", this.options, "nested", l(this.nestedArray, g)]);
        }, u.prototype.addJSON = function(g) {
          if (g)
            for (var h, d = Object.keys(g), f = 0; f < d.length; ++f)
              h = g[d[f]], this.add((h.fields !== void 0 ? t.fromJSON : h.values !== void 0 ? s.fromJSON : h.methods !== void 0 ? a.fromJSON : h.id !== void 0 ? i.fromJSON : u.fromJSON)(d[f], h));
          return this;
        }, u.prototype.get = function(g) {
          return this.nested && this.nested[g] || null;
        }, u.prototype.getEnum = function(g) {
          if (this.nested && this.nested[g] instanceof s)
            return this.nested[g].values;
          throw Error("no such enum: " + g);
        }, u.prototype.add = function(g) {
          if (!(g instanceof i && g.extend !== void 0 || g instanceof t || g instanceof s || g instanceof a || g instanceof u || g instanceof o))
            throw TypeError("object must be a valid nested object");
          if (this.nested) {
            var h = this.get(g.name);
            if (h) {
              if (!(h instanceof u && g instanceof u) || h instanceof t || h instanceof a)
                throw Error("duplicate name '" + g.name + "' in " + this);
              for (var d = h.nestedArray, f = 0; f < d.length; ++f)
                g.add(d[f]);
              this.remove(h), this.nested || (this.nested = {}), g.setOptions(h.options, !0);
            }
          } else
            this.nested = {};
          return this.nested[g.name] = g, g.onAdd(this), m(this);
        }, u.prototype.remove = function(g) {
          if (!(g instanceof r))
            throw TypeError("object must be a ReflectionObject");
          if (g.parent !== this)
            throw Error(g + " is not a member of " + this);
          return delete this.nested[g.name], Object.keys(this.nested).length || (this.nested = void 0), g.onRemove(this), m(this);
        }, u.prototype.define = function(g, h) {
          if (n.isString(g))
            g = g.split(".");
          else if (!Array.isArray(g))
            throw TypeError("illegal path");
          if (g && g.length && g[0] === "")
            throw Error("path must be relative");
          for (var d = this; g.length > 0; ) {
            var f = g.shift();
            if (d.nested && d.nested[f]) {
              if (!((d = d.nested[f]) instanceof u))
                throw Error("path conflicts with non-namespace objects");
            } else
              d.add(d = new u(f));
          }
          return h && d.addJSON(h), d;
        }, u.prototype.resolveAll = function() {
          for (var g = this.nestedArray, h = 0; h < g.length; )
            g[h] instanceof u ? g[h++].resolveAll() : g[h++].resolve();
          return this.resolve();
        }, u.prototype.lookup = function(g, h, d) {
          if (typeof h == "boolean" ? (d = h, h = void 0) : h && !Array.isArray(h) && (h = [h]), n.isString(g) && g.length) {
            if (g === ".")
              return this.root;
            g = g.split(".");
          } else if (!g.length)
            return this;
          if (g[0] === "")
            return this.root.lookup(g.slice(1), h);
          var f = this.get(g[0]);
          if (f) {
            if (g.length === 1) {
              if (!h || h.indexOf(f.constructor) > -1)
                return f;
            } else if (f instanceof u && (f = f.lookup(g.slice(1), h, !0)))
              return f;
          } else
            for (var b = 0; b < this.nestedArray.length; ++b)
              if (this._nestedArray[b] instanceof u && (f = this._nestedArray[b].lookup(g, h, !0)))
                return f;
          return this.parent === null || d ? null : this.parent.lookup(g, h);
        }, u.prototype.lookupType = function(g) {
          var h = this.lookup(g, [t]);
          if (!h)
            throw Error("no such type: " + g);
          return h;
        }, u.prototype.lookupEnum = function(g) {
          var h = this.lookup(g, [s]);
          if (!h)
            throw Error("no such Enum '" + g + "' in " + this);
          return h;
        }, u.prototype.lookupTypeOrEnum = function(g) {
          var h = this.lookup(g, [t, s]);
          if (!h)
            throw Error("no such Type or Enum '" + g + "' in " + this);
          return h;
        }, u.prototype.lookupService = function(g) {
          var h = this.lookup(g, [a]);
          if (!h)
            throw Error("no such Service '" + g + "' in " + this);
          return h;
        }, u._configure = function(g, h, d) {
          t = g, a = h, s = d;
        };
      }, 3243: function(p, R, e) {
        p.exports = a, a.className = "ReflectionObject";
        var r, t = e(9935);
        function a(s, i) {
          if (!t.isString(s))
            throw TypeError("name must be a string");
          if (i && !t.isObject(i))
            throw TypeError("options must be an object");
          this.options = i, this.parsedOptions = null, this.name = s, this.parent = null, this.resolved = !1, this.comment = null, this.filename = null;
        }
        Object.defineProperties(a.prototype, { root: { get: function() {
          for (var s = this; s.parent !== null; )
            s = s.parent;
          return s;
        } }, fullName: { get: function() {
          for (var s = [this.name], i = this.parent; i; )
            s.unshift(i.name), i = i.parent;
          return s.join(".");
        } } }), a.prototype.toJSON = function() {
          throw Error();
        }, a.prototype.onAdd = function(s) {
          this.parent && this.parent !== s && this.parent.remove(this), this.parent = s, this.resolved = !1;
          var i = s.root;
          i instanceof r && i._handleAdd(this);
        }, a.prototype.onRemove = function(s) {
          var i = s.root;
          i instanceof r && i._handleRemove(this), this.parent = null, this.resolved = !1;
        }, a.prototype.resolve = function() {
          return this.resolved || this.root instanceof r && (this.resolved = !0), this;
        }, a.prototype.getOption = function(s) {
          if (this.options)
            return this.options[s];
        }, a.prototype.setOption = function(s, i, o) {
          return o && this.options && this.options[s] !== void 0 || ((this.options || (this.options = {}))[s] = i), this;
        }, a.prototype.setParsedOption = function(s, i, o) {
          this.parsedOptions || (this.parsedOptions = []);
          var n = this.parsedOptions;
          if (o) {
            var l = n.find(function(g) {
              return Object.prototype.hasOwnProperty.call(g, s);
            });
            if (l) {
              var u = l[s];
              t.setProperty(u, o, i);
            } else
              (l = {})[s] = t.setProperty({}, o, i), n.push(l);
          } else {
            var m = {};
            m[s] = i, n.push(m);
          }
          return this;
        }, a.prototype.setOptions = function(s, i) {
          if (s)
            for (var o = Object.keys(s), n = 0; n < o.length; ++n)
              this.setOption(o[n], s[o[n]], i);
          return this;
        }, a.prototype.toString = function() {
          var s = this.constructor.className, i = this.fullName;
          return i.length ? s + " " + i : s;
        }, a._configure = function(s) {
          r = s;
        };
      }, 7598: function(p, R, e) {
        p.exports = s;
        var r = e(3243);
        ((s.prototype = Object.create(r.prototype)).constructor = s).className = "OneOf";
        var t = e(3548), a = e(9935);
        function s(o, n, l, u) {
          if (Array.isArray(n) || (l = n, n = void 0), r.call(this, o, l), n !== void 0 && !Array.isArray(n))
            throw TypeError("fieldNames must be an Array");
          this.oneof = n || [], this.fieldsArray = [], this.comment = u;
        }
        function i(o) {
          if (o.parent)
            for (var n = 0; n < o.fieldsArray.length; ++n)
              o.fieldsArray[n].parent || o.parent.add(o.fieldsArray[n]);
        }
        s.fromJSON = function(o, n) {
          return new s(o, n.oneof, n.options, n.comment);
        }, s.prototype.toJSON = function(o) {
          var n = !!o && !!o.keepComments;
          return a.toObject(["options", this.options, "oneof", this.oneof, "comment", n ? this.comment : void 0]);
        }, s.prototype.add = function(o) {
          if (!(o instanceof t))
            throw TypeError("field must be a Field");
          return o.parent && o.parent !== this.parent && o.parent.remove(o), this.oneof.push(o.name), this.fieldsArray.push(o), o.partOf = this, i(this), this;
        }, s.prototype.remove = function(o) {
          if (!(o instanceof t))
            throw TypeError("field must be a Field");
          var n = this.fieldsArray.indexOf(o);
          if (n < 0)
            throw Error(o + " is not a member of " + this);
          return this.fieldsArray.splice(n, 1), (n = this.oneof.indexOf(o.name)) > -1 && this.oneof.splice(n, 1), o.partOf = null, this;
        }, s.prototype.onAdd = function(o) {
          r.prototype.onAdd.call(this, o);
          for (var n = 0; n < this.oneof.length; ++n) {
            var l = o.get(this.oneof[n]);
            l && !l.partOf && (l.partOf = this, this.fieldsArray.push(l));
          }
          i(this);
        }, s.prototype.onRemove = function(o) {
          for (var n, l = 0; l < this.fieldsArray.length; ++l)
            (n = this.fieldsArray[l]).parent && n.parent.remove(n);
          r.prototype.onRemove.call(this, o);
        }, s.d = function() {
          for (var o = new Array(arguments.length), n = 0; n < arguments.length; )
            o[n] = arguments[n++];
          return function(l, u) {
            a.decorateType(l.constructor).add(new s(u, o)), Object.defineProperty(l, u, { get: a.oneOfGetter(o), set: a.oneOfSetter(o) });
          };
        };
      }, 2228: function(p, R, e) {
        p.exports = C, C.filename = null, C.defaults = { keepCase: !1 };
        var r = e(626), t = e(9424), a = e(7645), s = e(3548), i = e(6039), o = e(7598), n = e(7025), l = e(7513), u = e(4429), m = e(7063), g = e(9935), h = /^[1-9][0-9]*$/, d = /^-?[1-9][0-9]*$/, f = /^0[x][0-9a-fA-F]+$/, b = /^-?0[x][0-9a-fA-F]+$/, c = /^0[0-7]+$/, S = /^-?0[0-7]+$/, v = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/, N = /^[a-zA-Z_][a-zA-Z_0-9]*$/, x = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/, O = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;
        function C(E, P, G) {
          P instanceof t || (G = P, P = new t()), G || (G = C.defaults);
          var Z, F, Y, K, V, ne = G.preferTrailingComment || !1, ae = r(E, G.alternateCommentMode || !1), se = ae.next, ue = ae.push, me = ae.peek, ge = ae.skip, Ce = ae.cmnt, Re = !0, Ie = !1, Oe = P, fe = G.keepCase ? function(j) {
            return j;
          } : g.camelCase;
          function ce(j, B, T) {
            var W = C.filename;
            return T || (C.filename = null), Error("illegal " + (B || "token") + " '" + j + "' (" + (W ? W + ", " : "") + "line " + ae.line + ")");
          }
          function Ue() {
            var j, B = [];
            do {
              if ((j = se()) !== '"' && j !== "'")
                throw ce(j);
              B.push(se()), ge(j), j = me();
            } while (j === '"' || j === "'");
            return B.join("");
          }
          function Ke(j) {
            var B = se();
            switch (B) {
              case "'":
              case '"':
                return ue(B), Ue();
              case "true":
              case "TRUE":
                return !0;
              case "false":
              case "FALSE":
                return !1;
            }
            try {
              return function(T, W) {
                var _ = 1;
                switch (T.charAt(0) === "-" && (_ = -1, T = T.substring(1)), T) {
                  case "inf":
                  case "INF":
                  case "Inf":
                    return _ * (1 / 0);
                  case "nan":
                  case "NAN":
                  case "Nan":
                  case "NaN":
                    return NaN;
                  case "0":
                    return 0;
                }
                if (h.test(T))
                  return _ * parseInt(T, 10);
                if (f.test(T))
                  return _ * parseInt(T, 16);
                if (c.test(T))
                  return _ * parseInt(T, 8);
                if (v.test(T))
                  return _ * parseFloat(T);
                throw ce(T, "number", !0);
              }(B);
            } catch {
              if (j && x.test(B))
                return B;
              throw ce(B, "value");
            }
          }
          function $e(j, B) {
            var T, W;
            do
              !B || (T = me()) !== '"' && T !== "'" ? j.push([W = Ve(se()), ge("to", !0) ? Ve(se()) : W]) : j.push(Ue());
            while (ge(",", !0));
            ge(";");
          }
          function Ve(j, B) {
            switch (j) {
              case "max":
              case "MAX":
              case "Max":
                return 536870911;
              case "0":
                return 0;
            }
            if (!B && j.charAt(0) === "-")
              throw ce(j, "id");
            if (d.test(j))
              return parseInt(j, 10);
            if (b.test(j))
              return parseInt(j, 16);
            if (S.test(j))
              return parseInt(j, 8);
            throw ce(j, "id");
          }
          function Be() {
            if (Z !== void 0)
              throw ce("package");
            if (Z = se(), !x.test(Z))
              throw ce(Z, "name");
            Oe = Oe.define(Z), ge(";");
          }
          function Ze() {
            var j, B = me();
            switch (B) {
              case "weak":
                j = Y || (Y = []), se();
                break;
              case "public":
                se();
              default:
                j = F || (F = []);
            }
            B = Ue(), ge(";"), j.push(B);
          }
          function Qe() {
            if (ge("="), K = Ue(), !(Ie = K === "proto3") && K !== "proto2")
              throw ce(K, "syntax");
            ge(";");
          }
          function Pe(j, B) {
            switch (B) {
              case "option":
                return ve(j, B), ge(";"), !0;
              case "message":
                return function(T, W) {
                  if (!N.test(W = se()))
                    throw ce(W, "type name");
                  var _ = new a(W);
                  Le(_, function(A) {
                    if (!Pe(_, A))
                      switch (A) {
                        case "map":
                          (function(L) {
                            ge("<");
                            var w = se();
                            if (m.mapKey[w] === void 0)
                              throw ce(w, "type");
                            ge(",");
                            var k = se();
                            if (!x.test(k))
                              throw ce(k, "type");
                            ge(">");
                            var y = se();
                            if (!N.test(y))
                              throw ce(y, "name");
                            ge("=");
                            var I = new i(fe(y), Ve(se()), w, k);
                            Le(I, function(H) {
                              if (H !== "option")
                                throw ce(H);
                              ve(I, H), ge(";");
                            }, function() {
                              Ne(I);
                            }), L.add(I);
                          })(_);
                          break;
                        case "required":
                        case "repeated":
                          xe(_, A);
                          break;
                        case "optional":
                          xe(_, Ie ? "proto3_optional" : "optional");
                          break;
                        case "oneof":
                          (function(L, w) {
                            if (!N.test(w = se()))
                              throw ce(w, "name");
                            var k = new o(fe(w));
                            Le(k, function(y) {
                              y === "option" ? (ve(k, y), ge(";")) : (ue(y), xe(k, "optional"));
                            }), L.add(k);
                          })(_, A);
                          break;
                        case "extensions":
                          $e(_.extensions || (_.extensions = []));
                          break;
                        case "reserved":
                          $e(_.reserved || (_.reserved = []), !0);
                          break;
                        default:
                          if (!Ie || !x.test(A))
                            throw ce(A);
                          ue(A), xe(_, "optional");
                      }
                  }), T.add(_);
                }(j, B), !0;
              case "enum":
                return function(T, W) {
                  if (!N.test(W = se()))
                    throw ce(W, "name");
                  var _ = new n(W);
                  Le(_, function(A) {
                    switch (A) {
                      case "option":
                        ve(_, A), ge(";");
                        break;
                      case "reserved":
                        $e(_.reserved || (_.reserved = []), !0);
                        break;
                      default:
                        (function(L, w) {
                          if (!N.test(w))
                            throw ce(w, "name");
                          ge("=");
                          var k = Ve(se(), !0), y = {};
                          Le(y, function(I) {
                            if (I !== "option")
                              throw ce(I);
                            ve(y, I), ge(";");
                          }, function() {
                            Ne(y);
                          }), L.add(w, k, y.comment);
                        })(_, A);
                    }
                  }), T.add(_);
                }(j, B), !0;
              case "service":
                return function(T, W) {
                  if (!N.test(W = se()))
                    throw ce(W, "service name");
                  var _ = new l(W);
                  Le(_, function(A) {
                    if (!Pe(_, A)) {
                      if (A !== "rpc")
                        throw ce(A);
                      (function(L, w) {
                        var k = Ce(), y = w;
                        if (!N.test(w = se()))
                          throw ce(w, "name");
                        var I, H, M, D, J = w;
                        if (ge("("), ge("stream", !0) && (H = !0), !x.test(w = se()) || (I = w, ge(")"), ge("returns"), ge("("), ge("stream", !0) && (D = !0), !x.test(w = se())))
                          throw ce(w);
                        M = w, ge(")");
                        var X = new u(J, y, I, M, H, D);
                        X.comment = k, Le(X, function(oe) {
                          if (oe !== "option")
                            throw ce(oe);
                          ve(X, oe), ge(";");
                        }), L.add(X);
                      })(_, A);
                    }
                  }), T.add(_);
                }(j, B), !0;
              case "extend":
                return function(T, W) {
                  if (!x.test(W = se()))
                    throw ce(W, "reference");
                  var _ = W;
                  Le(null, function(A) {
                    switch (A) {
                      case "required":
                      case "repeated":
                        xe(T, A, _);
                        break;
                      case "optional":
                        xe(T, Ie ? "proto3_optional" : "optional", _);
                        break;
                      default:
                        if (!Ie || !x.test(A))
                          throw ce(A);
                        ue(A), xe(T, "optional", _);
                    }
                  });
                }(j, B), !0;
            }
            return !1;
          }
          function Le(j, B, T) {
            var W = ae.line;
            if (j && (typeof j.comment != "string" && (j.comment = Ce()), j.filename = C.filename), ge("{", !0)) {
              for (var _; (_ = se()) !== "}"; )
                B(_);
              ge(";", !0);
            } else
              T && T(), ge(";"), j && (typeof j.comment != "string" || ne) && (j.comment = Ce(W) || j.comment);
          }
          function xe(j, B, T) {
            var W = se();
            if (W !== "group") {
              if (!x.test(W))
                throw ce(W, "type");
              var _ = se();
              if (!N.test(_))
                throw ce(_, "name");
              _ = fe(_), ge("=");
              var A = new s(_, Ve(se()), W, B, T);
              if (Le(A, function(w) {
                if (w !== "option")
                  throw ce(w);
                ve(A, w), ge(";");
              }, function() {
                Ne(A);
              }), B === "proto3_optional") {
                var L = new o("_" + _);
                A.setOption("proto3_optional", !0), L.add(A), j.add(L);
              } else
                j.add(A);
              Ie || !A.repeated || m.packed[W] === void 0 && m.basic[W] !== void 0 || A.setOption("packed", !1, !0);
            } else
              (function(w, k) {
                var y = se();
                if (!N.test(y))
                  throw ce(y, "name");
                var I = g.lcFirst(y);
                y === I && (y = g.ucFirst(y)), ge("=");
                var H = Ve(se()), M = new a(y);
                M.group = !0;
                var D = new s(I, H, y, k);
                D.filename = C.filename, Le(M, function(J) {
                  switch (J) {
                    case "option":
                      ve(M, J), ge(";");
                      break;
                    case "required":
                    case "repeated":
                      xe(M, J);
                      break;
                    case "optional":
                      xe(M, Ie ? "proto3_optional" : "optional");
                      break;
                    default:
                      throw ce(J);
                  }
                }), w.add(M).add(D);
              })(j, B);
          }
          function ve(j, B) {
            var T = ge("(", !0);
            if (!x.test(B = se()))
              throw ce(B, "name");
            var W, _ = B, A = _;
            T && (ge(")"), A = _ = "(" + _ + ")", B = me(), O.test(B) && (W = B.substr(1), _ += B, se())), ge("="), function(L, w, k, y) {
              L.setParsedOption && L.setParsedOption(w, k, y);
            }(j, A, we(j, _), W);
          }
          function we(j, B) {
            if (ge("{", !0)) {
              for (var T = {}; !ge("}", !0); ) {
                if (!N.test(V = se()))
                  throw ce(V, "name");
                var W, _ = V;
                me() === "{" ? W = we(j, B + "." + V) : (ge(":"), me() === "{" ? W = we(j, B + "." + V) : (W = Ke(!0), ke(j, B + "." + V, W)));
                var A = T[_];
                A && (W = [].concat(A).concat(W)), T[_] = W, ge(",", !0);
              }
              return T;
            }
            var L = Ke(!0);
            return ke(j, B, L), L;
          }
          function ke(j, B, T) {
            j.setOption && j.setOption(B, T);
          }
          function Ne(j) {
            if (ge("[", !0)) {
              do
                ve(j, "option");
              while (ge(",", !0));
              ge("]");
            }
            return j;
          }
          for (; (V = se()) !== null; )
            switch (V) {
              case "package":
                if (!Re)
                  throw ce(V);
                Be();
                break;
              case "import":
                if (!Re)
                  throw ce(V);
                Ze();
                break;
              case "syntax":
                if (!Re)
                  throw ce(V);
                Qe();
                break;
              case "option":
                ve(Oe, V), ge(";");
                break;
              default:
                if (Pe(Oe, V)) {
                  Re = !1;
                  continue;
                }
                throw ce(V);
            }
          return C.filename = null, { package: Z, imports: F, weakImports: Y, syntax: K, root: P };
        }
      }, 1408: function(p, R, e) {
        p.exports = o;
        var r, t = e(9693), a = t.LongBits, s = t.utf8;
        function i(d, f) {
          return RangeError("index out of range: " + d.pos + " + " + (f || 1) + " > " + d.len);
        }
        function o(d) {
          this.buf = d, this.pos = 0, this.len = d.length;
        }
        var n, l = typeof Uint8Array < "u" ? function(d) {
          if (d instanceof Uint8Array || Array.isArray(d))
            return new o(d);
          throw Error("illegal buffer");
        } : function(d) {
          if (Array.isArray(d))
            return new o(d);
          throw Error("illegal buffer");
        }, u = function() {
          return t.Buffer ? function(d) {
            return (o.create = function(f) {
              return t.Buffer.isBuffer(f) ? new r(f) : l(f);
            })(d);
          } : l;
        };
        function m() {
          var d = new a(0, 0), f = 0;
          if (!(this.len - this.pos > 4)) {
            for (; f < 3; ++f) {
              if (this.pos >= this.len)
                throw i(this);
              if (d.lo = (d.lo | (127 & this.buf[this.pos]) << 7 * f) >>> 0, this.buf[this.pos++] < 128)
                return d;
            }
            return d.lo = (d.lo | (127 & this.buf[this.pos++]) << 7 * f) >>> 0, d;
          }
          for (; f < 4; ++f)
            if (d.lo = (d.lo | (127 & this.buf[this.pos]) << 7 * f) >>> 0, this.buf[this.pos++] < 128)
              return d;
          if (d.lo = (d.lo | (127 & this.buf[this.pos]) << 28) >>> 0, d.hi = (d.hi | (127 & this.buf[this.pos]) >> 4) >>> 0, this.buf[this.pos++] < 128)
            return d;
          if (f = 0, this.len - this.pos > 4) {
            for (; f < 5; ++f)
              if (d.hi = (d.hi | (127 & this.buf[this.pos]) << 7 * f + 3) >>> 0, this.buf[this.pos++] < 128)
                return d;
          } else
            for (; f < 5; ++f) {
              if (this.pos >= this.len)
                throw i(this);
              if (d.hi = (d.hi | (127 & this.buf[this.pos]) << 7 * f + 3) >>> 0, this.buf[this.pos++] < 128)
                return d;
            }
          throw Error("invalid varint encoding");
        }
        function g(d, f) {
          return (d[f - 4] | d[f - 3] << 8 | d[f - 2] << 16 | d[f - 1] << 24) >>> 0;
        }
        function h() {
          if (this.pos + 8 > this.len)
            throw i(this, 8);
          return new a(g(this.buf, this.pos += 4), g(this.buf, this.pos += 4));
        }
        o.create = u(), o.prototype._slice = t.Array.prototype.subarray || t.Array.prototype.slice, o.prototype.uint32 = (n = 4294967295, function() {
          if (n = (127 & this.buf[this.pos]) >>> 0, this.buf[this.pos++] < 128 || (n = (n | (127 & this.buf[this.pos]) << 7) >>> 0, this.buf[this.pos++] < 128) || (n = (n | (127 & this.buf[this.pos]) << 14) >>> 0, this.buf[this.pos++] < 128) || (n = (n | (127 & this.buf[this.pos]) << 21) >>> 0, this.buf[this.pos++] < 128) || (n = (n | (15 & this.buf[this.pos]) << 28) >>> 0, this.buf[this.pos++] < 128))
            return n;
          if ((this.pos += 5) > this.len)
            throw this.pos = this.len, i(this, 10);
          return n;
        }), o.prototype.int32 = function() {
          return 0 | this.uint32();
        }, o.prototype.sint32 = function() {
          var d = this.uint32();
          return d >>> 1 ^ -(1 & d) | 0;
        }, o.prototype.bool = function() {
          return this.uint32() !== 0;
        }, o.prototype.fixed32 = function() {
          if (this.pos + 4 > this.len)
            throw i(this, 4);
          return g(this.buf, this.pos += 4);
        }, o.prototype.sfixed32 = function() {
          if (this.pos + 4 > this.len)
            throw i(this, 4);
          return 0 | g(this.buf, this.pos += 4);
        }, o.prototype.float = function() {
          if (this.pos + 4 > this.len)
            throw i(this, 4);
          var d = t.float.readFloatLE(this.buf, this.pos);
          return this.pos += 4, d;
        }, o.prototype.double = function() {
          if (this.pos + 8 > this.len)
            throw i(this, 4);
          var d = t.float.readDoubleLE(this.buf, this.pos);
          return this.pos += 8, d;
        }, o.prototype.bytes = function() {
          var d = this.uint32(), f = this.pos, b = this.pos + d;
          if (b > this.len)
            throw i(this, d);
          return this.pos += d, Array.isArray(this.buf) ? this.buf.slice(f, b) : f === b ? new this.buf.constructor(0) : this._slice.call(this.buf, f, b);
        }, o.prototype.string = function() {
          var d = this.bytes();
          return s.read(d, 0, d.length);
        }, o.prototype.skip = function(d) {
          if (typeof d == "number") {
            if (this.pos + d > this.len)
              throw i(this, d);
            this.pos += d;
          } else
            do
              if (this.pos >= this.len)
                throw i(this);
            while (128 & this.buf[this.pos++]);
          return this;
        }, o.prototype.skipType = function(d) {
          switch (d) {
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
              for (; (d = 7 & this.uint32()) != 4; )
                this.skipType(d);
              break;
            case 5:
              this.skip(4);
              break;
            default:
              throw Error("invalid wire type " + d + " at offset " + this.pos);
          }
          return this;
        }, o._configure = function(d) {
          r = d, o.create = u(), r._configure();
          var f = t.Long ? "toLong" : "toNumber";
          t.merge(o.prototype, { int64: function() {
            return m.call(this)[f](!1);
          }, uint64: function() {
            return m.call(this)[f](!0);
          }, sint64: function() {
            return m.call(this).zzDecode()[f](!1);
          }, fixed64: function() {
            return h.call(this)[f](!0);
          }, sfixed64: function() {
            return h.call(this)[f](!1);
          } });
        };
      }, 593: function(p, R, e) {
        p.exports = a;
        var r = e(1408);
        (a.prototype = Object.create(r.prototype)).constructor = a;
        var t = e(9693);
        function a(s) {
          r.call(this, s);
        }
        a._configure = function() {
          t.Buffer && (a.prototype._slice = t.Buffer.prototype.slice);
        }, a.prototype.string = function() {
          var s = this.uint32();
          return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + s, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + s, this.len));
        }, a._configure();
      }, 9424: function(p, R, e) {
        p.exports = u;
        var r = e(9313);
        ((u.prototype = Object.create(r.prototype)).constructor = u).className = "Root";
        var t, a, s, i = e(3548), o = e(7025), n = e(7598), l = e(9935);
        function u(d) {
          r.call(this, "", d), this.deferred = [], this.files = [];
        }
        function m() {
        }
        u.fromJSON = function(d, f) {
          return f || (f = new u()), d.options && f.setOptions(d.options), f.addJSON(d.nested);
        }, u.prototype.resolvePath = l.path.resolve, u.prototype.fetch = l.fetch, u.prototype.load = function d(f, b, c) {
          typeof b == "function" && (c = b, b = void 0);
          var S = this;
          if (!c)
            return l.asPromise(d, S, f, b);
          var v = c === m;
          function N(Z, F) {
            if (c) {
              var Y = c;
              if (c = null, v)
                throw Z;
              Y(Z, F);
            }
          }
          function x(Z) {
            var F = Z.lastIndexOf("google/protobuf/");
            if (F > -1) {
              var Y = Z.substring(F);
              if (Y in s)
                return Y;
            }
            return null;
          }
          function O(Z, F) {
            try {
              if (l.isString(F) && F.charAt(0) === "{" && (F = JSON.parse(F)), l.isString(F)) {
                a.filename = Z;
                var Y, K = a(F, S, b), V = 0;
                if (K.imports)
                  for (; V < K.imports.length; ++V)
                    (Y = x(K.imports[V]) || S.resolvePath(Z, K.imports[V])) && C(Y);
                if (K.weakImports)
                  for (V = 0; V < K.weakImports.length; ++V)
                    (Y = x(K.weakImports[V]) || S.resolvePath(Z, K.weakImports[V])) && C(Y, !0);
              } else
                S.setOptions(F.options).addJSON(F.nested);
            } catch (ne) {
              N(ne);
            }
            v || E || N(null, S);
          }
          function C(Z, F) {
            if (!(S.files.indexOf(Z) > -1))
              if (S.files.push(Z), Z in s)
                v ? O(Z, s[Z]) : (++E, setTimeout(function() {
                  --E, O(Z, s[Z]);
                }));
              else if (v) {
                var Y;
                try {
                  Y = l.fs.readFileSync(Z).toString("utf8");
                } catch (K) {
                  return void (F || N(K));
                }
                O(Z, Y);
              } else
                ++E, S.fetch(Z, function(K, V) {
                  --E, c && (K ? F ? E || N(null, S) : N(K) : O(Z, V));
                });
          }
          var E = 0;
          l.isString(f) && (f = [f]);
          for (var P, G = 0; G < f.length; ++G)
            (P = S.resolvePath("", f[G])) && C(P);
          if (v)
            return S;
          E || N(null, S);
        }, u.prototype.loadSync = function(d, f) {
          if (!l.isNode)
            throw Error("not supported");
          return this.load(d, f, m);
        }, u.prototype.resolveAll = function() {
          if (this.deferred.length)
            throw Error("unresolvable extensions: " + this.deferred.map(function(d) {
              return "'extend " + d.extend + "' in " + d.parent.fullName;
            }).join(", "));
          return r.prototype.resolveAll.call(this);
        };
        var g = /^[A-Z]/;
        function h(d, f) {
          var b = f.parent.lookup(f.extend);
          if (b) {
            var c = new i(f.fullName, f.id, f.type, f.rule, void 0, f.options);
            return c.declaringField = f, f.extensionField = c, b.add(c), !0;
          }
          return !1;
        }
        u.prototype._handleAdd = function(d) {
          if (d instanceof i)
            d.extend === void 0 || d.extensionField || h(0, d) || this.deferred.push(d);
          else if (d instanceof o)
            g.test(d.name) && (d.parent[d.name] = d.values);
          else if (!(d instanceof n)) {
            if (d instanceof t)
              for (var f = 0; f < this.deferred.length; )
                h(0, this.deferred[f]) ? this.deferred.splice(f, 1) : ++f;
            for (var b = 0; b < d.nestedArray.length; ++b)
              this._handleAdd(d._nestedArray[b]);
            g.test(d.name) && (d.parent[d.name] = d);
          }
        }, u.prototype._handleRemove = function(d) {
          if (d instanceof i) {
            if (d.extend !== void 0)
              if (d.extensionField)
                d.extensionField.parent.remove(d.extensionField), d.extensionField = null;
              else {
                var f = this.deferred.indexOf(d);
                f > -1 && this.deferred.splice(f, 1);
              }
          } else if (d instanceof o)
            g.test(d.name) && delete d.parent[d.name];
          else if (d instanceof r) {
            for (var b = 0; b < d.nestedArray.length; ++b)
              this._handleRemove(d._nestedArray[b]);
            g.test(d.name) && delete d.parent[d.name];
          }
        }, u._configure = function(d, f, b) {
          t = d, a = f, s = b;
        };
      }, 5054: function(p) {
        p.exports = {};
      }, 5994: function(p, R, e) {
        R.Service = e(7948);
      }, 7948: function(p, R, e) {
        p.exports = t;
        var r = e(9693);
        function t(a, s, i) {
          if (typeof a != "function")
            throw TypeError("rpcImpl must be a function");
          r.EventEmitter.call(this), this.rpcImpl = a, this.requestDelimited = !!s, this.responseDelimited = !!i;
        }
        (t.prototype = Object.create(r.EventEmitter.prototype)).constructor = t, t.prototype.rpcCall = function a(s, i, o, n, l) {
          if (!n)
            throw TypeError("request must be specified");
          var u = this;
          if (!l)
            return r.asPromise(a, u, s, i, o, n);
          if (u.rpcImpl)
            try {
              return u.rpcImpl(s, i[u.requestDelimited ? "encodeDelimited" : "encode"](n).finish(), function(m, g) {
                if (m)
                  return u.emit("error", m, s), l(m);
                if (g !== null) {
                  if (!(g instanceof o))
                    try {
                      g = o[u.responseDelimited ? "decodeDelimited" : "decode"](g);
                    } catch (h) {
                      return u.emit("error", h, s), l(h);
                    }
                  return u.emit("data", g, s), l(null, g);
                }
                u.end(!0);
              });
            } catch (m) {
              return u.emit("error", m, s), void setTimeout(function() {
                l(m);
              }, 0);
            }
          else
            setTimeout(function() {
              l(Error("already ended"));
            }, 0);
        }, t.prototype.end = function(a) {
          return this.rpcImpl && (a || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
        };
      }, 7513: function(p, R, e) {
        p.exports = i;
        var r = e(9313);
        ((i.prototype = Object.create(r.prototype)).constructor = i).className = "Service";
        var t = e(4429), a = e(9935), s = e(5994);
        function i(n, l) {
          r.call(this, n, l), this.methods = {}, this._methodsArray = null;
        }
        function o(n) {
          return n._methodsArray = null, n;
        }
        i.fromJSON = function(n, l) {
          var u = new i(n, l.options);
          if (l.methods)
            for (var m = Object.keys(l.methods), g = 0; g < m.length; ++g)
              u.add(t.fromJSON(m[g], l.methods[m[g]]));
          return l.nested && u.addJSON(l.nested), u.comment = l.comment, u;
        }, i.prototype.toJSON = function(n) {
          var l = r.prototype.toJSON.call(this, n), u = !!n && !!n.keepComments;
          return a.toObject(["options", l && l.options || void 0, "methods", r.arrayToJSON(this.methodsArray, n) || {}, "nested", l && l.nested || void 0, "comment", u ? this.comment : void 0]);
        }, Object.defineProperty(i.prototype, "methodsArray", { get: function() {
          return this._methodsArray || (this._methodsArray = a.toArray(this.methods));
        } }), i.prototype.get = function(n) {
          return this.methods[n] || r.prototype.get.call(this, n);
        }, i.prototype.resolveAll = function() {
          for (var n = this.methodsArray, l = 0; l < n.length; ++l)
            n[l].resolve();
          return r.prototype.resolve.call(this);
        }, i.prototype.add = function(n) {
          if (this.get(n.name))
            throw Error("duplicate name '" + n.name + "' in " + this);
          return n instanceof t ? (this.methods[n.name] = n, n.parent = this, o(this)) : r.prototype.add.call(this, n);
        }, i.prototype.remove = function(n) {
          if (n instanceof t) {
            if (this.methods[n.name] !== n)
              throw Error(n + " is not a member of " + this);
            return delete this.methods[n.name], n.parent = null, o(this);
          }
          return r.prototype.remove.call(this, n);
        }, i.prototype.create = function(n, l, u) {
          for (var m, g = new s.Service(n, l, u), h = 0; h < this.methodsArray.length; ++h) {
            var d = a.lcFirst((m = this._methodsArray[h]).resolve().name).replace(/[^$\w_]/g, "");
            g[d] = a.codegen(["r", "c"], a.isReserved(d) ? d + "_" : d)("return this.rpcCall(m,q,s,r,c)")({ m, q: m.resolvedRequestType.ctor, s: m.resolvedResponseType.ctor });
          }
          return g;
        };
      }, 626: function(p) {
        p.exports = u;
        var R = /[\s{}=;:[\],'"()<>]/g, e = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g, r = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g, t = /^ *[*/]+ */, a = /^\s*\*?\/*/, s = /\n/g, i = /\s/, o = /\\(.?)/g, n = { 0: "\0", r: "\r", n: `
`, t: "	" };
        function l(m) {
          return m.replace(o, function(g, h) {
            switch (h) {
              case "\\":
              case "":
                return h;
              default:
                return n[h] || "";
            }
          });
        }
        function u(m, g) {
          m = m.toString();
          var h = 0, d = m.length, f = 1, b = null, c = null, S = 0, v = !1, N = !1, x = [], O = null;
          function C(V) {
            return Error("illegal " + V + " (line " + f + ")");
          }
          function E(V) {
            return m.charAt(V);
          }
          function P(V, ne, ae) {
            b = m.charAt(V++), S = f, v = !1, N = ae;
            var se, ue = V - (g ? 2 : 3);
            do
              if (--ue < 0 || (se = m.charAt(ue)) === `
`) {
                v = !0;
                break;
              }
            while (se === " " || se === "	");
            for (var me = m.substring(V, ne).split(s), ge = 0; ge < me.length; ++ge)
              me[ge] = me[ge].replace(g ? a : t, "").trim();
            c = me.join(`
`).trim();
          }
          function G(V) {
            var ne = Z(V), ae = m.substring(V, ne);
            return /^\s*\/{1,2}/.test(ae);
          }
          function Z(V) {
            for (var ne = V; ne < d && E(ne) !== `
`; )
              ne++;
            return ne;
          }
          function F() {
            if (x.length > 0)
              return x.shift();
            if (O)
              return function() {
                var Re = O === "'" ? r : e;
                Re.lastIndex = h - 1;
                var Ie = Re.exec(m);
                if (!Ie)
                  throw C("string");
                return h = Re.lastIndex, Y(O), O = null, l(Ie[1]);
              }();
            var V, ne, ae, se, ue, me = h === 0;
            do {
              if (h === d)
                return null;
              for (V = !1; i.test(ae = E(h)); )
                if (ae === `
` && (me = !0, ++f), ++h === d)
                  return null;
              if (E(h) === "/") {
                if (++h === d)
                  throw C("comment");
                if (E(h) === "/")
                  if (g) {
                    if (se = h, ue = !1, G(h)) {
                      ue = !0;
                      do {
                        if ((h = Z(h)) === d)
                          break;
                        h++;
                      } while (G(h));
                    } else
                      h = Math.min(d, Z(h) + 1);
                    ue && P(se, h, me), f++, V = !0;
                  } else {
                    for (ue = E(se = h + 1) === "/"; E(++h) !== `
`; )
                      if (h === d)
                        return null;
                    ++h, ue && P(se, h - 1, me), ++f, V = !0;
                  }
                else {
                  if ((ae = E(h)) !== "*")
                    return "/";
                  se = h + 1, ue = g || E(se) === "*";
                  do {
                    if (ae === `
` && ++f, ++h === d)
                      throw C("comment");
                    ne = ae, ae = E(h);
                  } while (ne !== "*" || ae !== "/");
                  ++h, ue && P(se, h - 2, me), V = !0;
                }
              }
            } while (V);
            var ge = h;
            if (R.lastIndex = 0, !R.test(E(ge++)))
              for (; ge < d && !R.test(E(ge)); )
                ++ge;
            var Ce = m.substring(h, h = ge);
            return Ce !== '"' && Ce !== "'" || (O = Ce), Ce;
          }
          function Y(V) {
            x.push(V);
          }
          function K() {
            if (!x.length) {
              var V = F();
              if (V === null)
                return null;
              Y(V);
            }
            return x[0];
          }
          return Object.defineProperty({ next: F, peek: K, push: Y, skip: function(V, ne) {
            var ae = K();
            if (ae === V)
              return F(), !0;
            if (!ne)
              throw C("token '" + ae + "', '" + V + "' expected");
            return !1;
          }, cmnt: function(V) {
            var ne = null;
            return V === void 0 ? S === f - 1 && (g || b === "*" || v) && (ne = N ? c : null) : (S < V && K(), S !== V || v || !g && b !== "/" || (ne = N ? null : c)), ne;
          } }, "line", { get: function() {
            return f;
          } });
        }
        u.unescape = l;
      }, 7645: function(p, R, e) {
        p.exports = c;
        var r = e(9313);
        ((c.prototype = Object.create(r.prototype)).constructor = c).className = "Type";
        var t = e(7025), a = e(7598), s = e(3548), i = e(6039), o = e(7513), n = e(8368), l = e(1408), u = e(1173), m = e(9935), g = e(4928), h = e(5305), d = e(4497), f = e(3996), b = e(1667);
        function c(v, N) {
          r.call(this, v, N), this.fields = {}, this.oneofs = void 0, this.extensions = void 0, this.reserved = void 0, this.group = void 0, this._fieldsById = null, this._fieldsArray = null, this._oneofsArray = null, this._ctor = null;
        }
        function S(v) {
          return v._fieldsById = v._fieldsArray = v._oneofsArray = null, delete v.encode, delete v.decode, delete v.verify, v;
        }
        Object.defineProperties(c.prototype, { fieldsById: { get: function() {
          if (this._fieldsById)
            return this._fieldsById;
          this._fieldsById = {};
          for (var v = Object.keys(this.fields), N = 0; N < v.length; ++N) {
            var x = this.fields[v[N]], O = x.id;
            if (this._fieldsById[O])
              throw Error("duplicate id " + O + " in " + this);
            this._fieldsById[O] = x;
          }
          return this._fieldsById;
        } }, fieldsArray: { get: function() {
          return this._fieldsArray || (this._fieldsArray = m.toArray(this.fields));
        } }, oneofsArray: { get: function() {
          return this._oneofsArray || (this._oneofsArray = m.toArray(this.oneofs));
        } }, ctor: { get: function() {
          return this._ctor || (this.ctor = c.generateConstructor(this)());
        }, set: function(v) {
          var N = v.prototype;
          N instanceof n || ((v.prototype = new n()).constructor = v, m.merge(v.prototype, N)), v.$type = v.prototype.$type = this, m.merge(v, n, !0), this._ctor = v;
          for (var x = 0; x < this.fieldsArray.length; ++x)
            this._fieldsArray[x].resolve();
          var O = {};
          for (x = 0; x < this.oneofsArray.length; ++x)
            O[this._oneofsArray[x].resolve().name] = { get: m.oneOfGetter(this._oneofsArray[x].oneof), set: m.oneOfSetter(this._oneofsArray[x].oneof) };
          x && Object.defineProperties(v.prototype, O);
        } } }), c.generateConstructor = function(v) {
          for (var N, x = m.codegen(["p"], v.name), O = 0; O < v.fieldsArray.length; ++O)
            (N = v._fieldsArray[O]).map ? x("this%s={}", m.safeProp(N.name)) : N.repeated && x("this%s=[]", m.safeProp(N.name));
          return x("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]");
        }, c.fromJSON = function(v, N) {
          var x = new c(v, N.options);
          x.extensions = N.extensions, x.reserved = N.reserved;
          for (var O = Object.keys(N.fields), C = 0; C < O.length; ++C)
            x.add((N.fields[O[C]].keyType !== void 0 ? i.fromJSON : s.fromJSON)(O[C], N.fields[O[C]]));
          if (N.oneofs)
            for (O = Object.keys(N.oneofs), C = 0; C < O.length; ++C)
              x.add(a.fromJSON(O[C], N.oneofs[O[C]]));
          if (N.nested)
            for (O = Object.keys(N.nested), C = 0; C < O.length; ++C) {
              var E = N.nested[O[C]];
              x.add((E.id !== void 0 ? s.fromJSON : E.fields !== void 0 ? c.fromJSON : E.values !== void 0 ? t.fromJSON : E.methods !== void 0 ? o.fromJSON : r.fromJSON)(O[C], E));
            }
          return N.extensions && N.extensions.length && (x.extensions = N.extensions), N.reserved && N.reserved.length && (x.reserved = N.reserved), N.group && (x.group = !0), N.comment && (x.comment = N.comment), x;
        }, c.prototype.toJSON = function(v) {
          var N = r.prototype.toJSON.call(this, v), x = !!v && !!v.keepComments;
          return m.toObject(["options", N && N.options || void 0, "oneofs", r.arrayToJSON(this.oneofsArray, v), "fields", r.arrayToJSON(this.fieldsArray.filter(function(O) {
            return !O.declaringField;
          }), v) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : void 0, "reserved", this.reserved && this.reserved.length ? this.reserved : void 0, "group", this.group || void 0, "nested", N && N.nested || void 0, "comment", x ? this.comment : void 0]);
        }, c.prototype.resolveAll = function() {
          for (var v = this.fieldsArray, N = 0; N < v.length; )
            v[N++].resolve();
          var x = this.oneofsArray;
          for (N = 0; N < x.length; )
            x[N++].resolve();
          return r.prototype.resolveAll.call(this);
        }, c.prototype.get = function(v) {
          return this.fields[v] || this.oneofs && this.oneofs[v] || this.nested && this.nested[v] || null;
        }, c.prototype.add = function(v) {
          if (this.get(v.name))
            throw Error("duplicate name '" + v.name + "' in " + this);
          if (v instanceof s && v.extend === void 0) {
            if (this._fieldsById ? this._fieldsById[v.id] : this.fieldsById[v.id])
              throw Error("duplicate id " + v.id + " in " + this);
            if (this.isReservedId(v.id))
              throw Error("id " + v.id + " is reserved in " + this);
            if (this.isReservedName(v.name))
              throw Error("name '" + v.name + "' is reserved in " + this);
            return v.parent && v.parent.remove(v), this.fields[v.name] = v, v.message = this, v.onAdd(this), S(this);
          }
          return v instanceof a ? (this.oneofs || (this.oneofs = {}), this.oneofs[v.name] = v, v.onAdd(this), S(this)) : r.prototype.add.call(this, v);
        }, c.prototype.remove = function(v) {
          if (v instanceof s && v.extend === void 0) {
            if (!this.fields || this.fields[v.name] !== v)
              throw Error(v + " is not a member of " + this);
            return delete this.fields[v.name], v.parent = null, v.onRemove(this), S(this);
          }
          if (v instanceof a) {
            if (!this.oneofs || this.oneofs[v.name] !== v)
              throw Error(v + " is not a member of " + this);
            return delete this.oneofs[v.name], v.parent = null, v.onRemove(this), S(this);
          }
          return r.prototype.remove.call(this, v);
        }, c.prototype.isReservedId = function(v) {
          return r.isReservedId(this.reserved, v);
        }, c.prototype.isReservedName = function(v) {
          return r.isReservedName(this.reserved, v);
        }, c.prototype.create = function(v) {
          return new this.ctor(v);
        }, c.prototype.setup = function() {
          for (var v = this.fullName, N = [], x = 0; x < this.fieldsArray.length; ++x)
            N.push(this._fieldsArray[x].resolve().resolvedType);
          this.encode = g(this)({ Writer: u, types: N, util: m }), this.decode = h(this)({ Reader: l, types: N, util: m }), this.verify = d(this)({ types: N, util: m }), this.fromObject = f.fromObject(this)({ types: N, util: m }), this.toObject = f.toObject(this)({ types: N, util: m });
          var O = b[v];
          if (O) {
            var C = Object.create(this);
            C.fromObject = this.fromObject, this.fromObject = O.fromObject.bind(C), C.toObject = this.toObject, this.toObject = O.toObject.bind(C);
          }
          return this;
        }, c.prototype.encode = function(v, N) {
          return this.setup().encode(v, N);
        }, c.prototype.encodeDelimited = function(v, N) {
          return this.encode(v, N && N.len ? N.fork() : N).ldelim();
        }, c.prototype.decode = function(v, N) {
          return this.setup().decode(v, N);
        }, c.prototype.decodeDelimited = function(v) {
          return v instanceof l || (v = l.create(v)), this.decode(v, v.uint32());
        }, c.prototype.verify = function(v) {
          return this.setup().verify(v);
        }, c.prototype.fromObject = function(v) {
          return this.setup().fromObject(v);
        }, c.prototype.toObject = function(v, N) {
          return this.setup().toObject(v, N);
        }, c.d = function(v) {
          return function(N) {
            m.decorateType(N, v);
          };
        };
      }, 7063: function(p, R, e) {
        var r = R, t = e(9935), a = ["double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes"];
        function s(i, o) {
          var n = 0, l = {};
          for (o |= 0; n < i.length; )
            l[a[n + o]] = i[n++];
          return l;
        }
        r.basic = s([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2]), r.defaults = s([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, !1, "", t.emptyArray, null]), r.long = s([0, 0, 0, 1, 1], 7), r.mapKey = s([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2), r.packed = s([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0]);
      }, 9935: function(p, R, e) {
        var r, t, a = p.exports = e(9693), s = e(5054);
        a.codegen = e(5124), a.fetch = e(9054), a.path = e(8626), a.fs = a.inquire("fs"), a.toArray = function(u) {
          if (u) {
            for (var m = Object.keys(u), g = new Array(m.length), h = 0; h < m.length; )
              g[h] = u[m[h++]];
            return g;
          }
          return [];
        }, a.toObject = function(u) {
          for (var m = {}, g = 0; g < u.length; ) {
            var h = u[g++], d = u[g++];
            d !== void 0 && (m[h] = d);
          }
          return m;
        };
        var i = /\\/g, o = /"/g;
        a.isReserved = function(u) {
          return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(u);
        }, a.safeProp = function(u) {
          return !/^[$\w_]+$/.test(u) || a.isReserved(u) ? '["' + u.replace(i, "\\\\").replace(o, '\\"') + '"]' : "." + u;
        }, a.ucFirst = function(u) {
          return u.charAt(0).toUpperCase() + u.substring(1);
        };
        var n = /_([a-z])/g;
        a.camelCase = function(u) {
          return u.substring(0, 1) + u.substring(1).replace(n, function(m, g) {
            return g.toUpperCase();
          });
        }, a.compareFieldsById = function(u, m) {
          return u.id - m.id;
        }, a.decorateType = function(u, m) {
          if (u.$type)
            return m && u.$type.name !== m && (a.decorateRoot.remove(u.$type), u.$type.name = m, a.decorateRoot.add(u.$type)), u.$type;
          r || (r = e(7645));
          var g = new r(m || u.name);
          return a.decorateRoot.add(g), g.ctor = u, Object.defineProperty(u, "$type", { value: g, enumerable: !1 }), Object.defineProperty(u.prototype, "$type", { value: g, enumerable: !1 }), g;
        };
        var l = 0;
        a.decorateEnum = function(u) {
          if (u.$type)
            return u.$type;
          t || (t = e(7025));
          var m = new t("Enum" + l++, u);
          return a.decorateRoot.add(m), Object.defineProperty(u, "$type", { value: m, enumerable: !1 }), m;
        }, a.setProperty = function(u, m, g) {
          if (typeof u != "object")
            throw TypeError("dst must be an object");
          if (!m)
            throw TypeError("path must be specified");
          return function h(d, f, b) {
            var c = f.shift();
            if (c === "__proto__")
              return d;
            if (f.length > 0)
              d[c] = h(d[c] || {}, f, b);
            else {
              var S = d[c];
              S && (b = [].concat(S).concat(b)), d[c] = b;
            }
            return d;
          }(u, m = m.split("."), g);
        }, Object.defineProperty(a, "decorateRoot", { get: function() {
          return s.decorated || (s.decorated = new (e(9424))());
        } });
      }, 1945: function(p, R, e) {
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
        var s = t.zeroHash = "\0\0\0\0\0\0\0\0";
        t.fromNumber = function(o) {
          if (o === 0)
            return a;
          var n = o < 0;
          n && (o = -o);
          var l = o >>> 0, u = (o - l) / 4294967296 >>> 0;
          return n && (u = ~u >>> 0, l = ~l >>> 0, ++l > 4294967295 && (l = 0, ++u > 4294967295 && (u = 0))), new t(l, u);
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
            var n = 1 + ~this.lo >>> 0, l = ~this.hi >>> 0;
            return n || (l = l + 1 >>> 0), -(n + 4294967296 * l);
          }
          return this.lo + 4294967296 * this.hi;
        }, t.prototype.toLong = function(o) {
          return r.Long ? new r.Long(0 | this.lo, 0 | this.hi, !!o) : { low: 0 | this.lo, high: 0 | this.hi, unsigned: !!o };
        };
        var i = String.prototype.charCodeAt;
        t.fromHash = function(o) {
          return o === s ? a : new t((i.call(o, 0) | i.call(o, 1) << 8 | i.call(o, 2) << 16 | i.call(o, 3) << 24) >>> 0, (i.call(o, 4) | i.call(o, 5) << 8 | i.call(o, 6) << 16 | i.call(o, 7) << 24) >>> 0);
        }, t.prototype.toHash = function() {
          return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
        }, t.prototype.zzEncode = function() {
          var o = this.hi >> 31;
          return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ o) >>> 0, this.lo = (this.lo << 1 ^ o) >>> 0, this;
        }, t.prototype.zzDecode = function() {
          var o = -(1 & this.lo);
          return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ o) >>> 0, this.hi = (this.hi >>> 1 ^ o) >>> 0, this;
        }, t.prototype.length = function() {
          var o = this.lo, n = (this.lo >>> 28 | this.hi << 4) >>> 0, l = this.hi >>> 24;
          return l === 0 ? n === 0 ? o < 16384 ? o < 128 ? 1 : 2 : o < 2097152 ? 3 : 4 : n < 16384 ? n < 128 ? 5 : 6 : n < 2097152 ? 7 : 8 : l < 128 ? 9 : 10;
        };
      }, 9693: function(p, R, e) {
        var r = R;
        function t(s, i, o) {
          for (var n = Object.keys(i), l = 0; l < n.length; ++l)
            s[n[l]] !== void 0 && o || (s[n[l]] = i[n[l]]);
          return s;
        }
        function a(s) {
          function i(o, n) {
            if (!(this instanceof i))
              return new i(o, n);
            Object.defineProperty(this, "message", { get: function() {
              return o;
            } }), Error.captureStackTrace ? Error.captureStackTrace(this, i) : Object.defineProperty(this, "stack", { value: new Error().stack || "" }), n && t(this, n);
          }
          return (i.prototype = Object.create(Error.prototype)).constructor = i, Object.defineProperty(i.prototype, "name", { get: function() {
            return s;
          } }), i.prototype.toString = function() {
            return this.name + ": " + this.message;
          }, i;
        }
        r.asPromise = e(4537), r.base64 = e(7419), r.EventEmitter = e(9211), r.float = e(945), r.inquire = e(7199), r.utf8 = e(4997), r.pool = e(6662), r.LongBits = e(1945), r.isNode = !!(e.g !== void 0 && e.g && e.g.process && e.g.process.versions && e.g.process.versions.node), r.global = r.isNode && e.g || typeof window < "u" && window || typeof self < "u" && self || this, r.emptyArray = Object.freeze ? Object.freeze([]) : [], r.emptyObject = Object.freeze ? Object.freeze({}) : {}, r.isInteger = Number.isInteger || function(s) {
          return typeof s == "number" && isFinite(s) && Math.floor(s) === s;
        }, r.isString = function(s) {
          return typeof s == "string" || s instanceof String;
        }, r.isObject = function(s) {
          return s && typeof s == "object";
        }, r.isset = r.isSet = function(s, i) {
          var o = s[i];
          return !(o == null || !s.hasOwnProperty(i)) && (typeof o != "object" || (Array.isArray(o) ? o.length : Object.keys(o).length) > 0);
        }, r.Buffer = function() {
          try {
            var s = r.inquire("buffer").Buffer;
            return s.prototype.utf8Write ? s : null;
          } catch {
            return null;
          }
        }(), r._Buffer_from = null, r._Buffer_allocUnsafe = null, r.newBuffer = function(s) {
          return typeof s == "number" ? r.Buffer ? r._Buffer_allocUnsafe(s) : new r.Array(s) : r.Buffer ? r._Buffer_from(s) : typeof Uint8Array > "u" ? s : new Uint8Array(s);
        }, r.Array = typeof Uint8Array < "u" ? Uint8Array : Array, r.Long = r.global.dcodeIO && r.global.dcodeIO.Long || r.global.Long || r.inquire("long"), r.key2Re = /^true|false|0|1$/, r.key32Re = /^-?(?:0|[1-9][0-9]*)$/, r.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, r.longToHash = function(s) {
          return s ? r.LongBits.from(s).toHash() : r.LongBits.zeroHash;
        }, r.longFromHash = function(s, i) {
          var o = r.LongBits.fromHash(s);
          return r.Long ? r.Long.fromBits(o.lo, o.hi, i) : o.toNumber(!!i);
        }, r.merge = t, r.lcFirst = function(s) {
          return s.charAt(0).toLowerCase() + s.substring(1);
        }, r.newError = a, r.ProtocolError = a("ProtocolError"), r.oneOfGetter = function(s) {
          for (var i = {}, o = 0; o < s.length; ++o)
            i[s[o]] = 1;
          return function() {
            for (var n = Object.keys(this), l = n.length - 1; l > -1; --l)
              if (i[n[l]] === 1 && this[n[l]] !== void 0 && this[n[l]] !== null)
                return n[l];
          };
        }, r.oneOfSetter = function(s) {
          return function(i) {
            for (var o = 0; o < s.length; ++o)
              s[o] !== i && delete this[s[o]];
          };
        }, r.toJSONOptions = { longs: String, enums: String, bytes: String, json: !0 }, r._configure = function() {
          var s = r.Buffer;
          s ? (r._Buffer_from = s.from !== Uint8Array.from && s.from || function(i, o) {
            return new s(i, o);
          }, r._Buffer_allocUnsafe = s.allocUnsafe || function(i) {
            return new s(i);
          }) : r._Buffer_from = r._Buffer_allocUnsafe = null;
        };
      }, 4497: function(p, R, e) {
        p.exports = function(o) {
          var n = t.codegen(["m"], o.name + "$verify")('if(typeof m!=="object"||m===null)')("return%j", "object expected"), l = {};
          o.oneofsArray.length && n("var p={}");
          for (var u = 0; u < o.fieldsArray.length; ++u) {
            var m = o._fieldsArray[u].resolve(), g = "m" + t.safeProp(m.name);
            if (m.optional && n("if(%s!=null&&m.hasOwnProperty(%j)){", g, m.name), m.map)
              n("if(!util.isObject(%s))", g)("return%j", a(m, "object"))("var k=Object.keys(%s)", g)("for(var i=0;i<k.length;++i){"), i(n, m, "k[i]"), s(n, m, u, g + "[k[i]]")("}");
            else if (m.repeated)
              n("if(!Array.isArray(%s))", g)("return%j", a(m, "array"))("for(var i=0;i<%s.length;++i){", g), s(n, m, u, g + "[i]")("}");
            else {
              if (m.partOf) {
                var h = t.safeProp(m.partOf.name);
                l[m.partOf.name] === 1 && n("if(p%s===1)", h)("return%j", m.partOf.name + ": multiple values"), l[m.partOf.name] = 1, n("p%s=1", h);
              }
              s(n, m, u, g);
            }
            m.optional && n("}");
          }
          return n("return null");
        };
        var r = e(7025), t = e(9935);
        function a(o, n) {
          return o.name + ": " + n + (o.repeated && n !== "array" ? "[]" : o.map && n !== "object" ? "{k:" + o.keyType + "}" : "") + " expected";
        }
        function s(o, n, l, u) {
          if (n.resolvedType)
            if (n.resolvedType instanceof r) {
              o("switch(%s){", u)("default:")("return%j", a(n, "enum value"));
              for (var m = Object.keys(n.resolvedType.values), g = 0; g < m.length; ++g)
                o("case %i:", n.resolvedType.values[m[g]]);
              o("break")("}");
            } else
              o("{")("var e=types[%i].verify(%s);", l, u)("if(e)")("return%j+e", n.name + ".")("}");
          else
            switch (n.type) {
              case "int32":
              case "uint32":
              case "sint32":
              case "fixed32":
              case "sfixed32":
                o("if(!util.isInteger(%s))", u)("return%j", a(n, "integer"));
                break;
              case "int64":
              case "uint64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                o("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", u, u, u, u)("return%j", a(n, "integer|Long"));
                break;
              case "float":
              case "double":
                o('if(typeof %s!=="number")', u)("return%j", a(n, "number"));
                break;
              case "bool":
                o('if(typeof %s!=="boolean")', u)("return%j", a(n, "boolean"));
                break;
              case "string":
                o("if(!util.isString(%s))", u)("return%j", a(n, "string"));
                break;
              case "bytes":
                o('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))', u, u, u)("return%j", a(n, "buffer"));
            }
          return o;
        }
        function i(o, n, l) {
          switch (n.keyType) {
            case "int32":
            case "uint32":
            case "sint32":
            case "fixed32":
            case "sfixed32":
              o("if(!util.key32Re.test(%s))", l)("return%j", a(n, "integer key"));
              break;
            case "int64":
            case "uint64":
            case "sint64":
            case "fixed64":
            case "sfixed64":
              o("if(!util.key64Re.test(%s))", l)("return%j", a(n, "integer|Long key"));
              break;
            case "bool":
              o("if(!util.key2Re.test(%s))", l)("return%j", a(n, "boolean key"));
          }
          return o;
        }
      }, 1667: function(p, R, e) {
        var r = R, t = e(8368);
        r[".google.protobuf.Any"] = { fromObject: function(a) {
          if (a && a["@type"]) {
            var s = a["@type"].substring(a["@type"].lastIndexOf("/") + 1), i = this.lookup(s);
            if (i) {
              var o = a["@type"].charAt(0) === "." ? a["@type"].substr(1) : a["@type"];
              return o.indexOf("/") === -1 && (o = "/" + o), this.create({ type_url: o, value: i.encode(i.fromObject(a)).finish() });
            }
          }
          return this.fromObject(a);
        }, toObject: function(a, s) {
          var i = "", o = "";
          if (s && s.json && a.type_url && a.value) {
            o = a.type_url.substring(a.type_url.lastIndexOf("/") + 1), i = a.type_url.substring(0, a.type_url.lastIndexOf("/") + 1);
            var n = this.lookup(o);
            n && (a = n.decode(a.value));
          }
          if (!(a instanceof this.ctor) && a instanceof t) {
            var l = a.$type.toObject(a, s);
            return i === "" && (i = "type.googleapis.com/"), o = i + (a.$type.fullName[0] === "." ? a.$type.fullName.substr(1) : a.$type.fullName), l["@type"] = o, l;
          }
          return this.toObject(a, s);
        } };
      }, 1173: function(p, R, e) {
        p.exports = u;
        var r, t = e(9693), a = t.LongBits, s = t.base64, i = t.utf8;
        function o(c, S, v) {
          this.fn = c, this.len = S, this.next = void 0, this.val = v;
        }
        function n() {
        }
        function l(c) {
          this.head = c.head, this.tail = c.tail, this.len = c.len, this.next = c.states;
        }
        function u() {
          this.len = 0, this.head = new o(n, 0, 0), this.tail = this.head, this.states = null;
        }
        var m = function() {
          return t.Buffer ? function() {
            return (u.create = function() {
              return new r();
            })();
          } : function() {
            return new u();
          };
        };
        function g(c, S, v) {
          S[v] = 255 & c;
        }
        function h(c, S) {
          this.len = c, this.next = void 0, this.val = S;
        }
        function d(c, S, v) {
          for (; c.hi; )
            S[v++] = 127 & c.lo | 128, c.lo = (c.lo >>> 7 | c.hi << 25) >>> 0, c.hi >>>= 7;
          for (; c.lo > 127; )
            S[v++] = 127 & c.lo | 128, c.lo = c.lo >>> 7;
          S[v++] = c.lo;
        }
        function f(c, S, v) {
          S[v] = 255 & c, S[v + 1] = c >>> 8 & 255, S[v + 2] = c >>> 16 & 255, S[v + 3] = c >>> 24;
        }
        u.create = m(), u.alloc = function(c) {
          return new t.Array(c);
        }, t.Array !== Array && (u.alloc = t.pool(u.alloc, t.Array.prototype.subarray)), u.prototype._push = function(c, S, v) {
          return this.tail = this.tail.next = new o(c, S, v), this.len += S, this;
        }, h.prototype = Object.create(o.prototype), h.prototype.fn = function(c, S, v) {
          for (; c > 127; )
            S[v++] = 127 & c | 128, c >>>= 7;
          S[v] = c;
        }, u.prototype.uint32 = function(c) {
          return this.len += (this.tail = this.tail.next = new h((c >>>= 0) < 128 ? 1 : c < 16384 ? 2 : c < 2097152 ? 3 : c < 268435456 ? 4 : 5, c)).len, this;
        }, u.prototype.int32 = function(c) {
          return c < 0 ? this._push(d, 10, a.fromNumber(c)) : this.uint32(c);
        }, u.prototype.sint32 = function(c) {
          return this.uint32((c << 1 ^ c >> 31) >>> 0);
        }, u.prototype.uint64 = function(c) {
          var S = a.from(c);
          return this._push(d, S.length(), S);
        }, u.prototype.int64 = u.prototype.uint64, u.prototype.sint64 = function(c) {
          var S = a.from(c).zzEncode();
          return this._push(d, S.length(), S);
        }, u.prototype.bool = function(c) {
          return this._push(g, 1, c ? 1 : 0);
        }, u.prototype.fixed32 = function(c) {
          return this._push(f, 4, c >>> 0);
        }, u.prototype.sfixed32 = u.prototype.fixed32, u.prototype.fixed64 = function(c) {
          var S = a.from(c);
          return this._push(f, 4, S.lo)._push(f, 4, S.hi);
        }, u.prototype.sfixed64 = u.prototype.fixed64, u.prototype.float = function(c) {
          return this._push(t.float.writeFloatLE, 4, c);
        }, u.prototype.double = function(c) {
          return this._push(t.float.writeDoubleLE, 8, c);
        };
        var b = t.Array.prototype.set ? function(c, S, v) {
          S.set(c, v);
        } : function(c, S, v) {
          for (var N = 0; N < c.length; ++N)
            S[v + N] = c[N];
        };
        u.prototype.bytes = function(c) {
          var S = c.length >>> 0;
          if (!S)
            return this._push(g, 1, 0);
          if (t.isString(c)) {
            var v = u.alloc(S = s.length(c));
            s.decode(c, v, 0), c = v;
          }
          return this.uint32(S)._push(b, S, c);
        }, u.prototype.string = function(c) {
          var S = i.length(c);
          return S ? this.uint32(S)._push(i.write, S, c) : this._push(g, 1, 0);
        }, u.prototype.fork = function() {
          return this.states = new l(this), this.head = this.tail = new o(n, 0, 0), this.len = 0, this;
        }, u.prototype.reset = function() {
          return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new o(n, 0, 0), this.len = 0), this;
        }, u.prototype.ldelim = function() {
          var c = this.head, S = this.tail, v = this.len;
          return this.reset().uint32(v), v && (this.tail.next = c.next, this.tail = S, this.len += v), this;
        }, u.prototype.finish = function() {
          for (var c = this.head.next, S = this.constructor.alloc(this.len), v = 0; c; )
            c.fn(c.val, S, v), v += c.len, c = c.next;
          return S;
        }, u._configure = function(c) {
          r = c, u.create = m(), r._configure();
        };
      }, 3155: function(p, R, e) {
        p.exports = a;
        var r = e(1173);
        (a.prototype = Object.create(r.prototype)).constructor = a;
        var t = e(9693);
        function a() {
          r.call(this);
        }
        function s(i, o, n) {
          i.length < 40 ? t.utf8.write(i, o, n) : o.utf8Write ? o.utf8Write(i, n) : o.write(i, n);
        }
        a._configure = function() {
          a.alloc = t._Buffer_allocUnsafe, a.writeBytesBuffer = t.Buffer && t.Buffer.prototype instanceof Uint8Array && t.Buffer.prototype.set.name === "set" ? function(i, o, n) {
            o.set(i, n);
          } : function(i, o, n) {
            if (i.copy)
              i.copy(o, n, 0, i.length);
            else
              for (var l = 0; l < i.length; )
                o[n++] = i[l++];
          };
        }, a.prototype.bytes = function(i) {
          t.isString(i) && (i = t._Buffer_from(i, "base64"));
          var o = i.length >>> 0;
          return this.uint32(o), o && this._push(a.writeBytesBuffer, o, i), this;
        }, a.prototype.string = function(i) {
          var o = t.Buffer.byteLength(i);
          return this.uint32(o), o && this._push(s, o, i), this;
        }, a._configure();
      }, 7129: function(p, R) {
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
        R.stringify = function(a, s) {
          s = s || "";
          var i, o, n = [];
          for (o in typeof s != "string" && (s = "?"), a)
            if (e.call(a, o)) {
              if ((i = a[o]) || i != null && !isNaN(i) || (i = ""), o = t(o), i = t(i), o === null || i === null)
                continue;
              n.push(o + "=" + i);
            }
          return n.length ? s + n.join("&") : "";
        }, R.parse = function(a) {
          for (var s, i = /([^=?#&]+)=?([^&]*)/g, o = {}; s = i.exec(a); ) {
            var n = r(s[1]), l = r(s[2]);
            n === null || l === null || n in o || (o[n] = l);
          }
          return o;
        };
      }, 7418: function(p) {
        p.exports = function(R, e) {
          if (e = e.split(":")[0], !(R = +R))
            return !1;
          switch (e) {
            case "http":
            case "ws":
              return R !== 80;
            case "https":
            case "wss":
              return R !== 443;
            case "ftp":
              return R !== 21;
            case "gopher":
              return R !== 70;
            case "file":
              return !1;
          }
          return R !== 0;
        };
      }, 8e3: function(p, R, e) {
        var r = e(7581);
        p.exports = e(3626)(r), "_sockjs_onload" in e.g && setTimeout(e.g._sockjs_onload, 1);
      }, 2530: function(p, R, e) {
        var r = e(5717), t = e(685);
        function a() {
          t.call(this), this.initEvent("close", !1, !1), this.wasClean = !1, this.code = 0, this.reason = "";
        }
        r(a, t), p.exports = a;
      }, 3212: function(p, R, e) {
        var r = e(5717), t = e(3184);
        function a() {
          t.call(this);
        }
        r(a, t), a.prototype.removeAllListeners = function(s) {
          s ? delete this._listeners[s] : this._listeners = {};
        }, a.prototype.once = function(s, i) {
          var o = this, n = !1;
          this.on(s, function l() {
            o.removeListener(s, l), n || (n = !0, i.apply(this, arguments));
          });
        }, a.prototype.emit = function() {
          var s = arguments[0], i = this._listeners[s];
          if (i) {
            for (var o = arguments.length, n = new Array(o - 1), l = 1; l < o; l++)
              n[l - 1] = arguments[l];
            for (var u = 0; u < i.length; u++)
              i[u].apply(this, n);
          }
        }, a.prototype.on = a.prototype.addListener = t.prototype.addEventListener, a.prototype.removeListener = t.prototype.removeEventListener, p.exports.v = a;
      }, 685: function(p) {
        function R(e) {
          this.type = e;
        }
        R.prototype.initEvent = function(e, r, t) {
          return this.type = e, this.bubbles = r, this.cancelable = t, this.timeStamp = +/* @__PURE__ */ new Date(), this;
        }, R.prototype.stopPropagation = function() {
        }, R.prototype.preventDefault = function() {
        }, R.CAPTURING_PHASE = 1, R.AT_TARGET = 2, R.BUBBLING_PHASE = 3, p.exports = R;
      }, 3184: function(p) {
        function R() {
          this._listeners = {};
        }
        R.prototype.addEventListener = function(e, r) {
          e in this._listeners || (this._listeners[e] = []);
          var t = this._listeners[e];
          t.indexOf(r) === -1 && (t = t.concat([r])), this._listeners[e] = t;
        }, R.prototype.removeEventListener = function(e, r) {
          var t = this._listeners[e];
          if (t) {
            var a = t.indexOf(r);
            a === -1 || (t.length > 1 ? this._listeners[e] = t.slice(0, a).concat(t.slice(a + 1)) : delete this._listeners[e]);
          }
        }, R.prototype.dispatchEvent = function() {
          var e = arguments[0], r = e.type, t = arguments.length === 1 ? [e] : Array.apply(null, arguments);
          if (this["on" + r] && this["on" + r].apply(this, t), r in this._listeners)
            for (var a = this._listeners[r], s = 0; s < a.length; s++)
              a[s].apply(this, t);
        }, p.exports = R;
      }, 3326: function(p, R, e) {
        var r = e(5717), t = e(685);
        function a(s) {
          t.call(this), this.initEvent("message", !1, !1), this.data = s;
        }
        r(a, t), p.exports = a;
      }, 691: function(p, R, e) {
        var r = e(3683);
        function t(a) {
          this._transport = a, a.on("message", this._transportMessage.bind(this)), a.on("close", this._transportClose.bind(this));
        }
        t.prototype._transportClose = function(a, s) {
          r.postMessage("c", JSON.stringify([a, s]));
        }, t.prototype._transportMessage = function(a) {
          r.postMessage("t", a);
        }, t.prototype._send = function(a) {
          this._transport.send(a);
        }, t.prototype._close = function() {
          this._transport.close(), this._transport.removeAllListeners();
        }, p.exports = t;
      }, 551: function(p, R, e) {
        var r = e(273), t = e(7705), a = e(691), s = e(6311), i = e(3683), o = e(7486);
        p.exports = function(n, l) {
          var u, m = {};
          l.forEach(function(g) {
            g.facadeTransport && (m[g.facadeTransport.transportName] = g.facadeTransport);
          }), m[s.transportName] = s, n.bootstrap_iframe = function() {
            var g;
            i.currentWindowId = o.hash.slice(1), t.attachEvent("message", function(h) {
              if (h.source === parent && (u === void 0 && (u = h.origin), h.origin === u)) {
                var d;
                try {
                  d = JSON.parse(h.data);
                } catch {
                  return void h.data;
                }
                if (d.windowId === i.currentWindowId)
                  switch (d.type) {
                    case "s":
                      var f;
                      try {
                        f = JSON.parse(d.data);
                      } catch {
                        d.data;
                        break;
                      }
                      var b = f[0], c = f[1], S = f[2], v = f[3];
                      if (b !== n.version)
                        throw new Error('Incompatible SockJS! Main site uses: "' + b + '", the iframe: "' + n.version + '".');
                      if (!r.isOriginEqual(S, o.href) || !r.isOriginEqual(v, o.href))
                        throw new Error("Can't connect to different domain from within an iframe. (" + o.href + ", " + S + ", " + v + ")");
                      g = new a(new m[c](S, v));
                      break;
                    case "m":
                      g._send(d.data);
                      break;
                    case "c":
                      g && g._close(), g = null;
                  }
              }
            }), i.postMessage("s");
          };
        };
      }, 2550: function(p, R, e) {
        var r = e(3212).v, t = e(5717), a = e(2217);
        function s(i, o) {
          r.call(this);
          var n = this, l = +/* @__PURE__ */ new Date();
          this.xo = new o("GET", i), this.xo.once("finish", function(u, m) {
            var g, h;
            if (u === 200) {
              if (h = +/* @__PURE__ */ new Date() - l, m)
                try {
                  g = JSON.parse(m);
                } catch {
                }
              a.isObject(g) || (g = {});
            }
            n.emit("finish", g, h), n.removeAllListeners();
          });
        }
        t(s, r), s.prototype.close = function() {
          this.removeAllListeners(), this.xo.close();
        }, p.exports = s;
      }, 6311: function(p, R, e) {
        var r = e(5717), t = e(3212).v, a = e(3515), s = e(2550);
        function i(o) {
          var n = this;
          t.call(this), this.ir = new s(o, a), this.ir.once("finish", function(l, u) {
            n.ir = null, n.emit("message", JSON.stringify([l, u]));
          });
        }
        r(i, t), i.transportName = "iframe-info-receiver", i.prototype.close = function() {
          this.ir && (this.ir.close(), this.ir = null), this.removeAllListeners();
        }, p.exports = i;
      }, 3616: function(p, R, e) {
        var r = e(3212).v, t = e(5717), a = e(7705), s = e(5088), i = e(6311);
        function o(n, l) {
          var u = this;
          r.call(this);
          var m = function() {
            var g = u.ifr = new s(i.transportName, l, n);
            g.once("message", function(h) {
              if (h) {
                var d;
                try {
                  d = JSON.parse(h);
                } catch {
                  return u.emit("finish"), void u.close();
                }
                var f = d[0], b = d[1];
                u.emit("finish", f, b);
              }
              u.close();
            }), g.once("close", function() {
              u.emit("finish"), u.close();
            });
          };
          e.g.document.body ? m() : a.attachEvent("load", m);
        }
        t(o, r), o.enabled = function() {
          return s.enabled();
        }, o.prototype.close = function() {
          this.ifr && this.ifr.close(), this.removeAllListeners(), this.ifr = null;
        }, p.exports = o;
      }, 5172: function(p, R, e) {
        var r = e(3212).v, t = e(5717), a = e(273), s = e(6073), i = e(9033), o = e(3515), n = e(7103), l = e(3616), u = e(2550);
        function m(g, h) {
          var d = this;
          r.call(this), setTimeout(function() {
            d.doXhr(g, h);
          }, 0);
        }
        t(m, r), m._getReceiver = function(g, h, d) {
          return d.sameOrigin ? new u(h, o) : i.enabled ? new u(h, i) : s.enabled && d.sameScheme ? new u(h, s) : l.enabled() ? new l(g, h) : new u(h, n);
        }, m.prototype.doXhr = function(g, h) {
          var d = this, f = a.addPath(g, "/info");
          this.xo = m._getReceiver(g, f, h), this.timeoutRef = setTimeout(function() {
            d._cleanup(!1), d.emit("finish");
          }, m.timeout), this.xo.once("finish", function(b, c) {
            d._cleanup(!0), d.emit("finish", b, c);
          });
        }, m.prototype._cleanup = function(g) {
          clearTimeout(this.timeoutRef), this.timeoutRef = null, !g && this.xo && this.xo.close(), this.xo = null;
        }, m.prototype.close = function() {
          this.removeAllListeners(), this._cleanup(!1);
        }, m.timeout = 8e3, p.exports = m;
      }, 7486: function(p, R, e) {
        p.exports = e.g.location || { origin: "http://localhost:80", protocol: "http:", host: "localhost", port: 80, href: "http://localhost/", hash: "" };
      }, 3626: function(p, R, e) {
        e(1247);
        var r, t = e(4564), a = e(5717), s = e(8915), i = e(8028), o = e(273), n = e(7705), l = e(5581), u = e(2217), m = e(8510), g = e(4886), h = e(685), d = e(3184), f = e(7486), b = e(2530), c = e(3326), S = e(5172);
        function v(x, O, C) {
          if (!(this instanceof v))
            return new v(x, O, C);
          if (arguments.length < 1)
            throw new TypeError("Failed to construct 'SockJS: 1 argument required, but only 0 present");
          d.call(this), this.readyState = v.CONNECTING, this.extensions = "", this.protocol = "", (C = C || {}).protocols_whitelist && g.warn("'protocols_whitelist' is DEPRECATED. Use 'transports' instead."), this._transportsWhitelist = C.transports, this._transportOptions = C.transportOptions || {}, this._timeout = C.timeout || 0;
          var E = C.sessionId || 8;
          if (typeof E == "function")
            this._generateSessionId = E;
          else {
            if (typeof E != "number")
              throw new TypeError("If sessionId is used in the options, it needs to be a number or a function.");
            this._generateSessionId = function() {
              return s.string(E);
            };
          }
          this._server = C.server || s.numberString(1e3);
          var P = new t(x);
          if (!P.host || !P.protocol)
            throw new SyntaxError("The URL '" + x + "' is invalid");
          if (P.hash)
            throw new SyntaxError("The URL must not contain a fragment");
          if (P.protocol !== "http:" && P.protocol !== "https:")
            throw new SyntaxError("The URL's scheme must be either 'http:' or 'https:'. '" + P.protocol + "' is not allowed.");
          var G = P.protocol === "https:";
          if (f.protocol === "https:" && !G && !o.isLoopbackAddr(P.hostname))
            throw new Error("SecurityError: An insecure SockJS connection may not be initiated from a page loaded over HTTPS");
          O ? Array.isArray(O) || (O = [O]) : O = [];
          var Z = O.sort();
          Z.forEach(function(Y, K) {
            if (!Y)
              throw new SyntaxError("The protocols entry '" + Y + "' is invalid.");
            if (K < Z.length - 1 && Y === Z[K + 1])
              throw new SyntaxError("The protocols entry '" + Y + "' is duplicated.");
          });
          var F = o.getOrigin(f.href);
          this._origin = F ? F.toLowerCase() : null, P.set("pathname", P.pathname.replace(/\/+$/, "")), this.url = P.href, this.url, this._urlInfo = { nullOrigin: !m.hasDomain(), sameOrigin: o.isOriginEqual(this.url, f.href), sameScheme: o.isSchemeEqual(this.url, f.href) }, this._ir = new S(this.url, this._urlInfo), this._ir.once("finish", this._receiveInfo.bind(this));
        }
        function N(x) {
          return x === 1e3 || x >= 3e3 && x <= 4999;
        }
        a(v, d), v.prototype.close = function(x, O) {
          if (x && !N(x))
            throw new Error("InvalidAccessError: Invalid code");
          if (O && O.length > 123)
            throw new SyntaxError("reason argument has an invalid length");
          this.readyState !== v.CLOSING && this.readyState !== v.CLOSED && this._close(x || 1e3, O || "Normal closure", !0);
        }, v.prototype.send = function(x) {
          if (typeof x != "string" && (x = "" + x), this.readyState === v.CONNECTING)
            throw new Error("InvalidStateError: The connection has not been established yet");
          this.readyState === v.OPEN && this._transport.send(i.quote(x));
        }, v.version = e(2828), v.CONNECTING = 0, v.OPEN = 1, v.CLOSING = 2, v.CLOSED = 3, v.prototype._receiveInfo = function(x, O) {
          if (this._ir = null, x) {
            this._rto = this.countRTO(O), this._transUrl = x.base_url ? x.base_url : this.url, x = u.extend(x, this._urlInfo);
            var C = r.filterToEnabled(this._transportsWhitelist, x);
            this._transports = C.main, this._transports.length, this._connect();
          } else
            this._close(1002, "Cannot connect to server");
        }, v.prototype._connect = function() {
          for (var x = this._transports.shift(); x; x = this._transports.shift()) {
            if (x.transportName, x.needBody && (!e.g.document.body || e.g.document.readyState !== void 0 && e.g.document.readyState !== "complete" && e.g.document.readyState !== "interactive"))
              return this._transports.unshift(x), void n.attachEvent("load", this._connect.bind(this));
            var O = Math.max(this._timeout, this._rto * x.roundTrips || 5e3);
            this._transportTimeoutId = setTimeout(this._transportTimeout.bind(this), O);
            var C = o.addPath(this._transUrl, "/" + this._server + "/" + this._generateSessionId()), E = this._transportOptions[x.transportName], P = new x(C, this._transUrl, E);
            return P.on("message", this._transportMessage.bind(this)), P.once("close", this._transportClose.bind(this)), P.transportName = x.transportName, void (this._transport = P);
          }
          this._close(2e3, "All transports failed", !1);
        }, v.prototype._transportTimeout = function() {
          this.readyState === v.CONNECTING && (this._transport && this._transport.close(), this._transportClose(2007, "Transport timed out"));
        }, v.prototype._transportMessage = function(x) {
          var O, C = this, E = x.slice(0, 1), P = x.slice(1);
          switch (E) {
            case "o":
              return void this._open();
            case "h":
              return this.dispatchEvent(new h("heartbeat")), void this.transport;
          }
          if (P)
            try {
              O = JSON.parse(P);
            } catch {
            }
          if (O !== void 0)
            switch (E) {
              case "a":
                Array.isArray(O) && O.forEach(function(G) {
                  C.transport, C.dispatchEvent(new c(G));
                });
                break;
              case "m":
                this.transport, this.dispatchEvent(new c(O));
                break;
              case "c":
                Array.isArray(O) && O.length === 2 && this._close(O[0], O[1], !0);
            }
        }, v.prototype._transportClose = function(x, O) {
          this.transport, this._transport && (this._transport.removeAllListeners(), this._transport = null, this.transport = null), N(x) || x === 2e3 || this.readyState !== v.CONNECTING ? this._close(x, O) : this._connect();
        }, v.prototype._open = function() {
          this._transport && this._transport.transportName, this.readyState, this.readyState === v.CONNECTING ? (this._transportTimeoutId && (clearTimeout(this._transportTimeoutId), this._transportTimeoutId = null), this.readyState = v.OPEN, this.transport = this._transport.transportName, this.dispatchEvent(new h("open")), this.transport) : this._close(1006, "Server lost session");
        }, v.prototype._close = function(x, O, C) {
          this.transport, this.readyState;
          var E = !1;
          if (this._ir && (E = !0, this._ir.close(), this._ir = null), this._transport && (this._transport.close(), this._transport = null, this.transport = null), this.readyState === v.CLOSED)
            throw new Error("InvalidStateError: SockJS has already been closed");
          this.readyState = v.CLOSING, setTimeout((function() {
            this.readyState = v.CLOSED, E && this.dispatchEvent(new h("error"));
            var P = new b("close");
            P.wasClean = C || !1, P.code = x || 1e3, P.reason = O, this.dispatchEvent(P), this.onmessage = this.onclose = this.onerror = null;
          }).bind(this), 0);
        }, v.prototype.countRTO = function(x) {
          return x > 100 ? 4 * x : 300 + x;
        }, p.exports = function(x) {
          return r = l(x), e(551)(v, x), v;
        };
      }, 1247: function() {
        var p, R = Array.prototype, e = Object.prototype, r = Function.prototype, t = String.prototype, a = R.slice, s = e.toString, i = function(O) {
          return e.toString.call(O) === "[object Function]";
        }, o = function(O) {
          return s.call(O) === "[object String]";
        }, n = Object.defineProperty && function() {
          try {
            return Object.defineProperty({}, "x", {}), !0;
          } catch {
            return !1;
          }
        }();
        p = n ? function(O, C, E, P) {
          !P && C in O || Object.defineProperty(O, C, { configurable: !0, enumerable: !1, writable: !0, value: E });
        } : function(O, C, E, P) {
          !P && C in O || (O[C] = E);
        };
        var l = function(O, C, E) {
          for (var P in C)
            e.hasOwnProperty.call(C, P) && p(O, P, C[P], E);
        }, u = function(O) {
          if (O == null)
            throw new TypeError("can't convert " + O + " to object");
          return Object(O);
        };
        function m(O) {
          var C = +O;
          return C != C ? C = 0 : C !== 0 && C !== 1 / 0 && C !== -1 / 0 && (C = (C > 0 || -1) * Math.floor(Math.abs(C))), C;
        }
        function g() {
        }
        l(r, { bind: function(O) {
          var C = this;
          if (!i(C))
            throw new TypeError("Function.prototype.bind called on incompatible " + C);
          for (var E = a.call(arguments, 1), P = function() {
            if (this instanceof Y) {
              var K = C.apply(this, E.concat(a.call(arguments)));
              return Object(K) === K ? K : this;
            }
            return C.apply(O, E.concat(a.call(arguments)));
          }, G = Math.max(0, C.length - E.length), Z = [], F = 0; F < G; F++)
            Z.push("$" + F);
          var Y = Function("binder", "return function (" + Z.join(",") + "){ return binder.apply(this, arguments); }")(P);
          return C.prototype && (g.prototype = C.prototype, Y.prototype = new g(), g.prototype = null), Y;
        } }), l(Array, { isArray: function(O) {
          return s.call(O) === "[object Array]";
        } });
        var h, d, f, b = Object("a"), c = b[0] !== "a" || !(0 in b);
        l(R, { forEach: function(O) {
          var C = u(this), E = c && o(this) ? this.split("") : C, P = arguments[1], G = -1, Z = E.length >>> 0;
          if (!i(O))
            throw new TypeError();
          for (; ++G < Z; )
            G in E && O.call(P, E[G], G, C);
        } }, (h = R.forEach, d = !0, f = !0, h && (h.call("foo", function(O, C, E) {
          typeof E != "object" && (d = !1);
        }), h.call([1], function() {
          f = typeof this == "string";
        }, "x")), !(h && d && f)));
        var S = Array.prototype.indexOf && [0, 1].indexOf(1, 2) !== -1;
        l(R, { indexOf: function(O) {
          var C = c && o(this) ? this.split("") : u(this), E = C.length >>> 0;
          if (!E)
            return -1;
          var P = 0;
          for (arguments.length > 1 && (P = m(arguments[1])), P = P >= 0 ? P : Math.max(0, E + P); P < E; P++)
            if (P in C && C[P] === O)
              return P;
          return -1;
        } }, S);
        var v, N = t.split;
        "ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || "tesst".split(/(s)*/)[1] === "t" || "test".split(/(?:)/, -1).length !== 4 || "".split(/.?/).length || ".".split(/()()/).length > 1 ? (v = /()??/.exec("")[1] === void 0, t.split = function(O, C) {
          var E = this;
          if (O === void 0 && C === 0)
            return [];
          if (s.call(O) !== "[object RegExp]")
            return N.call(this, O, C);
          var P, G, Z, F, Y = [], K = (O.ignoreCase ? "i" : "") + (O.multiline ? "m" : "") + (O.extended ? "x" : "") + (O.sticky ? "y" : ""), V = 0;
          for (O = new RegExp(O.source, K + "g"), E += "", v || (P = new RegExp("^" + O.source + "$(?!\\s)", K)), C = C === void 0 ? 4294967295 : C >>> 0; (G = O.exec(E)) && !((Z = G.index + G[0].length) > V && (Y.push(E.slice(V, G.index)), !v && G.length > 1 && G[0].replace(P, function() {
            for (var ne = 1; ne < arguments.length - 2; ne++)
              arguments[ne] === void 0 && (G[ne] = void 0);
          }), G.length > 1 && G.index < E.length && R.push.apply(Y, G.slice(1)), F = G[0].length, V = Z, Y.length >= C)); )
            O.lastIndex === G.index && O.lastIndex++;
          return V === E.length ? !F && O.test("") || Y.push("") : Y.push(E.slice(V)), Y.length > C ? Y.slice(0, C) : Y;
        }) : "0".split(void 0, 0).length && (t.split = function(O, C) {
          return O === void 0 && C === 0 ? [] : N.call(this, O, C);
        });
        var x = t.substr;
        l(t, { substr: function(O, C) {
          return x.call(this, O < 0 && (O = this.length + O) < 0 ? 0 : O, C);
        } }, "".substr && "0b".substr(-1) !== "b");
      }, 7581: function(p, R, e) {
        p.exports = [e(2412), e(9842), e(4620), e(3004), e(882)(e(3004)), e(5616), e(882)(e(5616)), e(2387), e(9998), e(882)(e(2387)), e(5375)];
      }, 2940: function(p, R, e) {
        var r = e(3212).v, t = e(5717), a = e(7705), s = e(273), i = e.g.XMLHttpRequest;
        function o(u, m, g, h) {
          var d = this;
          r.call(this), setTimeout(function() {
            d._start(u, m, g, h);
          }, 0);
        }
        t(o, r), o.prototype._start = function(u, m, g, h) {
          var d = this;
          try {
            this.xhr = new i();
          } catch {
          }
          if (!this.xhr)
            return this.emit("finish", 0, "no xhr support"), void this._cleanup();
          m = s.addQuery(m, "t=" + +/* @__PURE__ */ new Date()), this.unloadRef = a.unloadAdd(function() {
            d._cleanup(!0);
          });
          try {
            this.xhr.open(u, m, !0), this.timeout && "timeout" in this.xhr && (this.xhr.timeout = this.timeout, this.xhr.ontimeout = function() {
              d.emit("finish", 0, ""), d._cleanup(!1);
            });
          } catch {
            return this.emit("finish", 0, ""), void this._cleanup(!1);
          }
          if (h && h.noCredentials || !o.supportsCORS || (this.xhr.withCredentials = !0), h && h.headers)
            for (var f in h.headers)
              this.xhr.setRequestHeader(f, h.headers[f]);
          this.xhr.onreadystatechange = function() {
            if (d.xhr) {
              var b, c, S = d.xhr;
              switch (S.readyState, S.readyState) {
                case 3:
                  try {
                    c = S.status, b = S.responseText;
                  } catch {
                  }
                  c === 1223 && (c = 204), c === 200 && b && b.length > 0 && d.emit("chunk", c, b);
                  break;
                case 4:
                  (c = S.status) === 1223 && (c = 204), c !== 12005 && c !== 12029 || (c = 0), S.responseText, d.emit("finish", c, S.responseText), d._cleanup(!1);
              }
            }
          };
          try {
            d.xhr.send(g);
          } catch {
            d.emit("finish", 0, ""), d._cleanup(!1);
          }
        }, o.prototype._cleanup = function(u) {
          if (this.xhr) {
            if (this.removeAllListeners(), a.unloadDel(this.unloadRef), this.xhr.onreadystatechange = function() {
            }, this.xhr.ontimeout && (this.xhr.ontimeout = null), u)
              try {
                this.xhr.abort();
              } catch {
              }
            this.unloadRef = this.xhr = null;
          }
        }, o.prototype.close = function() {
          this._cleanup(!0);
        }, o.enabled = !!i;
        var n = ["Active"].concat("Object").join("X");
        !o.enabled && n in e.g && (i = function() {
          try {
            return new e.g[n]("Microsoft.XMLHTTP");
          } catch {
            return null;
          }
        }, o.enabled = !!new i());
        var l = !1;
        try {
          l = "withCredentials" in new i();
        } catch {
        }
        o.supportsCORS = l, p.exports = o;
      }, 3759: function(p, R, e) {
        p.exports = e.g.EventSource;
      }, 9334: function(p, R, e) {
        var r = e.g.WebSocket || e.g.MozWebSocket;
        p.exports = r ? function(t) {
          return new r(t);
        } : void 0;
      }, 3004: function(p, R, e) {
        var r = e(5717), t = e(9395), a = e(6709), s = e(9033), i = e(3759);
        function o(n) {
          if (!o.enabled())
            throw new Error("Transport created when disabled");
          t.call(this, n, "/eventsource", a, s);
        }
        r(o, t), o.enabled = function() {
          return !!i;
        }, o.transportName = "eventsource", o.roundTrips = 2, p.exports = o;
      }, 5616: function(p, R, e) {
        var r = e(5717), t = e(3608), a = e(3515), s = e(9395);
        function i(o) {
          if (!t.enabled)
            throw new Error("Transport created when disabled");
          s.call(this, o, "/htmlfile", t, a);
        }
        r(i, s), i.enabled = function(o) {
          return t.enabled && o.sameOrigin;
        }, i.transportName = "htmlfile", i.roundTrips = 2, p.exports = i;
      }, 5088: function(p, R, e) {
        var r = e(5717), t = e(3212).v, a = e(2828), s = e(273), i = e(3683), o = e(7705), n = e(8915);
        function l(u, m, g) {
          if (!l.enabled())
            throw new Error("Transport created when disabled");
          t.call(this);
          var h = this;
          this.origin = s.getOrigin(g), this.baseUrl = g, this.transUrl = m, this.transport = u, this.windowId = n.string(8);
          var d = s.addPath(g, "/iframe.html") + "#" + this.windowId;
          this.iframeObj = i.createIframe(d, function(f) {
            h.emit("close", 1006, "Unable to load an iframe (" + f + ")"), h.close();
          }), this.onmessageCallback = this._message.bind(this), o.attachEvent("message", this.onmessageCallback);
        }
        r(l, t), l.prototype.close = function() {
          if (this.removeAllListeners(), this.iframeObj) {
            o.detachEvent("message", this.onmessageCallback);
            try {
              this.postMessage("c");
            } catch {
            }
            this.iframeObj.cleanup(), this.iframeObj = null, this.onmessageCallback = this.iframeObj = null;
          }
        }, l.prototype._message = function(u) {
          if (u.data, !s.isOriginEqual(u.origin, this.origin))
            return u.origin, void this.origin;
          var m;
          try {
            m = JSON.parse(u.data);
          } catch {
            return void u.data;
          }
          if (m.windowId !== this.windowId)
            return m.windowId, void this.windowId;
          switch (m.type) {
            case "s":
              this.iframeObj.loaded(), this.postMessage("s", JSON.stringify([a, this.transport, this.transUrl, this.baseUrl]));
              break;
            case "t":
              this.emit("message", m.data);
              break;
            case "c":
              var g;
              try {
                g = JSON.parse(m.data);
              } catch {
                return void m.data;
              }
              this.emit("close", g[0], g[1]), this.close();
          }
        }, l.prototype.postMessage = function(u, m) {
          this.iframeObj.post(JSON.stringify({ windowId: this.windowId, type: u, data: m || "" }), this.origin);
        }, l.prototype.send = function(u) {
          this.postMessage("m", u);
        }, l.enabled = function() {
          return i.iframeEnabled;
        }, l.transportName = "iframe", l.roundTrips = 2, p.exports = l;
      }, 5375: function(p, R, e) {
        var r = e(5717), t = e(8347), a = e(514), s = e(771);
        function i(o) {
          if (!i.enabled())
            throw new Error("Transport created when disabled");
          t.call(this, o, "/jsonp", s, a);
        }
        r(i, t), i.enabled = function() {
          return !!e.g.document;
        }, i.transportName = "jsonp-polling", i.roundTrips = 1, i.needBody = !0, p.exports = i;
      }, 9395: function(p, R, e) {
        var r = e(5717), t = e(273), a = e(8347);
        function s(i, o, n, l) {
          a.call(this, i, o, function(u) {
            return function(m, g, h) {
              var d = {};
              typeof g == "string" && (d.headers = { "Content-type": "text/plain" });
              var f = t.addPath(m, "/xhr_send"), b = new u("POST", f, g, d);
              return b.once("finish", function(c) {
                if (b = null, c !== 200 && c !== 204)
                  return h(new Error("http status " + c));
                h();
              }), function() {
                b.close(), b = null;
                var c = new Error("Aborted");
                c.code = 1e3, h(c);
              };
            };
          }(l), n, l);
        }
        r(s, a), p.exports = s;
      }, 1851: function(p, R, e) {
        var r = e(5717), t = e(3212).v;
        function a(s, i) {
          t.call(this), this.sendBuffer = [], this.sender = i, this.url = s;
        }
        r(a, t), a.prototype.send = function(s) {
          this.sendBuffer.push(s), this.sendStop || this.sendSchedule();
        }, a.prototype.sendScheduleWait = function() {
          var s, i = this;
          this.sendStop = function() {
            i.sendStop = null, clearTimeout(s);
          }, s = setTimeout(function() {
            i.sendStop = null, i.sendSchedule();
          }, 25);
        }, a.prototype.sendSchedule = function() {
          this.sendBuffer.length;
          var s = this;
          if (this.sendBuffer.length > 0) {
            var i = "[" + this.sendBuffer.join(",") + "]";
            this.sendStop = this.sender(this.url, i, function(o) {
              s.sendStop = null, o ? (s.emit("close", o.code || 1006, "Sending error: " + o), s.close()) : s.sendScheduleWait();
            }), this.sendBuffer = [];
          }
        }, a.prototype._cleanup = function() {
          this.removeAllListeners();
        }, a.prototype.close = function() {
          this._cleanup(), this.sendStop && (this.sendStop(), this.sendStop = null);
        }, p.exports = a;
      }, 882: function(p, R, e) {
        var r = e(5717), t = e(5088), a = e(2217);
        p.exports = function(s) {
          function i(o, n) {
            t.call(this, s.transportName, o, n);
          }
          return r(i, t), i.enabled = function(o, n) {
            if (!e.g.document)
              return !1;
            var l = a.extend({}, n);
            return l.sameOrigin = !0, s.enabled(l) && t.enabled();
          }, i.transportName = "iframe-" + s.transportName, i.needBody = !0, i.roundTrips = t.roundTrips + s.roundTrips - 1, i.facadeTransport = s, i;
        };
      }, 1265: function(p, R, e) {
        var r = e(5717), t = e(3212).v;
        function a(s, i, o) {
          t.call(this), this.Receiver = s, this.receiveUrl = i, this.AjaxObject = o, this._scheduleReceiver();
        }
        r(a, t), a.prototype._scheduleReceiver = function() {
          var s = this, i = this.poll = new this.Receiver(this.receiveUrl, this.AjaxObject);
          i.on("message", function(o) {
            s.emit("message", o);
          }), i.once("close", function(o, n) {
            s.pollIsClosing, s.poll = i = null, s.pollIsClosing || (n === "network" ? s._scheduleReceiver() : (s.emit("close", o || 1006, n), s.removeAllListeners()));
          });
        }, a.prototype.abort = function() {
          this.removeAllListeners(), this.pollIsClosing = !0, this.poll && this.poll.abort();
        }, p.exports = a;
      }, 8347: function(p, R, e) {
        var r = e(5717), t = e(273), a = e(1851), s = e(1265);
        function i(o, n, l, u, m) {
          var g = t.addPath(o, n), h = this;
          a.call(this, o, l), this.poll = new s(u, g, m), this.poll.on("message", function(d) {
            h.emit("message", d);
          }), this.poll.once("close", function(d, f) {
            h.poll = null, h.emit("close", d, f), h.close();
          });
        }
        r(i, a), i.prototype.close = function() {
          a.prototype.close.call(this), this.removeAllListeners(), this.poll && (this.poll.abort(), this.poll = null);
        }, p.exports = i;
      }, 6709: function(p, R, e) {
        var r = e(5717), t = e(3212).v, a = e(3759);
        function s(i) {
          t.call(this);
          var o = this, n = this.es = new a(i);
          n.onmessage = function(l) {
            l.data, o.emit("message", decodeURI(l.data));
          }, n.onerror = function(l) {
            n.readyState;
            var u = n.readyState !== 2 ? "network" : "permanent";
            o._cleanup(), o._close(u);
          };
        }
        r(s, t), s.prototype.abort = function() {
          this._cleanup(), this._close("user");
        }, s.prototype._cleanup = function() {
          var i = this.es;
          i && (i.onmessage = i.onerror = null, i.close(), this.es = null);
        }, s.prototype._close = function(i) {
          var o = this;
          setTimeout(function() {
            o.emit("close", null, i), o.removeAllListeners();
          }, 200);
        }, p.exports = s;
      }, 3608: function(p, R, e) {
        var r = e(5717), t = e(3683), a = e(273), s = e(3212).v, i = e(8915);
        function o(l) {
          s.call(this);
          var u = this;
          t.polluteGlobalNamespace(), this.id = "a" + i.string(6), l = a.addQuery(l, "c=" + decodeURIComponent(t.WPrefix + "." + this.id)), o.htmlfileEnabled;
          var m = o.htmlfileEnabled ? t.createHtmlfile : t.createIframe;
          e.g[t.WPrefix][this.id] = { start: function() {
            u.iframeObj.loaded();
          }, message: function(g) {
            u.emit("message", g);
          }, stop: function() {
            u._cleanup(), u._close("network");
          } }, this.iframeObj = m(l, function() {
            u._cleanup(), u._close("permanent");
          });
        }
        r(o, s), o.prototype.abort = function() {
          this._cleanup(), this._close("user");
        }, o.prototype._cleanup = function() {
          this.iframeObj && (this.iframeObj.cleanup(), this.iframeObj = null), delete e.g[t.WPrefix][this.id];
        }, o.prototype._close = function(l) {
          this.emit("close", null, l), this.removeAllListeners();
        }, o.htmlfileEnabled = !1;
        var n = ["Active"].concat("Object").join("X");
        if (n in e.g)
          try {
            o.htmlfileEnabled = !!new e.g[n]("htmlfile");
          } catch {
          }
        o.enabled = o.htmlfileEnabled || t.iframeEnabled, p.exports = o;
      }, 514: function(p, R, e) {
        var r = e(3683), t = e(8915), a = e(8510), s = e(273), i = e(5717), o = e(3212).v;
        function n(l) {
          var u = this;
          o.call(this), r.polluteGlobalNamespace(), this.id = "a" + t.string(6);
          var m = s.addQuery(l, "c=" + encodeURIComponent(r.WPrefix + "." + this.id));
          e.g[r.WPrefix][this.id] = this._callback.bind(this), this._createScript(m), this.timeoutId = setTimeout(function() {
            u._abort(new Error("JSONP script loaded abnormally (timeout)"));
          }, n.timeout);
        }
        i(n, o), n.prototype.abort = function() {
          if (e.g[r.WPrefix][this.id]) {
            var l = new Error("JSONP user aborted read");
            l.code = 1e3, this._abort(l);
          }
        }, n.timeout = 35e3, n.scriptErrorTimeout = 1e3, n.prototype._callback = function(l) {
          this._cleanup(), this.aborting || (l && this.emit("message", l), this.emit("close", null, "network"), this.removeAllListeners());
        }, n.prototype._abort = function(l) {
          this._cleanup(), this.aborting = !0, this.emit("close", l.code, l.message), this.removeAllListeners();
        }, n.prototype._cleanup = function() {
          if (clearTimeout(this.timeoutId), this.script2 && (this.script2.parentNode.removeChild(this.script2), this.script2 = null), this.script) {
            var l = this.script;
            l.parentNode.removeChild(l), l.onreadystatechange = l.onerror = l.onload = l.onclick = null, this.script = null;
          }
          delete e.g[r.WPrefix][this.id];
        }, n.prototype._scriptError = function() {
          var l = this;
          this.errorTimer || (this.errorTimer = setTimeout(function() {
            l.loadedOkay || l._abort(new Error("JSONP script loaded abnormally (onerror)"));
          }, n.scriptErrorTimeout));
        }, n.prototype._createScript = function(l) {
          var u, m = this, g = this.script = e.g.document.createElement("script");
          if (g.id = "a" + t.string(8), g.src = l, g.type = "text/javascript", g.charset = "UTF-8", g.onerror = this._scriptError.bind(this), g.onload = function() {
            m._abort(new Error("JSONP script loaded abnormally (onload)"));
          }, g.onreadystatechange = function() {
            if (g.readyState, /loaded|closed/.test(g.readyState)) {
              if (g && g.htmlFor && g.onclick) {
                m.loadedOkay = !0;
                try {
                  g.onclick();
                } catch {
                }
              }
              g && m._abort(new Error("JSONP script loaded abnormally (onreadystatechange)"));
            }
          }, g.async === void 0 && e.g.document.attachEvent)
            if (a.isOpera())
              (u = this.script2 = e.g.document.createElement("script")).text = "try{var a = document.getElementById('" + g.id + "'); if(a)a.onerror();}catch(x){};", g.async = u.async = !1;
            else {
              try {
                g.htmlFor = g.id, g.event = "onclick";
              } catch {
              }
              g.async = !0;
            }
          g.async !== void 0 && (g.async = !0);
          var h = e.g.document.getElementsByTagName("head")[0];
          h.insertBefore(g, h.firstChild), u && h.insertBefore(u, h.firstChild);
        }, p.exports = n;
      }, 1044: function(p, R, e) {
        var r = e(5717), t = e(3212).v;
        function a(s, i) {
          t.call(this);
          var o = this;
          this.bufferPosition = 0, this.xo = new i("POST", s, null), this.xo.on("chunk", this._chunkHandler.bind(this)), this.xo.once("finish", function(n, l) {
            o._chunkHandler(n, l), o.xo = null;
            var u = n === 200 ? "network" : "permanent";
            o.emit("close", null, u), o._cleanup();
          });
        }
        r(a, t), a.prototype._chunkHandler = function(s, i) {
          if (s === 200 && i)
            for (var o = -1; ; this.bufferPosition += o + 1) {
              var n = i.slice(this.bufferPosition);
              if ((o = n.indexOf(`
`)) === -1)
                break;
              var l = n.slice(0, o);
              l && this.emit("message", l);
            }
        }, a.prototype._cleanup = function() {
          this.removeAllListeners();
        }, a.prototype.abort = function() {
          this.xo && (this.xo.close(), this.emit("close", null, "user"), this.xo = null), this._cleanup();
        }, p.exports = a;
      }, 771: function(p, R, e) {
        var r, t, a = e(8915), s = e(273);
        p.exports = function(i, o, n) {
          r || ((r = e.g.document.createElement("form")).style.display = "none", r.style.position = "absolute", r.method = "POST", r.enctype = "application/x-www-form-urlencoded", r.acceptCharset = "UTF-8", (t = e.g.document.createElement("textarea")).name = "d", r.appendChild(t), e.g.document.body.appendChild(r));
          var l = "a" + a.string(8);
          r.target = l, r.action = s.addQuery(s.addPath(i, "/jsonp_send"), "i=" + l);
          var u = function(g) {
            try {
              return e.g.document.createElement('<iframe name="' + g + '">');
            } catch {
              var h = e.g.document.createElement("iframe");
              return h.name = g, h;
            }
          }(l);
          u.id = l, u.style.display = "none", r.appendChild(u);
          try {
            t.value = o;
          } catch {
          }
          r.submit();
          var m = function(g) {
            u.onerror && (u.onreadystatechange = u.onerror = u.onload = null, setTimeout(function() {
              u.parentNode.removeChild(u), u = null;
            }, 500), t.value = "", n(g));
          };
          return u.onerror = function() {
            m();
          }, u.onload = function() {
            m();
          }, u.onreadystatechange = function(g) {
            u.readyState, u.readyState === "complete" && m();
          }, function() {
            m(new Error("Aborted"));
          };
        };
      }, 6073: function(p, R, e) {
        var r = e(3212).v, t = e(5717), a = e(7705), s = e(8510), i = e(273);
        function o(n, l, u) {
          var m = this;
          r.call(this), setTimeout(function() {
            m._start(n, l, u);
          }, 0);
        }
        t(o, r), o.prototype._start = function(n, l, u) {
          var m = this, g = new e.g.XDomainRequest();
          l = i.addQuery(l, "t=" + +/* @__PURE__ */ new Date()), g.onerror = function() {
            m._error();
          }, g.ontimeout = function() {
            m._error();
          }, g.onprogress = function() {
            g.responseText, m.emit("chunk", 200, g.responseText);
          }, g.onload = function() {
            m.emit("finish", 200, g.responseText), m._cleanup(!1);
          }, this.xdr = g, this.unloadRef = a.unloadAdd(function() {
            m._cleanup(!0);
          });
          try {
            this.xdr.open(n, l), this.timeout && (this.xdr.timeout = this.timeout), this.xdr.send(u);
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
        }, o.enabled = !(!e.g.XDomainRequest || !s.hasDomain()), p.exports = o;
      }, 9033: function(p, R, e) {
        var r = e(5717), t = e(2940);
        function a(s, i, o, n) {
          t.call(this, s, i, o, n);
        }
        r(a, t), a.enabled = t.enabled && t.supportsCORS, p.exports = a;
      }, 7103: function(p, R, e) {
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
      }, 3515: function(p, R, e) {
        var r = e(5717), t = e(2940);
        function a(s, i, o) {
          t.call(this, s, i, o, { noCredentials: !0 });
        }
        r(a, t), a.enabled = t.enabled, p.exports = a;
      }, 2412: function(p, R, e) {
        var r = e(7705), t = e(273), a = e(5717), s = e(3212).v, i = e(9334);
        function o(n, l, u) {
          if (!o.enabled())
            throw new Error("Transport created when disabled");
          s.call(this);
          var m = this, g = t.addPath(n, "/websocket");
          g = g.slice(0, 5) === "https" ? "wss" + g.slice(5) : "ws" + g.slice(4), this.url = g, this.ws = new i(this.url, [], u), this.ws.onmessage = function(h) {
            h.data, m.emit("message", h.data);
          }, this.unloadRef = r.unloadAdd(function() {
            m.ws.close();
          }), this.ws.onclose = function(h) {
            h.code, h.reason, m.emit("close", h.code, h.reason), m._cleanup();
          }, this.ws.onerror = function(h) {
            m.emit("close", 1006, "WebSocket connection broken"), m._cleanup();
          };
        }
        a(o, s), o.prototype.send = function(n) {
          var l = "[" + n + "]";
          this.ws.send(l);
        }, o.prototype.close = function() {
          var n = this.ws;
          this._cleanup(), n && n.close();
        }, o.prototype._cleanup = function() {
          var n = this.ws;
          n && (n.onmessage = n.onclose = n.onerror = null), r.unloadDel(this.unloadRef), this.unloadRef = this.ws = null, this.removeAllListeners();
        }, o.enabled = function() {
          return !!i;
        }, o.transportName = "websocket", o.roundTrips = 2, p.exports = o;
      }, 9998: function(p, R, e) {
        var r = e(5717), t = e(9395), a = e(4620), s = e(1044), i = e(6073);
        function o(n) {
          if (!i.enabled)
            throw new Error("Transport created when disabled");
          t.call(this, n, "/xhr", s, i);
        }
        r(o, t), o.enabled = a.enabled, o.transportName = "xdr-polling", o.roundTrips = 2, p.exports = o;
      }, 4620: function(p, R, e) {
        var r = e(5717), t = e(9395), a = e(1044), s = e(6073);
        function i(o) {
          if (!s.enabled)
            throw new Error("Transport created when disabled");
          t.call(this, o, "/xhr_streaming", a, s);
        }
        r(i, t), i.enabled = function(o) {
          return !o.cookie_needed && !o.nullOrigin && s.enabled && o.sameScheme;
        }, i.transportName = "xdr-streaming", i.roundTrips = 2, p.exports = i;
      }, 2387: function(p, R, e) {
        var r = e(5717), t = e(9395), a = e(1044), s = e(9033), i = e(3515);
        function o(n) {
          if (!i.enabled && !s.enabled)
            throw new Error("Transport created when disabled");
          t.call(this, n, "/xhr", a, s);
        }
        r(o, t), o.enabled = function(n) {
          return !n.nullOrigin && (!(!i.enabled || !n.sameOrigin) || s.enabled);
        }, o.transportName = "xhr-polling", o.roundTrips = 2, p.exports = o;
      }, 9842: function(p, R, e) {
        var r = e(5717), t = e(9395), a = e(1044), s = e(9033), i = e(3515), o = e(8510);
        function n(l) {
          if (!i.enabled && !s.enabled)
            throw new Error("Transport created when disabled");
          t.call(this, l, "/xhr_streaming", a, s);
        }
        r(n, t), n.enabled = function(l) {
          return !l.nullOrigin && !o.isOpera() && s.enabled;
        }, n.transportName = "xhr-streaming", n.roundTrips = 2, n.needBody = !!e.g.document, p.exports = n;
      }, 2017: function(p, R, e) {
        e.g.crypto && e.g.crypto.getRandomValues ? p.exports.randomBytes = function(r) {
          var t = new Uint8Array(r);
          return e.g.crypto.getRandomValues(t), t;
        } : p.exports.randomBytes = function(r) {
          for (var t = new Array(r), a = 0; a < r; a++)
            t[a] = Math.floor(256 * Math.random());
          return t;
        };
      }, 8510: function(p, R, e) {
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
        var R, e = /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g;
        p.exports = { quote: function(r) {
          var t = JSON.stringify(r);
          return e.lastIndex = 0, e.test(t) ? (R || (R = function(a) {
            var s, i = {}, o = [];
            for (s = 0; s < 65536; s++)
              o.push(String.fromCharCode(s));
            return a.lastIndex = 0, o.join("").replace(a, function(n) {
              return i[n] = "\\u" + ("0000" + n.charCodeAt(0).toString(16)).slice(-4), "";
            }), a.lastIndex = 0, i;
          }(e)), t.replace(e, function(a) {
            return R[a];
          })) : t;
        } };
      }, 7705: function(p, R, e) {
        var r = e(8915), t = {}, a = !1, s = e.g.chrome && e.g.chrome.app && e.g.chrome.app.runtime;
        p.exports = { attachEvent: function(i, o) {
          e.g.addEventListener !== void 0 ? e.g.addEventListener(i, o, !1) : e.g.document && e.g.attachEvent && (e.g.document.attachEvent("on" + i, o), e.g.attachEvent("on" + i, o));
        }, detachEvent: function(i, o) {
          e.g.addEventListener !== void 0 ? e.g.removeEventListener(i, o, !1) : e.g.document && e.g.detachEvent && (e.g.document.detachEvent("on" + i, o), e.g.detachEvent("on" + i, o));
        }, unloadAdd: function(i) {
          if (s)
            return null;
          var o = r.string(8);
          return t[o] = i, a && setTimeout(this.triggerUnloadCallbacks, 0), o;
        }, unloadDel: function(i) {
          i in t && delete t[i];
        }, triggerUnloadCallbacks: function() {
          for (var i in t)
            t[i](), delete t[i];
        } }, s || p.exports.attachEvent("unload", function() {
          a || (a = !0, p.exports.triggerUnloadCallbacks());
        });
      }, 3683: function(p, R, e) {
        var r = e(7705), t = e(8510);
        p.exports = { WPrefix: "_jp", currentWindowId: null, polluteGlobalNamespace: function() {
          p.exports.WPrefix in e.g || (e.g[p.exports.WPrefix] = {});
        }, postMessage: function(a, s) {
          e.g.parent !== e.g && e.g.parent.postMessage(JSON.stringify({ windowId: p.exports.currentWindowId, type: a, data: s || "" }), "*");
        }, createIframe: function(a, s) {
          var i, o, n = e.g.document.createElement("iframe"), l = function() {
            clearTimeout(i);
            try {
              n.onload = null;
            } catch {
            }
            n.onerror = null;
          }, u = function() {
            n && (l(), setTimeout(function() {
              n && n.parentNode.removeChild(n), n = null;
            }, 0), r.unloadDel(o));
          }, m = function(g) {
            n && (u(), s(g));
          };
          return n.src = a, n.style.display = "none", n.style.position = "absolute", n.onerror = function() {
            m("onerror");
          }, n.onload = function() {
            clearTimeout(i), i = setTimeout(function() {
              m("onload timeout");
            }, 2e3);
          }, e.g.document.body.appendChild(n), i = setTimeout(function() {
            m("timeout");
          }, 15e3), o = r.unloadAdd(u), { post: function(g, h) {
            setTimeout(function() {
              try {
                n && n.contentWindow && n.contentWindow.postMessage(g, h);
              } catch {
              }
            }, 0);
          }, cleanup: u, loaded: l };
        }, createHtmlfile: function(a, s) {
          var i, o, n, l = ["Active"].concat("Object").join("X"), u = new e.g[l]("htmlfile"), m = function() {
            clearTimeout(i), n.onerror = null;
          }, g = function() {
            u && (m(), r.unloadDel(o), n.parentNode.removeChild(n), n = u = null, CollectGarbage());
          }, h = function(f) {
            u && (g(), s(f));
          };
          u.open(), u.write('<html><script>document.domain="' + e.g.document.domain + '";<\/script></html>'), u.close(), u.parentWindow[p.exports.WPrefix] = e.g[p.exports.WPrefix];
          var d = u.createElement("div");
          return u.body.appendChild(d), n = u.createElement("iframe"), d.appendChild(n), n.src = a, n.onerror = function() {
            h("onerror");
          }, i = setTimeout(function() {
            h("timeout");
          }, 15e3), o = r.unloadAdd(g), { post: function(f, b) {
            try {
              setTimeout(function() {
                n && n.contentWindow && n.contentWindow.postMessage(f, b);
              }, 0);
            } catch {
            }
          }, cleanup: g, loaded: m };
        } }, p.exports.iframeEnabled = !1, e.g.document && (p.exports.iframeEnabled = (typeof e.g.postMessage == "function" || typeof e.g.postMessage == "object") && !t.isKonqueror());
      }, 4886: function(p, R, e) {
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
        p.exports = { isObject: function(R) {
          var e = typeof R;
          return e === "function" || e === "object" && !!R;
        }, extend: function(R) {
          if (!this.isObject(R))
            return R;
          for (var e, r, t = 1, a = arguments.length; t < a; t++)
            for (r in e = arguments[t])
              Object.prototype.hasOwnProperty.call(e, r) && (R[r] = e[r]);
          return R;
        } };
      }, 8915: function(p, R, e) {
        var r = e(2017), t = "abcdefghijklmnopqrstuvwxyz012345";
        p.exports = { string: function(a) {
          for (var s = t.length, i = r.randomBytes(a), o = [], n = 0; n < a; n++)
            o.push(t.substr(i[n] % s, 1));
          return o.join("");
        }, number: function(a) {
          return Math.floor(Math.random() * a);
        }, numberString: function(a) {
          var s = ("" + (a - 1)).length;
          return (new Array(s + 1).join("0") + this.number(a)).slice(-s);
        } };
      }, 5581: function(p) {
        p.exports = function(R) {
          return { filterToEnabled: function(e, r) {
            var t = { main: [], facade: [] };
            return e ? typeof e == "string" && (e = [e]) : e = [], R.forEach(function(a) {
              a && (a.transportName === "websocket" && r.websocket === !1 || (e.length && e.indexOf(a.transportName) === -1 ? a.transportName : a.enabled(r) ? (a.transportName, t.main.push(a), a.facadeTransport && t.facade.push(a.facadeTransport)) : a.transportName));
            }), t;
          } };
        };
      }, 273: function(p, R, e) {
        var r = e(4564);
        p.exports = { getOrigin: function(t) {
          if (!t)
            return null;
          var a = new r(t);
          if (a.protocol === "file:")
            return null;
          var s = a.port;
          return s || (s = a.protocol === "https:" ? "443" : "80"), a.protocol + "//" + a.hostname + ":" + s;
        }, isOriginEqual: function(t, a) {
          return this.getOrigin(t) === this.getOrigin(a);
        }, isSchemeEqual: function(t, a) {
          return t.split(":")[0] === a.split(":")[0];
        }, addPath: function(t, a) {
          var s = t.split("?");
          return s[0] + a + (s[1] ? "?" + s[1] : "");
        }, addQuery: function(t, a) {
          return t + (t.indexOf("?") === -1 ? "?" + a : "&" + a);
        }, isLoopbackAddr: function(t) {
          return /^127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(t) || /^\[::1\]$/.test(t);
        } };
      }, 2828: function(p) {
        p.exports = "1.6.1";
      }, 4564: function(p, R, e) {
        var r = e(7418), t = e(7129), a = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/, s = /[\n\r\t]/g, i = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//, o = /:\d+$/, n = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i, l = /^[a-zA-Z]:/;
        function u(c) {
          return (c || "").toString().replace(a, "");
        }
        var m = [["#", "hash"], ["?", "query"], function(c, S) {
          return d(S.protocol) ? c.replace(/\\/g, "/") : c;
        }, ["/", "pathname"], ["@", "auth", 1], [NaN, "host", void 0, 1, 1], [/:(\d*)$/, "port", void 0, 1], [NaN, "hostname", void 0, 1, 1]], g = { hash: 1, query: 1 };
        function h(c) {
          var S, v = (typeof window < "u" ? window : e.g !== void 0 ? e.g : typeof self < "u" ? self : {}).location || {}, N = {}, x = typeof (c = c || v);
          if (c.protocol === "blob:")
            N = new b(unescape(c.pathname), {});
          else if (x === "string")
            for (S in N = new b(c, {}), g)
              delete N[S];
          else if (x === "object") {
            for (S in c)
              S in g || (N[S] = c[S]);
            N.slashes === void 0 && (N.slashes = i.test(c.href));
          }
          return N;
        }
        function d(c) {
          return c === "file:" || c === "ftp:" || c === "http:" || c === "https:" || c === "ws:" || c === "wss:";
        }
        function f(c, S) {
          c = (c = u(c)).replace(s, ""), S = S || {};
          var v, N = n.exec(c), x = N[1] ? N[1].toLowerCase() : "", O = !!N[2], C = !!N[3], E = 0;
          return O ? C ? (v = N[2] + N[3] + N[4], E = N[2].length + N[3].length) : (v = N[2] + N[4], E = N[2].length) : C ? (v = N[3] + N[4], E = N[3].length) : v = N[4], x === "file:" ? E >= 2 && (v = v.slice(2)) : d(x) ? v = N[4] : x ? O && (v = v.slice(2)) : E >= 2 && d(S.protocol) && (v = N[4]), { protocol: x, slashes: O || d(x), slashesCount: E, rest: v };
        }
        function b(c, S, v) {
          if (c = (c = u(c)).replace(s, ""), !(this instanceof b))
            return new b(c, S, v);
          var N, x, O, C, E, P, G = m.slice(), Z = typeof S, F = this, Y = 0;
          for (Z !== "object" && Z !== "string" && (v = S, S = null), v && typeof v != "function" && (v = t.parse), N = !(x = f(c || "", S = h(S))).protocol && !x.slashes, F.slashes = x.slashes || N && S.slashes, F.protocol = x.protocol || S.protocol || "", c = x.rest, (x.protocol === "file:" && (x.slashesCount !== 2 || l.test(c)) || !x.slashes && (x.protocol || x.slashesCount < 2 || !d(F.protocol))) && (G[3] = [/(.*)/, "pathname"]); Y < G.length; Y++)
            typeof (C = G[Y]) != "function" ? (O = C[0], P = C[1], O != O ? F[P] = c : typeof O == "string" ? ~(E = O === "@" ? c.lastIndexOf(O) : c.indexOf(O)) && (typeof C[2] == "number" ? (F[P] = c.slice(0, E), c = c.slice(E + C[2])) : (F[P] = c.slice(E), c = c.slice(0, E))) : (E = O.exec(c)) && (F[P] = E[1], c = c.slice(0, E.index)), F[P] = F[P] || N && C[3] && S[P] || "", C[4] && (F[P] = F[P].toLowerCase())) : c = C(c, F);
          v && (F.query = v(F.query)), N && S.slashes && F.pathname.charAt(0) !== "/" && (F.pathname !== "" || S.pathname !== "") && (F.pathname = function(K, V) {
            if (K === "")
              return V;
            for (var ne = (V || "/").split("/").slice(0, -1).concat(K.split("/")), ae = ne.length, se = ne[ae - 1], ue = !1, me = 0; ae--; )
              ne[ae] === "." ? ne.splice(ae, 1) : ne[ae] === ".." ? (ne.splice(ae, 1), me++) : me && (ae === 0 && (ue = !0), ne.splice(ae, 1), me--);
            return ue && ne.unshift(""), se !== "." && se !== ".." || ne.push(""), ne.join("/");
          }(F.pathname, S.pathname)), F.pathname.charAt(0) !== "/" && d(F.protocol) && (F.pathname = "/" + F.pathname), r(F.port, F.protocol) || (F.host = F.hostname, F.port = ""), F.username = F.password = "", F.auth && (~(E = F.auth.indexOf(":")) ? (F.username = F.auth.slice(0, E), F.username = encodeURIComponent(decodeURIComponent(F.username)), F.password = F.auth.slice(E + 1), F.password = encodeURIComponent(decodeURIComponent(F.password))) : F.username = encodeURIComponent(decodeURIComponent(F.auth)), F.auth = F.password ? F.username + ":" + F.password : F.username), F.origin = F.protocol !== "file:" && d(F.protocol) && F.host ? F.protocol + "//" + F.host : "null", F.href = F.toString();
        }
        b.prototype = { set: function(c, S, v) {
          var N = this;
          switch (c) {
            case "query":
              typeof S == "string" && S.length && (S = (v || t.parse)(S)), N[c] = S;
              break;
            case "port":
              N[c] = S, r(S, N.protocol) ? S && (N.host = N.hostname + ":" + S) : (N.host = N.hostname, N[c] = "");
              break;
            case "hostname":
              N[c] = S, N.port && (S += ":" + N.port), N.host = S;
              break;
            case "host":
              N[c] = S, o.test(S) ? (S = S.split(":"), N.port = S.pop(), N.hostname = S.join(":")) : (N.hostname = S, N.port = "");
              break;
            case "protocol":
              N.protocol = S.toLowerCase(), N.slashes = !v;
              break;
            case "pathname":
            case "hash":
              if (S) {
                var x = c === "pathname" ? "/" : "#";
                N[c] = S.charAt(0) !== x ? x + S : S;
              } else
                N[c] = S;
              break;
            case "username":
            case "password":
              N[c] = encodeURIComponent(S);
              break;
            case "auth":
              var O = S.indexOf(":");
              ~O ? (N.username = S.slice(0, O), N.username = encodeURIComponent(decodeURIComponent(N.username)), N.password = S.slice(O + 1), N.password = encodeURIComponent(decodeURIComponent(N.password))) : N.username = encodeURIComponent(decodeURIComponent(S));
          }
          for (var C = 0; C < m.length; C++) {
            var E = m[C];
            E[4] && (N[E[1]] = N[E[1]].toLowerCase());
          }
          return N.auth = N.password ? N.username + ":" + N.password : N.username, N.origin = N.protocol !== "file:" && d(N.protocol) && N.host ? N.protocol + "//" + N.host : "null", N.href = N.toString(), N;
        }, toString: function(c) {
          c && typeof c == "function" || (c = t.stringify);
          var S, v = this, N = v.host, x = v.protocol;
          x && x.charAt(x.length - 1) !== ":" && (x += ":");
          var O = x + (v.protocol && v.slashes || d(v.protocol) ? "//" : "");
          return v.username ? (O += v.username, v.password && (O += ":" + v.password), O += "@") : v.password ? (O += ":" + v.password, O += "@") : v.protocol !== "file:" && d(v.protocol) && !N && v.pathname !== "/" && (O += "@"), (N[N.length - 1] === ":" || o.test(v.hostname) && !v.port) && (N += ":"), O += N + v.pathname, (S = typeof v.query == "object" ? c(v.query) : v.query) && (O += S.charAt(0) !== "?" ? "?" + S : S), v.hash && (O += v.hash), O;
        } }, b.extractProtocol = f, b.location = h, b.trimLeft = u, b.qs = t, p.exports = b;
      } }, __webpack_module_cache__ = {};
      function __webpack_require__(p) {
        var R = __webpack_module_cache__[p];
        if (R !== void 0)
          return R.exports;
        var e = __webpack_module_cache__[p] = { exports: {} };
        return __webpack_modules__[p].call(e.exports, e, e.exports, __webpack_require__), e.exports;
      }
      __webpack_require__.amdO = {}, __webpack_require__.n = function(p) {
        var R = p && p.__esModule ? function() {
          return p.default;
        } : function() {
          return p;
        };
        return __webpack_require__.d(R, { a: R }), R;
      }, __webpack_require__.d = function(p, R) {
        for (var e in R)
          __webpack_require__.o(R, e) && !__webpack_require__.o(p, e) && Object.defineProperty(p, e, { enumerable: !0, get: R[e] });
      }, __webpack_require__.g = function() {
        if (typeof globalThis == "object")
          return globalThis;
        try {
          return this || new Function("return this")();
        } catch {
          if (typeof window == "object")
            return window;
        }
      }(), __webpack_require__.o = function(p, R) {
        return Object.prototype.hasOwnProperty.call(p, R);
      }, __webpack_require__.r = function(p) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(p, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(p, "__esModule", { value: !0 });
      };
      var __webpack_exports__ = {};
      return function() {
        __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, { default: function() {
          return Ne;
        } });
        var p = __webpack_require__(8e3), R = __webpack_require__.n(p), e = __webpack_require__(3281), r = __webpack_require__.n(e), t = __webpack_require__(3720), a = __webpack_require__.n(t), s = (__webpack_require__(9601), __webpack_require__(8309), __webpack_require__(6992), __webpack_require__(1532), __webpack_require__(1539), __webpack_require__(8783), __webpack_require__(3948), __webpack_require__(4812), __webpack_require__(9070), __webpack_require__(8674), __webpack_require__(9575), __webpack_require__(2472), __webpack_require__(2990), __webpack_require__(8927), __webpack_require__(3105), __webpack_require__(5035), __webpack_require__(4345), __webpack_require__(7174), __webpack_require__(2846), __webpack_require__(4731), __webpack_require__(7209), __webpack_require__(6319), __webpack_require__(8867), __webpack_require__(7789), __webpack_require__(3739), __webpack_require__(9368), __webpack_require__(4483), __webpack_require__(2056), __webpack_require__(3462), __webpack_require__(678), __webpack_require__(7462), __webpack_require__(3824), __webpack_require__(5021), __webpack_require__(2974), __webpack_require__(5016), __webpack_require__(5827), __webpack_require__(3843), __webpack_require__(3710), __webpack_require__(2564), __webpack_require__(9653), __webpack_require__(7941), __webpack_require__(9554), __webpack_require__(4747), __webpack_require__(1038), __webpack_require__(7327), __webpack_require__(561), __webpack_require__(7252)), i = __webpack_require__(4370), o = __webpack_require__(5531), n = __webpack_require__(1070), l = __webpack_require__(7360), u = function() {
          function j(B, T, W) {
            this.handlerData = {}, this.handlerData = {}, B.addEventHandler = this.addEventHandler.bind(this), B.removeEventHandler = this.removeEventHandler.bind(this);
          }
          return j.prototype.addEventHandler = function(B, T) {
            this.handlerData[B] = T;
          }, j.prototype.removeEventHandler = function(B) {
            delete this.handlerData[B];
          }, j.prototype.dispatch = function(B, T) {
            for (var W in l.kg.debug("dispatch event: " + B, T || ""), this.handlerData) {
              var _ = this.handlerData[W][B];
              _ && _(T);
            }
          }, j;
        }(), m = function() {
        };
        function g(j) {
          this.onOpened = j.onOpened || m, this.onPresence = j.onPresence || m, this.onTextMessage = j.onTextMessage || m, this.onPictureMessage = j.onPictureMessage || m, this.onAudioMessage = j.onAudioMessage || m, this.onVideoMessage = j.onVideoMessage || m, this.onFileMessage = j.onFileMessage || m, this.onLocationMessage = j.onLocationMessage || m, this.onCmdMessage = j.onCmdMessage || m, this.onCustomMessage = j.onCustomMessage || m, this.onReceivedMessage = j.onReceivedMessage || m, this.onDeliveredMessage = j.onDeliveredMessage || m, this.onReadMessage = j.onReadMessage || m, this.onRecallMessage = j.onRecallMessage || m, this.onChannelMessage = j.onChannelMessage || m, this.onError = j.onError || m, this.onOffline = j.onOffline || m, this.onOnline = j.onOnline || m, this.onStatisticMessage = j.onStatisticMessage || m, this.onContactInvited = j.onContactInvited || m, this.onContactAgreed = j.onContactAgreed || m, this.onContactRefuse = j.onContactRefuse || m, this.onContactDeleted = j.onContactDeleted || m, this.onContactAdded = j.onContactAdded || m, this.onTokenWillExpire = j.onTokenWillExpire || m, this.onTokenExpired = j.onTokenExpired || m, this.onClosed = j.onClosed || m, this.onPresenceStatusChange = j.onPresenceStatusChange || m;
        }
        __webpack_require__(2526), __webpack_require__(1817), __webpack_require__(2165), __webpack_require__(2222), __webpack_require__(2772);
        var h = { biz: "", debug: !1, token: "" }, d = "https://data-reporting.agora.io/report", f = "https://data-reporting.sh.agoralab.co/report", b = (__webpack_require__(6699), __webpack_require__(2023), __webpack_require__(2071)), c = __webpack_require__(1595), S = function(j) {
          var B = Number(c.C8[j]);
          return B === c.C8.USER_LOGIN ? "MANUALLOGIN" : B === c.C8.MSYNC_SENDMESSAGE ? "SENDMESSAGE" : B > c.C8.UNKNOWOPERATION && B < c.C8.REST_OPERATE ? "REST" : B > c.C8.REST_OPERATE && B < c.C8.MSYNC_OPERATE ? "MESSAGE" : B > c.C8.MSYNC_OPERATE && B < c.C8.ROSTER_OPERATE ? "ROSTER" : B > c.C8.ROSTER_OPERATE && B < c.C8.USER_OPERATE ? "USER" : B > c.C8.USER_OPERATE && B < c.C8.GROUP_OPERATE ? "GROUP" : B > c.C8.GROUP_OPERATE && B < c.C8.CHATROOM_OPERATE ? "CHATROOM" : "OPERATION";
        }, v = function() {
          return (/* @__PURE__ */ new Date()).getTime();
        }, N = function(j) {
          return [i.iw.BAIDU, i.iw.WX, i.iw.DD, i.iw.ZFB, i.iw.TT, i.iw.QUICK_APP, i.iw.UNI].includes(j.platform);
        }, x = function() {
          return j = 1, B = 99999, j = Math.ceil(j), B = Math.floor(B), Math.floor(Math.random() * (B - j)) + j;
          var j, B;
        }, O = {}, C = (__webpack_require__(1249), function(j, B) {
          var T = {};
          for (var W in j)
            Object.prototype.hasOwnProperty.call(j, W) && B.indexOf(W) < 0 && (T[W] = j[W]);
          if (j != null && typeof Object.getOwnPropertySymbols == "function") {
            var _ = 0;
            for (W = Object.getOwnPropertySymbols(j); _ < W.length; _++)
              B.indexOf(W[_]) < 0 && Object.prototype.propertyIsEnumerable.call(j, W[_]) && (T[W[_]] = j[W[_]]);
          }
          return T;
        }), E = 1e3, P = function() {
          function j(B) {
            this.eventQueue = [], this.stock = E, this.config = B, this.governor();
          }
          return j.prototype.add = function(B) {
            this.stock <= 0 ? console.warn("Event Report limit ".concat(E, " per minute")) : (this.eventQueue.push(B), this.consume(), this.stock -= 1);
          }, j.prototype.consume = function() {
            var B = this;
            this.eventQueue.length !== 0 && (this.timer && this.eventQueue.length <= 10 && clearTimeout(this.timer), this.timer = setTimeout(function() {
              var T, W = B.eventQueue.splice(0, 10), _ = W.filter(function(L) {
                return L.appId === W[0].appId;
              }), A = W.filter(function(L) {
                return L.appId !== W[0].appId;
              });
              (T = B.eventQueue).unshift.apply(T, A), B.batchSend(_);
            }, 1e3));
          }, j.prototype.governor = function() {
            var B = this, T = setInterval(function() {
              B.stock = E;
            }, 6e4);
            typeof addEventListener < "u" && addEventListener("beforeunload", function() {
              clearInterval(T);
            });
          }, j.prototype.batchSend = function(B) {
            var T, W;
            if (B === void 0 && (B = []), B.length !== 0)
              try {
                var _ = B.map(function(A) {
                  A.biz, A.appId;
                  var L = A.eventId, w = C(A, ["biz", "appId", "eventId"]);
                  return { eventId: Number(L), body: w };
                });
                (function(A, L) {
                  try {
                    var w = L.biz, k = L.appId, y = L.data, I = L.debug, H = L.onSuccess;
                    if (!w)
                      throw new Error("biz is not defined");
                    O.global || (O = i.P6.getEnvInfo());
                    var M = O;
                    if (N(M)) {
                      var D = { url: I ? f : d, data: y, method: "POST", success: function() {
                        H == null || H();
                      }, fail: function() {
                      }, complete: function() {
                      } }, J = { token: A, appid: k ?? "", sendts: "".concat(Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3)), biz: w, debug: "".concat(I) };
                      if (M.platform === "zfb" || M.platform === "dd" ? D.headers = J : D.header = J, M.platform === "dd")
                        return M.global.httpRequest(D);
                      M.global.request(D);
                    } else {
                      var X = new XMLHttpRequest();
                      X.onreadystatechange = function() {
                        X.readyState === 2 && (H == null || H());
                      }, X.open("POST", I ? f : d), X.setRequestHeader("Content-Type", "application/json"), X.setRequestHeader("token", A), X.setRequestHeader("appid", k ?? ""), X.setRequestHeader("sendts", "".concat(Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3))), X.setRequestHeader("biz", w), X.setRequestHeader("debug", "".concat(I)), X.send(JSON.stringify(y));
                    }
                  } catch (oe) {
                    console.error(oe);
                  }
                })(this.config.token, { biz: (T = B[0]) === null || T === void 0 ? void 0 : T.biz, appId: (W = B[0]) === null || W === void 0 ? void 0 : W.appId, data: _, debug: this.config.debug, onSuccess: this.consume.bind(this) });
              } catch (A) {
                console.error(A);
              }
          }, j;
        }(), G = function() {
          return G = Object.assign || function(j) {
            for (var B, T = 1, W = arguments.length; T < W; T++)
              for (var _ in B = arguments[T])
                Object.prototype.hasOwnProperty.call(B, _) && (j[_] = B[_]);
            return j;
          }, G.apply(this, arguments);
        }, Z = new (function() {
          function j(B) {
            this.inited = !1, this.appId = "", this.biz = "", this.eventQueue = {}, this.config = h, B && this.init(B);
          }
          return j.prototype.init = function(B) {
            var T;
            if (B === void 0 && (B = {}), !B.biz || !B.token)
              throw new Error("Event Report: biz or token is not defined");
            try {
              this.appId = (T = B.appId) !== null && T !== void 0 ? T : "", this.biz = B.biz, this.config = G(G({}, h), B), this.eventQueue = new P(this.config), this.log(B), this.inited = !0;
            } catch (W) {
              console.error(W);
            }
          }, j.prototype.send = function(B, T, W) {
            var _;
            if (T === void 0 && (T = {}), this.inited) {
              var A = G(G({}, T), { eventId: Number(B), biz: this.biz, appId: (_ = W == null ? void 0 : W.appId) !== null && _ !== void 0 ? _ : this.appId });
              this.eventQueue.add(A), this.log(A);
            } else
              console.error("Event Report: init is not called");
          }, j.prototype.log = function(B) {
            try {
              if (this.config.debug) {
                var T = B.payload, W = function(_, A) {
                  var L = {};
                  for (var w in _)
                    Object.prototype.hasOwnProperty.call(_, w) && A.indexOf(w) < 0 && (L[w] = _[w]);
                  if (_ != null && typeof Object.getOwnPropertySymbols == "function") {
                    var k = 0;
                    for (w = Object.getOwnPropertySymbols(_); k < w.length; k++)
                      A.indexOf(w[k]) < 0 && Object.prototype.propertyIsEnumerable.call(_, w[k]) && (L[w[k]] = _[w[k]]);
                  }
                  return L;
                }(B, ["payload"]);
                console.log("%c Event Report: ".concat(this.config.biz, " "), "background: #8A97FC; color: #fff"), console.table(W), T && (console.info("payload:"), console.table(T));
              }
            } catch (_) {
              console.error(_);
            }
          }, j;
        }())(), F = function() {
          return F = Object.assign || function(j) {
            for (var B, T = 1, W = arguments.length; T < W; T++)
              for (var _ in B = arguments[T])
                Object.prototype.hasOwnProperty.call(B, _) && (j[_] = B[_]);
            return j;
          }, F.apply(this, arguments);
        }, Y = { requestName: "", subrequestid: "1", requestMethod: "GET", requestUrl: "", requestElapse: 0, code: 0, codeDesc: "", isLastApi: 0, isSuccess: 1 }, K = function() {
          function j(B) {
            this.platform = i.P6.getEnvInfo(), this.isReportDt = B.isReport || !1, this.isCollectDt = !0, N(this.platform) && !this.isReportDt && (this.isCollectDt = !1), this.eventQueue = [], this.accessChannel = b.yK, this.options = function(T, W) {
              W.platform || (W = i.P6.getEnvInfo());
              var _ = T.org, A = T.appkey, L = T.deviceId, w = T.sdkVersion, k = (navigator == null ? void 0 : navigator.userAgent) || "".concat(W.platform, "_mini_program");
              return { org: _, appkey: A, deviceId: L, sdkServiceId: "sid_".concat(i.P6.getUniqueId(), "_").concat(x()), did: k, sdkVersion: w, os: b.Wc, sdkProduct: c.aC.web };
            }(B, this.platform), this.sid = this.options.sdkServiceId, this.init(B);
          }
          return j.getInstance = function() {
            return j.instance;
          }, j.prototype.getServiceId = function() {
            return this.sid || "sid_0";
          }, j.prototype.setIsReportDt = function(B) {
            this.isReportDt = B, B && this.rptEventQueue();
          }, j.prototype.setIsCollectDt = function(B) {
            this.isCollectDt = B, B || (this.eventQueue = []);
          }, j.prototype.rptEventQueue = function() {
            var B = this;
            this.eventQueue.length && this.eventQueue.forEach(function(T, W) {
              Z.send(T.eventId, T.dt), W >= B.eventQueue.length - 1 && (B.eventQueue = []);
            });
          }, j.prototype.init = function(B) {
            j.instance || (j.instance = this, Z.init({ biz: b.el, token: b.$x, appId: B.appkey, debug: !1 }), this.reportInit());
          }, j.prototype.reportInit = function() {
            if (this.isCollectDt) {
              var B = this.options, T = B.did, W = B.os, _ = B.sdkVersion, A = B.deviceId;
              this.reportData(b.iB.INIT, { did: T, os: W, sdkVersion: _, deviceId: A });
            }
          }, j.prototype.geOperateFun = function(B) {
            var T = this;
            if (!this.isCollectDt)
              return function() {
              };
            var W = 1, _ = 0, A = "", L = v(), w = B.uid, k = B.operationName;
            w && (this.uid = w);
            var y = { uid: this.uid, operationId: "opr_".concat(i.P6.getUniqueId(), "_").concat(x()), requestid: "req_".concat(i.P6.getUniqueId(), "_").concat(x()), operationName: k };
            return function(I) {
              var H, M, D, J;
              if (I.data.isSuccess ? (_ = 0, A = "") : (I.data.code === 0 && (I.data.code = b.Tp), _ = (H = I.data.code) !== null && H !== void 0 ? H : _, A = (M = I.data.codeDesc) !== null && M !== void 0 ? M : A), !((D = I.data) === null || D === void 0) && D.accessChannel && (T.accessChannel = (J = I.data) === null || J === void 0 ? void 0 : J.accessChannel), I.isRetry ? (W++, I.data.subrequestid = "".concat(W)) : (y.requestid = "req_".concat(i.P6.getUniqueId(), "_").concat(x()), W = 1), I.data.isLastApi) {
                var X = v();
                I.data.requestElapse = X - L, I.data.requestMethod = "", I.data.subrequestid = "0", I.data.code = _ === 200 ? 0 : _, I.data.codeDesc = A;
              } else
                I.data.requestName || (I.data.requestName = k);
              I.data.requestElapse || (I.data.requestElapse = v() - L), T.reportData.call(T, b.iB.API, F(F(F(F({}, Y), y), I.data), { accessChannel: T.accessChannel, operationType: S(k) })), I.isEndApi && T.reportData.call(T, b.iB.API, F(F(F({}, y), Y), { isSuccess: I.data.isSuccess, isLastApi: 1, subrequestid: "0", requestMethod: "", code: _ === 200 ? 0 : _, codeDesc: A, requestElapse: I.data.requestElapse, accessChannel: T.accessChannel, operationType: S(k) }));
            };
          }, j.prototype.reportData = function(B, T) {
            return W = this, _ = void 0, L = function() {
              var w, k, y, I, H, M, D, J;
              return function(X, oe) {
                var q, z, te, re, Ae = { label: 0, sent: function() {
                  if (1 & te[0])
                    throw te[1];
                  return te[1];
                }, trys: [], ops: [] };
                return re = { next: We(0), throw: We(1), return: We(2) }, typeof Symbol == "function" && (re[Symbol.iterator] = function() {
                  return this;
                }), re;
                function We(Te) {
                  return function(je) {
                    return function(ie) {
                      if (q)
                        throw new TypeError("Generator is already executing.");
                      for (; Ae; )
                        try {
                          if (q = 1, z && (te = 2 & ie[0] ? z.return : ie[0] ? z.throw || ((te = z.return) && te.call(z), 0) : z.next) && !(te = te.call(z, ie[1])).done)
                            return te;
                          switch (z = 0, te && (ie = [2 & ie[0], te.value]), ie[0]) {
                            case 0:
                            case 1:
                              te = ie;
                              break;
                            case 4:
                              return Ae.label++, { value: ie[1], done: !1 };
                            case 5:
                              Ae.label++, z = ie[1], ie = [0];
                              continue;
                            case 7:
                              ie = Ae.ops.pop(), Ae.trys.pop();
                              continue;
                            default:
                              if (!((te = (te = Ae.trys).length > 0 && te[te.length - 1]) || ie[0] !== 6 && ie[0] !== 2)) {
                                Ae = 0;
                                continue;
                              }
                              if (ie[0] === 3 && (!te || ie[1] > te[0] && ie[1] < te[3])) {
                                Ae.label = ie[1];
                                break;
                              }
                              if (ie[0] === 6 && Ae.label < te[1]) {
                                Ae.label = te[1], te = ie;
                                break;
                              }
                              if (te && Ae.label < te[2]) {
                                Ae.label = te[2], Ae.ops.push(ie);
                                break;
                              }
                              te[2] && Ae.ops.pop(), Ae.trys.pop();
                              continue;
                          }
                          ie = oe.call(X, Ae);
                        } catch (Je) {
                          ie = [6, Je], z = 0;
                        } finally {
                          q = te = 0;
                        }
                      if (5 & ie[0])
                        throw ie[1];
                      return { value: ie[0] ? ie[1] : void 0, done: !0 };
                    }([Te, je]);
                  };
                }
              }(this, function(X) {
                switch (X.label) {
                  case 0:
                    return X.trys.push([0, 3, , 4]), w = v(), k = 0, B !== b.iB.API ? [3, 2] : [4, (oe = this.platform, new Promise(function(q) {
                      var z;
                      oe.platform || (oe = i.P6.getEnvInfo());
                      var te = "";
                      if (oe.platform === i.iw.WEB) {
                        var re = navigator.connection;
                        re != null && re.type ? (re == null || re.type, te = c.td.WIFI) : re != null && re.effectiveType && (te = c.td[re.effectiveType.toLocaleUpperCase()]), q(te);
                      } else
                        oe.platform === i.iw.NODE ? (te = c.td.UNKNOWN, q(te)) : (z = oe.global) === null || z === void 0 || z.getNetworkType({ success: function(Ae) {
                          te = c.td[Ae.networkType.toLocaleUpperCase()], q(te);
                        } });
                    }))];
                  case 1:
                    k = X.sent(), X.label = 2;
                  case 2:
                    return y = this.options, I = y.appkey, H = y.sdkServiceId, M = y.sdkProduct, D = F({ lts: w, net: k, appkey: I, sdkServiceId: H, sdkProduct: M }, T), this.isReportDt ? Z.send(B, D) : this.isCollectDt && this.eventQueue.push({ eventId: B, dt: D }), [3, 4];
                  case 3:
                    return J = X.sent(), console.warn(J), [3, 4];
                  case 4:
                    return [2];
                }
                var oe;
              });
            }, new ((A = void 0) || (A = Promise))(function(w, k) {
              function y(M) {
                try {
                  H(L.next(M));
                } catch (D) {
                  k(D);
                }
              }
              function I(M) {
                try {
                  H(L.throw(M));
                } catch (D) {
                  k(D);
                }
              }
              function H(M) {
                var D;
                M.done ? w(M.value) : (D = M.value, D instanceof A ? D : new A(function(J) {
                  J(D);
                })).then(y, I);
              }
              H((L = L.apply(W, _ || [])).next());
            });
            var W, _, A, L;
          }, j;
        }(), V = __webpack_require__(7479), ne = __webpack_require__(2856), ae = __webpack_require__(9667), se = __webpack_require__(3770), ue = __webpack_require__(1735), me = __webpack_require__(7384), ge = __webpack_require__(70), Ce = __webpack_require__(8161), Re = function() {
          return Re = Object.assign || function(j) {
            for (var B, T = 1, W = arguments.length; T < W; T++)
              for (var _ in B = arguments[T])
                Object.prototype.hasOwnProperty.call(B, _) && (j[_] = B[_]);
            return j;
          }, Re.apply(this, arguments);
        }, Ie = i.P6.getEnvInfo(), Oe = Ie.platform === "web", fe = function() {
        }, ce = function() {
          function j(B) {
            var T;
            if (this.name = "connection", this.max_cache_length = 100, this.isDebug = B.isDebug || !1, this.isReport = !1, this.isHttpDNS = B.isHttpDNS === void 0 ? Oe : B.isHttpDNS, this.heartBeatWait = B.heartBeatWait || 3e4, this.autoReconnectNumMax = B.autoReconnectNumMax || 5, this.refreshDNSIntervals = this.autoReconnectNumMax < 5 ? this.autoReconnectNumMax : 5, this.delivery = B.delivery || !1, this.dnsArr = ["https://rs.easemob.com", "https://rs.chat.agora.io", "http://59.110.89.59", "http://39.97.193.190", "http://39.97.193.187"], this.dnsIndex = 0, this.dnsTotal = this.dnsArr.length, this.restHosts = [], this.restTotal = 0, this.restIndex = 0, this.hostIndex = 0, this.socketHost = [], this.hostTotal = 0, this.times = 1, this.autoReconnectNumTotal = 0, this.domain = "easemob.com", this.appKey = B.appKey, this.appName = "", this.orgName = "", this.token = "", this.grantType = "", this.apiUrl = B.apiUrl || "", this.url = B.url || "", this.https = B.https || typeof window < "u" && ((T = window.location) === null || T === void 0 ? void 0 : T.protocol) === "https:", this.version = "4.2.0", this.deviceId = B.deviceId || "webim", this.osType = 16, this.useOwnUploadFun = B.useOwnUploadFun || !1, this.compressType = [0], this.encryptType = [0], this.clientResource = "", this.expiresIn = 0, this.expirationTime = 0, this.logOut = !0, this.context = { jid: { appKey: "", clientResource: "", domain: "easemob.com", name: "" }, userId: "", appKey: "", status: 0, restTokenData: "", appName: "", orgName: "", root: {}, accessToken: "" }, this._msgHash = {}, this._msgPromiseHash = {}, this._queues = [], this._load_msg_cache = [], this.unMSyncSendMsgMap = /* @__PURE__ */ new Map(), this.mr_cache = {}, this.closeInfo = null, this.reconnecting = !1, typeof this.appKey != "string" || this.appKey.split("#").length !== 2)
              throw Error("Illegal appKey: ".concat(this.appKey));
            var W = this.appKey.split("#");
            this.orgName = W[0], this.appName = W[1], this.listen = g.bind(this), this.mSync = this.usePlugin(n.Z), this.eventHandler = this.usePlugin(u), Object.assign(j.prototype, V), Object.assign(j.prototype, ne), Object.assign(j.prototype, ae), Object.assign(j.prototype, se), Object.assign(j.prototype, ue), Object.assign(j.prototype, me), Object.assign(j.prototype, ge), this.dataReport = new K({ appkey: this.appKey, org: this.orgName, sdkVersion: this.version, deviceId: this.deviceId, isReport: this.isReport });
            var _ = 0, A = this;
            Object.defineProperty(i.P6, "ajaxUnconventionalErrorTimes", { set: function(L) {
              L !== 0 && (l.kg.debug("rest api request fail times: ".concat(L)), (_ = L) % 5 == 0 && this.isHttpDNS && (l.kg.debug("refresh dns config when rest request fail."), Pe.call(A, "refresh", {}, {})));
            }, get: function() {
              return _;
            } });
          }
          return j.prototype.usePlugin = function(B, T) {
            if (!T)
              return new B(this);
            this[T] = new B(this);
          }, j.prototype.listen = function(B) {
          }, j.prototype.addEventHandler = function(B, T) {
          }, j.prototype.removeEventHandler = function(B) {
          }, j.prototype.registerUser = function(B) {
            var T = this;
            return new Promise(function(W, _) {
              var A = T.dataReport.geOperateFun({ uid: B.username, operationName: c.fI.REGISTER });
              if (T.isHttpDNS) {
                T.dnsIndex = 0;
                var L = Re(Re({}, B), { user: B.username, pwd: B.password, promise: { resolve: W, reject: _ } });
                Pe.call(T, "signup", L, { rpt: A });
              } else
                L = Re(Re({}, B), { promise: { resolve: W, reject: _ } }), Ue.call(T, L, { rpt: A });
            });
          }, j.prototype.open = function(B) {
            var T = this;
            return l.kg.debug("open"), new Promise(function(W, _) {
              if (Ze.call(T, B)) {
                B.accessToken && (T.token = B.accessToken);
                var A = Re(Re({}, B), { promise: { resolve: W, reject: _ } }), L = T.dataReport.geOperateFun({ uid: B.user, operationName: c.fI.LOGIN });
                T.isHttpDNS ? Pe.call(T, "login", A, { rpt: L }) : Ke.call(T, A, { rpt: L });
              }
            });
          }, j.prototype.isOpened = function() {
            return this.sock && this.sock.readyState === 1 || !1;
          }, j.prototype.close = function() {
            var B;
            this.logOut = !0, this.reconnecting = !1, this.context.status = o.E.STATUS_CLOSING, this.sock && this.sock.close(), (B = this.unMSyncSendMsgMap) === null || B === void 0 || B.clear(), this.stopHeartBeat(), this.rejectMessage(), this.rejectContactsOperate(), this.context.status = o.E.STATUS_CLOSED, this._load_msg_cache = [], this._queues = [], this._msgHash = {}, this.mr_cache = {}, this.token = "", this.context.accessToken = "";
          }, j.prototype.downloadAndParseCombineMessage = function(B) {
            var T = this, W = B.url, _ = B.secret;
            return new Promise(function(A, L) {
              var w, k, y = i.P6.getEnvInfo(), I = y.platform !== "web" && y.platform !== "node" && y.platform !== "quick_app" && ((k = (w = y.global) === null || w === void 0 ? void 0 : w.canIUse) === null || k === void 0 ? void 0 : k.call(w, "getFileSystemManager")), H = function(D) {
                var J = function(te) {
                  L({ type: o.E.PARSE_FILE_ERROR, message: "Read file failed", data: te });
                }, X = function(te) {
                  var re = I ? new Uint8Array(te.data) : new Uint8Array(te.target.result), Ae = 0, We = 0, Te = 2, je = re.subarray(Ae, Ae + Te), ie = i.P6.Uint8ArrayToString(je);
                  l.kg.debug("file header:", ie), We += Te;
                  for (var Je = 0, De = 2; De < re.length - 1; De++)
                    De % 2 == 1 && (Je ^= re[De]);
                  var ze = re.subarray(re.length - 1, re.length);
                  if (l.kg.debug("checkResult:", Je, ze[0] === Je), ze[0] !== Je)
                    return L({ type: o.E.PARSE_FILE_ERROR, message: "File verification failed" });
                  if (ie !== "cm")
                    return L({ type: o.E.PARSE_FILE_ERROR, message: "File verification failed" });
                  try {
                    for (var at = [], st = function() {
                      Ae += Te, We += Te = 4;
                      var U = re.subarray(Ae, Ae + Te);
                      Ae += Te, Te = U.reduce(function(_e, be, Se) {
                        return _e + (be << 8 * (U.length - Se - 1));
                      }, 0), We += Te;
                      var Ee = re.subarray(Ae, Ae + Te), Q = T.root.lookup("easemob.pb.Meta");
                      Q = Q.decode(Ee);
                      var ye = Ce.Z.call(T, Q, 0, !0, !0);
                      at.push(ye);
                    }; We < re.length - 1; )
                      st();
                    return A(at);
                  } catch (U) {
                    L({ type: o.E.PARSE_FILE_ERROR, message: "Parse file failed", data: U });
                  }
                };
                if (I) {
                  var oe = y.global.getFileSystemManager(), q = D.tempFilePath;
                  oe.readFile({ filePath: q, success: X, fail: J });
                } else if (D instanceof Blob) {
                  var z = new FileReader();
                  z.readAsArrayBuffer(D), z.onerror = J, z.onload = X;
                }
              }, M = function(D) {
                L({ type: o.E.WEBIM_DOWNLOADFILE_ERROR, message: "Download failed, please try again", data: D });
              };
              I ? y.global.downloadFile({ url: W, success: H, fail: M }) : i.P6.download.call(T, { url: W, headers: { Accept: "application/json" }, onFileDownloadComplete: H, onFileDownloadError: M, secret: _, accessToken: T.context.accessToken });
            });
          }, j.prototype.stopHeartBeat = function() {
            clearInterval(this.heartBeatID);
          }, j.prototype.clear = function() {
            this.restTotal = 0, this.restIndex = 0, this.hostIndex = 0, this.hostTotal = 0;
          }, j.prototype.heartBeat = function() {
          }, j.prototype.renewToken = function(B) {
            var T = this;
            return this.isOpened() ? this.getChatToken(B).then(function(W) {
              var _ = Date.now();
              return T.expirationTime = W.expire_timestamp, T.expiresIn = W.expire_timestamp - _, T.token = W.access_token, T.context.accessToken = W.access_token, T.clearTokenTimeout(), T.tokenExpireTimeCountDown(T.expiresIn), { status: !0, token: W.access_token, expire: W.expire_timestamp };
            }) : Promise.reject({ status: !1 });
          }, j.prototype.clearTokenTimeout = function() {
            l.kg.debug("clearTokenTimeout"), this.tokenWillExpireTimer && clearTimeout(this.tokenWillExpireTimer), this.tokenExpiredTimer && clearTimeout(this.tokenExpiredTimer);
          }, j.prototype.tokenExpireTimeCountDown = function(B) {
            var T = this;
            B > Math.pow(2, 31) - 1 && (B = Math.pow(2, 31) - 1), this.tokenWillExpireTimer = setTimeout(function() {
              var W;
              T.onTokenWillExpire && T.onTokenWillExpire(), (W = T.eventHandler) === null || W === void 0 || W.dispatch("onTokenWillExpire"), l.kg.info("onTokenWillExpire", B);
            }, B / 2), this.tokenExpiredTimer = setTimeout(function() {
              var W;
              l.kg.info("onTokenExpired", B), T.onTokenExpired && T.onTokenExpired(), (W = T.eventHandler) === null || W === void 0 || W.dispatch("onTokenExpired"), T.close();
            }, B);
          }, j.prototype.compareTokenExpireTime = function(B, T) {
            var W, _ = Number(T) - Number(B);
            l.kg.debug("compareTokenExpireTime", _), _ <= this.expiresIn / 2 && _ > 0 ? (this.onTokenWillExpire && this.onTokenWillExpire(), (W = this.eventHandler) === null || W === void 0 || W.dispatch("onTokenWillExpire"), l.kg.info("onTokenWillExpire", _)) : _ <= 0 && (this.closeByTokenExpired(), l.kg.info("closeByTokenExpired", _));
          }, j.prototype.closeByTokenExpired = function() {
            var B;
            l.kg.info("closed By TokenExpired"), this.onTokenExpired && this.onTokenExpired(), (B = this.eventHandler) === null || B === void 0 || B.dispatch("onTokenExpired"), this.close();
          }, j.prototype.rejectMessage = function() {
            var B = this, T = Object.keys(this._msgHash);
            if (T.length > 0) {
              var W = s.Z.create({ type: o.E.MESSAGE_WEBSOCKET_DISCONNECTED, message: "websocket disconnected" });
              T.forEach(function(_) {
                var A;
                !((A = B.unMSyncSendMsgMap) === null || A === void 0) && A.has(_) || (B._msgHash[_].reject instanceof Function && B._msgHash[_].reject(W), B._msgHash[_].fail instanceof Function && B._msgHash[_].fail(W), delete B._msgHash[_]);
              });
            }
          }, j.prototype.rejectContactsOperate = function() {
            Array.from(b.Nl.values()).forEach(function(B) {
              B == null || B.reject();
            }), b.Nl.clear();
          }, j.prototype.resetConnState = function() {
            this.mSync.stopHeartBeat(), this.times = 1, this.autoReconnectNumTotal = 0, this.hostIndex = 0;
          }, j.prototype.reconnect = function() {
            var B, T = this;
            this.sock.readyState !== 0 && this.sock.readyState !== 1 && (l.kg.info("reconnect: time", this.times), l.kg.info("reconnect sock.readyState: ", this.sock.readyState), this.reconnecting === !1 && (this.reconnecting = !0), (B = this.eventHandler) === null || B === void 0 || B.dispatch("onReconnecting"), this.rejectMessage(), this.rejectContactsOperate(), this.isHttpDNS && (this.hostIndex < this.socketHost.length - 1 ? this.hostIndex++ : this.hostIndex = this.socketHost.length - 1), setTimeout(function() {
              T.sock.readyState !== 1 && (l.kg.info("login sock.readyState: ", T.sock.readyState), T.sock.close(), Be.call(T, { access_token: T.context.accessToken }), T.times++);
            }, 500 * this.times), this.autoReconnectNumTotal++);
          }, j.prototype.send = function(B) {
            return Promise.resolve(null);
          }, j._getSock = function() {
          }, j;
        }();
        function Ue(j, B) {
          var T = this, W = B.rpt, _ = B.isRetry, A = j.promise, L = this.apiUrl + "/" + this.orgName + "/" + this.appName + "/users", w = { requestName: c.c.RESISTER, requestUrl: L }, k = j.error || fe;
          if (!this.orgName && !this.appName) {
            var y = s.Z.create({ type: o.E.WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR, message: "signup error" });
            k(y);
          }
          var I = { headers: { "Content-type": "application/json" }, url: L, dataType: "json", data: JSON.stringify({ username: j.username, password: j.password, nickname: j.nickname || "" }), success: function(H) {
            j.success && j.success(H);
            var M = Re(Re({}, H), { type: o.E.REQUEST_SUCCESS });
            A.resolve && A.resolve(M);
            var D = H.extraInfo, J = D.httpCode, X = D.elapse;
            W({ isEndApi: !0, isRetry: _, data: Re(Re({}, { requestElapse: X, isSuccess: 1, code: J }), w) });
          }, error: function(H) {
            var M = H.extraInfo, D = M.elapse, J = M.httpCode, X = M.errDesc;
            return W({ isRetry: _, data: Re(Re({}, { requestElapse: D, isSuccess: 0, code: J, codeDesc: X }), w) }), T.isHttpDNS && T.restIndex + 1 < T.restTotal ? (T.restIndex++, Le.call(T), Ue.call(T, j, { rpt: W, isRetry: _ }), Promise.reject(H)) : (W({ data: { isLastApi: 1, isSuccess: 0 } }), T.clear(), A.reject && A.reject(H), k(H));
          } };
          return i.P6.ajax(I).catch(function(H) {
            A.reject && A.reject(H);
          });
        }
        function Ke(j, B) {
          var T = this;
          if (Ze.call(this, j) && !this.isOpened()) {
            var W = B.rpt, _ = B.isRetry;
            Qe.call(this, j), this.user = j.user;
            var A = j.promise, L = this.context.appName, w = this.context.orgName, k = this.apiUrl + "/" + w + "/" + L + "/token";
            if (j.agoraToken)
              this.grantType = "agoraToken", this.getChatToken(j.agoraToken).then(function(M) {
                l.kg.info("getChatToken result:", M), T.expirationTime = M.expire_timestamp, T.token = M.access_token, T.context.accessToken = M.access_token, T.context.restTokenData = M.access_token;
                var D = M.extraInfo, J = D.httpCode, X = D.elapse;
                A.resolve({ accessToken: M.access_token, expireTimestamp: M.expire_timestamp });
                var oe = { requestName: c.c.LOGIN_BY_AGORA_TOKEN, requestUrl: k, requestElapse: X, isSuccess: 1, code: J };
                W({ data: oe }), Be.call(T, Re(Re({}, j), { access_token: M.access_token }), W);
              }).catch(function(M) {
                var D, J = s.Z.create({ type: o.E.WEBIM_CONNCTION_GETROSTER_ERROR, message: "get chat token fail", data: M });
                A.reject(J), T.onError && T.onError(J), (D = T.eventHandler) === null || D === void 0 || D.dispatch("onError", J);
                var X = M.extraInfo, oe = X.elapse, q = X.httpCode, z = X.errDesc, te = { requestName: c.c.LOGIN_BY_AGORA_TOKEN, requestUrl: k, requestElapse: oe, isSuccess: 0, code: q, codeDesc: z };
                W({ data: te }), W({ data: { isLastApi: 1, isSuccess: 0 } });
              });
            else if (j.accessToken)
              this.grantType = "accessToken", this.token = j.accessToken, this.context.accessToken = j.accessToken, this.context.restTokenData = j.accessToken, A.resolve({ accessToken: j.accessToken }), Be.call(this, j, W);
            else {
              this.grantType = "password";
              var y = { grant_type: "password", username: j.user, password: j.pwd, timestamp: +/* @__PURE__ */ new Date() }, I = JSON.stringify(y), H = { headers: { "Content-type": "application/json" }, url: k, dataType: "json", data: I, success: function(M) {
                typeof j.success == "function" && j.success(M), T.token = M.access_token, T.context.restTokenData = M.access_token, T.context.accessToken = M.access_token, T.expiresIn = M.expires_in, T.clearTokenTimeout(), T.tokenExpireTimeCountDown(1e3 * T.expiresIn), A.resolve({ accessToken: M.access_token, duration: M.expires_in });
                var D = M.extraInfo, J = D.httpCode, X = D.elapse, oe = { requestName: c.c.LOGIN_BY_PWD, requestElapse: X, requestUrl: k, isSuccess: 1, code: J };
                W({ isRetry: _, data: oe }), Be.call(T, M, W);
              }, error: function(M) {
                var D, J = M.extraInfo, X = J.elapse, oe = J.httpCode, q = J.errDesc, z = { requestName: c.c.LOGIN_BY_PWD, requestElapse: X, requestUrl: k, isSuccess: 0, code: oe, codeDesc: q };
                if (W({ isRetry: _, data: z }), T.isHttpDNS && T.restIndex + 1 < T.restTotal)
                  return T.restIndex++, Le.call(T), void Ke.call(T, j, { rpt: W, isRetry: !0 });
                W({ data: { isLastApi: 1, isSuccess: 0 } }), T.clear(), M.error && M.error_description ? (D = s.Z.create({ type: o.E.WEBIM_CONNCTION_OPEN_USERGRID_ERROR, message: M.error_description, data: M }), T.onError && T.onError(D)) : (D = s.Z.create({ type: o.E.WEBIM_CONNCTION_OPEN_ERROR, message: M.error_description, data: M }), T.onError && T.onError(D)), typeof j.error == "function" && j.error(D), A.reject(D);
              }, version: "4.2.0" };
              i.P6.ajax(H).catch(function(M) {
                console.warn(M);
              });
            }
            i.P6.listenNetwork($e.bind(this), Ve.bind(this));
          }
        }
        function $e() {
          var j;
          l.kg.debug("online"), this.onOnline && this.onOnline(), (j = this.eventHandler) === null || j === void 0 || j.dispatch("onOnline"), this.sock && this.sock.readyState !== 1 && (l.kg.debug("sock.readyState:", this.sock.readyState), this.logOut || this.reconnecting || this.reconnect());
        }
        function Ve() {
          var j;
          l.kg.debug("offline"), this.onOffline && this.onOffline(), (j = this.eventHandler) === null || j === void 0 || j.dispatch("onOffline");
        }
        function Be(j, B) {
          var T = this, W = this._getSock();
          this.sock = W;
          var _ = function() {
            var w;
            l.kg.debug("websockt onOpen"), B && B({ data: { isLastApi: 1, isSuccess: 1, accessChannel: (w = T.socketHost[T.hostIndex]) === null || w === void 0 ? void 0 : w.channel } });
            var k = i.P6.flow([T.mSync.generateProvision, T.mSync.base64transform])();
            try {
              W.send(k);
            } catch (I) {
              var y = s.Z.create({ type: o.E.SDK_RUNTIME_ERROR, message: "send message error", data: I });
              T.onError && T.onError(y);
            }
          }, A = function(w) {
            setTimeout(function() {
              var k, y, I, H, M, D;
              l.kg.debug("websocket onClose"), Ie.platform !== "zfb" && Ie.platform !== "dd" || (T.sock.readyState = 3);
              var J = (w == null ? void 0 : w.code) === 401 || ((k = T.closeInfo) === null || k === void 0 ? void 0 : k.code) === 401;
              if (T.logOut)
                T.clear(), T.resetConnState(), J && (l.kg.debug("websocket provision error"), T.closeInfo = null), T.onClosed && T.onClosed(), (y = T.eventHandler) === null || y === void 0 || y.dispatch("onDisconnected");
              else if (J) {
                l.kg.debug("websocket provision error");
                var X = { type: o.E.WEBIM_CONNECTION_ERROR, message: "provision error", data: w };
                T.closeInfo = null, T.onError && T.onError(X), (I = T.eventHandler) === null || I === void 0 || I.dispatch("onError", X), T.onClosed && T.onClosed(), (H = T.eventHandler) === null || H === void 0 || H.dispatch("onDisconnected"), T.resetConnState();
              } else if (T.autoReconnectNumTotal < T.autoReconnectNumMax) {
                T.reconnect();
                var oe = { type: o.E.WEBIM_CONNCTION_DISCONNECTED, message: "websocket has been disconnected" };
                T.onError && T.onError(oe), T.autoReconnectNumTotal % T.refreshDNSIntervals == 0 && Ie.platform === "web" && T.isHttpDNS && (l.kg.debug("refresh dns config when websocket close"), Pe.call(T, "refresh", {}, {}));
              } else
                (M = T.unMSyncSendMsgMap) === null || M === void 0 || M.clear(), T.rejectMessage(), oe = { type: o.E.WEBIM_CONNCTION_DISCONNECTED, message: "websocket has been disconnected" }, T.onError && T.onError(oe), T.onClosed && T.onClosed(), (D = T.eventHandler) === null || D === void 0 || D.dispatch("onDisconnected"), T.resetConnState(), T.reconnecting = !1, l.kg.debug("reconnect fail");
            }, 0);
          }, L = function(w) {
            var k = T.mSync, y = k.decodeMSync, I = k.distributeMSync;
            i.P6.flow([y, I])(w);
          };
          Ie.platform === "web" ? (W.onopen = _, W.onclose = A, W.onmessage = L) : (W.onOpen(_), W.onMessage(L), W.onClose(A), typeof window < "u" && window.WebSocket || W.onError(function(w) {
            var k, y, I;
            if (l.kg.debug("mini program sock on error", w), T.onError && T.onError({ type: o.E.WEBIM_CONNECTION_ERROR, message: "on socket error", data: w }), !T.logOut)
              if (T.autoReconnectNumTotal < T.autoReconnectNumMax)
                l.kg.debug("sock.onError reconnect", T.autoReconnectNumTotal, T.autoReconnectNumMax), T.reconnect(), T.autoReconnectNumTotal % T.refreshDNSIntervals == 0 && Ie.platform === "web" && T.isHttpDNS && (l.kg.debug("refresh dns config when websocket error"), Pe.call(T, "refresh", {}, {}));
              else {
                var H = { type: o.E.WEBIM_CONNCTION_DISCONNECTED, message: "websocket has been disconnected" };
                (k = T.unMSyncSendMsgMap) === null || k === void 0 || k.clear(), T.rejectMessage(), T.onError && T.onError(H), T.onClosed && T.onClosed(), (y = T.eventHandler) === null || y === void 0 || y.dispatch("onDisconnected"), T.resetConnState(), T.reconnecting = !1, l.kg.debug("reconnect fail");
              }
            B && B({ data: { isLastApi: 1, isSuccess: 0, accessChannel: (I = T.socketHost[T.hostIndex]) === null || I === void 0 ? void 0 : I.channel } });
          }));
        }
        function Ze(j) {
          if (j.user === "") {
            var B = s.Z.create({ type: o.E.WEBIM_CONNCTION_USER_NOT_ASSIGN_ERROR, message: "the user cannot be empty" });
            return l.kg.debug("open params error", B), this.onError && this.onError(B), !1;
          }
          var T = this.appKey.split("#");
          return !(T.length !== 2 || !T[0] || !T[1]) || (B = s.Z.create({ type: o.E.WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR, message: "the appKey is illegal" }), l.kg.debug("open params error", B), this.onError && this.onError(B), !1);
        }
        function Qe(j) {
          this.context.jid = { appKey: this.appKey, name: j.user, domain: this.domain, clientResource: this.clientResource };
          var B = this.appKey.split("#"), T = B[0], W = B[1];
          this.context.root = this.root, this.context.userId = j.user, this.context.appKey = this.appKey, this.context.appName = W, this.context.orgName = T;
        }
        function Pe(j, B, T) {
          var W = this, _ = T.rpt, A = T.isRetry, L = this.dnsArr[this.dnsIndex] + "/easemob/server.json", w = { url: L, dataType: "json", type: "GET", data: { app_key: encodeURIComponent(this.appKey) }, success: function(k) {
            var y = k.extraInfo, I = y.elapse, H = y.httpCode, M = { requestUrl: L, requestName: c.c.GET_DNS, requestElapse: I, isSuccess: 1, code: H };
            (k == null ? void 0 : k.enableDataReport) === "true" ? (W.dataReport.setIsCollectDt(!0), W.dataReport.setIsReportDt(!0)) : (W.dataReport.setIsReportDt(!1), W.dataReport.setIsCollectDt(!1)), _ && _({ isRetry: A, data: M });
            var D = k.rest.hosts, J = W.https ? "https" : "http";
            if (l.kg.info("httpType: " + J), !D)
              return Promise.reject(!1);
            for (var X = D.filter(function(re) {
              if (re.protocol === J)
                return re;
            }), oe = 0; oe < X.length; oe++)
              if (X[oe].protocol === J) {
                var q = X[oe];
                X.splice(oe, 1), X.unshift(q);
              }
            W.restHosts = X, W.restTotal = X.length;
            var z = k["msync-ws"].hosts;
            if (!z)
              return Promise.reject(!1);
            var te = z.filter(function(re) {
              return re.protocol === J && re;
            });
            W.socketHost = te, W.hostTotal = te.length, Le.call(W), j !== "refresh" && (j === "login" ? Ke.call(W, B, { rpt: _ }) : Ue.call(W, B, { rpt: _ }));
          }, error: function(k) {
            var y = k.extraInfo, I = y.elapse, H = y.httpCode, M = y.errDesc, D = { requestUrl: L, requestName: c.c.GET_DNS, isSuccess: 0, code: H, codeDesc: M, requestElapse: I };
            _ && _({ isRetry: A, data: D }), l.kg.debug("getHttpDNS fail: " + W.dnsIndex), W.dnsIndex++, W.dnsIndex < W.dnsTotal && Pe.call(W, j, B, { rpt: _, isRetry: !0 });
          } };
          return i.P6.ajax(w).catch(function(k) {
            console.warn(k);
          });
        }
        function Le() {
          var j, B;
          if (this.restIndex > this.restTotal)
            return l.kg.debug("restIndex > restTotal"), "";
          var T = "", W = this.restHosts[this.restIndex], _ = W.domain, A = W.ip, L = W.port, w = this.https ? "https:" : "http:";
          return A && typeof window < "u" && ((j = window == null ? void 0 : window.location) === null || j === void 0 ? void 0 : j.protocol) === "http:" ? T = w + "//" + A + ":" + L : (T = w + "//" + _, L && L !== "80" && L !== "443" && (T += ":".concat(L)), typeof window > "u" || window.location || (T = "https://" + _), typeof window < "u" && window.location && ((B = window.location) === null || B === void 0 ? void 0 : B.protocol) === "file:" && (T = "https://" + _)), typeof window > "u" && (T = w + "//" + _), this.apiUrl = T, T;
        }
        var xe = __webpack_require__(2449);
        r().util.Long = a(), r().configure();
        var ve = r().Root.fromJSON({ nested: { easemob: { nested: { pb: { nested: { MessageBody: { fields: { type: { type: "Type", id: 1 }, from: { type: "JID", id: 2 }, to: { type: "JID", id: 3 }, contents: { rule: "repeated", type: "Content", id: 4 }, ext: { rule: "repeated", type: "KeyValue", id: 5 }, ackMessageId: { type: "uint64", id: 6 }, msgConfig: { type: "MessageConfig", id: 7 }, ackContent: { type: "string", id: 8 }, meta: { type: "string", id: 9 }, editMessageId: { type: "uint64", id: 11 } }, nested: { Content: { fields: { type: { type: "Type", id: 1 }, text: { type: "string", id: 2 }, latitude: { type: "double", id: 3 }, longitude: { type: "double", id: 4 }, address: { type: "string", id: 5 }, displayName: { type: "string", id: 6 }, remotePath: { type: "string", id: 7 }, secretKey: { type: "string", id: 8 }, fileLength: { type: "int32", id: 9 }, action: { type: "string", id: 10 }, params: { rule: "repeated", type: "KeyValue", id: 11 }, duration: { type: "int32", id: 12 }, size: { type: "Size", id: 13 }, thumbnailRemotePath: { type: "string", id: 14 }, thumbnailSecretKey: { type: "string", id: 15 }, thumbnailDisplayName: { type: "string", id: 16 }, thumbnailFileLength: { type: "int32", id: 17 }, thumbnailSize: { type: "Size", id: 18 }, customEvent: { type: "string", id: 19 }, customExts: { rule: "repeated", type: "KeyValue", id: 20 }, buildingName: { type: "string", id: 21 }, subType: { type: "SubType", id: 22 }, title: { type: "string", id: 23 }, summary: { type: "string", id: 24 }, combineLevel: { type: "int32", id: 25 } }, nested: { Type: { values: { TEXT: 0, IMAGE: 1, VIDEO: 2, LOCATION: 3, VOICE: 4, FILE: 5, COMMAND: 6, CUSTOM: 7, COMBINE: 8 } }, Size: { fields: { width: { type: "double", id: 1 }, height: { type: "double", id: 2 } } }, SubType: { values: { COMBINE: 0 } } } }, Type: { values: { NORMAL: 0, CHAT: 1, GROUPCHAT: 2, CHATROOM: 3, READ_ACK: 4, DELIVER_ACK: 5, RECALL: 6, CHANNEL_ACK: 7, EDIT: 8 } }, MessageConfig: { fields: { allowGroupAck: { type: "bool", id: 1 } } } } }, KeyValue: { oneofs: { value: { oneof: ["varintValue", "floatValue", "doubleValue", "stringValue"] } }, fields: { key: { type: "string", id: 1 }, type: { type: "ValueType", id: 2 }, varintValue: { type: "int64", id: 3 }, floatValue: { type: "float", id: 4 }, doubleValue: { type: "double", id: 5 }, stringValue: { type: "string", id: 6 } }, nested: { ValueType: { values: { BOOL: 1, INT: 2, UINT: 3, LLINT: 4, FLOAT: 5, DOUBLE: 6, STRING: 7, JSON_STRING: 8 } } } }, JID: { fields: { appKey: { type: "string", id: 1 }, name: { type: "string", id: 2 }, domain: { type: "string", id: 3 }, clientResource: { type: "string", id: 4 } } }, ConferenceBody: { fields: { sessionId: { type: "string", id: 1 }, operation: { type: "Operation", id: 2 }, conferenceId: { type: "string", id: 3 }, type: { type: "Type", id: 4 }, content: { type: "string", id: 5 }, network: { type: "string", id: 6 }, version: { type: "string", id: 7 }, identity: { type: "Identity", id: 8 }, duration: { type: "string", id: 9 }, peerName: { type: "string", id: 10 }, endReason: { type: "EndReason", id: 11 }, status: { type: "Status", id: 12 }, isDirect: { type: "bool", id: 13 }, controlType: { type: "StreamControlType", id: 14 }, routeFlag: { type: "int32", id: 15 }, routeKey: { type: "string", id: 16 } }, nested: { Status: { fields: { errorCode: { type: "int32", id: 1 } } }, Operation: { values: { JOIN: 0, INITIATE: 1, ACCEPT_INITIATE: 2, ANSWER: 3, TERMINATE: 4, REMOVE: 5, STREAM_CONTROL: 6, MEDIA_REQUEST: 7 } }, Type: { values: { VOICE: 0, VIDEO: 1 } }, Identity: { values: { CALLER: 0, CALLEE: 1 } }, EndReason: { values: { HANGUP: 0, NORESPONSE: 1, REJECT: 2, BUSY: 3, FAIL: 4, UNSUPPORTED: 5, OFFLINE: 6 } }, StreamControlType: { values: { PAUSE_VOICE: 0, RESUME_VOICE: 1, PAUSE_VIDEO: 2, RESUME_VIDEO: 3 } } } }, MSync: { fields: { version: { type: "Version", id: 1, options: { default: "MSYNC_V1" } }, guid: { type: "JID", id: 2 }, auth: { type: "string", id: 3 }, compressAlgorimth: { type: "uint32", id: 4 }, crypto: { type: "uint32", id: 5 }, userAgent: { type: "string", id: 6 }, pov: { type: "uint64", id: 7 }, command: { type: "Command", id: 8 }, deviceId: { type: "uint32", id: 10 }, encryptType: { rule: "repeated", type: "EncryptType", id: 11, options: { packed: !1 } }, encryptKey: { type: "string", id: 12 }, payload: { type: "bytes", id: 9 } }, nested: { Version: { values: { MSYNC_V1: 0, MSYNC_V2: 1 } }, Command: { values: { SYNC: 0, UNREAD: 1, NOTICE: 2, PROVISION: 3 } } } }, EncryptType: { values: { ENCRYPT_NONE: 0, ENCRYPT_AES_128_CBC: 1, ENCRYPT_AES_256_CBC: 2 } }, CommSyncUL: { fields: { meta: { type: "Meta", id: 1 }, key: { type: "uint64", id: 2 }, queue: { type: "JID", id: 3 }, isRoam: { type: "bool", id: 4 }, lastFullRoamKey: { type: "uint64", id: 5 } } }, CommSyncDL: { fields: { status: { type: "Status", id: 1 }, metaId: { type: "uint64", id: 2 }, serverId: { type: "uint64", id: 3 }, metas: { rule: "repeated", type: "Meta", id: 4 }, nextKey: { type: "uint64", id: 5 }, queue: { type: "JID", id: 6 }, isLast: { type: "bool", id: 7 }, timestamp: { type: "uint64", id: 8 }, isRoam: { type: "bool", id: 9 } } }, CommNotice: { fields: { queue: { type: "JID", id: 1 } } }, CommUnreadUL: { fields: {} }, CommUnreadDL: { fields: { status: { type: "Status", id: 1 }, unread: { rule: "repeated", type: "MetaQueue", id: 2 }, timestamp: { type: "uint64", id: 3 } } }, MetaQueue: { fields: { queue: { type: "JID", id: 1 }, n: { type: "uint32", id: 2 } } }, Meta: { fields: { id: { type: "uint64", id: 1 }, from: { type: "JID", id: 2 }, to: { type: "JID", id: 3 }, timestamp: { type: "uint64", id: 4 }, ns: { type: "NameSpace", id: 5 }, payload: { type: "bytes", id: 6 }, routetype: { type: "RouteType", id: 7 }, ext: { type: "KeyValue", id: 8 }, meta: { type: "bytes", id: 9 }, directedUsers: { rule: "repeated", type: "string", id: 10 } }, nested: { NameSpace: { values: { STATISTIC: 0, CHAT: 1, MUC: 2, ROSTER: 3, CONFERENCE: 4, NOTIFY: 5, QUERY: 6 } }, RouteType: { values: { ROUTE_ALL: 0, ROUTE_ONLINE: 1, ROUTE_DIRECT: 2 } } } }, Status: { fields: { errorCode: { type: "ErrorCode", id: 1 }, reason: { type: "string", id: 2 }, redirectInfo: { rule: "repeated", type: "RedirectInfo", id: 3 } }, nested: { ErrorCode: { values: { OK: 0, FAIL: 1, UNAUTHORIZED: 2, MISSING_PARAMETER: 3, WRONG_PARAMETER: 4, REDIRECT: 5, TOKEN_EXPIRED: 6, PERMISSION_DENIED: 7, NO_ROUTE: 8, UNKNOWN_COMMAND: 9, PB_PARSER_ERROR: 10, BIND_ANOTHER_DEVICE: 11, IM_FORBIDDEN: 12, TOO_MANY_DEVICES: 13, PLATFORM_LIMIT: 14, USER_MUTED: 15, ENCRYPT_DISABLE: 16, ENCRYPT_ENABLE: 17, DECRYPT_FAILURE: 18, PERMISSION_DENIED_EXTERNAL: 19 } } } }, RedirectInfo: { fields: { host: { type: "string", id: 1 }, port: { type: "uint32", id: 2 } } }, Provision: { fields: { osType: { type: "OsType", id: 1 }, version: { type: "string", id: 2 }, networkType: { type: "NetworkType", id: 3 }, appSign: { type: "string", id: 4 }, compressType: { rule: "repeated", type: "CompressType", id: 5, options: { packed: !1 } }, encryptType: { rule: "repeated", type: "EncryptType", id: 6, options: { packed: !1 } }, encryptKey: { type: "string", id: 7 }, status: { type: "Status", id: 8 }, deviceUuid: { type: "string", id: 9 }, isManualLogin: { type: "bool", id: 10 }, password: { type: "string", id: 11 }, deviceName: { type: "string", id: 12 }, resource: { type: "string", id: 13 }, auth: { type: "string", id: 14 }, serviceId: { type: "string", id: 16 }, actionVersion: { type: "string", id: 17 } }, nested: { OsType: { values: { OS_IOS: 0, OS_ANDROID: 1, OS_LINUX: 2, OS_OSX: 3, OS_WIN: 4, OS_OTHER: 16 } }, NetworkType: { values: { NETWORK_NONE: 0, NETWORK_WIFI: 1, NETWORK_4G: 2, NETWORK_3G: 3, NETWORK_2G: 4, NETWORK_WIRE: 5 } }, CompressType: { values: { COMPRESS_NONE: 0, COMPRESS_ZLIB: 1 } } } }, MUCBody: { fields: { mucId: { type: "JID", id: 1 }, operation: { type: "Operation", id: 2 }, from: { type: "JID", id: 3 }, to: { rule: "repeated", type: "JID", id: 4 }, setting: { type: "Setting", id: 5 }, reason: { type: "string", id: 6 }, isChatroom: { type: "bool", id: 7 }, status: { type: "Status", id: 8 }, isThread: { type: "bool", id: 9 }, mucParentId: { type: "JID", id: 10 }, mucName: { type: "string", id: 11 }, eventInfo: { type: "EventInfo", id: 12 } }, nested: { Operation: { values: { CREATE: 0, DESTROY: 1, JOIN: 2, LEAVE: 3, APPLY: 4, APPLY_ACCEPT: 5, APPLY_DECLINE: 6, INVITE: 7, INVITE_ACCEPT: 8, INVITE_DECLINE: 9, KICK: 10, GET_BLACKLIST: 11, BAN: 12, ALLOW: 13, UPDATE: 14, BLOCK: 15, UNBLOCK: 16, PRESENCE: 17, ABSENCE: 18, DIRECT_JOINED: 19, ASSIGN_OWNER: 20, ADD_ADMIN: 21, REMOVE_ADMIN: 22, ADD_MUTE: 23, REMOVE_MUTE: 24, UPDATE_ANNOUNCEMENT: 25, DELETE_ANNOUNCEMENT: 26, UPLOAD_FILE: 27, DELETE_FILE: 28, ADD_USER_WHITE_LIST: 29, REMOVE_USER_WHITE_LIST: 30, BAN_GROUP: 31, REMOVE_BAN_GROUP: 32, THREAD_CREATE: 33, THREAD_DESTROY: 34, THREAD_JOIN: 35, THREAD_LEAVE: 36, THREAD_KICK: 37, THREAD_UPDATE: 38, THREAD_PRESENCE: 39, THREAD_ABSENCE: 40, DISABLE_GROUP: 41, ABLE_GROUP: 42, SET_METADATA: 43, DELETE_METADATA: 44, GROUP_MEMBER_METADATA_UPDATE: 45 } }, Setting: { fields: { name: { type: "string", id: 1 }, desc: { type: "string", id: 2 }, type: { type: "Type", id: 3 }, maxUsers: { type: "int32", id: 4 }, owner: { type: "string", id: 5 } }, nested: { Type: { values: { PRIVATE_OWNER_INVITE: 0, PRIVATE_MEMBER_INVITE: 1, PUBLIC_JOIN_APPROVAL: 2, PUBLIC_JOIN_OPEN: 3, PUBLIC_ANONYMOUS: 4 } } } }, Status: { fields: { errorCode: { type: "ErrorCode", id: 1 }, description: { type: "string", id: 2 } }, nested: { ErrorCode: { values: { OK: 0, PERMISSION_DENIED: 1, WRONG_PARAMETER: 2, MUC_NOT_EXIST: 3, USER_NOT_EXIST: 4, UNKNOWN: 5 } } } }, EventInfo: { fields: { eventType: { type: "EventType", id: 1, options: { default: "EVENT_NONE" } }, ext: { type: "string", id: 2 } }, nested: { EventType: { values: { EVENT_NONE: 0, CIRCLE_CHANNEL: 1 } } } } } }, RosterBody: { fields: { operation: { type: "Operation", id: 1 }, status: { type: "Status", id: 2 }, from: { type: "JID", id: 3 }, to: { rule: "repeated", type: "JID", id: 4 }, reason: { type: "string", id: 5 }, rosterVer: { type: "string", id: 6 }, biDirection: { type: "bool", id: 7 } }, nested: { Operation: { values: { GET_ROSTER: 0, GET_BLACKLIST: 1, ADD: 2, REMOVE: 3, ACCEPT: 4, DECLINE: 5, BAN: 6, ALLOW: 7, REMOTE_ACCEPT: 8, REMOTE_DECLINE: 9 } }, Status: { fields: { errorCode: { type: "ErrorCode", id: 1 }, description: { type: "string", id: 2 } }, nested: { ErrorCode: { values: { OK: 0, USER_NOT_EXIST: 1, USER_ALREADY_FRIEND: 2, USER_ALREADY_BLACKLIST: 3 } } } } } }, StatisticsBody: { fields: { operation: { type: "Operation", id: 1 }, os: { type: "OsType", id: 2 }, version: { type: "string", id: 3 }, network: { type: "NetworkType", id: 4 }, imTime: { type: "uint32", id: 5 }, chatTime: { type: "uint32", id: 6 }, location: { type: "string", id: 7 } }, nested: { Operation: { values: { INFORMATION: 0, USER_REMOVED: 1, USER_LOGIN_ANOTHER_DEVICE: 2, USER_KICKED_BY_CHANGE_PASSWORD: 3, USER_KICKED_BY_OTHER_DEVICE: 4 } }, OsType: { values: { OS_IOS: 0, OS_ANDROID: 1, OS_LINUX: 2, OS_OSX: 3, OS_WIN: 4, OS_OTHER: 16 } }, NetworkType: { values: { NETWORK_NONE: 0, NETWORK_WIFI: 1, NETWORK_4G: 2, NETWORK_3G: 3, NETWORK_2G: 4, NETWORK_WIRE: 5 } } } } } } } } } });
        ce.prototype.root = ve;
        var we = l.kg.getLogger("defaultLogger");
        we.setConfig({ useCache: !1, maxCache: 3145728, color: "", background: "" }), we.enableAll(), ce.prototype._getSock = function() {
          if (this.isHttpDNS) {
            var j = this.socketHost[this.hostIndex];
            if (!j)
              throw this.times = 1, this.autoReconnectNumTotal = 0, this.hostIndex = 0, this.onClosed && this.onClosed(), new Error("No connected domain name when get websocket.");
            var B = j.domain, T = j.ip, W = "", _ = j.port;
            W = B || T, _ && _ !== "80" && _ !== "443" && (W += ":" + _), W && (this.url = "//" + W + "/ws");
            var A = this.https ? "https:" : "http:";
            this.url = A + this.url;
          }
          return new (R())(this.url);
        }, ce.prototype.getUniqueId = i.P6.getUniqueId;
        var ke = { connection: ce, message: xe.Message, utils: i.P6, logger: we, statusCode: o.E };
        typeof window < "u" && (window.WebIM = ke);
        var Ne = ke;
      }(), __webpack_exports__;
    }();
  });
})(EasemobChat);
var EasemobChatExports = EasemobChat.exports;
const EaseSDK = /* @__PURE__ */ getDefaultExportFromCjs(EasemobChatExports), manageEasemobApis = () => {
  const { currentChatroomId: p } = useManageChatroom();
  return {
    loginIMWithPassword: (i, o) => new Promise((n, l) => {
      EMClient.open({
        user: i,
        pwd: o
      }).then((u) => {
        n(u);
      }).catch((u) => {
        l(u);
      });
    }),
    loginIMWithAccessToken: (i, o) => new Promise((n, l) => {
      EMClient.open({
        user: i,
        accessToken: o
      }).then((u) => {
        n(u);
      }).catch((u) => {
        l(u);
      });
    }),
    joinChatroom: () => {
      if (!p.value)
        throw "please pass roomId!";
      return new Promise((i, o) => {
        EMClient.joinChatRoom({
          roomId: p.value
        }).then((n) => {
          console.log(">>>>>joinChatroom success", n), i(n);
        }).catch((n) => {
          o(n);
        });
      });
    },
    sendTextMessage: (i) => new Promise((o, n) => {
      const l = EMCreateMessage(i);
      EMClient.send(l).then((u) => {
        l.id = u.serverMsgId, Object.assign(u, l), o(u);
      }).catch((u) => {
        n(u);
      });
    }),
    sendImageMessage: (i) => new Promise((o, n) => {
      const l = EMCreateMessage(i);
      EMClient.send(l).then((u) => {
        o(u);
      }).catch((u) => {
        n(u);
      });
    }),
    fetchLoginUserNickname: (i) => new Promise((o, n) => {
      EMClient.fetchUserInfoById(i, "nickname").then((l) => {
        console.log(">>>>消息测试", l.data), l.data && o(l.data);
      }).catch((l) => {
        n(l);
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
    const { sendTextMessage: a, sendImageMessage: s } = manageEasemobApis();
    return new Promise((i, o) => {
      t.type === "txt" && a(t).then((n) => {
        messageCollect$1.push(n), i(n);
      }).catch((n) => {
        o(n);
      }), t.type === "img" && s(t);
    });
  },
  pushMessageToList: (t) => {
    messageCollect$1.push(t);
  },
  setLoginUserInfo: async (t) => {
    const { fetchLoginUserNickname: a } = manageEasemobApis();
    loginUserInfo.loginUserId = t;
    try {
      const s = await a(t);
      loginUserInfo.nickname = s[t].nickname, console.log(">>>>>>获取到用户属性", loginUserInfo.nickname);
    } catch {
      console.log(">>>>>>获取失败");
    }
  }
}), mountEaseIMListener = (p) => {
  const { pushMessageToList: R, setLoginUserInfo: e } = useManageChatroom(), { joinChatroom: r } = manageEasemobApis();
  console.log(">>>mountEaseIMListener"), p.addEventHandler("connection", {
    onConnected: () => {
      console.log(">>>>>onConnected"), r(), e(p.user);
    },
    onDisconnected: () => {
      console.log(">>>>>Disconnected");
    },
    onError: (t) => {
      console.log(">>>>>>Error", t);
    }
  }), p.addEventHandler("message", {
    onTextMessage(t) {
      R(t);
    },
    onImageMessage(t) {
      R(t);
    }
  }), p.addEventHandler("chatroomEvent", {
    onChatroomEvent(t) {
      console.log(">>>>chatroomEvent", t);
    }
  });
};
let EMClient = {};
const EMCreateMessage = EaseSDK.message.create, initEMClient = (p) => (EMClient = new EaseSDK.connection({
  appKey: p
}), mountEaseIMListener(EMClient), EMClient), index = "", scrollBottom = (p) => {
  p == null || p.scrollTo({
    top: p == null ? void 0 : p.scrollHeight
  });
}, message = "", {
  messageCollect
} = useManageChatroom(), MessageList = () => createVNode(Fragment, null, [messageCollect.length > 0 && messageCollect.map((p) => {
  var R;
  return createVNode("div", {
    class: "message_item_box",
    key: p.id
  }, [createVNode("div", {
    class: "message_item_nickname"
  }, [((R = p == null ? void 0 : p.ext) == null ? void 0 : R.nickname) || p.from]), p.type === "txt" && createVNode("p", {
    class: "message_item_textmsg"
  }, [p.msg]), p.type === "img" && createVNode("img", {
    src: p.thumb
  }, null)]);
})]), MessageContainer = /* @__PURE__ */ defineComponent({
  name: "MessageContainer",
  setup() {
    return watch(messageCollect, () => {
      console.log(">>>>>>监听到消息列表改变"), nextTick(() => {
        const p = document.querySelector(".message_container");
        console.log("messageContainer", p), setTimeout(() => {
          p && scrollBottom(p);
        }, 300);
      });
    }), () => createVNode(Fragment, null, [createVNode("div", {
      class: "message_container"
    }, [createVNode(MessageList, null, null)])]);
  }
}), inputbar = "";
let PLACE_HOLDER_TEXT = /* @__PURE__ */ function(p) {
  return p.TEXT = "Enter 发送输入的内容...", p;
}({});
const ControlStrip = () => createVNode(Fragment, null, [createVNode("div", {
  class: "control_strip_container"
}, [createVNode("div", {
  class: "control_strip_func_emoji"
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
}, null)])])])]), InputBarContainer = /* @__PURE__ */ defineComponent({
  name: "InputBarContainer",
  setup() {
    const p = ref(""), R = (s) => {
      p.value = s.target.value;
    }, {
      currentChatroomId: e,
      loginUserInfo: r,
      sendDisplayMessage: t
    } = useManageChatroom(), a = async (s) => {
      if (console.log(">>>>>event", s.code), !p.value.match(/^\s*$/) && s.code === "Enter" && !s.shiftKey) {
        s.preventDefault(), console.log(">>>>>>调用发送方法");
        const i = {
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
          await t(i), p.value = "";
        } catch (o) {
          console.log(">>>>>消息发送失败", o);
        }
      }
    };
    return () => createVNode(Fragment, null, [createVNode("div", {
      class: "input_bar_container"
    }, [createVNode(ControlStrip, null, null), createVNode("div", {
      class: "message_content_input_box"
    }, [createVNode("input", {
      class: "message_content_input",
      type: "text",
      value: p.value,
      onInput: R,
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
      setCurrentChatroomId: R
    } = useManageChatroom(), {
      loginIMWithPassword: e,
      loginIMWithAccessToken: r
    } = manageEasemobApis(), t = async () => {
      if (EMClient)
        try {
          p.accessToken ? await r(p.username, p.accessToken) : await e(p.username, p.password);
        } catch (s) {
          throw `${s.data.message}`;
        }
    }, a = async () => {
      console.log(">>>>>断开连接");
    };
    return onMounted(() => {
      t(), p.chatroomId && R(p.chatroomId);
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
  install: (p, R) => {
    if (console.log(p), console.log("options", R), R && (R != null && R.appKey))
      initEMClient(R.appKey);
    else
      throw console.error("appKey不能为空");
    p.component(EasemobChatroom.name, EasemobChatroom);
  }
};
export {
  install as default
};
