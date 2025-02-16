import { useNavigate, useLocation } from "react-router";
import { useForm } from "../../hooks/useForm";
import queryString from "query-string";
import { getHeroByName } from "../helpers";
import { HeroCard } from "../components";
export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const heroes = getHeroByName(q);
  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <div className="container">
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Busqueda</h4>
          <hr />
          <form onSubmit={onSearchSubmit} action="">
            <input
              type="text"
              placeholder="Buscar Heroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
          </form>
          <button
            className="btn btn-outline-primary mt-1"
            onClick={onSearchSubmit}
          >
            Buscar
          </button>
        </div>
        <div className="col-7">
          <h4>Resultado</h4>
          <hr />

          {/* {q === "" ? (
            <div className="alert alert-primary">Search Hero</div>
          ) : (
            heroes.length === 0 && (
              <div className="alert alert-danger">
                No Hero with <b>{q}</b>
              </div>
            )
          )} */}

          <div
            className="alert alert-primary"
            style={{ display: showSearch ? "" : "none" }}
          >
            Busqueda Heroe
          </div>

          <div
            className="alert alert-danger"
            style={{ display: showError ? "" : "none" }}
          >
            No se encontro el Heroe <b>{q}</b>
          </div>

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};
