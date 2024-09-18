import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import ArtisanCard from "../../Component/ArtisanCard/ArtisanCard";

const Service = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <div className="container">
          <h1>Artisans du Bâtiment</h1>
          <ArtisanCard category="Services" />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Service;
