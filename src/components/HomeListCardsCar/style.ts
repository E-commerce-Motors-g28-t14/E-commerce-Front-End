import styled from "styled-components";

export const StyledListCardsCar = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  overflow-x: scroll;
  gap: 28px;

  @media (min-width: 720px) {
    display: grid;
    grid-template-columns: repeat(1, 100%);
    gap: 0;
    align-items: flex-start;
    row-gap: 8rem;
    overflow-x: hidden;
  }

  @media (min-width: 1050px) {
    grid-template-columns: repeat(2, 50%);
  }

  @media (min-width: 1380px) {
    grid-template-columns: repeat(3, 33%);
  }
`;

export const StyledHomeCardCar = styled.li`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;

  width: clamp(26rem, 100%, 30rem);
  height: 350px;
  gap: 1rem;

  > div:first-child {
    display: flex;
    justify-content: center;

    height: 152px;
    width: 100%;
    padding: 0 25px;

    background-color: var(--color-grey-7);

    > img {
      width: 320px;
      height: 100%;

      align-self: center;
      object-fit: scale-down;
    }
  }

  > div:nth-child(0n + 2) {
    height: 32px;

    display: flex;
    align-items: center;
    gap: 0.5rem;
    display: flex;

    > span {
      font-size: 16px;
      font-weight: 600;
      line-height: 20px;
      color: var(--color-grey-1);
    }
  }

  > div:nth-child(0n + 3) {
    height: 48px;
    width: 100%;

    > p {
      text-overflow: ellipsis;
      overflow: hidden;

      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;

      font-size: 14px;
      font-weight: 400;
      line-height: 24px;

      color: var(--color-grey-2);
    }
  }

  > div:nth-child(0n + 4) {
    height: 32px;
    display: flex;
    align-items: center;

    > div:nth-child(0n + 2) > h2 {
      font-weight: 500;
    }
  }

  > div:nth-child(0n + 5) {
    height: 32px;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    > div:first-child {
      display: flex;
      justify-content: space-between;
      gap: 0.8rem;
      width: max-content;

      > span {
        font-size: var(--font-size-8);
        font-weight: 500;
        line-height: 24px;

        color: var(--color-brand-1);
        background-color: var(--color-brand-4);

        padding: 4px 8px;
      }
    }

    > div:nth-child(2) {
      font-size: var(--font-size-7);
      line-height: 20px;
      font-weight: 500;
      color: var(--color-grey-1);
    }
  }

  .promo {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 27px;
    width: 16px;

    position: absolute;
    top: 0;
    right: 0;

    border: 1px solid var(--color-random-7);
    border-radius: 2px;

    background-color: var(--color-random-7);

    > span {
      font-size: 14px;
      font-weight: 500;

      color: var(--color-white-fixed);
    }
  }
`;
