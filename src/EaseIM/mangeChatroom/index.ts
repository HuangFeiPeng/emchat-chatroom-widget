import { reactive, ref } from "vue"
import { EasemobChat } from "easemob-websdk"
export type DisplayMessageType =
  | EasemobChat.TextMsgBody
  | EasemobChat.ImgMsgBody
const messageCollect = reactive<DisplayMessageType[]>([])
const currentChatroomId = ref("")
export const useManageChatroom = () => {
  const setCurrentChatroomId = (roomId: string) => {
    currentChatroomId.value = roomId
  }
  const pushMessageToList = (message: DisplayMessageType) => {
    messageCollect.push(message)
  }
  const sendDisplayMessage = () => {}

  return {
    messageCollect,
    currentChatroomId,
    setCurrentChatroomId,
    sendDisplayMessage,
    pushMessageToList
  }
}
