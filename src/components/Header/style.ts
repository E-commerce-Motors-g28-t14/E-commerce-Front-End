import styled from "styled-components";

export const ContainerHeader = styled.div`
   
    height:80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    justify-content: center;  
    background-color: var(--color-white-fixed);
    border-bottom: solid 2px var(--color-grey-6);

    .container-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 90%;
        height: 100%;       

    }

    .container-user{
        border-left: solid 2px var(--color-grey-6);
        height: 100%;
        display: flex;
        align-items: center;
        padding-left: 2em;
    }


    .menu-hamburguer{
        border: none;
        background-color: transparent;
        font-size: 2em;
    }
`
