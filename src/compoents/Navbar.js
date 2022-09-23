import React from "react";

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar  fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                DryFruits
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/">
                  Almond
                </a>
                <a className="dropdown-item" href="/">
                  Cashewnuts
                </a>
                <a className="dropdown-item" href="/">
                  Figs
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">
                  Raisin
                </a>
              </div>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="/">
                About Us
              </a>
            </li>
            

            <li className="nav-item">
              <a className="nav-link" href="/">
                Contact Us
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>

          <div className={`custom-control custom-switch ${props.mode==='light'?'dark':'light'}`}>
            <input
              type="checkbox"
              className="custom-control-input"
              id="customSwitch1"
              onClick={props.toggleMode}
            />
            <label className="custom-control-label" htmlFor="customSwitch1">
                Change Mode
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
}
