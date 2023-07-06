import { useContext } from "react";
import { StyledDiv } from "./style";
import { CommentContext } from "../../../contexts/commentsContext";

export const ModalCommentDelete = () => {
  const {
    setOpenModalCancel,
    deleteComment,
    deleteCommentId,
    setDeleteCommentId,
  } = useContext(CommentContext);

  const handleClose = () => {
    setOpenModalCancel(false);
  };

  const handleDelete = () => {
    deleteComment(deleteCommentId);
    setOpenModalCancel(false);
    setDeleteCommentId("");
  };

  return (
    <StyledDiv>
      <main>
        <button onClick={handleClose} className="close">
          X
        </button>
        <div className="container-info-cancel">
          <h4>Tem certeza que deseja remover este comentário?</h4>
          <p>
            Essa ação não pode ser desfeita. Isso excluirá permanentemente seu
            comentário.
          </p>
          <div className="container-btn-cancel">
            <button className="disable" onClick={handleClose}>
              Cancelar
            </button>
            <button className="alert" onClick={handleDelete}>
              Sim, quero excluir o comentário
            </button>
          </div>
        </div>
      </main>
    </StyledDiv>
  );
};
