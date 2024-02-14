import React from "react";
import { useReducer } from "react";
import { useEffect } from "react";

export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[TODO] Add todo":
      return [...initialState, action.payload];
    case "[TODO] Delete todo":
      return initialState.filter( todo => todo.id !== action.payload );
      case "[TODO] Toggle todo":
      if (todo.id === action.payload) {
        return {
          ...todo,
          done: !todo.done,
        };
      }
      return todo;
    default:
      return initialState;
  }
};

const init = () => {
  return JSON.parse(localStorage.getItem('todos') || []);
};

export const useTodo = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos ]);


  const handdleTodo = (todo) => {
    dispatch({
      type: "[TODO] Add todo",
      payload: todo,
    });
  };

  const handdleDelete = (id) => {
    dispatch({
      type: "[TODO] Delete todo",
      payload: id,
    });
  };

  const handdleToggleTodo = (todo) => {
    console.log(todo)
    dispatch({
      type: "[TODO] Toggle todo",
      payload: todo,
    });
  };

  return {
    todos,
    handdleTodo,
    handdleToggleTodo,
    handdleDelete
  }
};
