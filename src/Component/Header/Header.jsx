import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [datas, setDatas] = useState([]);
  // State pour stocker la saisie utilisateur dans la barre de recherche
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/datas.json")
      .then((reponse) => reponse.json())
      .then((data) => setDatas(data));
  }, []);

  // Fonction pour mettre à jour le terme de recherche
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  //Filtrage des artisans en fonction de la recherche
  const filteredArtisans = datas.filter(
    (artisan) =>
      (artisan.name &&
        artisan.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (artisan.specialty &&
        artisan.specialty.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (artisan.location &&
        artisan.location.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <header>
      <nav className="navbar navbar-expand-lg border-bottom">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img
              src="/assets/header/Logo.png"
              className="logo-tta"
              alt="Logo du site"
            />
          </NavLink>
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
                  Fabrication
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
                value={searchTerm} // La valeur du champ correspond au state `searchTerm`
                onChange={handleSearchChange} //capture du changement dans la recherche
              ></input>
            </form>
            {/* Affichage des résultats de recherche */}
            {searchTerm && filteredArtisans.length > 0 ? (
              <div className="artisan-results">
                {filteredArtisans.map((artisan) => (
                  <NavLink to={`/artisan/${artisan.id}`}>
                    <div className="artisan-card" key={artisan.id}>
                      <h5>
                        <span className="card-rubrique">
                          {artisan.name || "Nom inconnu"}
                        </span>
                      </h5>
                      <p>
                        <span className="card-rubrique">Spécialité: </span>
                        {artisan.specialty || "Spécialité non renseignée"}
                      </p>
                      <p>
                        <span className="card-rubrique">Ville: </span>
                        {artisan.location || "Ville non renseignée"}
                      </p>
                    </div>
                  </NavLink>
                ))}
              </div>
            ) : searchTerm.length >= 2 ? (
              <p className="artisan-results py-2 text-center">
                Aucun artisan trouvé.
              </p> // Si la recherche ne trouve aucun résultat
            ) : null}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
