import { HeroList } from "../components";

export const DcPage = () => {
  return (
    <>
      <img
        src={`/assets/heroes/PortadaDCComics.webp`}
        alt="Portada DC Comics"
        style={{
          marginTop: "2rem",
          width: "100%",
          height: "20rem",
          borderRadius: "2rem",
          objectFit: "cover",
        }}
      />
      <hr />
      <HeroList publisher="DC Comics" />
    </>
  );
};
