const TodoCard = ({ todo }) => {
  return (
    <div className="todo-card">
      <div>{todo.title}</div>
    </div>
  )
}
 
export default TodoCard;