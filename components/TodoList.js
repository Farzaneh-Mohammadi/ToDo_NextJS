import React from 'react'
import {useSelector} from 'react-redux'
import TodoItem from './TodoItem';
import styles from "../styles/TodoItem.module.css";

const TodoList = () => {

    const todoList = useSelector((state) => state.todo.todoList)
console.log("todoList:", todoList);

  return (
    <div className={styles.todoItemContainer}>
        {todoList && todoList.length > 0 ? 
        todoList.map((todo) => 
            <TodoItem key={todo.id} todo={todo} />
         ) :
        'empty'
         }
</div> 
  )
}

export default TodoList