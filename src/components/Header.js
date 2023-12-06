import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex gap-2 justify-around items-center py-4">
      <div>
        <Link to="/">
          <img src="logo-large.jpg" alt="Little Lemon Logo" width={250} />
        </Link>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
