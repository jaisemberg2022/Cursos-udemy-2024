import React from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import { Box } from "@mui/material";
import HeroCard from "./HeroCard";

const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);
  return (
    <Box px={4} display={'inline-flex'} gap={2} flexWrap={'wrap'}>
        {heroes.map((hero) => (
          <HeroCard  key={hero.id} hero={hero}/>
        ))}

    </Box>
  );
};

export default HeroList;
