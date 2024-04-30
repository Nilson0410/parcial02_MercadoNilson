
import { NavLink } from "react-router-dom";
import miLogo from "../../../assets/img/logoReact.png"

export const Cabecera = () => {
  return (
    <>
      <div className="bd-example m-0 border-0">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
            <img src={miLogo} alt="" />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/">
                    Inicio...
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="concicre">
                    Conciertos
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="*">
                    Acerca De
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
