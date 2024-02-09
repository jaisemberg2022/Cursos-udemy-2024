import React, { useState } from "react";
import {Typography,Stack,Box,List} from "@mui/material";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

export const GifExpert = () => {
  const [categories, setcategories] = useState(["Dragon ball"]);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setcategories([newCategory, ...categories]);
  };
  return (
    <>
      <Box display={'inline-flex'} flexDirection={'column'} p={3} gap={2}>
        {/* titulo */}
        <Typography variant="h2">Titulo</Typography>
        {/* input */}
        <AddCategory onNewCategory={onAddCategory}/>
        {/* imagenes */}
        <Stack display={"inline-flex"} alignItems={"flex-start"} gap={2} boxShadow={2} bgcolor={"white"}>
          {/* <List sx={{flexBasis:'100%', width:'100%'}} > */}
            {categories.map((categorie) => (<GifGrid key={categorie}  category={categorie}/>))}
          {/* </List> */}
        </Stack>
      </Box>
    </>
  );
};
