import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { apiFipeService, apiKmotorsService } from "../services";
import { AxiosResponse } from "axios";
import { iRegisterCar } from "../components/FormCreateCar/createCarSchema";
import { useModalHook, useUserHook } from "../hooks";
import { useNavigate } from "react-router-dom";

interface iCarsProviderChildren {
  children: React.ReactNode;
}

interface iCarsProvider {
  brands: string[];
  page: number;
  selectCarID: string;
  setSelectCarID: Dispatch<SetStateAction<string>>;
  setPage: Dispatch<SetStateAction<number>>;
  carsQuantity: number;
  searchCarsByBrand: (data: string) => void;
  modelsAvaliable: iCarInfos[];
  searchCar: iSearchCar;
  findCar: (data: string) => void;
  getFuel: (data: number) => string;
  createCar: (data: iRegisterCar) => void;
}

interface iCarInfos {
  brand: string;
  fuel: number;
  id: string;
  name: string;
  value: number;
  year: string;
}

interface iSearchCar {
  fuel: string;
  fipe: number;
  year: string;
}

interface iTeste {
  brand: string;
  model: string;
  year: number;
  fuel: string | number;
  km: number;
  color: string;
  fipePrice: string;
  price: string;
  photos: iPhoto[];
}

interface iPhoto {
  imageLink: string | number | null | undefined;
  isCover: boolean;
}

export const CarsContext = createContext({} as iCarsProvider);

export const CarsProvider = ({ children }: iCarsProviderChildren) => {
  const [page, setPage] = useState<number>(1);
  const [carsQuantity, setCarsQuantity] = useState<number>(0);
  const [selectCarID, setSelectCarID] = useState<string>("");
  const [brands, setBrands] = useState<string[]>([]);
  const [cars, setCars] = useState<iCarInfos[]>([]);
  const [modelsAvaliable, setModelsAvaliable] = useState<iCarInfos[]>([]);
  const [searchCar, setSearchCar] = useState({} as iSearchCar);

  const { tokenUser } = useUserHook();
  const { isOpenModal } = useModalHook();

  const navigate = useNavigate();

  // quem for mexer com o get de carros, setar a quantidade total que tem no banco de dados
  // de acordo com os filtros passados, ex: tem 1000 carros na api, mas tá com filtro de
  // somente carro civic, e só tem 43 desse tipo, setar a quantidade para 43 ao invés de 1000

  useEffect(() => {
    try {
      (async () => {
        const res = await apiFipeService.get("/cars");
        setBrands(Object.keys(res.data));
      })();
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    (async () => {
      const listCars: iCarInfos[] = [];

      for (const keys in brands) {
        const res: AxiosResponse = await apiFipeService.get(
          `/cars?brand=${brands[keys]}`
        );
        const payload = await res.data;

        payload.forEach((car: iCarInfos, index: number, array: []) => {
          array[index] !== undefined ? listCars.push(array[index]) : listCars;
        });
      }

      setCars(listCars);
    })();
  }, [brands]);

  useEffect(() => {
    const clearModels = () => {
      if (!isOpenModal) {
        setSearchCar({} as iSearchCar);
        return;
      }
    };
    clearModels();
  }, [isOpenModal]);

  const searchCarsByName = (carName: string): iCarInfos[] | [] => {
    return cars?.filter((car) => car.name.includes(carName));
  };

  const searchCarsByBrand = (brandCar: string): void => {
    setSearchCar({} as iSearchCar);
    const newCars: iCarInfos[] = cars?.filter((car) =>
      car.brand.includes(brandCar)
    );

    setModelsAvaliable([...newCars]);
  };

  const findCar = (modelName: string): void => {
    if (modelName === "") {
      setSearchCar({} as iSearchCar);
      return;
    }
    const { fuel, value, year } = modelsAvaliable.filter(
      (element) => element.name === modelName
    )[0];

    const carData = {
      fuel: getFuel(fuel),
      fipe: value,
      year: year,
    };

    setSearchCar({ ...carData });
    return;
  };

  const getFuel = (index: number) => {
    const fuelBase: string[] = ["Flex", "Híbrido", "Elétrico"];

    return fuelBase[index - 1];
  };

  const createCar = async (data: iRegisterCar) => {
    const token: string | null = localStorage.getItem("@kmotors-g28");

    // if (!token) {
    //   navigate("/", { replace: true });
    //   return;
    // }

    const photos: iPhoto[] = [];

    const dataKeys: string[] = Object.keys(data);

    dataKeys.forEach((key: string) => {
      if (key.includes("photo")) {
        if (data[key as keyof iRegisterCar]) {
          const photoData: iPhoto = {
            imageLink: data[key as keyof iRegisterCar],
            isCover: key.includes("Cape"),
          };

          photos.push(photoData);
        }

        delete data[key as keyof iRegisterCar];
      }
    });

    const resp: iTeste = { ...data, photos: [...photos] };
    const fuelBase: string[] = ["Flex", "Híbrido", "Elétrico"];

    resp.fuel = fuelBase.indexOf(resp.fuel as string) + 1;

    console.log(resp);

    // await apiKmotorsService
    //   .post(`/cars`, resp, {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${JSON.parse(token)}`,
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <CarsContext.Provider
      value={{
        selectCarID,
        setSelectCarID,
        page,
        setPage,
        carsQuantity,
        searchCarsByBrand,
        brands,
        modelsAvaliable,
        searchCar,
        findCar,
        getFuel,
        createCar,
      }}
    >
      {children}
    </CarsContext.Provider>
  );
};
