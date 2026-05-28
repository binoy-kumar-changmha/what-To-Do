import { MdDelete } from "react-icons/md";
import { useContext } from "react"
import {ToDoContext} from "../store/todo-context";

function ToDoItem({ task, date}) {
  const { handleDelete } = useContext(ToDoContext)

  return <div className="container">

    <div className="row jum-row">
      <div className="col-6">
        {task}
      </div>
      <div className="col-4">
        {date}
      </div>
      <div className="col-2">
        <button onClick={() => handleDelete({ task, date })} type="button" className="btn btn-danger jum-button"><MdDelete size={20} /></button>
      </div>
    </div>
  </div>
}

export default ToDoItem