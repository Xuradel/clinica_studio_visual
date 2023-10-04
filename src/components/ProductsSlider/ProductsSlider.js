import React, { useState, useEffect } from "react";
import "./ProductsSlider.css";
import ProductCard from "./ProductCard";
import Container from "../Container";
import ProductModal from "./ProductModal"; // Import your Modal component
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import data from '../../data/data.json'
const ProductsSlider = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [perPage, setPerPage] = useState(
    window.innerWidth < 640
      ? 1
      : window.innerWidth < 800
      ? 2
      : window.innerWidth < 1024
      ? 3
      : window.innerWidth < 1280
      ? 4
      : 5
  );

  useEffect(() => {
    const updatePerPage = () => {
      setPerPage(
        window.innerWidth < 640
          ? 1
          : window.innerWidth < 800
          ? 2
          : window.innerWidth < 1024
          ? 3
          : window.innerWidth < 1280
          ? 4
          : 5
      );
    };

    updatePerPage();

    window.addEventListener("resize", updatePerPage);

    return () => {
      window.removeEventListener("resize", updatePerPage);
    };
  }, []);

  const toggleModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Container>
      <div className="products">
        <Splide
          aria-label="My Favorite Images"
          options={{
            autoplay: true,
            perPage: perPage,
            perMove: 1,
            speed: 2000,
          }}
          className="splide-carousel"
        >
          {data.map((product, index) => (
            <SplideSlide className="splide-container" key={index}>
              <ProductCard
                key={index}
                title={product.title}
                price={product.price}
                imageSrc={product.imageSrc}
                featured={product.featured}
                productId={product.productId}
                onQuickViewClick={() => toggleModal(product)}
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {isModalOpen && (
        <ProductModal
          onClose={() => setIsModalOpen(false)}
          {...selectedProduct}
        ></ProductModal>
      )}
    </Container>
  );
};

export default ProductsSlider;
