import { defineComponent as s, h as m, openBlock as l, createElementBlock as B, createVNode as _, createTextVNode as d } from "vue";
const c = s({
  name: "MyButton",
  render() {
    return m("button", null, "MyButton");
  }
}), p = {
  name: "SFCButton"
}, f = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [o, r] of e)
    n[o] = r;
  return n;
};
function i(t, e, n, o, r, S) {
  return l(), B("button", null, "SFC Button");
}
const u = /* @__PURE__ */ f(p, [["render", i]]), a = s({
  name: "JSXButton",
  render() {
    return _("button", null, [d("JSX Button")]);
  }
}), x = {
  install(t) {
    t.component(c.name, c), t.component(u.name, u), t.component(a.name, a);
  }
};
export {
  a as JSXButton,
  c as MyButton,
  u as SFCButton,
  x as default
};
