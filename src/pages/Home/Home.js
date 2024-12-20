
import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";
import TopCities from "./TopCities"; // Adjust path based on location
import Categories from './Categories';

import TradeApp from "./TradeApp";
import SubscribeToTheNewsLetterApp from "./SubscribeToTheNewsLetterApp";
import InteriorAndFurnitures from "../../components/ProductComponents/InteriorAndFurnitures";
import ElectronicsAndElectrical from "../../components/ProductComponents/ElectronicsAndElectrical";
import FoodAndBeverages from "../../components/ProductComponents/FoodAndBeverages";
import MechanicalComponents from '../../components/ProductComponents/MechanicalComponents';
import EnquiryWeconnect from "./EnquiryWeconnect";

function Home() {
  return (
    <div>
      <Header/>
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

export default Home;
