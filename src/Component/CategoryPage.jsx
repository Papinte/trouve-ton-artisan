import React, { useState, useEffect } from "react";
import ArtisanCard from "../Component/ArtisanCard/ArtisanCard";
import data from "../datas.json";

const CategoryPage = ({ category }) => {
  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    // Filtrer les artisans par catégorie
    const filteredArtisans = data.filter(
      (artisan) => artisan.category === category
    );
    setArtisans(filteredArtisans);
  }, [category]);
  return (
    <div className="container">
      <div className="row">
        {artisans.length > 0 ? (
          artisans.map((artisan) => (
            <div className="col-md-4" key={artisan.id}>
              <ArtisanCard
                name={artisan.name}
                specialty={artisan.specialty}
                note={artisan.note}
                location={artisan.location}
                about={artisan.about}
              />
            </div>
          ))
        ) : (
          <p>Aucun artisan trouvé dans cette catégorie.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
