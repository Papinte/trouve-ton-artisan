import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import Home from './Pages/Home/Home';
import Batiment from './Pages/Batiment/Batiment';
import Service from './Pages/Services/Service';
import Fabrication from './Pages/Fabrication/Fabrication';
import Alimentation from './Pages/Alimentation/Alimentation';
import ErrorPage from './Pages/Error/ErrorPage';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/batiment">Bâtiment</Link>
        <Link to="/services">Services</Link>
        <Link to="/fabrication">Fabrication</Link>
        <Link to="/alimentation">Alimentation</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/batiment' element={<Batiment />}></Route>
        <Route path='/service' element={<Service />}></Route>
        <Route path='/fabrication' element={<Fabrication />}></Route>
        <Route path='/alimentation' element={<Alimentation />}></Route>
        <Route path='*' element={<ErrorPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
