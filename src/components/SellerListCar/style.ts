import styled from "styled-components";

export const ListCarContainer = styled.ul`
 display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;  
  height: auto;
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


  @media (max-width: 721px){
     height : 440px;      
  }
 

  @media (min-width: 721px) {    
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

  @media (min-width: 1300px) {
    grid-template-columns: repeat(3, 33%);
  } 


  .info-message {
    margin-top: 2em;
    font-size: var(--font-size-9);
  }
`;

export const ListCar = styled.li`
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

    overflow: hidden;

    height: 152px;
    width: 100%;   
  

    background-color: var(--color-grey-7);

    > img {
      width: 100%;
      height: 100%;

      align-self: center;
      object-fit: cover;
    }

    @media (max-width: 720px) {
    
    width: 250px;

    > img{
     width: 100%;
     height: 100%;
     object-fit: cover;
    }
   
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

  .info-car {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 720px) {
          justify-content: space-between;
          flex-wrap: wrap;
          align-items: flex-start;
    }
  }

  .info-car-tags {
    display: flex;
    gap: 10px;

    @media (max-width: 720px){
      height: 40px;     
      width: 100%;
      flex-wrap: wrap;
      align-content: flex-start; 
      justify-content: flex-start;   
    }
  }

  .info-car-tags span{
        font-size: var(--font-size-8);
        font-weight: 500;
        line-height: 24px;

        width: max-content;
        height: 32px;

        color: var(--color-brand-1);
        background-color: var(--color-brand-4);

        padding: 4px 8px;       
        
        @media (max-width: 720px){                   
          flex-wrap: wrap;
          align-content: flex-start;    
    }
      
      }

      .tag-car-info.price{
      font-size: var(--font-size-7);     
      font-weight: 500;     
      color: var(--color-grey-1);
      background-color: transparent;
      width: max-content;

      @media (max-width: 720px) {
      margin-bottom:  1em;
      margin-top: 0.5em;   
   
    } 
  }

  .isActive {
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

  .btn-update-ad {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;

    button {
      width: max-content;
    }
  }
 
  @media (max-width: 400px) {  

.btn-update-ad {
  flex-direction: column;
  width: 100%;
  margin-top: 2em;
  gap: 0;
}

}

  @media (max-width: 720px) { 
    height: 440px;   
    justify-content: space-evenly; 

    .tag-car-info.price {
      margin-bottom: 2em;   
    }
   
    .btn-update-ad button {
      margin-top: 1em;   
      
    }
  }

 

`;
