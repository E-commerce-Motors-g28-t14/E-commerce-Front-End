import { ContainerUsername } from "./style";

const Username = () => {
  const user = {
    name: "Maria Fernanda Batista",
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

  const getRandomColor = (colors : string[]) => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const getUsernameLetters = (name: string) => {
    const nameParts = name.split(" ");
    const firstLetter = nameParts[0].charAt(0);
    const secondLetter = nameParts[nameParts.length - 1].charAt(0);

    return [firstLetter, secondLetter];
  };

  const getUserName = (name: string) =>{
    const nameParts = name.split(" ");
    const firstName = nameParts[0];
    const secondName = nameParts[nameParts.length - 1];

    return [`${firstName} ${secondName}`];
  }

  const randomBackground = getRandomColor(randomColor);
  const userLetter = getUsernameLetters(user.name)
  const userName = getUserName(user.name)

  return (
    <ContainerUsername>
      <div
        className="container-photo-perfil"
        style={{ background: `var(${randomBackground})` }}
      >
        <h2>{userLetter}</h2>
      </div>
      <div className="container-name">
        <h2>{userName}</h2>
      </div>
    </ContainerUsername>
  );
};

export default Username;
