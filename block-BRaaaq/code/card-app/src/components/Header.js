import React from "react";

function Header() {
  return (
    <nav>
      <ul className="flex container">
        <div>
          <img
            className="image-width-logo"
            src="/images/altcamplogo.png"
            alt="img"
            width="100"
            height="80"
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
