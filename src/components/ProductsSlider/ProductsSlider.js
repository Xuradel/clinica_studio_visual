import React from "react";
import "./ProductsSlider.css";
import ProductCard from "./ProductCard";
import packBlueDiamond from "../../assets/pack_blue_diamond.webp";
import packFocusWhite from "../../assets/pack_focus_white.webp";
import packFocusPlus from "../../assets/pack_focus_plus.webp";
import aros5000 from "../../assets/aros_desde_5000.webp";

const ProductsSlider = () => {
  return (
    <section className="products-slider">
        
      <ProductCard
        title={"Pack Blue Diamond"}
        price={35000}
        imageSrc={packBlueDiamond}
      />
      <ProductCard
        title={"Pack Focus White"}
        price={9000}
        imageSrc={packFocusWhite}
      />
      <ProductCard
        title={"Pack Focus Plus"}
        price={33000}
        imageSrc={packFocusPlus}
      />
      <ProductCard
        title={"AROS DESDE ₡5000"}
        price={5000}
        imageSrc={aros5000}
      />
    </section>
  );
};

export default ProductsSlider;
