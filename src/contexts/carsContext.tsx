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
import { useUserHook } from "../hooks";
import { ICar } from "../interfaces/carInterface";
import { useNavigate } from "react-router-dom";

interface iCarsProviderChildren {
  children: React.ReactNode;
}

interface iCarsProvider {
  brands: string[];
  page: number;
  selectCarID: string;
  setSelectCarID:Dispatch<SetStateAction<string>> 
  setPage: Dispatch<SetStateAction<number>>;
  selectCar: ICar;
  setSelectCar:Dispatch<SetStateAction<ICar>> 
  carsQuantity: number;
  modelsAvaliable: iCarInfos[];
  searchCar: iSearchCar;
  searchCarsByBrand: (data: string) => void;
  findCar: (data: string) => void;
  getFuel: (data: number) => string;
  createCar: (data: iRegisterCar) => void;
  showSelectCarPage: (data:string) => void  
  getCarById: (data: string) => void;
  

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
  fuel: number;
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
  const [selectCarID, setSelectCarID] = useState<string>("")
  const [selectCar, setSelectCar] = useState<ICar>({} as ICar);
  const [brands, setBrands] = useState<string[]>([]);
  const [cars, setCars] = useState<iCarInfos[]>([]);
  const [modelsAvaliable, setModelsAvaliable] = useState<iCarInfos[]>([]);
  const [searchCar, setSearchCar] = useState({} as iSearchCar);

  const { tokenUser } = useUserHook();

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

  const searchCarsByName = (carName: string): iCarInfos[] | [] => {
    return cars?.filter((car) => car.name.includes(carName));
  };

  const searchCarsByBrand = (brandCar: string): void => {
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
      fuel: fuel,
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
          Authorization: `Bearer ${tokenUser}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  const navigate = useNavigate(); 

  const showSelectCarPage = (carID: string) => {      
    setSelectCarID(carID);
    navigate('/product');
  }; 

  const getCarById = async (id: string) => {
    await apiKmotorsService.get(`/cars/${id}`, {
        headers: {
          Authorization: `Bearer ${tokenUser}`,
        },
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
        selectCarID, setSelectCarID,
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
        selectCar, setSelectCar
      }}
    >
      {children}
    </CarsContext.Provider>
  );
};
