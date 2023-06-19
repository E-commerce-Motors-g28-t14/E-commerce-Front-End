import styled from "styled-components";

export const ContainerSellerCard = styled.div`
  height: 327px;
  width: 90%;
  left: 180px;
  top: 155px;
  border-radius: 4px;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: var(--color-grey-10);
  border-radius: var(--radius-2);

  @media screen and (max-width: 500px) {
    height: 397px;
    width: 90%;
  }

  .container-data-seller {
    width: 95%;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;

    @media screen and (max-width: 400px) {
      width: 80%;
    }
  }

  .container-seller-Name {
    margin-top: 2em;
    display: flex;
    flex-direction: row;
    gap: 1em;
    flex-wrap: wrap;
  }

  .tag-seller {
    border: var(--border-size-2) solid var(--color-brand-4);
    color: var(--color-brand-1);
    background-color: var(--color-brand-4);
    height: 32px;
    width: 92px;
    left: 180px;
    top: 169px;
    border-radius: 4px;
    padding: 4px 8px 4px 8px;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 2rem;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 1em;
  }

  .btn-new-ad {
    /* color: var(--color-brand-1);
  border: 2px solid var(--color-brand-1);
  background-color: var(--color-white-fixed);
  border-radius: 4px;
  height: 48px;
  width: 146px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2em;
  margin-top: 2em;
  font-weight: 600; */

    width: max-content;
  }

  @media screen and (max-width: 320px) {
    height: 397px;
    width: 90%;
    .btn-new-ad {
      height: 3em;
      margin-top: 1em;
    }
  }
`;
