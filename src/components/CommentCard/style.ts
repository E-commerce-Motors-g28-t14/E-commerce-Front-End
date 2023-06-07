import styled from 'styled-components'

export const StyledContainerComments = styled.section`
    width: clamp(280px, 100%, 660px);
    height: clamp(560px, 100%, 845px);
    margin: 0 auto;
    padding: 36px 44px;

    > h2 {
        margin-bottom: 26px;
    }

    ul{
        display: flex;
        flex-direction: column;

        gap: 44px;

        overflow-y: scroll;

        > h2 {
            font-family: 'Lexend', sans-serif;
            font-size: 20px;
            line-height: 25px;

            color: var(--color-grey-1);

            margin-bottom: 500px;
        }

        li {
            display: flex;
            flex-direction: column;
    
            width: 100%;
            height: clamp(116px, 100%, 212px);

           >  div:nth-child(1) {
                display: flex;
                align-items: center;

                width: 100%;
                height: 32px;
                margin-bottom: 12px;

                > div > h2 {
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 24px;

                    color: var(--color-grey-1);
                }

                > svg {
                    color: var(--color-grey-3);
                    
                    margin-left: 8px;
                }

                > div > span {
                    font-size: 12px;
                    font-weight: 400;
                    line-height: 24px;

                    color: var(--color-grey-3);

                    margin-left: 12px;
                }
            }

            > div:nth-child(2) > p {
                font-size: 16px;
                line-height: 28px;

                color: var(--color-grey-2);
            }
        }
    }
`