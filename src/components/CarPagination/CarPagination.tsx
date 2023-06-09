import { CarPaginationStyled } from "./style"
import { useCarsHook } from "../../hooks/carsHook"

export const CarPagination = () => {
    const { page, setPage, carsQuantity } = useCarsHook()

    let pageNumber: number = carsQuantity / 12

    if(parseInt(pageNumber.toFixed(0)) < pageNumber || pageNumber === 0){
        pageNumber = parseInt(pageNumber.toFixed(0)) + 1
    }

    const previousPage = () => {
        setPage(page - 1)
    }

    const nextPage = () => {
        setPage(page + 1)
    }

    return (
        <CarPaginationStyled>
            {page > 1 && <button disabled={page <= 1} onClick={() => previousPage()}>{"<"} Anterior</button>}
            <span><span>{page}</span> de {pageNumber}</span>
            {page < pageNumber && <button disabled={page >= pageNumber} onClick={() => nextPage()}>Seguinte {">"}</button>}
        </CarPaginationStyled>
    )
}