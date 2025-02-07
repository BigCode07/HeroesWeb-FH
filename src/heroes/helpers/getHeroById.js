import { heroes } from "../data/heroes";

export const getHeroById = (id) => {
  //Si existe regresa la respuesta y si no nos trae undefined
  return heroes.find((hero) => hero.id === id);
};
