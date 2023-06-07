import styled from "styled-components";

interface iInputStyledProps{
    width: string
}

export const InputStyled = styled.div<iInputStyledProps>`
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
        display: flex;
        flex-direction: column;
        gap: 0.1rem;

            input{
                font-size: var(--font-size-8);
                font-weight: 400;
                border-radius: var(--radius-1);
                border: 0.0938rem solid var(--color-grey-7);
                width: 100%;
                padding: 1rem;
            }

            span{
                font-size: var(--font-size-9);
                color: var(--color-alert-1);
                font-weight: 500;
            }

            input::placeholder{
                color: var(--color-grey-3);
            }

            input:hover{
                background-color: var(--color-grey-8);
            }

            input:focus{
                background-color: var(--color-grey-9);
                border: 0.0938rem solid var(--color-grey-1);
                outline: none;
            }
        }
`