import {useState} from 'react'
import { Button, Stack, Typography,ButtonGroup } from "@mui/material";
import React from "react";

export const CounterApp = ({ value }) => {
    
    const [counter,setCounter] = useState(value)

    const handleAdd = () => setCounter(counter +1);
    const hanndleSubstract =()=> setCounter(counter -1);
    const hanndleReset =()=> setCounter(value);
    

  return (
    <>
      <Stack p={2} display={"inline-flex"} gap={2} width={'auto'} boxShadow={2} alignItems={"center"} flexDirection={'column'} m={2}>
        <Typography variant="h4">CounterApp</Typography>
        <h6>{counter}</h6>
        <Stack width={'100%'} display={'inline-flex'} gap={1} flexDirection={'row'}>
             <ButtonGroup variant="outlined">
                <Button size='small' onClick={ handleAdd }>+1</Button>
                <Button onClick={hanndleReset}>restore</Button>
                <Button onClick={hanndleSubstract}>-1</Button>
            </ButtonGroup>
        </Stack>
      </Stack>
    </>
  );
};

import PropTypes from "prop-types";

CounterApp.propTypes = {
  value: PropTypes.number,
};
