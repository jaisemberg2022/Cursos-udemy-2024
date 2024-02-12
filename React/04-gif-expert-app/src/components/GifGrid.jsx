import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useGetchsGif";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  console.log(isLoading);

  return (
    <>
      <Typography variant="h4">{category}</Typography>
      {isLoading && <h2>Cargando...</h2>}
      {images.map((img) => (
        <GifItem key={img.id} {...img} />
      ))}
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
