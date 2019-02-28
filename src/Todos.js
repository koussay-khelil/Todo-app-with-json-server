import React from 'react'


const Todo = ({ todos, updateTodo, deleteTodo }) => {
  const todoList = todos.length ? (todos.map(todo => (
    <div className="collection-item" key={todo.id}> <span onClick={() => { updateTodo(todo.id) }}>{todo.content} </span> <button type="button" onClick={() => { deleteTodo(todo.id) }}> ✔ </button> </div>
  ))) : (<p className="center"> you have nothing so chillax mate </p>)
  return (
    <div className="todos collection">
      {todoList}
    </div>
  )
}
export default Todo
