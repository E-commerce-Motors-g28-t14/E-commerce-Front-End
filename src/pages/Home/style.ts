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

    > ul {
      display: flex;
      flex-wrap: wrap;
      margin-top: 20px;
      gap: 10px;
    }
  }
`;
