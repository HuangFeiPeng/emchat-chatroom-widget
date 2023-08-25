import { defineComponent, onMounted } from "vue"
import { EMClient } from "../EaseIM"
import "./style/index.css"
/* components */
import MessageContainer from "./message"
import InputBarContainer from "./message"
console.log("EMClient", EMClient)
export default defineComponent({
  name: "EasemobChatroom",
  props: {
    username: {
      type: String,
      default: "",
      required: true
    },
    password: {
      type: String,
      default: ""
    },
    accessToken: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    const loginIM = async () => {
      if (!EMClient) return
      try {
        if (props.accessToken) {
          await EMClient.open({
            user: props.username,
            accessToken: props.accessToken
          })
        } else {
          await EMClient.open({
            user: props.username,
            pwd: props.password
          })
        }
      } catch (error: any) {
        throw `${error.data.message}`
      }
    }
    const closeIM = async (): Promise<void> => {
      console.log(">>>>>断开连接")
      //   EMClient.close()
    }
    onMounted(() => {
      loginIM()
    })
    return {
      loginIM,
      closeIM
    }
  },
  render() {
    return (
      <>
        <div class={"easemob_chatroom_container"}>
          <MessageContainer />
          <InputBarContainer />
        </div>
      </>
    )
  }
})
