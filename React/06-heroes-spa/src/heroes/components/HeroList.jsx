import React from "react";

import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import { Box } from "@mui/material";

const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);
  return (
    <Box px={4}>
      <ul>
        {heroes.map((hero) => (
          <li key={hero.id}>{hero.superhero}</li>
        ))}
      </ul>
    </Box>
  );
};

export default HeroList;
