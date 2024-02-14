import React from 'react'
import { useContext } from 'react'
import { json } from 'react-router-dom';
import { UserContext } from './context/userContext';
import { Button } from '@mui/material';

const LoginPage = () => {

  const {user,setUser} = useContext(UserContext);
  return (
    <>
    <div>LoginPage</div>
    <pre>
      {JSON.stringify(user,null,3)}
    </pre>
    <br />
    <Button variant='outlined' onClick={()=> setUser({id:123,name:'app',email:'app@gmail.com'})}>Establecer usuario</Button>
    </>
  )
}

export default LoginPage