import styled from "styled-components";

export const StyledContainerComments = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 751px;
  width: 100%;
  height: clamp(560px, 100%, 845px);
  margin: 0 auto;
  gap: 10px;
  text-align: left;
  align-content: center;
  align-items: flex-start;

  > h2 {
    margin-bottom: 26px;
    align-items: center;
    align-content: center;
  }

  ul {
    display: flex;
    flex-direction: column;

    gap: 44px;

    @media (max-width: 768px) {
      gap: 20px;
    }

    > h2 {
      font-family: "Lexend", sans-serif;
      font-size: 20px;
      line-height: 25px;

      color: var(--color-grey-1);

      margin-bottom: 500px;
    }

    li {
      display: flex;
      flex-direction: column;
      background-color: var(--color-white-fixed);
      padding: 20px;
      width: 100%;
      border-radius: 4px;

      > div:nth-child(1) {
        display: flex;
        align-items: center;

        width: 100%;
        height: 32px;

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
`;
