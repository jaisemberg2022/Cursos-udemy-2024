import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import { SincoTheme } from "@sinco/react";
import { BrowserRouter } from "react-router-dom";

import HeroresApp from "./HeroresApp";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={SincoTheme}>
      <BrowserRouter>
        <HeroresApp />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
