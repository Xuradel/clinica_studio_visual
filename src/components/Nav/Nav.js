import React from "react";
import "./Nav.css";
import Container from "../Container";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <nav>
        <img
          className="nav-logo"
          alt="logo"
          src={require("../../assets/LOGO-CSV2.webp")}
          onClick={()=>navigate('/')}
        />
      </nav>
    </Container>
  );
};

export default Nav;
