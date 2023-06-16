import styled from "styled-components";

export const StyledContainerComments = styled.section`
  display: flex;
  flex-direction: column;
  align-content: flex-start; 
  align-items: flex-start;

  max-width: 751px;
  width: 100%;
  padding: 2em;
  border-radius: 4px;
  height: clamp(560px, 100%, 845px);
  gap: 10px;
  text-align: left; 
  background-color: var(--color-white-fixed);

  .container-comment-title{
    display: flex;
    width: 100%;
    align-content: flex-start; 
    align-items: flex-start;
  }

  .comment-title {    
    align-items: left;
    font-size: 20px;
    align-content: center;
    text-align: left;
    color: var(--color-grey-1); 
  }

  ul {
    display: flex;
    flex-direction: column;

    gap: 44px;

    @media (max-width: 1080px) {
      gap: 20px;
    }

    > h2 {      
      font-size: 20px;
      line-height: 25px;
      color: var(--color-grey-1);    
      text-align: left;
    }

    li {
      display: flex;
      flex-direction: column;    
      gap: 14px;
      width: 100%;
      

      > div:nth-child(1) {
        display: flex;
        align-items: center;

        width: 100%;
        height: 32px;

        > div > h2 {
          font-size: 14px;
          font-weight: 500;
          line-height: 24px;

          color: var(--color-grey-1);
        }

        > svg {
          color: var(--color-grey-3);

          margin-left: 8px;
        }

        > div > span {
          font-size: 12px;
          font-weight: 400;
          line-height: 24px;

          color: var(--color-grey-3);

          margin-left: 12px;
        }
      }

      > div:nth-child(2) > p {
        font-size: 16px;
        line-height: 28px;

        color: var(--color-grey-2);
      }
    }
  }
`;
