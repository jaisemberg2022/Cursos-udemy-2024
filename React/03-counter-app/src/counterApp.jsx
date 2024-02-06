import {useState} from 'react'
import { Button, Stack, Typography } from "@mui/material";
import React from "react";

export const CounterApp = ({ value }) => {
    
    const [counter,setCounter] = useState(0)

    const handleAdd = () => {
        setCounter(counter +1);
    }

  return (
    <>
      <Stack p={2} display={"inline-flex"} gap={2} width={'auto'} boxShadow={2} alignItems={"center"} flexDirection={'column'} m={2}>
        <Typography variant="h4">CounterApp</Typography>
        <Typography variant="h6">{counter}</Typography>
        <Button variant="contained" color="primary" onClick={ handleAdd }>+1</Button>
      </Stack>
    </>
  );
};

import PropTypes from "prop-types";

CounterApp.propTypes = {
  value: PropTypes.number,
};
