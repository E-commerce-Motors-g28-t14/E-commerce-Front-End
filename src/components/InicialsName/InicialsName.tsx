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

  const randomColor = [
    "--color-random-1",
    " --color-random-2",
    "--color-random-3",
    " --color-random-4",
    " --color-random-5",
    "--color-random-6",
    " --color-random-7",
    "--color-random-8",
    " --color-random-9",
    "--color-random-10",
    "--color-random-11",
    "--color-random-12",
  ];

  const getRandomColor = (colors: string[]) => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const userLetter = getUsernameLetters(name);
  const randomBackground = getRandomColor(randomColor);
  console.log(color);
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
