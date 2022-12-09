import React from 'react'

const TodoItem = ({todo}) => {
  return (
    <div>
        <div>

            <div>
                <p>{todo.title}</p>
            </div>
        </div>
    </div>
  )
}

export default TodoItem