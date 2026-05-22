import AddToDo from "./components/AddToDo"
import AppName from "./components/AppName"
import './App.css'
import ToDoItems from "./components/ToDoItems"
import EmptyMsg from "./components/EmptyMsg"
import { useState } from "react"

function App() {

  const [elements, setElements] = useState([])

  function addToDo(event) {
    setElements([...elements, { task: event.task, date: event.date }])
  }
  function handleDelete(event) {
    const newElements = elements.filter(
      element =>
        !(element.task === event.task && element.date === event.date));
    setElements(newElements);
  }

  return <center>
    <AppName />
    <AddToDo handleAdd={addToDo} />
    {elements.length === 0 && <EmptyMsg />}
    <ToDoItems elements={elements} handleDelete={handleDelete} />
  </center>
}

export default App