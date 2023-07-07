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
  isOpenModalDeleteCar: boolean;
  photoLink: string;
  toggleModal: () => void;
  toggleModalPhoto: () => void;
  toggleModalFilter: () => void;
  toggleModalFormsUser: () => void;
  toggleModalFormsCar: () => void;
  toggleModalDeleteCar: () => void;
  modalWithPhoto: (data: string) => void;
  toggleModalAnnouceConfirm: () => void;
  isOpenModalAnnounceConfirm: boolean;
}

export const ModalContext = createContext({} as iModalProvider);

export const ModalProvider = ({ children }: iModalProviderProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenModalPhoto, setIsOpenModalPhoto] = useState(false);
  const [isOpenModalFilter, setIsOpenModalFilter] = useState(false);
  const [isOpenModalFormsUser, setIsOpenModalFormsUser] = useState(false);
  const [isOpenModalFormsCar, setIsOpenModalFormsCar] = useState(false);
  const [isOpenModalDeleteCar, setIsOpenModalDeleteCar] = useState(false);
  const [photoLink, setPhotoLink] = useState("");
  const [isOpenModalAnnounceConfirm, setIsOpenModalAnnounceConfirm] = useState<boolean>(false);

  const toggleModalAnnouceConfirm = (): void => {
    setIsOpenModalAnnounceConfirm(!isOpenModalAnnounceConfirm)
  }

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

  const toggleModalDeleteCar = () => {
    setIsOpenModalDeleteCar(!isOpenModalDeleteCar);
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
        isOpenModalDeleteCar,
        toggleModalDeleteCar,
        toggleModalAnnouceConfirm,
        isOpenModalAnnounceConfirm
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
