import React from 'react'
import Todo from './Todo'

function TodoTasks({ todos, toggleCheck, toggleDelete }) {
  return todos.map((t, index: 0) => (
    <Todo
      key={index}
      toggleCheck={toggleCheck}
      toggleDelete={toggleDelete}
      index={index}
      t={t}
    />
  ))
}

export default TodoTasks
