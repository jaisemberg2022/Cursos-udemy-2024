import React, { useState ,memo, useMemo} from 'react'
import { Button, Typography } from "@mui/material"
import {useCounter} from '../hooks'
import Small from './Small'



const heavyStuff = (iterationsNumber = 100)=>{
  for(let i = 0;i<iterationsNumber;i++){
    console.log('renderizado')
  }
  return `${iterationsNumber} iteraciones hechas`;
}

const MemoHook = () => {

    const {counter,increment} = useCounter(2000);
    const [show, setShow] = useState(true);

    const memorizedMemo = useMemo(()=> heavyStuff(counter),[counter])
  return (
    <>
        <Typography variant='h4'>Counter <Small value={counter}/></Typography>
        <Typography variant='h6'>{memorizedMemo}</Typography>
        <Button variant='contained' color='primary' onClick={()=>{increment()}}>+1</Button>
        <Button variant='outlined' color='primary' onClick={()=>setShow(!show)} >Show /hide {JSON.stringify(show)}</Button>
    </>
  )
}

export default MemoHook