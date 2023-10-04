import React from "react";
import "./Contact.css";
import Container from "../Container";

const Contact = () => {
  return (
    <Container>
      <section className="contact">
        <div className="contact-info">
          <div className="contact-title">Contáctanos y Agende su Cita</div>
          <div className="contact-address">
            <div className="contact-address-street">
              75 metros al Norte de la Terminal de Buses de Tracopa.
            </div>

            <div className="contact-address-email">
              Correo electrónico:{" "}
              <a href="mailto:gerencia@clinicastudiovisualcr.com">
                gerencia@clinicastudiovisualcr.com
              </a>
            </div>
          </div>

          <div className="contact-number">
            Agende su cita al: <span className="bold">2221-4181</span>
          </div>
        </div>
        <div className="contact-picture">
          <img alt="contact" src={require("../../assets/contactpic.webp")} />
        </div>
      </section>
    </Container>
  );
};

export default Contact;
