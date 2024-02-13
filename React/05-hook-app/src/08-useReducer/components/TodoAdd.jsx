import React, { useState } from "react";
import { Button, Stack, TextField } from "@mui/material";
import {useForm} from '../../hooks'


const TodoAdd = ({onNewTodo}) => {
  

  const {description,onInputChnge,onDeletForm} = useForm({
    description:''
  })

  const onSubmit =(event)=>{
    event.preventDefault();
    if (description.length <=1) return;
    const newTodo = {
      id:new Date().getDate() * 3,
      donde:false,
      description
    }
    onNewTodo(newTodo);
    onDeletForm()
  }


  return (
    <Stack
    gap={1}
    component={"form"}
    display={"inline-flex"}
    flexDirection={"column"}
    alignItems={"start"}
    onSubmit={onSubmit}
  >
      <TextField
        size="small"
        InputLabelProps={{ shrink: true }}
        label={"accion"}
        placeholder="que hay qye hacer?"
        autoComplete="off"
        value={description || ""}
        name="description"
        onChange={onInputChnge}
      />
      <Button type="submit" variant="contained" disableElevation size="small">
        enviar
      </Button>
    </Stack>
  );
};

export default TodoAdd;
