import TextField from "@mui/material/TextField";
import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState();
  const onInputChange = ({target})=>{
    setInputValue(target.value)
  }
  const onSubmit = (event)=>{
    event.preventDefault();
    if (inputValue.trim().lenght <=1 ) {return}
    // setCategories( (categories) =>[inputValue,...categories]);
    onNewCategory(inputValue.trim())
    setInputValue('');
  }
  return (
    <form onSubmit={onSubmit}>
        <TextField
          value={inputValue}
          id="outlined-basic"
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
