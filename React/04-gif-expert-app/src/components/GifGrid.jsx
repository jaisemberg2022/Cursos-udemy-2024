import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useGetchsGif";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  console.log(isLoading);

  return (
    <>
      {isLoading && <h2  >Cargando...</h2>}
      {images.map((img) => (
        <GifItem key={img.id} {...img} />
      ))}
    </>
  );
};
