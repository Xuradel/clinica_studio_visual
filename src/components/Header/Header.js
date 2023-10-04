import React from "react";
import "./Header.css";
import Container from "../Container";

const Header = () => {
  return (
    <Container>
      <header>
        <h1>Su opción clara para una buena vista</h1>
        <img
          className="header-banner"
          alt="header"
          src={require("../../assets/banner.webp")}
        />
      </header>
    </Container>
  );
};

export default Header;
