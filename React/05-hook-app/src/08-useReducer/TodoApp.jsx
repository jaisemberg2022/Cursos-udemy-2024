import { Stack,Typography } from '@mui/material'
import React, { useReducer,useEffect } from 'react'
import { todoReducer } from './todoReducer'
import TodoList from './components/TodoList'
import TodoAdd from './components/TodoAdd'


const TodoApp = () => {

const initialState = [];
const init = ()=>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}
const [todos, dispatch] = useReducer(todoReducer,initialState,init);

useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos));

}, [todos])


const handdleTodo = (todo)=>{
    const action = {
        type:'[TODO] Add todo',
        payload:todo
    }
    dispatch(action);
}

const handdleDelete = (id)=>{
    dispatch({
        type:'[TODO] Delete todo',
        payload:id
    })
} 

  return (
    <>
        <Typography variant='h3'>TodoApp</Typography>
        <hr />
        <Stack mt={2} px={3}  display={'inline-flex'} justifyContent={'space-between'} flexDirection={'row'} width={'100%'}>
            <TodoList todos={todos} onDeleteTodo={handdleDelete}/>
            <TodoAdd onNewTodo={handdleTodo} />
        </Stack>
    </>
  )
}

export default TodoApp