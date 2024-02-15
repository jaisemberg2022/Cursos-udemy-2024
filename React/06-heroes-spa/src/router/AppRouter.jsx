import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import {DcPages,MarvelPages} from "../heroes";
import LoginPages from "../auth/pages/LoginPages";
import { NavBar } from "../ui";
import { Stack } from "@mui/material";

const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Stack border={'1px solid red'} mt={7}>

      <Routes>
        <Route path="/marvel" element={<MarvelPages />} />
        <Route path="/dc" element={<DcPages />} />
        <Route path="/login" element={<LoginPages />} />
        <Route path="/" element={<Navigate to="/marvel" />} />
      </Routes>
      </Stack>
    </>
  );
};

export default AppRouter;
