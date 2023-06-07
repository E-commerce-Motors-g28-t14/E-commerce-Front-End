import InitialsName from "../InicialsName/InicialsName";
import Name from "../Name/Name";
import { ContainerCommentArea } from "./style";
import { useState } from "react";

const CommentArea = () => {
  const [commentText, setCommentText] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleCommentButtonClick = () => {
    setInputValue(commentText);
  };

  const handleCommentBtnClick = (text: string) => {
    setCommentText((prevCommentText) => prevCommentText + text);
  };

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
