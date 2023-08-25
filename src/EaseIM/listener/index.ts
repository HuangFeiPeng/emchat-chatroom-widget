import { EasemobChat } from "easemob-websdk"
import { useManageChatroom } from "../mangeChatroom"
import { manageEasemobApis } from "../imApis"
export const mountEaseIMListener = (EMClient: EasemobChat.Connection) => {
  const { pushMessageToList } = useManageChatroom()
  const { joinChatroom } = manageEasemobApis()
  console.log(">>>mountEaseIMListener")
  EMClient.addEventHandler("connection", {
    onConnected: () => {
      console.log(">>>>>onConnected")
      joinChatroom()
    },
    onDisconnected: () => {
      console.log(">>>>>Disconnected")
    },
    onError: (error: any) => {
      console.log(">>>>>>Error", error)
    }
  })
  EMClient.addEventHandler("message", {
    onTextMessage(msg) {
      pushMessageToList(msg)
    },
    onImageMessage(msg) {
      pushMessageToList(msg)
    }
  })
  EMClient.addEventHandler("chatroomEvent", {
    onChatroomEvent(eventData) {
      console.log(">>>>chatroomEvent", eventData)
    }
  })
}
