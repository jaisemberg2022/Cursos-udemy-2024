import React, { useState ,memo} from 'react'
import { Button, Typography } from "@mui/material"
import {useCounter} from '../hooks'
import Small from './Small'



const Memorize = () => {

    const {counter,increment} = useCounter(10);
    const [show, setShow] = useState(true);
  return (
    <>
        <Typography variant='h4'>Counter <Small value={counter}/></Typography>
        <Button variant='contained' color='primary' onClick={()=>{increment()}}>+1</Button>
        <Button variant='outlined' color='primary' onClick={()=>setShow(!show)} >Show /hide {JSON.stringify(show)}</Button>
    </>
  )
}

export default Memorize