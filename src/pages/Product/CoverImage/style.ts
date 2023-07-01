import styled from "styled-components";

export const StyledCoverImage = styled.div`
  display: flex;
  width: 100%; 
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: var(--color-white-fixed);
  padding: 10px;

  > img {
    max-width: 441px;
    width: 100%;
  }
`;
