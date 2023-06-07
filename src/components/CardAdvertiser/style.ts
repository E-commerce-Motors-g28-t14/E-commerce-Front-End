import styled from 'styled-components'

export const ContainerCardAdvertiser = styled.div`

    width: clamp(350px, 100%, 440px);
    height: 398px;
    max-height: 426px;
    padding: 36px 44px;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    background-color: var(--color-grey-10);
    border-radius: var(--radius-2);

    .container-description{
        span{
            font-size: var(--font-size-9);
            color: var(--color-grey-2);
            line-height: 28px;
            flex-grow: 1;
        }
    }

    div{
        flex-grow: 1;
        max-height: 104px;

        h2{
            flex-grow: 1;
            text-align: center;
        }

    }

    .container-name{
        display: flex;
        align-items: center;
        margin-top: -1rem;
    }

`