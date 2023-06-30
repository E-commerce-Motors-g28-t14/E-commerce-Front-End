import { ContainerName } from "./style";

interface INameProps {
  name: string;
  fontSize: string;
}

const Name = ({ fontSize, name }: INameProps) => {
  const getUserName = (name: string) => {
    const nameParts = name.split(" ");

    if (nameParts.length === 1) {
      return `${nameParts[0]}`;
    }

    const firstName = nameParts[0];
    const secondName = nameParts[nameParts.length - 1];

    return `${firstName} ${secondName}`;
  };

  const userName = getUserName(name);
  return (
    <ContainerName className="container-name">
      <h2 style={{ fontSize: `${fontSize}` }}>{userName}</h2>
    </ContainerName>
  );
};

export default Name;
