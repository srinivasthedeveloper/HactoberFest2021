import React, { useState, useRef, useEffect } from 'react'
import TodoTasks from './TodoTasks'

function App() {
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('myTodoList'))
    if (storedTodos) {
      setTasks(storedTodos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('myTodoList', JSON.stringify(tasks))
  }, [tasks])
  const taskInputRef = useRef()

  const handleTask = (e) => {
    if (taskInputRef.current.value !== '') {
      setTasks([
        ...tasks,
        { name: taskInputRef.current.value, iscompleted: false },
      ])
      taskInputRef.current.value = ''
    }
  }
  const handleClear = (e) => {
    setTasks([])
  }
  const handleCheck = (i) => {
    let update = [...tasks]
    update[i] = { ...update[i], iscompleted: !update[i].iscompleted }
    setTasks(update)
  }
  const handleDelete = (i) => {
    setTasks(tasks.filter((t) => t !== tasks[i]))
  }
  return (
    <>
      <h1>Todo List</h1>
      <h3>
        completed={tasks.filter((e) => e.iscompleted).length} pending=
        {tasks.filter((e) => !e.iscompleted).length} total={tasks.length}
      </h3>
      <input ref={taskInputRef} type="text" />
      <button onClick={handleTask}>Add</button>
      <button onClick={handleClear}>clear</button>
      <TodoTasks
        todos={tasks}
        toggleCheck={handleCheck}
        toggleDelete={handleDelete}
      />
    </>
  )
}

export default App
