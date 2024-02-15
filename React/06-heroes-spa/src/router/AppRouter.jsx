import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MarvelPages from "../heroes/pages/MarvelPages";
import DcPages from "../heroes/pages/DcPages";
import LoginPages from "../auth/pages/LoginPages";



const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/marvel" element={<MarvelPages/>}/>
        <Route path="/dc" element={<DcPages/>}/>
        <Route path="/login" element={<LoginPages/>}/>
        <Route path="/" element={<Navigate to='/marvel'/>}/>
      </Routes>
    </>
  );
};

export default AppRouter;
