import { useState } from "react"
import TodoCard from "../components/TodoCard"

const TodosPage = () => {

  // STATE anlegen
  const [ todos, setTodos ] = useState([
    { _id: "t1", title: "Wake the dog"},
    { _id: "t2", title: "Do some props"},
    { _id: "t3", title: "Understanding props forever"},
  ])

  // EVENT LISTENERS

  // LAYOUT
  return (
    <div className="todos-page">
      <h2>TodosPage</h2>

      {/* loop over DATA ARRAY
      => convert EACH item => Card RENDERN
      */}
      { todos.map( todo => (
        <TodoCard key={todo._id} todo={todo} />
      ) )}

    </div>
  )
}

export default TodosPage
