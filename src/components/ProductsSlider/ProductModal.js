import React, { useState } from "react";
import { AiFillCloseCircle } from 'react-icons/ai'
const formatPrice = (price) => {
  return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};

const ProductModal = ({ onClose, title, price, imageSrc, colors, sizes }) => {
  const formattedPrice = formatPrice(price);

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-image">
          <img alt="product" src={imageSrc} />
        </div>
        <div className="modal-text">
          <div className="modal-title">{title}</div>
          <div className="modal-price">₡{formattedPrice}</div>
          <div className="modal-SKU">SKU: 364115376135191</div>

          {sizes.length > 0 && (
            <div className="modal-sizes-options">
              <div className="sizes-title">Tamaño</div>
              <div className="sizes-input">
                <select onChange={handleSizeChange} value={selectedSize}>
                  <option value="">Selecciona un tamaño</option>
                  {sizes.map((size, index) => (
                    <option key={index} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          <div className="modal-colors">
            <div className="modal-colors-title">
              Color: {selectedColor ? `${selectedColor}` : ""}
            </div>
            <div className="modal-colors-options">
              {colors &&
                colors.map((color, index) => (
                  <div
                    key={index}
                    className={`color-circle ${
                      selectedColor === color ? "clicked" : ""
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => handleColorClick(color)}
                  ></div>
                ))}
            </div>
          </div>
          <div onClick={onClose} className="close-modal-button">Cerrar <AiFillCloseCircle size={26}/></div>
        </div>
      </div>
      <div className="modal-overlay" onClick={onClose}></div>
    </div>
  );
};

export default ProductModal;
