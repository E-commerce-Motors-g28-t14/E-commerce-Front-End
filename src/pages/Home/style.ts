import styled from "styled-components";

export const StyledMain = styled.main`
  max-width: 1600px;
  margin: 0 auto;
  padding: 80px 20px;

  > .container-section {
    display: flex;
    flex-direction: column;
    
  }

  .big {
    display: block;

    margin-top: 80px;
  }

  @media (min-width: 720px) {
    > .container-section {
      flex-direction: row;
      gap: 1.2rem;

      width: 100%;
      padding: 80px 20px;
    }

    .big {
      display: none;
    }
  }
`;
