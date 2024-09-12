import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg border-bottom">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/assets/header/Logo.png" className="logo-tta" alt="Logo du site" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/batiment">
                Bâtiment
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/service">
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/fabrication">
                Fabrications
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/alimentation">
                Alimentation
              </NavLink>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Recherche"
              aria-label="Recherche"
            ></input>
            <button className="btn btn-outline-primary" type="submit">
              {/*Balise pour l'icone loupe du bouton de recherche */}
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
