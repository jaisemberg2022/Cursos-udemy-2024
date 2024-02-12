import React from "react";
// import useFetch from "../hooks/useFetch";
// import { useCounter } from "../hooks/useCounter";
import {useFetch,useCounter} from '../hooks'
import Alert from "@mui/material/Alert";
import { Button } from "@mui/material";
import Quote from "../03-examples/Quote";


const Layout = () => {
  const { counter, increment } = useCounter(1);
  const { data, hasError, isLoading } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
  const { quote, author } = !!data && data[0];

  return (
    <>
      <h1>Breaking qoutes</h1>
      <hr />
      {
        isLoading 
        ?<Alert severity="info">loading...</Alert> 
        :<Quote quote={quote} author={author}/>
      }
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

export default Layout;
