import { useState, useEffect } from "react";

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
              <p className="card-text">
                <strong>Spécialité :</strong> {artisan.specialty} <br />
                <strong>Note :</strong> {artisan.note} <br />
                <strong>Location :</strong> {artisan.location} <br />
                {artisan.about}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ArtisanCard;
