import React, { useState } from 'react'
import { useEffect } from 'react'

const Message = () => {

  const [cords,setCords] = useState({x:0,y:0});

  useEffect(() => {

    const onMouseMove = ({x,y}) =>{
      setCords({x,y})
    }

    window.addEventListener('mousemove',(onMouseMove))

    return () => {
      // window.removeEventListener('mousemove',onMouseMove);
    }
  }, [])
  
  return (
    <>
    <h3>Usuario ya existe</h3>
    {
      JSON.stringify(cords)
    }
    </>
  )
}

export default Message