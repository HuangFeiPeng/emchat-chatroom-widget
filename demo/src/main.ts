import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import EMChatroom from "../../build/emchat-chatroom-widget.esm.js"
console.log("EMChatroom", EMChatroom)
createApp(App).use(EMChatroom).mount("#app")
