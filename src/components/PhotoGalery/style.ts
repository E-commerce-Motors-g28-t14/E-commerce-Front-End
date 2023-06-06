import styled from "styled-components";

export const ContainerPhotoGalery = styled.div`

    height: 377px;
    width: 440px;
    left: 979px;
    top: 120px;
    border-radius: 4px;
    padding: 36px 44px 36px 44px;
    background-color: var(--color-white-fixed);

    h2{      
   
    font-size: 20px;
    font-weight: 600;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    color:var(--color-grey-1)
    }

    .container-geral-photos{
    display: flex;
    width: 100%;
    gap: 1em;       
    list-style: none;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    }

    .container-photos{
    background-color:var(--color-grey-7);
    height: 108px;
    width: 108px;
    left: 0px;
    top: 0px;
    border-radius: 4px;
    padding: 27px 7px 27px 7px;
    margin-top: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    }

    .image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    }

    .image-wrapper img {
    max-width: 100%;
    max-height: 100%;
    }



`
 