import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm p-3 mb-5 bg-body-tertiary rounded">
          <div className="container-fluid">
            {/* Logo or Brand Name */}
            <a className="navbar-brand fw-bold" href="/">
              DailyNews
            </a>
    
            {/* Toggler/collapsible Button for Mobile */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
    
            {/* Navbar Links */}
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* Home Link */}
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
    
                {/* Categories Dropdown */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Categories
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                    <li>
                      <Link className="dropdown-item" to="/Politics">
                        Politics
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Technology">
                        Technology
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Business">
                        Business
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Sports">
                        Sports
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Entertainment">
                        Entertainment
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
    
              {/* Search Bar */}
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
    
              {/* Subscribe Button */}
              {/* <a href="/" className="btn btn-primary ms-3">
                Subscribe
              </a> */}
            </div>
          </div>
        </nav>
      );
  }
}

export default Navbar;