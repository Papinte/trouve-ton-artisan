import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faStar as faStarEmpty,
} from "@fortawesome/free-solid-svg-icons";
import "./ArtisanCard.scss";

function ArtisanCard({ category }) {
  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    // Récupération de données à partir du fichier data.json local
    fetch("/datas.json")
      .then((response) => response.json())
      .then((data) => {
        // Filtrer les artisans par catégorie
        const filteredArtisans = data.filter(
          (artisan) => artisan.category === category
        );
        setArtisans(filteredArtisans);
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des données :", error)
      );
  }, [category]);

  // Fonction pour générer les étoiles en fonction de la note
  const renderStarRating = (rating) => {
    const fullStars = Math.floor(rating); // Nombre d'étoiles pleines
    const decimalPart = rating - fullStars; // Partie décimale de la note
    const halfStar = decimalPart >= 0.25 && decimalPart < 0.75 ? 1 : 0; // Demi-étoile si entre 0.25 et 0.75
    const emptyStars = 5 - fullStars - halfStar; // Nombre d'étoiles vides

    return (
      <div className="star-rating">
        {/* Afficher les étoiles pleines */}
        {[...Array(fullStars)].map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            style={{ color: "#ffc107" }}
          />
        ))}
        {/* Afficher une demi-étoile si nécessaire */}
        {halfStar === 1 && (
          <FontAwesomeIcon icon={faStarHalfAlt} style={{ color: "#ffc107" }} />
        )}
        {/* Afficher les étoiles vides */}
        {[...Array(emptyStars)].map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faStarEmpty}
            style={{ color: "#e4e5e9" }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="row my-5">
      {artisans.map((artisan) => (
        <div className="col-12 col-md-6 col-lg-4" key={artisan.id}>
          {/*Lien vers la page de l'artisan selon le clique grace à l'ID */}
          <NavLink to={`/artisan/${artisan.id}`}>
            <div className="card stucture mb-4">
              <div className="card-body">
                <h5 className="card-title">{artisan.name} </h5>
                <div className="card-text">
                  {/* Affichage de la note sous forme d'étoiles. */}
                  {renderStarRating(parseFloat(artisan.note))}
                </div>
                <article>
                  <p className="card-text">
                    <span className="rubrique">Spécialité : </span>
                    {artisan.specialty}
                  </p>
                  <p className="card-text">
                    <span className="rubrique">Ville : </span>
                    {artisan.location}
                  </p>
                </article>
              </div>
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default ArtisanCard;
