import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 4rem 1.2rem 0 1.2rem;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  background-color: #00000050;
  z-index: 1;

  > main {
    width: clamp(30rem, 100%, 50rem);
    height: 150px;
    padding: 1.8rem 2.4rem;
    position: relative;
    background-color: #ffffff;
    border-radius: var(--radius-1);
    display: flex;
    flex-direction: column;
  }

  .container-info-cancel {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: space-between;
  }

  h4 {
    font-size: 14px;
    font-weight: 600;
  }

  p {
    font-size: 12px;
  }
  button.close {
    width: 2.4rem;
    height: 2.4rem;
    padding: 0;
    font-size: var(--font-size-5);
    border: none;
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
    background: transparent;
    color: var(--color-grey-4);
    z-index: 1;
  }

  .container-btn-cancel {
    width: 100%;
    display: flex;
    flex-direction: row;

    border-radius: var(--radius-2);
    gap: 10px;
    justify-content: flex-end;
  }

  .alert {
    min-height: 3.8rem;
    padding: 0 2rem;
    background-color: var(--color-alert-3);
    color: var(--color-alert-1);
    border: var(--border-size-2) solid var(--color-alert-3);
    &:hover {
      border: var(--border-size-2) solid var(--color-alert-2);
      background-color: var(--color-alert-2);
    }
  }

  .disable {
    min-height: 3.8rem;
    padding: 0 2rem;
    border: var(--border-size-2) solid var(--color-grey-6);
    color: var(--color-grey-2);
    background-color: var(--color-grey-6);

    &:hover {
      background-color: var(--color-grey-5);
      border: var(--border-size-2) solid var(--color-grey-5);
    }
  }
`;
