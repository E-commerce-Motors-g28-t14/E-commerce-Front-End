import { CardAdvertiser } from './components/CardAdvertiser';
import CommentArea from "./components/CommentArea/CommentArea";
import { CommentCard } from './components/CommentCard';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PhotoGalery from "./components/PhotoGalery/PhotoGalery";

const App = () => {
  return (
    <>
      <Header />
      <CommentArea />
      <PhotoGalery />
      <CommentCard />
      <CardAdvertiser/>
      <Footer/>
    </>
  );
};

export default App;
