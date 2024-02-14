import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { Route, Routes, Navigate, Link } from "react-router-dom";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import AboutPage from "./AboutPage";
import NavBar from "./NavBar";

import UserProvider from "./context/userProvider";

const MainApp = () => {
  return (
    <UserProvider>
      <Typography variant="h4">MainApp</Typography>
      <Divider />
      <NavBar />
      <Box mt={3}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/*" element={<Navigate to="./About" />} />
        </Routes>
      </Box>
    </UserProvider>
  );
};

export default MainApp;
