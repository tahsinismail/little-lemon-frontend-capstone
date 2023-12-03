import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="flex gap-2 justify-around items-center py-4">
      <div>
        <img src="logo-large.jpg" alt="Little Lemon Logo" width={250} />
      </div>
      <Nav />
    </header>
  );
};

export default Header;
