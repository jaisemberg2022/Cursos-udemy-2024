import React, { useEffect, useState } from "react";
import { ListItem, ListItemText, Divider } from "@mui/material";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";


export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);
  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };
  useEffect(() => {
    getImages();
  }, [category]);

  return (
    <>
      {images.map(({ id, title, url }) => (
        <GifItem key={id}/>
      ))}
    </>
  );
};
