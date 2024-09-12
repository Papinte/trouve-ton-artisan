import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Batiment from "./Pages/Batiment/Batiment";
import Service from "./Pages/Services/Service";
import Fabrication from "./Pages/Fabrication/Fabrication";
import Alimentation from "./Pages/Alimentation/Alimentation";
import ErrorPage from "./Pages/Error/ErrorPage";
import Acces from "./Pages/accessibility/accessibility";
import Cookies from "./Pages/Cookies/Cookies";
import PersonalData from "./Pages/Personal-data/PersonalData";
import LegalNotice from "./Pages/Legal-notices/LegalNotice";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/batiment" element={<Batiment />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/fabrication" element={<Fabrication />}></Route>
        <Route path="/alimentation" element={<Alimentation />}></Route>
        <Route path="/acces" element={<Acces />}></Route>
        <Route path="/cookies" element={<Cookies />}></Route>
        <Route path="/personalData" element={<PersonalData />}></Route>
        <Route path="/legalNotice" element={<LegalNotice />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
