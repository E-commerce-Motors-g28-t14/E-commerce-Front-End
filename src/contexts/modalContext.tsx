import { createContext, useState } from "react";

interface iModalProviderProps {
  children: React.ReactNode;
}

interface iModalProvider {
  isOpenModal: boolean;
  photoLink: string;
  toggleModal: () => void;
  modalWithPhoto: (data: string) => void;
}

export const ModalContext = createContext({} as iModalProvider);

export const ModalProvider = ({ children }: iModalProviderProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [photoLink, setPhotoLink] = useState("");

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const modalWithPhoto = (photo: string) => {
    setPhotoLink(photo);
    setIsOpenModal(true);
  };

  return (
    <ModalContext.Provider
      value={{
        isOpenModal,
        photoLink,
        toggleModal,
        modalWithPhoto,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
