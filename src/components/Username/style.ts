import styled from "styled-components";

export const ContainerUsername = styled.div`

display: flex;
flex-direction: row;
align-items: center;

.container-photo-perfil{
    border-radius: 50%;
    height: 32px;
    width: 32px;
    left: 277px;
    top: 23.5px;
    display: flex;
    align-items: center;
    justify-content: center;    
}

.container-photo-perfil h2{
    font-family: Inter;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0em;
    text-align: left;
    color: var(--color-white-fixed);
}

.container-name h2{
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--color-grey-2);
    margin-left: 5px;
}
`