import React, { useEffect } from "react";
import { ListItem, ListItemText, Divider } from "@mui/material";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

  useEffect(()=>{
    getGifs(category);
  },[]);
    

  return (
    <>
      <ListItem>
        <ListItemText primary={category} />
      </ListItem>
      <Divider />
    </>
  );
};
