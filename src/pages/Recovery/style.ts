import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;
  min-height: 788px;
  height: 100%;
  align-items: center;
  background: linear-gradient(
    180deg,
    #4529e6 31.25%,
    #f1f3f5 31.26%,
    #f1f3f5 100%
  );
  justify-content: center;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: var(--color-white-fixed);
    padding: 20px;
    border-radius: 4px;
  }

  @media (max-width: 1080px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background: linear-gradient(
      180deg,
      #4529e6 21.25%,
      #f1f3f5 0.26%,
      #f1f3f5 100%
    );
  }
  @media (max-width: 400px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background: linear-gradient(
      180deg,
      #4529e6 21.25%,
      #f1f3f5 0.26%,
      #f1f3f5 100%
    );
  }
`;
