import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  background: var(--color-grey-8);
  div {
    background-color: var(--color-white-fixed);
    display: flex;
    align-items: center;
    align-content: center;
    flex-direction: column;
    max-width: 411px;
    width: 100%;
    height: 100%;
    padding: 44px;
    margin-bottom: 50px;
    margin-top: 50px;
    border-radius: 4px;

    @media (max-width: 320px) {
      max-width: 320px;
      width: 95%;
    }

    form {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      width: 100%;
      gap: 10px;

      h2 {
        font-size: 24px;
        font-weight: 500;
        line-height: 30px;
        font-style: normal;
        font-family: lexend;
        color: var(--color-grey-0);
      }

      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
      }

      label {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: var(--color-grey-1);
      }

      input {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px 16px;
        gap: 10px;
        border: 1.5px solid #e9ecef;
        border-radius: 4px;
        height: 48px;
        width: 100%;
      }

      textarea {
        resize: none;
        padding: 8px 16px 0 16px;
        gap: 10px;
        border: 1.5px solid #e9ecef;
        border-radius: 4px;
        height: 8rem;
        width: 100%;
      }

      .btn--final {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 12px 28px;
        border-radius: 4px;
        width: 100%;
        gap: 10px;
        box-sizing: border-box;
        color: var(--color-white-fixed);
        border: 1.5px solid var(--color-brand-1);
        background: var(--color-brand-1);
      }
      .container {
        display: flex;
        padding: 0;
        margin-top: 0;
        margin: 0 auto;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        gap: 5px;
        box-sizing: border-box;

        > label {
          > input {
            width: 100%;
          }
        }

        button {
          width: 50%;
        }
      }

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 12px 28px;
        border-radius: 4px;
        width: 100%;
        gap: 10px;
        box-sizing: border-box;
        color: var(--color-white-fixed);
        border: 1.5px solid var(--color-brand-1);
        background: var(--color-brand-1);
        @media (max-width: 400px) {
          padding: 10px 18px;
          font-size: 100%;
        }
      }

      .button--anounciment {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 12px 28px;
        border-radius: 4px;
        width: 100%;
        gap: 10px;
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        box-sizing: border-box;
        color: var(--color-grey-0);
        border: 1.5px solid var(--color-grey-4);
        background: var(--color-grey-8);

        @media (max-width: 400px) {
          padding: 10px 18px;
          font-size: 100%;
        }
      }
    }
  }
`;
