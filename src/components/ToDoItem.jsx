import { MdDelete } from "react-icons/md";

function ToDoItem({ task, date, handleDelete }) {

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