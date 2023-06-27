import { useContext } from "react"
import { FilterContext } from "../contexts/filterContext"

export const useFilterHook = () => {
    const filterContext = useContext(FilterContext)

    return filterContext
}