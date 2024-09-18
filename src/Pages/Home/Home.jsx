import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  const [topArtisans, setTopArtisans] = useState([]);

  useEffect(() => {
    // Récupération des artisans depuis le fichier JSON
    fetch("/datas.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("La réponse du réseau n'a pas abouti");
        }
        return response.json();
      })
      .then((data) => {
        // Filtrer les artisans avec top: true
        const topArtisansData = data.filter((artisan) => artisan.top === true);
        setTopArtisans(topArtisansData);
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des données :", error)
      );
  }, []);

  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="container">
        <h1 className="my-4 text-center">Comment trouver mon artisan ?</h1>
        <div className="row">
          {/* Card 1 */}
          <div className="col-12 col-md-6 col-lg-6 mb-3">
            <div className="card h-100">
              <div className="row g-0">
                <div className="col-3 col-md-4">
                  <img
                    src="/assets/home/Categorie.png"
                    className="img-fluid"
                    alt="Casier avec des catégories différentes"
                  />
                </div>
                <div className="col-9 col-md-8 d-flex align-items-center">
                  <div className="card-body">
                    <p className="card-title">
                      1. Choisir la catégorie d’artisanat dans le menu.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-md-6 col-lg-6 mb-3">
            <div className="card h-100">
              <div className="row g-0">
                <div className="col-3 col-md-4">
                  <img
                    src="/assets/home/Artisan.png"
                    className="img-fluid"
                    alt="Artisan qui pose du carrelage au sol"
                  />
                </div>
                <div className="col-9 col-md-8 d-flex align-items-center">
                  <div className="card-body">
                    <p className="card-title">2. Choisir un artisan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-12 col-md-6 col-lg-6 mb-3">
            <div className="card h-100">
              <div className="row g-0">
                <div className="col-3 col-md-4">
                  <img
                    src="/assets/home/Courrier.png"
                    className="img-fluid"
                    alt="Enveloppe qui s'envole"
                  />
                </div>
                <div className="col-9 col-md-8 d-flex align-items-center">
                  <div className="card-body">
                    <p className="card-title">
                      3. Le contacter via le formulaire de contact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-12 col-md-6 col-lg-6 mb-3">
            <div className="card h-100">
              <div className="row g-0">
                <div className="col-3 col-md-4">
                  <img
                    src="/assets/home/Reponse.png"
                    className="img-fluid"
                    alt="Deux bulles de conversation, avec la question et la réponse"
                  />
                </div>
                <div className="col-9 col-md-8 d-flex align-items-center">
                  <div className="card-body">
                    <p className="card-title">
                      4. Une réponse sera apportée sous 48h.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="my-4 text-center">Les artisans du mois</h2>
        <div className="row">
          {topArtisans.map((artisan) => (
            <div className="col-md-4" key={artisan.id}>
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">{artisan.name}</h5>
                  <p className="card-text">
                    Spécialité : {artisan.specialty} <br />
                    Note : {artisan.note} <br />
                    Location : {artisan.location} <br />
                    {artisan.about}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
