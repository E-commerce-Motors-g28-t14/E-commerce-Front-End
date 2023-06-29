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

  .doubleInput {
    width: 100%;
    display: flex;
    gap: 1rem;
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

export const InputStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  width: 100%;

  label {
    font-size: var(--font-size-9);
    font-weight: 500;
    color: var(--color-grey-1);
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;

    input {
      font-size: var(--font-size-8);
      font-weight: 400;
      border-radius: var(--radius-1);
      border: 0.0938rem solid var(--color-grey-7);
      width: 100%;
      padding: 1rem;
    }

    span {
      font-size: var(--font-size-9);
      color: var(--color-alert-1);
      font-weight: 500;
    }

    input::placeholder {
      color: var(--color-grey-3);
    }

    input:hover {
      background-color: var(--color-grey-8);
    }

    input:focus {
      background-color: var(--color-grey-9);
      border: 0.0938rem solid var(--color-grey-1);
      outline: none;
    }
  }
`;
