import React from "react";
import { Route, Routes } from "react-router-dom";
import { PublicRouter } from "./router/PublicRouter";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<PublicRouter />} />
      </Routes>
    </>
  );
};
