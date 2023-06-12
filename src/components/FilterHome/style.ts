import styled from 'styled-components'

export const StyledFilterHome = styled.div`

    display: flex;
    width: 100%;
    gap: 10px;    

    > .nav-filter {
        display: flex;
        align-items: flex-start;

        width: 100%;

        .list-filter {
            display: flex;
            flex-direction: column;

            margin-top: 20px;
            padding-left: 11px;
            padding-top: 19px;

            .infos-filter {
                display: flex;
                flex-direction: column;
                justify-content: start;

                width: 100%;
                padding: 11px 11px;
                gap: 8px;
            }

        }
    }
    a {
        font-style: none;
        font-size: var(--font-size-8);
        font-weight: 500;
        line-height: 25px;

        color: var(--color-grey-3);
    }
    @media(max-width: 1080px){
        display: none;
    }
`