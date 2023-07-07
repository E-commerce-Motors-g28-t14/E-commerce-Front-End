import { ContainerInitial } from "./style";

interface IInitialsNameProps {
  width: string;
  height: string;
  name: string;
  fontSize: string;
  color: number;
}

const InitialsName = ({
  width,
  height,
  name,
  fontSize,
  color,
}: IInitialsNameProps) => {
  const getUsernameLetters = (name: string) => {
    const nameParts = name.split(" ");
    const firstLetter = nameParts[0].charAt(0);
    const secondLetter = nameParts[nameParts.length - 1].charAt(0);

    return `${firstLetter}${secondLetter}`;
  };

  const userLetter = getUsernameLetters(name);

  return (
    <ContainerInitial
      style={{
        width: `${width}px`,
        height: `${height}px`,
        background: `var(--color-random-${color})`,
      }}
    >
      <div>
        <h2 style={{ fontSize: `${fontSize}` }}>{userLetter}</h2>
      </div>
    </ContainerInitial>
  );
};

export default InitialsName;
