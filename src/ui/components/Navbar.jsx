import { Link, NavLink, useNavigate } from "react-router";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login", { replace: true });
  };

  return (
    <nav
      className="navbar navbar-expand-sm navbar-dark bg-dark p-2"
      style={{
        backgroundImage: `url('/assets/heroes/Background.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "20vh",
        fontFamily: "Comic Sans MS",
        fontSize: "25px",
      }}
    >
      <Link className="navbar-brand" to="/"></Link>

      <div className="navbar-collapse">
        <div className="navbar-nav ">
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink className="nav-item nav-link" to="/dc">
            DC
          </NavLink>
          <NavLink className="nav-item nav-link" to="/search">
            Buscar
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-white">Nicolas</span>

          <button
            className="nav-item nav-link btn"
            onClick={handleLogout}
            style={{ fontFamily: "Comic Sans MS", fontSize: "25px" }}
          >
            Cerrar
          </button>
        </ul>
      </div>
    </nav>
  );
};
