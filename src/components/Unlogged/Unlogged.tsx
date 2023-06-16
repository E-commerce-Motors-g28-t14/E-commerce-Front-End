import { NavigateFunction, useNavigate } from "react-router-dom"
import { UnloggedStyled } from "./style"

export const Unlogged = () => {
    const navigate: NavigateFunction = useNavigate()

    return (
        <UnloggedStyled>
            <div></div>
            <button onClick={() => navigate("/login")}>Fazer login</button>
            <button onClick={() => navigate("/register")}>Cadastrar</button>
        </UnloggedStyled>
    )
}