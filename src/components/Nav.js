import React, { useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <nav className="">
      <div className="d-block lg:hidden">
        <RxHamburgerMenu size={25} />
      </div>
      <ul className="hidden lg:flex gap-4 items-center font-semibold text-[#495e57]">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/menu">Menu</a>
        </li>
        <li>
          <a href="/reservations">Reservations</a>
        </li>
        <li className="bg-[#495e57] px-4 py-1 rounded-2xl text-white">
          <a href="/order">Order Online</a>
        </li>
        <li>
          <a href="/cart">
            <MdAddShoppingCart size={25} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
