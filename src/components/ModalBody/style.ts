import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 4rem;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  background-color: #00000050;
  z-index: 1;

  main {
    width: clamp(30rem, 100%, 50rem);
    height: 200px;
    padding: 1.8rem 2.4rem;
    position: relative;
    background-color: #ffffff;
    border-radius: var(--radius-1);
  }

  button {
    width: 2.4rem;
    height: 2.4rem;
    border: none;
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
    background: transparent;
    color: var(--color-grey-4);
  }
`;
