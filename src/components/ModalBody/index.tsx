import { useModalHook } from "../../hooks";
import { StyledDiv } from "./style";

interface IModalBody {
  children: React.ReactNode;
}

export const ModalBody = ({ children }: IModalBody) => {
  const { toggleModal } = useModalHook();

  return (
    <StyledDiv>
      <main>
        <button onClick={() => toggleModal()}>X</button>
        {children}
      </main>
    </StyledDiv>
  );
};
