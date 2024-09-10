import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          <img src="/assets/Logo.png" alt="Logo du site" />
        </Link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/batiment">
                Bâtiment
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/service">
                Services
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/fabrication">
                Fabrications
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/alimentation">
                Alimentation
              </Link>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Recherche"
              aria-label="Recherche">
            </input>
            <button class="btn btn-outline-success" type="submit">
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
