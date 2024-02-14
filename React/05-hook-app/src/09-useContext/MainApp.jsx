import { Divider, Typography } from "@mui/material";
import React from "react";
import { Route, Routes, Navigate, Link } from "react-router-dom";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import AboutPage from "./AboutPage";

const MainApp = () => {
  return (
    <>
      <Typography variant="h4">MainApp</Typography>
      <Divider />
      <Link to="/">Home</Link>
      <Link to="About">About</Link>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/About" element={<AboutPage />} />

        {/* <Route path='/*' element={<LoginPage/>} /> */}
        <Route path="/*" element={<Navigate to="./About" />} />
      </Routes>
    </>
  );
};

export default MainApp;
