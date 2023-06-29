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
import { ICar } from "../interfaces/carInterface";
import { useModalHook, useUserHook } from "../hooks";
import { Location, useLocation, useNavigate } from "react-router-dom";
import { IUserResponse } from "../interfaces/userIterface";
import { iUpdaterCar } from "../components/FormUpdateCar/updateCarSchema";

interface iCarsProviderChildren {
  children: React.ReactNode;
}

interface iCarsProvider {
  brands: string[];
  page: number;
  selectCarID: string;
  setSelectCarID: Dispatch<SetStateAction<string>>;
  setPage: Dispatch<SetStateAction<number>>;
  selectCar: iUpdaterCar;
  setSelectCar: Dispatch<SetStateAction<iUpdaterCar>>;
  carsQuantity: number;
  modelsAvaliable: iCarInfos[];
  searchCar: iSearchCar;
  searchCarsByBrand: (data: string) => void;
  findCar: (data: string) => void;
  getFuel: (data: number) => string;
  createCar: (data: iRegisterCar) => void;
  showSelectCarPage: (data: string) => void;
  getCarById: (data: string) => void;
  carsHome: iCarsHome;
  updateCar: (data: iUpdaterCar) => void;
  getCarsUser: () => void;
  ListCarUser: iUpdaterCar[];
  setListCarUser: Dispatch<SetStateAction<iUpdaterCar[]>>;
  siteUrl: Location;
  convertFuelString: (fuel: string) => number;
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
  year: string;
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

interface iCarReturn {
  id: string;
  brand: string;
  model: string;
  year: number;
  fuel: number;
  km: number;
  color: string;
  price: string;
  isActive: boolean;
  description: string;
  isPromo: boolean;
  createdAt: string;
  updatedAt: string;
  photos: iPhoto[];
  user: IUserResponse;
}

interface iCarsHome {
  previousPage: string;
  nextPage: string;
  count: number;
  data: iCarReturn[];
}

export const CarsContext = createContext({} as iCarsProvider);

export const CarsProvider = ({ children }: iCarsProviderChildren) => {
  const [page, setPage] = useState<number>(1);
  const [carsQuantity, setCarsQuantity] = useState<number>(0);
  const [selectCar, setSelectCar] = useState<iUpdaterCar>({} as iUpdaterCar);
  const [selectCarID, setSelectCarID] = useState<string>("");
  const [brands, setBrands] = useState<string[]>([]);
  const [cars, setCars] = useState<iCarInfos[]>([]);
  const [modelsAvaliable, setModelsAvaliable] = useState<iCarInfos[]>([]);
  const [searchCar, setSearchCar] = useState({} as iSearchCar);
  const [carsHome, setCarsHome] = useState({} as iCarsHome);
  const [ListCarUser, setListCarUser] = useState<iUpdaterCar[]>([]);

  const { tokenUser } = useUserHook();
  const { isOpenModal } = useModalHook();

  const navigate = useNavigate();
  console.log(selectCar);
  // quem for mexer com o get de carros, setar a quantidade total que tem no banco de dados
  // de acordo com os filtros passados, ex: tem 1000 carros na api, mas tá com filtro de
  // somente carro civic, e só tem 43 desse tipo, setar a quantidade para 43 ao invés de 1000

  const siteUrl = useLocation();

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
    try {
      (async () => {
        const { data } = await apiKmotorsService.get(
          `/cars${
            siteUrl.search
              ? `${siteUrl.search}&page=${page}&perPage=12`
              : `?page=${page}&perPage=12`
          }`
        );
        setCarsHome(data);
        setCarsQuantity(data.count);
      })();
    } catch (err) {
      console.error(err);
    }
  }, [siteUrl.search, page]);

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

  const convertFuelString = (fuel: string): number => {
    const fuelBase: string[] = ["Flex", "Híbrido", "Elétrico"];

    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    let number: number = 1

    fuelBase.forEach((fuelCar: string, index: number) => {
      if(fuel === fuelCar) number = index + 1
    })

    return number
  }

  const createCar = async (data: iRegisterCar) => {
    const token: string | null = localStorage.getItem("@kmotors-g28");

    if (!token) {
      navigate("/", { replace: true });
      return;
    }

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

    await apiKmotorsService
      .post(`/cars`, resp, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const getCarsUser = async () => {
    await apiKmotorsService
      .get(`users/profile`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(tokenUser)}`,
        },
      })
      .then((res) => setListCarUser(res.data.cars))
      .catch((err) => console.log(err));
  };

  const updateCar = async (data: iUpdaterCar) => {
    console.log("oi");
    const id = selectCar.id;
    const newData = { ...data, id };
    await apiKmotorsService
      .put(`/cars/${id}`, newData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(tokenUser)}`,
        },
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const showSelectCarPage = async (carID: string) => {
    setSelectCarID(carID);
    await getCarById(carID);
    navigate("/product");
  };

  const getCarById = async (id: string) => {
    await apiKmotorsService
      .get(`/cars/${id}`, {
        headers: {},
      })
      .then((res) => {
        setSelectCar(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <CarsContext.Provider
      value={{
        showSelectCarPage,
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
        getCarById,
        selectCar,
        setSelectCar,
        carsHome,
        getCarsUser,
        updateCar,
        setListCarUser,
        ListCarUser,
        siteUrl,
        convertFuelString,
      }}
    >
      {children}
    </CarsContext.Provider>
  );
};
