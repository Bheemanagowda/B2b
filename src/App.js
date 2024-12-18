import "./App.css";
import Header from "./components/Header";
import TopCities from "./components/TopCities";
import Categories from "./components/Categories";
import TradeApp from "./components/TradeApp";
import SubscribeToTheNewsLetterApp from "./components/SubscribeToTheNewsLetterApp";
import Footer from "./components/footercomponents/Footer";
import InteriorAndFurnitures from "./components/ProductComponents/InteriorAndFurnitures";

import ElectronicsAndElectrical from "./components/ProductComponents/ElectronicsAndElectrical";
import FoodAndBeverages from "./components/ProductComponents/FoodAndBeverages";

import MechanicalComponents from "./components/ProductComponents/MechanicalComponents";
import EnquiryWeconnect from "./components/EnquiryWeconnect";

function App() {
  return (
    <div className="App">
      <Header />
      <EnquiryWeconnect />

      <Categories />
      <InteriorAndFurnitures />

      <ElectronicsAndElectrical />
      <FoodAndBeverages />

      <MechanicalComponents />

      <TopCities />
      <TradeApp />
      <SubscribeToTheNewsLetterApp />
      <Footer />
    </div>
  );
}

export default App;
