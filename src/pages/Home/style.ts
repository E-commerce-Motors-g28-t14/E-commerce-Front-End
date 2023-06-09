import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    width: 100%;
    gap: 10px;
    justify-content: center;

    > nav {
      max-width: 454px;
      width: 100%;
      align-items: flex-start;
      padding-left: 19px;

      > ul {
        margin-top: 20px;
        padding-left: 11px;
        padding-top: 19px;
        display: flex;
        flex-direction: column;

        > li {
          padding-left: 21px;
          padding-top: 11px;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
      }
    }

    > ul {
      display: flex;
      flex-wrap: wrap;
      margin-top: 20px;
      gap: 10px;
    }
  }
`;
