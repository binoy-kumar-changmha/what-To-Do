import styles from "./AddToDo.module.css"
import { useState } from "react"
import { IoMdAdd } from "react-icons/io";

const AddToDo = ({handleAdd}) => {
  const [task, setTask] = useState("")
  const [date, setDate] = useState("")

  return <div className="container text-center">
    <div className="row jum-row">
      <div className="col-6">
        <input type="text" placeholder="Enter ToDo" className={styles.inputWidth} value={task} onChange={(e) => setTask(e.target.value)} />
      </div>
      <div className="col-4">
        <input type="date" className={styles.inputWidth} value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div className="col-2">
        <button
          onClick={() => {
            handleAdd({ task, date })
            setTask("")
            setDate("")
          }}
          type="button"
          className="btn btn-success jum-button">
            <IoMdAdd size={20} />
          </button>
      </div>
    </div>
  </div >
}

export default AddToDo