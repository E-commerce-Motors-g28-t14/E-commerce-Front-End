import { motion } from "framer-motion";
import { LoagindContainer } from "./style";
import loading from "../../assets/loading.png";

export const Loading = () => {

  
  return (
    <>
      <LoagindContainer>
        <div className="container-image-loading">
          <motion.img
            src={loading}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <p>Carregando...</p>
      </LoagindContainer>
    </>
  );
};
