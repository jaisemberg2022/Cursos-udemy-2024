import React from 'react'
import { List } from '@mui/material'
import TodoListItem from './TodoListItem'


const TodoList = ({todos,onDeleteTodo}) => {
  return (
    <>
        <List  dense={true} sx={{width:'50%',flexBasis:'50%',backgroundColor:'white'}}>
            {
                todos.map(todo => (
                    <TodoListItem key={todo.id} id={todo.id} description={todo.description} onDeleteTodo={onDeleteTodo}/>
                ))
            }
        </List>
    </>
  )
}

export default TodoList