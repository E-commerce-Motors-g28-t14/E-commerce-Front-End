import styled from "styled-components";

export const ListCarContainer = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  overflow-x: scroll;
  gap: 28px;
  margin-top: 2em;  

  ::-webkit-scrollbar {
    height: 0.6em;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--color-grey-8);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--color-grey-5);
    border-radius: 20px;
  }

  @media (min-width: 720px) {
    display: grid;
    grid-template-columns: repeat(1, 100%);
    gap: 0;
    row-gap: 8rem;
    overflow-x: hidden;
  }
  @media (max-width: 1050px) {
  grid-template-columns: repeat(2, 50%);
}

  @media (min-width: 1050px) {
    grid-template-columns: repeat(2, 50%);
  }

  @media (min-width: 1380px) {
    grid-template-columns: repeat(3, 33%);
  }

  .info-message{
  margin-top: 2em;
 font-size: var(--font-size-9);
 }
`

export const ListCar = styled.li`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  width: clamp(26rem, 100%, 30rem);
  height: 350px;
  gap: 1rem;
  justify-content: space-evenly;


 
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

  .info-car{   
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;  
  
  }

  .info-car-tags{
    display: flex;
    gap: 10px;
  }

    .tag-car-info{
        font-size: var(--font-size-8);
        font-weight: 500;
        line-height: 24px;
        color: var(--color-brand-1);
        background-color: var(--color-brand-4);
        padding: 4px 8px;
      }

    .tag-car-info.price{
      font-size: var(--font-size-7);
      line-height: 20px;
      font-weight: 500;
      color: var(--color-grey-1);
      background-color: transparent;
    }
  

  .isActive{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 24px;
    width: 51px;
    position: absolute;
    top: 0;
    left: 0;   
    margin-top: 1em;
    margin-left: 1em;   

    > span {
      font-size: 14px;
      font-weight: 500;

      color: var(--color-white-fixed);
    }
  }

  .btn-update-ad{
   display: flex;
   gap: 10px;
   flex-wrap: wrap;  
    
  }

  .btn-update-ad button{
    border: 2px solid var(--color-grey-1);
    color: var(--color-grey-1); 
    border-radius: 4px;
    height: 38px;
    padding: 12px 20px 12px 20px;
    display: flex;
    align-items: center;
    justify-content: center;  
    width: fit-content;  
    /* margin-top: 1em; */
   
  }  

  @media (max-width: 320px) {
    .btn-update-ad{
      flex-direction: column;
      width:100% ;
      margin-top: 2em;
    }

    .btn-update-ad button{    
      margin-bottom: 0;
      width: fit-content;
      margin-top: 0;
    }  

}

  @media (max-width: 400px) {
    height: 400px;
    background-color: red;
    justify-content: space-evenly;

    .tag-car-info.price{
      margin-bottom: 2em;
      height: 9.5%;
    }  

    .btn-update-ad button{
      margin-top: 1em;
    }

    
  }

  

 
`;