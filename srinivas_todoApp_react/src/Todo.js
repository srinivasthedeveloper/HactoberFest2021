import React from 'react'

function Todo({ t, index, toggleCheck, toggleDelete }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <label
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '10px 20px 10px 0',
        }}
      >
        <input
          type="checkbox"
          checked={t.iscompleted}
          onChange={() => toggleCheck(index)}
          style={{ margin: '0 10px' }}
        />
        <h2>{t.name}</h2>
      </label>
      <button onClick={() => toggleDelete(index)}>Delete</button>
    </div>
  )
}

export default Todo
