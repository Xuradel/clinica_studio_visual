import React from "react";
import { Link } from 'react-router-dom';

const formatPrice = (price) => {
  return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};

const ProductCard = ({ title, price, imageSrc, onQuickViewClick, featured, productId }) => {
  const formattedPrice = formatPrice(price);

  return (
    <div className="product-card">
      <div className="product-image">
        {featured && (
          <div className="featured-label">
            <span>Más vendido</span>
          </div>
        )}
        <Link to={`/product/${productId}`}>
          <img alt="product" src={imageSrc} />
        </Link>
        <div className="quick-view" onClick={onQuickViewClick}>
          Vista rápida
        </div>
      </div>
      <div className="subtitle">{title}</div>
      <div className="price">₡{formattedPrice}</div>
    </div>
  );
};

export default ProductCard;
