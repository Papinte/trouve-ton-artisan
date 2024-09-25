import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import { NavLink } from "react-router-dom";
import "./ErrorPage.scss";

const ErrorPage = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="container">
        <section className="text-center">
          <h1 className="mt-5">Error 404</h1>
          <h2 className="mb-5">Page not found</h2>
        </section>
        <div className="d-flex justify-content-center align-items-center">
          <img
            className="outil-img"
            src="/assets/errorPage/outils.png"
            alt="Deux outils qui se croise pour indiquer une erreur"
          />
        </div>
        <div className="text-center">
          <p className="error-text mt-5">
            Oops ! La page que vous cherchez semble introuvable.
          </p>
          <NavLink to="/">
            <button type="button" class="btn mb-5">
              Accueil
            </button>
          </NavLink>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ErrorPage;
