import { defineComponent as t, createVNode as a, createTextVNode as n } from "vue";
const e = /* @__PURE__ */ t({
  name: "EasemobChatroom",
  setup() {
    return () => a("div", {
      class: "easemob-chatroom"
    }, [n("hhhhhhhhh")]);
  }
}), m = {
  install: (o) => {
    console.log(o), o.component(e.name, e);
  }
};
export {
  m as default
};
