import { createContext, useEffect } from "react";
import { useState } from "react";
import { apiFipeService, apiKmotorsService } from "../services";
import { AxiosResponse } from "axios";
import { ICarsResponse } from "../interfaces/carInterface";
import { useCarsHook } from "../hooks/carsHook";

interface IFilterProviderProps {
  children: React.ReactNode;
}

interface IFilterProvider {
  brands: Array<string>;
  models: Array<string>;
  colors: Array<string>;
  years: Array<number>;
  fuelTypes: Array<string>;
  actualFilter: IActualFilter;
}

interface IActualFilter {
  brand?: string;
  model?: string;
  color?: string;
  year?: string;
  fuel?: string;
  minPrice?: string;
  maxPrice?: string;
  minKm?: string;
  maxKm?: string;
}

export const FilterContext = createContext({} as IFilterProvider);

export const FilterProvider = ({ children }: IFilterProviderProps) => {
  const [brands, setBrands] = useState([] as Array<string>);
  const [models, setModels] = useState([] as Array<string>);
  const [colors, setColors] = useState([] as Array<string>);
  const [years, setYears] = useState([] as Array<number>);
  const [fuelTypes, setFuelTypes] = useState([] as Array<string>);

  const [actualFilter, setActualFilter] = useState({} as IActualFilter);

  const { getFuel } = useCarsHook()

  useEffect(() => {
    const getFilterValues = async (): Promise<void> => {
      const brandDefault = [
        "General Motors",
        "Fiat",
        "Ford",
        "Honda",
        "Porsche",
        "Volkswagem",
      ];
      const modelDefault = [
        "Civic", 
        "Corolla",
        "Cruze",
        "Fit",
        "Gol",
        "Ka",
        "Onix",
        "Porsche 718",
      ];
      const colorDefault = [
        "Azul",
        "Branca",
        "Cinza",
        "Prata",
        "Preta",
        "Verde",
      ];
      const yearDefault = [
        2022,
        2021,
        2018,
        2015,
        2013,
        2012,
        2010,
      ];
      const fuelDefault = [
        "Diesel",
        "Etanol",
        "Gasolina",
        "Flex"
      ];

      try {
        const api = await apiKmotorsService.get("/cars/infos");

        const cars: ICarsResponse[] = Object.entries(api.data).map((data: any[]) => data[1]).flat()
        
        const colorsCars: string[] = []
        const yearsCars: number[] = []
        const fuelsCars: string[] = []
        const modelCars: string[] = []
        
        cars.forEach(car => {
          if(!colorsCars.includes(car.color)) colorsCars.push(car.color)
          if(!yearsCars.includes(car.year)) yearsCars.push(car.year)
          const convertFuel: string = getFuel(car.fuel)
          if(!fuelsCars.includes(convertFuel)) fuelsCars.push(convertFuel)
          if(!modelCars.includes(car.model)) modelCars.push(car.model)
        })

        colorsCars.length ? setColors(colorsCars) : setColors(colorDefault)
        yearsCars.length ? setYears(yearsCars) : setYears(yearDefault)
        fuelsCars.length? setFuelTypes(fuelsCars) : setFuelTypes(fuelDefault)
        modelCars.length? setModels(modelCars) : setModels(modelDefault)
        
        const brandsKeys: string[] = Object.keys(api.data);

        brandsKeys.length ? setBrands(brandsKeys) : setBrands(brandDefault);
      } catch (error) {
        console.log(error);
        setBrands(brandDefault);
        setColors(colorDefault);
        setYears(yearDefault);
        setFuelTypes(fuelDefault);
        setModels(modelDefault);
      }
    };

    getFilterValues();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FilterContext.Provider
      value={{
        brands,
        models,
        colors,
        years,
        fuelTypes,
        actualFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
