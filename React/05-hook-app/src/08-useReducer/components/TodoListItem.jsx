import React from "react";
import { Button, Divider, ListItem, ListItemText } from "@mui/material";

const TodoListItem = ({
  id,
  description,
  onDeleteTodo,
  onToggleTodo,
  done,
}) => {
  return (
    <>
      <ListItem className={`${done ? "text-line-through" : ""}`}>
        <ListItemText
          primary={description}
        />
        <Button
          size="small"
          variant="contained"
          disableElevation
          color="error"
          onClick={() => onDeleteTodo(id)}
        >
          Borrar
        </Button>
      </ListItem>
      <Divider />
    </>
  );
};

export default TodoListItem;
