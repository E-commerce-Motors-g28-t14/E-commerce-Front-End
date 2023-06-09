import styled from "styled-components";

export const StyledMain = styled.main`

  max-width: 1600px;
  margin: 0 auto;

  > .container-section {
    display: flex;

    width: 100%;
    padding: 80px 20px;
  }

  .big{
    display: none;
  }

  @media(max-width: 1080px){

    > .container-section{
      display: flex;
      flex-direction: column;
    }

    .big {
      display: block;

      margin-top: 80px;
    }

  }
`;
