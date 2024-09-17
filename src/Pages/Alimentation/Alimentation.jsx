import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import React, { useState, useEffect } from "react";
import data from "../../datas.json";
import ArtisanCard from "../../Component/ArtisanCard/ArtisanCard";

const Alimentation = () => {
  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    const filteredArtisans = data.filter(artisan => artisan.category === 'Alimentation');
    setArtisans(filteredArtisans);
  }, []);
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <h1>Alimentation</h1>
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
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Alimentation;
