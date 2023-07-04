import { useContext, useEffect } from 'react';
import InitialsName from "../InicialsName/InicialsName";
import Name from "../Name/Name";
import { StyledContainerComments } from "./style";
import { BsDot } from "react-icons/bs";
import { CarsContext } from '../../contexts/carsContext';
import { UserContext, ICommentResponse } from '../../contexts/userContext';

export const CommentCard = (): JSX.Element => {
  const { selectCar } = useContext(CarsContext)
  const { getCommentsById, listComments } = useContext(UserContext)

  useEffect(() => {
    getCommentsById(selectCar.id)
  }, [])

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

  return (
    <StyledContainerComments>
      <div className="container-comment-title">
        <h2 className="comment-title">Comentários</h2>
      </div>

      <ul>
        {listComments.reverse().map((comment: ICommentResponse, key: number) => {
          return (
            <li key={key}>
              <div>
                <InitialsName
                  fontSize="14"
                  height="32"
                  width="32"
                  name={comment.username}
                  // Adicionar no retorno da rota comments/cars/:id a chave color do usuário
                  color={1}
                />
                <Name fontSize="14" name={comment.username} />
                <BsDot />

                <div>
                  {/* <span>{relativeDate(comment.createdAt)}</span> */}
                  {comment.createdAt !== comment.updatedAt ? (
                    <span>{relativeDate(comment.updatedAt)}</span>
                  ):(
                    <span>{relativeDate(comment.createdAt)}</span>
                  )}
                </div>
              </div>
              <div>
                <p>{comment.comment}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </StyledContainerComments>
  );
};
