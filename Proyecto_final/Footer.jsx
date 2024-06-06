import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RoomIcon from "@mui/icons-material/Room";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-container">
          <div className="col">
            <h4 className="title">Company</h4>
            <a className="link" href="">Acerca de nosotros</a>
            <a className="link" href="">Contactanos</a>
            <a className="link" href="">Reservationes</a>
            <a className="link" href="">Politicas de privacidad</a>
            <a className="link" href="">Terminos y condicione</a>
          </div>
          <div className="col">
            <h4 className="title">Contacto</h4>
            <p className="info"><RoomIcon />Calle ejemplo</p>
            <p className="info"><LocalPhoneIcon />132 numero ejempo</p>
            <p className="info"><EmailIcon />info@ejemplo.com</p>
            <div className="social">
              <a className="btn-social" href=""><TwitterIcon /></a>
              <a className="btn-social" href=""><FacebookIcon /></a>
              <a className="btn-social" href=""><YouTubeIcon /></a>
              <a className="btn-social" href=""><LinkedInIcon /></a>
            </div>
          </div>
          <div className="col">
            <h4 className="title">Horario</h4>
            <h5 className="subtitle">Lunes - Sabado</h5>
            <p>09AM - 09PM</p>
            <h5 className="subtitle">Domingo</h5>
            <p>10AM - 08PM</p>
          </div>
          <div className="col">
            <h4 className="title">Envia comentarios</h4>
            <p>Busqueda de ejemplo.</p>
            <div className="input-container">
              <input className="input" type="text" placeholder="email" />
              <button type="button" className="btn-submit">
                Ingresar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
