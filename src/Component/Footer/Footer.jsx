import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-2 my-3">
        <ul className="list-unstyled ">
          <li className="nav-item mb-2 text-center">
            <NavLink to="/legalNotice" className="footer-link">
              Mentions légales
            </NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink to="/personalData" className="footer-link">
              Données personnelles
            </NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink to="/acces" className="footer-link">
              Accessibilité
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/cookies" className="footer-link">
              Cookies
            </NavLink>
          </li>
        </ul>
        <address>
          <FontAwesomeIcon icon={faMapMarkerAlt} /> 101 cours Charlemagne
          <br />
          CS 20033 69269
          <br />
          LYON CEDEX 02 France
          <br />
        </address>

        <address>
          <FontAwesomeIcon icon={faPhone} /> +33 (0)4 26 73 40 00
        </address>
      </footer>
    </div>
  );
};

export default Footer;
