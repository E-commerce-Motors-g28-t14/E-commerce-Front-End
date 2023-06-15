import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  h3 {
    font-size: var(--font-size-7);
    font-weight: 500;
  }

  p {
    font-size: var(--font-size-8);
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

    .doubleInput {
      width: 100%;
      height: max-content;
      display: flex;
      justify-content: space-between;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    button {
      font-size: var(--font-size-7);
      font-weight: 500;
    }

    .photo {
      width: clamp(30rem, 100%, 32rem);
    }

    .buttons {
      width: 100%;
      height: max-content;
      display: flex;
      justify-content: flex-end;
      gap: 1rem;

      button:nth-child(1) {
        width: 12rem;
      }
      button:nth-child(2) {
        width: 19rem;
      }
    }
  }
`;
