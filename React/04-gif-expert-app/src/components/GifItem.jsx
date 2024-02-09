import React from "react";
import { Divider, Card, CardContent, CardMedia } from "@mui/material";

export const GifItem = ({ url,title }) => {
    console.log(url)
  return (
    <>
      <Card sx={{flex:1,height:'auto'}}>
        <CardMedia component="img" alt={title} image={url} />
        <CardContent>{title}</CardContent>
      </Card>
      <Divider />
    </>
  );
};
