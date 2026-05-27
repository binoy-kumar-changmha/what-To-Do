import styles from "./AddToDo.module.css"
import { useRef } from "react"
import { IoMdAdd } from "react-icons/io";

const AddToDo = ({handleAdd}) => {
  
  const taskRef = useRef("")
  const dateRef = useRef("")

  const handleSubmit = (e) => {
    e.preventDefault()
    handleAdd(taskRef.current.value, dateRef.current.value )
    taskRef.current.value = ""
    dateRef.current.value = ""
  }
  
  return <div className="container text-center">
    <form className="row jum-row" onSubmit={handleSubmit}>
      <div className="col-6">
        <input type="text" placeholder="Enter ToDo" className={styles.inputWidth} ref={taskRef} />
      </div>
      <div className="col-4">
        <input type="date" className={styles.inputWidth} ref={dateRef} />
      </div>
      <div className="col-2">
        <button
          className="btn btn-success jum-button">
            <IoMdAdd size={20} />
          </button>
      </div>
    </form>
  </div > 
}

export default AddToDo

// Using UseState
// export default AddToDo
// import styles from "./AddToDo.module.css"
// import { useState } from "react"
// import { IoMdAdd } from "react-icons/io";

// const AddToDo = ({handleAdd}) => {
//   const [task, setTask] = useState("")
//   const [date, setDate] = useState("")
  
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     handleAdd({ task, date })
//     setTask("")
//     setDate("")
//   }
  
//   return <div className="container text-center">
//     <form className="row jum-row" onSubmit={handleSubmit}>
//       <div className="col-6">
//         <input type="text" placeholder="Enter ToDo" className={styles.inputWidth} value={task} onChange={(e) => setTask(e.target.value)} />
//       </div>
//       <div className="col-4">
//         <input type="date" className={styles.inputWidth} value={date} onChange={(e) => setDate(e.target.value)} />
//       </div>
//       <div className="col-2">
//         <button
//           // onClick={() => {
//           //   handleAdd({ task, date })
//           //   setTask("")
//           //   setDate("")
//           // }}
//           className="btn btn-success jum-button">
//             <IoMdAdd size={20} />
//           </button>
//       </div>
//     </form>
//   </div >
// }

// export default AddToDo