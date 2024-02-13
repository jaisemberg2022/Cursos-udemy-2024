export const todoReducer = (initialSate = [], action) => {
  switch (action.type) {
    case "[TODO] Add todo":
      return [...initialSate, action.payload];
    case "[TODO] Delete todo":
        return initialSate.filter(todo => todo.id !== action.payload );
    default:
      return initialSate;
  }
};
