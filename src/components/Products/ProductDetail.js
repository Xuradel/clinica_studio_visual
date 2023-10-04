import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiLogoFacebook, BiLogoTwitter, BiLogoPinterest } from "react-icons/bi";
import productDetails from "../../data/data.json";
import Container from "../Container";
import "./Products.css";

const formatPrice = (price) => {
  return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};

const ProductDetail = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  // State to track the expanded/collapsed state of information sections
  const [infoExpanded, setInfoExpanded] = useState({
    productInfo: false,
    refundPolicy: false,
    shippingInfo: false,
  });
  
  const { productId } = useParams();
  const navigate = useNavigate();

  // Function to toggle the expansion state of a section
  const toggleInfoSection = (section) => {
    setInfoExpanded((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const product = productDetails.find(
    (item) => item.productId === parseInt(productId, 10)
  );

  const formattedPrice = formatPrice(product.price);

  // Find the index of the current product
  const currentIndex = productDetails.findIndex(
    (item) => item.productId === parseInt(productId, 10)
  );

  // Calculate the previous and next product indices
  const previousIndex = currentIndex - 1;
  const nextIndex = currentIndex + 1;

  // Retrieve the previous and next products based on the indices
  const previousProduct = productDetails[previousIndex];
  const nextProduct = productDetails[nextIndex];

  const goToPreviousProduct = () => {
    if (previousProduct) {
      navigate(`/product/${previousProduct.productId}`);
    }
  };

  const goToNextProduct = () => {
    if (nextProduct) {
      navigate(`/product/${nextProduct.productId}`);
    }
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };
  return (
    <section className="product-detail">
      <Container>
        {product ? (
          <div className="detail-page">
            <div className="detail-page-links">
              <div className="page-links">
                <div className="detail-page-home" onClick={() => navigate("/")}>
                  Inicio
                </div>
                <div className="detail-page-item-name">/ {product.title}</div>
              </div>
              <div className="next-links">
                <div
                  className={`previous ${!previousProduct ? "disabled" : ""}`}
                  onClick={goToPreviousProduct}
                >
                  <BsChevronLeft size={18} />
                  Previo
                </div>
                <div className="separator">|</div>
                <div
                  className={`next ${!nextProduct ? "disabled" : ""}`}
                  onClick={goToNextProduct}
                >
                  Próximo
                  <BsChevronRight size={18} />
                </div>
              </div>
            </div>
            <div className="detail-page-content">
              <div className="detail-page-image">
                <img src={product.imageSrc} alt={product.title} />
              </div>
              <div className="detail-page-info">
                <div className="modal-text">
                  <div className="modal-title">{product.title}</div>
                  <div className="modal-price">₡{formattedPrice}</div>
                  <div className="modal-SKU">SKU: 364115376135191</div>

                  {product.sizes.length > 0 && (
                    <div className="modal-sizes-options">
                      <div className="sizes-title">Tamaño</div>
                      <div className="sizes-input">
                        <select
                          onChange={handleSizeChange}
                          value={selectedSize}
                        >
                          <option value="">Selecciona un tamaño</option>
                          {product.sizes.map((size, index) => (
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
                      {product.colors &&
                        product.colors.map((color, index) => (
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

                  {/* Product Info */}
                  <div className="detail-more-information">
                    <div className="information-item">
                      <div className="information-title">
                        INFORMACIÓN DEL PRODUCTO
                        <span onClick={() => toggleInfoSection("productInfo")}>
                          {infoExpanded.productInfo ? (
                            <AiOutlineMinus />
                          ) : (
                            <AiOutlinePlus />
                          )}
                        </span>
                      </div>
                      {infoExpanded.productInfo && (
                        <div
                          className={`information-text ${
                            infoExpanded.productInfo ? "show" : ""
                          }`}
                        >
                          Soy la descripción de un producto. Soy el lugar ideal
                          para agregar detalles sobre tu producto, así como
                          tamaño, materiales, instrucciones de cuidado y de
                          limpieza. Es también un lugar ideal para destacar por
                          qué este producto es especial y cómo tus clientes se
                          beneficiarían con él.
                        </div>
                      )}
                    </div>
                    <div className="horizontal-splitter"></div>
                    {/* Refund Policy */}
                    <div className="information-item">
                      <div className="information-title">
                        POLÍTICA DE DEVOLUCIÓN Y REEMBOLSO
                        <span onClick={() => toggleInfoSection("refundPolicy")}>
                          {infoExpanded.refundPolicy ? (
                            <AiOutlineMinus />
                          ) : (
                            <AiOutlinePlus />
                          )}
                        </span>
                      </div>
                      {infoExpanded.refundPolicy && (
                        <div
                          className={`information-text ${
                            infoExpanded.refundPolicy ? "show" : ""
                          }`}
                        >
                          Soy una política de devolución y reembolso. Una
                          oportunidad ideal para explicarles a tus clientes qué
                          hacer en caso de no estar satisfechos con su compra.
                          Al ofrecerles una política de reembolso clara y
                          sencilla, generas confianza y credibilidad en tus
                          clientes, pues saben que en tu tienda pueden realizar
                          compras con altos niveles de seguridad.
                        </div>
                      )}
                    </div>
                    <div className="horizontal-splitter"></div>
                    {/* Shipping Info */}
                    <div className="information-item">
                      <div className="information-title">
                        INFORMACIÓN DEL ENVÍO
                        <span onClick={() => toggleInfoSection("shippingInfo")}>
                          {infoExpanded.shippingInfo ? (
                            <AiOutlineMinus />
                          ) : (
                            <AiOutlinePlus />
                          )}
                        </span>
                      </div>
                      {infoExpanded.shippingInfo && (
                        <div
                          className={`information-text ${
                            infoExpanded.shippingInfo ? "show" : ""
                          }`}
                        >
                          Soy la Política de envío. Soy el lugar ideal para
                          agregar información sobre tus métodos de envío, costos
                          y embalaje. Ofrecer una política de reembolso clara y
                          sencilla, genera confianza y credibilidad en tus
                          clientes, pues saben que en tu tienda pueden realizar
                          compras con altos niveles de seguridad.
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="social-media-shares">
                    <a
                      href="https://api.whatsapp.com/send?text=https%3A%2F%2Fjosephead.wixsite.com%2Fcsvcr%2Fproduct-page%2Fpack-focus-white"
                      className="whatsapp"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <IoLogoWhatsapp />
                    </a>
                    <a
                      href="http://www.facebook.com/sharer.php?u=https%3A%2F%2Fjosephead.wixsite.com%2Fcsvcr%2Fproduct-page%2Fpack-focus-white&title=Pack+Focus+White"
                      className="facebook"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BiLogoFacebook />
                    </a>
                    <a
                      href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fjosephead.wixsite.com%2Fcsvcr%2Fproduct-page%2Fpack-focus-white&text=Pack+Focus+White%0A"
                      className="twitter"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BiLogoTwitter />
                    </a>
                    <a
                      href="https://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fjosephead.wixsite.com%2Fcsvcr%2Fproduct-page%2Fpack-focus-white&media=https%3A%2F%2Fstatic.wixstatic.com%2Fmedia%2F732680_d9b4bfa11e03411db964986d01041c73~mv2.jpg%2Fv1%2Ffill%2Fw_1200%2Ch_1200%2Cal_c%2Cq_85%2F732680_d9b4bfa11e03411db964986d01041c73~mv2.jpg&description=Pack+Focus+White"
                      className="pinterest"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BiLogoPinterest />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Product not found</p>
        )}
      </Container>
    </section>
  );
};

export default ProductDetail;
