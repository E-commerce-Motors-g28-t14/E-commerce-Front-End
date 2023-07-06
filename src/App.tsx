import { StyledGlobal  } from "./styles";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Product from "./pages/Product/product";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import SellerPage from "./pages/SellerPage/SellerPage";
import Login from "./pages/Login/Login"; 
import Recovery from "./pages/Recovery/Recovery";
import GeneralSellerPage from "./pages/GeneralSellerPage/GeneralSellerPage";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const ProtectedRoutes = () => {
    const tokenUser = localStorage.getItem("@kmotors-g28");
    if(tokenUser) return <Outlet />
    toast.warning("Logue novamente na página");
    return <Navigate to={"/login"} replace />;
  };

  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />
        <Route path="/reset-password/:id" element={<Recovery />} />
        <Route path="/seller/:name" element={<GeneralSellerPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/seller" element={<SellerPage />} />         
        </Route>
      </Routes>
      <StyledGlobal />
    </div>
  );
};

export default App;
