import React from 'react'
import { Divider, Card, CardContent, CardMedia } from "@mui/material";

const HeroCard = ({hero}) => {
    const heroImageUrl  = `/assets/heroes/${hero.id}.jpg`;
    console.log(heroImageUrl) 
  return (
    <Card sx={{flex:"1" }}>
        <CardMedia component="img" alt={hero.superhero} image={heroImageUrl}/>
        <CardContent>{hero.superhero}</CardContent>
    </Card>
  )
}

export default HeroCard