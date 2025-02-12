import { HeroList } from "../components";

export const MarvelPage = () => {
  return (
    <>
      <img
        src={`/./assets/heroes/585f9379cb11b227491c3583.png`}
        alt="fondo"
        style={{
          minWidth: "100%",
          height: "20rem",
          objectFit: "cover",
          marginTop: "2rem",
        }}
      />
      <hr />
      <HeroList publisher="Marvel Comics" />
    </>
  );
};
