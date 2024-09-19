import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import ArtisanCard from "../../Component/ArtisanCard/ArtisanCard";

const Alimentation = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <div className="container">
          <h1 className="mt-4">Artisans du Bâtiment</h1>
            <ArtisanCard category="Alimentation" />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Alimentation;
