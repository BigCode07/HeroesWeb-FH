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
        backgroundImage: `url('/assets/heroes/navbar-background.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "0% 25%",
        height: "30vh",
        fontSize: "4rem",
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
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC4UlEQVR4nO2YO2hUURCGryRugimMEmIgxkKSyiXYBLTxEaK1iFqINoYgaJOIthZqFR+FhbVWSizWQjEGYikmxRYJAW0sfICFKIoKSYyfDHuWjJPdva47+wjcv979//nPnTNnZqIoQYIECf4FQBq4CGSA18BncvgOvAemgXHgMNAcNRKAZuA0kKU8fASuAR2NYGI/sEBl+AqMAk31MNAUTnOlQGDLIYVuAGPASeA8cAV4oNLN4jnQVUsTKWCiQCBvgGFga8z/NwJDwGQRjr5afYkJI/4zpEbqP/gGgVeG7y2wvToOVoUlnTQ+AAMVcrYDTw2vFI5Wv8jXXuwVY6LH8Us/NGZuenAXKrELJp0GnDXaTAlfBvojZxF5JzRGXQVWdXqBRaWT8RbImspS9sUuQ+u20voN7PRsOzSGXYiL63UCS0rvshfxJZO3W1yIS2tOKc0XXqSPFOm0C2m8pnQC+vBaPEj1g3XdJdJ4zT0mndMepNLU5THmEmm85g5j5JAH6S9FeMol0njNFmPkiAfpD0V4ziXSeM1txsgBD9J3ivCqS6TxmruNkV0epDIn5HHfJdJ4zePmUay85IcZO48v1XzVleY9pTnnRSqLAo0hF+LSDeon9y44EMuiII9JF+LieiPm4PZVc6AadCP/W2dTmHPymPEW6DAPo7z27a4iOZ075sCORlUQkY2IxjPPJRtwxvBPARu8+O04qksxYTxtc+A+a1p3WRl1+0ReWLArDFYaMnT1VnAnbDoJ5quRula8L6xsNBbDZNdZRiUcMRfbYrYWZnqK7HqXQm7LPLE3/C4Veqd+4ARw17wTOp3m62GmFbgVBp9KIVvH7rDjmq25GUE46UzoicrFjJRYXZ3qakYg2w5ZFMiMHfOV5qTtKPVi192MGYzSYVl9DDgorXg5XSyNYsYDwGbgpTGTjdv4NyRIzDQoKHxnnkTrEaw18y1aryBn5nEYuy/UO54ECRJE9cMfem9OwAxU1NYAAAAASUVORK5CYII="
              alt="search--v1"
            ></img>
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <button
            className="nav-item nav-link btn"
            style={{ fontSize: "2rem" }}
            onClick={handleLogout}
          >
            Salir
          </button>
        </ul>
      </div>
    </nav>
  );
};
