import styled from "styled-components";

export const AnnounceConfirmStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5rem;

    h3{
        font-size: var(--font-size-7);
        font-weight: 500;
        color: var(--color-grey-1);
    }

    div{
        display: flex;
        flex-direction: column;
        gap: 2rem;

        span{
            font-size: var(--font-size-7);
            font-weight: 400;
            color: var(--color-grey-2);
            line-height: 2.8rem;
        }
    }
`