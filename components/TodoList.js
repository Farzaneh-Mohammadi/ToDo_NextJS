import React from 'react'
import {useSelector} from 'react-redux'
import TodoItem from './TodoItem';

const TodoList = () => {

    const todoList = useSelector((state) => state.todo.todoList)
console.log("todoList:", todoList);

  return (
    <div>
        {todoList && todoList.length > 0 ? 
        todoList.map((todo) => {
            <TodoItem todo={todo}/>
        }) :
        'empty'
         }
</div> 
  )
}

export default TodoList