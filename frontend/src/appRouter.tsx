import { useState } from "react";
// import reactLogo from './assets/react.svg'
import "./App.css";
import { Home, FourOhFour } from "@pages";
import { Routes, Route } from "react-router-dom";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<FourOhFour />} />
    </Routes>
  );
}

export default AppRouter;
