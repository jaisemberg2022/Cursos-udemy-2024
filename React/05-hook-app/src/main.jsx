import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HooksApp from "./hooksApp";
import CounterApp from "./01-useState/CounterApp";
import CounterWithCustomeHooks from "./01-useState/CounterWithCustomeHooks";
import SimpleForm from "./02-useEffect/SimpleForm";
import FormWithCustomeHook from "./02-useEffect/FormWithCustomeHook";
import MultipleCustomeHook from "./03-examples/MultipleCustomeHook";
import FocusScreen from "./04-useRef/focusScreen";
import Layout from "./05-useLayoutEffect/Layout";
import Memorize from "./06-memos/Memorize";
import MemoHook from "./06-memos/MemoHook";
import CallBackHook from "./06-memos/CallBackHook";
import { Padre } from "./07-tarea-memo/Padre";
// import './08-useReducer/Intro-Reducer'
import TodoApp from "./08-useReducer/TodoApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <CounterApp/> */}
    {/* <CounterWithCustomeHooks/> */}
    {/* <SimpleForm/> */}
    {/* <FormWithCustomeHook/> */}
    {/* <MultipleCustomeHook/>   */}
    {/* <FocusScreen/> */}
    {/* <Layout/> */}
    {/* <Memorize/> */}
    {/* <MemoHook /> */}
    {/* <CallBackHook /> */}
    {/* <Padre/> */}
    <TodoApp />
    {/* <HooksApp/> */}
  </React.StrictMode>
);
