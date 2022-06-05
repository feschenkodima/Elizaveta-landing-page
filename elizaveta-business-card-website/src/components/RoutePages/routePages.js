import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Contacts from "../Contacts/Contacts";
import Prices from "../Prices/Prices";
import Gallery from "../Gallery/Gallery";
import Tesmonials from "../Tesmonials/Tesmonials";

const RoutePages = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/gallery" element={<Gallery />}></Route>
      <Route exact path="/contacts" element={<Contacts />}></Route>
      <Route exact path="/prices" element={<Prices />}></Route>
      <Route exact path="/tesmonials" element={<Tesmonials />}></Route>
    </Routes>
  );
};

export default RoutePages;
