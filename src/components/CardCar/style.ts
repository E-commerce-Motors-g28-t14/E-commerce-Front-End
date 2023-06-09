import styled from "styled-components";

export const ContainerCardCar = styled.div`
  min-height: 240px;
  width: 100%;
  left: 1px;
  top: 371px;
  border-radius: 4px;
  padding: 2em;
  background-color: var(--color-white-fixed);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .container-car-name,
  .container-btn-buy,
  .container-car-info {
    display: flex;
    height: 44.29%;
    width: 100%;
    justify-content: space-between;
  }

  .container-car-name h1 {
    font-size: 20px;
    font-weight: 600;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
  }

  .container-car-info ul {
    list-style: none;
    width: 100%;
  }

  .container-car-info ul li {
    flex-direction: row;
    display: flex;
    width: 100%;
    justify-content: space-between;

    @media (max-width: 1080px) {
      width: 100%;
      justify-content: flex-start;
      flex-direction: column;
      gap: 2rem;

      > div,
      h3 {
        width: 100%;
      }
    }
  }

  .container-btn-buy {
    align-items: flex-end;
  }
  .car-tag {
    flex-direction: row;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .car-tag span {
    height: 32px;
    width: max-content;

    border-radius: 4px;
    padding: 4px 8px 4px 8px;

    background-color: var(--color-brand-4);

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 14px;
    font-weight: 500;

    color: var(--color-brand-1);
  }

  .container-car-info h3 {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
  }
  .btn-buy {
    height: 38px;
    width: 100px;
    left: 44px;
    top: 173.392578125px;
    border-radius: 4px;
    padding: 12px 20px 12px 20px;
    border: none;
    background-color: var(--color-brand-1);
    color: var(--color-white-fixed);
  }
`;
