import { NavigateFunction, useNavigate } from "react-router-dom"
import { UnloggedStyled } from "./style"
import { TbMenu2 } from "react-icons/tb"
import { AiOutlineClose } from "react-icons/ai"
import { useState } from "react"

export const Unlogged = () => {
    const navigate: NavigateFunction = useNavigate()
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)

    return (
        <UnloggedStyled>
            <div></div>
            <button onClick={() => navigate("/login")}>Fazer login</button>
            <button onClick={() => navigate("/register")}>Cadastrar</button>
            {isOpenMenu ? (
                <button onClick={() => setIsOpenMenu(false)}>
                    <AiOutlineClose />
                </button> ) : (
                <button onClick={() => setIsOpenMenu(true)}>
                    <TbMenu2 />
                </button>
            )}
            {isOpenMenu && (
                <div>
                    <button onClick={() => navigate("/login")}>Fazer login</button>
                    <button onClick={() => navigate("/register")}>Cadastrar</button>
                </div>
            )}
        </UnloggedStyled>
    )
}