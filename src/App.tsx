import CardCar from "./components/CardCar/CardCar";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";



const App = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", width: '100vw', height: '100vh', justifyContent: "space-between"}}>
      <Header />
     <CardCar/> 
      <Footer/>
    </div>
  );
};

export default App;
