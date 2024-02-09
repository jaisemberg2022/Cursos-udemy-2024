import React from "react";
import { Divider, Card, CardContent, CardMedia } from "@mui/material";
import PropTypes from 'prop-types'

export const GifItem = ({ url,title }) => {
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

GifItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired

}
