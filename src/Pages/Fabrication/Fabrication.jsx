import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import ArtisanCard from "../../Component/ArtisanCard/ArtisanCard";

const Fabrication = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <div className="container">
          <h1 className="mt-4">Fabrication</h1>
          <ArtisanCard category="Fabrication" />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Fabrication;
