import { useState, useEffect } from "react";
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
      .catch((error) => console.error("Erreur lors de la récupération des données :", error));
  }, [category]);

  return (
    <div className="row">
      {artisans.map((artisan) => (
        <div className="col-md-4" key={artisan.id}>
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">{artisan.name}</h5>
              <article>
                <p className="card-text"><span className="rubrique">Spécialité : </span>{artisan.specialty}</p>
                <p className="card-text"><span className="rubrique">Note : </span>{artisan.note}</p>
                <p className="card-text"><span className="rubrique">Location : </span>{artisan.location}</p>
                <p className="card-text">{artisan.about}</p>
              </article>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ArtisanCard;
