import { Typography } from '@mui/material'
import React from 'react'

const Quote = ({quote ,author}) => {
  return (
    <>
        <blockquote>
           <Typography variant="subtitle2">{quote}</Typography>
           <footer>--{author}</footer>
         </blockquote>
    </>
  )
}

export default Quote