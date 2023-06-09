import styled from "styled-components";



export const ContainerBanner = styled.div`
    position: relative;
    width: 100%;
    height: 537.41px;
    overflow: hidden;
    z-index: 0;
    
    @media screen and (max-width: 400px) { 
      height: 625px;
    
    }
`;

export const ContainerText = styled.div`
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      transform: translate(-50%, -50%);
      text-align: center;
      color: var(--color-grey-7);
      z-index: 3;
      background: linear-gradient(180deg, rgba(15,9,50,0.13489145658263302) 0%, rgba(15,9,50,0.5802696078431373) 31%, rgba(6,3,19,1) 100%);
      
      h1{
        font-size: var(--font-size-4);
      }

      h2{
        font-size: var(--font-size-5);
      } 

`;



export const CarouselContainer = styled.div`
    width: 100%;
    height: 100%;

    .carousel-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%; 
      object-fit: cover;
    }

    .active {
      z-index: 2;
    }
`









