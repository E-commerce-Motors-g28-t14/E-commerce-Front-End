import { CarsContext } from "../../contexts/carsContext";
import { CommentContext } from "../../contexts/commentsContext";
import { UserContext, ICommentRequest } from "../../contexts/userContext";
// import { ICommentRequest } from '../../interfaces/userIterface';
import InitialsName from "../InicialsName/InicialsName";
import Name from "../Name/Name";
import { ContainerCommentArea } from "./style";
import { useContext, useEffect, useState } from "react";

const CommentArea = () => {
  const [commentText, setCommentText] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const { createComment } = useContext(CommentContext);
  const { selectCar } = useContext(CarsContext);

  const handleCommentButtonClick = async () => {
    setInputValue(commentText);

    const infosToCreateComment: ICommentRequest = {
      car: selectCar.id,
      comment: commentText,
    };

    createComment(infosToCreateComment, selectCar.id);
  };

  const handleCommentBtnClick = (text: string) => {
    setCommentText((prevCommentText) => prevCommentText + text);
    // setIsSend(true);
  };

  useEffect(() => {
    const checkIsMobile = () => {
      const mobileWidth = 1081;
      setIsMobile(window.innerWidth < mobileWidth);
    };

    window.addEventListener("resize", checkIsMobile);
    checkIsMobile();

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <ContainerCommentArea>
      <div className="container-username">
        <InitialsName
          width={"32"}
          height={"32"}
          name={"Maria Batista"}
          fontSize={"14px"}
          color={1}
        />
        <Name fontSize={"14px"} name={"Maria Batista"} />
      </div>

      {isMobile ? (
        <>
          <div className="container-input-comment">
            <textarea
              value={commentText}
              onChange={(event) => setCommentText(event.target.value)}
            ></textarea>
          </div>
          <div className="container-btn-comment-send-mobile">
            <button
              className="btn-comment-send"
              onClick={handleCommentButtonClick}
            >
              Comentar
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="container-input-comment">
            <textarea
              value={commentText}
              onChange={(event) => setCommentText(event.target.value)}
              maxLength={250}
            ></textarea>
            <div className="container-btn-comment-send">
              <button
                className="btn-comment-send"
                onClick={handleCommentButtonClick}
              >
                Comentar
              </button>
            </div>
          </div>
        </>
      )}

      <div className="container-comment-btn">
        <button
          className="comment-btn"
          onClick={() => handleCommentBtnClick("Gostei Muito!")}
        >
          Gostei Muito!
        </button>
        <button
          className="comment-btn"
          onClick={() => handleCommentBtnClick("Incrível")}
        >
          Incrível
        </button>
        <button
          className="comment-btn"
          onClick={() =>
            handleCommentBtnClick("Recomendarei para meus amigos!")
          }
        >
          Recomendarei para meus amigos!
        </button>
      </div>
    </ContainerCommentArea>
  );
};

export default CommentArea;
