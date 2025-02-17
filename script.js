(function () {
  var t,
    e = [].slice;
  (t = (function () {
    function t() {
      var e, n;
      for (e = [], n = 1; n <= 4; n++) e.push(new t.mutablecolor(60));
      (this.col = e),
        (this._scheme = "mono"),
        (this._distance = 0.5),
        (this._web_safe = !1),
        (this._add_complement = !1);
    }
    var n, r, o, a, i, u;
    for (
      i =
        Array.isArray ||
        function (t) {
          return "[object Array]" === {}.toString.call(t);
        },
        t.SCHEMES = {},
        a = "mono monochromatic contrast triade tetrade analogic".split(/\s+/),
        r = 0,
        o = a.length;
      r < o;
      r++
    )
      (u = a[r]), (t.SCHEMES[u] = !0);
    return (
      (t.PRESETS = {
        default: [-1, -1, 1, -0.7, 0.25, 1, 0.5, 1],
        pastel: [0.5, -0.9, 0.5, 0.5, 0.1, 0.9, 0.75, 0.75],
        soft: [0.3, -0.8, 0.3, 0.5, 0.1, 0.9, 0.5, 0.75],
        light: [0.25, 1, 0.5, 0.75, 0.1, 1, 0.5, 1],
        hard: [1, -1, 1, -0.6, 0.1, 1, 0.6, 1],
        pale: [0.1, -0.85, 0.1, 0.5, 0.1, 1, 0.1, 0.75],
      }),
      (t.COLOR_WHEEL = {
        0: [255, 0, 0, 100],
        15: [255, 51, 0, 100],
        30: [255, 102, 0, 100],
        45: [255, 128, 0, 100],
        60: [255, 153, 0, 100],
        75: [255, 178, 0, 100],
        90: [255, 204, 0, 100],
        105: [255, 229, 0, 100],
        120: [255, 255, 0, 100],
        135: [204, 255, 0, 100],
        150: [153, 255, 0, 100],
        165: [51, 255, 0, 100],
        180: [0, 204, 0, 80],
        195: [0, 178, 102, 70],
        210: [0, 153, 153, 60],
        225: [0, 102, 178, 70],
        240: [0, 51, 204, 80],
        255: [25, 25, 178, 70],
        270: [51, 0, 153, 60],
        285: [64, 0, 153, 60],
        300: [102, 0, 153, 60],
        315: [153, 0, 153, 60],
        330: [204, 0, 153, 80],
        345: [229, 0, 102, 90],
      }),
      (t.prototype.colors = function () {
        var t, e, n, r, o, a, i, u, s;
        if (
          ((s = 1),
          (e = this.col[0].get_hue()),
          (t = {
            mono: (function (t) {
              return function () {};
            })(),
            contrast: (function (t) {
              return function () {
                return (s = 2), t.col[1].set_hue(e), t.col[1].rotate(180);
              };
            })(this),
            triade: (function (t) {
              return function () {
                var n;
                return (
                  (s = 3),
                  (n = 60 * t._distance),
                  t.col[1].set_hue(e),
                  t.col[1].rotate(180 - n),
                  t.col[2].set_hue(e),
                  t.col[2].rotate(180 + n)
                );
              };
            })(this),
            tetrade: (function (t) {
              return function () {
                var n;
                return (
                  (s = 4),
                  (n = 90 * t._distance),
                  t.col[1].set_hue(e),
                  t.col[1].rotate(180),
                  t.col[2].set_hue(e),
                  t.col[2].rotate(180 + n),
                  t.col[3].set_hue(e),
                  t.col[3].rotate(n)
                );
              };
            })(this),
            analogic: (function (t) {
              return function () {
                var n;
                return (
                  (s = t._add_complement ? 4 : 3),
                  (n = 60 * t._distance),
                  t.col[1].set_hue(e),
                  t.col[1].rotate(n),
                  t.col[2].set_hue(e),
                  t.col[2].rotate(360 - n),
                  t.col[3].set_hue(e),
                  t.col[3].rotate(180)
                );
              };
            })(this),
          }),
          (t.monochromatic = t.mono),
          null == t[this._scheme])
        )
          throw "Unknown color scheme name: " + this._scheme;
        for (
          t[this._scheme](), i = [], n = o = 0, u = s - 1;
          0 <= u ? o <= u : o >= u;
          n = 0 <= u ? ++o : --o
        )
          for (r = a = 0; a <= 3; r = ++a)
            i[4 * n + r] = this.col[n].get_hex(this._web_safe, r);
        return i;
      }),
      (t.prototype.colorset = function () {
        var t, e;
        for (t = n(this.colors()), e = []; t.length > 0; )
          e.push(t.splice(0, 4));
        return e;
      }),
      (t.prototype.from_hue = function (t) {
        if (null == t) throw "from_hue needs an argument";
        return this.col[0].set_hue(t), this;
      }),
      (t.prototype.rgb2ryb = function () {
        var t, n, r, o, a, u, s, h, l;
        return (
          (s = 1 <= arguments.length ? e.call(arguments, 0) : []),
          null != s[0] && i(s[0]) && (s = s[0]),
          (u = s[0]),
          (n = s[1]),
          (t = s[2]),
          (h = Math.min(u, n, t)),
          (u -= h),
          (n -= h),
          (t -= h),
          (o = Math.max(u, n, t)),
          (l = Math.min(u, n)),
          (u -= l),
          (n -= l),
          t > 0 && n > 0 && ((t /= 2), (n /= 2)),
          (l += n),
          (t += n),
          (a = Math.max(u, l, t)),
          a > 0 && ((r = o / a), (u *= r), (l *= r), (t *= r)),
          (u += h),
          (l += h),
          (t += h),
          [Math.floor(u), Math.floor(l), Math.floor(t)]
        );
      }),
      (t.prototype.rgb2hsv = function () {
        var t, n, r, o, a, u, s, h, l, c;
        return (
          (h = 1 <= arguments.length ? e.call(arguments, 0) : []),
          null != h[0] && i(h[0]) && (h = h[0]),
          (s = h[0]),
          (r = h[1]),
          (t = h[2]),
          (s /= 255),
          (r /= 255),
          (t /= 255),
          (u = Math.min.apply(Math, [s, r, t])),
          (a = Math.max.apply(Math, [s, r, t])),
          (n = a - u),
          (c = a),
          n > 0
            ? ((l = n / a),
              (o =
                s === a
                  ? (r - t) / n
                  : r === a
                  ? 2 + (t - s) / n
                  : 4 + (s - r) / n),
              (o *= 60),
              (o %= 360),
              [o, l, c])
            : [0, 0, c]
        );
      }),
      (t.prototype.rgbToHsv = function () {
        var t, n, r, o, a, u, s, h, l, c;
        if (
          ((h = 1 <= arguments.length ? e.call(arguments, 0) : []),
          null != h[0] && i(h[0]) && (h = h[0]),
          (s = h[0]),
          (r = h[1]),
          (t = h[2]),
          (s /= 255),
          (r /= 255),
          (t /= 255),
          (a = Math.max(s, r, t)),
          (u = Math.min(s, r, t)),
          (o = void 0),
          (l = void 0),
          (c = a),
          (n = a - u),
          (l = 0 === a ? 0 : n / a),
          a === u)
        )
          o = 0;
        else {
          switch (a) {
            case s:
              o = (r - t) / n + (r < t ? 6 : 0);
              break;
            case r:
              o = (t - s) / n + 2;
              break;
            case t:
              o = (s - r) / n + 4;
          }
          o /= 6;
        }
        return [o, l, c];
      }),
      (t.prototype.from_hex = function (t) {
        var e, n, r, o, a, i, u, s, h, l, c;
        if (null == t) throw "from_hex needs an argument";
        if (!/^([0-9A-F]{2}){3}$/im.test(t))
          throw "from_hex(" + t + ") - argument must be in the form of RRGGBB";
        return (
          (h = /(..)(..)(..)/.exec(t).slice(1, 4)),
          (u = (function () {
            var t, e, n;
            for (n = [], e = 0, t = h.length; e < t; e++)
              (a = h[e]), n.push(parseInt(a, 16));
            return n;
          })()),
          (i = u[0]),
          (n = u[1]),
          (e = u[2]),
          (s = this.rgb2ryb([i, n, e])),
          (i = s[0]),
          (n = s[1]),
          (e = s[2]),
          (o = this.rgbToHsv(i, n, e)),
          o[0],
          0,
          1e3,
          null,
          null,
          (r = null),
          (l = null),
          (c = null),
          (r = o[0]),
          (l = o[1]),
          (c = o[2]),
          this.from_hue(360 * r),
          this._set_variant_preset([l, c, l, 0.7 * c, 0.25 * l, 1, 0.5 * l, 1]),
          this
        );
      }),
      (t.prototype.add_complement = function (t) {
        if (null == t) throw "add_complement needs an argument";
        return (this._add_complement = t), this;
      }),
      (t.prototype.web_safe = function (t) {
        if (null == t) throw "web_safe needs an argument";
        return (this._web_safe = t), this;
      }),
      (t.prototype.distance = function (t) {
        if (null == t) throw "distance needs an argument";
        if (t < 0) throw "distance(" + t + ") - argument must be >= 0";
        if (t > 1) throw "distance(" + t + ") - argument must be <= 1";
        return (this._distance = t), this;
      }),
      (t.prototype.scheme = function (e) {
        if (null == e) return this._scheme;
        if (null == t.SCHEMES[e]) throw "'" + e + "' isn't a valid scheme name";
        return (this._scheme = e), this;
      }),
      (t.prototype.variation = function (e) {
        if (null == e) throw "variation needs an argument";
        if (null == t.PRESETS[e]) throw "'$v' isn't a valid variation name";
        return this._set_variant_preset(t.PRESETS[e]), this;
      }),
      (t.prototype._set_variant_preset = function (t) {
        var e, n, r;
        for (r = [], e = n = 0; n <= 3; e = ++n)
          r.push(this.col[e].set_variant_preset(t));
        return r;
      }),
      (n = function (t) {
        var e, r, o;
        if (null == t || "object" != typeof t) return t;
        if (t instanceof Date) return new Date(t.getTime());
        if (t instanceof RegExp)
          return (
            (e = ""),
            null != t.global && (e += "g"),
            null != t.ignoreCase && (e += "i"),
            null != t.multiline && (e += "m"),
            null != t.sticky && (e += "y"),
            new RegExp(t.source, e)
          );
        o = new t.constructor();
        for (r in t) o[r] = n(t[r]);
        return o;
      }),
      (t.mutablecolor = (function () {
        function e(e) {
          if (null == e) throw "No hue specified";
          (this.saturation = []),
            (this.value = []),
            (this.base_red = 0),
            (this.base_green = 0),
            (this.base_blue = 0),
            (this.base_saturation = 0),
            (this.base_value = 0),
            this.set_hue(e),
            this.set_variant_preset(t.PRESETS.default);
        }
        return (
          (e.prototype.hue = 0),
          (e.prototype.saturation = []),
          (e.prototype.value = []),
          (e.prototype.base_red = 0),
          (e.prototype.base_green = 0),
          (e.prototype.base_saturation = 0),
          (e.prototype.base_value = 0),
          (e.prototype.get_hue = function () {
            return this.hue;
          }),
          (e.prototype.set_hue = function (e) {
            var n, r, o, a, i, u, s, h, l, c;
            (n = function (t, e, n) {
              return t + Math.round((e - t) * n);
            }),
              (this.hue = Math.round(e % 360)),
              (i = (this.hue % 15) + (this.hue - Math.floor(this.hue))),
              (c = i / 15),
              (u = this.hue - Math.floor(i)),
              (s = (u + 15) % 360),
              360 === u && (u = 0),
              360 === s && (s = 0),
              (o = t.COLOR_WHEEL[u]),
              (a = t.COLOR_WHEEL[s]),
              (h = { red: 0, green: 1, blue: 2, value: 3 });
            for (r in h) (l = h[r]), (this["base_" + r] = n(o[l], a[l], c));
            return (
              (this.base_saturation = n(100, 100, c) / 100),
              (this.base_value /= 100)
            );
          }),
          (e.prototype.rotate = function (t) {
            var e;
            return (e = (this.hue + t) % 360), this.set_hue(e);
          }),
          (e.prototype.get_saturation = function (t) {
            var e, n;
            return (
              (n = this.saturation[t]),
              (e = n < 0 ? -n * this.base_saturation : n),
              e > 1 && (e = 1),
              e < 0 && (e = 0),
              e
            );
          }),
          (e.prototype.get_value = function (t) {
            var e, n;
            return (
              (n = this.value[t]),
              (e = n < 0 ? -n * this.base_value : n),
              e > 1 && (e = 1),
              e < 0 && (e = 0),
              e
            );
          }),
          (e.prototype.set_variant = function (t, e, n) {
            return (this.saturation[t] = e), (this.value[t] = n);
          }),
          (e.prototype.set_variant_preset = function (t) {
            var e, n, r;
            for (r = [], e = n = 0; n <= 3; e = ++n)
              r.push(this.set_variant(e, t[2 * e], t[2 * e + 1]));
            return r;
          }),
          (e.prototype.get_hex = function (t, e) {
            var n, r, o, a, i, u, s, h, l, c, f, p, _, m, d, v;
            for (
              l = Math.max.apply(
                Math,
                function () {
                  var t, e, n, o;
                  for (
                    n = ["red", "green", "blue"], o = [], e = 0, t = n.length;
                    e < t;
                    e++
                  )
                    (r = n[e]), o.push(this["base_" + r]);
                  return o;
                }.call(this)
              ),
                Math.min.apply(
                  Math,
                  function () {
                    var t, e, n, o;
                    for (
                      n = ["red", "green", "blue"], o = [], e = 0, t = n.length;
                      e < t;
                      e++
                    )
                      (r = n[e]), o.push(this["base_" + r]);
                    return o;
                  }.call(this)
                ),
                v = 255 * (e < 0 ? this.base_value : this.get_value(e)),
                m = e < 0 ? this.base_saturation : this.get_saturation(e),
                i = l > 0 ? v / l : 0,
                p = [],
                f = ["red", "green", "blue"],
                h = 0,
                u = f.length;
              h < u;
              h++
            )
              (r = f[h]),
                (_ = Math.min.apply(Math, [
                  255,
                  Math.round(v - (v - this["base_" + r] * i) * m),
                ])),
                p.push(_);
            for (
              t &&
                (p = (function () {
                  var t, e, r;
                  for (r = [], e = 0, t = p.length; e < t; e++)
                    (n = p[e]), r.push(51 * Math.round(n / 51));
                  return r;
                })()),
                o = "",
                c = 0,
                s = p.length;
              c < s;
              c++
            )
              (a = p[c]),
                (d = a.toString(16)),
                d.length < 2 && (d = "0" + d),
                (o += d);
            return o;
          }),
          e
        );
      })()),
      t
    );
  })()),
    "undefined" != typeof module && null !== module && null != module.exports
      ? (module.exports = t)
      : "function" == typeof define && define.amd
      ? define([], function () {
          return t;
        })
      : (window.ColorScheme = t);
}).call(this);

