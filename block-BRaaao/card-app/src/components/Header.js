import React from "react";

function Header(props) {
  return (
    <nav>
      <ul className="flex container">
        <div>
          <img
            className="image-width-logo"
            src="/images/altcampus.png"
            alt="img"
          />
        </div>
        <div className="flex justify-content">
          <li>Home </li>
          <li>About</li>
          <li>Contact</li>
        </div>
      </ul>
    </nav>
  );
}

export default Header;
