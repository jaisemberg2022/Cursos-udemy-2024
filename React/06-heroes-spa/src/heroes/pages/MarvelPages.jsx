import React from 'react'
import { Typography, Divider } from "@mui/material";
import HeroList from '../components/HeroList';

export const MarvelPages = () => {
  return (
    <>
    <Typography variant='h4'>Marvel Comic</Typography>
      <Divider/>
      <HeroList publisher={'Marvel Comics'}/>
    </>
  )
}

