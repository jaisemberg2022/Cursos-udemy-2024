import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { DcPages, Hero, MarvelPages, SearchPage } from "../pages";
import { NavBar } from "../../ui/components/navBar";
import { Box } from "@mui/material";

export const HeroesRoutes = () => {
  return (
    <>
      <NavBar />
      <Box mt={7}>
        <Routes>
          <Route path="/marvel" element={<MarvelPages />} />
          <Route path="/dc" element={<DcPages />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </Box>
    </>
  );
};

export default HeroesRoutes;
