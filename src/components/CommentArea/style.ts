import styled from "styled-components";

export const ContainerCommentArea = styled.div`
  height: 400px;
  width: 100%;
  left: 1px;
  top: 1469px;
  padding: 2em;
  border-radius: 4px;
  background-color: var(--color-white-fixed);
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: column;
  justify-content: center;

  .container-username {
    display: flex;
    width: 100%;
    align-items: flex-start;
    margin-top: 1em;
    margin-bottom: 1em;
  }

  .container-input-comment {
    height: 16rem;
    width: 100%;
    left: 44px;
    top: 83px;
    border-radius: 4px;
    border: 1px solid var(--color-grey-7);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .container-input-comment textarea {
    width: 100%;
    border: none;
    margin-top: 1em;
    resize: none;
    height: 80%;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    color: var(--color-grey-3);
    overflow-y: auto;
  }

  .container-input-comment textarea:focus {
    outline: none;
  }

  textarea::-webkit-scrollbar {
    width: 0.4em;
  }

  textarea::-webkit-scrollbar-track {
    background-color: var(--color-grey-8);
  }

  textarea::-webkit-scrollbar-thumb {
    background-color: var(--color-grey-5);
    border-radius: 20px;
  }

  .container-btn-comment-send {
    display: flex;
    width: 100%;
    align-items: flex-end;
    justify-content: flex-end;
    margin: 2em 2em 0em 0em;
  }

  .container-btn-comment-send-mobile {
    display: flex;
    width: 100%;
    -webkit-box-pack: end;
    justify-content: flex-start;

    margin: 2em 2em 0em 2em;
  }

  .container-btn-comment-send > button,
  .container-btn-comment-send-mobile > button {
    height: 38px;
    width: 108px;
    /* left: 597px;
    top: 160px; */
    border-radius: 4px;
    /* padding: 12px 20px 12px 20px; */
    border: none;
    margin-bottom: 10px;
    background-color: var(--color-brand-1);
    color: var(--color-white-fixed);
  }

  .container-comment-btn {
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 10px;
    margin-top: 1em;
    @media (max-width: 1080px) {
      flex-wrap: wrap;
    }
  }

  .comment-btn {
    height: 24px;
    top: 0px;
    border-radius: 24px;
    padding: 0px 12px 0px 12px;
    border: none;
    background-color: var(--color-grey-7);
    font-size: 12px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--color-grey-3);
  }

  .comment-btn:hover {
    background-color: var(--color-grey-8);
    transform: scale(1.01);
  }
`;
