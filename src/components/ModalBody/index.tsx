import { useEffect, useRef } from "react";
import { StyledDiv } from "./style";

interface IModalBody {
  children: React.ReactNode;
  close: () => void;
}

export const ModalBody = ({ children, close }: IModalBody) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleOutclick = (event: any) => {
      if (!ref.current?.contains(event.target)) {
        close();
      }
    };

    window.addEventListener("mousedown", handleOutclick);

    return () => {
      window.removeEventListener("mousedown", handleOutclick);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
