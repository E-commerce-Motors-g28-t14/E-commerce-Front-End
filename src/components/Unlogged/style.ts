import styled from "styled-components";

export const UnloggedStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 3.5rem;
    height: 100%;
    max-width: 100%;

    &>div:nth-child(1){
        border-left: 2px solid var(--color-grey-6);
        height: 100%;
    }

    &>button:nth-child(2){
        font-size: var(--font-size-7);
        font-weight: 600;
        color: var(--color-brand-1);
        border: none;
        background: none;
    }

    &>button:nth-child(3){
        font-size: var(--font-size-7);
        font-weight: 600;
        color: var(--color-grey-0);
        border: 0.16rem solid var(--color-grey-4);
        border-radius: var(--radius-1);
        padding: 1.2rem 2.8rem;
        background-color: white;
    }

    &>button:nth-child(3):hover{
        color: var(--color-grey-10);
        background-color: var(--color-grey-1);
        border: 0.16rem solid var(--color-grey-1);
    }

    &>button:nth-child(4){
        display: none;
        background: none;
        border: none;       

        svg{
            width: 2.5rem;
            height: 2.5rem;
        }
    }

    &>button:nth-child(5){
        display: none;
        background: none;
        border: none;

        svg{
            width: 2.5rem;
            height: 2.5rem;
        }
    }

    &>div:nth-child(5){
        display: flex;
        flex-direction: column;
        gap: 3rem;
        position: absolute;
        width: 100%;
        top: 103%;
        left: 0;
        width: 100%;
        padding: 2.5rem 1.5rem;
        background-color: var(--color-white-fixed);
        filter: drop-shadow(0px 4rem 4rem rgba(0, 0, 0, 0.09));

        button:nth-child(1){
            font-size: var(--font-size-7);
            font-weight: 600;
            color: var(--color-brand-1);
            border: none;
            background: none;
            width: fit-content;
        }

        button:nth-child(2){
            font-size: var(--font-size-7);
            font-weight: 600;
            color: var(--color-grey-0);
            border: 0.16rem solid var(--color-grey-4);
            border-radius: var(--radius-1);
            padding: 1.2rem 2.8rem;
            width: 100%;
            background-color: white;
        }

        button:nth-child(2):hover{
            color: var(--color-grey-10);
            background-color: var(--color-grey-1);
            border: 0.16rem solid var(--color-grey-1);
        }
    }

    @media (max-width: 520px) { 
        &>div:nth-child(1),
        button:nth-child(2),
        button:nth-child(3){
            display: none;
        }

        &>button:nth-child(4),
        button:nth-child(5){
            display: block;
        }

        &>div:nth-child(5){
            display: flex;

            button{
                display: block;
            }
        }
    }

    .drop-down-unlogged {
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      
      padding: 21px 22px;

      z-index: 1;

      border-radius: var(--radius-2);
      background-color: var(--color-white-fixed);
      box-shadow: -1px 18px 9px -7px rgba(0,0,0,0.08);
-webkit-box-shadow: -1px 18px 9px -7px rgba(0,0,0,0.08);
-moz-box-shadow: -1px 18px 9px -7px rgba(0,0,0,0.08);
    
    }

   
`