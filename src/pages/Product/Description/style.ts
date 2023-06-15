import styled from "styled-components";

export const StyledCoverDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  border-radius: 4px;
  background-color: var(--color-white-fixed);
  padding: 2em;
  color: var(--color-grey-0);

  > h2 {
    align-items: center;
    color: var(--color-grey-0);
    font-size: 20px;
    margin-bottom: 1em;
     margin-top: 1em;
  }

  p {
    font-family: "Inter", sans-serif;
    font-size: 16px;
    margin-bottom: 1em;
  }
`;
