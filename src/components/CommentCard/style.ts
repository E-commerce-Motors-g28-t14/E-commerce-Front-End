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

  .header-comment-card{
    display: flex;
    flex-direction: row;  
    justify-content: space-between;
    width: 100%;  

    > div:nth-child(1) {
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        width: 100%;       
        height: clamp(32px, 50%, 100px); }

        .container-btns{        
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 1em;
        }



       .btn-edit-delete, .btn-save-cancel{
        border: none;
        display: flex;
        background-color: transparent;
        color: var(--color-grey-4);
        cursor:pointer;
       }

       .btn-save-cancel{
        font-size: 10px;
       }

       .btn-edit-delete:hover, .btn-save-cancel{
        color: var(--color-grey-3);
        transform: scale(1.1);
       }
    
  }

 

  ul {
    display: flex;
    flex-direction: column;
    width: 95%;
    gap: 44px;
    @media (max-width: 1080px) {
      gap: 20px;
    }  

    li {
      display: flex;
      flex-direction: column;    
      gap: 14px;
      width: 100%;        
      

      > div:nth-child(2) {
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        width: 100%;     
        height: clamp(32px, 50%, 100px);  

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

          @media (max-width: 250px) {
              margin-top: 3em;
              height: 100px;             
          }
         
      }

      > div:nth-child(3) > p {
        font-size: 16px;
        line-height: 28px;

        color: var(--color-grey-2);
      }
    }
  }

  .container-no-comment{
    display: flex;
    width: 100%;     
  }
  .container-no-comment h3{
    font-weight: 400;
  }

  input{
    width: 100%;
    border: 1px solid var(--color-grey-5);
    padding: 1em;
    outline: 1px solid var(--color-grey-5);
  
  }
`;
