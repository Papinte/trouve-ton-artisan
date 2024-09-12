import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between py-3 my-4">
        <ul className="nav col-md-4 justify-content-center d-flex">
          <li className="ms-3">
            <NavLink className="footer-link" to="/acces">
              Accessibilité
            </NavLink>
          </li>
          <li class="ms-3">
            <NavLink className="footer-link" to="/legalNotice">
              Mentions légales
            </NavLink>
          </li>
          <li class="ms-3">
            <NavLink className="footer-link" to="/cookies">
              Cookies
            </NavLink>
          </li>
          <li class="ms-3">
            <NavLink className="footer-link" to="/personalData">
              Données Personnelles
            </NavLink>
          </li>
        </ul>
        <div className="col-md-4 d-flex align-items-center">
          <address>
            101 cours Charlemagne CS 20033 69269 LYON CEDEX 02 France +33 (0)4
            26 73 40 00
          </address>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
