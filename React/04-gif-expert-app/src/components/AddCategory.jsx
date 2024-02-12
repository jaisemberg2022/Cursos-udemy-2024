import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if ( inputValue.trim().length <= 1 ) return; 
    // setCategories( (categories) =>[inputValue,...categories]);
    setInputValue("");
    onNewCategory(inputValue.trim());
  };
  return (
    <form onSubmit={onSubmit} aria-label="form">
      <TextField
        value={inputValue || ""}
        label="filtrar"
        variant="outlined"
        placeholder="Buscar gifs..."
        InputLabelProps={{ shrink: true }}
        onChange={onInputChange}
        autoComplete="off"
        size="small"
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
