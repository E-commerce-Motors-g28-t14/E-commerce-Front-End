import InitialsName from "../InicialsName/InicialsName";
import Name from "../Name/Name";
import { StyledContainerComments } from "./style";
import { BsDot } from "react-icons/bs";

interface IMockClients {
  comment: string;
  username: string;
  color: number;
  createdAt: string;
}

export const CommentCard = (): JSX.Element => {
  const mockClients: IMockClients[] = [
    {
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      username: "Júlia Lima",
      color: 2,
      createdAt: "2021-05-01T15:34:56.789Z",
    },
    {
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      username: "Marcos Antônio",
      color: 2,
      createdAt: "2023-02-22T18:09:21.789Z",
    },
    {
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      username: "Marcos Antônio",
      color: 2,
      createdAt: "2023-02-22T18:09:21.789Z",
    },
  ];

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
        {mockClients.map((client, key) => {
          return (
            <li key={key}>
              <div>
                <InitialsName
                  fontSize="14"
                  height="32"
                  width="32"
                  name={client.username}
                  color={client.color}
                />
                <Name fontSize="14" name={client.username} />
                <BsDot />

                <div>
                  <span>{relativeDate(client.createdAt)}</span>
                </div>
              </div>
              <div>
                <p>{client.comment}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </StyledContainerComments>
  );
};
