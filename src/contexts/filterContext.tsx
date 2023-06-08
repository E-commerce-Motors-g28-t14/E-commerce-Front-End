import { createContext, useEffect } from "react";
import { useState } from "react";

interface IFilterProviderProps {
  children: React.ReactNode;
}

interface IFilterProvider {
  brands: Array<string>;
  models: Array<string>;
  colors: Array<string>;
  years: Array<string>;
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
  const [years, setYears] = useState([] as Array<string>);
  const [fuelTypes, setFuelTypes] = useState([] as Array<string>);

  const [actualFilter, setActualFilter] = useState({} as IActualFilter);

  useEffect(() => {
    const getFilterValues = () => {
      const brandDefault = [
        "General Motors",
        "Fiat",
        "Ford",
        "Honda",
        "Porsche",
        "Volkswagem",
      ];
      const modelDefault = [
        "Civic, Corolla",
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
        "2022",
        "2021",
        "2018",
        "2015",
        "2013",
        "2012",
        "2010",
      ];
      const fuelDefault = ["Diesel", "Etanol", "Gasolina", "Flex"];

      setBrands(brandDefault);
      setModels(modelDefault);
      setColors(colorDefault);
      setYears(yearDefault);
      setFuelTypes(fuelDefault);
    };

    getFilterValues();
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
