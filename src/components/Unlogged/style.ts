import styled from "styled-components";

export const UnloggedStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 3.5rem;
    height: 100%;
    max-width: 100%;

    div{
        border-left: 2px solid var(--color-grey-6);
        height: 100%;
    }

    button:nth-child(2){
        font-size: var(--font-size-7);
        font-weight: 600;
        color: var(--color-brand-1);
        border: none;
        background: none;
    }

    button:nth-child(3){
        font-size: var(--font-size-7);
        font-weight: 600;
        color: var(--color-grey-0);
        border: 0.16rem solid var(--color-grey-4);
        border-radius: var(--radius-1);
        padding: 1.2rem 2.8rem;
        background-color: white;
    }

    button:nth-child(3):hover{
        color: var(--color-grey-10);
        background-color: var(--color-grey-1);
        border: 0.16rem solid var(--color-grey-1);
    }
`