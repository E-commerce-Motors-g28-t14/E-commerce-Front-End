import styled from "styled-components";

export const ContainerCommentArea = styled.div`

        height: 289px;
        width: 751px;
        left: 1px;
        top: 1469px;
        border-radius: 4px;       
        background-color: var(--color-white-fixed);
        display: flex;
        align-items: center;
        align-content: center;
        flex-direction: column;
        justify-content: center;

    .container-username{
        display: flex;
        width: 89.41%;
        align-items: flex-start;
        margin-top: 1em;
        margin-bottom: 1em;
    }

    .container-input-comment{
        height: 44.29%;
        width: 89.41%;
        left: 44px;
        top: 83px;
        border-radius: 4px;
        border: 1px solid var(--color-grey-7);   
        display    : flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

    }

    .container-input-comment textarea{
        width: 90%;
        border: none;
        margin-top: 1em;
        resize: none;
        height: 80%;
        padding-left: 10px;
        padding-top: 10px;
        color: var(--color-grey-3); 
    }

    .container-btn-comment-send{
        display: flex;
        width: 90%;
        align-items: flex-end;
        justify-content: flex-end;
    }

    .container-btn-comment-send  button {
        height: 38px;
        width: 108px;
        left: 597px;
        top: 160px;
        border-radius: 4px;
        padding: 12px 20px 12px 20px;
        border: none;
        margin-bottom: 10px;
        background-color: var(--color-brand-1);
        color: var(--color-white-fixed);

    }

    .container-comment-btn{
        display: flex;
        width: 89.41%;
        flex-direction: row;
        gap: 10px;
        margin-top: 1em;
    }

    .comment-btn{
    height: 24px;    
    top: 0px;
    border-radius: 24px;
    padding: 0px 12px 0px 12px;
    border: none;
    background-color:var(--color-grey-7);   
    font-size: 12px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--color-grey-3); ;
    }

    .comment-btn:hover{
    background-color:var(--color-grey-8);
    transform: scale(1.01);
    }
`