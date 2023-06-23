import { createContext, useState } from "react";

interface iModalProviderProps {
  children: React.ReactNode;
}

interface iModalProvider {
  isOpenModal: boolean;
  isOpenModalPhoto: boolean;
  isOpenModalFilter: boolean;
  isOpenModalFormsUser: boolean;
  isOpenModalFormsCar: boolean;
  photoLink: string;
  toggleModal: () => void;
  toggleModalPhoto: () => void;
  toggleModalFilter: () => void;
  toggleModalFormsUser: () => void;
  toggleModalFormsCar: () => void;
  modalWithPhoto: (data: string) => void;
}

export const ModalContext = createContext({} as iModalProvider);

export const ModalProvider = ({ children }: iModalProviderProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenModalPhoto, setIsOpenModalPhoto] = useState(false);
  const [isOpenModalFilter, setIsOpenModalFilter] = useState(false);
  const [isOpenModalFormsUser, setIsOpenModalFormsUser] = useState(false);
  const [isOpenModalFormsCar, setIsOpenModalFormsCar] = useState(false);
  const [photoLink, setPhotoLink] = useState("");

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };
  const toggleModalPhoto = () => {
    setIsOpenModalPhoto(!isOpenModalPhoto);
  };

  const toggleModalFilter = () => {
    setIsOpenModalFilter(!isOpenModalFilter);
  };

  const toggleModalFormsUser = () => {
    setIsOpenModalFormsUser(!isOpenModalFormsUser);
  };

  const toggleModalFormsCar = () => {
    setIsOpenModalFormsCar(!isOpenModalFormsCar);
  };

  const modalWithPhoto = (photo: string) => {
    setPhotoLink(photo);
    setIsOpenModalPhoto(true);
  };

  return (
    <ModalContext.Provider
      value={{
        isOpenModal,
        isOpenModalPhoto,
        isOpenModalFilter,
        isOpenModalFormsUser,
        isOpenModalFormsCar,
        photoLink,
        toggleModal,
        toggleModalPhoto,
        toggleModalFilter,
        toggleModalFormsUser,
        toggleModalFormsCar,
        modalWithPhoto,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
