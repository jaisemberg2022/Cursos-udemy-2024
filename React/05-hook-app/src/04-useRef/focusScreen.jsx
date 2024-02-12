import { Button, TextField } from '@mui/material'
import React from 'react'
import { useRef } from 'react'

const FocusScreen = () => {


  const inputRef = useRef();

  const onClick =()=> {
    inputRef.current.select();
  }

  return (
    <>
        <h1>Focus Screen</h1>
        <hr />
        <input  autoComplete='off' ref={inputRef} name='nombre' placeholder='ingrese su nombre'  />
        <br />
        <br />
        <input  autoComplete='off'  name='apellido' placeholder='ingrese su nombre'  />
        <br />
        <br />
        <Button variant='contained' color='primary' disableElevation onClick={onClick}>focus</Button>
    </>
  )
}

export default FocusScreen