import CardCar from "./components/CardCar/CardCar";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { StyledGlobal } from "./styles";

import { Route, Routes } from "react-router-dom";
import Product from "./pages/Product/product";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/product" element={<Product />} />
      </Routes>
      <StyledGlobal />
    </div>
  );
};

export default App;
