import React from "react";
import { List } from "@mui/material";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, onDeleteTodo, onToggleTodo }) => {
  return (
    <>
      <List
        dense={true}
        sx={{ width: "50%", flexBasis: "50%", backgroundColor: "white" }}
      >
        {todos.map((todo) => (
          <TodoListItem
            done={todo.done}
            key={todo.id}
            id={todo.id}
            description={todo.description}
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
          />
        ))}
      </List>
    </>
  );
};

export default TodoList;
