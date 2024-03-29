import React from "react";
import { useState } from "react";

const CounterApp = () => {
  const [state, setCounter] = useState({
    counter1:10,
    counter2:20,
    counter3:30,
  });

  const {counter1,counter2,counter3} = state;

  return (
    <>
      <h1>Counte1:{counter1}</h1>
      <h1>Counte2:{counter2}</h1>
      <h1>Counte3:{counter3}</h1>
      <hr />
      <button onClick={() => setCounter({
        ...state,
        counter1:counter1 + 1,   
      })}>+1</button>
    </>
  );
};

export default CounterApp;
