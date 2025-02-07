import { useParams } from "react-router";
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  const { id } = useParams();
  const hero = getHeroById(id);
  console.log(hero);
  return <h1>{hero.superhero}</h1>;
};
