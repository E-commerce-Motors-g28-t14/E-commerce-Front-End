import { useEffect, useRef, useState } from "react";
import { useModalHook } from "../../hooks";
import { StyledDiv } from "./style";

interface IModalBody {
  children: React.ReactNode;
  close: () => void;
}

export const ModalBody = ({ children, close }: IModalBody) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleKeydown = (event: any) => {
      if (event.key === "Escape") {
        close();
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  useEffect(() => {
    const handleOutclick = (event: any) => {
      if (!ref.current?.contains(event.target)) {
        close();
      }
    };

    window.addEventListener("mousedown", handleOutclick);

    return () => {
      window.removeEventListener("mousedown", handleOutclick);
    };
  }, []);

  return (
    <StyledDiv>
      <main ref={ref}>
        <button onClick={close} className="close">
          X
        </button>
        {children}
      </main>
    </StyledDiv>
  );
};
