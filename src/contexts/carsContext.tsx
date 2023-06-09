import { Dispatch, SetStateAction, createContext, useState } from "react";

interface iCarsProviderChildren{
    children: React.ReactNode
}

interface iCarsProvider{
    page: number,
    setPage: Dispatch<SetStateAction<number>>,
    carsQuantity: number
}

export const CarsContext = createContext({} as iCarsProvider)

export const CarsProvider = ({ children }: iCarsProviderChildren) => {
    const [page, setPage] = useState<number>(1)
    const [carsQuantity, setCarsQuantity] = useState<number>(0)
    // quem for mexer com o get de carros, setar a quantidade total que tem no banco de dados
    // de acordo com os filtros passados, ex: tem 1000 carros na api, mas tá com filtro de
    // somente carro civic, e só tem 43 desse tipo, setar a quantidade para 43 ao invés de 1000

    return (
        <CarsContext.Provider value={{ page, setPage, carsQuantity }} >
            {children}
        </CarsContext.Provider>
    )
}