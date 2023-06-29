import { UserContext } from '../../contexts/userContext';
import InitialsName from "../InicialsName/InicialsName";
import Name from "../Name/Name";
import { ContainerCommentArea } from "./style";
import { useContext, useEffect, useState } from "react";

const CommentArea = () => {
  const [commentText, setCommentText] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [isSend, setIsSend] = useState(false);
  const { createComment } = useContext(UserContext)

  useEffect(() => {

    (async() => {
      isSend ? createComment(inputValue) : null;
      setIsSend(false)
    })()

  }, [])

  const handleCommentButtonClick = () => {
    setInputValue(commentText);
  };
  
  const handleCommentBtnClick = async (text: string) => {
    setCommentText((prevCommentText) => prevCommentText + text);
    setIsSend(true)
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
        )
      }

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
