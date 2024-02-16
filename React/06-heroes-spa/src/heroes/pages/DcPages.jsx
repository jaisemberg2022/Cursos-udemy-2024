import React from 'react'
import { Typography, Divider } from "@mui/material";
import HeroList from '../components/HeroList';

export const DcPages = () => {
  return (
    <>
      <Typography variant='h4'>Dc Comic</Typography>
      <Divider/>
      <HeroList publisher={'DC Comics'}/>
    </>
  )
}

