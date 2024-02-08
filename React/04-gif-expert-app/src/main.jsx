import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { SincoTheme } from '@sinco/react'
import ReactDOM from "react-dom/client";
import {GifExpert} from './components/GifExpert'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={SincoTheme}>
      <GifExpert/>
    </ThemeProvider>
  </React.StrictMode>
);
