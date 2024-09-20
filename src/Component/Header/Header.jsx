import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
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
    setSearchTerm(e.target.value); // Mise à jour le terme de recherche
  };

  const filteredArtisans = datas.filter(
    (artisan) =>
      (artisan.name && artisan.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (artisan.speciality && artisan.speciality.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (artisan.location && artisan.location.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <nav className="navbar navbar-expand-lg border-bottom">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="/assets/header/Logo.png"
            className="logo-tta"
            alt="Logo du site"
          />
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
              value={searchTerm} // La valeur du champ correspond au state `searchTerm`
              onChange={handleSearchChange} // On capture chaque changement dans la recherche
            ></input>
            <button className="btn btn-outline-primary" type="submit">
              {/*Balise pour l'icone loupe du bouton de recherche */}
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
          {searchTerm && filteredArtisans.length > 0 ? (
            <div className="artisan-results">
              {filteredArtisans.map((artisan) => (
                <div key={artisan.id} className="artisan-card">
                  <h5>{artisan.name || "Nom inconnu"}</h5>
                  <p>Spécialité: {artisan.specialty || "Spécialité non renseignée"}</p>
                  <p>Ville: {artisan.location || "Ville non renseignée"}</p>
                </div>
              ))}
            </div>
          ) : searchTerm ? (
            <p>Aucun artisan trouvé.</p> // Si la recherche ne trouve aucun résultat
          ) : null}{" "}
          {/* On affiche rien si le champ de recherche est vide */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
