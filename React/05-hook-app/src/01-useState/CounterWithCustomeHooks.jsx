import React from 'react'
import { useCounter } from '../hooks/useCounter'

const CounterWithCustomeHooks = () => {

    const {counter ,increment,decrement,restore} = useCounter();
  return (
    <>
        <h1>counter with hook:{counter} </h1>
        <hr />
        <button onClick={() => increment(1)}>+1</button>
        <button onClick={restore}>reset</button>
        <button onClick={()=>decrement(1)}>-1</button>
    </>
  )
}

export default CounterWithCustomeHooks