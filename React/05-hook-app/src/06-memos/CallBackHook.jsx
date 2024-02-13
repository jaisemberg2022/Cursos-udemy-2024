import { Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import ShowIncrement from "./ShowIncrement";

const CallBackHook = () => {
  const [counter, setCounter] = useState(10);
//   const incrementFether = ()=>{
//     setCounter(counter + 1);
//   }


  const incrementFether = useCallback(
    () => {
      setCounter((value) => value + 1)
    },
    [],
  )
  

  return (
    <>
      <Typography variant="h4">useCallBack Hook:{counter}</Typography>
      <hr />
      <ShowIncrement increment={incrementFether} />
    </>
  );
};

export default CallBackHook;
