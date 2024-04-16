function Op(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const o in r)
        if (o !== 'default' && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === 'childList')
        for (const l of i.addedNodes)
          l.tagName === 'LINK' && l.rel === 'modulepreload' && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : o.crossOrigin === 'anonymous'
        ? (i.credentials = 'omit')
        : (i.credentials = 'same-origin'),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function Lp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var pc = { exports: {} },
  si = {},
  hc = { exports: {} },
  z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wr = Symbol.for('react.element'),
  Ap = Symbol.for('react.portal'),
  Mp = Symbol.for('react.fragment'),
  Ip = Symbol.for('react.strict_mode'),
  Dp = Symbol.for('react.profiler'),
  Fp = Symbol.for('react.provider'),
  zp = Symbol.for('react.context'),
  Up = Symbol.for('react.forward_ref'),
  jp = Symbol.for('react.suspense'),
  Bp = Symbol.for('react.memo'),
  $p = Symbol.for('react.lazy'),
  Mu = Symbol.iterator;
function Hp(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Mu && e[Mu]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var mc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  yc = Object.assign,
  gc = {};
function Gn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = gc),
    (this.updater = n || mc);
}
Gn.prototype.isReactComponent = {};
Gn.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
Gn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function vc() {}
vc.prototype = Gn.prototype;
function ys(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = gc),
    (this.updater = n || mc);
}
var gs = (ys.prototype = new vc());
gs.constructor = ys;
yc(gs, Gn.prototype);
gs.isPureReactComponent = !0;
var Iu = Array.isArray,
  wc = Object.prototype.hasOwnProperty,
  vs = { current: null },
  Sc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ec(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (i = '' + t.key),
    t))
      wc.call(t, r) && !Sc.hasOwnProperty(r) && (o[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) o.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    o.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) o[r] === void 0 && (o[r] = u[r]);
  return {
    $$typeof: Wr,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: vs.current,
  };
}
function Vp(e, t) {
  return {
    $$typeof: Wr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ws(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Wr;
}
function Wp(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Du = /\/+/g;
function Fi(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? Wp('' + e.key)
    : t.toString(36);
}
function go(e, t, n, r, o) {
  var i = typeof e;
  (i === 'undefined' || i === 'boolean') && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (i) {
      case 'string':
      case 'number':
        l = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case Wr:
          case Ap:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === '' ? '.' + Fi(l, 0) : r),
      Iu(o)
        ? ((n = ''),
          e != null && (n = e.replace(Du, '$&/') + '/'),
          go(o, t, n, '', function (a) {
            return a;
          }))
        : o != null &&
          (ws(o) &&
            (o = Vp(
              o,
              n +
                (!o.key || (l && l.key === o.key)
                  ? ''
                  : ('' + o.key).replace(Du, '$&/') + '/') +
                e,
            )),
          t.push(o)),
      1
    );
  if (((l = 0), (r = r === '' ? '.' : r + ':'), Iu(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + Fi(i, u);
      l += go(i, t, n, s, o);
    }
  else if (((s = Hp(e)), typeof s == 'function'))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + Fi(i, u++)), (l += go(i, t, n, s, o));
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.',
      ))
    );
  return l;
}
function br(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    go(e, r, '', '', function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function Qp(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ne = { current: null },
  vo = { transition: null },
  Kp = {
    ReactCurrentDispatcher: Ne,
    ReactCurrentBatchConfig: vo,
    ReactCurrentOwner: vs,
  };
z.Children = {
  map: br,
  forEach: function (e, t, n) {
    br(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      br(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      br(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ws(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.',
      );
    return e;
  },
};
z.Component = Gn;
z.Fragment = Mp;
z.Profiler = Dp;
z.PureComponent = ys;
z.StrictMode = Ip;
z.Suspense = jp;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kp;
z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.',
    );
  var r = yc({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = vs.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      wc.call(t, s) &&
        !Sc.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: Wr, type: e.type, key: o, ref: i, props: r, _owner: l };
};
z.createContext = function (e) {
  return (
    (e = {
      $$typeof: zp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Fp, _context: e }),
    (e.Consumer = e)
  );
};
z.createElement = Ec;
z.createFactory = function (e) {
  var t = Ec.bind(null, e);
  return (t.type = e), t;
};
z.createRef = function () {
  return { current: null };
};
z.forwardRef = function (e) {
  return { $$typeof: Up, render: e };
};
z.isValidElement = ws;
z.lazy = function (e) {
  return { $$typeof: $p, _payload: { _status: -1, _result: e }, _init: Qp };
};
z.memo = function (e, t) {
  return { $$typeof: Bp, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function (e) {
  var t = vo.transition;
  vo.transition = {};
  try {
    e();
  } finally {
    vo.transition = t;
  }
};
z.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
z.useCallback = function (e, t) {
  return Ne.current.useCallback(e, t);
};
z.useContext = function (e) {
  return Ne.current.useContext(e);
};
z.useDebugValue = function () {};
z.useDeferredValue = function (e) {
  return Ne.current.useDeferredValue(e);
};
z.useEffect = function (e, t) {
  return Ne.current.useEffect(e, t);
};
z.useId = function () {
  return Ne.current.useId();
};
z.useImperativeHandle = function (e, t, n) {
  return Ne.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function (e, t) {
  return Ne.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function (e, t) {
  return Ne.current.useLayoutEffect(e, t);
};
z.useMemo = function (e, t) {
  return Ne.current.useMemo(e, t);
};
z.useReducer = function (e, t, n) {
  return Ne.current.useReducer(e, t, n);
};
z.useRef = function (e) {
  return Ne.current.useRef(e);
};
z.useState = function (e) {
  return Ne.current.useState(e);
};
z.useSyncExternalStore = function (e, t, n) {
  return Ne.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function () {
  return Ne.current.useTransition();
};
z.version = '18.2.0';
hc.exports = z;
var T = hc.exports;
const Qe = Lp(T),
  ml = Op({ __proto__: null, default: Qe }, [T]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gp = T,
  Yp = Symbol.for('react.element'),
  Xp = Symbol.for('react.fragment'),
  Jp = Object.prototype.hasOwnProperty,
  qp = Gp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Zp = { key: !0, ref: !0, __self: !0, __source: !0 };
function xc(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) Jp.call(t, r) && !Zp.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Yp,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: qp.current,
  };
}
si.Fragment = Xp;
si.jsx = xc;
si.jsxs = xc;
pc.exports = si;
var kc = pc.exports;
const L = kc.jsx,
  J = kc.jsxs;
var Cc = { exports: {} },
  $e = {},
  Nc = { exports: {} },
  Pc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(_, I) {
    var D = _.length;
    _.push(I);
    e: for (; 0 < D; ) {
      var B = (D - 1) >>> 1,
        W = _[B];
      if (0 < o(W, I)) (_[B] = I), (_[D] = W), (D = B);
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var I = _[0],
      D = _.pop();
    if (D !== I) {
      _[0] = D;
      e: for (var B = 0, W = _.length, _e = W >>> 1; B < _e; ) {
        var Fe = 2 * (B + 1) - 1,
          mt = _[Fe],
          re = Fe + 1,
          Ee = _[re];
        if (0 > o(mt, D))
          re < W && 0 > o(Ee, mt)
            ? ((_[B] = Ee), (_[re] = D), (B = re))
            : ((_[B] = mt), (_[Fe] = D), (B = Fe));
        else if (re < W && 0 > o(Ee, D)) (_[B] = Ee), (_[re] = D), (B = re);
        else break e;
      }
    }
    return I;
  }
  function o(_, I) {
    var D = _.sortIndex - I.sortIndex;
    return D !== 0 ? D : _.id - I.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      u = l.now();
    e.unstable_now = function () {
      return l.now() - u;
    };
  }
  var s = [],
    a = [],
    f = 1,
    c = null,
    d = 3,
    v = !1,
    m = !1,
    g = !1,
    S = typeof setTimeout == 'function' ? setTimeout : null,
    h = typeof clearTimeout == 'function' ? clearTimeout : null,
    p = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(_) {
    for (var I = n(a); I !== null; ) {
      if (I.callback === null) r(a);
      else if (I.startTime <= _)
        r(a), (I.sortIndex = I.expirationTime), t(s, I);
      else break;
      I = n(a);
    }
  }
  function w(_) {
    if (((g = !1), y(_), !m))
      if (n(s) !== null) (m = !0), qe(x);
      else {
        var I = n(a);
        I !== null && De(w, I.startTime - _);
      }
  }
  function x(_, I) {
    (m = !1), g && ((g = !1), h(C), (C = -1)), (v = !0);
    var D = d;
    try {
      for (
        y(I), c = n(s);
        c !== null && (!(c.expirationTime > I) || (_ && !F()));

      ) {
        var B = c.callback;
        if (typeof B == 'function') {
          (c.callback = null), (d = c.priorityLevel);
          var W = B(c.expirationTime <= I);
          (I = e.unstable_now()),
            typeof W == 'function' ? (c.callback = W) : c === n(s) && r(s),
            y(I);
        } else r(s);
        c = n(s);
      }
      if (c !== null) var _e = !0;
      else {
        var Fe = n(a);
        Fe !== null && De(w, Fe.startTime - I), (_e = !1);
      }
      return _e;
    } finally {
      (c = null), (d = D), (v = !1);
    }
  }
  var P = !1,
    k = null,
    C = -1,
    A = 5,
    R = -1;
  function F() {
    return !(e.unstable_now() - R < A);
  }
  function X() {
    if (k !== null) {
      var _ = e.unstable_now();
      R = _;
      var I = !0;
      try {
        I = k(!0, _);
      } finally {
        I ? le() : ((P = !1), (k = null));
      }
    } else P = !1;
  }
  var le;
  if (typeof p == 'function')
    le = function () {
      p(X);
    };
  else if (typeof MessageChannel < 'u') {
    var se = new MessageChannel(),
      Ie = se.port2;
    (se.port1.onmessage = X),
      (le = function () {
        Ie.postMessage(null);
      });
  } else
    le = function () {
      S(X, 0);
    };
  function qe(_) {
    (k = _), P || ((P = !0), le());
  }
  function De(_, I) {
    C = S(function () {
      _(e.unstable_now());
    }, I);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (_) {
      _.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      m || v || ((m = !0), qe(x));
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
          )
        : (A = 0 < _ ? Math.floor(1e3 / _) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (_) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = d;
      }
      var D = d;
      d = I;
      try {
        return _();
      } finally {
        d = D;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, I) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var D = d;
      d = _;
      try {
        return I();
      } finally {
        d = D;
      }
    }),
    (e.unstable_scheduleCallback = function (_, I, D) {
      var B = e.unstable_now();
      switch (
        (typeof D == 'object' && D !== null
          ? ((D = D.delay), (D = typeof D == 'number' && 0 < D ? B + D : B))
          : (D = B),
        _)
      ) {
        case 1:
          var W = -1;
          break;
        case 2:
          W = 250;
          break;
        case 5:
          W = 1073741823;
          break;
        case 4:
          W = 1e4;
          break;
        default:
          W = 5e3;
      }
      return (
        (W = D + W),
        (_ = {
          id: f++,
          callback: I,
          priorityLevel: _,
          startTime: D,
          expirationTime: W,
          sortIndex: -1,
        }),
        D > B
          ? ((_.sortIndex = D),
            t(a, _),
            n(s) === null &&
              _ === n(a) &&
              (g ? (h(C), (C = -1)) : (g = !0), De(w, D - B)))
          : ((_.sortIndex = W), t(s, _), m || v || ((m = !0), qe(x))),
        _
      );
    }),
    (e.unstable_shouldYield = F),
    (e.unstable_wrapCallback = function (_) {
      var I = d;
      return function () {
        var D = d;
        d = I;
        try {
          return _.apply(this, arguments);
        } finally {
          d = D;
        }
      };
    });
})(Pc);
Nc.exports = Pc;
var bp = Nc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _c = T,
  Be = bp;
function N(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var Rc = new Set(),
  Er = {};
function mn(e, t) {
  jn(e, t), jn(e + 'Capture', t);
}
function jn(e, t) {
  for (Er[e] = t, e = 0; e < t.length; e++) Rc.add(t[e]);
}
var Ct = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  yl = Object.prototype.hasOwnProperty,
  eh =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Fu = {},
  zu = {};
function th(e) {
  return yl.call(zu, e)
    ? !0
    : yl.call(Fu, e)
    ? !1
    : eh.test(e)
    ? (zu[e] = !0)
    : ((Fu[e] = !0), !1);
}
function nh(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function rh(e, t, n, r) {
  if (t === null || typeof t > 'u' || nh(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Pe(e, t, n, r, o, i, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l);
}
var ye = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    ye[e] = new Pe(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  ye[t] = new Pe(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  ye[e] = new Pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  ye[e] = new Pe(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    ye[e] = new Pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  ye[e] = new Pe(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  ye[e] = new Pe(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  ye[e] = new Pe(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  ye[e] = new Pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ss = /[\-:]([a-z])/g;
function Es(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Ss, Es);
    ye[t] = new Pe(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Ss, Es);
    ye[t] = new Pe(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Ss, Es);
  ye[t] = new Pe(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  ye[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ye.xlinkHref = new Pe(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1,
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  ye[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function xs(e, t, n, r) {
  var o = ye.hasOwnProperty(t) ? ye[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (rh(t, n, o, r) && (n = null),
    r || o === null
      ? th(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Rt = _c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  eo = Symbol.for('react.element'),
  Sn = Symbol.for('react.portal'),
  En = Symbol.for('react.fragment'),
  ks = Symbol.for('react.strict_mode'),
  gl = Symbol.for('react.profiler'),
  Tc = Symbol.for('react.provider'),
  Oc = Symbol.for('react.context'),
  Cs = Symbol.for('react.forward_ref'),
  vl = Symbol.for('react.suspense'),
  wl = Symbol.for('react.suspense_list'),
  Ns = Symbol.for('react.memo'),
  Lt = Symbol.for('react.lazy'),
  Lc = Symbol.for('react.offscreen'),
  Uu = Symbol.iterator;
function Zn(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Uu && e[Uu]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var b = Object.assign,
  zi;
function sr(e) {
  if (zi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      zi = (t && t[1]) || '';
    }
  return (
    `
` +
    zi +
    e
  );
}
var Ui = !1;
function ji(e, t) {
  if (!e || Ui) return '';
  Ui = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == 'string') {
      for (
        var o = a.stack.split(`
`),
          i = r.stack.split(`
`),
          l = o.length - 1,
          u = i.length - 1;
        1 <= l && 0 <= u && o[l] !== i[u];

      )
        u--;
      for (; 1 <= l && 0 <= u; l--, u--)
        if (o[l] !== i[u]) {
          if (l !== 1 || u !== 1)
            do
              if ((l--, u--, 0 > u || o[l] !== i[u])) {
                var s =
                  `
` + o[l].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    s.includes('<anonymous>') &&
                    (s = s.replace('<anonymous>', e.displayName)),
                  s
                );
              }
            while (1 <= l && 0 <= u);
          break;
        }
    }
  } finally {
    (Ui = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? sr(e) : '';
}
function oh(e) {
  switch (e.tag) {
    case 5:
      return sr(e.type);
    case 16:
      return sr('Lazy');
    case 13:
      return sr('Suspense');
    case 19:
      return sr('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = ji(e.type, !1)), e;
    case 11:
      return (e = ji(e.type.render, !1)), e;
    case 1:
      return (e = ji(e.type, !0)), e;
    default:
      return '';
  }
}
function Sl(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case En:
      return 'Fragment';
    case Sn:
      return 'Portal';
    case gl:
      return 'Profiler';
    case ks:
      return 'StrictMode';
    case vl:
      return 'Suspense';
    case wl:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Oc:
        return (e.displayName || 'Context') + '.Consumer';
      case Tc:
        return (e._context.displayName || 'Context') + '.Provider';
      case Cs:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case Ns:
        return (
          (t = e.displayName || null), t !== null ? t : Sl(e.type) || 'Memo'
        );
      case Lt:
        (t = e._payload), (e = e._init);
        try {
          return Sl(e(t));
        } catch {}
    }
  return null;
}
function ih(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return Sl(t);
    case 8:
      return t === ks ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function Kt(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function Ac(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function lh(e) {
  var t = Ac(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (l) {
          (r = '' + l), i.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = '' + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function to(e) {
  e._valueTracker || (e._valueTracker = lh(e));
}
function Mc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = Ac(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Mo(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function El(e, t) {
  var n = t.checked;
  return b({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ju(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Kt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function Ic(e, t) {
  (t = t.checked), t != null && xs(e, 'checked', t, !1);
}
function xl(e, t) {
  Ic(e, t);
  var n = Kt(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? kl(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && kl(e, t.type, Kt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Bu(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function kl(e, t, n) {
  (t !== 'number' || Mo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var ur = Array.isArray;
function Mn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + Kt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Cl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return b({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function $u(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(N(92));
      if (ur(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: Kt(n) };
}
function Dc(e, t) {
  var n = Kt(t.value),
    r = Kt(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function Hu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Fc(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Nl(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Fc(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var no,
  zc = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        no = no || document.createElement('div'),
          no.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = no.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function xr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var fr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  sh = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(fr).forEach(function (e) {
  sh.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (fr[t] = fr[e]);
  });
});
function Uc(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (fr.hasOwnProperty(e) && fr[e])
    ? ('' + t).trim()
    : t + 'px';
}
function jc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = Uc(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var uh = b(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Pl(e, t) {
  if (t) {
    if (uh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(N(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(N(62));
  }
}
function _l(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var Rl = null;
function Ps(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Tl = null,
  In = null,
  Dn = null;
function Vu(e) {
  if ((e = Gr(e))) {
    if (typeof Tl != 'function') throw Error(N(280));
    var t = e.stateNode;
    t && ((t = di(t)), Tl(e.stateNode, e.type, t));
  }
}
function Bc(e) {
  In ? (Dn ? Dn.push(e) : (Dn = [e])) : (In = e);
}
function $c() {
  if (In) {
    var e = In,
      t = Dn;
    if (((Dn = In = null), Vu(e), t)) for (e = 0; e < t.length; e++) Vu(t[e]);
  }
}
function Hc(e, t) {
  return e(t);
}
function Vc() {}
var Bi = !1;
function Wc(e, t, n) {
  if (Bi) return e(t, n);
  Bi = !0;
  try {
    return Hc(e, t, n);
  } finally {
    (Bi = !1), (In !== null || Dn !== null) && (Vc(), $c());
  }
}
function kr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = di(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(N(231, t, typeof n));
  return n;
}
var Ol = !1;
if (Ct)
  try {
    var bn = {};
    Object.defineProperty(bn, 'passive', {
      get: function () {
        Ol = !0;
      },
    }),
      window.addEventListener('test', bn, bn),
      window.removeEventListener('test', bn, bn);
  } catch {
    Ol = !1;
  }
function ah(e, t, n, r, o, i, l, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (f) {
    this.onError(f);
  }
}
var dr = !1,
  Io = null,
  Do = !1,
  Ll = null,
  ch = {
    onError: function (e) {
      (dr = !0), (Io = e);
    },
  };
function fh(e, t, n, r, o, i, l, u, s) {
  (dr = !1), (Io = null), ah.apply(ch, arguments);
}
function dh(e, t, n, r, o, i, l, u, s) {
  if ((fh.apply(this, arguments), dr)) {
    if (dr) {
      var a = Io;
      (dr = !1), (Io = null);
    } else throw Error(N(198));
    Do || ((Do = !0), (Ll = a));
  }
}
function yn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Qc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Wu(e) {
  if (yn(e) !== e) throw Error(N(188));
}
function ph(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = yn(e)), t === null)) throw Error(N(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Wu(o), e;
        if (i === r) return Wu(o), t;
        i = i.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var l = !1, u = o.child; u; ) {
        if (u === n) {
          (l = !0), (n = o), (r = i);
          break;
        }
        if (u === r) {
          (l = !0), (r = o), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!l) {
        for (u = i.child; u; ) {
          if (u === n) {
            (l = !0), (n = i), (r = o);
            break;
          }
          if (u === r) {
            (l = !0), (r = i), (n = o);
            break;
          }
          u = u.sibling;
        }
        if (!l) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function Kc(e) {
  return (e = ph(e)), e !== null ? Gc(e) : null;
}
function Gc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Gc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Yc = Be.unstable_scheduleCallback,
  Qu = Be.unstable_cancelCallback,
  hh = Be.unstable_shouldYield,
  mh = Be.unstable_requestPaint,
  ne = Be.unstable_now,
  yh = Be.unstable_getCurrentPriorityLevel,
  _s = Be.unstable_ImmediatePriority,
  Xc = Be.unstable_UserBlockingPriority,
  Fo = Be.unstable_NormalPriority,
  gh = Be.unstable_LowPriority,
  Jc = Be.unstable_IdlePriority,
  ui = null,
  dt = null;
function vh(e) {
  if (dt && typeof dt.onCommitFiberRoot == 'function')
    try {
      dt.onCommitFiberRoot(ui, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ot = Math.clz32 ? Math.clz32 : Eh,
  wh = Math.log,
  Sh = Math.LN2;
function Eh(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((wh(e) / Sh) | 0)) | 0;
}
var ro = 64,
  oo = 4194304;
function ar(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function zo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var u = l & ~o;
    u !== 0 ? (r = ar(u)) : ((i &= l), i !== 0 && (r = ar(i)));
  } else (l = n & ~o), l !== 0 ? (r = ar(l)) : i !== 0 && (r = ar(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - ot(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function xh(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function kh(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var l = 31 - ot(i),
      u = 1 << l,
      s = o[l];
    s === -1
      ? (!(u & n) || u & r) && (o[l] = xh(u, t))
      : s <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function Al(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function qc() {
  var e = ro;
  return (ro <<= 1), !(ro & 4194240) && (ro = 64), e;
}
function $i(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Qr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ot(t)),
    (e[t] = n);
}
function Ch(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - ot(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Rs(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ot(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var H = 0;
function Zc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var bc,
  Ts,
  ef,
  tf,
  nf,
  Ml = !1,
  io = [],
  Ut = null,
  jt = null,
  Bt = null,
  Cr = new Map(),
  Nr = new Map(),
  Mt = [],
  Nh =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    );
function Ku(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Ut = null;
      break;
    case 'dragenter':
    case 'dragleave':
      jt = null;
      break;
    case 'mouseover':
    case 'mouseout':
      Bt = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Cr.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Nr.delete(t.pointerId);
  }
}
function er(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Gr(t)), t !== null && Ts(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Ph(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (Ut = er(Ut, e, t, n, r, o)), !0;
    case 'dragenter':
      return (jt = er(jt, e, t, n, r, o)), !0;
    case 'mouseover':
      return (Bt = er(Bt, e, t, n, r, o)), !0;
    case 'pointerover':
      var i = o.pointerId;
      return Cr.set(i, er(Cr.get(i) || null, e, t, n, r, o)), !0;
    case 'gotpointercapture':
      return (
        (i = o.pointerId), Nr.set(i, er(Nr.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function rf(e) {
  var t = tn(e.target);
  if (t !== null) {
    var n = yn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Qc(n)), t !== null)) {
          (e.blockedOn = t),
            nf(e.priority, function () {
              ef(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function wo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Il(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Rl = r), n.target.dispatchEvent(r), (Rl = null);
    } else return (t = Gr(n)), t !== null && Ts(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Gu(e, t, n) {
  wo(e) && n.delete(t);
}
function _h() {
  (Ml = !1),
    Ut !== null && wo(Ut) && (Ut = null),
    jt !== null && wo(jt) && (jt = null),
    Bt !== null && wo(Bt) && (Bt = null),
    Cr.forEach(Gu),
    Nr.forEach(Gu);
}
function tr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ml ||
      ((Ml = !0),
      Be.unstable_scheduleCallback(Be.unstable_NormalPriority, _h)));
}
function Pr(e) {
  function t(o) {
    return tr(o, e);
  }
  if (0 < io.length) {
    tr(io[0], e);
    for (var n = 1; n < io.length; n++) {
      var r = io[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Ut !== null && tr(Ut, e),
      jt !== null && tr(jt, e),
      Bt !== null && tr(Bt, e),
      Cr.forEach(t),
      Nr.forEach(t),
      n = 0;
    n < Mt.length;
    n++
  )
    (r = Mt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Mt.length && ((n = Mt[0]), n.blockedOn === null); )
    rf(n), n.blockedOn === null && Mt.shift();
}
var Fn = Rt.ReactCurrentBatchConfig,
  Uo = !0;
function Rh(e, t, n, r) {
  var o = H,
    i = Fn.transition;
  Fn.transition = null;
  try {
    (H = 1), Os(e, t, n, r);
  } finally {
    (H = o), (Fn.transition = i);
  }
}
function Th(e, t, n, r) {
  var o = H,
    i = Fn.transition;
  Fn.transition = null;
  try {
    (H = 4), Os(e, t, n, r);
  } finally {
    (H = o), (Fn.transition = i);
  }
}
function Os(e, t, n, r) {
  if (Uo) {
    var o = Il(e, t, n, r);
    if (o === null) qi(e, t, r, jo, n), Ku(e, r);
    else if (Ph(o, e, t, n, r)) r.stopPropagation();
    else if ((Ku(e, r), t & 4 && -1 < Nh.indexOf(e))) {
      for (; o !== null; ) {
        var i = Gr(o);
        if (
          (i !== null && bc(i),
          (i = Il(e, t, n, r)),
          i === null && qi(e, t, r, jo, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else qi(e, t, r, null, n);
  }
}
var jo = null;
function Il(e, t, n, r) {
  if (((jo = null), (e = Ps(r)), (e = tn(e)), e !== null))
    if (((t = yn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Qc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (jo = e), null;
}
function of(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (yh()) {
        case _s:
          return 1;
        case Xc:
          return 4;
        case Fo:
        case gh:
          return 16;
        case Jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Dt = null,
  Ls = null,
  So = null;
function lf() {
  if (So) return So;
  var e,
    t = Ls,
    n = t.length,
    r,
    o = 'value' in Dt ? Dt.value : Dt.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (So = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Eo(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function lo() {
  return !0;
}
function Yu() {
  return !1;
}
function He(e) {
  function t(n, r, o, i, l) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? lo
        : Yu),
      (this.isPropagationStopped = Yu),
      this
    );
  }
  return (
    b(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = lo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = lo));
      },
      persist: function () {},
      isPersistent: lo,
    }),
    t
  );
}
var Yn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  As = He(Yn),
  Kr = b({}, Yn, { view: 0, detail: 0 }),
  Oh = He(Kr),
  Hi,
  Vi,
  nr,
  ai = b({}, Kr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ms,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== nr &&
            (nr && e.type === 'mousemove'
              ? ((Hi = e.screenX - nr.screenX), (Vi = e.screenY - nr.screenY))
              : (Vi = Hi = 0),
            (nr = e)),
          Hi);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Vi;
    },
  }),
  Xu = He(ai),
  Lh = b({}, ai, { dataTransfer: 0 }),
  Ah = He(Lh),
  Mh = b({}, Kr, { relatedTarget: 0 }),
  Wi = He(Mh),
  Ih = b({}, Yn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Dh = He(Ih),
  Fh = b({}, Yn, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  zh = He(Fh),
  Uh = b({}, Yn, { data: 0 }),
  Ju = He(Uh),
  jh = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  Bh = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  $h = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function Hh(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = $h[e]) ? !!t[e] : !1;
}
function Ms() {
  return Hh;
}
var Vh = b({}, Kr, {
    key: function (e) {
      if (e.key) {
        var t = jh[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Eo(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? Bh[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ms,
    charCode: function (e) {
      return e.type === 'keypress' ? Eo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Eo(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  Wh = He(Vh),
  Qh = b({}, ai, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  qu = He(Qh),
  Kh = b({}, Kr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ms,
  }),
  Gh = He(Kh),
  Yh = b({}, Yn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Xh = He(Yh),
  Jh = b({}, ai, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  qh = He(Jh),
  Zh = [9, 13, 27, 32],
  Is = Ct && 'CompositionEvent' in window,
  pr = null;
Ct && 'documentMode' in document && (pr = document.documentMode);
var bh = Ct && 'TextEvent' in window && !pr,
  sf = Ct && (!Is || (pr && 8 < pr && 11 >= pr)),
  Zu = String.fromCharCode(32),
  bu = !1;
function uf(e, t) {
  switch (e) {
    case 'keyup':
      return Zh.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function af(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var xn = !1;
function em(e, t) {
  switch (e) {
    case 'compositionend':
      return af(t);
    case 'keypress':
      return t.which !== 32 ? null : ((bu = !0), Zu);
    case 'textInput':
      return (e = t.data), e === Zu && bu ? null : e;
    default:
      return null;
  }
}
function tm(e, t) {
  if (xn)
    return e === 'compositionend' || (!Is && uf(e, t))
      ? ((e = lf()), (So = Ls = Dt = null), (xn = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return sf && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var nm = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ea(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!nm[e.type] : t === 'textarea';
}
function cf(e, t, n, r) {
  Bc(r),
    (t = Bo(t, 'onChange')),
    0 < t.length &&
      ((n = new As('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var hr = null,
  _r = null;
function rm(e) {
  Ef(e, 0);
}
function ci(e) {
  var t = Nn(e);
  if (Mc(t)) return e;
}
function om(e, t) {
  if (e === 'change') return t;
}
var ff = !1;
if (Ct) {
  var Qi;
  if (Ct) {
    var Ki = 'oninput' in document;
    if (!Ki) {
      var ta = document.createElement('div');
      ta.setAttribute('oninput', 'return;'),
        (Ki = typeof ta.oninput == 'function');
    }
    Qi = Ki;
  } else Qi = !1;
  ff = Qi && (!document.documentMode || 9 < document.documentMode);
}
function na() {
  hr && (hr.detachEvent('onpropertychange', df), (_r = hr = null));
}
function df(e) {
  if (e.propertyName === 'value' && ci(_r)) {
    var t = [];
    cf(t, _r, e, Ps(e)), Wc(rm, t);
  }
}
function im(e, t, n) {
  e === 'focusin'
    ? (na(), (hr = t), (_r = n), hr.attachEvent('onpropertychange', df))
    : e === 'focusout' && na();
}
function lm(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return ci(_r);
}
function sm(e, t) {
  if (e === 'click') return ci(t);
}
function um(e, t) {
  if (e === 'input' || e === 'change') return ci(t);
}
function am(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var st = typeof Object.is == 'function' ? Object.is : am;
function Rr(e, t) {
  if (st(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!yl.call(t, o) || !st(e[o], t[o])) return !1;
  }
  return !0;
}
function ra(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function oa(e, t) {
  var n = ra(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ra(n);
  }
}
function pf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? pf(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function hf() {
  for (var e = window, t = Mo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Mo(e.document);
  }
  return t;
}
function Ds(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function cm(e) {
  var t = hf(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    pf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ds(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = oa(n, i));
        var l = oa(n, r);
        o &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var fm = Ct && 'documentMode' in document && 11 >= document.documentMode,
  kn = null,
  Dl = null,
  mr = null,
  Fl = !1;
function ia(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Fl ||
    kn == null ||
    kn !== Mo(r) ||
    ((r = kn),
    'selectionStart' in r && Ds(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (mr && Rr(mr, r)) ||
      ((mr = r),
      (r = Bo(Dl, 'onSelect')),
      0 < r.length &&
        ((t = new As('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = kn))));
}
function so(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var Cn = {
    animationend: so('Animation', 'AnimationEnd'),
    animationiteration: so('Animation', 'AnimationIteration'),
    animationstart: so('Animation', 'AnimationStart'),
    transitionend: so('Transition', 'TransitionEnd'),
  },
  Gi = {},
  mf = {};
Ct &&
  ((mf = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Cn.animationend.animation,
    delete Cn.animationiteration.animation,
    delete Cn.animationstart.animation),
  'TransitionEvent' in window || delete Cn.transitionend.transition);
function fi(e) {
  if (Gi[e]) return Gi[e];
  if (!Cn[e]) return e;
  var t = Cn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in mf) return (Gi[e] = t[n]);
  return e;
}
var yf = fi('animationend'),
  gf = fi('animationiteration'),
  vf = fi('animationstart'),
  wf = fi('transitionend'),
  Sf = new Map(),
  la =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' ',
    );
function Yt(e, t) {
  Sf.set(e, t), mn(t, [e]);
}
for (var Yi = 0; Yi < la.length; Yi++) {
  var Xi = la[Yi],
    dm = Xi.toLowerCase(),
    pm = Xi[0].toUpperCase() + Xi.slice(1);
  Yt(dm, 'on' + pm);
}
Yt(yf, 'onAnimationEnd');
Yt(gf, 'onAnimationIteration');
Yt(vf, 'onAnimationStart');
Yt('dblclick', 'onDoubleClick');
Yt('focusin', 'onFocus');
Yt('focusout', 'onBlur');
Yt(wf, 'onTransitionEnd');
jn('onMouseEnter', ['mouseout', 'mouseover']);
jn('onMouseLeave', ['mouseout', 'mouseover']);
jn('onPointerEnter', ['pointerout', 'pointerover']);
jn('onPointerLeave', ['pointerout', 'pointerover']);
mn(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(
    ' ',
  ),
);
mn(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' ',
  ),
);
mn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
mn(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' '),
);
mn(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
);
mn(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
);
var cr =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  hm = new Set('cancel close invalid load scroll toggle'.split(' ').concat(cr));
function sa(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), dh(r, t, void 0, e), (e.currentTarget = null);
}
function Ef(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var u = r[l],
            s = u.instance,
            a = u.currentTarget;
          if (((u = u.listener), s !== i && o.isPropagationStopped())) break e;
          sa(o, u, a), (i = s);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((u = r[l]),
            (s = u.instance),
            (a = u.currentTarget),
            (u = u.listener),
            s !== i && o.isPropagationStopped())
          )
            break e;
          sa(o, u, a), (i = s);
        }
    }
  }
  if (Do) throw ((e = Ll), (Do = !1), (Ll = null), e);
}
function Q(e, t) {
  var n = t[$l];
  n === void 0 && (n = t[$l] = new Set());
  var r = e + '__bubble';
  n.has(r) || (xf(t, e, 2, !1), n.add(r));
}
function Ji(e, t, n) {
  var r = 0;
  t && (r |= 4), xf(n, e, r, t);
}
var uo = '_reactListening' + Math.random().toString(36).slice(2);
function Tr(e) {
  if (!e[uo]) {
    (e[uo] = !0),
      Rc.forEach(function (n) {
        n !== 'selectionchange' && (hm.has(n) || Ji(n, !1, e), Ji(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[uo] || ((t[uo] = !0), Ji('selectionchange', !1, t));
  }
}
function xf(e, t, n, r) {
  switch (of(t)) {
    case 1:
      var o = Rh;
      break;
    case 4:
      o = Th;
      break;
    default:
      o = Os;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Ol ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function qi(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var u = r.stateNode.containerInfo;
        if (u === o || (u.nodeType === 8 && u.parentNode === o)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var s = l.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = l.stateNode.containerInfo),
              s === o || (s.nodeType === 8 && s.parentNode === o))
            )
              return;
            l = l.return;
          }
        for (; u !== null; ) {
          if (((l = tn(u)), l === null)) return;
          if (((s = l.tag), s === 5 || s === 6)) {
            r = i = l;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Wc(function () {
    var a = i,
      f = Ps(n),
      c = [];
    e: {
      var d = Sf.get(e);
      if (d !== void 0) {
        var v = As,
          m = e;
        switch (e) {
          case 'keypress':
            if (Eo(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            v = Wh;
            break;
          case 'focusin':
            (m = 'focus'), (v = Wi);
            break;
          case 'focusout':
            (m = 'blur'), (v = Wi);
            break;
          case 'beforeblur':
          case 'afterblur':
            v = Wi;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            v = Xu;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            v = Ah;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            v = Gh;
            break;
          case yf:
          case gf:
          case vf:
            v = Dh;
            break;
          case wf:
            v = Xh;
            break;
          case 'scroll':
            v = Oh;
            break;
          case 'wheel':
            v = qh;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            v = zh;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            v = qu;
        }
        var g = (t & 4) !== 0,
          S = !g && e === 'scroll',
          h = g ? (d !== null ? d + 'Capture' : null) : d;
        g = [];
        for (var p = a, y; p !== null; ) {
          y = p;
          var w = y.stateNode;
          if (
            (y.tag === 5 &&
              w !== null &&
              ((y = w),
              h !== null && ((w = kr(p, h)), w != null && g.push(Or(p, w, y)))),
            S)
          )
            break;
          p = p.return;
        }
        0 < g.length &&
          ((d = new v(d, m, null, n, f)), c.push({ event: d, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === 'mouseover' || e === 'pointerover'),
          (v = e === 'mouseout' || e === 'pointerout'),
          d &&
            n !== Rl &&
            (m = n.relatedTarget || n.fromElement) &&
            (tn(m) || m[Nt]))
        )
          break e;
        if (
          (v || d) &&
          ((d =
            f.window === f
              ? f
              : (d = f.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          v
            ? ((m = n.relatedTarget || n.toElement),
              (v = a),
              (m = m ? tn(m) : null),
              m !== null &&
                ((S = yn(m)), m !== S || (m.tag !== 5 && m.tag !== 6)) &&
                (m = null))
            : ((v = null), (m = a)),
          v !== m)
        ) {
          if (
            ((g = Xu),
            (w = 'onMouseLeave'),
            (h = 'onMouseEnter'),
            (p = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((g = qu),
              (w = 'onPointerLeave'),
              (h = 'onPointerEnter'),
              (p = 'pointer')),
            (S = v == null ? d : Nn(v)),
            (y = m == null ? d : Nn(m)),
            (d = new g(w, p + 'leave', v, n, f)),
            (d.target = S),
            (d.relatedTarget = y),
            (w = null),
            tn(f) === a &&
              ((g = new g(h, p + 'enter', m, n, f)),
              (g.target = y),
              (g.relatedTarget = S),
              (w = g)),
            (S = w),
            v && m)
          )
            t: {
              for (g = v, h = m, p = 0, y = g; y; y = wn(y)) p++;
              for (y = 0, w = h; w; w = wn(w)) y++;
              for (; 0 < p - y; ) (g = wn(g)), p--;
              for (; 0 < y - p; ) (h = wn(h)), y--;
              for (; p--; ) {
                if (g === h || (h !== null && g === h.alternate)) break t;
                (g = wn(g)), (h = wn(h));
              }
              g = null;
            }
          else g = null;
          v !== null && ua(c, d, v, g, !1),
            m !== null && S !== null && ua(c, S, m, g, !0);
        }
      }
      e: {
        if (
          ((d = a ? Nn(a) : window),
          (v = d.nodeName && d.nodeName.toLowerCase()),
          v === 'select' || (v === 'input' && d.type === 'file'))
        )
          var x = om;
        else if (ea(d))
          if (ff) x = um;
          else {
            x = lm;
            var P = im;
          }
        else
          (v = d.nodeName) &&
            v.toLowerCase() === 'input' &&
            (d.type === 'checkbox' || d.type === 'radio') &&
            (x = sm);
        if (x && (x = x(e, a))) {
          cf(c, x, n, f);
          break e;
        }
        P && P(e, d, a),
          e === 'focusout' &&
            (P = d._wrapperState) &&
            P.controlled &&
            d.type === 'number' &&
            kl(d, 'number', d.value);
      }
      switch (((P = a ? Nn(a) : window), e)) {
        case 'focusin':
          (ea(P) || P.contentEditable === 'true') &&
            ((kn = P), (Dl = a), (mr = null));
          break;
        case 'focusout':
          mr = Dl = kn = null;
          break;
        case 'mousedown':
          Fl = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Fl = !1), ia(c, n, f);
          break;
        case 'selectionchange':
          if (fm) break;
        case 'keydown':
        case 'keyup':
          ia(c, n, f);
      }
      var k;
      if (Is)
        e: {
          switch (e) {
            case 'compositionstart':
              var C = 'onCompositionStart';
              break e;
            case 'compositionend':
              C = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              C = 'onCompositionUpdate';
              break e;
          }
          C = void 0;
        }
      else
        xn
          ? uf(e, n) && (C = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (C = 'onCompositionStart');
      C &&
        (sf &&
          n.locale !== 'ko' &&
          (xn || C !== 'onCompositionStart'
            ? C === 'onCompositionEnd' && xn && (k = lf())
            : ((Dt = f),
              (Ls = 'value' in Dt ? Dt.value : Dt.textContent),
              (xn = !0))),
        (P = Bo(a, C)),
        0 < P.length &&
          ((C = new Ju(C, e, null, n, f)),
          c.push({ event: C, listeners: P }),
          k ? (C.data = k) : ((k = af(n)), k !== null && (C.data = k)))),
        (k = bh ? em(e, n) : tm(e, n)) &&
          ((a = Bo(a, 'onBeforeInput')),
          0 < a.length &&
            ((f = new Ju('onBeforeInput', 'beforeinput', null, n, f)),
            c.push({ event: f, listeners: a }),
            (f.data = k)));
    }
    Ef(c, t);
  });
}
function Or(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Bo(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = kr(e, n)),
      i != null && r.unshift(Or(e, i, o)),
      (i = kr(e, t)),
      i != null && r.push(Or(e, i, o))),
      (e = e.return);
  }
  return r;
}
function wn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ua(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      o
        ? ((s = kr(n, i)), s != null && l.unshift(Or(n, s, u)))
        : o || ((s = kr(n, i)), s != null && l.push(Or(n, s, u)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var mm = /\r\n?/g,
  ym = /\u0000|\uFFFD/g;
function aa(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      mm,
      `
`,
    )
    .replace(ym, '');
}
function ao(e, t, n) {
  if (((t = aa(t)), aa(e) !== t && n)) throw Error(N(425));
}
function $o() {}
var zl = null,
  Ul = null;
function jl(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Bl = typeof setTimeout == 'function' ? setTimeout : void 0,
  gm = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  ca = typeof Promise == 'function' ? Promise : void 0,
  vm =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof ca < 'u'
      ? function (e) {
          return ca.resolve(null).then(e).catch(wm);
        }
      : Bl;
function wm(e) {
  setTimeout(function () {
    throw e;
  });
}
function Zi(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), Pr(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = o;
  } while (n);
  Pr(t);
}
function $t(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function fa(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Xn = Math.random().toString(36).slice(2),
  ct = '__reactFiber$' + Xn,
  Lr = '__reactProps$' + Xn,
  Nt = '__reactContainer$' + Xn,
  $l = '__reactEvents$' + Xn,
  Sm = '__reactListeners$' + Xn,
  Em = '__reactHandles$' + Xn;
function tn(e) {
  var t = e[ct];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Nt] || n[ct])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = fa(e); e !== null; ) {
          if ((n = e[ct])) return n;
          e = fa(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Gr(e) {
  return (
    (e = e[ct] || e[Nt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Nn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function di(e) {
  return e[Lr] || null;
}
var Hl = [],
  Pn = -1;
function Xt(e) {
  return { current: e };
}
function K(e) {
  0 > Pn || ((e.current = Hl[Pn]), (Hl[Pn] = null), Pn--);
}
function V(e, t) {
  Pn++, (Hl[Pn] = e.current), (e.current = t);
}
var Gt = {},
  Se = Xt(Gt),
  Le = Xt(!1),
  un = Gt;
function Bn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Gt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Ae(e) {
  return (e = e.childContextTypes), e != null;
}
function Ho() {
  K(Le), K(Se);
}
function da(e, t, n) {
  if (Se.current !== Gt) throw Error(N(168));
  V(Se, t), V(Le, n);
}
function kf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(N(108, ih(e) || 'Unknown', o));
  return b({}, n, r);
}
function Vo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Gt),
    (un = Se.current),
    V(Se, e),
    V(Le, Le.current),
    !0
  );
}
function pa(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  n
    ? ((e = kf(e, t, un)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      K(Le),
      K(Se),
      V(Se, e))
    : K(Le),
    V(Le, n);
}
var wt = null,
  pi = !1,
  bi = !1;
function Cf(e) {
  wt === null ? (wt = [e]) : wt.push(e);
}
function xm(e) {
  (pi = !0), Cf(e);
}
function Jt() {
  if (!bi && wt !== null) {
    bi = !0;
    var e = 0,
      t = H;
    try {
      var n = wt;
      for (H = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (wt = null), (pi = !1);
    } catch (o) {
      throw (wt !== null && (wt = wt.slice(e + 1)), Yc(_s, Jt), o);
    } finally {
      (H = t), (bi = !1);
    }
  }
  return null;
}
var _n = [],
  Rn = 0,
  Wo = null,
  Qo = 0,
  Ve = [],
  We = 0,
  an = null,
  St = 1,
  Et = '';
function bt(e, t) {
  (_n[Rn++] = Qo), (_n[Rn++] = Wo), (Wo = e), (Qo = t);
}
function Nf(e, t, n) {
  (Ve[We++] = St), (Ve[We++] = Et), (Ve[We++] = an), (an = e);
  var r = St;
  e = Et;
  var o = 32 - ot(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - ot(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    (i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (St = (1 << (32 - ot(t) + o)) | (n << o) | r),
      (Et = i + e);
  } else (St = (1 << i) | (n << o) | r), (Et = e);
}
function Fs(e) {
  e.return !== null && (bt(e, 1), Nf(e, 1, 0));
}
function zs(e) {
  for (; e === Wo; )
    (Wo = _n[--Rn]), (_n[Rn] = null), (Qo = _n[--Rn]), (_n[Rn] = null);
  for (; e === an; )
    (an = Ve[--We]),
      (Ve[We] = null),
      (Et = Ve[--We]),
      (Ve[We] = null),
      (St = Ve[--We]),
      (Ve[We] = null);
}
var je = null,
  Ue = null,
  G = !1,
  rt = null;
function Pf(e, t) {
  var n = Ke(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ha(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (je = e), (Ue = $t(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (je = e), (Ue = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = an !== null ? { id: St, overflow: Et } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ke(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (je = e),
            (Ue = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Vl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Wl(e) {
  if (G) {
    var t = Ue;
    if (t) {
      var n = t;
      if (!ha(e, t)) {
        if (Vl(e)) throw Error(N(418));
        t = $t(n.nextSibling);
        var r = je;
        t && ha(e, t)
          ? Pf(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (G = !1), (je = e));
      }
    } else {
      if (Vl(e)) throw Error(N(418));
      (e.flags = (e.flags & -4097) | 2), (G = !1), (je = e);
    }
  }
}
function ma(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  je = e;
}
function co(e) {
  if (e !== je) return !1;
  if (!G) return ma(e), (G = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !jl(e.type, e.memoizedProps))),
    t && (t = Ue))
  ) {
    if (Vl(e)) throw (_f(), Error(N(418)));
    for (; t; ) Pf(e, t), (t = $t(t.nextSibling));
  }
  if ((ma(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              Ue = $t(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      Ue = null;
    }
  } else Ue = je ? $t(e.stateNode.nextSibling) : null;
  return !0;
}
function _f() {
  for (var e = Ue; e; ) e = $t(e.nextSibling);
}
function $n() {
  (Ue = je = null), (G = !1);
}
function Us(e) {
  rt === null ? (rt = [e]) : rt.push(e);
}
var km = Rt.ReactCurrentBatchConfig;
function tt(e, t) {
  if (e && e.defaultProps) {
    (t = b({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Ko = Xt(null),
  Go = null,
  Tn = null,
  js = null;
function Bs() {
  js = Tn = Go = null;
}
function $s(e) {
  var t = Ko.current;
  K(Ko), (e._currentValue = t);
}
function Ql(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function zn(e, t) {
  (Go = e),
    (js = Tn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Oe = !0), (e.firstContext = null));
}
function Xe(e) {
  var t = e._currentValue;
  if (js !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Tn === null)) {
      if (Go === null) throw Error(N(308));
      (Tn = e), (Go.dependencies = { lanes: 0, firstContext: e });
    } else Tn = Tn.next = e;
  return t;
}
var nn = null;
function Hs(e) {
  nn === null ? (nn = [e]) : nn.push(e);
}
function Rf(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Hs(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Pt(e, r)
  );
}
function Pt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var At = !1;
function Vs(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Tf(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function xt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ht(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), j & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Pt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Hs(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Pt(e, n)
  );
}
function xo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Rs(e, n);
  }
}
function ya(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = l) : (i = i.next = l), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Yo(e, t, n, r) {
  var o = e.updateQueue;
  At = !1;
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    u = o.shared.pending;
  if (u !== null) {
    o.shared.pending = null;
    var s = u,
      a = s.next;
    (s.next = null), l === null ? (i = a) : (l.next = a), (l = s);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (u = f.lastBaseUpdate),
      u !== l &&
        (u === null ? (f.firstBaseUpdate = a) : (u.next = a),
        (f.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var c = o.baseState;
    (l = 0), (f = a = s = null), (u = i);
    do {
      var d = u.lane,
        v = u.eventTime;
      if ((r & d) === d) {
        f !== null &&
          (f = f.next =
            {
              eventTime: v,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var m = e,
            g = u;
          switch (((d = t), (v = n), g.tag)) {
            case 1:
              if (((m = g.payload), typeof m == 'function')) {
                c = m.call(v, c, d);
                break e;
              }
              c = m;
              break e;
            case 3:
              m.flags = (m.flags & -65537) | 128;
            case 0:
              if (
                ((m = g.payload),
                (d = typeof m == 'function' ? m.call(v, c, d) : m),
                d == null)
              )
                break e;
              c = b({}, c, d);
              break e;
            case 2:
              At = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (d = o.effects),
          d === null ? (o.effects = [u]) : d.push(u));
      } else
        (v = {
          eventTime: v,
          lane: d,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          f === null ? ((a = f = v), (s = c)) : (f = f.next = v),
          (l |= d);
      if (((u = u.next), u === null)) {
        if (((u = o.shared.pending), u === null)) break;
        (d = u),
          (u = d.next),
          (d.next = null),
          (o.lastBaseUpdate = d),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (f === null && (s = c),
      (o.baseState = s),
      (o.firstBaseUpdate = a),
      (o.lastBaseUpdate = f),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (l |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (fn |= l), (e.lanes = l), (e.memoizedState = c);
  }
}
function ga(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function'))
          throw Error(N(191, o));
        o.call(r);
      }
    }
}
var Of = new _c.Component().refs;
function Kl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : b({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var hi = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? yn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ke(),
      o = Wt(e),
      i = xt(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Ht(e, i, o)),
      t !== null && (it(t, e, o, r), xo(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ke(),
      o = Wt(e),
      i = xt(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Ht(e, i, o)),
      t !== null && (it(t, e, o, r), xo(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ke(),
      r = Wt(e),
      o = xt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Ht(e, o, r)),
      t !== null && (it(t, e, r, n), xo(t, e, r));
  },
};
function va(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Rr(n, r) || !Rr(o, i)
      : !0
  );
}
function Lf(e, t, n) {
  var r = !1,
    o = Gt,
    i = t.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = Xe(i))
      : ((o = Ae(t) ? un : Se.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Bn(e, o) : Gt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = hi),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function wa(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && hi.enqueueReplaceState(t, t.state, null);
}
function Gl(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Of), Vs(e);
  var i = t.contextType;
  typeof i == 'object' && i !== null
    ? (o.context = Xe(i))
    : ((i = Ae(t) ? un : Se.current), (o.context = Bn(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (Kl(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && hi.enqueueReplaceState(o, o.state, null),
      Yo(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308);
}
function rr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var o = r,
        i = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var u = o.refs;
            u === Of && (u = o.refs = {}),
              l === null ? delete u[i] : (u[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != 'string') throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function fo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      N(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e,
      ),
    ))
  );
}
function Sa(e) {
  var t = e._init;
  return t(e._payload);
}
function Af(e) {
  function t(h, p) {
    if (e) {
      var y = h.deletions;
      y === null ? ((h.deletions = [p]), (h.flags |= 16)) : y.push(p);
    }
  }
  function n(h, p) {
    if (!e) return null;
    for (; p !== null; ) t(h, p), (p = p.sibling);
    return null;
  }
  function r(h, p) {
    for (h = new Map(); p !== null; )
      p.key !== null ? h.set(p.key, p) : h.set(p.index, p), (p = p.sibling);
    return h;
  }
  function o(h, p) {
    return (h = Qt(h, p)), (h.index = 0), (h.sibling = null), h;
  }
  function i(h, p, y) {
    return (
      (h.index = y),
      e
        ? ((y = h.alternate),
          y !== null
            ? ((y = y.index), y < p ? ((h.flags |= 2), p) : y)
            : ((h.flags |= 2), p))
        : ((h.flags |= 1048576), p)
    );
  }
  function l(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function u(h, p, y, w) {
    return p === null || p.tag !== 6
      ? ((p = ll(y, h.mode, w)), (p.return = h), p)
      : ((p = o(p, y)), (p.return = h), p);
  }
  function s(h, p, y, w) {
    var x = y.type;
    return x === En
      ? f(h, p, y.props.children, w, y.key)
      : p !== null &&
        (p.elementType === x ||
          (typeof x == 'object' &&
            x !== null &&
            x.$$typeof === Lt &&
            Sa(x) === p.type))
      ? ((w = o(p, y.props)), (w.ref = rr(h, p, y)), (w.return = h), w)
      : ((w = Ro(y.type, y.key, y.props, null, h.mode, w)),
        (w.ref = rr(h, p, y)),
        (w.return = h),
        w);
  }
  function a(h, p, y, w) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== y.containerInfo ||
      p.stateNode.implementation !== y.implementation
      ? ((p = sl(y, h.mode, w)), (p.return = h), p)
      : ((p = o(p, y.children || [])), (p.return = h), p);
  }
  function f(h, p, y, w, x) {
    return p === null || p.tag !== 7
      ? ((p = ln(y, h.mode, w, x)), (p.return = h), p)
      : ((p = o(p, y)), (p.return = h), p);
  }
  function c(h, p, y) {
    if ((typeof p == 'string' && p !== '') || typeof p == 'number')
      return (p = ll('' + p, h.mode, y)), (p.return = h), p;
    if (typeof p == 'object' && p !== null) {
      switch (p.$$typeof) {
        case eo:
          return (
            (y = Ro(p.type, p.key, p.props, null, h.mode, y)),
            (y.ref = rr(h, null, p)),
            (y.return = h),
            y
          );
        case Sn:
          return (p = sl(p, h.mode, y)), (p.return = h), p;
        case Lt:
          var w = p._init;
          return c(h, w(p._payload), y);
      }
      if (ur(p) || Zn(p))
        return (p = ln(p, h.mode, y, null)), (p.return = h), p;
      fo(h, p);
    }
    return null;
  }
  function d(h, p, y, w) {
    var x = p !== null ? p.key : null;
    if ((typeof y == 'string' && y !== '') || typeof y == 'number')
      return x !== null ? null : u(h, p, '' + y, w);
    if (typeof y == 'object' && y !== null) {
      switch (y.$$typeof) {
        case eo:
          return y.key === x ? s(h, p, y, w) : null;
        case Sn:
          return y.key === x ? a(h, p, y, w) : null;
        case Lt:
          return (x = y._init), d(h, p, x(y._payload), w);
      }
      if (ur(y) || Zn(y)) return x !== null ? null : f(h, p, y, w, null);
      fo(h, y);
    }
    return null;
  }
  function v(h, p, y, w, x) {
    if ((typeof w == 'string' && w !== '') || typeof w == 'number')
      return (h = h.get(y) || null), u(p, h, '' + w, x);
    if (typeof w == 'object' && w !== null) {
      switch (w.$$typeof) {
        case eo:
          return (h = h.get(w.key === null ? y : w.key) || null), s(p, h, w, x);
        case Sn:
          return (h = h.get(w.key === null ? y : w.key) || null), a(p, h, w, x);
        case Lt:
          var P = w._init;
          return v(h, p, y, P(w._payload), x);
      }
      if (ur(w) || Zn(w)) return (h = h.get(y) || null), f(p, h, w, x, null);
      fo(p, w);
    }
    return null;
  }
  function m(h, p, y, w) {
    for (
      var x = null, P = null, k = p, C = (p = 0), A = null;
      k !== null && C < y.length;
      C++
    ) {
      k.index > C ? ((A = k), (k = null)) : (A = k.sibling);
      var R = d(h, k, y[C], w);
      if (R === null) {
        k === null && (k = A);
        break;
      }
      e && k && R.alternate === null && t(h, k),
        (p = i(R, p, C)),
        P === null ? (x = R) : (P.sibling = R),
        (P = R),
        (k = A);
    }
    if (C === y.length) return n(h, k), G && bt(h, C), x;
    if (k === null) {
      for (; C < y.length; C++)
        (k = c(h, y[C], w)),
          k !== null &&
            ((p = i(k, p, C)), P === null ? (x = k) : (P.sibling = k), (P = k));
      return G && bt(h, C), x;
    }
    for (k = r(h, k); C < y.length; C++)
      (A = v(k, h, C, y[C], w)),
        A !== null &&
          (e && A.alternate !== null && k.delete(A.key === null ? C : A.key),
          (p = i(A, p, C)),
          P === null ? (x = A) : (P.sibling = A),
          (P = A));
    return (
      e &&
        k.forEach(function (F) {
          return t(h, F);
        }),
      G && bt(h, C),
      x
    );
  }
  function g(h, p, y, w) {
    var x = Zn(y);
    if (typeof x != 'function') throw Error(N(150));
    if (((y = x.call(y)), y == null)) throw Error(N(151));
    for (
      var P = (x = null), k = p, C = (p = 0), A = null, R = y.next();
      k !== null && !R.done;
      C++, R = y.next()
    ) {
      k.index > C ? ((A = k), (k = null)) : (A = k.sibling);
      var F = d(h, k, R.value, w);
      if (F === null) {
        k === null && (k = A);
        break;
      }
      e && k && F.alternate === null && t(h, k),
        (p = i(F, p, C)),
        P === null ? (x = F) : (P.sibling = F),
        (P = F),
        (k = A);
    }
    if (R.done) return n(h, k), G && bt(h, C), x;
    if (k === null) {
      for (; !R.done; C++, R = y.next())
        (R = c(h, R.value, w)),
          R !== null &&
            ((p = i(R, p, C)), P === null ? (x = R) : (P.sibling = R), (P = R));
      return G && bt(h, C), x;
    }
    for (k = r(h, k); !R.done; C++, R = y.next())
      (R = v(k, h, C, R.value, w)),
        R !== null &&
          (e && R.alternate !== null && k.delete(R.key === null ? C : R.key),
          (p = i(R, p, C)),
          P === null ? (x = R) : (P.sibling = R),
          (P = R));
    return (
      e &&
        k.forEach(function (X) {
          return t(h, X);
        }),
      G && bt(h, C),
      x
    );
  }
  function S(h, p, y, w) {
    if (
      (typeof y == 'object' &&
        y !== null &&
        y.type === En &&
        y.key === null &&
        (y = y.props.children),
      typeof y == 'object' && y !== null)
    ) {
      switch (y.$$typeof) {
        case eo:
          e: {
            for (var x = y.key, P = p; P !== null; ) {
              if (P.key === x) {
                if (((x = y.type), x === En)) {
                  if (P.tag === 7) {
                    n(h, P.sibling),
                      (p = o(P, y.props.children)),
                      (p.return = h),
                      (h = p);
                    break e;
                  }
                } else if (
                  P.elementType === x ||
                  (typeof x == 'object' &&
                    x !== null &&
                    x.$$typeof === Lt &&
                    Sa(x) === P.type)
                ) {
                  n(h, P.sibling),
                    (p = o(P, y.props)),
                    (p.ref = rr(h, P, y)),
                    (p.return = h),
                    (h = p);
                  break e;
                }
                n(h, P);
                break;
              } else t(h, P);
              P = P.sibling;
            }
            y.type === En
              ? ((p = ln(y.props.children, h.mode, w, y.key)),
                (p.return = h),
                (h = p))
              : ((w = Ro(y.type, y.key, y.props, null, h.mode, w)),
                (w.ref = rr(h, p, y)),
                (w.return = h),
                (h = w));
          }
          return l(h);
        case Sn:
          e: {
            for (P = y.key; p !== null; ) {
              if (p.key === P)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === y.containerInfo &&
                  p.stateNode.implementation === y.implementation
                ) {
                  n(h, p.sibling),
                    (p = o(p, y.children || [])),
                    (p.return = h),
                    (h = p);
                  break e;
                } else {
                  n(h, p);
                  break;
                }
              else t(h, p);
              p = p.sibling;
            }
            (p = sl(y, h.mode, w)), (p.return = h), (h = p);
          }
          return l(h);
        case Lt:
          return (P = y._init), S(h, p, P(y._payload), w);
      }
      if (ur(y)) return m(h, p, y, w);
      if (Zn(y)) return g(h, p, y, w);
      fo(h, y);
    }
    return (typeof y == 'string' && y !== '') || typeof y == 'number'
      ? ((y = '' + y),
        p !== null && p.tag === 6
          ? (n(h, p.sibling), (p = o(p, y)), (p.return = h), (h = p))
          : (n(h, p), (p = ll(y, h.mode, w)), (p.return = h), (h = p)),
        l(h))
      : n(h, p);
  }
  return S;
}
var Hn = Af(!0),
  Mf = Af(!1),
  Yr = {},
  pt = Xt(Yr),
  Ar = Xt(Yr),
  Mr = Xt(Yr);
function rn(e) {
  if (e === Yr) throw Error(N(174));
  return e;
}
function Ws(e, t) {
  switch ((V(Mr, t), V(Ar, e), V(pt, Yr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Nl(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Nl(t, e));
  }
  K(pt), V(pt, t);
}
function Vn() {
  K(pt), K(Ar), K(Mr);
}
function If(e) {
  rn(Mr.current);
  var t = rn(pt.current),
    n = Nl(t, e.type);
  t !== n && (V(Ar, e), V(pt, n));
}
function Qs(e) {
  Ar.current === e && (K(pt), K(Ar));
}
var q = Xt(0);
function Xo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var el = [];
function Ks() {
  for (var e = 0; e < el.length; e++)
    el[e]._workInProgressVersionPrimary = null;
  el.length = 0;
}
var ko = Rt.ReactCurrentDispatcher,
  tl = Rt.ReactCurrentBatchConfig,
  cn = 0,
  Z = null,
  ae = null,
  fe = null,
  Jo = !1,
  yr = !1,
  Ir = 0,
  Cm = 0;
function ge() {
  throw Error(N(321));
}
function Gs(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!st(e[n], t[n])) return !1;
  return !0;
}
function Ys(e, t, n, r, o, i) {
  if (
    ((cn = i),
    (Z = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ko.current = e === null || e.memoizedState === null ? Rm : Tm),
    (e = n(r, o)),
    yr)
  ) {
    i = 0;
    do {
      if (((yr = !1), (Ir = 0), 25 <= i)) throw Error(N(301));
      (i += 1),
        (fe = ae = null),
        (t.updateQueue = null),
        (ko.current = Om),
        (e = n(r, o));
    } while (yr);
  }
  if (
    ((ko.current = qo),
    (t = ae !== null && ae.next !== null),
    (cn = 0),
    (fe = ae = Z = null),
    (Jo = !1),
    t)
  )
    throw Error(N(300));
  return e;
}
function Xs() {
  var e = Ir !== 0;
  return (Ir = 0), e;
}
function at() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return fe === null ? (Z.memoizedState = fe = e) : (fe = fe.next = e), fe;
}
function Je() {
  if (ae === null) {
    var e = Z.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ae.next;
  var t = fe === null ? Z.memoizedState : fe.next;
  if (t !== null) (fe = t), (ae = e);
  else {
    if (e === null) throw Error(N(310));
    (ae = e),
      (e = {
        memoizedState: ae.memoizedState,
        baseState: ae.baseState,
        baseQueue: ae.baseQueue,
        queue: ae.queue,
        next: null,
      }),
      fe === null ? (Z.memoizedState = fe = e) : (fe = fe.next = e);
  }
  return fe;
}
function Dr(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function nl(e) {
  var t = Je(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = ae,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      (o.next = i.next), (i.next = l);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var u = (l = null),
      s = null,
      a = i;
    do {
      var f = a.lane;
      if ((cn & f) === f)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var c = {
          lane: f,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        s === null ? ((u = s = c), (l = r)) : (s = s.next = c),
          (Z.lanes |= f),
          (fn |= f);
      }
      a = a.next;
    } while (a !== null && a !== i);
    s === null ? (l = r) : (s.next = u),
      st(r, t.memoizedState) || (Oe = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (Z.lanes |= i), (fn |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function rl(e) {
  var t = Je(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = (o = o.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== o);
    st(i, t.memoizedState) || (Oe = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Df() {}
function Ff(e, t) {
  var n = Z,
    r = Je(),
    o = t(),
    i = !st(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Oe = !0)),
    (r = r.queue),
    Js(jf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (fe !== null && fe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Fr(9, Uf.bind(null, n, r, o, t), void 0, null),
      de === null)
    )
      throw Error(N(349));
    cn & 30 || zf(n, t, o);
  }
  return o;
}
function zf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Z.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Z.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Uf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Bf(t) && $f(e);
}
function jf(e, t, n) {
  return n(function () {
    Bf(t) && $f(e);
  });
}
function Bf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !st(e, n);
  } catch {
    return !0;
  }
}
function $f(e) {
  var t = Pt(e, 1);
  t !== null && it(t, e, 1, -1);
}
function Ea(e) {
  var t = at();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Dr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = _m.bind(null, Z, e)),
    [t.memoizedState, e]
  );
}
function Fr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Z.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Z.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Hf() {
  return Je().memoizedState;
}
function Co(e, t, n, r) {
  var o = at();
  (Z.flags |= e),
    (o.memoizedState = Fr(1 | t, n, void 0, r === void 0 ? null : r));
}
function mi(e, t, n, r) {
  var o = Je();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ae !== null) {
    var l = ae.memoizedState;
    if (((i = l.destroy), r !== null && Gs(r, l.deps))) {
      o.memoizedState = Fr(t, n, i, r);
      return;
    }
  }
  (Z.flags |= e), (o.memoizedState = Fr(1 | t, n, i, r));
}
function xa(e, t) {
  return Co(8390656, 8, e, t);
}
function Js(e, t) {
  return mi(2048, 8, e, t);
}
function Vf(e, t) {
  return mi(4, 2, e, t);
}
function Wf(e, t) {
  return mi(4, 4, e, t);
}
function Qf(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Kf(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), mi(4, 4, Qf.bind(null, t, e), n)
  );
}
function qs() {}
function Gf(e, t) {
  var n = Je();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Gs(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Yf(e, t) {
  var n = Je();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Gs(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Xf(e, t, n) {
  return cn & 21
    ? (st(n, t) || ((n = qc()), (Z.lanes |= n), (fn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Oe = !0)), (e.memoizedState = n));
}
function Nm(e, t) {
  var n = H;
  (H = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = tl.transition;
  tl.transition = {};
  try {
    e(!1), t();
  } finally {
    (H = n), (tl.transition = r);
  }
}
function Jf() {
  return Je().memoizedState;
}
function Pm(e, t, n) {
  var r = Wt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    qf(e))
  )
    Zf(t, n);
  else if (((n = Rf(e, t, n, r)), n !== null)) {
    var o = ke();
    it(n, e, r, o), bf(n, t, r);
  }
}
function _m(e, t, n) {
  var r = Wt(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (qf(e)) Zf(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var l = t.lastRenderedState,
          u = i(l, n);
        if (((o.hasEagerState = !0), (o.eagerState = u), st(u, l))) {
          var s = t.interleaved;
          s === null
            ? ((o.next = o), Hs(t))
            : ((o.next = s.next), (s.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Rf(e, t, o, r)),
      n !== null && ((o = ke()), it(n, e, r, o), bf(n, t, r));
  }
}
function qf(e) {
  var t = e.alternate;
  return e === Z || (t !== null && t === Z);
}
function Zf(e, t) {
  yr = Jo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function bf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Rs(e, n);
  }
}
var qo = {
    readContext: Xe,
    useCallback: ge,
    useContext: ge,
    useEffect: ge,
    useImperativeHandle: ge,
    useInsertionEffect: ge,
    useLayoutEffect: ge,
    useMemo: ge,
    useReducer: ge,
    useRef: ge,
    useState: ge,
    useDebugValue: ge,
    useDeferredValue: ge,
    useTransition: ge,
    useMutableSource: ge,
    useSyncExternalStore: ge,
    useId: ge,
    unstable_isNewReconciler: !1,
  },
  Rm = {
    readContext: Xe,
    useCallback: function (e, t) {
      return (at().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Xe,
    useEffect: xa,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Co(4194308, 4, Qf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Co(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Co(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = at();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = at();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Pm.bind(null, Z, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = at();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ea,
    useDebugValue: qs,
    useDeferredValue: function (e) {
      return (at().memoizedState = e);
    },
    useTransition: function () {
      var e = Ea(!1),
        t = e[0];
      return (e = Nm.bind(null, e[1])), (at().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Z,
        o = at();
      if (G) {
        if (n === void 0) throw Error(N(407));
        n = n();
      } else {
        if (((n = t()), de === null)) throw Error(N(349));
        cn & 30 || zf(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        xa(jf.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Fr(9, Uf.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = at(),
        t = de.identifierPrefix;
      if (G) {
        var n = Et,
          r = St;
        (n = (r & ~(1 << (32 - ot(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Ir++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = Cm++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Tm = {
    readContext: Xe,
    useCallback: Gf,
    useContext: Xe,
    useEffect: Js,
    useImperativeHandle: Kf,
    useInsertionEffect: Vf,
    useLayoutEffect: Wf,
    useMemo: Yf,
    useReducer: nl,
    useRef: Hf,
    useState: function () {
      return nl(Dr);
    },
    useDebugValue: qs,
    useDeferredValue: function (e) {
      var t = Je();
      return Xf(t, ae.memoizedState, e);
    },
    useTransition: function () {
      var e = nl(Dr)[0],
        t = Je().memoizedState;
      return [e, t];
    },
    useMutableSource: Df,
    useSyncExternalStore: Ff,
    useId: Jf,
    unstable_isNewReconciler: !1,
  },
  Om = {
    readContext: Xe,
    useCallback: Gf,
    useContext: Xe,
    useEffect: Js,
    useImperativeHandle: Kf,
    useInsertionEffect: Vf,
    useLayoutEffect: Wf,
    useMemo: Yf,
    useReducer: rl,
    useRef: Hf,
    useState: function () {
      return rl(Dr);
    },
    useDebugValue: qs,
    useDeferredValue: function (e) {
      var t = Je();
      return ae === null ? (t.memoizedState = e) : Xf(t, ae.memoizedState, e);
    },
    useTransition: function () {
      var e = rl(Dr)[0],
        t = Je().memoizedState;
      return [e, t];
    },
    useMutableSource: Df,
    useSyncExternalStore: Ff,
    useId: Jf,
    unstable_isNewReconciler: !1,
  };
function Wn(e, t) {
  try {
    var n = '',
      r = t;
    do (n += oh(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function ol(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Yl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Lm = typeof WeakMap == 'function' ? WeakMap : Map;
function ed(e, t, n) {
  (n = xt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      bo || ((bo = !0), (os = r)), Yl(e, t);
    }),
    n
  );
}
function td(e, t, n) {
  (n = xt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Yl(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        Yl(e, t),
          typeof r != 'function' &&
            (Vt === null ? (Vt = new Set([this])) : Vt.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : '',
        });
      }),
    n
  );
}
function ka(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Lm();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Qm.bind(null, e, t, n)), t.then(e, e));
}
function Ca(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Na(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = xt(-1, 1)), (t.tag = 2), Ht(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Am = Rt.ReactCurrentOwner,
  Oe = !1;
function xe(e, t, n, r) {
  t.child = e === null ? Mf(t, null, n, r) : Hn(t, e.child, n, r);
}
function Pa(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    zn(t, o),
    (r = Ys(e, t, n, r, i, o)),
    (n = Xs()),
    e !== null && !Oe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        _t(e, t, o))
      : (G && n && Fs(t), (t.flags |= 1), xe(e, t, r, o), t.child)
  );
}
function _a(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' &&
      !iu(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), nd(e, t, i, r, o))
      : ((e = Ro(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Rr), n(l, r) && e.ref === t.ref)
    )
      return _t(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Qt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function nd(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Rr(i, r) && e.ref === t.ref)
      if (((Oe = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Oe = !0);
      else return (t.lanes = e.lanes), _t(e, t, o);
  }
  return Xl(e, t, n, r, o);
}
function rd(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        V(Ln, ze),
        (ze |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          V(Ln, ze),
          (ze |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        V(Ln, ze),
        (ze |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      V(Ln, ze),
      (ze |= r);
  return xe(e, t, o, n), t.child;
}
function od(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Xl(e, t, n, r, o) {
  var i = Ae(n) ? un : Se.current;
  return (
    (i = Bn(t, i)),
    zn(t, o),
    (n = Ys(e, t, n, r, i, o)),
    (r = Xs()),
    e !== null && !Oe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        _t(e, t, o))
      : (G && r && Fs(t), (t.flags |= 1), xe(e, t, n, o), t.child)
  );
}
function Ra(e, t, n, r, o) {
  if (Ae(n)) {
    var i = !0;
    Vo(t);
  } else i = !1;
  if ((zn(t, o), t.stateNode === null))
    No(e, t), Lf(t, n, r), Gl(t, n, r, o), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      u = t.memoizedProps;
    l.props = u;
    var s = l.context,
      a = n.contextType;
    typeof a == 'object' && a !== null
      ? (a = Xe(a))
      : ((a = Ae(n) ? un : Se.current), (a = Bn(t, a)));
    var f = n.getDerivedStateFromProps,
      c =
        typeof f == 'function' ||
        typeof l.getSnapshotBeforeUpdate == 'function';
    c ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof l.componentWillReceiveProps != 'function') ||
      ((u !== r || s !== a) && wa(t, l, r, a)),
      (At = !1);
    var d = t.memoizedState;
    (l.state = d),
      Yo(t, r, l, o),
      (s = t.memoizedState),
      u !== r || d !== s || Le.current || At
        ? (typeof f == 'function' && (Kl(t, n, f, r), (s = t.memoizedState)),
          (u = At || va(t, n, u, r, d, s, a))
            ? (c ||
                (typeof l.UNSAFE_componentWillMount != 'function' &&
                  typeof l.componentWillMount != 'function') ||
                (typeof l.componentWillMount == 'function' &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == 'function' &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof l.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (l.props = r),
          (l.state = s),
          (l.context = a),
          (r = u))
        : (typeof l.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      Tf(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : tt(t.type, u)),
      (l.props = a),
      (c = t.pendingProps),
      (d = l.context),
      (s = n.contextType),
      typeof s == 'object' && s !== null
        ? (s = Xe(s))
        : ((s = Ae(n) ? un : Se.current), (s = Bn(t, s)));
    var v = n.getDerivedStateFromProps;
    (f =
      typeof v == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function') ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof l.componentWillReceiveProps != 'function') ||
      ((u !== c || d !== s) && wa(t, l, r, s)),
      (At = !1),
      (d = t.memoizedState),
      (l.state = d),
      Yo(t, r, l, o);
    var m = t.memoizedState;
    u !== c || d !== m || Le.current || At
      ? (typeof v == 'function' && (Kl(t, n, v, r), (m = t.memoizedState)),
        (a = At || va(t, n, a, r, d, m, s) || !1)
          ? (f ||
              (typeof l.UNSAFE_componentWillUpdate != 'function' &&
                typeof l.componentWillUpdate != 'function') ||
              (typeof l.componentWillUpdate == 'function' &&
                l.componentWillUpdate(r, m, s),
              typeof l.UNSAFE_componentWillUpdate == 'function' &&
                l.UNSAFE_componentWillUpdate(r, m, s)),
            typeof l.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != 'function' ||
              (u === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != 'function' ||
              (u === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = m)),
        (l.props = r),
        (l.state = m),
        (l.context = s),
        (r = a))
      : (typeof l.componentDidUpdate != 'function' ||
          (u === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != 'function' ||
          (u === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Jl(e, t, n, r, i, o);
}
function Jl(e, t, n, r, o, i) {
  od(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && pa(t, n, !1), _t(e, t, i);
  (r = t.stateNode), (Am.current = t);
  var u =
    l && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = Hn(t, e.child, null, i)), (t.child = Hn(t, null, u, i)))
      : xe(e, t, u, i),
    (t.memoizedState = r.state),
    o && pa(t, n, !0),
    t.child
  );
}
function id(e) {
  var t = e.stateNode;
  t.pendingContext
    ? da(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && da(e, t.context, !1),
    Ws(e, t.containerInfo);
}
function Ta(e, t, n, r, o) {
  return $n(), Us(o), (t.flags |= 256), xe(e, t, n, r), t.child;
}
var ql = { dehydrated: null, treeContext: null, retryLane: 0 };
function Zl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ld(e, t, n) {
  var r = t.pendingProps,
    o = q.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    u;
  if (
    ((u = l) ||
      (u = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    V(q, o & 1),
    e === null)
  )
    return (
      Wl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (l = { mode: 'hidden', children: l }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = l))
                : (i = vi(l, r, 0, null)),
              (e = ln(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Zl(n)),
              (t.memoizedState = ql),
              e)
            : Zs(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((u = o.dehydrated), u !== null)))
    return Mm(e, t, l, r, u, o, n);
  if (i) {
    (i = r.fallback), (l = t.mode), (o = e.child), (u = o.sibling);
    var s = { mode: 'hidden', children: r.children };
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = Qt(o, s)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      u !== null ? (i = Qt(u, i)) : ((i = ln(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? Zl(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = ql),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Qt(i, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Zs(e, t) {
  return (
    (t = vi({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function po(e, t, n, r) {
  return (
    r !== null && Us(r),
    Hn(t, e.child, null, n),
    (e = Zs(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Mm(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ol(Error(N(422)))), po(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = vi({ mode: 'visible', children: r.children }, o, 0, null)),
        (i = ln(i, o, l, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Hn(t, e.child, null, l),
        (t.child.memoizedState = Zl(l)),
        (t.memoizedState = ql),
        i);
  if (!(t.mode & 1)) return po(e, t, l, null);
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(N(419))), (r = ol(i, r, void 0)), po(e, t, l, r);
  }
  if (((u = (l & e.childLanes) !== 0), Oe || u)) {
    if (((r = de), r !== null)) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | l) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Pt(e, o), it(r, e, o, -1));
    }
    return ou(), (r = ol(Error(N(421)))), po(e, t, l, r);
  }
  return o.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Km.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ue = $t(o.nextSibling)),
      (je = t),
      (G = !0),
      (rt = null),
      e !== null &&
        ((Ve[We++] = St),
        (Ve[We++] = Et),
        (Ve[We++] = an),
        (St = e.id),
        (Et = e.overflow),
        (an = t)),
      (t = Zs(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Oa(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ql(e.return, t, n);
}
function il(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function sd(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((xe(e, t, r.children, n), (r = q.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Oa(e, n, t);
        else if (e.tag === 19) Oa(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((V(q, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Xo(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          il(t, !1, o, n, i);
        break;
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Xo(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        il(t, !0, n, null, i);
        break;
      case 'together':
        il(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function No(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function _t(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (fn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Qt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Qt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Im(e, t, n) {
  switch (t.tag) {
    case 3:
      id(t), $n();
      break;
    case 5:
      If(t);
      break;
    case 1:
      Ae(t.type) && Vo(t);
      break;
    case 4:
      Ws(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      V(Ko, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (V(q, q.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? ld(e, t, n)
          : (V(q, q.current & 1),
            (e = _t(e, t, n)),
            e !== null ? e.sibling : null);
      V(q, q.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return sd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        V(q, q.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), rd(e, t, n);
  }
  return _t(e, t, n);
}
var ud, bl, ad, cd;
ud = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
bl = function () {};
ad = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), rn(pt.current);
    var i = null;
    switch (n) {
      case 'input':
        (o = El(e, o)), (r = El(e, r)), (i = []);
        break;
      case 'select':
        (o = b({}, o, { value: void 0 })),
          (r = b({}, r, { value: void 0 })),
          (i = []);
        break;
      case 'textarea':
        (o = Cl(e, o)), (r = Cl(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = $o);
    }
    Pl(n, r);
    var l;
    n = null;
    for (a in o)
      if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null)
        if (a === 'style') {
          var u = o[a];
          for (l in u) u.hasOwnProperty(l) && (n || (n = {}), (n[l] = ''));
        } else
          a !== 'dangerouslySetInnerHTML' &&
            a !== 'children' &&
            a !== 'suppressContentEditableWarning' &&
            a !== 'suppressHydrationWarning' &&
            a !== 'autoFocus' &&
            (Er.hasOwnProperty(a)
              ? i || (i = [])
              : (i = i || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (
        ((u = o != null ? o[a] : void 0),
        r.hasOwnProperty(a) && s !== u && (s != null || u != null))
      )
        if (a === 'style')
          if (u) {
            for (l in u)
              !u.hasOwnProperty(l) ||
                (s && s.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ''));
            for (l in s)
              s.hasOwnProperty(l) &&
                u[l] !== s[l] &&
                (n || (n = {}), (n[l] = s[l]));
          } else n || (i || (i = []), i.push(a, n)), (n = s);
        else
          a === 'dangerouslySetInnerHTML'
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(a, s))
            : a === 'children'
            ? (typeof s != 'string' && typeof s != 'number') ||
              (i = i || []).push(a, '' + s)
            : a !== 'suppressContentEditableWarning' &&
              a !== 'suppressHydrationWarning' &&
              (Er.hasOwnProperty(a)
                ? (s != null && a === 'onScroll' && Q('scroll', e),
                  i || u === s || (i = []))
                : (i = i || []).push(a, s));
    }
    n && (i = i || []).push('style', n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
cd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function or(e, t) {
  if (!G)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ve(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Dm(e, t, n) {
  var r = t.pendingProps;
  switch ((zs(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ve(t), null;
    case 1:
      return Ae(t.type) && Ho(), ve(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Vn(),
        K(Le),
        K(Se),
        Ks(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (co(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), rt !== null && (ss(rt), (rt = null)))),
        bl(e, t),
        ve(t),
        null
      );
    case 5:
      Qs(t);
      var o = rn(Mr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        ad(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return ve(t), null;
        }
        if (((e = rn(pt.current)), co(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[ct] = t), (r[Lr] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              Q('cancel', r), Q('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              Q('load', r);
              break;
            case 'video':
            case 'audio':
              for (o = 0; o < cr.length; o++) Q(cr[o], r);
              break;
            case 'source':
              Q('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              Q('error', r), Q('load', r);
              break;
            case 'details':
              Q('toggle', r);
              break;
            case 'input':
              ju(r, i), Q('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                Q('invalid', r);
              break;
            case 'textarea':
              $u(r, i), Q('invalid', r);
          }
          Pl(n, i), (o = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var u = i[l];
              l === 'children'
                ? typeof u == 'string'
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      ao(r.textContent, u, e),
                    (o = ['children', u]))
                  : typeof u == 'number' &&
                    r.textContent !== '' + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      ao(r.textContent, u, e),
                    (o = ['children', '' + u]))
                : Er.hasOwnProperty(l) &&
                  u != null &&
                  l === 'onScroll' &&
                  Q('scroll', r);
            }
          switch (n) {
            case 'input':
              to(r), Bu(r, i, !0);
              break;
            case 'textarea':
              to(r), Hu(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = $o);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Fc(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = l.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === 'select' &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[ct] = t),
            (e[Lr] = r),
            ud(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = _l(n, r)), n)) {
              case 'dialog':
                Q('cancel', e), Q('close', e), (o = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                Q('load', e), (o = r);
                break;
              case 'video':
              case 'audio':
                for (o = 0; o < cr.length; o++) Q(cr[o], e);
                o = r;
                break;
              case 'source':
                Q('error', e), (o = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                Q('error', e), Q('load', e), (o = r);
                break;
              case 'details':
                Q('toggle', e), (o = r);
                break;
              case 'input':
                ju(e, r), (o = El(e, r)), Q('invalid', e);
                break;
              case 'option':
                o = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = b({}, r, { value: void 0 })),
                  Q('invalid', e);
                break;
              case 'textarea':
                $u(e, r), (o = Cl(e, r)), Q('invalid', e);
                break;
              default:
                o = r;
            }
            Pl(n, o), (u = o);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === 'style'
                  ? jc(e, s)
                  : i === 'dangerouslySetInnerHTML'
                  ? ((s = s ? s.__html : void 0), s != null && zc(e, s))
                  : i === 'children'
                  ? typeof s == 'string'
                    ? (n !== 'textarea' || s !== '') && xr(e, s)
                    : typeof s == 'number' && xr(e, '' + s)
                  : i !== 'suppressContentEditableWarning' &&
                    i !== 'suppressHydrationWarning' &&
                    i !== 'autoFocus' &&
                    (Er.hasOwnProperty(i)
                      ? s != null && i === 'onScroll' && Q('scroll', e)
                      : s != null && xs(e, i, s, l));
              }
            switch (n) {
              case 'input':
                to(e), Bu(e, r, !1);
                break;
              case 'textarea':
                to(e), Hu(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + Kt(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Mn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Mn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == 'function' && (e.onclick = $o);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ve(t), null;
    case 6:
      if (e && t.stateNode != null) cd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(N(166));
        if (((n = rn(Mr.current)), rn(pt.current), co(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[ct] = t),
            (i = r.nodeValue !== n) && ((e = je), e !== null))
          )
            switch (e.tag) {
              case 3:
                ao(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ao(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[ct] = t),
            (t.stateNode = r);
      }
      return ve(t), null;
    case 13:
      if (
        (K(q),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (G && Ue !== null && t.mode & 1 && !(t.flags & 128))
          _f(), $n(), (t.flags |= 98560), (i = !1);
        else if (((i = co(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(N(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(N(317));
            i[ct] = t;
          } else
            $n(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ve(t), (i = !1);
        } else rt !== null && (ss(rt), (rt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || q.current & 1 ? ce === 0 && (ce = 3) : ou())),
          t.updateQueue !== null && (t.flags |= 4),
          ve(t),
          null);
    case 4:
      return (
        Vn(), bl(e, t), e === null && Tr(t.stateNode.containerInfo), ve(t), null
      );
    case 10:
      return $s(t.type._context), ve(t), null;
    case 17:
      return Ae(t.type) && Ho(), ve(t), null;
    case 19:
      if ((K(q), (i = t.memoizedState), i === null)) return ve(t), null;
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) or(i, !1);
        else {
          if (ce !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = Xo(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    or(i, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return V(q, (q.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ne() > Qn &&
            ((t.flags |= 128), (r = !0), or(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Xo(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              or(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !l.alternate && !G)
            )
              return ve(t), null;
          } else
            2 * ne() - i.renderingStartTime > Qn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), or(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = i.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (i.last = l));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ne()),
          (t.sibling = null),
          (n = q.current),
          V(q, r ? (n & 1) | 2 : n & 1),
          t)
        : (ve(t), null);
    case 22:
    case 23:
      return (
        ru(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ze & 1073741824 && (ve(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ve(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function Fm(e, t) {
  switch ((zs(t), t.tag)) {
    case 1:
      return (
        Ae(t.type) && Ho(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Vn(),
        K(Le),
        K(Se),
        Ks(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Qs(t), null;
    case 13:
      if ((K(q), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(N(340));
        $n();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return K(q), null;
    case 4:
      return Vn(), null;
    case 10:
      return $s(t.type._context), null;
    case 22:
    case 23:
      return ru(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ho = !1,
  we = !1,
  zm = typeof WeakSet == 'function' ? WeakSet : Set,
  O = null;
function On(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        te(e, t, r);
      }
    else n.current = null;
}
function es(e, t, n) {
  try {
    n();
  } catch (r) {
    te(e, t, r);
  }
}
var La = !1;
function Um(e, t) {
  if (((zl = Uo), (e = hf()), Ds(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            u = -1,
            s = -1,
            a = 0,
            f = 0,
            c = e,
            d = null;
          t: for (;;) {
            for (
              var v;
              c !== n || (o !== 0 && c.nodeType !== 3) || (u = l + o),
                c !== i || (r !== 0 && c.nodeType !== 3) || (s = l + r),
                c.nodeType === 3 && (l += c.nodeValue.length),
                (v = c.firstChild) !== null;

            )
              (d = c), (c = v);
            for (;;) {
              if (c === e) break t;
              if (
                (d === n && ++a === o && (u = l),
                d === i && ++f === r && (s = l),
                (v = c.nextSibling) !== null)
              )
                break;
              (c = d), (d = c.parentNode);
            }
            c = v;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ul = { focusedElem: e, selectionRange: n }, Uo = !1, O = t; O !== null; )
    if (((t = O), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (O = e);
    else
      for (; O !== null; ) {
        t = O;
        try {
          var m = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (m !== null) {
                  var g = m.memoizedProps,
                    S = m.memoizedState,
                    h = t.stateNode,
                    p = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : tt(t.type, g),
                      S,
                    );
                  h.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = '')
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(N(163));
            }
        } catch (w) {
          te(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (O = e);
          break;
        }
        O = t.return;
      }
  return (m = La), (La = !1), m;
}
function gr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && es(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function yi(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ts(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function fd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), fd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[ct], delete t[Lr], delete t[$l], delete t[Sm], delete t[Em])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function dd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Aa(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || dd(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ns(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = $o));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ns(e, t, n), e = e.sibling; e !== null; ) ns(e, t, n), (e = e.sibling);
}
function rs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (rs(e, t, n), e = e.sibling; e !== null; ) rs(e, t, n), (e = e.sibling);
}
var he = null,
  nt = !1;
function Tt(e, t, n) {
  for (n = n.child; n !== null; ) pd(e, t, n), (n = n.sibling);
}
function pd(e, t, n) {
  if (dt && typeof dt.onCommitFiberUnmount == 'function')
    try {
      dt.onCommitFiberUnmount(ui, n);
    } catch {}
  switch (n.tag) {
    case 5:
      we || On(n, t);
    case 6:
      var r = he,
        o = nt;
      (he = null),
        Tt(e, t, n),
        (he = r),
        (nt = o),
        he !== null &&
          (nt
            ? ((e = he),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : he.removeChild(n.stateNode));
      break;
    case 18:
      he !== null &&
        (nt
          ? ((e = he),
            (n = n.stateNode),
            e.nodeType === 8
              ? Zi(e.parentNode, n)
              : e.nodeType === 1 && Zi(e, n),
            Pr(e))
          : Zi(he, n.stateNode));
      break;
    case 4:
      (r = he),
        (o = nt),
        (he = n.stateNode.containerInfo),
        (nt = !0),
        Tt(e, t, n),
        (he = r),
        (nt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !we &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            l = i.destroy;
          (i = i.tag),
            l !== void 0 && (i & 2 || i & 4) && es(n, t, l),
            (o = o.next);
        } while (o !== r);
      }
      Tt(e, t, n);
      break;
    case 1:
      if (
        !we &&
        (On(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          te(n, t, u);
        }
      Tt(e, t, n);
      break;
    case 21:
      Tt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((we = (r = we) || n.memoizedState !== null), Tt(e, t, n), (we = r))
        : Tt(e, t, n);
      break;
    default:
      Tt(e, t, n);
  }
}
function Ma(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new zm()),
      t.forEach(function (r) {
        var o = Gm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function et(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          l = t,
          u = l;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (he = u.stateNode), (nt = !1);
              break e;
            case 3:
              (he = u.stateNode.containerInfo), (nt = !0);
              break e;
            case 4:
              (he = u.stateNode.containerInfo), (nt = !0);
              break e;
          }
          u = u.return;
        }
        if (he === null) throw Error(N(160));
        pd(i, l, o), (he = null), (nt = !1);
        var s = o.alternate;
        s !== null && (s.return = null), (o.return = null);
      } catch (a) {
        te(o, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) hd(t, e), (t = t.sibling);
}
function hd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((et(t, e), ut(e), r & 4)) {
        try {
          gr(3, e, e.return), yi(3, e);
        } catch (g) {
          te(e, e.return, g);
        }
        try {
          gr(5, e, e.return);
        } catch (g) {
          te(e, e.return, g);
        }
      }
      break;
    case 1:
      et(t, e), ut(e), r & 512 && n !== null && On(n, n.return);
      break;
    case 5:
      if (
        (et(t, e),
        ut(e),
        r & 512 && n !== null && On(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          xr(o, '');
        } catch (g) {
          te(e, e.return, g);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === 'input' && i.type === 'radio' && i.name != null && Ic(o, i),
              _l(u, l);
            var a = _l(u, i);
            for (l = 0; l < s.length; l += 2) {
              var f = s[l],
                c = s[l + 1];
              f === 'style'
                ? jc(o, c)
                : f === 'dangerouslySetInnerHTML'
                ? zc(o, c)
                : f === 'children'
                ? xr(o, c)
                : xs(o, f, c, a);
            }
            switch (u) {
              case 'input':
                xl(o, i);
                break;
              case 'textarea':
                Dc(o, i);
                break;
              case 'select':
                var d = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var v = i.value;
                v != null
                  ? Mn(o, !!i.multiple, v, !1)
                  : d !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Mn(o, !!i.multiple, i.defaultValue, !0)
                      : Mn(o, !!i.multiple, i.multiple ? [] : '', !1));
            }
            o[Lr] = i;
          } catch (g) {
            te(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((et(t, e), ut(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (g) {
          te(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (et(t, e), ut(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Pr(t.containerInfo);
        } catch (g) {
          te(e, e.return, g);
        }
      break;
    case 4:
      et(t, e), ut(e);
      break;
    case 13:
      et(t, e),
        ut(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (tu = ne())),
        r & 4 && Ma(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((we = (a = we) || f), et(t, e), (we = a)) : et(t, e),
        ut(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !f && e.mode & 1)
        )
          for (O = e, f = e.child; f !== null; ) {
            for (c = O = f; O !== null; ) {
              switch (((d = O), (v = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  gr(4, d, d.return);
                  break;
                case 1:
                  On(d, d.return);
                  var m = d.stateNode;
                  if (typeof m.componentWillUnmount == 'function') {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (m.props = t.memoizedProps),
                        (m.state = t.memoizedState),
                        m.componentWillUnmount();
                    } catch (g) {
                      te(r, n, g);
                    }
                  }
                  break;
                case 5:
                  On(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Da(c);
                    continue;
                  }
              }
              v !== null ? ((v.return = d), (O = v)) : Da(c);
            }
            f = f.sibling;
          }
        e: for (f = null, c = e; ; ) {
          if (c.tag === 5) {
            if (f === null) {
              f = c;
              try {
                (o = c.stateNode),
                  a
                    ? ((i = o.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((u = c.stateNode),
                      (s = c.memoizedProps.style),
                      (l =
                        s != null && s.hasOwnProperty('display')
                          ? s.display
                          : null),
                      (u.style.display = Uc('display', l)));
              } catch (g) {
                te(e, e.return, g);
              }
            }
          } else if (c.tag === 6) {
            if (f === null)
              try {
                c.stateNode.nodeValue = a ? '' : c.memoizedProps;
              } catch (g) {
                te(e, e.return, g);
              }
          } else if (
            ((c.tag !== 22 && c.tag !== 23) ||
              c.memoizedState === null ||
              c === e) &&
            c.child !== null
          ) {
            (c.child.return = c), (c = c.child);
            continue;
          }
          if (c === e) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === e) break e;
            f === c && (f = null), (c = c.return);
          }
          f === c && (f = null), (c.sibling.return = c.return), (c = c.sibling);
        }
      }
      break;
    case 19:
      et(t, e), ut(e), r & 4 && Ma(e);
      break;
    case 21:
      break;
    default:
      et(t, e), ut(e);
  }
}
function ut(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (dd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (xr(o, ''), (r.flags &= -33));
          var i = Aa(e);
          rs(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            u = Aa(e);
          ns(e, u, l);
          break;
        default:
          throw Error(N(161));
      }
    } catch (s) {
      te(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function jm(e, t, n) {
  (O = e), md(e);
}
function md(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var o = O,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || ho;
      if (!l) {
        var u = o.alternate,
          s = (u !== null && u.memoizedState !== null) || we;
        u = ho;
        var a = we;
        if (((ho = l), (we = s) && !a))
          for (O = o; O !== null; )
            (l = O),
              (s = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? Fa(o)
                : s !== null
                ? ((s.return = l), (O = s))
                : Fa(o);
        for (; i !== null; ) (O = i), md(i), (i = i.sibling);
        (O = o), (ho = u), (we = a);
      }
      Ia(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (O = i)) : Ia(e);
  }
}
function Ia(e) {
  for (; O !== null; ) {
    var t = O;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              we || yi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !we)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : tt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && ga(t, i, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ga(t, l, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    s.autoFocus && n.focus();
                    break;
                  case 'img':
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var f = a.memoizedState;
                  if (f !== null) {
                    var c = f.dehydrated;
                    c !== null && Pr(c);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(N(163));
          }
        we || (t.flags & 512 && ts(t));
      } catch (d) {
        te(t, t.return, d);
      }
    }
    if (t === e) {
      O = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function Da(e) {
  for (; O !== null; ) {
    var t = O;
    if (t === e) {
      O = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function Fa(e) {
  for (; O !== null; ) {
    var t = O;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            yi(4, t);
          } catch (s) {
            te(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              te(t, o, s);
            }
          }
          var i = t.return;
          try {
            ts(t);
          } catch (s) {
            te(t, i, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            ts(t);
          } catch (s) {
            te(t, l, s);
          }
      }
    } catch (s) {
      te(t, t.return, s);
    }
    if (t === e) {
      O = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (O = u);
      break;
    }
    O = t.return;
  }
}
var Bm = Math.ceil,
  Zo = Rt.ReactCurrentDispatcher,
  bs = Rt.ReactCurrentOwner,
  Ge = Rt.ReactCurrentBatchConfig,
  j = 0,
  de = null,
  oe = null,
  me = 0,
  ze = 0,
  Ln = Xt(0),
  ce = 0,
  zr = null,
  fn = 0,
  gi = 0,
  eu = 0,
  vr = null,
  Te = null,
  tu = 0,
  Qn = 1 / 0,
  vt = null,
  bo = !1,
  os = null,
  Vt = null,
  mo = !1,
  Ft = null,
  ei = 0,
  wr = 0,
  is = null,
  Po = -1,
  _o = 0;
function ke() {
  return j & 6 ? ne() : Po !== -1 ? Po : (Po = ne());
}
function Wt(e) {
  return e.mode & 1
    ? j & 2 && me !== 0
      ? me & -me
      : km.transition !== null
      ? (_o === 0 && (_o = qc()), _o)
      : ((e = H),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : of(e.type))),
        e)
    : 1;
}
function it(e, t, n, r) {
  if (50 < wr) throw ((wr = 0), (is = null), Error(N(185)));
  Qr(e, n, r),
    (!(j & 2) || e !== de) &&
      (e === de && (!(j & 2) && (gi |= n), ce === 4 && It(e, me)),
      Me(e, r),
      n === 1 && j === 0 && !(t.mode & 1) && ((Qn = ne() + 500), pi && Jt()));
}
function Me(e, t) {
  var n = e.callbackNode;
  kh(e, t);
  var r = zo(e, e === de ? me : 0);
  if (r === 0)
    n !== null && Qu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Qu(n), t === 1))
      e.tag === 0 ? xm(za.bind(null, e)) : Cf(za.bind(null, e)),
        vm(function () {
          !(j & 6) && Jt();
        }),
        (n = null);
    else {
      switch (Zc(r)) {
        case 1:
          n = _s;
          break;
        case 4:
          n = Xc;
          break;
        case 16:
          n = Fo;
          break;
        case 536870912:
          n = Jc;
          break;
        default:
          n = Fo;
      }
      n = kd(n, yd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function yd(e, t) {
  if (((Po = -1), (_o = 0), j & 6)) throw Error(N(327));
  var n = e.callbackNode;
  if (Un() && e.callbackNode !== n) return null;
  var r = zo(e, e === de ? me : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ti(e, r);
  else {
    t = r;
    var o = j;
    j |= 2;
    var i = vd();
    (de !== e || me !== t) && ((vt = null), (Qn = ne() + 500), on(e, t));
    do
      try {
        Vm();
        break;
      } catch (u) {
        gd(e, u);
      }
    while (1);
    Bs(),
      (Zo.current = i),
      (j = o),
      oe !== null ? (t = 0) : ((de = null), (me = 0), (t = ce));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Al(e)), o !== 0 && ((r = o), (t = ls(e, o)))), t === 1)
    )
      throw ((n = zr), on(e, 0), It(e, r), Me(e, ne()), n);
    if (t === 6) It(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !$m(o) &&
          ((t = ti(e, r)),
          t === 2 && ((i = Al(e)), i !== 0 && ((r = i), (t = ls(e, i)))),
          t === 1))
      )
        throw ((n = zr), on(e, 0), It(e, r), Me(e, ne()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          en(e, Te, vt);
          break;
        case 3:
          if (
            (It(e, r), (r & 130023424) === r && ((t = tu + 500 - ne()), 10 < t))
          ) {
            if (zo(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              ke(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Bl(en.bind(null, e, Te, vt), t);
            break;
          }
          en(e, Te, vt);
          break;
        case 4:
          if ((It(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - ot(r);
            (i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i);
          }
          if (
            ((r = o),
            (r = ne() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Bm(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Bl(en.bind(null, e, Te, vt), r);
            break;
          }
          en(e, Te, vt);
          break;
        case 5:
          en(e, Te, vt);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return Me(e, ne()), e.callbackNode === n ? yd.bind(null, e) : null;
}
function ls(e, t) {
  var n = vr;
  return (
    e.current.memoizedState.isDehydrated && (on(e, t).flags |= 256),
    (e = ti(e, t)),
    e !== 2 && ((t = Te), (Te = n), t !== null && ss(t)),
    e
  );
}
function ss(e) {
  Te === null ? (Te = e) : Te.push.apply(Te, e);
}
function $m(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!st(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function It(e, t) {
  for (
    t &= ~eu,
      t &= ~gi,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - ot(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function za(e) {
  if (j & 6) throw Error(N(327));
  Un();
  var t = zo(e, 0);
  if (!(t & 1)) return Me(e, ne()), null;
  var n = ti(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Al(e);
    r !== 0 && ((t = r), (n = ls(e, r)));
  }
  if (n === 1) throw ((n = zr), on(e, 0), It(e, t), Me(e, ne()), n);
  if (n === 6) throw Error(N(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    en(e, Te, vt),
    Me(e, ne()),
    null
  );
}
function nu(e, t) {
  var n = j;
  j |= 1;
  try {
    return e(t);
  } finally {
    (j = n), j === 0 && ((Qn = ne() + 500), pi && Jt());
  }
}
function dn(e) {
  Ft !== null && Ft.tag === 0 && !(j & 6) && Un();
  var t = j;
  j |= 1;
  var n = Ge.transition,
    r = H;
  try {
    if (((Ge.transition = null), (H = 1), e)) return e();
  } finally {
    (H = r), (Ge.transition = n), (j = t), !(j & 6) && Jt();
  }
}
function ru() {
  (ze = Ln.current), K(Ln);
}
function on(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), gm(n)), oe !== null))
    for (n = oe.return; n !== null; ) {
      var r = n;
      switch ((zs(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ho();
          break;
        case 3:
          Vn(), K(Le), K(Se), Ks();
          break;
        case 5:
          Qs(r);
          break;
        case 4:
          Vn();
          break;
        case 13:
          K(q);
          break;
        case 19:
          K(q);
          break;
        case 10:
          $s(r.type._context);
          break;
        case 22:
        case 23:
          ru();
      }
      n = n.return;
    }
  if (
    ((de = e),
    (oe = e = Qt(e.current, null)),
    (me = ze = t),
    (ce = 0),
    (zr = null),
    (eu = gi = fn = 0),
    (Te = vr = null),
    nn !== null)
  ) {
    for (t = 0; t < nn.length; t++)
      if (((n = nn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = o), (r.next = l);
        }
        n.pending = r;
      }
    nn = null;
  }
  return e;
}
function gd(e, t) {
  do {
    var n = oe;
    try {
      if ((Bs(), (ko.current = qo), Jo)) {
        for (var r = Z.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Jo = !1;
      }
      if (
        ((cn = 0),
        (fe = ae = Z = null),
        (yr = !1),
        (Ir = 0),
        (bs.current = null),
        n === null || n.return === null)
      ) {
        (ce = 1), (zr = t), (oe = null);
        break;
      }
      e: {
        var i = e,
          l = n.return,
          u = n,
          s = t;
        if (
          ((t = me),
          (u.flags |= 32768),
          s !== null && typeof s == 'object' && typeof s.then == 'function')
        ) {
          var a = s,
            f = u,
            c = f.tag;
          if (!(f.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var d = f.alternate;
            d
              ? ((f.updateQueue = d.updateQueue),
                (f.memoizedState = d.memoizedState),
                (f.lanes = d.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var v = Ca(l);
          if (v !== null) {
            (v.flags &= -257),
              Na(v, l, u, i, t),
              v.mode & 1 && ka(i, a, t),
              (t = v),
              (s = a);
            var m = t.updateQueue;
            if (m === null) {
              var g = new Set();
              g.add(s), (t.updateQueue = g);
            } else m.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              ka(i, a, t), ou();
              break e;
            }
            s = Error(N(426));
          }
        } else if (G && u.mode & 1) {
          var S = Ca(l);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              Na(S, l, u, i, t),
              Us(Wn(s, u));
            break e;
          }
        }
        (i = s = Wn(s, u)),
          ce !== 4 && (ce = 2),
          vr === null ? (vr = [i]) : vr.push(i),
          (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var h = ed(i, s, t);
              ya(i, h);
              break e;
            case 1:
              u = s;
              var p = i.type,
                y = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof p.getDerivedStateFromError == 'function' ||
                  (y !== null &&
                    typeof y.componentDidCatch == 'function' &&
                    (Vt === null || !Vt.has(y))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var w = td(i, u, t);
                ya(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Sd(n);
    } catch (x) {
      (t = x), oe === n && n !== null && (oe = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function vd() {
  var e = Zo.current;
  return (Zo.current = qo), e === null ? qo : e;
}
function ou() {
  (ce === 0 || ce === 3 || ce === 2) && (ce = 4),
    de === null || (!(fn & 268435455) && !(gi & 268435455)) || It(de, me);
}
function ti(e, t) {
  var n = j;
  j |= 2;
  var r = vd();
  (de !== e || me !== t) && ((vt = null), on(e, t));
  do
    try {
      Hm();
      break;
    } catch (o) {
      gd(e, o);
    }
  while (1);
  if ((Bs(), (j = n), (Zo.current = r), oe !== null)) throw Error(N(261));
  return (de = null), (me = 0), ce;
}
function Hm() {
  for (; oe !== null; ) wd(oe);
}
function Vm() {
  for (; oe !== null && !hh(); ) wd(oe);
}
function wd(e) {
  var t = xd(e.alternate, e, ze);
  (e.memoizedProps = e.pendingProps),
    t === null ? Sd(e) : (oe = t),
    (bs.current = null);
}
function Sd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Fm(n, t)), n !== null)) {
        (n.flags &= 32767), (oe = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ce = 6), (oe = null);
        return;
      }
    } else if (((n = Dm(n, t, ze)), n !== null)) {
      oe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      oe = t;
      return;
    }
    oe = t = e;
  } while (t !== null);
  ce === 0 && (ce = 5);
}
function en(e, t, n) {
  var r = H,
    o = Ge.transition;
  try {
    (Ge.transition = null), (H = 1), Wm(e, t, n, r);
  } finally {
    (Ge.transition = o), (H = r);
  }
  return null;
}
function Wm(e, t, n, r) {
  do Un();
  while (Ft !== null);
  if (j & 6) throw Error(N(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(N(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Ch(e, i),
    e === de && ((oe = de = null), (me = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      mo ||
      ((mo = !0),
      kd(Fo, function () {
        return Un(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Ge.transition), (Ge.transition = null);
    var l = H;
    H = 1;
    var u = j;
    (j |= 4),
      (bs.current = null),
      Um(e, n),
      hd(n, e),
      cm(Ul),
      (Uo = !!zl),
      (Ul = zl = null),
      (e.current = n),
      jm(n),
      mh(),
      (j = u),
      (H = l),
      (Ge.transition = i);
  } else e.current = n;
  if (
    (mo && ((mo = !1), (Ft = e), (ei = o)),
    (i = e.pendingLanes),
    i === 0 && (Vt = null),
    vh(n.stateNode),
    Me(e, ne()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (bo) throw ((bo = !1), (e = os), (os = null), e);
  return (
    ei & 1 && e.tag !== 0 && Un(),
    (i = e.pendingLanes),
    i & 1 ? (e === is ? wr++ : ((wr = 0), (is = e))) : (wr = 0),
    Jt(),
    null
  );
}
function Un() {
  if (Ft !== null) {
    var e = Zc(ei),
      t = Ge.transition,
      n = H;
    try {
      if (((Ge.transition = null), (H = 16 > e ? 16 : e), Ft === null))
        var r = !1;
      else {
        if (((e = Ft), (Ft = null), (ei = 0), j & 6)) throw Error(N(331));
        var o = j;
        for (j |= 4, O = e.current; O !== null; ) {
          var i = O,
            l = i.child;
          if (O.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (O = a; O !== null; ) {
                  var f = O;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      gr(8, f, i);
                  }
                  var c = f.child;
                  if (c !== null) (c.return = f), (O = c);
                  else
                    for (; O !== null; ) {
                      f = O;
                      var d = f.sibling,
                        v = f.return;
                      if ((fd(f), f === a)) {
                        O = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = v), (O = d);
                        break;
                      }
                      O = v;
                    }
                }
              }
              var m = i.alternate;
              if (m !== null) {
                var g = m.child;
                if (g !== null) {
                  m.child = null;
                  do {
                    var S = g.sibling;
                    (g.sibling = null), (g = S);
                  } while (g !== null);
                }
              }
              O = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (O = l);
          else
            e: for (; O !== null; ) {
              if (((i = O), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    gr(9, i, i.return);
                }
              var h = i.sibling;
              if (h !== null) {
                (h.return = i.return), (O = h);
                break e;
              }
              O = i.return;
            }
        }
        var p = e.current;
        for (O = p; O !== null; ) {
          l = O;
          var y = l.child;
          if (l.subtreeFlags & 2064 && y !== null) (y.return = l), (O = y);
          else
            e: for (l = p; O !== null; ) {
              if (((u = O), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      yi(9, u);
                  }
                } catch (x) {
                  te(u, u.return, x);
                }
              if (u === l) {
                O = null;
                break e;
              }
              var w = u.sibling;
              if (w !== null) {
                (w.return = u.return), (O = w);
                break e;
              }
              O = u.return;
            }
        }
        if (
          ((j = o), Jt(), dt && typeof dt.onPostCommitFiberRoot == 'function')
        )
          try {
            dt.onPostCommitFiberRoot(ui, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (H = n), (Ge.transition = t);
    }
  }
  return !1;
}
function Ua(e, t, n) {
  (t = Wn(n, t)),
    (t = ed(e, t, 1)),
    (e = Ht(e, t, 1)),
    (t = ke()),
    e !== null && (Qr(e, 1, t), Me(e, t));
}
function te(e, t, n) {
  if (e.tag === 3) Ua(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ua(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (Vt === null || !Vt.has(r)))
        ) {
          (e = Wn(n, e)),
            (e = td(t, e, 1)),
            (t = Ht(t, e, 1)),
            (e = ke()),
            t !== null && (Qr(t, 1, e), Me(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Qm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ke()),
    (e.pingedLanes |= e.suspendedLanes & n),
    de === e &&
      (me & n) === n &&
      (ce === 4 || (ce === 3 && (me & 130023424) === me && 500 > ne() - tu)
        ? on(e, 0)
        : (eu |= n)),
    Me(e, t);
}
function Ed(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = oo), (oo <<= 1), !(oo & 130023424) && (oo = 4194304))
      : (t = 1));
  var n = ke();
  (e = Pt(e, t)), e !== null && (Qr(e, t, n), Me(e, n));
}
function Km(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Ed(e, n);
}
function Gm(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(N(314));
  }
  r !== null && r.delete(t), Ed(e, n);
}
var xd;
xd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Le.current) Oe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Oe = !1), Im(e, t, n);
      Oe = !!(e.flags & 131072);
    }
  else (Oe = !1), G && t.flags & 1048576 && Nf(t, Qo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      No(e, t), (e = t.pendingProps);
      var o = Bn(t, Se.current);
      zn(t, n), (o = Ys(null, t, r, e, o, n));
      var i = Xs();
      return (
        (t.flags |= 1),
        typeof o == 'object' &&
        o !== null &&
        typeof o.render == 'function' &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ae(r) ? ((i = !0), Vo(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Vs(t),
            (o.updater = hi),
            (t.stateNode = o),
            (o._reactInternals = t),
            Gl(t, r, e, n),
            (t = Jl(null, t, r, !0, i, n)))
          : ((t.tag = 0), G && i && Fs(t), xe(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (No(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Xm(r)),
          (e = tt(r, e)),
          o)
        ) {
          case 0:
            t = Xl(null, t, r, e, n);
            break e;
          case 1:
            t = Ra(null, t, r, e, n);
            break e;
          case 11:
            t = Pa(null, t, r, e, n);
            break e;
          case 14:
            t = _a(null, t, r, tt(r.type, e), n);
            break e;
        }
        throw Error(N(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : tt(r, o)),
        Xl(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : tt(r, o)),
        Ra(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((id(t), e === null)) throw Error(N(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Tf(e, t),
          Yo(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Wn(Error(N(423)), t)), (t = Ta(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Wn(Error(N(424)), t)), (t = Ta(e, t, r, n, o));
            break e;
          } else
            for (
              Ue = $t(t.stateNode.containerInfo.firstChild),
                je = t,
                G = !0,
                rt = null,
                n = Mf(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if (($n(), r === o)) {
            t = _t(e, t, n);
            break e;
          }
          xe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        If(t),
        e === null && Wl(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        jl(r, o) ? (l = null) : i !== null && jl(r, i) && (t.flags |= 32),
        od(e, t),
        xe(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && Wl(t), null;
    case 13:
      return ld(e, t, n);
    case 4:
      return (
        Ws(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Hn(t, null, r, n)) : xe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : tt(r, o)),
        Pa(e, t, r, o, n)
      );
    case 7:
      return xe(e, t, t.pendingProps, n), t.child;
    case 8:
      return xe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return xe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value),
          V(Ko, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (st(i.value, l)) {
            if (i.children === o.children && !Le.current) {
              t = _t(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                l = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = xt(-1, n & -n)), (s.tag = 2);
                      var a = i.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var f = a.pending;
                        f === null
                          ? (s.next = s)
                          : ((s.next = f.next), (f.next = s)),
                          (a.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      Ql(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(N(341));
                (l.lanes |= n),
                  (u = l.alternate),
                  u !== null && (u.lanes |= n),
                  Ql(l, n, t),
                  (l = i.sibling);
              } else l = i.child;
              if (l !== null) l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((i = l.sibling), i !== null)) {
                    (i.return = l.return), (l = i);
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        xe(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        zn(t, n),
        (o = Xe(o)),
        (r = r(o)),
        (t.flags |= 1),
        xe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = tt(r, t.pendingProps)),
        (o = tt(r.type, o)),
        _a(e, t, r, o, n)
      );
    case 15:
      return nd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : tt(r, o)),
        No(e, t),
        (t.tag = 1),
        Ae(r) ? ((e = !0), Vo(t)) : (e = !1),
        zn(t, n),
        Lf(t, r, o),
        Gl(t, r, o, n),
        Jl(null, t, r, !0, e, n)
      );
    case 19:
      return sd(e, t, n);
    case 22:
      return rd(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function kd(e, t) {
  return Yc(e, t);
}
function Ym(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ke(e, t, n, r) {
  return new Ym(e, t, n, r);
}
function iu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Xm(e) {
  if (typeof e == 'function') return iu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Cs)) return 11;
    if (e === Ns) return 14;
  }
  return 2;
}
function Qt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ke(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ro(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == 'function')) iu(e) && (l = 1);
  else if (typeof e == 'string') l = 5;
  else
    e: switch (e) {
      case En:
        return ln(n.children, o, i, t);
      case ks:
        (l = 8), (o |= 8);
        break;
      case gl:
        return (
          (e = Ke(12, n, t, o | 2)), (e.elementType = gl), (e.lanes = i), e
        );
      case vl:
        return (e = Ke(13, n, t, o)), (e.elementType = vl), (e.lanes = i), e;
      case wl:
        return (e = Ke(19, n, t, o)), (e.elementType = wl), (e.lanes = i), e;
      case Lc:
        return vi(n, o, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Tc:
              l = 10;
              break e;
            case Oc:
              l = 9;
              break e;
            case Cs:
              l = 11;
              break e;
            case Ns:
              l = 14;
              break e;
            case Lt:
              (l = 16), (r = null);
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = Ke(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function ln(e, t, n, r) {
  return (e = Ke(7, e, r, t)), (e.lanes = n), e;
}
function vi(e, t, n, r) {
  return (
    (e = Ke(22, e, r, t)),
    (e.elementType = Lc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ll(e, t, n) {
  return (e = Ke(6, e, null, t)), (e.lanes = n), e;
}
function sl(e, t, n) {
  return (
    (t = Ke(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Jm(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = $i(0)),
    (this.expirationTimes = $i(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = $i(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function lu(e, t, n, r, o, i, l, u, s) {
  return (
    (e = new Jm(e, t, n, u, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ke(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Vs(i),
    e
  );
}
function qm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Sn,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Cd(e) {
  if (!e) return Gt;
  e = e._reactInternals;
  e: {
    if (yn(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ae(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ae(n)) return kf(e, n, t);
  }
  return t;
}
function Nd(e, t, n, r, o, i, l, u, s) {
  return (
    (e = lu(n, r, !0, e, o, i, l, u, s)),
    (e.context = Cd(null)),
    (n = e.current),
    (r = ke()),
    (o = Wt(n)),
    (i = xt(r, o)),
    (i.callback = t ?? null),
    Ht(n, i, o),
    (e.current.lanes = o),
    Qr(e, o, r),
    Me(e, r),
    e
  );
}
function wi(e, t, n, r) {
  var o = t.current,
    i = ke(),
    l = Wt(o);
  return (
    (n = Cd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = xt(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ht(o, t, l)),
    e !== null && (it(e, o, l, i), xo(e, o, l)),
    l
  );
}
function ni(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ja(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function su(e, t) {
  ja(e, t), (e = e.alternate) && ja(e, t);
}
function Zm() {
  return null;
}
var Pd =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function uu(e) {
  this._internalRoot = e;
}
Si.prototype.render = uu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  wi(e, t, null, null);
};
Si.prototype.unmount = uu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    dn(function () {
      wi(null, e, null, null);
    }),
      (t[Nt] = null);
  }
};
function Si(e) {
  this._internalRoot = e;
}
Si.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = tf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Mt.length && t !== 0 && t < Mt[n].priority; n++);
    Mt.splice(n, 0, e), n === 0 && rf(e);
  }
};
function au(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ei(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Ba() {}
function bm(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var a = ni(l);
        i.call(a);
      };
    }
    var l = Nd(t, r, e, 0, null, !1, !1, '', Ba);
    return (
      (e._reactRootContainer = l),
      (e[Nt] = l.current),
      Tr(e.nodeType === 8 ? e.parentNode : e),
      dn(),
      l
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == 'function') {
    var u = r;
    r = function () {
      var a = ni(s);
      u.call(a);
    };
  }
  var s = lu(e, 0, !1, null, null, !1, !1, '', Ba);
  return (
    (e._reactRootContainer = s),
    (e[Nt] = s.current),
    Tr(e.nodeType === 8 ? e.parentNode : e),
    dn(function () {
      wi(t, s, n, r);
    }),
    s
  );
}
function xi(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == 'function') {
      var u = o;
      o = function () {
        var s = ni(l);
        u.call(s);
      };
    }
    wi(t, l, e, o);
  } else l = bm(n, t, e, o, r);
  return ni(l);
}
bc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ar(t.pendingLanes);
        n !== 0 &&
          (Rs(t, n | 1), Me(t, ne()), !(j & 6) && ((Qn = ne() + 500), Jt()));
      }
      break;
    case 13:
      dn(function () {
        var r = Pt(e, 1);
        if (r !== null) {
          var o = ke();
          it(r, e, 1, o);
        }
      }),
        su(e, 1);
  }
};
Ts = function (e) {
  if (e.tag === 13) {
    var t = Pt(e, 134217728);
    if (t !== null) {
      var n = ke();
      it(t, e, 134217728, n);
    }
    su(e, 134217728);
  }
};
ef = function (e) {
  if (e.tag === 13) {
    var t = Wt(e),
      n = Pt(e, t);
    if (n !== null) {
      var r = ke();
      it(n, e, t, r);
    }
    su(e, t);
  }
};
tf = function () {
  return H;
};
nf = function (e, t) {
  var n = H;
  try {
    return (H = e), t();
  } finally {
    H = n;
  }
};
Tl = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((xl(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = di(r);
            if (!o) throw Error(N(90));
            Mc(r), xl(r, o);
          }
        }
      }
      break;
    case 'textarea':
      Dc(e, n);
      break;
    case 'select':
      (t = n.value), t != null && Mn(e, !!n.multiple, t, !1);
  }
};
Hc = nu;
Vc = dn;
var e0 = { usingClientEntryPoint: !1, Events: [Gr, Nn, di, Bc, $c, nu] },
  ir = {
    findFiberByHostInstance: tn,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  t0 = {
    bundleType: ir.bundleType,
    version: ir.version,
    rendererPackageName: ir.rendererPackageName,
    rendererConfig: ir.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Rt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Kc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ir.findFiberByHostInstance || Zm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var yo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yo.isDisabled && yo.supportsFiber)
    try {
      (ui = yo.inject(t0)), (dt = yo);
    } catch {}
}
$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = e0;
$e.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!au(t)) throw Error(N(200));
  return qm(e, t, null, n);
};
$e.createRoot = function (e, t) {
  if (!au(e)) throw Error(N(299));
  var n = !1,
    r = '',
    o = Pd;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = lu(e, 1, !1, null, null, n, !1, r, o)),
    (e[Nt] = t.current),
    Tr(e.nodeType === 8 ? e.parentNode : e),
    new uu(t)
  );
};
$e.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(N(188))
      : ((e = Object.keys(e).join(',')), Error(N(268, e)));
  return (e = Kc(t)), (e = e === null ? null : e.stateNode), e;
};
$e.flushSync = function (e) {
  return dn(e);
};
$e.hydrate = function (e, t, n) {
  if (!Ei(t)) throw Error(N(200));
  return xi(null, e, t, !0, n);
};
$e.hydrateRoot = function (e, t, n) {
  if (!au(e)) throw Error(N(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = '',
    l = Pd;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = Nd(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[Nt] = t.current),
    Tr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Si(t);
};
$e.render = function (e, t, n) {
  if (!Ei(t)) throw Error(N(200));
  return xi(null, e, t, !1, n);
};
$e.unmountComponentAtNode = function (e) {
  if (!Ei(e)) throw Error(N(40));
  return e._reactRootContainer
    ? (dn(function () {
        xi(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Nt] = null);
        });
      }),
      !0)
    : !1;
};
$e.unstable_batchedUpdates = nu;
$e.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ei(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return xi(e, t, n, !1, r);
};
$e.version = '18.2.0-next-9e3b772b8-20220608';
function _d() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_d);
    } catch (e) {
      console.error(e);
    }
}
_d(), (Cc.exports = $e);
var n0 = Cc.exports,
  Rd,
  $a = n0;
(Rd = $a.createRoot), $a.hydrateRoot;
/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ur() {
  return (
    (Ur = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ur.apply(this, arguments)
  );
}
var zt;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(zt || (zt = {}));
const Ha = 'popstate';
function r0(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: l, hash: u } = r.location;
    return us(
      '',
      { pathname: i, search: l, hash: u },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || 'default',
    );
  }
  function n(r, o) {
    return typeof o == 'string' ? o : Td(o);
  }
  return i0(t, n, null, e);
}
function Ce(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function cu(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function o0() {
  return Math.random().toString(36).substr(2, 8);
}
function Va(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function us(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Ur(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? Jn(t) : t,
      { state: n, key: (t && t.key) || r || o0() },
    )
  );
}
function Td(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function Jn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function i0(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    l = o.history,
    u = zt.Pop,
    s = null,
    a = f();
  a == null && ((a = 0), l.replaceState(Ur({}, l.state, { idx: a }), ''));
  function f() {
    return (l.state || { idx: null }).idx;
  }
  function c() {
    u = zt.Pop;
    let S = f(),
      h = S == null ? null : S - a;
    (a = S), s && s({ action: u, location: g.location, delta: h });
  }
  function d(S, h) {
    u = zt.Push;
    let p = us(g.location, S, h);
    n && n(p, S), (a = f() + 1);
    let y = Va(p, a),
      w = g.createHref(p);
    try {
      l.pushState(y, '', w);
    } catch {
      o.location.assign(w);
    }
    i && s && s({ action: u, location: g.location, delta: 1 });
  }
  function v(S, h) {
    u = zt.Replace;
    let p = us(g.location, S, h);
    n && n(p, S), (a = f());
    let y = Va(p, a),
      w = g.createHref(p);
    l.replaceState(y, '', w),
      i && s && s({ action: u, location: g.location, delta: 0 });
  }
  function m(S) {
    let h = o.location.origin !== 'null' ? o.location.origin : o.location.href,
      p = typeof S == 'string' ? S : Td(S);
    return (
      Ce(
        h,
        'No window.location.(origin|href) available to create URL for href: ' +
          p,
      ),
      new URL(p, h)
    );
  }
  let g = {
    get action() {
      return u;
    },
    get location() {
      return e(o, l);
    },
    listen(S) {
      if (s) throw new Error('A history only accepts one active listener');
      return (
        o.addEventListener(Ha, c),
        (s = S),
        () => {
          o.removeEventListener(Ha, c), (s = null);
        }
      );
    },
    createHref(S) {
      return t(o, S);
    },
    createURL: m,
    encodeLocation(S) {
      let h = m(S);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: d,
    replace: v,
    go(S) {
      return l.go(S);
    },
  };
  return g;
}
var Wa;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(Wa || (Wa = {}));
function l0(e, t, n) {
  n === void 0 && (n = '/');
  let r = typeof t == 'string' ? Jn(t) : t,
    o = Ad(r.pathname || '/', n);
  if (o == null) return null;
  let i = Od(e);
  s0(i);
  let l = null;
  for (let u = 0; l == null && u < i.length; ++u) l = y0(i[u], w0(o));
  return l;
}
function Od(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let o = (i, l, u) => {
    let s = {
      relativePath: u === void 0 ? i.path || '' : u,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: l,
      route: i,
    };
    s.relativePath.startsWith('/') &&
      (Ce(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.',
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let a = sn([r, s.relativePath]),
      f = n.concat(s);
    i.children &&
      i.children.length > 0 &&
      (Ce(
        i.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + a + '".'),
      ),
      Od(i.children, t, f, a)),
      !(i.path == null && !i.index) &&
        t.push({ path: a, score: h0(a, i.index), routesMeta: f });
  };
  return (
    e.forEach((i, l) => {
      var u;
      if (i.path === '' || !((u = i.path) != null && u.includes('?'))) o(i, l);
      else for (let s of Ld(i.path)) o(i, l, s);
    }),
    t
  );
}
function Ld(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith('?'),
    i = n.replace(/\?$/, '');
  if (r.length === 0) return o ? [i, ''] : [i];
  let l = Ld(r.join('/')),
    u = [];
  return (
    u.push(...l.map((s) => (s === '' ? i : [i, s].join('/')))),
    o && u.push(...l),
    u.map((s) => (e.startsWith('/') && s === '' ? '/' : s))
  );
}
function s0(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : m0(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const u0 = /^:\w+$/,
  a0 = 3,
  c0 = 2,
  f0 = 1,
  d0 = 10,
  p0 = -2,
  Qa = (e) => e === '*';
function h0(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(Qa) && (r += p0),
    t && (r += c0),
    n
      .filter((o) => !Qa(o))
      .reduce((o, i) => o + (u0.test(i) ? a0 : i === '' ? f0 : d0), r)
  );
}
function m0(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function y0(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = '/',
    i = [];
  for (let l = 0; l < n.length; ++l) {
    let u = n[l],
      s = l === n.length - 1,
      a = o === '/' ? t : t.slice(o.length) || '/',
      f = g0(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: s },
        a,
      );
    if (!f) return null;
    Object.assign(r, f.params);
    let c = u.route;
    i.push({
      params: r,
      pathname: sn([o, f.pathname]),
      pathnameBase: N0(sn([o, f.pathnameBase])),
      route: c,
    }),
      f.pathnameBase !== '/' && (o = sn([o, f.pathnameBase]));
  }
  return i;
}
function g0(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = v0(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    l = i.replace(/(.)\/+$/, '$1'),
    u = o.slice(1);
  return {
    params: r.reduce((a, f, c) => {
      if (f === '*') {
        let d = u[c] || '';
        l = i.slice(0, i.length - d.length).replace(/(.)\/+$/, '$1');
      }
      return (a[f] = S0(u[c] || '', f)), a;
    }, {}),
    pathname: i,
    pathnameBase: l,
    pattern: e,
  };
}
function v0(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    cu(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".'),
    );
  let r = [],
    o =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
        .replace(/\/:(\w+)/g, (l, u) => (r.push(u), '/([^\\/]+)'));
  return (
    e.endsWith('*')
      ? (r.push('*'),
        (o += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
      ? (o += '\\/*$')
      : e !== '' && e !== '/' && (o += '(?:(?=\\/|$))'),
    [new RegExp(o, t ? void 0 : 'i'), r]
  );
}
function w0(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      cu(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').'),
      ),
      e
    );
  }
}
function S0(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      cu(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (' due to a bad percent encoding (' + n + ').'),
      ),
      e
    );
  }
}
function Ad(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function E0(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: n,
    search: r = '',
    hash: o = '',
  } = typeof e == 'string' ? Jn(e) : e;
  return {
    pathname: n ? (n.startsWith('/') ? n : x0(n, t)) : t,
    search: P0(r),
    hash: _0(o),
  };
}
function x0(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((o) => {
      o === '..' ? n.length > 1 && n.pop() : o !== '.' && n.push(o);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function ul(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function k0(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function C0(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == 'string'
    ? (o = Jn(e))
    : ((o = Ur({}, e)),
      Ce(
        !o.pathname || !o.pathname.includes('?'),
        ul('?', 'pathname', 'search', o),
      ),
      Ce(
        !o.pathname || !o.pathname.includes('#'),
        ul('#', 'pathname', 'hash', o),
      ),
      Ce(!o.search || !o.search.includes('#'), ul('#', 'search', 'hash', o)));
  let i = e === '' || o.pathname === '',
    l = i ? '/' : o.pathname,
    u;
  if (r || l == null) u = n;
  else {
    let c = t.length - 1;
    if (l.startsWith('..')) {
      let d = l.split('/');
      for (; d[0] === '..'; ) d.shift(), (c -= 1);
      o.pathname = d.join('/');
    }
    u = c >= 0 ? t[c] : '/';
  }
  let s = E0(o, u),
    a = l && l !== '/' && l.endsWith('/'),
    f = (i || l === '.') && n.endsWith('/');
  return !s.pathname.endsWith('/') && (a || f) && (s.pathname += '/'), s;
}
const sn = (e) => e.join('/').replace(/\/\/+/g, '/'),
  N0 = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  P0 = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  _0 = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
function R0(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const Md = ['post', 'put', 'patch', 'delete'];
new Set(Md);
const T0 = ['get', ...Md];
new Set(T0);
/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function O0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const L0 = typeof Object.is == 'function' ? Object.is : O0,
  { useState: A0, useEffect: M0, useLayoutEffect: I0, useDebugValue: D0 } = ml;
function F0(e, t, n) {
  const r = t(),
    [{ inst: o }, i] = A0({ inst: { value: r, getSnapshot: t } });
  return (
    I0(() => {
      (o.value = r), (o.getSnapshot = t), al(o) && i({ inst: o });
    }, [e, r, t]),
    M0(
      () => (
        al(o) && i({ inst: o }),
        e(() => {
          al(o) && i({ inst: o });
        })
      ),
      [e],
    ),
    D0(r),
    r
  );
}
function al(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !L0(n, r);
  } catch {
    return !0;
  }
}
function z0(e, t, n) {
  return t();
}
const U0 =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  j0 = !U0,
  B0 = j0 ? z0 : F0;
'useSyncExternalStore' in ml && ((e) => e.useSyncExternalStore)(ml);
const $0 = T.createContext(null),
  Id = T.createContext(null),
  fu = T.createContext(null),
  ki = T.createContext(null),
  gn = T.createContext({ outlet: null, matches: [] }),
  Dd = T.createContext(null);
function as() {
  return (
    (as = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    as.apply(this, arguments)
  );
}
function Ci() {
  return T.useContext(ki) != null;
}
function Fd() {
  return Ci() || Ce(!1), T.useContext(ki).location;
}
function H0() {
  Ci() || Ce(!1);
  let { basename: e, navigator: t } = T.useContext(fu),
    { matches: n } = T.useContext(gn),
    { pathname: r } = Fd(),
    o = JSON.stringify(k0(n).map((u) => u.pathnameBase)),
    i = T.useRef(!1);
  return (
    T.useEffect(() => {
      i.current = !0;
    }),
    T.useCallback(
      function (u, s) {
        if ((s === void 0 && (s = {}), !i.current)) return;
        if (typeof u == 'number') {
          t.go(u);
          return;
        }
        let a = C0(u, JSON.parse(o), r, s.relative === 'path');
        e !== '/' &&
          (a.pathname = a.pathname === '/' ? e : sn([e, a.pathname])),
          (s.replace ? t.replace : t.push)(a, s.state, s);
      },
      [e, t, o, r],
    )
  );
}
const V0 = T.createContext(null);
function W0(e) {
  let t = T.useContext(gn).outlet;
  return t && T.createElement(V0.Provider, { value: e }, t);
}
function Q0() {
  let { matches: e } = T.useContext(gn),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function K0(e, t) {
  Ci() || Ce(!1);
  let { navigator: n } = T.useContext(fu),
    r = T.useContext(Id),
    { matches: o } = T.useContext(gn),
    i = o[o.length - 1],
    l = i ? i.params : {};
  i && i.pathname;
  let u = i ? i.pathnameBase : '/';
  i && i.route;
  let s = Fd(),
    a;
  if (t) {
    var f;
    let g = typeof t == 'string' ? Jn(t) : t;
    u === '/' || ((f = g.pathname) != null && f.startsWith(u)) || Ce(!1),
      (a = g);
  } else a = s;
  let c = a.pathname || '/',
    d = u === '/' ? c : c.slice(u.length) || '/',
    v = l0(e, { pathname: d }),
    m = J0(
      v &&
        v.map((g) =>
          Object.assign({}, g, {
            params: Object.assign({}, l, g.params),
            pathname: sn([
              u,
              n.encodeLocation
                ? n.encodeLocation(g.pathname).pathname
                : g.pathname,
            ]),
            pathnameBase:
              g.pathnameBase === '/'
                ? u
                : sn([
                    u,
                    n.encodeLocation
                      ? n.encodeLocation(g.pathnameBase).pathname
                      : g.pathnameBase,
                  ]),
          }),
        ),
      o,
      r || void 0,
    );
  return t && m
    ? T.createElement(
        ki.Provider,
        {
          value: {
            location: as(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              a,
            ),
            navigationType: zt.Pop,
          },
        },
        m,
      )
    : m;
}
function G0() {
  let e = ey(),
    t = R0(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
    i = null;
  return T.createElement(
    T.Fragment,
    null,
    T.createElement('h2', null, 'Unexpected Application Error!'),
    T.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? T.createElement('pre', { style: o }, n) : null,
    i,
  );
}
class Y0 extends T.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location
      ? { error: t.error, location: t.location }
      : { error: t.error || n.error, location: n.location };
  }
  componentDidCatch(t, n) {
    console.error(
      'React Router caught the following error during render',
      t,
      n,
    );
  }
  render() {
    return this.state.error
      ? T.createElement(
          gn.Provider,
          { value: this.props.routeContext },
          T.createElement(Dd.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function X0(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = T.useContext($0);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    T.createElement(gn.Provider, { value: t }, r)
  );
}
function J0(e, t, n) {
  if ((t === void 0 && (t = []), e == null))
    if (n != null && n.errors) e = n.matches;
    else return null;
  let r = e,
    o = n == null ? void 0 : n.errors;
  if (o != null) {
    let i = r.findIndex(
      (l) => l.route.id && (o == null ? void 0 : o[l.route.id]),
    );
    i >= 0 || Ce(!1), (r = r.slice(0, Math.min(r.length, i + 1)));
  }
  return r.reduceRight((i, l, u) => {
    let s = l.route.id ? (o == null ? void 0 : o[l.route.id]) : null,
      a = null;
    n &&
      (l.route.ErrorBoundary
        ? (a = T.createElement(l.route.ErrorBoundary, null))
        : l.route.errorElement
        ? (a = l.route.errorElement)
        : (a = T.createElement(G0, null)));
    let f = t.concat(r.slice(0, u + 1)),
      c = () => {
        let d = i;
        return (
          s
            ? (d = a)
            : l.route.Component
            ? (d = T.createElement(l.route.Component, null))
            : l.route.element && (d = l.route.element),
          T.createElement(X0, {
            match: l,
            routeContext: { outlet: i, matches: f },
            children: d,
          })
        );
      };
    return n && (l.route.ErrorBoundary || l.route.errorElement || u === 0)
      ? T.createElement(Y0, {
          location: n.location,
          component: a,
          error: s,
          children: c(),
          routeContext: { outlet: null, matches: f },
        })
      : c();
  }, null);
}
var Ka;
(function (e) {
  (e.UseBlocker = 'useBlocker'), (e.UseRevalidator = 'useRevalidator');
})(Ka || (Ka = {}));
var ri;
(function (e) {
  (e.UseBlocker = 'useBlocker'),
    (e.UseLoaderData = 'useLoaderData'),
    (e.UseActionData = 'useActionData'),
    (e.UseRouteError = 'useRouteError'),
    (e.UseNavigation = 'useNavigation'),
    (e.UseRouteLoaderData = 'useRouteLoaderData'),
    (e.UseMatches = 'useMatches'),
    (e.UseRevalidator = 'useRevalidator');
})(ri || (ri = {}));
function q0(e) {
  let t = T.useContext(Id);
  return t || Ce(!1), t;
}
function Z0(e) {
  let t = T.useContext(gn);
  return t || Ce(!1), t;
}
function b0(e) {
  let t = Z0(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Ce(!1), n.route.id;
}
function ey() {
  var e;
  let t = T.useContext(Dd),
    n = q0(ri.UseRouteError),
    r = b0(ri.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function ty(e) {
  return W0(e.context);
}
function ny(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: o = zt.Pop,
    navigator: i,
    static: l = !1,
  } = e;
  Ci() && Ce(!1);
  let u = t.replace(/^\/*/, '/'),
    s = T.useMemo(() => ({ basename: u, navigator: i, static: l }), [u, i, l]);
  typeof r == 'string' && (r = Jn(r));
  let {
      pathname: a = '/',
      search: f = '',
      hash: c = '',
      state: d = null,
      key: v = 'default',
    } = r,
    m = T.useMemo(() => {
      let g = Ad(a, u);
      return g == null
        ? null
        : {
            location: { pathname: g, search: f, hash: c, state: d, key: v },
            navigationType: o,
          };
    }, [u, a, f, c, d, v, o]);
  return m == null
    ? null
    : T.createElement(
        fu.Provider,
        { value: s },
        T.createElement(ki.Provider, { children: n, value: m }),
      );
}
var Ga;
(function (e) {
  (e[(e.pending = 0)] = 'pending'),
    (e[(e.success = 1)] = 'success'),
    (e[(e.error = 2)] = 'error');
})(Ga || (Ga = {}));
new Promise(() => {});
/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ry(e) {
  let { basename: t, children: n, window: r } = e,
    o = T.useRef();
  o.current == null && (o.current = r0({ window: r, v5Compat: !0 }));
  let i = o.current,
    [l, u] = T.useState({ action: i.action, location: i.location });
  return (
    T.useLayoutEffect(() => i.listen(u), [i]),
    T.createElement(ny, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: i,
    })
  );
}
var Ya;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmitImpl = 'useSubmitImpl'),
    (e.UseFetcher = 'useFetcher');
})(Ya || (Ya = {}));
var Xa;
(function (e) {
  (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(Xa || (Xa = {}));
var oy = Object.defineProperty,
  oi = Object.getOwnPropertySymbols,
  zd = Object.prototype.hasOwnProperty,
  Ud = Object.prototype.propertyIsEnumerable,
  Ja = (e, t, n) =>
    t in e
      ? oy(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  jr = (e, t) => {
    for (var n in t || (t = {})) zd.call(t, n) && Ja(e, n, t[n]);
    if (oi) for (var n of oi(t)) Ud.call(t, n) && Ja(e, n, t[n]);
    return e;
  },
  du = (e, t) => {
    var n = {};
    for (var r in e) zd.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && oi)
      for (var r of oi(e)) t.indexOf(r) < 0 && Ud.call(e, r) && (n[r] = e[r]);
    return n;
  };
/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */ var pn;
((e) => {
  const t = class {
    constructor(s, a, f, c) {
      if (
        ((this.version = s),
        (this.errorCorrectionLevel = a),
        (this.modules = []),
        (this.isFunction = []),
        s < t.MIN_VERSION || s > t.MAX_VERSION)
      )
        throw new RangeError('Version value out of range');
      if (c < -1 || c > 7) throw new RangeError('Mask value out of range');
      this.size = s * 4 + 17;
      let d = [];
      for (let m = 0; m < this.size; m++) d.push(!1);
      for (let m = 0; m < this.size; m++)
        this.modules.push(d.slice()), this.isFunction.push(d.slice());
      this.drawFunctionPatterns();
      const v = this.addEccAndInterleave(f);
      if ((this.drawCodewords(v), c == -1)) {
        let m = 1e9;
        for (let g = 0; g < 8; g++) {
          this.applyMask(g), this.drawFormatBits(g);
          const S = this.getPenaltyScore();
          S < m && ((c = g), (m = S)), this.applyMask(g);
        }
      }
      i(0 <= c && c <= 7),
        (this.mask = c),
        this.applyMask(c),
        this.drawFormatBits(c),
        (this.isFunction = []);
    }
    static encodeText(s, a) {
      const f = e.QrSegment.makeSegments(s);
      return t.encodeSegments(f, a);
    }
    static encodeBinary(s, a) {
      const f = e.QrSegment.makeBytes(s);
      return t.encodeSegments([f], a);
    }
    static encodeSegments(s, a, f = 1, c = 40, d = -1, v = !0) {
      if (
        !(t.MIN_VERSION <= f && f <= c && c <= t.MAX_VERSION) ||
        d < -1 ||
        d > 7
      )
        throw new RangeError('Invalid value');
      let m, g;
      for (m = f; ; m++) {
        const y = t.getNumDataCodewords(m, a) * 8,
          w = u.getTotalBits(s, m);
        if (w <= y) {
          g = w;
          break;
        }
        if (m >= c) throw new RangeError('Data too long');
      }
      for (const y of [t.Ecc.MEDIUM, t.Ecc.QUARTILE, t.Ecc.HIGH])
        v && g <= t.getNumDataCodewords(m, y) * 8 && (a = y);
      let S = [];
      for (const y of s) {
        r(y.mode.modeBits, 4, S), r(y.numChars, y.mode.numCharCountBits(m), S);
        for (const w of y.getData()) S.push(w);
      }
      i(S.length == g);
      const h = t.getNumDataCodewords(m, a) * 8;
      i(S.length <= h),
        r(0, Math.min(4, h - S.length), S),
        r(0, (8 - (S.length % 8)) % 8, S),
        i(S.length % 8 == 0);
      for (let y = 236; S.length < h; y ^= 253) r(y, 8, S);
      let p = [];
      for (; p.length * 8 < S.length; ) p.push(0);
      return (
        S.forEach((y, w) => (p[w >>> 3] |= y << (7 - (w & 7)))),
        new t(m, a, p, d)
      );
    }
    getModule(s, a) {
      return (
        0 <= s && s < this.size && 0 <= a && a < this.size && this.modules[a][s]
      );
    }
    getModules() {
      return this.modules;
    }
    drawFunctionPatterns() {
      for (let f = 0; f < this.size; f++)
        this.setFunctionModule(6, f, f % 2 == 0),
          this.setFunctionModule(f, 6, f % 2 == 0);
      this.drawFinderPattern(3, 3),
        this.drawFinderPattern(this.size - 4, 3),
        this.drawFinderPattern(3, this.size - 4);
      const s = this.getAlignmentPatternPositions(),
        a = s.length;
      for (let f = 0; f < a; f++)
        for (let c = 0; c < a; c++)
          (f == 0 && c == 0) ||
            (f == 0 && c == a - 1) ||
            (f == a - 1 && c == 0) ||
            this.drawAlignmentPattern(s[f], s[c]);
      this.drawFormatBits(0), this.drawVersion();
    }
    drawFormatBits(s) {
      const a = (this.errorCorrectionLevel.formatBits << 3) | s;
      let f = a;
      for (let d = 0; d < 10; d++) f = (f << 1) ^ ((f >>> 9) * 1335);
      const c = ((a << 10) | f) ^ 21522;
      i(c >>> 15 == 0);
      for (let d = 0; d <= 5; d++) this.setFunctionModule(8, d, o(c, d));
      this.setFunctionModule(8, 7, o(c, 6)),
        this.setFunctionModule(8, 8, o(c, 7)),
        this.setFunctionModule(7, 8, o(c, 8));
      for (let d = 9; d < 15; d++) this.setFunctionModule(14 - d, 8, o(c, d));
      for (let d = 0; d < 8; d++)
        this.setFunctionModule(this.size - 1 - d, 8, o(c, d));
      for (let d = 8; d < 15; d++)
        this.setFunctionModule(8, this.size - 15 + d, o(c, d));
      this.setFunctionModule(8, this.size - 8, !0);
    }
    drawVersion() {
      if (this.version < 7) return;
      let s = this.version;
      for (let f = 0; f < 12; f++) s = (s << 1) ^ ((s >>> 11) * 7973);
      const a = (this.version << 12) | s;
      i(a >>> 18 == 0);
      for (let f = 0; f < 18; f++) {
        const c = o(a, f),
          d = this.size - 11 + (f % 3),
          v = Math.floor(f / 3);
        this.setFunctionModule(d, v, c), this.setFunctionModule(v, d, c);
      }
    }
    drawFinderPattern(s, a) {
      for (let f = -4; f <= 4; f++)
        for (let c = -4; c <= 4; c++) {
          const d = Math.max(Math.abs(c), Math.abs(f)),
            v = s + c,
            m = a + f;
          0 <= v &&
            v < this.size &&
            0 <= m &&
            m < this.size &&
            this.setFunctionModule(v, m, d != 2 && d != 4);
        }
    }
    drawAlignmentPattern(s, a) {
      for (let f = -2; f <= 2; f++)
        for (let c = -2; c <= 2; c++)
          this.setFunctionModule(
            s + c,
            a + f,
            Math.max(Math.abs(c), Math.abs(f)) != 1,
          );
    }
    setFunctionModule(s, a, f) {
      (this.modules[a][s] = f), (this.isFunction[a][s] = !0);
    }
    addEccAndInterleave(s) {
      const a = this.version,
        f = this.errorCorrectionLevel;
      if (s.length != t.getNumDataCodewords(a, f))
        throw new RangeError('Invalid argument');
      const c = t.NUM_ERROR_CORRECTION_BLOCKS[f.ordinal][a],
        d = t.ECC_CODEWORDS_PER_BLOCK[f.ordinal][a],
        v = Math.floor(t.getNumRawDataModules(a) / 8),
        m = c - (v % c),
        g = Math.floor(v / c);
      let S = [];
      const h = t.reedSolomonComputeDivisor(d);
      for (let y = 0, w = 0; y < c; y++) {
        let x = s.slice(w, w + g - d + (y < m ? 0 : 1));
        w += x.length;
        const P = t.reedSolomonComputeRemainder(x, h);
        y < m && x.push(0), S.push(x.concat(P));
      }
      let p = [];
      for (let y = 0; y < S[0].length; y++)
        S.forEach((w, x) => {
          (y != g - d || x >= m) && p.push(w[y]);
        });
      return i(p.length == v), p;
    }
    drawCodewords(s) {
      if (s.length != Math.floor(t.getNumRawDataModules(this.version) / 8))
        throw new RangeError('Invalid argument');
      let a = 0;
      for (let f = this.size - 1; f >= 1; f -= 2) {
        f == 6 && (f = 5);
        for (let c = 0; c < this.size; c++)
          for (let d = 0; d < 2; d++) {
            const v = f - d,
              g = ((f + 1) & 2) == 0 ? this.size - 1 - c : c;
            !this.isFunction[g][v] &&
              a < s.length * 8 &&
              ((this.modules[g][v] = o(s[a >>> 3], 7 - (a & 7))), a++);
          }
      }
      i(a == s.length * 8);
    }
    applyMask(s) {
      if (s < 0 || s > 7) throw new RangeError('Mask value out of range');
      for (let a = 0; a < this.size; a++)
        for (let f = 0; f < this.size; f++) {
          let c;
          switch (s) {
            case 0:
              c = (f + a) % 2 == 0;
              break;
            case 1:
              c = a % 2 == 0;
              break;
            case 2:
              c = f % 3 == 0;
              break;
            case 3:
              c = (f + a) % 3 == 0;
              break;
            case 4:
              c = (Math.floor(f / 3) + Math.floor(a / 2)) % 2 == 0;
              break;
            case 5:
              c = ((f * a) % 2) + ((f * a) % 3) == 0;
              break;
            case 6:
              c = (((f * a) % 2) + ((f * a) % 3)) % 2 == 0;
              break;
            case 7:
              c = (((f + a) % 2) + ((f * a) % 3)) % 2 == 0;
              break;
            default:
              throw new Error('Unreachable');
          }
          !this.isFunction[a][f] &&
            c &&
            (this.modules[a][f] = !this.modules[a][f]);
        }
    }
    getPenaltyScore() {
      let s = 0;
      for (let d = 0; d < this.size; d++) {
        let v = !1,
          m = 0,
          g = [0, 0, 0, 0, 0, 0, 0];
        for (let S = 0; S < this.size; S++)
          this.modules[d][S] == v
            ? (m++, m == 5 ? (s += t.PENALTY_N1) : m > 5 && s++)
            : (this.finderPenaltyAddHistory(m, g),
              v || (s += this.finderPenaltyCountPatterns(g) * t.PENALTY_N3),
              (v = this.modules[d][S]),
              (m = 1));
        s += this.finderPenaltyTerminateAndCount(v, m, g) * t.PENALTY_N3;
      }
      for (let d = 0; d < this.size; d++) {
        let v = !1,
          m = 0,
          g = [0, 0, 0, 0, 0, 0, 0];
        for (let S = 0; S < this.size; S++)
          this.modules[S][d] == v
            ? (m++, m == 5 ? (s += t.PENALTY_N1) : m > 5 && s++)
            : (this.finderPenaltyAddHistory(m, g),
              v || (s += this.finderPenaltyCountPatterns(g) * t.PENALTY_N3),
              (v = this.modules[S][d]),
              (m = 1));
        s += this.finderPenaltyTerminateAndCount(v, m, g) * t.PENALTY_N3;
      }
      for (let d = 0; d < this.size - 1; d++)
        for (let v = 0; v < this.size - 1; v++) {
          const m = this.modules[d][v];
          m == this.modules[d][v + 1] &&
            m == this.modules[d + 1][v] &&
            m == this.modules[d + 1][v + 1] &&
            (s += t.PENALTY_N2);
        }
      let a = 0;
      for (const d of this.modules) a = d.reduce((v, m) => v + (m ? 1 : 0), a);
      const f = this.size * this.size,
        c = Math.ceil(Math.abs(a * 20 - f * 10) / f) - 1;
      return (
        i(0 <= c && c <= 9),
        (s += c * t.PENALTY_N4),
        i(0 <= s && s <= 2568888),
        s
      );
    }
    getAlignmentPatternPositions() {
      if (this.version == 1) return [];
      {
        const s = Math.floor(this.version / 7) + 2,
          a =
            this.version == 32
              ? 26
              : Math.ceil((this.version * 4 + 4) / (s * 2 - 2)) * 2;
        let f = [6];
        for (let c = this.size - 7; f.length < s; c -= a) f.splice(1, 0, c);
        return f;
      }
    }
    static getNumRawDataModules(s) {
      if (s < t.MIN_VERSION || s > t.MAX_VERSION)
        throw new RangeError('Version number out of range');
      let a = (16 * s + 128) * s + 64;
      if (s >= 2) {
        const f = Math.floor(s / 7) + 2;
        (a -= (25 * f - 10) * f - 55), s >= 7 && (a -= 36);
      }
      return i(208 <= a && a <= 29648), a;
    }
    static getNumDataCodewords(s, a) {
      return (
        Math.floor(t.getNumRawDataModules(s) / 8) -
        t.ECC_CODEWORDS_PER_BLOCK[a.ordinal][s] *
          t.NUM_ERROR_CORRECTION_BLOCKS[a.ordinal][s]
      );
    }
    static reedSolomonComputeDivisor(s) {
      if (s < 1 || s > 255) throw new RangeError('Degree out of range');
      let a = [];
      for (let c = 0; c < s - 1; c++) a.push(0);
      a.push(1);
      let f = 1;
      for (let c = 0; c < s; c++) {
        for (let d = 0; d < a.length; d++)
          (a[d] = t.reedSolomonMultiply(a[d], f)),
            d + 1 < a.length && (a[d] ^= a[d + 1]);
        f = t.reedSolomonMultiply(f, 2);
      }
      return a;
    }
    static reedSolomonComputeRemainder(s, a) {
      let f = a.map((c) => 0);
      for (const c of s) {
        const d = c ^ f.shift();
        f.push(0), a.forEach((v, m) => (f[m] ^= t.reedSolomonMultiply(v, d)));
      }
      return f;
    }
    static reedSolomonMultiply(s, a) {
      if (s >>> 8 || a >>> 8) throw new RangeError('Byte out of range');
      let f = 0;
      for (let c = 7; c >= 0; c--)
        (f = (f << 1) ^ ((f >>> 7) * 285)), (f ^= ((a >>> c) & 1) * s);
      return i(f >>> 8 == 0), f;
    }
    finderPenaltyCountPatterns(s) {
      const a = s[1];
      i(a <= this.size * 3);
      const f = a > 0 && s[2] == a && s[3] == a * 3 && s[4] == a && s[5] == a;
      return (
        (f && s[0] >= a * 4 && s[6] >= a ? 1 : 0) +
        (f && s[6] >= a * 4 && s[0] >= a ? 1 : 0)
      );
    }
    finderPenaltyTerminateAndCount(s, a, f) {
      return (
        s && (this.finderPenaltyAddHistory(a, f), (a = 0)),
        (a += this.size),
        this.finderPenaltyAddHistory(a, f),
        this.finderPenaltyCountPatterns(f)
      );
    }
    finderPenaltyAddHistory(s, a) {
      a[0] == 0 && (s += this.size), a.pop(), a.unshift(s);
    }
  };
  let n = t;
  (n.MIN_VERSION = 1),
    (n.MAX_VERSION = 40),
    (n.PENALTY_N1 = 3),
    (n.PENALTY_N2 = 3),
    (n.PENALTY_N3 = 40),
    (n.PENALTY_N4 = 10),
    (n.ECC_CODEWORDS_PER_BLOCK = [
      [
        -1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28,
        30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30,
        30, 30, 30, 30, 30,
      ],
      [
        -1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28,
        26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28,
        28, 28, 28, 28, 28,
      ],
      [
        -1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28,
        28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30,
        30, 30, 30, 30, 30,
      ],
      [
        -1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28,
        28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
        30, 30, 30, 30, 30,
      ],
    ]),
    (n.NUM_ERROR_CORRECTION_BLOCKS = [
      [
        -1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9,
        10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25,
      ],
      [
        -1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16,
        17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45,
        47, 49,
      ],
      [
        -1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20,
        23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62,
        65, 68,
      ],
      [
        -1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25,
        25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70,
        74, 77, 81,
      ],
    ]),
    (e.QrCode = n);
  function r(s, a, f) {
    if (a < 0 || a > 31 || s >>> a) throw new RangeError('Value out of range');
    for (let c = a - 1; c >= 0; c--) f.push((s >>> c) & 1);
  }
  function o(s, a) {
    return ((s >>> a) & 1) != 0;
  }
  function i(s) {
    if (!s) throw new Error('Assertion error');
  }
  const l = class {
    constructor(s, a, f) {
      if (((this.mode = s), (this.numChars = a), (this.bitData = f), a < 0))
        throw new RangeError('Invalid argument');
      this.bitData = f.slice();
    }
    static makeBytes(s) {
      let a = [];
      for (const f of s) r(f, 8, a);
      return new l(l.Mode.BYTE, s.length, a);
    }
    static makeNumeric(s) {
      if (!l.isNumeric(s))
        throw new RangeError('String contains non-numeric characters');
      let a = [];
      for (let f = 0; f < s.length; ) {
        const c = Math.min(s.length - f, 3);
        r(parseInt(s.substr(f, c), 10), c * 3 + 1, a), (f += c);
      }
      return new l(l.Mode.NUMERIC, s.length, a);
    }
    static makeAlphanumeric(s) {
      if (!l.isAlphanumeric(s))
        throw new RangeError(
          'String contains unencodable characters in alphanumeric mode',
        );
      let a = [],
        f;
      for (f = 0; f + 2 <= s.length; f += 2) {
        let c = l.ALPHANUMERIC_CHARSET.indexOf(s.charAt(f)) * 45;
        (c += l.ALPHANUMERIC_CHARSET.indexOf(s.charAt(f + 1))), r(c, 11, a);
      }
      return (
        f < s.length && r(l.ALPHANUMERIC_CHARSET.indexOf(s.charAt(f)), 6, a),
        new l(l.Mode.ALPHANUMERIC, s.length, a)
      );
    }
    static makeSegments(s) {
      return s == ''
        ? []
        : l.isNumeric(s)
        ? [l.makeNumeric(s)]
        : l.isAlphanumeric(s)
        ? [l.makeAlphanumeric(s)]
        : [l.makeBytes(l.toUtf8ByteArray(s))];
    }
    static makeEci(s) {
      let a = [];
      if (s < 0) throw new RangeError('ECI assignment value out of range');
      if (s < 128) r(s, 8, a);
      else if (s < 16384) r(2, 2, a), r(s, 14, a);
      else if (s < 1e6) r(6, 3, a), r(s, 21, a);
      else throw new RangeError('ECI assignment value out of range');
      return new l(l.Mode.ECI, 0, a);
    }
    static isNumeric(s) {
      return l.NUMERIC_REGEX.test(s);
    }
    static isAlphanumeric(s) {
      return l.ALPHANUMERIC_REGEX.test(s);
    }
    getData() {
      return this.bitData.slice();
    }
    static getTotalBits(s, a) {
      let f = 0;
      for (const c of s) {
        const d = c.mode.numCharCountBits(a);
        if (c.numChars >= 1 << d) return 1 / 0;
        f += 4 + d + c.bitData.length;
      }
      return f;
    }
    static toUtf8ByteArray(s) {
      s = encodeURI(s);
      let a = [];
      for (let f = 0; f < s.length; f++)
        s.charAt(f) != '%'
          ? a.push(s.charCodeAt(f))
          : (a.push(parseInt(s.substr(f + 1, 2), 16)), (f += 2));
      return a;
    }
  };
  let u = l;
  (u.NUMERIC_REGEX = /^[0-9]*$/),
    (u.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/),
    (u.ALPHANUMERIC_CHARSET = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:'),
    (e.QrSegment = u);
})(pn || (pn = {}));
((e) => {
  ((t) => {
    const n = class {
      constructor(o, i) {
        (this.ordinal = o), (this.formatBits = i);
      }
    };
    let r = n;
    (r.LOW = new n(0, 1)),
      (r.MEDIUM = new n(1, 0)),
      (r.QUARTILE = new n(2, 3)),
      (r.HIGH = new n(3, 2)),
      (t.Ecc = r);
  })(e.QrCode || (e.QrCode = {}));
})(pn || (pn = {}));
((e) => {
  ((t) => {
    const n = class {
      constructor(o, i) {
        (this.modeBits = o), (this.numBitsCharCount = i);
      }
      numCharCountBits(o) {
        return this.numBitsCharCount[Math.floor((o + 7) / 17)];
      }
    };
    let r = n;
    (r.NUMERIC = new n(1, [10, 12, 14])),
      (r.ALPHANUMERIC = new n(2, [9, 11, 13])),
      (r.BYTE = new n(4, [8, 16, 16])),
      (r.KANJI = new n(8, [8, 10, 12])),
      (r.ECI = new n(7, [0, 0, 0])),
      (t.Mode = r);
  })(e.QrSegment || (e.QrSegment = {}));
})(pn || (pn = {}));
var An = pn;
/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */ var jd = {
    L: An.QrCode.Ecc.LOW,
    M: An.QrCode.Ecc.MEDIUM,
    Q: An.QrCode.Ecc.QUARTILE,
    H: An.QrCode.Ecc.HIGH,
  },
  Bd = 128,
  $d = 'L',
  Hd = '#FFFFFF',
  Vd = '#000000',
  Wd = !1,
  pu = 4,
  iy = 0.1;
function Qd(e, t = 0) {
  const n = [];
  return (
    e.forEach(function (r, o) {
      let i = null;
      r.forEach(function (l, u) {
        if (!l && i !== null) {
          n.push(`M${i + t} ${o + t}h${u - i}v1H${i + t}z`), (i = null);
          return;
        }
        if (u === r.length - 1) {
          if (!l) return;
          i === null
            ? n.push(`M${u + t},${o + t} h1v1H${u + t}z`)
            : n.push(`M${i + t},${o + t} h${u + 1 - i}v1H${i + t}z`);
          return;
        }
        l && i === null && (i = u);
      });
    }),
    n.join('')
  );
}
function Kd(e, t) {
  return e
    .slice()
    .map((n, r) =>
      r < t.y || r >= t.y + t.h
        ? n
        : n.map((o, i) => (i < t.x || i >= t.x + t.w ? o : !1)),
    );
}
function Gd(e, t, n, r) {
  if (r == null) return null;
  const o = n ? pu : 0,
    i = e.length + o * 2,
    l = Math.floor(t * iy),
    u = i / t,
    s = (r.width || l) * u,
    a = (r.height || l) * u,
    f = r.x == null ? e.length / 2 - s / 2 : r.x * u,
    c = r.y == null ? e.length / 2 - a / 2 : r.y * u;
  let d = null;
  if (r.excavate) {
    let v = Math.floor(f),
      m = Math.floor(c),
      g = Math.ceil(s + f - v),
      S = Math.ceil(a + c - m);
    d = { x: v, y: m, w: g, h: S };
  }
  return { x: f, y: c, h: a, w: s, excavation: d };
}
var ly = (function () {
  try {
    new Path2D().addPath(new Path2D());
  } catch {
    return !1;
  }
  return !0;
})();
function sy(e) {
  const t = e,
    {
      value: n,
      size: r = Bd,
      level: o = $d,
      bgColor: i = Hd,
      fgColor: l = Vd,
      includeMargin: u = Wd,
      style: s,
      imageSettings: a,
    } = t,
    f = du(t, [
      'value',
      'size',
      'level',
      'bgColor',
      'fgColor',
      'includeMargin',
      'style',
      'imageSettings',
    ]),
    c = a == null ? void 0 : a.src,
    d = T.useRef(null),
    v = T.useRef(null),
    [m, g] = T.useState(!1);
  T.useEffect(() => {
    if (d.current != null) {
      const p = d.current,
        y = p.getContext('2d');
      if (!y) return;
      let w = An.QrCode.encodeText(n, jd[o]).getModules();
      const x = u ? pu : 0,
        P = w.length + x * 2,
        k = Gd(w, r, u, a),
        C = v.current,
        A =
          k != null &&
          C !== null &&
          C.complete &&
          C.naturalHeight !== 0 &&
          C.naturalWidth !== 0;
      A && k.excavation != null && (w = Kd(w, k.excavation));
      const R = window.devicePixelRatio || 1;
      p.height = p.width = r * R;
      const F = (r / P) * R;
      y.scale(F, F),
        (y.fillStyle = i),
        y.fillRect(0, 0, P, P),
        (y.fillStyle = l),
        ly
          ? y.fill(new Path2D(Qd(w, x)))
          : w.forEach(function (X, le) {
              X.forEach(function (se, Ie) {
                se && y.fillRect(Ie + x, le + x, 1, 1);
              });
            }),
        A && y.drawImage(C, k.x + x, k.y + x, k.w, k.h);
    }
  }),
    T.useEffect(() => {
      g(!1);
    }, [c]);
  const S = jr({ height: r, width: r }, s);
  let h = null;
  return (
    c != null &&
      (h = Qe.createElement('img', {
        src: c,
        key: c,
        style: { display: 'none' },
        onLoad: () => {
          g(!0);
        },
        ref: v,
      })),
    Qe.createElement(
      Qe.Fragment,
      null,
      Qe.createElement(
        'canvas',
        jr({ style: S, height: r, width: r, ref: d }, f),
      ),
      h,
    )
  );
}
function uy(e) {
  const t = e,
    {
      value: n,
      size: r = Bd,
      level: o = $d,
      bgColor: i = Hd,
      fgColor: l = Vd,
      includeMargin: u = Wd,
      imageSettings: s,
    } = t,
    a = du(t, [
      'value',
      'size',
      'level',
      'bgColor',
      'fgColor',
      'includeMargin',
      'imageSettings',
    ]);
  let f = An.QrCode.encodeText(n, jd[o]).getModules();
  const c = u ? pu : 0,
    d = f.length + c * 2,
    v = Gd(f, r, u, s);
  let m = null;
  s != null &&
    v != null &&
    (v.excavation != null && (f = Kd(f, v.excavation)),
    (m = Qe.createElement('image', {
      xlinkHref: s.src,
      height: v.h,
      width: v.w,
      x: v.x + c,
      y: v.y + c,
      preserveAspectRatio: 'none',
    })));
  const g = Qd(f, c);
  return Qe.createElement(
    'svg',
    jr({ height: r, width: r, viewBox: `0 0 ${d} ${d}` }, a),
    Qe.createElement('path', {
      fill: i,
      d: `M0,0 h${d}v${d}H0z`,
      shapeRendering: 'crispEdges',
    }),
    Qe.createElement('path', { fill: l, d: g, shapeRendering: 'crispEdges' }),
    m,
  );
}
var ay = (e) => {
  const t = e,
    { renderAs: n } = t,
    r = du(t, ['renderAs']);
  return n === 'svg'
    ? Qe.createElement(uy, jr({}, r))
    : Qe.createElement(sy, jr({}, r));
};
function cy(e) {
  return Object.prototype.toString.call(e) === '[object Object]';
}
function qa(e) {
  return cy(e) || Array.isArray(e);
}
function fy() {
  return !!(
    typeof window < 'u' &&
    window.document &&
    window.document.createElement
  );
}
function hu(e, t) {
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  const o = JSON.stringify(Object.keys(e.breakpoints || {})),
    i = JSON.stringify(Object.keys(t.breakpoints || {}));
  return o !== i
    ? !1
    : n.every((l) => {
        const u = e[l],
          s = t[l];
        return typeof u == 'function'
          ? `${u}` == `${s}`
          : !qa(u) || !qa(s)
          ? u === s
          : hu(u, s);
      });
}
function Za(e) {
  return e
    .concat()
    .sort((t, n) => (t.name > n.name ? 1 : -1))
    .map((t) => t.options);
}
function dy(e, t) {
  if (e.length !== t.length) return !1;
  const n = Za(e),
    r = Za(t);
  return n.every((o, i) => {
    const l = r[i];
    return hu(o, l);
  });
}
function mu(e) {
  return typeof e == 'number';
}
function cs(e) {
  return typeof e == 'string';
}
function yu(e) {
  return typeof e == 'boolean';
}
function ba(e) {
  return Object.prototype.toString.call(e) === '[object Object]';
}
function Y(e) {
  return Math.abs(e);
}
function gu(e) {
  return Math.sign(e);
}
function Sr(e, t) {
  return Y(e - t);
}
function py(e, t) {
  if (e === 0 || t === 0 || Y(e) <= Y(t)) return 0;
  const n = Sr(Y(e), Y(t));
  return Y(n / e);
}
function Br(e) {
  return $r(e).map(Number);
}
function lt(e) {
  return e[Xr(e)];
}
function Xr(e) {
  return Math.max(0, e.length - 1);
}
function vu(e, t) {
  return t === Xr(e);
}
function ec(e, t = 0) {
  return Array.from(Array(e), (n, r) => t + r);
}
function $r(e) {
  return Object.keys(e);
}
function Yd(e, t) {
  return [e, t].reduce(
    (n, r) => (
      $r(r).forEach((o) => {
        const i = n[o],
          l = r[o],
          u = ba(i) && ba(l);
        n[o] = u ? Yd(i, l) : l;
      }),
      n
    ),
    {},
  );
}
function Xd(e, t) {
  return typeof t.MouseEvent < 'u' && e instanceof t.MouseEvent;
}
function hy(e, t) {
  const n = { start: r, center: o, end: i };
  function r() {
    return 0;
  }
  function o(s) {
    return i(s) / 2;
  }
  function i(s) {
    return t - s;
  }
  function l(s, a) {
    return cs(e) ? n[e](s) : e(t, s, a);
  }
  return { measure: l };
}
function Hr() {
  let e = [];
  function t(o, i, l, u = { passive: !0 }) {
    let s;
    if ('addEventListener' in o)
      o.addEventListener(i, l, u), (s = () => o.removeEventListener(i, l, u));
    else {
      const a = o;
      a.addListener(l), (s = () => a.removeListener(l));
    }
    return e.push(s), r;
  }
  function n() {
    e = e.filter((o) => o());
  }
  const r = { add: t, clear: n };
  return r;
}
function my(e, t, n, r) {
  const o = Hr(),
    i = 1e3 / 60;
  let l = null,
    u = 0,
    s = 0;
  function a() {
    o.add(e, 'visibilitychange', () => {
      e.hidden && m();
    });
  }
  function f() {
    v(), o.clear();
  }
  function c(S) {
    if (!s) return;
    l || (l = S);
    const h = S - l;
    for (l = S, u += h; u >= i; ) n(), (u -= i);
    const p = Y(u / i);
    r(p), s && t.requestAnimationFrame(c);
  }
  function d() {
    s || (s = t.requestAnimationFrame(c));
  }
  function v() {
    t.cancelAnimationFrame(s), (l = null), (u = 0), (s = 0);
  }
  function m() {
    (l = null), (u = 0);
  }
  return { init: a, destroy: f, start: d, stop: v, update: n, render: r };
}
function yy(e, t) {
  const n = t === 'rtl',
    r = e === 'y',
    o = r ? 'y' : 'x',
    i = r ? 'x' : 'y',
    l = !r && n ? -1 : 1,
    u = f(),
    s = c();
  function a(m) {
    const { height: g, width: S } = m;
    return r ? g : S;
  }
  function f() {
    return r ? 'top' : n ? 'right' : 'left';
  }
  function c() {
    return r ? 'bottom' : n ? 'left' : 'right';
  }
  function d(m) {
    return m * l;
  }
  return {
    scroll: o,
    cross: i,
    startEdge: u,
    endEdge: s,
    measureSize: a,
    direction: d,
  };
}
function hn(e = 0, t = 0) {
  const n = Y(e - t);
  function r(a) {
    return a < e;
  }
  function o(a) {
    return a > t;
  }
  function i(a) {
    return r(a) || o(a);
  }
  function l(a) {
    return i(a) ? (r(a) ? e : t) : a;
  }
  function u(a) {
    return n ? a - n * Math.ceil((a - t) / n) : a;
  }
  return {
    length: n,
    max: t,
    min: e,
    constrain: l,
    reachedAny: i,
    reachedMax: o,
    reachedMin: r,
    removeOffset: u,
  };
}
function Jd(e, t, n) {
  const { constrain: r } = hn(0, e),
    o = e + 1;
  let i = l(t);
  function l(d) {
    return n ? Y((o + d) % o) : r(d);
  }
  function u() {
    return i;
  }
  function s(d) {
    return (i = l(d)), c;
  }
  function a(d) {
    return f().set(u() + d);
  }
  function f() {
    return Jd(e, u(), n);
  }
  const c = { get: u, set: s, add: a, clone: f };
  return c;
}
function gy(e, t, n, r, o, i, l, u, s, a, f, c, d, v, m, g, S, h, p) {
  const { cross: y, direction: w } = e,
    x = ['INPUT', 'SELECT', 'TEXTAREA'],
    P = { passive: !1 },
    k = Hr(),
    C = Hr(),
    A = hn(50, 225).constrain(v.measure(20)),
    R = { mouse: 300, touch: 400 },
    F = { mouse: 500, touch: 600 },
    X = m ? 43 : 25;
  let le = !1,
    se = 0,
    Ie = 0,
    qe = !1,
    De = !1,
    _ = !1,
    I = !1;
  function D(M) {
    if (!p) return;
    function $(pe) {
      (yu(p) || p(M, pe)) && re(pe);
    }
    const ue = t;
    k.add(ue, 'dragstart', (pe) => pe.preventDefault(), P)
      .add(ue, 'touchmove', () => {}, P)
      .add(ue, 'touchend', () => {})
      .add(ue, 'touchstart', $)
      .add(ue, 'mousedown', $)
      .add(ue, 'touchcancel', Re)
      .add(ue, 'contextmenu', Re)
      .add(ue, 'click', vn, !0);
  }
  function B() {
    k.clear(), C.clear();
  }
  function W() {
    const M = I ? n : t;
    C.add(M, 'touchmove', Ee, P)
      .add(M, 'touchend', Re)
      .add(M, 'mousemove', Ee, P)
      .add(M, 'mouseup', Re);
  }
  function _e(M) {
    const $ = M.nodeName || '';
    return x.includes($);
  }
  function Fe() {
    return (m ? F : R)[I ? 'mouse' : 'touch'];
  }
  function mt(M, $) {
    const ue = c.add(gu(M) * -1),
      pe = f.byDistance(M, !m).distance;
    return m || Y(M) < A
      ? pe
      : S && $
      ? pe * 0.5
      : f.byIndex(ue.get(), 0).distance;
  }
  function re(M) {
    const $ = Xd(M, r);
    (I = $),
      (_ = m && $ && !M.buttons && le),
      (le = Sr(o.get(), l.get()) >= 2),
      !($ && M.button !== 0) &&
        (_e(M.target) ||
          ((qe = !0),
          i.pointerDown(M),
          a.useFriction(0).useDuration(0),
          o.set(l),
          W(),
          (se = i.readPoint(M)),
          (Ie = i.readPoint(M, y)),
          d.emit('pointerDown')));
  }
  function Ee(M) {
    const $ = i.readPoint(M),
      ue = i.readPoint(M, y),
      pe = Sr($, se),
      yt = Sr(ue, Ie);
    if (!De && !I && (!M.cancelable || ((De = pe > yt), !De))) return Re(M);
    const be = i.pointerMove(M);
    pe > g && (_ = !0),
      a.useFriction(0.3).useDuration(1),
      u.start(),
      o.add(w(be)),
      M.preventDefault();
  }
  function Re(M) {
    const ue = f.byDistance(0, !1).index !== c.get(),
      pe = i.pointerUp(M) * Fe(),
      yt = mt(w(pe), ue),
      be = py(pe, yt),
      gt = X - 10 * be,
      qt = h + be / 50;
    (De = !1),
      (qe = !1),
      C.clear(),
      a.useDuration(gt).useFriction(qt),
      s.distance(yt, !m),
      (I = !1),
      d.emit('pointerUp');
  }
  function vn(M) {
    _ && (M.stopPropagation(), M.preventDefault(), (_ = !1));
  }
  function Ze() {
    return qe;
  }
  return { init: D, pointerDown: Ze, destroy: B };
}
function vy(e, t) {
  let r, o;
  function i(c) {
    return c.timeStamp;
  }
  function l(c, d) {
    const m = `client${(d || e.scroll) === 'x' ? 'X' : 'Y'}`;
    return (Xd(c, t) ? c : c.touches[0])[m];
  }
  function u(c) {
    return (r = c), (o = c), l(c);
  }
  function s(c) {
    const d = l(c) - l(o),
      v = i(c) - i(r) > 170;
    return (o = c), v && (r = c), d;
  }
  function a(c) {
    if (!r || !o) return 0;
    const d = l(o) - l(r),
      v = i(c) - i(r),
      m = i(c) - i(o) > 170,
      g = d / v;
    return v && !m && Y(g) > 0.1 ? g : 0;
  }
  return { pointerDown: u, pointerMove: s, pointerUp: a, readPoint: l };
}
function wy() {
  function e(n) {
    const { offsetTop: r, offsetLeft: o, offsetWidth: i, offsetHeight: l } = n;
    return {
      top: r,
      right: o + i,
      bottom: r + l,
      left: o,
      width: i,
      height: l,
    };
  }
  return { measure: e };
}
function Sy(e) {
  function t(r) {
    return e * (r / 100);
  }
  return { measure: t };
}
function Ey(e, t, n, r, o, i, l) {
  let u,
    s,
    a = [],
    f = !1;
  function c(g) {
    return o.measureSize(l.measure(g));
  }
  function d(g) {
    if (!i) return;
    (s = c(e)), (a = r.map(c));
    function S(p) {
      for (const y of p) {
        const w = y.target === e,
          x = r.indexOf(y.target),
          P = w ? s : a[x],
          k = c(w ? e : r[x]);
        if (Y(k - P) >= 0.5) {
          n.requestAnimationFrame(() => {
            g.reInit(), t.emit('resize');
          });
          break;
        }
      }
    }
    (u = new ResizeObserver((p) => {
      f || ((yu(i) || i(g, p)) && S(p));
    })),
      [e].concat(r).forEach((p) => u.observe(p));
  }
  function v() {
    u && u.disconnect(), (f = !0);
  }
  return { init: d, destroy: v };
}
function xy(e, t, n, r, o) {
  let i = 0,
    l = 0,
    u = r,
    s = o,
    a = e.get(),
    f = 0;
  function c() {
    const x = n.get() - e.get(),
      P = !u;
    let k = 0;
    return (
      P
        ? ((i = 0), e.set(n), (k = x))
        : ((i += x / u), (i *= s), (a += i), e.add(i), (k = a - f)),
      (l = gu(k)),
      (f = a),
      w
    );
  }
  function d() {
    const x = n.get() - t.get();
    return Y(x) < 0.001;
  }
  function v() {
    return u;
  }
  function m() {
    return l;
  }
  function g() {
    return i;
  }
  function S() {
    return p(r);
  }
  function h() {
    return y(o);
  }
  function p(x) {
    return (u = x), w;
  }
  function y(x) {
    return (s = x), w;
  }
  const w = {
    direction: m,
    duration: v,
    velocity: g,
    seek: c,
    settled: d,
    useBaseFriction: h,
    useBaseDuration: S,
    useFriction: y,
    useDuration: p,
  };
  return w;
}
function ky(e, t, n, r, o) {
  const i = o.measure(10),
    l = o.measure(50),
    u = hn(0.1, 0.99);
  let s = !1;
  function a() {
    return !(s || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function f(v) {
    if (!a()) return;
    const m = e.reachedMin(t.get()) ? 'min' : 'max',
      g = Y(e[m] - t.get()),
      S = n.get() - t.get(),
      h = u.constrain(g / l);
    n.subtract(S * h),
      !v &&
        Y(S) < i &&
        (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
  }
  function c(v) {
    s = !v;
  }
  return { constrain: f, toggleActive: c };
}
function Cy(e, t, n, r, o) {
  const i = hn(-t + e, 0),
    l = c(),
    u = f(),
    s = d();
  function a(m, g) {
    return Sr(m, g) < 1;
  }
  function f() {
    const m = l[0],
      g = lt(l),
      S = l.lastIndexOf(m),
      h = l.indexOf(g) + 1;
    return hn(S, h);
  }
  function c() {
    return n
      .map((m, g) => {
        const { min: S, max: h } = i,
          p = i.constrain(m),
          y = !g,
          w = vu(n, g);
        return y ? h : w || a(S, p) ? S : a(h, p) ? h : p;
      })
      .map((m) => parseFloat(m.toFixed(3)));
  }
  function d() {
    if (t <= e + o) return [i.max];
    if (r === 'keepSnaps') return l;
    const { min: m, max: g } = u;
    return l.slice(m, g);
  }
  return { snapsContained: s, scrollContainLimit: u };
}
function Ny(e, t, n) {
  const r = t[0],
    o = n ? r - e : lt(t);
  return { limit: hn(o, r) };
}
function Py(e, t, n, r) {
  const i = t.min + 0.1,
    l = t.max + 0.1,
    { reachedMin: u, reachedMax: s } = hn(i, l);
  function a(d) {
    return d === 1 ? s(n.get()) : d === -1 ? u(n.get()) : !1;
  }
  function f(d) {
    if (!a(d)) return;
    const v = e * (d * -1);
    r.forEach((m) => m.add(v));
  }
  return { loop: f };
}
function _y(e) {
  const { max: t, length: n } = e;
  function r(i) {
    const l = i - t;
    return n ? l / -n : 0;
  }
  return { get: r };
}
function Ry(e, t, n, r, o) {
  const { startEdge: i, endEdge: l } = e,
    { groupSlides: u } = o,
    s = c().map(t.measure),
    a = d(),
    f = v();
  function c() {
    return u(r)
      .map((g) => lt(g)[l] - g[0][i])
      .map(Y);
  }
  function d() {
    return r.map((g) => n[i] - g[i]).map((g) => -Y(g));
  }
  function v() {
    return u(a)
      .map((g) => g[0])
      .map((g, S) => g + s[S]);
  }
  return { snaps: a, snapsAligned: f };
}
function Ty(e, t, n, r, o, i) {
  const { groupSlides: l } = o,
    { min: u, max: s } = r,
    a = f();
  function f() {
    const d = l(i),
      v = !e || t === 'keepSnaps';
    return n.length === 1
      ? [i]
      : v
      ? d
      : d.slice(u, s).map((m, g, S) => {
          const h = !g,
            p = vu(S, g);
          if (h) {
            const y = lt(S[0]) + 1;
            return ec(y);
          }
          if (p) {
            const y = Xr(i) - lt(S)[0] + 1;
            return ec(y, lt(S)[0]);
          }
          return m;
        });
  }
  return { slideRegistry: a };
}
function Oy(e, t, n, r, o) {
  const { reachedAny: i, removeOffset: l, constrain: u } = r;
  function s(m) {
    return m.concat().sort((g, S) => Y(g) - Y(S))[0];
  }
  function a(m) {
    const g = e ? l(m) : u(m),
      S = t
        .map((p, y) => ({ diff: f(p - g, 0), index: y }))
        .sort((p, y) => Y(p.diff) - Y(y.diff)),
      { index: h } = S[0];
    return { index: h, distance: g };
  }
  function f(m, g) {
    const S = [m, m + n, m - n];
    if (!e) return S[0];
    if (!g) return s(S);
    const h = S.filter((p) => gu(p) === g);
    return h.length ? s(h) : lt(S) - n;
  }
  function c(m, g) {
    const S = t[m] - o.get(),
      h = f(S, g);
    return { index: m, distance: h };
  }
  function d(m, g) {
    const S = o.get() + m,
      { index: h, distance: p } = a(S),
      y = !e && i(S);
    if (!g || y) return { index: h, distance: m };
    const w = t[h] - p,
      x = m + f(w, 0);
    return { index: h, distance: x };
  }
  return { byDistance: d, byIndex: c, shortcut: f };
}
function Ly(e, t, n, r, o, i, l) {
  function u(c) {
    const d = c.distance,
      v = c.index !== t.get();
    i.add(d),
      d && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())),
      v && (n.set(t.get()), t.set(c.index), l.emit('select'));
  }
  function s(c, d) {
    const v = o.byDistance(c, d);
    u(v);
  }
  function a(c, d) {
    const v = t.clone().set(c),
      m = o.byIndex(v.get(), d);
    u(m);
  }
  return { distance: s, index: a };
}
function Ay(e, t, n, r, o, i) {
  let l = 0;
  function u() {
    i.add(document, 'keydown', s, !1), t.forEach(a);
  }
  function s(c) {
    c.code === 'Tab' && (l = new Date().getTime());
  }
  function a(c) {
    const d = () => {
      if (new Date().getTime() - l > 10) return;
      e.scrollLeft = 0;
      const g = t.indexOf(c),
        S = n.findIndex((h) => h.includes(g));
      mu(S) && (o.useDuration(0), r.index(S, 0));
    };
    i.add(c, 'focus', d, { passive: !0, capture: !0 });
  }
  return { init: u };
}
function To(e) {
  let t = e;
  function n() {
    return t;
  }
  function r(s) {
    t = l(s);
  }
  function o(s) {
    t += l(s);
  }
  function i(s) {
    t -= l(s);
  }
  function l(s) {
    return mu(s) ? s : s.get();
  }
  return { get: n, set: r, add: o, subtract: i };
}
function qd(e, t) {
  const n = e.scroll === 'x' ? i : l,
    r = t.style;
  let o = !1;
  function i(c) {
    return `translate3d(${c}px,0px,0px)`;
  }
  function l(c) {
    return `translate3d(0px,${c}px,0px)`;
  }
  function u(c) {
    o || (r.transform = n(e.direction(c)));
  }
  function s(c) {
    o = !c;
  }
  function a() {
    o ||
      ((r.transform = ''),
      t.getAttribute('style') || t.removeAttribute('style'));
  }
  return { clear: a, to: u, toggleActive: s };
}
function My(e, t, n, r, o, i, l, u, s) {
  const f = Br(o),
    c = Br(o).reverse(),
    d = h().concat(p());
  function v(k, C) {
    return k.reduce((A, R) => A - o[R], C);
  }
  function m(k, C) {
    return k.reduce((A, R) => (v(A, C) > 0 ? A.concat([R]) : A), []);
  }
  function g(k) {
    return i.map((C, A) => ({
      start: C - r[A] + 0.5 + k,
      end: C + t - 0.5 + k,
    }));
  }
  function S(k, C, A) {
    const R = g(C);
    return k.map((F) => {
      const X = A ? 0 : -n,
        le = A ? n : 0,
        se = A ? 'end' : 'start',
        Ie = R[F][se];
      return {
        index: F,
        loopPoint: Ie,
        slideLocation: To(-1),
        translate: qd(e, s[F]),
        target: () => (u.get() > Ie ? X : le),
      };
    });
  }
  function h() {
    const k = l[0],
      C = m(c, k);
    return S(C, n, !1);
  }
  function p() {
    const k = t - l[0] - 1,
      C = m(f, k);
    return S(C, -n, !0);
  }
  function y() {
    return d.every(({ index: k }) => {
      const C = f.filter((A) => A !== k);
      return v(C, t) <= 0.1;
    });
  }
  function w() {
    d.forEach((k) => {
      const { target: C, translate: A, slideLocation: R } = k,
        F = C();
      F !== R.get() && (A.to(F), R.set(F));
    });
  }
  function x() {
    d.forEach((k) => k.translate.clear());
  }
  return { canLoop: y, clear: x, loop: w, loopPoints: d };
}
function Iy(e, t, n) {
  let r,
    o = !1;
  function i(s) {
    if (!n) return;
    function a(f) {
      for (const c of f)
        if (c.type === 'childList') {
          s.reInit(), t.emit('slidesChanged');
          break;
        }
    }
    (r = new MutationObserver((f) => {
      o || ((yu(n) || n(s, f)) && a(f));
    })),
      r.observe(e, { childList: !0 });
  }
  function l() {
    r && r.disconnect(), (o = !0);
  }
  return { init: i, destroy: l };
}
function Dy(e, t, n, r) {
  const o = {};
  let i = null,
    l = null,
    u,
    s = !1;
  function a() {
    (u = new IntersectionObserver(
      (m) => {
        s ||
          (m.forEach((g) => {
            const S = t.indexOf(g.target);
            o[S] = g;
          }),
          (i = null),
          (l = null),
          n.emit('slidesInView'));
      },
      { root: e.parentElement, threshold: r },
    )),
      t.forEach((m) => u.observe(m));
  }
  function f() {
    u && u.disconnect(), (s = !0);
  }
  function c(m) {
    return $r(o).reduce((g, S) => {
      const h = parseInt(S),
        { isIntersecting: p } = o[h];
      return ((m && p) || (!m && !p)) && g.push(h), g;
    }, []);
  }
  function d(m = !0) {
    if (m && i) return i;
    if (!m && l) return l;
    const g = c(m);
    return m && (i = g), m || (l = g), g;
  }
  return { init: a, destroy: f, get: d };
}
function Fy(e, t, n, r, o, i) {
  const { measureSize: l, startEdge: u, endEdge: s } = e,
    a = n[0] && o,
    f = m(),
    c = g(),
    d = n.map(l),
    v = S();
  function m() {
    if (!a) return 0;
    const p = n[0];
    return Y(t[u] - p[u]);
  }
  function g() {
    if (!a) return 0;
    const p = i.getComputedStyle(lt(r));
    return parseFloat(p.getPropertyValue(`margin-${s}`));
  }
  function S() {
    return n
      .map((p, y, w) => {
        const x = !y,
          P = vu(w, y);
        return x ? d[y] + f : P ? d[y] + c : w[y + 1][u] - p[u];
      })
      .map(Y);
  }
  return { slideSizes: d, slideSizesWithGaps: v, startGap: f, endGap: c };
}
function zy(e, t, n, r, o, i, l, u, s) {
  const { startEdge: a, endEdge: f, direction: c } = e,
    d = mu(n);
  function v(h, p) {
    return Br(h)
      .filter((y) => y % p === 0)
      .map((y) => h.slice(y, y + p));
  }
  function m(h) {
    return h.length
      ? Br(h)
          .reduce((p, y, w) => {
            const x = lt(p) || 0,
              P = x === 0,
              k = y === Xr(h),
              C = o[a] - i[x][a],
              A = o[a] - i[y][f],
              R = !r && P ? c(l) : 0,
              F = !r && k ? c(u) : 0,
              X = Y(A - F - (C + R));
            return w && X > t + s && p.push(y), k && p.push(h.length), p;
          }, [])
          .map((p, y, w) => {
            const x = Math.max(w[y - 1] || 0);
            return h.slice(x, p);
          })
      : [];
  }
  function g(h) {
    return d ? v(h, n) : m(h);
  }
  return { groupSlides: g };
}
function Uy(e, t, n, r, o, i, l) {
  const {
      align: u,
      axis: s,
      direction: a,
      startIndex: f,
      loop: c,
      duration: d,
      dragFree: v,
      dragThreshold: m,
      inViewThreshold: g,
      slidesToScroll: S,
      skipSnaps: h,
      containScroll: p,
      watchResize: y,
      watchSlides: w,
      watchDrag: x,
    } = i,
    P = 2,
    k = wy(),
    C = k.measure(t),
    A = n.map(k.measure),
    R = yy(s, a),
    F = R.measureSize(C),
    X = Sy(F),
    le = hy(u, F),
    se = !c && !!p,
    Ie = c || !!p,
    {
      slideSizes: qe,
      slideSizesWithGaps: De,
      startGap: _,
      endGap: I,
    } = Fy(R, C, A, n, Ie, o),
    D = zy(R, F, S, c, C, A, _, I, P),
    { snaps: B, snapsAligned: W } = Ry(R, le, C, A, D),
    _e = -lt(B) + lt(De),
    { snapsContained: Fe, scrollContainLimit: mt } = Cy(F, _e, W, p, P),
    re = se ? Fe : W,
    { limit: Ee } = Ny(_e, re, c),
    Re = Jd(Xr(re), f, c),
    vn = Re.clone(),
    Ze = Br(n),
    ee = ({
      dragHandler: Zt,
      scrollBody: Ii,
      scrollBounds: Di,
      options: { loop: Zr },
    }) => {
      Zr || Di.constrain(Zt.pointerDown()), Ii.seek();
    },
    M = (
      {
        scrollBody: Zt,
        translate: Ii,
        location: Di,
        offsetLocation: Zr,
        scrollLooper: Cp,
        slideLooper: Np,
        dragHandler: Pp,
        animation: _p,
        eventHandler: Ou,
        options: { loop: Rp },
      },
      Tp,
    ) => {
      const Lu = Zt.velocity(),
        Au = Zt.settled();
      Au && !Pp.pointerDown() && (_p.stop(), Ou.emit('settle')),
        Au || Ou.emit('scroll'),
        Zr.set(Di.get() - Lu + Lu * Tp),
        Rp && (Cp.loop(Zt.direction()), Np.loop()),
        Ii.to(Zr.get());
    },
    $ = my(
      r,
      o,
      () => ee(Mi),
      (Zt) => M(Mi, Zt),
    ),
    ue = 0.68,
    pe = re[Re.get()],
    yt = To(pe),
    be = To(pe),
    gt = To(pe),
    qt = xy(yt, be, gt, d, ue),
    Li = Oy(c, re, _e, Ee, gt),
    Ai = Ly($, Re, vn, qt, Li, gt, l),
    _u = _y(Ee),
    Ru = Hr(),
    xp = Dy(t, n, l, g),
    { slideRegistry: Tu } = Ty(se, p, re, mt, D, Ze),
    kp = Ay(e, n, Tu, Ai, qt, Ru),
    Mi = {
      ownerDocument: r,
      ownerWindow: o,
      eventHandler: l,
      containerRect: C,
      slideRects: A,
      animation: $,
      axis: R,
      dragHandler: gy(
        R,
        e,
        r,
        o,
        gt,
        vy(R, o),
        yt,
        $,
        Ai,
        qt,
        Li,
        Re,
        l,
        X,
        v,
        m,
        h,
        ue,
        x,
      ),
      eventStore: Ru,
      percentOfView: X,
      index: Re,
      indexPrevious: vn,
      limit: Ee,
      location: yt,
      offsetLocation: be,
      options: i,
      resizeHandler: Ey(t, l, o, n, R, y, k),
      scrollBody: qt,
      scrollBounds: ky(Ee, be, gt, qt, X),
      scrollLooper: Py(_e, Ee, be, [yt, be, gt]),
      scrollProgress: _u,
      scrollSnapList: re.map(_u.get),
      scrollSnaps: re,
      scrollTarget: Li,
      scrollTo: Ai,
      slideLooper: My(R, F, _e, qe, De, B, re, be, n),
      slideFocus: kp,
      slidesHandler: Iy(t, l, w),
      slidesInView: xp,
      slideIndexes: Ze,
      slideRegistry: Tu,
      slidesToScroll: D,
      target: gt,
      translate: qd(R, t),
    };
  return Mi;
}
function jy() {
  const e = {};
  let t;
  function n(s) {
    t = s;
  }
  function r(s) {
    return e[s] || [];
  }
  function o(s) {
    return r(s).forEach((a) => a(t, s)), u;
  }
  function i(s, a) {
    return (e[s] = r(s).concat([a])), u;
  }
  function l(s, a) {
    return (e[s] = r(s).filter((f) => f !== a)), u;
  }
  const u = { init: n, emit: o, off: l, on: i };
  return u;
}
const By = {
  align: 'center',
  axis: 'x',
  container: null,
  slides: null,
  containScroll: 'trimSnaps',
  direction: 'ltr',
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0,
};
function $y(e) {
  function t(i, l) {
    return Yd(i, l || {});
  }
  function n(i) {
    const l = i.breakpoints || {},
      u = $r(l)
        .filter((s) => e.matchMedia(s).matches)
        .map((s) => l[s])
        .reduce((s, a) => t(s, a), {});
    return t(i, u);
  }
  function r(i) {
    return i
      .map((l) => $r(l.breakpoints || {}))
      .reduce((l, u) => l.concat(u), [])
      .map(e.matchMedia);
  }
  return { mergeOptions: t, optionsAtMedia: n, optionsMediaQueries: r };
}
function Hy(e) {
  let t = [];
  function n(i, l) {
    return (
      (t = l.filter(({ options: u }) => e.optionsAtMedia(u).active !== !1)),
      t.forEach((u) => u.init(i, e)),
      l.reduce((u, s) => Object.assign(u, { [s.name]: s }), {})
    );
  }
  function r() {
    t = t.filter((i) => i.destroy());
  }
  return { init: n, destroy: r };
}
function ii(e, t, n) {
  const r = e.ownerDocument,
    o = r.defaultView,
    i = $y(o),
    l = Hy(i),
    u = Hr(),
    s = jy(),
    { mergeOptions: a, optionsAtMedia: f, optionsMediaQueries: c } = i,
    { on: d, off: v, emit: m } = s,
    g = F;
  let S = !1,
    h,
    p = a(By, ii.globalOptions),
    y = a(p),
    w = [],
    x,
    P,
    k;
  function C() {
    const { container: ee, slides: M } = y;
    P = (cs(ee) ? e.querySelector(ee) : ee) || e.children[0];
    const ue = cs(M) ? P.querySelectorAll(M) : M;
    k = [].slice.call(ue || P.children);
  }
  function A(ee) {
    const M = Uy(e, P, k, r, o, ee, s);
    if (ee.loop && !M.slideLooper.canLoop()) {
      const $ = Object.assign({}, ee, { loop: !1 });
      return A($);
    }
    return M;
  }
  function R(ee, M) {
    S ||
      ((p = a(p, ee)),
      (y = f(p)),
      (w = M || w),
      C(),
      (h = A(y)),
      c([p, ...w.map(({ options: $ }) => $)]).forEach(($) =>
        u.add($, 'change', F),
      ),
      y.active &&
        (h.translate.to(h.location.get()),
        h.animation.init(),
        h.slidesInView.init(),
        h.slideFocus.init(),
        h.eventHandler.init(Ze),
        h.resizeHandler.init(Ze),
        h.slidesHandler.init(Ze),
        h.options.loop && h.slideLooper.loop(),
        P.offsetParent && k.length && h.dragHandler.init(Ze),
        (x = l.init(Ze, w))));
  }
  function F(ee, M) {
    const $ = B();
    X(), R(a({ startIndex: $ }, ee), M), s.emit('reInit');
  }
  function X() {
    h.dragHandler.destroy(),
      h.eventStore.clear(),
      h.translate.clear(),
      h.slideLooper.clear(),
      h.resizeHandler.destroy(),
      h.slidesHandler.destroy(),
      h.slidesInView.destroy(),
      h.animation.destroy(),
      l.destroy(),
      u.clear();
  }
  function le() {
    S || ((S = !0), u.clear(), X(), s.emit('destroy'));
  }
  function se(ee, M, $) {
    !y.active ||
      S ||
      (h.scrollBody.useBaseFriction().useDuration(M === !0 ? 0 : y.duration),
      h.scrollTo.index(ee, $ || 0));
  }
  function Ie(ee) {
    const M = h.index.add(1).get();
    se(M, ee, -1);
  }
  function qe(ee) {
    const M = h.index.add(-1).get();
    se(M, ee, 1);
  }
  function De() {
    return h.index.add(1).get() !== B();
  }
  function _() {
    return h.index.add(-1).get() !== B();
  }
  function I() {
    return h.scrollSnapList;
  }
  function D() {
    return h.scrollProgress.get(h.location.get());
  }
  function B() {
    return h.index.get();
  }
  function W() {
    return h.indexPrevious.get();
  }
  function _e() {
    return h.slidesInView.get();
  }
  function Fe() {
    return h.slidesInView.get(!1);
  }
  function mt() {
    return x;
  }
  function re() {
    return h;
  }
  function Ee() {
    return e;
  }
  function Re() {
    return P;
  }
  function vn() {
    return k;
  }
  const Ze = {
    canScrollNext: De,
    canScrollPrev: _,
    containerNode: Re,
    internalEngine: re,
    destroy: le,
    off: v,
    on: d,
    emit: m,
    plugins: mt,
    previousScrollSnap: W,
    reInit: g,
    rootNode: Ee,
    scrollNext: Ie,
    scrollPrev: qe,
    scrollProgress: D,
    scrollSnapList: I,
    scrollTo: se,
    selectedScrollSnap: B,
    slideNodes: vn,
    slidesInView: _e,
    slidesNotInView: Fe,
  };
  return R(t, n), setTimeout(() => s.emit('init'), 0), Ze;
}
ii.globalOptions = void 0;
function wu(e = {}, t = []) {
  const n = T.useRef(e),
    r = T.useRef(t),
    [o, i] = T.useState(),
    [l, u] = T.useState(),
    s = T.useCallback(() => {
      o && o.reInit(n.current, r.current);
    }, [o]);
  return (
    T.useEffect(() => {
      if (fy() && l) {
        ii.globalOptions = wu.globalOptions;
        const a = ii(l, n.current, r.current);
        return i(a), () => a.destroy();
      } else i(void 0);
    }, [l, i]),
    T.useEffect(() => {
      hu(n.current, e) || ((n.current = e), s());
    }, [e, s]),
    T.useEffect(() => {
      dy(r.current, t) || ((r.current = t), s());
    }, [t, s]),
    [u, o]
  );
}
wu.globalOptions = void 0;
const Vy = {
  active: !0,
  breakpoints: {},
  delay: 4e3,
  jump: !1,
  playOnInit: !0,
  stopOnFocusIn: !0,
  stopOnInteraction: !0,
  stopOnMouseEnter: !1,
  stopOnLastSnap: !1,
  rootNode: null,
};
function Su(e = {}) {
  let t,
    n,
    r,
    o = !1,
    i = !0,
    l = !1,
    u = 0;
  function s(w, x) {
    n = w;
    const { mergeOptions: P, optionsAtMedia: k } = x,
      C = P(Vy, Su.globalOptions),
      A = P(C, e);
    if (((t = k(A)), n.scrollSnapList().length <= 1)) return;
    (l = t.jump), (r = !1);
    const { eventStore: R, ownerDocument: F } = n.internalEngine(),
      X = n.rootNode(),
      le = (t.rootNode && t.rootNode(X)) || X,
      se = n.containerNode();
    n.on('pointerDown', c),
      t.stopOnInteraction || n.on('pointerUp', f),
      t.stopOnMouseEnter &&
        (R.add(le, 'mouseenter', () => {
          (i = !1), c();
        }),
        t.stopOnInteraction ||
          R.add(le, 'mouseleave', () => {
            (i = !0), f();
          })),
      t.stopOnFocusIn &&
        (R.add(se, 'focusin', c),
        t.stopOnInteraction || R.add(se, 'focusout', f)),
      R.add(F, 'visibilitychange', d),
      t.playOnInit && !v() && f();
  }
  function a() {
    n.off('pointerDown', c).off('pointerUp', f), c(), (r = !0), (o = !1);
  }
  function f() {
    if (r || !i) return;
    o || n.emit('autoplay:play');
    const { ownerWindow: w } = n.internalEngine();
    w.clearInterval(u), (u = w.setInterval(p, t.delay)), (o = !0);
  }
  function c() {
    if (r) return;
    o && n.emit('autoplay:stop');
    const { ownerWindow: w } = n.internalEngine();
    w.clearInterval(u), (u = 0), (o = !1);
  }
  function d() {
    if (v()) return (i = o), c();
    i && f();
  }
  function v() {
    const { ownerDocument: w } = n.internalEngine();
    return w.visibilityState === 'hidden';
  }
  function m(w) {
    typeof w < 'u' && (l = w), (i = !0), f();
  }
  function g() {
    o && c();
  }
  function S() {
    o && m();
  }
  function h() {
    return o;
  }
  function p() {
    const { index: w } = n.internalEngine(),
      x = w.clone().add(1).get(),
      P = n.scrollSnapList().length - 1;
    t.stopOnLastSnap && x === P && c(),
      n.canScrollNext() ? n.scrollNext(l) : n.scrollTo(0, l);
  }
  return {
    name: 'autoplay',
    options: e,
    init: s,
    destroy: a,
    play: m,
    stop: g,
    reset: S,
    isPlaying: h,
  };
}
Su.globalOptions = void 0;
function Zd() {
  const [e] = wu({ loop: !0, inViewThreshold: 0.7 }, [Su({ delay: 2e3 })]);
  return L('div', {
    className: 'embla',
    ref: e,
    children: J('div', {
      className: 'embla__container',
      children: [
        L('div', {
          className: 'embla__slide',
          children: L('img', { src: '/NFT_ex2.png', alt: 'loading...' }),
        }),
        L('div', {
          className: 'embla__slide',
          children: L('img', { src: '/NFT_ex2.png', alt: 'loading...' }),
        }),
        L('div', {
          className: 'embla__slide',
          children: L('img', { src: '/NFT_ex2.png', alt: 'loading...' }),
        }),
      ],
    }),
  });
}
function Wy() {
  return J('div', {
    children: [
      L('h3', { className: 'mt-9 font-bold text-[15px]', children: 'HOW TO' }),
      J('div', {
        className: 'w-4/5 m-auto text-start',
        children: [
          L('h2', {
            className: 'mt-10 mb-5 font-bold text-[15px]',
            children: '1. NFT 발급하고 타투스티커 받기 버튼 클릭',
          }),
          L('img', { src: '/howto1.png', alt: 'loading...' }),
          L('h2', {
            className: 'mt-10 mb-5 font-bold text-[15px]',
            children: '2. 나의 과를 선택하고 NFT 발급하기 버튼 클릭',
          }),
          L('h2', {
            className: 'mt-10 mb-5 font-bold text-[15px]',
            children: '3. 지갑 연결',
          }),
          L('h2', {
            className: 'mt-10 mb-5 font-bold text-[15px]',
            children: '4. 카카오톡에서 NFT 확인하기',
          }),
        ],
      }),
    ],
  });
}
function Qy() {
  return J('div', {
    className: 'h-screen flex flex-col place-content-center pb-10',
    children: [
      L('h3', { className: 'mt-9 font-bold text-[15px]', children: 'Event' }),
      J('div', {
        className: 'w-4/5 m-auto text-start',
        children: [
          L('h2', {
            className: 'mt-10 mb-5 font-bold text-[15px]',
            children:
              'EVENT 1. 내가 받은 NFT를 친구들에게 자랑하고 치킨 기프티콘을 받아가세요!',
          }),
          J('p', {
            className: 'font-medium text-[13px]',
            children: [
              '1. @blockblock_yonsei 팔로우 ',
              L('br', {}),
              '2. 내가 받은 NFT를 블록블록 태그 해서 스토리에 공유',
            ],
          }),
        ],
      }),
      J('div', {
        className: 'w-4/5 m-auto text-start',
        children: [
          L('h2', {
            className: 'mt-10 mb-5 font-bold text-[15px]',
            children: 'EVENT 2. 타투스티커 증정 이벤트',
          }),
          L('p', {
            className: 'font-medium text-[13px]',
            children:
              '5/20~5/24 기간동안, NFT 발급자를 대상으로 과 특색이 담긴 독수리 타투스티커 증정 (장소 추후 공지)',
          }),
        ],
      }),
      J('div', {
        className: 'w-4/5 m-auto text-start',
        children: [
          L('h2', {
            className: 'mt-10 mb-5 font-bold text-[15px]',
            children: 'EVENT 3. 아카라카 인증 이벤트',
          }),
          L('p', {
            className: 'font-medium text-[13px]',
            children:
              '타투스티커, NFT와 함께 아카라카를 즐기고 @blockblock_yonsei를 태그해서 스토리를 올려주세요!',
          }),
        ],
      }),
      L('p', {
        className: 'w-4/5 text-start m-auto font-medium text-[13px]',
        children:
          '아카라카 후, 나만의 디자인으로 NFT를 제작할 수있는 커스터마이징 이벤트에도 많은 관심 부탁드립니다!',
      }),
    ],
  });
}
function bd(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: Ky } = Object.prototype,
  { getPrototypeOf: Eu } = Object,
  Ni = ((e) => (t) => {
    const n = Ky.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  ht = (e) => ((e = e.toLowerCase()), (t) => Ni(t) === e),
  Pi = (e) => (t) => typeof t === e,
  { isArray: qn } = Array,
  Vr = Pi('undefined');
function Gy(e) {
  return (
    e !== null &&
    !Vr(e) &&
    e.constructor !== null &&
    !Vr(e.constructor) &&
    Ye(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const ep = ht('ArrayBuffer');
function Yy(e) {
  let t;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && ep(e.buffer)),
    t
  );
}
const Xy = Pi('string'),
  Ye = Pi('function'),
  tp = Pi('number'),
  _i = (e) => e !== null && typeof e == 'object',
  Jy = (e) => e === !0 || e === !1,
  Oo = (e) => {
    if (Ni(e) !== 'object') return !1;
    const t = Eu(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  qy = ht('Date'),
  Zy = ht('File'),
  by = ht('Blob'),
  eg = ht('FileList'),
  tg = (e) => _i(e) && Ye(e.pipe),
  ng = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (Ye(e.append) &&
          ((t = Ni(e)) === 'formdata' ||
            (t === 'object' &&
              Ye(e.toString) &&
              e.toString() === '[object FormData]'))))
    );
  },
  rg = ht('URLSearchParams'),
  og = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
function Jr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > 'u') return;
  let r, o;
  if ((typeof e != 'object' && (e = [e]), qn(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      l = i.length;
    let u;
    for (r = 0; r < l; r++) (u = i[r]), t.call(null, e[u], u, e);
  }
}
function np(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const rp = (() =>
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : global)(),
  op = (e) => !Vr(e) && e !== rp;
function fs() {
  const { caseless: e } = (op(this) && this) || {},
    t = {},
    n = (r, o) => {
      const i = (e && np(t, o)) || o;
      Oo(t[i]) && Oo(r)
        ? (t[i] = fs(t[i], r))
        : Oo(r)
        ? (t[i] = fs({}, r))
        : qn(r)
        ? (t[i] = r.slice())
        : (t[i] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Jr(arguments[r], n);
  return t;
}
const ig = (e, t, n, { allOwnKeys: r } = {}) => (
    Jr(
      t,
      (o, i) => {
        n && Ye(o) ? (e[i] = bd(o, n)) : (e[i] = o);
      },
      { allOwnKeys: r },
    ),
    e
  ),
  lg = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  sg = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  ug = (e, t, n, r) => {
    let o, i, l;
    const u = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
        (l = o[i]), (!r || r(l, e, t)) && !u[l] && ((t[l] = e[l]), (u[l] = !0));
      e = n !== !1 && Eu(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  ag = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  cg = (e) => {
    if (!e) return null;
    if (qn(e)) return e;
    let t = e.length;
    if (!tp(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  fg = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && Eu(Uint8Array)),
  dg = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const i = o.value;
      t.call(e, i[0], i[1]);
    }
  },
  pg = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  hg = ht('HTMLFormElement'),
  mg = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  tc = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  yg = ht('RegExp'),
  ip = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Jr(n, (o, i) => {
      let l;
      (l = t(o, i, e)) !== !1 && (r[i] = l || o);
    }),
      Object.defineProperties(e, r);
  },
  gg = (e) => {
    ip(e, (t, n) => {
      if (Ye(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (Ye(r)) {
        if (((t.enumerable = !1), 'writable' in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  vg = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((i) => {
          n[i] = !0;
        });
      };
    return qn(e) ? r(e) : r(String(e).split(t)), n;
  },
  wg = () => {},
  Sg = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  cl = 'abcdefghijklmnopqrstuvwxyz',
  nc = '0123456789',
  lp = { DIGIT: nc, ALPHA: cl, ALPHA_DIGIT: cl + cl.toUpperCase() + nc },
  Eg = (e = 16, t = lp.ALPHA_DIGIT) => {
    let n = '';
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function xg(e) {
  return !!(
    e &&
    Ye(e.append) &&
    e[Symbol.toStringTag] === 'FormData' &&
    e[Symbol.iterator]
  );
}
const kg = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (_i(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!('toJSON' in r)) {
            t[o] = r;
            const i = qn(r) ? [] : {};
            return (
              Jr(r, (l, u) => {
                const s = n(l, o + 1);
                !Vr(s) && (i[u] = s);
              }),
              (t[o] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  Cg = ht('AsyncFunction'),
  Ng = (e) => e && (_i(e) || Ye(e)) && Ye(e.then) && Ye(e.catch),
  E = {
    isArray: qn,
    isArrayBuffer: ep,
    isBuffer: Gy,
    isFormData: ng,
    isArrayBufferView: Yy,
    isString: Xy,
    isNumber: tp,
    isBoolean: Jy,
    isObject: _i,
    isPlainObject: Oo,
    isUndefined: Vr,
    isDate: qy,
    isFile: Zy,
    isBlob: by,
    isRegExp: yg,
    isFunction: Ye,
    isStream: tg,
    isURLSearchParams: rg,
    isTypedArray: fg,
    isFileList: eg,
    forEach: Jr,
    merge: fs,
    extend: ig,
    trim: og,
    stripBOM: lg,
    inherits: sg,
    toFlatObject: ug,
    kindOf: Ni,
    kindOfTest: ht,
    endsWith: ag,
    toArray: cg,
    forEachEntry: dg,
    matchAll: pg,
    isHTMLForm: hg,
    hasOwnProperty: tc,
    hasOwnProp: tc,
    reduceDescriptors: ip,
    freezeMethods: gg,
    toObjectSet: vg,
    toCamelCase: mg,
    noop: wg,
    toFiniteNumber: Sg,
    findKey: np,
    global: rp,
    isContextDefined: op,
    ALPHABET: lp,
    generateString: Eg,
    isSpecCompliantForm: xg,
    toJSONObject: kg,
    isAsyncFn: Cg,
    isThenable: Ng,
  };
function U(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = 'AxiosError'),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o);
}
E.inherits(U, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: E.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const sp = U.prototype,
  up = {};
[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL',
].forEach((e) => {
  up[e] = { value: e };
});
Object.defineProperties(U, up);
Object.defineProperty(sp, 'isAxiosError', { value: !0 });
U.from = (e, t, n, r, o, i) => {
  const l = Object.create(sp);
  return (
    E.toFlatObject(
      e,
      l,
      function (s) {
        return s !== Error.prototype;
      },
      (u) => u !== 'isAxiosError',
    ),
    U.call(l, e.message, t, n, r, o),
    (l.cause = e),
    (l.name = e.name),
    i && Object.assign(l, i),
    l
  );
};
const Pg = null;
function ds(e) {
  return E.isPlainObject(e) || E.isArray(e);
}
function ap(e) {
  return E.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function rc(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, i) {
          return (o = ap(o)), !n && i ? '[' + o + ']' : o;
        })
        .join(n ? '.' : '')
    : t;
}
function _g(e) {
  return E.isArray(e) && !e.some(ds);
}
const Rg = E.toFlatObject(E, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Ri(e, t, n) {
  if (!E.isObject(e)) throw new TypeError('target must be an object');
  (t = t || new FormData()),
    (n = E.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (g, S) {
        return !E.isUndefined(S[g]);
      },
    ));
  const r = n.metaTokens,
    o = n.visitor || f,
    i = n.dots,
    l = n.indexes,
    s = (n.Blob || (typeof Blob < 'u' && Blob)) && E.isSpecCompliantForm(t);
  if (!E.isFunction(o)) throw new TypeError('visitor must be a function');
  function a(m) {
    if (m === null) return '';
    if (E.isDate(m)) return m.toISOString();
    if (!s && E.isBlob(m))
      throw new U('Blob is not supported. Use a Buffer instead.');
    return E.isArrayBuffer(m) || E.isTypedArray(m)
      ? s && typeof Blob == 'function'
        ? new Blob([m])
        : Buffer.from(m)
      : m;
  }
  function f(m, g, S) {
    let h = m;
    if (m && !S && typeof m == 'object') {
      if (E.endsWith(g, '{}'))
        (g = r ? g : g.slice(0, -2)), (m = JSON.stringify(m));
      else if (
        (E.isArray(m) && _g(m)) ||
        ((E.isFileList(m) || E.endsWith(g, '[]')) && (h = E.toArray(m)))
      )
        return (
          (g = ap(g)),
          h.forEach(function (y, w) {
            !(E.isUndefined(y) || y === null) &&
              t.append(
                l === !0 ? rc([g], w, i) : l === null ? g : g + '[]',
                a(y),
              );
          }),
          !1
        );
    }
    return ds(m) ? !0 : (t.append(rc(S, g, i), a(m)), !1);
  }
  const c = [],
    d = Object.assign(Rg, {
      defaultVisitor: f,
      convertValue: a,
      isVisitable: ds,
    });
  function v(m, g) {
    if (!E.isUndefined(m)) {
      if (c.indexOf(m) !== -1)
        throw Error('Circular reference detected in ' + g.join('.'));
      c.push(m),
        E.forEach(m, function (h, p) {
          (!(E.isUndefined(h) || h === null) &&
            o.call(t, h, E.isString(p) ? p.trim() : p, g, d)) === !0 &&
            v(h, g ? g.concat(p) : [p]);
        }),
        c.pop();
    }
  }
  if (!E.isObject(e)) throw new TypeError('data must be an object');
  return v(e), t;
}
function oc(e) {
  const t = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\0',
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function xu(e, t) {
  (this._pairs = []), e && Ri(e, this, t);
}
const cp = xu.prototype;
cp.append = function (t, n) {
  this._pairs.push([t, n]);
};
cp.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, oc);
      }
    : oc;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + '=' + n(o[1]);
    }, '')
    .join('&');
};
function Tg(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
function fp(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || Tg,
    o = n && n.serialize;
  let i;
  if (
    (o
      ? (i = o(t, n))
      : (i = E.isURLSearchParams(t) ? t.toString() : new xu(t, n).toString(r)),
    i)
  ) {
    const l = e.indexOf('#');
    l !== -1 && (e = e.slice(0, l)),
      (e += (e.indexOf('?') === -1 ? '?' : '&') + i);
  }
  return e;
}
class Og {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    E.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const ic = Og,
  dp = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Lg = typeof URLSearchParams < 'u' ? URLSearchParams : xu,
  Ag = typeof FormData < 'u' ? FormData : null,
  Mg = typeof Blob < 'u' ? Blob : null,
  Ig = {
    isBrowser: !0,
    classes: { URLSearchParams: Lg, FormData: Ag, Blob: Mg },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  },
  pp = typeof window < 'u' && typeof document < 'u',
  Dg = ((e) => pp && ['ReactNative', 'NativeScript', 'NS'].indexOf(e) < 0)(
    typeof navigator < 'u' && navigator.product,
  ),
  Fg = (() =>
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function')(),
  zg = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: pp,
        hasStandardBrowserEnv: Dg,
        hasStandardBrowserWebWorkerEnv: Fg,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  ft = { ...zg, ...Ig };
function Ug(e, t) {
  return Ri(
    e,
    new ft.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, i) {
          return ft.isNode && E.isBuffer(n)
            ? (this.append(r, n.toString('base64')), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t,
    ),
  );
}
function jg(e) {
  return E.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === '[]' ? '' : t[1] || t[0],
  );
}
function Bg(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function hp(e) {
  function t(n, r, o, i) {
    let l = n[i++];
    if (l === '__proto__') return !0;
    const u = Number.isFinite(+l),
      s = i >= n.length;
    return (
      (l = !l && E.isArray(o) ? o.length : l),
      s
        ? (E.hasOwnProp(o, l) ? (o[l] = [o[l], r]) : (o[l] = r), !u)
        : ((!o[l] || !E.isObject(o[l])) && (o[l] = []),
          t(n, r, o[l], i) && E.isArray(o[l]) && (o[l] = Bg(o[l])),
          !u)
    );
  }
  if (E.isFormData(e) && E.isFunction(e.entries)) {
    const n = {};
    return (
      E.forEachEntry(e, (r, o) => {
        t(jg(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
function $g(e, t, n) {
  if (E.isString(e))
    try {
      return (t || JSON.parse)(e), E.trim(e);
    } catch (r) {
      if (r.name !== 'SyntaxError') throw r;
    }
  return (n || JSON.stringify)(e);
}
const ku = {
  transitional: dp,
  adapter: ['xhr', 'http'],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || '',
        o = r.indexOf('application/json') > -1,
        i = E.isObject(t);
      if ((i && E.isHTMLForm(t) && (t = new FormData(t)), E.isFormData(t)))
        return o ? JSON.stringify(hp(t)) : t;
      if (
        E.isArrayBuffer(t) ||
        E.isBuffer(t) ||
        E.isStream(t) ||
        E.isFile(t) ||
        E.isBlob(t)
      )
        return t;
      if (E.isArrayBufferView(t)) return t.buffer;
      if (E.isURLSearchParams(t))
        return (
          n.setContentType(
            'application/x-www-form-urlencoded;charset=utf-8',
            !1,
          ),
          t.toString()
        );
      let u;
      if (i) {
        if (r.indexOf('application/x-www-form-urlencoded') > -1)
          return Ug(t, this.formSerializer).toString();
        if ((u = E.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
          const s = this.env && this.env.FormData;
          return Ri(
            u ? { 'files[]': t } : t,
            s && new s(),
            this.formSerializer,
          );
        }
      }
      return i || o ? (n.setContentType('application/json', !1), $g(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || ku.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === 'json';
      if (t && E.isString(t) && ((r && !this.responseType) || o)) {
        const l = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (u) {
          if (l)
            throw u.name === 'SyntaxError'
              ? U.from(u, U.ERR_BAD_RESPONSE, this, null, this.response)
              : u;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: ft.classes.FormData, Blob: ft.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': void 0,
    },
  },
};
E.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
  ku.headers[e] = {};
});
const Cu = ku,
  Hg = E.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ]),
  Vg = (e) => {
    const t = {};
    let n, r, o;
    return (
      e &&
        e
          .split(
            `
`,
          )
          .forEach(function (l) {
            (o = l.indexOf(':')),
              (n = l.substring(0, o).trim().toLowerCase()),
              (r = l.substring(o + 1).trim()),
              !(!n || (t[n] && Hg[n])) &&
                (n === 'set-cookie'
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ', ' + r : r));
          }),
      t
    );
  },
  lc = Symbol('internals');
function lr(e) {
  return e && String(e).trim().toLowerCase();
}
function Lo(e) {
  return e === !1 || e == null ? e : E.isArray(e) ? e.map(Lo) : String(e);
}
function Wg(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const Qg = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function fl(e, t, n, r, o) {
  if (E.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!E.isString(t))) {
    if (E.isString(r)) return t.indexOf(r) !== -1;
    if (E.isRegExp(r)) return r.test(t);
  }
}
function Kg(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Gg(e, t) {
  const n = E.toCamelCase(' ' + t);
  ['get', 'set', 'has'].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, i, l) {
        return this[r].call(this, t, o, i, l);
      },
      configurable: !0,
    });
  });
}
class Ti {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(u, s, a) {
      const f = lr(s);
      if (!f) throw new Error('header name must be a non-empty string');
      const c = E.findKey(o, f);
      (!c || o[c] === void 0 || a === !0 || (a === void 0 && o[c] !== !1)) &&
        (o[c || s] = Lo(u));
    }
    const l = (u, s) => E.forEach(u, (a, f) => i(a, f, s));
    return (
      E.isPlainObject(t) || t instanceof this.constructor
        ? l(t, n)
        : E.isString(t) && (t = t.trim()) && !Qg(t)
        ? l(Vg(t), n)
        : t != null && i(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = lr(t)), t)) {
      const r = E.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return Wg(o);
        if (E.isFunction(n)) return n.call(this, o, r);
        if (E.isRegExp(n)) return n.exec(o);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(t, n) {
    if (((t = lr(t)), t)) {
      const r = E.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || fl(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(l) {
      if (((l = lr(l)), l)) {
        const u = E.findKey(r, l);
        u && (!n || fl(r, r[u], u, n)) && (delete r[u], (o = !0));
      }
    }
    return E.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || fl(this, this[i], i, t, !0)) && (delete this[i], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      E.forEach(this, (o, i) => {
        const l = E.findKey(r, i);
        if (l) {
          (n[l] = Lo(o)), delete n[i];
          return;
        }
        const u = t ? Kg(i) : String(i).trim();
        u !== i && delete n[i], (n[u] = Lo(o)), (r[u] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      E.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && E.isArray(r) ? r.join(', ') : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ': ' + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[lc] = this[lc] = { accessors: {} }).accessors,
      o = this.prototype;
    function i(l) {
      const u = lr(l);
      r[u] || (Gg(o, l), (r[u] = !0));
    }
    return E.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
Ti.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
]);
E.reduceDescriptors(Ti.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
E.freezeMethods(Ti);
const kt = Ti;
function dl(e, t) {
  const n = this || Cu,
    r = t || n,
    o = kt.from(r.headers);
  let i = r.data;
  return (
    E.forEach(e, function (u) {
      i = u.call(n, i, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    i
  );
}
function mp(e) {
  return !!(e && e.__CANCEL__);
}
function qr(e, t, n) {
  U.call(this, e ?? 'canceled', U.ERR_CANCELED, t, n),
    (this.name = 'CanceledError');
}
E.inherits(qr, U, { __CANCEL__: !0 });
function Yg(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new U(
          'Request failed with status code ' + n.status,
          [U.ERR_BAD_REQUEST, U.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n,
        ),
      );
}
const Xg = ft.hasStandardBrowserEnv
  ? {
      write(e, t, n, r, o, i) {
        const l = [e + '=' + encodeURIComponent(t)];
        E.isNumber(n) && l.push('expires=' + new Date(n).toGMTString()),
          E.isString(r) && l.push('path=' + r),
          E.isString(o) && l.push('domain=' + o),
          i === !0 && l.push('secure'),
          (document.cookie = l.join('; '));
      },
      read(e) {
        const t = document.cookie.match(
          new RegExp('(^|;\\s*)(' + e + ')=([^;]*)'),
        );
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove(e) {
        this.write(e, '', Date.now() - 864e5);
      },
    }
  : {
      write() {},
      read() {
        return null;
      },
      remove() {},
    };
function Jg(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function qg(e, t) {
  return t ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '') : e;
}
function yp(e, t) {
  return e && !Jg(t) ? qg(e, t) : t;
}
const Zg = ft.hasStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement('a');
      let r;
      function o(i) {
        let l = i;
        return (
          t && (n.setAttribute('href', l), (l = n.href)),
          n.setAttribute('href', l),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, '') : '',
            hash: n.hash ? n.hash.replace(/^#/, '') : '',
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === '/' ? n.pathname : '/' + n.pathname,
          }
        );
      }
      return (
        (r = o(window.location.href)),
        function (l) {
          const u = E.isString(l) ? o(l) : l;
          return u.protocol === r.protocol && u.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function bg(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || '';
}
function e1(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    i = 0,
    l;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (s) {
      const a = Date.now(),
        f = r[i];
      l || (l = a), (n[o] = s), (r[o] = a);
      let c = i,
        d = 0;
      for (; c !== o; ) (d += n[c++]), (c = c % e);
      if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), a - l < t)) return;
      const v = f && a - f;
      return v ? Math.round((d * 1e3) / v) : void 0;
    }
  );
}
function sc(e, t) {
  let n = 0;
  const r = e1(50, 250);
  return (o) => {
    const i = o.loaded,
      l = o.lengthComputable ? o.total : void 0,
      u = i - n,
      s = r(u),
      a = i <= l;
    n = i;
    const f = {
      loaded: i,
      total: l,
      progress: l ? i / l : void 0,
      bytes: u,
      rate: s || void 0,
      estimated: s && l && a ? (l - i) / s : void 0,
      event: o,
    };
    (f[t ? 'download' : 'upload'] = !0), e(f);
  };
}
const t1 = typeof XMLHttpRequest < 'u',
  n1 =
    t1 &&
    function (e) {
      return new Promise(function (n, r) {
        let o = e.data;
        const i = kt.from(e.headers).normalize();
        let { responseType: l, withXSRFToken: u } = e,
          s;
        function a() {
          e.cancelToken && e.cancelToken.unsubscribe(s),
            e.signal && e.signal.removeEventListener('abort', s);
        }
        let f;
        if (E.isFormData(o)) {
          if (ft.hasStandardBrowserEnv || ft.hasStandardBrowserWebWorkerEnv)
            i.setContentType(!1);
          else if ((f = i.getContentType()) !== !1) {
            const [g, ...S] = f
              ? f
                  .split(';')
                  .map((h) => h.trim())
                  .filter(Boolean)
              : [];
            i.setContentType([g || 'multipart/form-data', ...S].join('; '));
          }
        }
        let c = new XMLHttpRequest();
        if (e.auth) {
          const g = e.auth.username || '',
            S = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : '';
          i.set('Authorization', 'Basic ' + btoa(g + ':' + S));
        }
        const d = yp(e.baseURL, e.url);
        c.open(e.method.toUpperCase(), fp(d, e.params, e.paramsSerializer), !0),
          (c.timeout = e.timeout);
        function v() {
          if (!c) return;
          const g = kt.from(
              'getAllResponseHeaders' in c && c.getAllResponseHeaders(),
            ),
            h = {
              data:
                !l || l === 'text' || l === 'json'
                  ? c.responseText
                  : c.response,
              status: c.status,
              statusText: c.statusText,
              headers: g,
              config: e,
              request: c,
            };
          Yg(
            function (y) {
              n(y), a();
            },
            function (y) {
              r(y), a();
            },
            h,
          ),
            (c = null);
        }
        if (
          ('onloadend' in c
            ? (c.onloadend = v)
            : (c.onreadystatechange = function () {
                !c ||
                  c.readyState !== 4 ||
                  (c.status === 0 &&
                    !(c.responseURL && c.responseURL.indexOf('file:') === 0)) ||
                  setTimeout(v);
              }),
          (c.onabort = function () {
            c &&
              (r(new U('Request aborted', U.ECONNABORTED, e, c)), (c = null));
          }),
          (c.onerror = function () {
            r(new U('Network Error', U.ERR_NETWORK, e, c)), (c = null);
          }),
          (c.ontimeout = function () {
            let S = e.timeout
              ? 'timeout of ' + e.timeout + 'ms exceeded'
              : 'timeout exceeded';
            const h = e.transitional || dp;
            e.timeoutErrorMessage && (S = e.timeoutErrorMessage),
              r(
                new U(
                  S,
                  h.clarifyTimeoutError ? U.ETIMEDOUT : U.ECONNABORTED,
                  e,
                  c,
                ),
              ),
              (c = null);
          }),
          ft.hasStandardBrowserEnv &&
            (u && E.isFunction(u) && (u = u(e)), u || (u !== !1 && Zg(d))))
        ) {
          const g =
            e.xsrfHeaderName && e.xsrfCookieName && Xg.read(e.xsrfCookieName);
          g && i.set(e.xsrfHeaderName, g);
        }
        o === void 0 && i.setContentType(null),
          'setRequestHeader' in c &&
            E.forEach(i.toJSON(), function (S, h) {
              c.setRequestHeader(h, S);
            }),
          E.isUndefined(e.withCredentials) ||
            (c.withCredentials = !!e.withCredentials),
          l && l !== 'json' && (c.responseType = e.responseType),
          typeof e.onDownloadProgress == 'function' &&
            c.addEventListener('progress', sc(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == 'function' &&
            c.upload &&
            c.upload.addEventListener('progress', sc(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((s = (g) => {
              c &&
                (r(!g || g.type ? new qr(null, e, c) : g),
                c.abort(),
                (c = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(s),
            e.signal &&
              (e.signal.aborted ? s() : e.signal.addEventListener('abort', s)));
        const m = bg(d);
        if (m && ft.protocols.indexOf(m) === -1) {
          r(new U('Unsupported protocol ' + m + ':', U.ERR_BAD_REQUEST, e));
          return;
        }
        c.send(o || null);
      });
    },
  ps = { http: Pg, xhr: n1 };
E.forEach(ps, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t });
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t });
  }
});
const uc = (e) => `- ${e}`,
  r1 = (e) => E.isFunction(e) || e === null || e === !1,
  gp = {
    getAdapter: (e) => {
      e = E.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const o = {};
      for (let i = 0; i < t; i++) {
        n = e[i];
        let l;
        if (
          ((r = n),
          !r1(n) && ((r = ps[(l = String(n)).toLowerCase()]), r === void 0))
        )
          throw new U(`Unknown adapter '${l}'`);
        if (r) break;
        o[l || '#' + i] = r;
      }
      if (!r) {
        const i = Object.entries(o).map(
          ([u, s]) =>
            `adapter ${u} ` +
            (s === !1
              ? 'is not supported by the environment'
              : 'is not available in the build'),
        );
        let l = t
          ? i.length > 1
            ? `since :
` +
              i.map(uc).join(`
`)
            : ' ' + uc(i[0])
          : 'as no adapter specified';
        throw new U(
          'There is no suitable adapter to dispatch the request ' + l,
          'ERR_NOT_SUPPORT',
        );
      }
      return r;
    },
    adapters: ps,
  };
function pl(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new qr(null, e);
}
function ac(e) {
  return (
    pl(e),
    (e.headers = kt.from(e.headers)),
    (e.data = dl.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    gp
      .getAdapter(e.adapter || Cu.adapter)(e)
      .then(
        function (r) {
          return (
            pl(e),
            (r.data = dl.call(e, e.transformResponse, r)),
            (r.headers = kt.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            mp(r) ||
              (pl(e),
              r &&
                r.response &&
                ((r.response.data = dl.call(
                  e,
                  e.transformResponse,
                  r.response,
                )),
                (r.response.headers = kt.from(r.response.headers)))),
            Promise.reject(r)
          );
        },
      )
  );
}
const cc = (e) => (e instanceof kt ? { ...e } : e);
function Kn(e, t) {
  t = t || {};
  const n = {};
  function r(a, f, c) {
    return E.isPlainObject(a) && E.isPlainObject(f)
      ? E.merge.call({ caseless: c }, a, f)
      : E.isPlainObject(f)
      ? E.merge({}, f)
      : E.isArray(f)
      ? f.slice()
      : f;
  }
  function o(a, f, c) {
    if (E.isUndefined(f)) {
      if (!E.isUndefined(a)) return r(void 0, a, c);
    } else return r(a, f, c);
  }
  function i(a, f) {
    if (!E.isUndefined(f)) return r(void 0, f);
  }
  function l(a, f) {
    if (E.isUndefined(f)) {
      if (!E.isUndefined(a)) return r(void 0, a);
    } else return r(void 0, f);
  }
  function u(a, f, c) {
    if (c in t) return r(a, f);
    if (c in e) return r(void 0, a);
  }
  const s = {
    url: i,
    method: i,
    data: i,
    baseURL: l,
    transformRequest: l,
    transformResponse: l,
    paramsSerializer: l,
    timeout: l,
    timeoutMessage: l,
    withCredentials: l,
    withXSRFToken: l,
    adapter: l,
    responseType: l,
    xsrfCookieName: l,
    xsrfHeaderName: l,
    onUploadProgress: l,
    onDownloadProgress: l,
    decompress: l,
    maxContentLength: l,
    maxBodyLength: l,
    beforeRedirect: l,
    transport: l,
    httpAgent: l,
    httpsAgent: l,
    cancelToken: l,
    socketPath: l,
    responseEncoding: l,
    validateStatus: u,
    headers: (a, f) => o(cc(a), cc(f), !0),
  };
  return (
    E.forEach(Object.keys(Object.assign({}, e, t)), function (f) {
      const c = s[f] || o,
        d = c(e[f], t[f], f);
      (E.isUndefined(d) && c !== u) || (n[f] = d);
    }),
    n
  );
}
const vp = '1.6.8',
  Nu = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (e, t) => {
    Nu[e] = function (r) {
      return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
    };
  },
);
const fc = {};
Nu.transitional = function (t, n, r) {
  function o(i, l) {
    return (
      '[Axios v' +
      vp +
      "] Transitional option '" +
      i +
      "'" +
      l +
      (r ? '. ' + r : '')
    );
  }
  return (i, l, u) => {
    if (t === !1)
      throw new U(
        o(l, ' has been removed' + (n ? ' in ' + n : '')),
        U.ERR_DEPRECATED,
      );
    return (
      n &&
        !fc[l] &&
        ((fc[l] = !0),
        console.warn(
          o(
            l,
            ' has been deprecated since v' +
              n +
              ' and will be removed in the near future',
          ),
        )),
      t ? t(i, l, u) : !0
    );
  };
};
function o1(e, t, n) {
  if (typeof e != 'object')
    throw new U('options must be an object', U.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o],
      l = t[i];
    if (l) {
      const u = e[i],
        s = u === void 0 || l(u, i, e);
      if (s !== !0)
        throw new U('option ' + i + ' must be ' + s, U.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new U('Unknown option ' + i, U.ERR_BAD_OPTION);
  }
}
const hs = { assertOptions: o1, validators: Nu },
  Ot = hs.validators;
class li {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new ic(), response: new ic() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let o;
        Error.captureStackTrace
          ? Error.captureStackTrace((o = {}))
          : (o = new Error());
        const i = o.stack ? o.stack.replace(/^.+\n/, '') : '';
        r.stack
          ? i &&
            !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, '')) &&
            (r.stack +=
              `
` + i)
          : (r.stack = i);
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Kn(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 &&
      hs.assertOptions(
        r,
        {
          silentJSONParsing: Ot.transitional(Ot.boolean),
          forcedJSONParsing: Ot.transitional(Ot.boolean),
          clarifyTimeoutError: Ot.transitional(Ot.boolean),
        },
        !1,
      ),
      o != null &&
        (E.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : hs.assertOptions(
              o,
              { encode: Ot.function, serialize: Ot.function },
              !0,
            )),
      (n.method = (n.method || this.defaults.method || 'get').toLowerCase());
    let l = i && E.merge(i.common, i[n.method]);
    i &&
      E.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        (m) => {
          delete i[m];
        },
      ),
      (n.headers = kt.concat(l, i));
    const u = [];
    let s = !0;
    this.interceptors.request.forEach(function (g) {
      (typeof g.runWhen == 'function' && g.runWhen(n) === !1) ||
        ((s = s && g.synchronous), u.unshift(g.fulfilled, g.rejected));
    });
    const a = [];
    this.interceptors.response.forEach(function (g) {
      a.push(g.fulfilled, g.rejected);
    });
    let f,
      c = 0,
      d;
    if (!s) {
      const m = [ac.bind(this), void 0];
      for (
        m.unshift.apply(m, u),
          m.push.apply(m, a),
          d = m.length,
          f = Promise.resolve(n);
        c < d;

      )
        f = f.then(m[c++], m[c++]);
      return f;
    }
    d = u.length;
    let v = n;
    for (c = 0; c < d; ) {
      const m = u[c++],
        g = u[c++];
      try {
        v = m(v);
      } catch (S) {
        g.call(this, S);
        break;
      }
    }
    try {
      f = ac.call(this, v);
    } catch (m) {
      return Promise.reject(m);
    }
    for (c = 0, d = a.length; c < d; ) f = f.then(a[c++], a[c++]);
    return f;
  }
  getUri(t) {
    t = Kn(this.defaults, t);
    const n = yp(t.baseURL, t.url);
    return fp(n, t.params, t.paramsSerializer);
  }
}
E.forEach(['delete', 'get', 'head', 'options'], function (t) {
  li.prototype[t] = function (n, r) {
    return this.request(
      Kn(r || {}, { method: t, url: n, data: (r || {}).data }),
    );
  };
});
E.forEach(['post', 'put', 'patch'], function (t) {
  function n(r) {
    return function (i, l, u) {
      return this.request(
        Kn(u || {}, {
          method: t,
          headers: r ? { 'Content-Type': 'multipart/form-data' } : {},
          url: i,
          data: l,
        }),
      );
    };
  }
  (li.prototype[t] = n()), (li.prototype[t + 'Form'] = n(!0));
});
const Ao = li;
class Pu {
  constructor(t) {
    if (typeof t != 'function')
      throw new TypeError('executor must be a function.');
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let i;
        const l = new Promise((u) => {
          r.subscribe(u), (i = u);
        }).then(o);
        return (
          (l.cancel = function () {
            r.unsubscribe(i);
          }),
          l
        );
      }),
      t(function (i, l, u) {
        r.reason || ((r.reason = new qr(i, l, u)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new Pu(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
const i1 = Pu;
function l1(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function s1(e) {
  return E.isObject(e) && e.isAxiosError === !0;
}
const ms = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(ms).forEach(([e, t]) => {
  ms[t] = e;
});
const u1 = ms;
function wp(e) {
  const t = new Ao(e),
    n = bd(Ao.prototype.request, t);
  return (
    E.extend(n, Ao.prototype, t, { allOwnKeys: !0 }),
    E.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return wp(Kn(e, o));
    }),
    n
  );
}
const ie = wp(Cu);
ie.Axios = Ao;
ie.CanceledError = qr;
ie.CancelToken = i1;
ie.isCancel = mp;
ie.VERSION = vp;
ie.toFormData = Ri;
ie.AxiosError = U;
ie.Cancel = ie.CanceledError;
ie.all = function (t) {
  return Promise.all(t);
};
ie.spread = l1;
ie.isAxiosError = s1;
ie.mergeConfig = Kn;
ie.AxiosHeaders = kt;
ie.formToJSON = (e) => hp(E.isHTMLForm(e) ? new FormData(e) : e);
ie.getAdapter = gp.getAdapter;
ie.HttpStatusCode = u1;
ie.default = ie;
const Oi = ie,
  a1 = 'https://a2a-api.klipwallet.com/v2/a2a/prepare',
  c1 = 'MY YONSEI NFT';
async function Sp() {
  return (await Oi.post(a1, { bapp: { name: c1 }, type: 'auth' })).data
    .request_key;
}
const f1 = (e) => `https://klipwallet.com/?target=/a2a?request_key=${e}`;
async function d1(e, t) {
  const n = await Sp();
  e(f1(n));
  const r = setInterval(() => {
    Oi.get(
      `https://a2a-api.klipwallet.com/v2/a2a/result?request_key=${n}`,
    ).then((o) => {
      o.data.result &&
        (t(o.data.result.klaytn_address), clearInterval(r), e('DEFAULT'));
    });
  }, 1e3);
}
async function p1(e) {
  const t = await Sp();
  window.location.href = `kakaotalk://klipwallet/open?url=https://klipwallet.com/?target=/a2a?request_key=${t}`;
  const n = setInterval(() => {
    Oi.get(
      `https://a2a-api.klipwallet.com/v2/a2a/result?request_key=${t}`,
    ).then((r) => {
      r.data.result && (e(r.data.result.klaytn_address), clearInterval(n));
    });
  }, 1e3);
}
function Ep({ children: e }) {
  return L('div', {
    className:
      'p-10 fixed top-1/4 margin: 0 auto z-50 justify-center items-center w-fit max-w-[500px] h-fit bg-[#FFC939]',
    children: e,
  });
}
const hl = 'DEFAULT',
  dc = '0x00000000000000000000000000000';
function h1() {
  const e = H0(),
    [t, n] = T.useState(hl),
    [r, o] = T.useState(dc),
    i = () => {
      d1(n, async (u) => {
        o(u), e(`/Mint/${u}`);
      });
    },
    l = () => {
      p1(async (u) => {
        o(u), e(`/Mint/${u}`);
      });
    };
  return J('main', {
    className:
      'flex flex-col place-content-between gap-y-5 mt-8 font-roboto text-[#090707]  text-center',
    children: [
      J('h2', {
        className: ' font-bold text-[15px]',
        children: [
          '연세대학교 블록체인 동아리 ',
          L('br', {}),
          '블록블록과 함께하는',
        ],
      }),
      L('h1', {
        className: 'font-extrabold text-[24px] text-[#30A9DE]',
        children: 'MY YONSEI NFT',
      }),
      L('h2', {
        className: 'font-bold text-[15px]',
        children: 'AKARAKA EVENT',
      }),
      J('div', {
        className: 'w-full bg-[#D9E1E8]/20 rounded-[30px]',
        children: [
          L(Zd, {}),
          J('div', {
            className: 'my-10',
            children: [
              L('button', {
                type: 'button',
                className:
                  'max-[600px]:hidden mx-auto font-extrabold rounded-[15px] w-fit px-6 py-3 bg-[#30A9DE] text-[#D9E1E8]',
                onClick: () => i(),
                children: 'NFT 발급하고 타투스티커 받기',
              }),
              J('button', {
                type: 'button',
                className:
                  'min-[600px]:hidden mx-auto font-extrabold rounded-[15px] w-fit px-6 py-3 bg-[#30A9DE] text-[#D9E1E8]',
                onClick: () => l(),
                children: ['TEST', ' '],
              }),
            ],
          }),
          t !== hl
            ? J(Ep, {
                children: [
                  L('button', {
                    type: 'button',
                    className: 'text-end text-black',
                    onClick: () => n(hl),
                    children: 'X',
                  }),
                  L('div', {
                    children: L(ay, {
                      value: t,
                      size: 200,
                      style: { margin: 'auto' },
                    }),
                  }),
                  L('p', {
                    className: 'mt-10 ',
                    children: '카메라로 스캔 후, 카카오톡 로그인을 해주세요!',
                  }),
                ],
              })
            : r !== dc
            ? L('p', { children: r })
            : L('div', {}),
        ],
      }),
      L('h3', { className: 'mt-4 font-bold text-[15px]', children: 'ABOUT' }),
      J('h2', {
        className: 'mb-5 font-bold text-[20px]',
        children: [
          '나의 과 특징을 살린 NFT와 함께 ',
          L('br', {}),
          ' 2024 AKARAKA를 즐겨보세요!',
        ],
      }),
      J('p', {
        className: 'font-medium text-[13px]',
        children: [
          '2024 AKARAKA를 더욱 특별하게 보낼 수 있도록 ',
          L('br', {}),
          '다양한 모습을 가진 NFT와 타투스티커를 준비했습니다. ',
          L('br', {}),
          ' 서로의 NFT를 공유해보며 더 재밌는 AKARAKA를 보내보아요!',
        ],
      }),
      L(Wy, {}),
      L(Qy, {}),
    ],
  });
}
const m1 = {
    101: {
      Department_KR: '컴퓨터과학과',
      Department: 'Computer Science',
      maxRand: 3,
      Source_Pre: 'xyz',
    },
    102: {
      Department_KR: '컴퓨터과학과',
      Department: 'Electrical Engineering',
      maxRand: 2,
      Source_Pre: 'abc',
    },
    '000': {
      Department_KR: 'TEST',
      Department: 'TEST',
      maxRand: 2,
      Source_Pre: 'xyz',
    },
  },
  y1 = 'http://localhost:4000/makeNFT',
  g1 = 'https://yonseinft.s3.amazonaws.com/MAJOR';
function v1(e) {
  return Math.floor(Math.random() * e) + 1;
}
function w1(e, t, n) {
  const r = v1(n);
  if (e !== void 0) {
    const o = { address: e, tokenuri: `${g1}/${t}/json/${r}.json` };
    console.log(o), Oi.get(y1, { params: o }).then((i) => i.data);
  } else return !1;
  return !0;
}
function S1() {
  const [e, t] = T.useState(''),
    n = m1[e],
    [r, o] = T.useState(!1),
    i = Q0();
  return J('main', {
    className:
      'flex flex-col place-content-between gap-y-5 mt-10 font-roboto text-[#090707]  text-center',
    children: [
      L('h2', {
        className: ' font-bold text-[15px]',
        children: '연세대학교 블록블록과 000이 함께하는',
      }),
      L('h1', {
        className: 'font-extrabold text-[24px] text-[#30A9DE]',
        children: 'MY YONSEI NFT',
      }),
      L('h2', {
        className: 'font-bold text-[15px]',
        children: 'AKARAKA EVENT',
      }),
      r
        ? J(Ep, {
            children: [
              L('button', {
                type: 'button',
                className: 'text-end text-black',
                onClick: () => o(!1),
                children: 'X',
              }),
              J('p', {
                className: 'mt-10',
                children: [
                  '선택하신 과는 ',
                  n.Department_KR,
                  '입니다. 맞다면 발급 버튼을 눌러주세요! ',
                  L('br', {}),
                  '카톡 아이디별로 1개밖에 발급이 되지 않으니 신중하게 선택해주세요',
                ],
              }),
              L('button', {
                type: 'button',
                className:
                  'mx-auto font-extrabold rounded-[15px] w-fit px-6 py-3 bg-[#30A9DE] text-[#D9E1E8]',
                onClick: () => {
                  o(!1),
                    w1(i.address, n.Department, n.maxRand),
                    window.alert('NFT 민팅 완료!');
                },
                children: 'NFT 발급하기',
              }),
            ],
          })
        : L('div', {}),
      J('div', {
        className: 'w-full bg-[#D9E1E8]/20 rounded-[30px]',
        children: [
          L(Zd, {}),
          J('div', {
            className: 'my-10 w-4/5 flex place-content-between m-auto ',
            children: [
              L('input', {
                type: 'text',
                className: 'w-[240px] text-[13px] rounded-[15px] text-start',
                placeholder: '학번 가운데 3자리를 입력해주세요.(ex.110)',
                onChange: (l) => t(l.target.value),
              }),
              L('button', {
                type: 'button',
                className:
                  'mx-auto font-extrabold rounded-[15px] w-fit px-6 py-3 bg-[#30A9DE] text-[#D9E1E8]',
                onClick: () => {
                  n === void 0
                    ? window.alert('입력하신 학과가 존재하지 않습니다.')
                    : o(!0);
                },
                children: 'NFT 발급하기',
              }),
            ],
          }),
        ],
      }),
      L('h3', { className: 'mt-4 font-bold text-[15px]', children: 'ABOUT' }),
      J('h2', {
        className: 'mb-5 font-bold text-[20px]',
        children: [
          '나의 과 특징을 살린 NFT와 함께 ',
          L('br', {}),
          ' 2024 AKARAKA를 즐겨보세요!',
        ],
      }),
      J('p', {
        className: 'font-medium text-[13px]',
        children: [
          '2024 AKARAKA를 더욱 특별하게 보낼 수 있도록 ',
          L('br', {}),
          '다양한 모습을 가진 NFT와 타투스티커를 준비했습니다. ',
          L('br', {}),
          ' 서로의 NFT를 공유해보며 더 재밌는 AKARAKA를 보내보아요!',
        ],
      }),
    ],
  });
}
function E1() {
  return L('div', {
    className: 'm-auto w-screen max-w-[500px] bg-white',
    children: L(ty, {}),
  });
}
function x1() {
  return K0([
    {
      element: L(E1, {}),
      children: [
        { path: '/', element: L(h1, {}) },
        { path: '/Mint/:address', element: L(S1, {}) },
      ],
    },
  ]);
}
const k1 = document.getElementById('root'),
  C1 = Rd(k1);
C1.render(L(Qe.StrictMode, { children: L(ry, { children: L(x1, {}) }) }));
