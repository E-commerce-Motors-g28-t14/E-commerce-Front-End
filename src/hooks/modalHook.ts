import { useContext } from "react";
import { ModalContext } from "../contexts/modalContext";

export const useModalHook = () => {
  const useModal = useContext(ModalContext);

  return useModal;
};