// Create a new instance of ColorScheme
const scheme = new ColorScheme();

const buttons = document.querySelectorAll(".button");
const colorInput = document.getElementById("color");
const schemeInput = document.getElementById("scheme");

function readInput() {
  const input = colorInput.value.trim();
  const select = schemeInput.value;

  // Generate colors
  scheme.from_hex(input).scheme(select);

  // Get array of generated colors
  const colors = scheme.colors();

  // Display colors
  displayColors(colors);
}

function displayColors(colors) {
  const display = document.querySelectorAll(".colorContainer");

  // Clear contents of div
  display.forEach((container) => {
    container.innerHTML = "";
  });

  for (const color of colors) {
    // Create div
    const colorBox = document.createElement("div");

    // Set background color of div
    colorBox.style.backgroundColor = color;
    colorBox.innerHTML = color;

    // Make div visible
    colorBox.style.width = "500px";
    colorBox.style.height = "100px";
    colorBox.style.marginTop = "10px";

    // Center div and text
    colorBox.style.display = "flex";
    colorBox.style.justifySelf = "center";
    colorBox.style.justifyContent = "center";
    colorBox.style.alignItems = "center";

    // Loop through each container and append colorBox to it
    display.forEach((container) => {
      container.appendChild(colorBox);
    });
  }
}

/*
for (let button of buttons) {
  button.addEventListener("click", readInput);
}
*/
