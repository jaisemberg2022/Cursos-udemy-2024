import React from "react";
import ReactDOM from "react-dom/client";
import { FirstApp } from "./FirstApp";

import "./styles.css";

function App() {
  return <h1>Hola mundo</h1>;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirstApp tittle="titulo personalizado" />
  </React.StrictMode>
);

