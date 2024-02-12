import { Typography } from "@mui/material";
import React, { useLayoutEffect, useState } from "react";
import { useRef } from "react";

const Quote = ({ quote, author }) => {

  const [boxZise, setboxZise] = useState({width:0,height:0});
  const pRef = useRef();

  useLayoutEffect(() => {
    return () => {
      const {height ,width} = pRef.current.getBoundingClientRect();
      setboxZise({height,width})
    };
  }, [quote]);
  return (
    <>
      <blockquote>
        <Typography ref={pRef} variant="subtitle2">
          {quote}
        </Typography>
        <footer>--{author}</footer>
      </blockquote>
      <code>{JSON.stringify(boxZise)}</code>
    </>
  );
};

export default Quote;
