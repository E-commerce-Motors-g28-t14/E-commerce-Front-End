import { StyledDiv } from "./style";

interface IModalBody {
  children: React.ReactNode;
}

export const ModalBody = ({ children }: IModalBody) => {
  return (
    <StyledDiv>
      <main>
        <button>X</button>
        {children}
      </main>
    </StyledDiv>
  );
};
