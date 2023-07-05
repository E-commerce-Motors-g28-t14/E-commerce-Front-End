import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 4rem 1.2rem 0 1.2rem;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  background-color: #00000050;
  z-index: 1;

  > main {
    width: clamp(30rem, 100%, 50rem);
    height: max-content;
    max-height: 90vh;
    padding: 1.8rem 2.4rem;
    position: relative;
    background-color: #ffffff;
    border-radius: var(--radius-1);
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
`;
