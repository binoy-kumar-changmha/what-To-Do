import styles from "./EmptyMsg.module.css"
import { useContext } from "react"
import { ToDoContext} from "../store/todo-context";

function EmptyMsg() {
  const { elements } = useContext(ToDoContext)
  if (elements.length > 0) {
    return null
  }
  else return (
    <div className={styles.emptyMsg}>
      No tasks to display
    </div>
  )
}

export default EmptyMsg