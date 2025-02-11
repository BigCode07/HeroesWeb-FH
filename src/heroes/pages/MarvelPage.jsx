import { HeroList } from "../components";

export const MarvelPage = () => {
  return (
    <>
      <img
        src={`/./assets/heroes/585f9379cb11b227491c3583.png`}
        alt="fondo"
        className="img-fluid"
      />
      <hr />
      <HeroList publisher="Marvel Comics" />
    </>
  );
};
