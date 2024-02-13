import { Button } from '@mui/material'
import React from 'react'

const ShowIncrement = React.memo(({increment}) => {
console.log('renderizado')

  return (
    <Button variant='contained' color='primary' onClick={()=>{
        increment();
    }} >incrementar</Button>
  )
});

export default ShowIncrement