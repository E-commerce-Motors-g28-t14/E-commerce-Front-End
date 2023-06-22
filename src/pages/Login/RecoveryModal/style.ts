import styled from "styled-components";

export const StyledModal = styled.div`
  position: absolute;
  top: -15%;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  z-index: 2;
  display: flex;
  background-color: rgba(255, 255, 255, 0.7);

  form {
    display: flex;
    gap: 20px;
    flex-direction: column;
    width: 411px;
    align-items: center;
    justify-content: left;
    background-color: var(--color-white-fixed);
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);

    label {
      font-size: 24px;
    }
    input {
      width: 100%;
      height: 40px;
      border: none;
      border-radius: 4px;
      background-color: var(--color-grey-8);
      padding: 10px;
    }
  }
`;
