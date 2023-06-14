import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";
import { apiFipeService } from '../services';
import { AxiosResponse } from 'axios';

interface iCarsProviderChildren{
    children: React.ReactNode
}

interface iCarsProvider{
    page: number,
    setPage: Dispatch<SetStateAction<number>>,
    carsQuantity: number,
    searchCarsByBrand: (data:string) => iCarInfos[]
}

interface iCarInfos{
    brand: string,
    fuel: number,
    id: string,
    name: string,
    value: number,
    year: string,
}

export const CarsContext = createContext({} as iCarsProvider)

export const CarsProvider = ({ children }: iCarsProviderChildren) => {
    const [page, setPage] = useState<number>(1)
    const [carsQuantity, setCarsQuantity] = useState<number>(0)

    const [brands, setBrands] = useState<string[]>([])
    const [cars, setCars] = useState<iCarInfos[]>([] as iCarInfos[])

    // quem for mexer com o get de carros, setar a quantidade total que tem no banco de dados
    // de acordo com os filtros passados, ex: tem 1000 carros na api, mas tá com filtro de
    // somente carro civic, e só tem 43 desse tipo, setar a quantidade para 43 ao invés de 1000

    useEffect(() => {
        try{
            (async () => {
                const res = await apiFipeService.get('/cars')
                setBrands(Object.keys(res.data))
            })();
        }catch(err){
            console.error(err)
        }
    }, [])

    useEffect(() => {
        (async()=>{

            const listCars: iCarInfos[] = []

            for(let keys in brands){
                const res: AxiosResponse = await apiFipeService.get(`/cars?brand=${brands[keys]}`)
                const payload = await res.data

                payload.forEach((car: iCarInfos, index: number, array: []) => {
                    array[index] !== undefined ? listCars.push(array[index]) : listCars})
                }

                setCars(listCars)
        })()
    },[brands])

    const searchCarsByName = (carName: string): iCarInfos[] | [] => {
        return cars?.filter((car) => car.name.includes(carName))
    }
    
    const searchCarsByBrand = (brandCar: string): iCarInfos[] => {
        return cars?.filter((car) => car.brand.includes(brandCar))
    }

    return (
        <CarsContext.Provider value={{ page, setPage, carsQuantity, searchCarsByBrand }} >
            {children}
        </CarsContext.Provider>
    )
}