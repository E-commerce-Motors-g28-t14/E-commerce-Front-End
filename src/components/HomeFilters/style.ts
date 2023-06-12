import styled from "styled-components";

export const HomeFiltersStyled = styled.nav`
    width: 28.375rem;
    max-width: 30%;
    align-items: flex-start;

    ul{
        display: flex;
        flex-direction: column;
        margin-top: 1.25rem;
        gap: 1.5rem;
        max-width: 100%;

        h2{
            font-size: var(--font-size-6);
            font-weight: 600;
            color: #000000;
            font-family: 'Lexend', sans-serif;
        }

        li{
            display: flex;
            flex-direction: column;
            padding-left: 1.25rem;
            gap: 0.5rem;
            max-width: 100%;

            a{
                font-size: var(--font-size-8);
                font-weight: 500;
                color: var(--color-grey-3);
                font-family: 'Lexend', sans-serif;
            }
        }

        div{
            display: flex;
            align-items: center;
            max-width: 100%;
            margin-top: 0.5rem;
            gap: 1.25rem;

            input{
                font-size: var(--font-size-9);
                font-weight: 600;
                font-family: 'Lexend', sans-serif;
                color: var(--color-grey-2);
                text-align: center;
                width: 9.875rem;
                max-width: 100%;
                padding: 1rem;
                border: none;
                background-color: var(--color-grey-5);
            }

            input:focus{
                outline: none;
            }

            input::placeholder{
                color: var(--color-grey-3);
            }
        }
    }
`