import { createContext, useReducer } from 'react';

const ToDoContext = createContext({
  addToDo: () => { },
  elements: [],
  handleDelete: () => { }
});

const reducer = (currentToDoItems, action) => {
  if (action.type === "ADD") {
    return [...currentToDoItems, action.payload]
  }
  else if (action.type === "DELETE") {
    return currentToDoItems.filter(
      element => !(element.task === action.payload.task && element.date === action.payload.date));
  }
  return currentToDoItems;
}

const ToDoContextProvider = ({ children }) => {
  const [elements, dispatchItems] = useReducer(reducer, [])

  function addToDo(task, date) {
    const newElement = {
      type: "ADD",
      payload: { task, date } // object format, so have to return in object format
    }
    dispatchItems(newElement)
  }

  function handleDelete(event) {
    const deleteElement = {
      type: "DELETE",
      payload: { task: event.task, date: event.date }
    }
    dispatchItems(deleteElement)
  }

  return <ToDoContext.Provider value={{ addToDo, elements, handleDelete }}>
    {children}
  </ToDoContext.Provider>
}

export { ToDoContext }
export default ToDoContextProvider