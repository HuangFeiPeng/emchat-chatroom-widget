import type { App } from "vue"
import EasemobChatroom from "./container"
export default {
  install: (app: App) => {
    // 在这里编写插件代码
    console.log(app)
    app.component(EasemobChatroom.name, EasemobChatroom)
  }
}
