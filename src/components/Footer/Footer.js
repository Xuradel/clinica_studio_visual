import React from "react";
import "./Footer.css";
import Container from "../Container";
import { BiLogoFacebook, BiLogoInstagramAlt } from "react-icons/bi";


const Footer = () => {
  return (
    <Container>
      <footer>
        <div className="footer-title">Clinica Studio Visual</div>
        <div className="footer-email">
          <a href="mailto:gerencia@clinicastudiovisualcr.com">
            gerencia@clinicastudiovisualcr.com
          </a>
        </div>
        <div className="footer-socials">
          <a href="https://www.facebook.com/clinicastudiovisual" target="_blank" rel="noreferrer">
            <BiLogoFacebook />
          </a>
          <a href="https://www.instagram.com/clinicastudiovisual" target="_blank" rel="noreferrer">
            <BiLogoInstagramAlt />
          </a>
        </div>
        <div className="footer-copyright">©2023 por Clínica Studio Visual.</div>
      </footer>
    </Container>
  );
};

export default Footer;
