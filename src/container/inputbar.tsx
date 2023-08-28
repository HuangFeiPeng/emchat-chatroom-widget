import { defineComponent, ref } from "vue"
import { EasemobChat } from "easemob-websdk"
import { EMClient } from "../EaseIM"
import { useManageChatroom } from "../EaseIM/mangeChatroom"
import "./style/inputbar.css"
export enum PLACE_HOLDER_TEXT {
  TEXT = "Enter 发送输入的内容..."
}
//功能栏
const ControlStrip = () => {
  return (
    <>
      <div class={"control_strip_container"}>
        <div class={"control_strip_func_emoji"}>
          <svg
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="6997"
          >
            <path
              d="M510.944 960c-247.04 0-448-200.96-448-448s200.992-448 448-448c247.008 0 448 200.96 448 448S757.984 960 510.944 960zM510.944 128c-211.744 0-384 172.256-384 384 0 211.744 172.256 384 384 384 211.744 0 384-172.256 384-384C894.944 300.256 722.688 128 510.944 128zM512 773.344c-89.184 0-171.904-40.32-226.912-110.624-10.88-13.92-8.448-34.016 5.472-44.896 13.888-10.912 34.016-8.48 44.928 5.472 42.784 54.688 107.136 86.048 176.512 86.048 70.112 0 134.88-31.904 177.664-87.552 10.784-14.016 30.848-16.672 44.864-5.888 14.016 10.784 16.672 30.88 5.888 44.864C685.408 732.32 602.144 773.344 512 773.344zM368 515.2c-26.528 0-48-21.472-48-48l0-64c0-26.528 21.472-48 48-48s48 21.472 48 48l0 64C416 493.696 394.496 515.2 368 515.2zM656 515.2c-26.496 0-48-21.472-48-48l0-64c0-26.528 21.504-48 48-48s48 21.472 48 48l0 64C704 493.696 682.496 515.2 656 515.2z"
              fill="#272636"
              p-id="6998"
            ></path>
          </svg>
        </div>
      </div>
    </>
  )
}
export default defineComponent({
  name: "InputBarContainer",
  setup() {
    const inputContent = ref("")
    const setInputContent = (event: Event) => {
      inputContent.value = (event.target as HTMLInputElement).value
    }
    const { currentChatroomId, loginUserInfo, sendDisplayMessage } =
      useManageChatroom()
    const sendMessage = async (event: KeyboardEvent) => {
      console.log(">>>>>event", event.code)
      if (inputContent.value.match(/^\s*$/)) return
      if (event.code === "Enter" && !event.shiftKey) {
        event.preventDefault()
        console.log(">>>>>>调用发送方法")
        const param: EasemobChat.CreateTextMsgParameters = {
          chatType: "chatRoom",
          type: "txt",
          to: currentChatroomId.value,
          msg: inputContent.value,
          from: EMClient.user,
          ext: {
            nickname: loginUserInfo.nickname
          }
        }
        try {
          await sendDisplayMessage(param)
          inputContent.value = ""
        } catch (error) {
          console.log(">>>>>消息发送失败", error)
        }
      }
    }
    return () => (
      <>
        <div class={"input_bar_container"}>
          <ControlStrip />
          <div class={"message_content_input_box"}>
            <input
              class={"message_content_input"}
              type="text"
              value={inputContent.value}
              onInput={setInputContent}
              placeholder={PLACE_HOLDER_TEXT.TEXT}
              onKeyup={sendMessage}
            />
          </div>
        </div>
      </>
    )
  }
})
