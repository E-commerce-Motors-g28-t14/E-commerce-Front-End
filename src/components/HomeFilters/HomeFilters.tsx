import { HomeFiltersStyled } from "./style"

export const HomeFilters = () => {
    return(
        <HomeFiltersStyled>
            <ul>
                <h2>Marca</h2>
                <li>
                    <a href="#">General Motors</a>
                    <a href="#">Fiat</a>
                    <a href="#">Ford</a>
                    <a href="#">Honda</a>
                    <a href="#">Volswagen</a>
                </li>
                <h2>Modelo</h2>
                <li>
                    <a href="#">Civic</a>
                    <a href="#">Corolla</a>
                    <a href="#">Cruze</a>
                    <a href="#">Fit</a>
                    <a href="#">Sedan</a>
                    <a href="#">Gol</a>
                </li>
                <h2>Cor</h2>
                <li>
                    <a href="#">Branco</a>
                    <a href="#">Preto</a>
                    <a href="#">Prata</a>
                    <a href="#">Verde</a>
                    <a href="#">Vermelho</a>
                    <a href="#">Azul</a>
                </li>
                <h2>Ano</h2>
                <li>
                    <a href="#">2020</a>
                    <a href="#">2021</a>
                    <a href="#">2023</a>
                    <a href="#">2019</a>
                    <a href="#">2018</a>
                </li>
                <h2>Combustivel</h2>
                <li>
                    <a href="#">Etanol</a>
                    <a href="#">Gazolina</a>
                    <a href="#">Diesel</a>
                    <a href="#">Flex</a>
                </li>
                <h2>Km</h2>
                <div>
                    <input type="number" placeholder="Mínimo" />
                    <input type="number" placeholder="Máximo" />
                </div>
                <h2>Preço</h2>
                <div>
                    <input type="number" placeholder="Mínimo" />
                    <input type="number" placeholder="Máximo" />
                </div>
            </ul>
        </HomeFiltersStyled>
    )
}