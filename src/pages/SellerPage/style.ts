import styled from "styled-components";

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
      flex-wrap: wrap;
      align-items: center;
      background: linear-gradient(
        180deg,
        #4529e6 21.25%,
        #f1f3f5 0.26%,
        #f1f3f5 100%
      )};
       @media (max-width: 400px) {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      background: linear-gradient(
        180deg,
        #4529e6 21.25%,
        #f1f3f5 0.26%,
        #f1f3f5 100%
      );
    }


  
  
  `


export const ContainerPageSeller = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
justify-content: space-between;
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
`