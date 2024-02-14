import { Stack, Typography } from "@mui/material";
import React, { useReducer, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";
import { useTodo } from "../hooks";

const TodoApp = () => {

  const {todos,handdleTodo,handdleDelete,handdleToggleTodo} = useTodo();

  return (
    <>
      <Typography variant="h3">TodoApp</Typography>
      <hr />
      <Stack
        mt={2}
        px={3}
        display={"inline-flex"}
        justifyContent={"space-between"}
        flexDirection={"row"}
        width={"100%"}
      >
        <TodoList todos={todos} onDeleteTodo={handdleDelete} onToggleTodo={handdleToggleTodo}/>
        <TodoAdd onNewTodo={handdleTodo} />
      </Stack>
    </>
  );
};

export default TodoApp;
