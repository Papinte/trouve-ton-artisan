import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import ArtisanCard from "../../Component/ArtisanCard/ArtisanCard";
import React, { useState, useEffect } from "react";
import data from "../../datas.json";
import "./Home.css";

const Home = () => {
  const [artisans, setArtisans] = useState([]);

  // Charger les données artisanales depuis le fichier JSON (optionnel si tes données sont statiques)
  useEffect(() => {
    setArtisans(data);
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
        {/*Carousel de card pour les artisans du mois */}
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            {/* Slide du premier artisan du mois */}
            <div className="container">
              <h1>Liste des Artisans</h1>
              <div className="row">
                {artisans.map((artisan) => (
                  <div className="col-md-4" key={artisan.id}>
                    <ArtisanCard
                      name={artisan.name}
                      specialty={artisan.specialty}
                      note={artisan.note}
                      location={artisan.location}
                      about={artisan.about}
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* Slide du deuxième artisan du mois */}
            <div className="carousel-item">
              <div class="card mb-3" style={{ maxwidth: "540px" }}>
                <div class="row g-0">
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p class="card-text">
                        <small class="text-body-secondary">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Slide du troisième artisan du mois */}
            <div className="carousel-item">
              <div class="card mb-3" style={{ maxwidth: "540px" }}>
                <div class="row g-0">
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p class="card-text">
                        <small class="text-body-secondary">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
