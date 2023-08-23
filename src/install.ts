import type { App } from "vue"
export default {
  install: (app: App) => {
    // 在这里编写插件代码
    console.log(app)
    // app.component(Chatroom.name, Chatroom)
  }
}
