import { defineComponent } from "vue"
import "./style/message.css"
const MessageList = () => {
  const messageList = [0, 1, 2, 3, 4, 5, 6, 7]
  return (
    <div>{messageList.length && messageList.map(item => <p>{item}</p>)}</div>
  )
}
export default defineComponent({
  name: "MessageContainer",
  setup() {
    return () => {
      return (
        <>
          <div class="message_container">
            <MessageList />
          </div>
        </>
      )
    }
  }
})
