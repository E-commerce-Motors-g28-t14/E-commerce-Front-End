import styled from "styled-components";

export const CarPaginationStyled = styled.div`
    display: flex;
    align-items: center;
    width: fit-content;
    max-width: 100%;
    margin: 5rem 0;

    button{
        color: var(--color-brand-2);
        font-size: var(--font-size-7);
        font-weight: 600;
        background: none;
        border: none;
    }

    & > span{
        color: var(--color-grey-4);
        font-size: var(--font-size-7);
        font-weight: 600;
        margin: 0 2.25rem;

        span{
            color: var(--color-grey-3);
        }
    }

`