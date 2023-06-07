import styled from "styled-components";

export const StyledCoverDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  border-radius: 4px;
  background-color: var(--color-white-fixed);
  padding: 20px;
  color: var(--color-grey-0);

  > h2 {
    align-items: center;
    color: var(--color-grey-0);
    font-size: var(--font-size-5);
  }

  p {
    font-family: "Inter", sans-serif;
    font-size: var(--font-size-7);
  }
`;
