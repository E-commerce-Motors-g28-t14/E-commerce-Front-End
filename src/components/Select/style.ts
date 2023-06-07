import styled from "styled-components";

interface iSelectStyledProps{
    width: string
}

export const SelectStyled = styled.div<iSelectStyledProps>`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    
    width: ${({ width }) => width};
    max-width: 100%;

    label{
        font-size: var(--font-size-9);
        font-weight: 500;
        color: var(--color-grey-1);
    }

    div{
        position: relative;

        img{
            position: absolute;
            top: 45%;
            right: 4%;
            width: 0.6875rem;
            pointer-events: none;
        }

        select{
            font-size: var(--font-size-8);
            font-weight: 400;
            border-radius: var(--radius-1);
            border: 0.0938rem solid var(--color-grey-7);
            width: 100%;
            padding: 1rem;
            appearance: none;
        }

        select:hover{
            background-color: var(--color-grey-8);
        }

        select:focus{
            background-color: var(--color-grey-9);
            border: 0.0938rem solid var(--color-grey-1);
            outline: none;
        }
    }
`