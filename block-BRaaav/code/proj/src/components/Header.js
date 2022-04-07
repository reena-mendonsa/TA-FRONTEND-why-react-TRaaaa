import React from "react";

function Header() {
  return (
    <React.Fragment>
      <header className="navbar">
        <div className="container flex">
          <div className="flex">
            <a className="brand" href="https://www.w3.org">
              <strong>Hydro</strong>
            </a>
            <nav>
              <ul className="flex nav-menu nav-menu-primary">
                <li>
                  <a href="https://www.w3.org">Home</a>
                </li>
                <li>
                  <a href="https://www.w3.org">About</a>
                </li>
                <li>
                  <a href="https://www.w3.org">Blog</a>
                </li>
                <li>
                  <a href="https://www.w3.org">Our Work</a>
                </li>
                <li>
                  <a href="https://www.w3.org">Contacts</a>
                </li>
              </ul>
            </nav>
          </div>
          <nav>
            <ul className="flex nav-menu nav-menu-secondary">
              <li className="social-media-item">
                <a href="https://www.w3.org">
                  <i className="fab fa-facebook-square"></i>
                </a>
              </li>
              <li className="social-media-item">
                <a href="https://www.w3.org">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="social-media-item">
                <a href="https://www.w3.org">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a className="btn btn-primary" href="https://www.w3.org">
                  {" "}
                  Sign in / Join{" "}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </React.Fragment>
  );
}
export default Header;