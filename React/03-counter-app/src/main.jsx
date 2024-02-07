import React from "react";
import ReactDOM from "react-dom/client";
import { CounterApp } from "./counterApp";
import { ThemeProvider } from "@emotion/react";
import { SincoTheme } from '@sinco/react'

import "./styles.css";

function App() {
  return <h1>Hola mundo</h1>;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={SincoTheme}>
      {/* <CounterApp  value={0}/> */}
      <FirstApp tittle="hola" />
    </ThemeProvider>
  </React.StrictMode>
);
