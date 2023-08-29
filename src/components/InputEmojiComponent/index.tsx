import { defineComponent, ref, onBeforeUnmount, onMounted } from "vue"
import emojis from "./emojis"
import "./index.css"
export default defineComponent({
  name: "InputEmojiComp",
  emits: ["appendEmojitoInput"],
  setup(props, { expose, emit }) {
    const isShowEmojiBox = ref(false)
    const emojiContainerRef = ref<any>()
    const onClick = (event: any) => {
      console.log("emojiContainerRef", emojiContainerRef.value)
      if (emojiContainerRef.value) {
        const bool = emojiContainerRef.value.contains(event.target)
        console.log(">>>>>bool", bool)
      }
    }
    const appendEmojitoInput = (emoji: any) => {
      emit("appendEmojitoInput", emoji)
    }
    onMounted(() => {
      document.addEventListener("click", onClick)
    })

    onBeforeUnmount(() => {
      console.log(">>>>>>组件卸载")
      document.removeEventListener("click", onClick)
    })

    expose({
      isShowEmojiBox
    })
    return () => {
      return (
        <>
          {isShowEmojiBox.value ? (
            <div ref={emojiContainerRef} class={"emoji_container"}>
              {emojis.map(emoji => {
                return (
                  <span onClick={() => appendEmojitoInput(emoji)}>{emoji}</span>
                )
              })}
            </div>
          ) : null}
        </>
      )
    }
  }
})
