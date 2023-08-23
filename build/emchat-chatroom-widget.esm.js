import { defineComponent as n, createVNode as e, createTextVNode as r } from "vue";
const t = /* @__PURE__ */ n({
  name: "Chatroom",
  setup: () => () => e("div", null, [e("h1", null, [r("Chatroom")])])
}), a = {
  install: (o) => {
    console.log(o), o.component(t.name, t);
  }
};
export {
  a as default
};
