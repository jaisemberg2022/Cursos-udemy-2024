import React from "react";
import useFetch from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";
import Alert from "@mui/material/Alert";
import { Button, Typography } from "@mui/material";

const MultipleCustomeHook = () => {
  const { counter, increment } = useCounter(1);
  const { data, hasError, isLoading } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );
  const { quote, author } = !!data && data[0];

  return (
    <>
      <h1>Breaking qoutes</h1>
      <hr />
      {isLoading ? (
        <Alert severity="info">loading...</Alert>
      ) : (
        <blockquote>
          <Typography variant="subtitle2">{quote}</Typography>
          <footer>--{author}</footer>
        </blockquote>
      )}
      <Button
        disableElevation
        variant="contained"
        color="primary"
        disabled={isLoading}
        onClick={() => increment()}
      >
        next qoute
      </Button>
    </>
  );
};

export default MultipleCustomeHook;
