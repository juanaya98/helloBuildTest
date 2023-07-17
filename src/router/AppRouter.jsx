import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginView from "../Components/templates/LoginView";
import RegisterView from "../Components/templates/RegisterView";
import { HelloBuildTestTemplate } from "../Components/templates/HelloBuildTestTemplate";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<HelloBuildTestTemplate />} />
        <Route path="register" element={<RegisterView />} />
      </Routes>
    </>
  );
};
