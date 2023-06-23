import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 3.6rem;

  h3 {
    font-size: var(--font-size-7);
    font-weight: 500;
  }

  form {
    width: 100%;
    height: max-content;
    max-height: 75vh;
    padding-right: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    overflow-y: auto;
  }

  .teste {
    min-height: 50px;
  }

  .buttons {
    width: 100%;
    height: max-content;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 440px) {
      flex-direction: row;
    }
  }
`;
