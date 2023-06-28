import { Link, useLocation, useNavigate } from "react-router-dom";
import { HomeFiltersStyled } from "./style";
import { useFilterHook } from "../../hooks";
import { useCarsHook } from "../../hooks/carsHook";

interface IHomeFilterProps {
  className?: string;
}

export const HomeFilters = ({ className }: IHomeFilterProps) => {
  const { brands, colors, fuelTypes, models, years } = useFilterHook()
  const { siteUrl, convertFuelString } = useCarsHook()

  const navigate = useNavigate()

  const handleLinkQuery = (query: string): string => {
    const queries: string = siteUrl.search.replace("%20", " ")

    if(!queries){
      return `?${query}`
    }

    const querySplit: string[] = query.split("=")

    if(querySplit[0] === "minKm" || querySplit[0] === "maxKm" || 
    querySplit[0] === "minPrice" || querySplit[0] === "maxPrice"){
      if(queries.includes(querySplit[0])){
        const queriesSplited: string[] = queries.split("&")
        const querySplited: string[] = query.split("=")

        const queriesArray: string[] = queriesSplited.map((element, index) => {
          const queryKey: string = query.replace("?", "").split("=")[0]
          const queryValue: string = query.replace("?", "").split("=")[1]

          if(!queryValue && queryKey === element.replace("?", "").split("=")[0]) return ""

          if(index === 0){
            const queryKey: string = element.replace("?", "").split("=")[0]
            if(queryKey === querySplited[0]){
              return `?${query}`
            }
          }

          const queryArray: string[] = element.split("=")
          if(queryArray[0] === querySplited[0]){
            return query
          }

          return element
        })

        const queriesChange: string = queriesArray.filter(key => key).join("&")

        return queriesChange
      } else{
        return `${queries}&${query}`
      }
    }

    if(queries.includes(query)){
      if(queries.includes(`?${query}`)){
        const queriesChange: string = queries.replace(`?${query}`, "").split("&").join("&")
        return queriesChange ? `?${queriesChange.substring(1)}` : ""
      } else {
        const queriesChange: string = queries.replace(`&${query}`, "")
        return queriesChange
      }
    }

    if(queries.includes(query.split("=")[0])){      
      const queriesSplited: string[] = queries.split("&")
      const querySplited: string[] = query.split("=")

      const queriesArray: string[] = queriesSplited.map((element, index) => {
        if(index === 0){
          const queryKey: string = element.replace("?", "").split("=")[0]
          if(queryKey === querySplited[0]){
            return `?${query}`
          }
        }

        const queryKey: string[] = element.split("=")
        if(queryKey[0] === querySplited[0]){
          return query
        }

        return element
      })

      const queriesChange: string = queriesArray.join("&")

      return queriesChange
    }
    
    return `${queries}&${query}`
  }

  const handleInputQuery = (query: string) => {
    setTimeout(() => {
      const link = handleLinkQuery(query)
      navigate(link)
    }, 500)
  }

  return (
    <HomeFiltersStyled className={className}>
      <ul>
        <h2>Marca</h2>
        <li>
          {
            brands && brands.map((brand: string, index: number) => <Link key={index} to={handleLinkQuery(`brand=${brand}`)}>{brand}</Link>)
          }
        </li>
        <h2>Modelo</h2>
        <li>
          {
            models && models.map((model: string, index: number) => <Link key={index} to={handleLinkQuery(`model=${model}`)}>{model}</Link>)
          }
        </li>
        <h2>Cor</h2>
        <li>
          {
            colors && colors.map((color: string, index: number) => <Link key={index} to={handleLinkQuery(`color=${color}`)}>{color}</Link>)
          }
        </li>
        <h2>Ano</h2>
        <li>
          {
            years && years.map((year: string, index: number) => <Link key={index} to={handleLinkQuery(`year=${year}`)}>{year}</Link>)
          }
        </li>
        <h2>Combustivel</h2>
        <li>
          {
            fuelTypes && fuelTypes.map((fuelType: string, index: number) => <Link key={index} to={handleLinkQuery(`fuel=${convertFuelString(fuelType)}`)}>{fuelType}</Link>)
          }
        </li>
        <h2>Km</h2>
        <div>
          <input onChange={(event) => handleInputQuery(`minKm=${event.target.value}`)} type="number" placeholder="Mínimo" />
          <input onChange={(event) => handleInputQuery(`maxKm=${event.target.value}`)} type="number" placeholder="Máximo" />
        </div>
        <h2>Preço</h2>
        <div>
          <input onChange={(event) => handleInputQuery(`minPrice=${event.target.value}`)} type="number" placeholder="Mínimo" />
          <input onChange={(event) => handleInputQuery(`maxPrice=${event.target.value}`)} type="number" placeholder="Máximo" />
        </div>
      </ul>
    </HomeFiltersStyled>
  );
};
