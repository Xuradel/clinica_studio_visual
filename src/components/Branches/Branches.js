import React from "react";
import "./Branches.css";
import Container from "../Container";
import Branch from "./Branch";

const Branches = () => {
  return (
    <Container>
      <section className="branches">
        <div className="branches-title">
          <div className="b-title">Sucursales</div>
          <div className="b-description">
            15 SUCURSALES A SU DISPOSICIÓN EN TODO EL PAÍS
          </div>
        </div>
        <div className="branches-items">
          <Branch
            location={"San José"}
            description={
              "De Diario Extra 200 mts al sur y 25 mts este sobre Ave S."
            }
            number={"2221-6262"}
            number2={"2221-5252"}
          />
          <Branch
            location={"San Carlos"}
            description={
              "Ciudad Quesada frente a las oficinas de la CCSS, contiguo a CoopeAlianza."
            }
            number={"2460-1119"}
          />
          <Branch
            location={"Heredia"}
            description={
              "Del Banco Popular del Liceo de Heredia 75 metros al este sobre calle principal."
            }
            number={"2260-9199"}
          />
          <Branch
            location={"San Ramón"}
            description={
              "Del Bac San José 25 metros al este, diagonal al Banco Popular, local esquinero."
            }
            number={"2239-1707"}
          />
          <Branch
            location={"Guadalupe"}
            description={
              "75 metros oeste del Parque de Guadalupe, frente a la Chicharronera Goicoechea."
            }
            number={"2225-5656"}
          />
          <Branch
            location={"Guápiles"}
            description={"Centro Comercial Guápiles, contiguo a Subway."}
            number={"2710-5051"}
          />
          <Branch
            location={"Alajuela"}
            description={"75 mts sur de los semáforos de la Corte."}
            number={"2440-6161"}
          />
          <Branch
            location={"Cañas"}
            description={
              "Contiguo al Banco Nacional frente al costado noroeste de la Iglesia Católica."
            }
            number={"2101-5383"}
          />
          <Branch
            location={"Pérez Zeledón"}
            description={
              "De la Casa de la Juventud 50 mts al oeste en la esquina Clínica San Lucas."
            }
            number={"2771-9090"}
          />
          <Branch
            location={"Liberia"}
            description={
              "75 mts oeste de Correos de Costa Rica frente a Ferretería San Carlos."
            }
            number={"2665-0235"}
          />
          <Branch
            location={"El Roble de Puntarenas"}
            description={"Frente al Banco de Costa Rica."}
            number={"2253-9998"}
          />
          <Branch
            location={"Tres Ríos"}
            description={
              "50 mts este del Mas x Menos, Edificio Sabino Guzmán frente a Plaza Estación."
            }
            number={"2278-2535"}
          />
          <Branch
            location={"Cartago"}
            description={"Frente a la Estación de Bomberos."}
            number={"2101-0154"}
          />
          <Branch
            location={"Nicoya"}
            description={
              "300 mts norte del Hospital La Anexión, diagonal a Ekono, frente a Colono Agropecuario."
            }
            number={"2686-6161"}
          />
          <Branch
            location={"San José Centro de Diagnóstico"}
            description={"75 mts al Norte de la Terminal de Buses de Tracopa."}
            number={"2221-4181"}
          />
        </div>
        <div className="schedule">
          Lunes a Sábado: 9:00 am a 6:00 pm Domingo: CERRADO
        </div>
      </section>
    </Container>
  );
};

export default Branches;
