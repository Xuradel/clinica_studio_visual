import React from "react";
import { Route, Routes } from "react-router-dom";
import StudioVisual from "./StudioVisual";
import ProductDetail from "./Products/ProductDetail";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";

const AppRoutes = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<StudioVisual />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
