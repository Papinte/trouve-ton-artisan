import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faStar as faStarEmpty,
} from "@fortawesome/free-solid-svg-icons";
import "./artisanPage.scss";

const ArtisanPage = () => {
  const [artisan, setArtisan] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch("/datas.json")
      .then((response) => response.json())
      .then((datas) => {
        // On cherche l'artisan dans le tableau data
        const foundArtisan = datas.find((artisan) => artisan.id === id);
        setArtisan(foundArtisan);
      });
  }, [id]);
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

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    objet: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Si tout est bien rempli, envoyer le message
    setSuccessMessage("Votre message a bien été envoyé.");

    // Réinitialiser les champs après soumission si vous le souhaitez
    setFormData({
      nom: "",
      prenom: "",
      objet: "",
      message: "",
    });
  };

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <div className="artisan-page container my-5 py-3">
          {artisan ? ( // Si on a trouvé un artisan
            <>
              <h1 className="name-artisan">{artisan.name}</h1>
              <p>{renderStarRating(parseFloat(artisan.note))}</p>
              <p>
                <span className="title-artisan">Spécialité :</span>{" "}
                {artisan.specialty}
              </p>
              <p>
                <span className="title-artisan">Location :</span>{" "}
                {artisan.location}
              </p>
              <p>
                <span className="title-artisan">À propos :</span>{" "}
                {artisan.about}
              </p>
              <p>
                {artisan.website && (
                  <>
                    <span className="title-artisan">Site internet : </span>
                    <a
                      href={artisan.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {artisan.website}
                    </a>
                  </>
                )}
              </p>
            </>
          ) : (
            <p>Aucun artisan trouvé</p>
          )}
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow">
              <div className="card-body">
                <h3 className="card-title text-center mb-4">
                  Contactez l'artisan{" "}
                </h3>
                {/* Message de succès après l'envoi */}
                {successMessage && (
                  <div className="alert alert-success">{successMessage}</div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="nom" className="form-label">
                      Nom
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      placeholder="Entrez votre nom"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="prenom" className="form-label">
                      Prénom
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="prenom"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleChange}
                      placeholder="Entrez votre prénom"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="objet" className="form-label">
                      Objet
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="objet"
                      name="objet"
                      value={formData.objet}
                      onChange={handleChange}
                      placeholder="Objet de votre message"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Entrez votre message"
                      required
                    />
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                      Envoyer
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ArtisanPage;
