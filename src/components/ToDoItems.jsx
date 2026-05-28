import styles from "./ToDoItems.module.css"
import ToDoItem from "./ToDoItem"
import { useContext } from "react"
import {ToDoContext} from "../store/todo-context";

function ToDoItems() {
  const { elements, handleDelete } = useContext(ToDoContext)
  return <>
    <div className={styles.itemsContainer}>
      {elements.map(element => (
        <ToDoItem key={element.task} task={element.task} date={element.date} handleDelete={handleDelete}></ToDoItem>))}
    </div>
  </>
}

export default ToDoItems