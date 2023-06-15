import styled from "styled-components";

export const ContainerCardCar = styled.div`
  height: 240px;
  width: 100%;
  left: 1px;
  top: 371px;
  border-radius: 4px;
  padding: 28px 44px 28px 44px;
  background-color: var(--color-white-fixed);
  display: flex;
  flex-direction: column;

  .container-car-name,
  .container-btn-buy,
  .container-car-info {
    display: flex;
    height: 44.29%;
    width: 89.41%;
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
    align-items: center;
  }

  .car-tag {
    flex-direction: row;
    display: flex;
    gap: 10px;
  }

  .car-tag span {
    height: 32px;
    width: 51px;
    left: 62px;
    top: 89.392578125px;
    border-radius: 4px;
    padding: 4px 8px 4px 8px;

    background-color: var(--color-brand-4);

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
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
