import React from "react";

const formatPrice = (price) => {
  return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};

const ProductCard = ({ title, price, imageSrc, featured }) => {
  const formattedPrice = formatPrice(price);

  return (
    <div className="product-card">
      <div className="product-image">
        <img alt="product" src={imageSrc} />
      </div>
      <div className="subtitle">{title}</div>
      <div className="price">₡{formattedPrice}</div>
    </div>
  );
};

export default ProductCard;
