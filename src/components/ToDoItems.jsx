import styles from "./ToDoItems.module.css"
import ToDoItem from "./ToDoItem"

function ToDoItems({elements, handleDelete}) {
  return <>
    <div className={styles.itemsContainer}>
      {elements.map(element => (
        <ToDoItem key={element.task} task={element.task} date={element.date} handleDelete={handleDelete}></ToDoItem>))}
    </div>
  </>
}

export default ToDoItems