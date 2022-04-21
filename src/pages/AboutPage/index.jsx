import { React } from "react";
import yo from "../AboutPage/miImagen.jpg";
import "./style.css";

const AboutPage = () => {
  return (
    <div className="containerAP">
      <div className="containerAP__lateralDiv"></div>
      <div className="containerAP__centerDivAP">
        <div className="containerAP__centerDivAP--divImgAP">
          <img src={yo} width="256px" height="370px" alt="" />
        </div>
        <div>
          <p>
            <b>
              <h2>Cristian A. Cortes Sarmiento </h2>
            </b>
          </p>
          <ul>
            <li>Tecn&oacute;logo en electr&oacute;nica</li>
            <li>Ingeniero de sistemas</li>
            <li>Especialista en Telecomunicaciones</li>
            <li>
              Magister en Ingenier&iacute;a con &eacute;nfasis en Sistemas y
              computaci&oacute;n.
            </li>
          </ul>
          <p>
            Apasionado por la tecnolog&iacute;a, las ciencias y el universo. Yo
            desarrollo software para varias plataformas, la electronica digital
            es mi hobby, en especial en IoT.
          </p>

          <p>
            He aprendido en el entrenamiento, front-end a mayor detalle, nuevas
            herramientas del backend como el entorno JS y conceptos distintos a
            SQL como Bases de datos non-SQL.
          </p>
          <p>Contacto: Corys90@hotmail.com</p>
          <p>Phone : 300 318 9265</p>
          <p>
            Github :{" "}
            <a href="https://github.com/corys90"> corys90 (github.com) </a>
          </p>
        </div>
      </div>
      <div className="containerAP__lateralDiv"></div>
    </div>
  );
};

export default AboutPage;
