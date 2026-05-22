import styles from "./EmptyMsg.module.css"

function EmptyMsg() {
  return (
    <div className={styles.emptyMsg}>
      No tasks to display
    </div>
  )
}

export default EmptyMsg