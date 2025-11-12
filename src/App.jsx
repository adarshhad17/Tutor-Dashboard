import { Routes, Route } from "react-router-dom";
import Overview from "./pages/Overview";
import NotFound from "./pages/NotFound";
import React from "react";
import Home from "./pages/Home";
import Footer from "./components/common/Footer";
import Navbarr from "./components/common/Navbar";

export default function App() {
  return (
    <>
      <Navbarr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </>
  );
}
