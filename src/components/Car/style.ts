import styled from "styled-components";

export const StyleLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 312px;
  height: 350px;
  width: 100%;
  .div-car__img {
    max-width: 312px;
    display: flex;
    justify-content: center;
    background-color: var(--color-grey-5);

    > img {
      width: 262px;
    }
  }

  > .div-car__container {
    gap: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;

    span {
      display: flex;
      width: 100%;
      gap: 10px;
      justify-content: space-between;
      p {
        align-items: center;
        align-content: center;
        background-color: var(--color-brand-4);
        color: var(--color-brand-1);
        width: 60px;
        padding: 8px;
        font-family: inter;
        font-size: 14px;
        font-weight: 500px;
      }
    }
  }
`;
