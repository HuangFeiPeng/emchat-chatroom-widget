import { reactive } from "vue"

const messageCollect = reactive([])
const useManageMessage = () => {
  const pushMessageToList = () => {}
  const sendDisplayMessage = () => {}

  return {
    messageCollect,
    sendDisplayMessage,
    pushMessageToList
  }
}
