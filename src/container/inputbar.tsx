import { defineComponent } from "vue"
import "./style/inputbar.css"
export default defineComponent({
  name: "InputBarContainer",
  setup() {
    return () => (
      <>
        <div class={"input_bar_container"}></div>
      </>
    )
  }
})
