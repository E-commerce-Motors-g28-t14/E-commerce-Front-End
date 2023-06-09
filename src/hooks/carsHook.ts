import { useContext } from "react"
import { CarsContext } from "../contexts/carsContext"

export const useCarsHook = () => {
    const carsContext = useContext(CarsContext)

    return carsContext
}