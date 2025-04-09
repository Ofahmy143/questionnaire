var hr = Object.defineProperty;
var mr = (y, a, i) => a in y ? hr(y, a, { enumerable: !0, configurable: !0, writable: !0, value: i }) : y[a] = i;
var W = (y, a, i) => mr(y, typeof a != "symbol" ? a + "" : a, i);
import Pe, { useState as ee, useCallback as we } from "react";
var z = { exports: {} }, q = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function gr() {
  if (Se) return q;
  Se = 1;
  var y = Pe, a = Symbol.for("react.element"), i = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, d = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(b, v, x) {
    var l, E = {}, T = null, F = null;
    x !== void 0 && (T = "" + x), v.key !== void 0 && (T = "" + v.key), v.ref !== void 0 && (F = v.ref);
    for (l in v) c.call(v, l) && !p.hasOwnProperty(l) && (E[l] = v[l]);
    if (b && b.defaultProps) for (l in v = b.defaultProps, v) E[l] === void 0 && (E[l] = v[l]);
    return { $$typeof: a, type: b, key: T, ref: F, props: E, _owner: d.current };
  }
  return q.Fragment = i, q.jsx = h, q.jsxs = h, q;
}
var N = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function br() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && function() {
    var y = Pe, a = Symbol.for("react.element"), i = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), b = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), O = Symbol.iterator, Ae = "@@iterator";
    function De(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = O && e[O] || e[Ae];
      return typeof r == "function" ? r : null;
    }
    var A = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Ie("error", e, t);
      }
    }
    function Ie(e, r, t) {
      {
        var n = A.ReactDebugCurrentFrame, u = n.getStackAddendum();
        u !== "" && (r += "%s", t = t.concat([u]));
        var f = t.map(function(s) {
          return String(s);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var Fe = !1, Ye = !1, $e = !1, We = !1, qe = !1, re;
    re = Symbol.for("react.module.reference");
    function Ne(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === c || e === p || qe || e === d || e === x || e === l || We || e === F || Fe || Ye || $e || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === E || e.$$typeof === h || e.$$typeof === b || e.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === re || e.getModuleId !== void 0));
    }
    function Le(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var u = r.displayName || r.name || "";
      return u !== "" ? t + "(" + u + ")" : t;
    }
    function te(e) {
      return e.displayName || "Context";
    }
    function j(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case c:
          return "Fragment";
        case i:
          return "Portal";
        case p:
          return "Profiler";
        case d:
          return "StrictMode";
        case x:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            var r = e;
            return te(r) + ".Consumer";
          case h:
            var t = e;
            return te(t._context) + ".Provider";
          case v:
            return Le(e, e.render, "ForwardRef");
          case E:
            var n = e.displayName || null;
            return n !== null ? n : j(e.type) || "Memo";
          case T: {
            var u = e, f = u._payload, s = u._init;
            try {
              return j(s(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, Y = 0, ne, ae, ie, oe, se, ue, ce;
    function le() {
    }
    le.__reactDisabledLog = !0;
    function Ue() {
      {
        if (Y === 0) {
          ne = console.log, ae = console.info, ie = console.warn, oe = console.error, se = console.group, ue = console.groupCollapsed, ce = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: le,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Y++;
      }
    }
    function Ve() {
      {
        if (Y--, Y === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: ne
            }),
            info: P({}, e, {
              value: ae
            }),
            warn: P({}, e, {
              value: ie
            }),
            error: P({}, e, {
              value: oe
            }),
            group: P({}, e, {
              value: se
            }),
            groupCollapsed: P({}, e, {
              value: ue
            }),
            groupEnd: P({}, e, {
              value: ce
            })
          });
        }
        Y < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var B = A.ReactCurrentDispatcher, Q;
    function L(e, r, t) {
      {
        if (Q === void 0)
          try {
            throw Error();
          } catch (u) {
            var n = u.stack.trim().match(/\n( *(at )?)/);
            Q = n && n[1] || "";
          }
        return `
` + Q + e;
      }
    }
    var J = !1, U;
    {
      var Me = typeof WeakMap == "function" ? WeakMap : Map;
      U = new Me();
    }
    function fe(e, r) {
      if (!e || J)
        return "";
      {
        var t = U.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      J = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = B.current, B.current = null, Ue();
      try {
        if (r) {
          var s = function() {
            throw Error();
          };
          if (Object.defineProperty(s.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(s, []);
            } catch (C) {
              n = C;
            }
            Reflect.construct(e, [], s);
          } else {
            try {
              s.call();
            } catch (C) {
              n = C;
            }
            e.call(s.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (C) {
            n = C;
          }
          e();
        }
      } catch (C) {
        if (C && n && typeof C.stack == "string") {
          for (var o = C.stack.split(`
`), _ = n.stack.split(`
`), m = o.length - 1, g = _.length - 1; m >= 1 && g >= 0 && o[m] !== _[g]; )
            g--;
          for (; m >= 1 && g >= 0; m--, g--)
            if (o[m] !== _[g]) {
              if (m !== 1 || g !== 1)
                do
                  if (m--, g--, g < 0 || o[m] !== _[g]) {
                    var w = `
` + o[m].replace(" at new ", " at ");
                    return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, w), w;
                  }
                while (m >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        J = !1, B.current = f, Ve(), Error.prepareStackTrace = u;
      }
      var I = e ? e.displayName || e.name : "", k = I ? L(I) : "";
      return typeof e == "function" && U.set(e, k), k;
    }
    function ze(e, r, t) {
      return fe(e, !1);
    }
    function Be(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function V(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fe(e, Be(e));
      if (typeof e == "string")
        return L(e);
      switch (e) {
        case x:
          return L("Suspense");
        case l:
          return L("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            return ze(e.render);
          case E:
            return V(e.type, r, t);
          case T: {
            var n = e, u = n._payload, f = n._init;
            try {
              return V(f(u), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var $ = Object.prototype.hasOwnProperty, de = {}, ve = A.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        ve.setExtraStackFrame(t);
      } else
        ve.setExtraStackFrame(null);
    }
    function Qe(e, r, t, n, u) {
      {
        var f = Function.call.bind($);
        for (var s in e)
          if (f(e, s)) {
            var o = void 0;
            try {
              if (typeof e[s] != "function") {
                var _ = Error((n || "React class") + ": " + t + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              o = e[s](r, s, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (m) {
              o = m;
            }
            o && !(o instanceof Error) && (M(u), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, s, typeof o), M(null)), o instanceof Error && !(o.message in de) && (de[o.message] = !0, M(u), R("Failed %s type: %s", t, o.message), M(null));
          }
      }
    }
    var Je = Array.isArray;
    function K(e) {
      return Je(e);
    }
    function Ke(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ge(e) {
      try {
        return pe(e), !1;
      } catch {
        return !0;
      }
    }
    function pe(e) {
      return "" + e;
    }
    function he(e) {
      if (Ge(e))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(e)), pe(e);
    }
    var me = A.ReactCurrentOwner, Xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ge, be;
    function He(e) {
      if ($.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if ($.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function er(e, r) {
      typeof e.ref == "string" && me.current;
    }
    function rr(e, r) {
      {
        var t = function() {
          ge || (ge = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function tr(e, r) {
      {
        var t = function() {
          be || (be = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var nr = function(e, r, t, n, u, f, s) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: s,
        // Record the component responsible for creating this element.
        _owner: f
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function ar(e, r, t, n, u) {
      {
        var f, s = {}, o = null, _ = null;
        t !== void 0 && (he(t), o = "" + t), Ze(r) && (he(r.key), o = "" + r.key), He(r) && (_ = r.ref, er(r, u));
        for (f in r)
          $.call(r, f) && !Xe.hasOwnProperty(f) && (s[f] = r[f]);
        if (e && e.defaultProps) {
          var m = e.defaultProps;
          for (f in m)
            s[f] === void 0 && (s[f] = m[f]);
        }
        if (o || _) {
          var g = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && rr(s, g), _ && tr(s, g);
        }
        return nr(e, o, _, u, n, me.current, s);
      }
    }
    var G = A.ReactCurrentOwner, Ee = A.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(t);
      } else
        Ee.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function H(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function ye() {
      {
        if (G.current) {
          var e = j(G.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ir(e) {
      return "";
    }
    var Re = {};
    function or(e) {
      {
        var r = ye();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function _e(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = or(r);
        if (Re[t])
          return;
        Re[t] = !0;
        var n = "";
        e && e._owner && e._owner !== G.current && (n = " It was passed a child from " + j(e._owner.type) + "."), D(e), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), D(null);
      }
    }
    function xe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (K(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            H(n) && _e(n, r);
          }
        else if (H(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = De(e);
          if (typeof u == "function" && u !== e.entries)
            for (var f = u.call(e), s; !(s = f.next()).done; )
              H(s.value) && _e(s.value, r);
        }
      }
    }
    function sr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === E))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = j(r);
          Qe(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var u = j(r);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ur(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            D(e), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), R("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    var Ce = {};
    function Te(e, r, t, n, u, f) {
      {
        var s = Ne(e);
        if (!s) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = ir();
          _ ? o += _ : o += ye();
          var m;
          e === null ? m = "null" : K(e) ? m = "array" : e !== void 0 && e.$$typeof === a ? (m = "<" + (j(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : m = typeof e, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", m, o);
        }
        var g = ar(e, r, t, u, f);
        if (g == null)
          return g;
        if (s) {
          var w = r.children;
          if (w !== void 0)
            if (n)
              if (K(w)) {
                for (var I = 0; I < w.length; I++)
                  xe(w[I], e);
                Object.freeze && Object.freeze(w);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xe(w, e);
        }
        if ($.call(r, "key")) {
          var k = j(e), C = Object.keys(r).filter(function(pr) {
            return pr !== "key";
          }), Z = C.length > 0 ? "{key: someKey, " + C.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ce[k + Z]) {
            var vr = C.length > 0 ? "{" + C.join(": ..., ") + ": ...}" : "{}";
            R(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Z, k, vr, k), Ce[k + Z] = !0;
          }
        }
        return e === c ? ur(g) : sr(g), g;
      }
    }
    function cr(e, r, t) {
      return Te(e, r, t, !0);
    }
    function lr(e, r, t) {
      return Te(e, r, t, !1);
    }
    var fr = lr, dr = cr;
    N.Fragment = c, N.jsx = fr, N.jsxs = dr;
  }()), N;
}
var je;
function Er() {
  return je || (je = 1, process.env.NODE_ENV === "production" ? z.exports = gr() : z.exports = br()), z.exports;
}
var S = Er();
class ke {
  constructor(a) {
    W(this, "config");
    this.config = a;
  }
  getQuestions() {
    return this.config.questions;
  }
  calculateResults(a) {
    const i = a.filter((h) => h.value).length, c = a.filter((h) => !h.value).length, d = i / a.length * 100, p = this.determineOutcome(a);
    return {
      score: d,
      totalYes: i,
      totalNo: c,
      outcome: p
    };
  }
  determineOutcome(a) {
    for (const i of this.config.rules)
      if (i.type === "threshold") {
        const { minYes: c = 0, maxYes: d = 1 / 0 } = i, p = a.filter((h) => h.value).length;
        if (p >= c && p <= d)
          return i.outcome;
      } else if (i.type === "conditional" && i.condition(a))
        return i.outcome;
    return "No matching outcome found";
  }
  async processResults(a) {
    const i = this.calculateResults(a);
    return this.config.onComplete && await this.config.onComplete(i), i;
  }
}
const yr = (y) => {
  const [a, i] = ee([]), [c, d] = ee(null), [p, h] = ee(!1), b = new ke(y), v = we((l, E) => {
    i((T) => T.findIndex((O) => O.questionId === l) !== -1 ? T.map(
      (O) => O.questionId === l ? { ...O, value: E } : O
    ) : [...T, { questionId: l, value: E }]);
  }, []), x = we(async () => {
    h(!0);
    try {
      const l = await b.processResults(a);
      d(l);
    } finally {
      h(!1);
    }
  }, [a, b]);
  return {
    answers: a,
    results: c,
    isSubmitting: p,
    handleAnswer: v,
    submitQuiz: x
  };
}, xr = ({
  config: y,
  className: a,
  questionClassName: i,
  buttonClassName: c
}) => {
  const { answers: d, results: p, isSubmitting: h, handleAnswer: b, submitQuiz: v } = yr(y), x = (l) => {
    const E = d.find((T) => T.questionId === l.id);
    return /* @__PURE__ */ S.jsxs("div", { className: i, children: [
      /* @__PURE__ */ S.jsx("p", { children: l.text }),
      /* @__PURE__ */ S.jsxs("div", { children: [
        /* @__PURE__ */ S.jsx(
          "button",
          {
            onClick: () => b(l.id, !0),
            className: `${c} ${(E == null ? void 0 : E.value) === !0 ? "active" : ""}`,
            children: "Yes"
          }
        ),
        /* @__PURE__ */ S.jsx(
          "button",
          {
            onClick: () => b(l.id, !1),
            className: `${c} ${(E == null ? void 0 : E.value) === !1 ? "active" : ""}`,
            children: "No"
          }
        )
      ] })
    ] }, l.id);
  };
  return /* @__PURE__ */ S.jsxs("div", { className: a, children: [
    y.questions.map(x),
    /* @__PURE__ */ S.jsx(
      "button",
      {
        onClick: v,
        disabled: h || d.length !== y.questions.length,
        children: "Submit"
      }
    ),
    p && /* @__PURE__ */ S.jsxs("div", { children: [
      /* @__PURE__ */ S.jsx("h3", { children: "Results" }),
      /* @__PURE__ */ S.jsxs("p", { children: [
        "Score: ",
        p.score,
        "%"
      ] }),
      /* @__PURE__ */ S.jsxs("p", { children: [
        "Outcome: ",
        p.outcome
      ] })
    ] })
  ] });
};
class Cr {
  constructor(a, i) {
    W(this, "engine");
    W(this, "container");
    W(this, "answers");
    this.engine = new ke(a), this.container = i, this.answers = [], this.render();
  }
  handleAnswer(a, i) {
    const c = this.answers.findIndex(
      (d) => d.questionId === a
    );
    c !== -1 ? this.answers[c].value = i : this.answers.push({ questionId: a, value: i }), this.updateUI();
  }
  async submitQuiz() {
    const a = await this.engine.processResults(this.answers);
    this.renderResults(a);
  }
  render() {
    this.engine.getQuestions().forEach((c) => {
      const d = document.createElement("div");
      d.className = "question";
      const p = document.createElement("p");
      p.textContent = c.text;
      const h = document.createElement("div");
      h.className = "button-group";
      const b = document.createElement("button");
      b.textContent = "Yes", b.onclick = () => this.handleAnswer(c.id, !0);
      const v = document.createElement("button");
      v.textContent = "No", v.onclick = () => this.handleAnswer(c.id, !1), h.appendChild(b), h.appendChild(v), d.appendChild(p), d.appendChild(h), this.container.appendChild(d);
    });
    const i = document.createElement("button");
    i.textContent = "Submit", i.onclick = () => this.submitQuiz(), this.container.appendChild(i);
  }
  updateUI() {
    const a = this.engine.getQuestions();
    this.container.querySelectorAll("button").forEach((c) => {
      var v;
      const d = c.closest(".question");
      if (!d) return;
      const p = (v = a.find(
        (x) => {
          var l;
          return x.text === ((l = d.querySelector("p")) == null ? void 0 : l.textContent);
        }
      )) == null ? void 0 : v.id;
      if (!p) return;
      const h = this.answers.find((x) => x.questionId === p);
      if (!h) return;
      const b = c.textContent === "Yes";
      c.classList.toggle("active", b === h.value);
    });
  }
  renderResults(a) {
    const i = document.createElement("div");
    i.className = "results";
    const c = document.createElement("p");
    c.textContent = `Score: ${a.score}%`;
    const d = document.createElement("p");
    d.textContent = `Outcome: ${a.outcome}`, i.appendChild(c), i.appendChild(d);
    const p = this.container.querySelector(".results");
    p && p.remove(), this.container.appendChild(i);
  }
}
export {
  xr as QuizComponent,
  ke as QuizEngine,
  Cr as QuizHandler,
  yr as useQuiz
};
