import CardCar from "./components/CardCar/CardCar";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { StyledGlobal } from "./styles";

import { Route, Routes } from "react-router-dom";
import Product from "./pages/Product/product";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import SellerPage from "./pages/SellerPage/SellerPage";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/product" element={<Product />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/seller" element={<SellerPage />} />
      </Routes>
      <StyledGlobal />
    </div>
  );
};

export default App;
