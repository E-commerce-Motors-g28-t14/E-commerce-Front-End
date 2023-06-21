import styled from "styled-components";

export const ContainerPageSeller = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
justify-content: space-between;

`

export const MainContainer = styled.div`
    display: flex;
    padding: 20px;
    gap: 20px;
    height: 100%;
    align-items: center;
    background: linear-gradient(
      180deg,
      #4529e6 31.25%,
      #f1f3f5 31.26%,
      #f1f3f5 100%
    );
    justify-content: center;
    flex-direction: column;

    @media (max-width: 1080px) {
      display: flex;
      /* flex-wrap: wrap; */
      align-items: center;
      background: linear-gradient(
        180deg,
        #4529e6 21.25%,
        #f1f3f5 0.26%,
        #f1f3f5 100%
      )};
       @media (max-width: 400px) {
      display: flex;
      /* flex-wrap: wrap; */
      align-items: center;
      background: linear-gradient(
        180deg,
        #4529e6 21.25%,
        #f1f3f5 0.26%,
        #f1f3f5 100%
      );
    }

  .container-seller-car{  
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

    @media screen and (max-width: 320px) { 
      height: 397px;
      width: 90%;      
      }  
    
  }

    .container-data-seller{   
    width  : 95%; 
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    
    @media screen and (max-width: 400px) { 
    width  : 80%;     
    }
  }

  .container-seller-Name{
    margin-top: 2em;
    display: flex;
    flex-direction: row;
    gap: 1em;
    flex-wrap: wrap;
  } 


  .tag-seller{
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
    text-align: left;}

p{   
    font-size: 1rem;
    font-weight: 400;
    line-height: 2rem;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 1em;

}  
  
  `


export const SectionSellerPage = styled.section`

display: flex;
margin-top: 2em;
flex-direction: column;
align-items: flex-start;
width: 95%;

h2{
 
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;

 
}


.container-lista-car-seller{
  width: 100%;
  height: 90%; 
}

ul{
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

 
}

.info-message{
  margin-top: 2em;
 font-size: var(--font-size-9);
 }


li{
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
    align-items: flex-start;
  

    .info-car-tags{
    display: flex;
    gap: 10px;
    height: 32px;
    width: fit-content;
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

    @media (max-width: 400px) {
    height: 400px;  
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: flex-start; 


    .tag-car-info.price{
      margin-bottom: 2em;
      height: 9.5%;
    }  

    
  }
  }

  

    
 



 

}
`