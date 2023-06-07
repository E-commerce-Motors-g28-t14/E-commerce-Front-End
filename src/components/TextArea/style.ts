import styled from "styled-components";

interface iTextAreaStyledProps{
    width: string
}

export const TextAreaStyled = styled.div<iTextAreaStyledProps>`

    display: flex;
    flex-direction: column;
    gap: 1rem;
    
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

            textarea{
                font-size: var(--font-size-8);
                font-weight: 400;
                border-radius: var(--radius-1);
                border: 0.0938rem solid var(--color-grey-7);
                width: 100%;
                height: 5rem;
                padding: 1rem;
                resize: none;
            }

            span{
                font-size: var(--font-size-9);
                color: var(--color-alert-1);
                font-weight: 500;
            }

            textarea::placeholder{
                color: var(--color-grey-3);
            }

            textarea:hover{
                background-color: var(--color-grey-8);
            }

            textarea:focus{
                background-color: var(--color-grey-9);
                border: 0.0938rem solid var(--color-grey-1);
            }
        }

`