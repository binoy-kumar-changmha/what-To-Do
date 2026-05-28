import AddToDo from "./components/AddToDo"
import AppName from "./components/AppName"
import './App.css'
import ToDoItems from "./components/ToDoItems"
import EmptyMsg from "./components/EmptyMsg"
// import { useState, useReducer } from "react"
// import {ToDoContext} from "./store/todo-context"
import ToDoContextProvider from "./store/todo-context"

function App() {

  //const [elements, setElements] = useState([])

  // 1. normal way of updating state
  // function addToDo(event) {
  //   setElements([...elements, { task: event.task, date: event.date }])
  // }

  // const [elements, dispatchItems] = useReducer(reducer, [])

  // 2. Updating State from previous state
  // function addToDo(task, date) {
  //   setElements(currentValue =>
  //     [...currentValue, { task, date }])
  // }


  // function addToDo(task, date) {
  //   const newElement = {
  //     type: "ADD",
  //     payload: { task, date } // object format, so have to return in object format
  //   }
  //   dispatchItems(newElement)
  //   // setElements(currentValue =>
  //   //   [...currentValue, { task, date }])
  // }

  // function handleDelete(event) {
  //   // const newElements = elements.filter(
  //   //   element =>
  //   //     !(element.task === event.task && element.date === event.date));
  //   // setElements(newElements);
  //   const deleteElement = {
  //     type: "DELETE",
  //     payload: { task: event.task, date: event.date }
  //   }
  //   dispatchItems(deleteElement)
  // }

  return <ToDoContextProvider>
    <center>
      <AppName />
      <AddToDo />
      <EmptyMsg />
      <ToDoItems />
    </center>
  </ToDoContextProvider>
}

export default App