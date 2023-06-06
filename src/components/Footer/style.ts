import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  width: 100%;
  height: 140px;
  background-color: var(--color-grey-0);
  color: var(--color-white-fixed);
  align-items: center;
  justify-content: space-between;
  align-content: center;
  box-sizing: border-box;
  padding: 45px 59px;
  img {
    height: 26.34px;
  }

  p {
    a {
      color: var(--color-white-fixed);
    }
  }

  .scrool {
    align-items: center;
    justify-content: center;
    display: flex;
    width: 53px;
    height: 53px;
    background-color: var(--color-grey-1);
    border-radius: 4px;
    cursor: pointer;
    :hover {
      background-color: var(--color-grey-2);
    }

    p {
      font-size: 16px;
      font-weight: 600;
      line-height: 18.4px;
      font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    }
  }

  @media (max-width: 520px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 310.34px;
    gap: 60px;
    padding: 45px 59px;
    img {
      height: 20px;
    }
  }
`;
