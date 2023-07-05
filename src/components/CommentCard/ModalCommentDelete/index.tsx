import { useEffect, useRef, useState } from "react";
import { useModalHook } from "../../hooks";
import { StyledDiv } from "./style";



export const ModalCommentDelete = () => {
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
       <div>
        <p>Tem certeza que deseja cancelar o comentario</p>
       </div>
      </main>
    </StyledDiv>
  );
};
