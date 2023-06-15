import { useEffect, useState } from "react";
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
        <button onClick={() => toggleModal()} className="close">
          X
        </button>
        {children}
      </main>
    </StyledDiv>
  );
};
