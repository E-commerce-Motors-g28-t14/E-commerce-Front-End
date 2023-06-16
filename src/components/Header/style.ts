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
        display: flex;
        flex-direction: column;
        border-left: solid 2px var(--color-grey-6);
        display: flex;
        align-items: center;
        padding-left: 2em;
        position: relative;
        width: 320px;
        cursor: default;

        div {
            cursor: pointer;
        }

        ul {
            display: flex;
            flex-direction: column;

            position: absolute;
            top: 49px;

            max-height: 180px;
            width: 100%;
            max-width: 100%;
            padding: 21px 22px;
            gap: 1rem;
            z-index: 1;

            border-radius: var(--radius-2);
            background-color: var(--color-grey-9);
            box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

            >li > span {
                font-size: 16px;
                line-height: 28px;

                cursor: pointer;
            }
        }
        
        .container-list-menu {
            display: flex;
            width: 100vw;
            position: relative;
        }
    }


    .menu-hamburguer{
        font-size: 2em;
        border: none;

        background-color: transparent;
    }

    @media(max-width: 768px){
        border-bottom: none;
        .container-header{
            position: relative;
        }

        .container-list-menu{
            min-width: 110%;
            position: absolute;
            top: 80px;
            left: -5%;
            gap: 1rem;
            padding: 21px 22px;
            
            z-index: 1;

            border-radius: var(--radius-2);
            background-color: var(--color-white-fixed);
            box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
            >li > span{
                cursor: pointer;
                font-size: 16px;
                line-height: 28px;

                color: var(--color-grey-2);
            }
        }
    }

`
