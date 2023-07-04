import InitialsName from "../InicialsName/InicialsName";
import Name from "../Name/Name";
import { StyledContainerComments } from "./style";
import { BsDot } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { CommentContext } from "../../contexts/commentsContext";
import { CarsContext } from "../../contexts/carsContext";

interface IMockClients {
  comment: string;
  username: string;
  color: number;
  createdAt: string;
  id: string;
}

export const CommentCard = (): JSX.Element => {
  const storedUserId = localStorage.getItem("@kmotors-g28:userId");
  const { selectCarID } = useContext(CarsContext);

  const {    
    getCommentByCarId,
    commentslist,
    newCommentValue,
    setNewCommentValue,
    selectedCommentId,
    setSelectedCommentId,
    updateComment,
    deleteComment,
  } = useContext(CommentContext)


  useEffect(() => {
   if(selectCarID  && selectCarID.length > 0){   
    getCommentByCarId(selectCarID)
   }
    
  }, [selectCarID, commentslist]);


  
    const relativeDate = (timestamp: string): string => {
    const msDateComment: Date = new Date(timestamp);
    const msDateNow: Date = new Date();
    const msDiff: number = msDateNow.getTime() - msDateComment.getTime();

    const seconds: number = Math.floor(msDiff / 1000);
    const minutes: number = Math.floor(seconds / 60);
    const hours: number = Math.floor(minutes / 60);
    const days: number = Math.floor(hours / 24);
    const months: number = Math.floor(days / 30);
    const years: number = Math.floor(months / 12);

    let commentedAt = "";

    years > 1
      ? (commentedAt = `há ${years} anos`)
      : months > 0 && months < 12
      ? (commentedAt = `há ${months} meses`)
      : days > 0
      ? (commentedAt = `há ${days} dias`)
      : hours > 0
      ? (commentedAt = `há ${hours} horas`)
      : minutes > 0
      ? (commentedAt = `há ${minutes} minutos`)
      : (commentedAt = `há ${seconds} segundos`);

    if (days === 7) commentedAt = "há 7 dias";
    if (months === 1) commentedAt = "há 1 mês";
    if (years === 1) commentedAt = "há 1 ano";

    return commentedAt;
  };


  const handleEditClick = (id: string, comment: string) => {
    setNewCommentValue(comment);
    setSelectedCommentId(id);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setNewCommentValue(e.target.value);
   
  };

  const handleUpdateClick = async () => {
   await updateComment(selectedCommentId, newCommentValue);
    setSelectedCommentId("");
  };

  return (
    <StyledContainerComments>
      <div className="container-comment-title">
        <h2 className="comment-title">Comentários</h2>
      </div>
      {commentslist && commentslist.length > 0 ? (
        <ul>
          {commentslist.map((comment, key) => {
            return (
              <li key={key}>
                <div className="header-comment-card">
                  <div>
                    <InitialsName
                      fontSize="14"
                      height="32"
                      width="32"
                      name={comment.user.name}
                      color={comment.user.color}
                    />
                    <Name fontSize="14" name={comment.user.name} />
                    <BsDot />

                    <div>
                      <span>{relativeDate(comment.createdAt)}</span>
                    </div>
                  </div>
                  {storedUserId && storedUserId === comment.user.id && (
                    <div className="container-btns">
                      {selectedCommentId === comment.id ? (
                        <>
                          <button
                            className="btn-save-cancel"
                            onClick={handleUpdateClick}
                          >
                            Salvar
                          </button>
                          <button
                            className="btn-save-cancel"
                            onClick={() => setSelectedCommentId("")}
                          >
                            Cancelar
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            className="btn-edit-delete"
                            onClick={() =>
                              handleEditClick(comment.id, comment.comment)
                            }
                          >
                            <MdOutlineModeEditOutline />
                          </button>
                          <button
                            className="btn-edit-delete"
                            onClick={() => deleteComment(comment.id)}
                          >
                            <AiFillDelete />
                          </button>
                        </>
                      )}
                    </div>
                  )}
                </div>
                <div>
                  {selectedCommentId === comment.id ? (
                    <input
                      type="text"
                      value={newCommentValue}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <p>{comment.comment}</p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="container-no-comment">
          <h3>Seja o primeiro a comentar....</h3>
        </div>
      )}
    </StyledContainerComments>
  );
};
