import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  padding: 20px;
  gap: 20px;
  background: linear-gradient(
    180deg,
    #4529e6 31.25%,
    #f1f3f5 31.26%,
    #f1f3f5 100%
  );
  justify-content: center;

  @media (max-width: 1080px) {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    background: linear-gradient(
      180deg,
      #4529e6 21.25%,
      #f1f3f5 0.26%,
      #f1f3f5 100%
    );
  }

  section {
    display: flex;
    max-width: 752px;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    @media (max-width: 1080px) {
      max-width: none;
      width: 100%;
      display: flex;
      align-items: flex-start;
    }
  }

  aside {
    max-width: 440px;
    gap: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: 1080px) {
      max-width: none;
      width: 100%;
      gap: 20px;
      display: flex;

    }
  }
`;

export const StyledModalDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4.8rem;

  figure {
    width: 100%;
    height: 24rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-2);
    background-color: var(--color-grey-7);

    img {
      width: max-content;
      height: 50%;
    }
  }
`;
