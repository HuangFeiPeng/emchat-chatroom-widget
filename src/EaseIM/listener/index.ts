import { EasemobChat } from "easemob-websdk"
export const mountEaseIMListener = (EMClient: EasemobChat.Connection) => {
  console.log(">>>mountEaseIMListener")
  EMClient.addEventHandler("connection", {
    onConnected: () => {
      console.log(">>>>>IM 登录成功")
    }
  })
}
