import { StyledGlobal } from "./styles";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Product from "./pages/Product/product";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import SellerPage from "./pages/SellerPage/SellerPage";
import Login from "./pages/Login/Login";
import { useContext } from "react";
import { UserContext } from "./contexts/userContext";
import Recovery from "./pages/Recovery/Recovery";
const App = () => {
  const { tokenUser } = useContext(UserContext);
  const ProtectedRoutes = () => {
    return tokenUser ? <Outlet /> : <Navigate to={"/login"} replace />;
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />
        <Route path="/reset-password/:id" element={<Recovery />} />
        {/* <Route element={<ProtectedRoutes />}> */}
        <Route path="/seller" element={<SellerPage />} />
        {/* </Route> */}
      </Routes>
      <StyledGlobal />
    </div>
  );
};

export default App;
