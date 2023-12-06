import React, { useState } from "react";
import { MdAddShoppingCart, MdClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Nav = () => {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <nav>
      <div className="d-block lg:hidden">
        {mobileNav ? (
          <div className="flex gap-4">
            <Link to="/cart">
              <MdAddShoppingCart size={25} />
            </Link>
            <MdClose size={25} onClick={() => setMobileNav(!mobileNav)} />
          </div>
        ) : (
          <div className="flex gap-4">
            <Link to="/cart">
              <MdAddShoppingCart size={25} />
            </Link>
            <RxHamburgerMenu
              onClick={() => setMobileNav(!mobileNav)}
              size={25}
            />
          </div>
        )}
        {mobileNav && (
          <ul className="flex flex-col gap-2 fixed right-4 top-18 p-4 bg-slate-200">
            <li>
              <Link to="/" onClick={() => setMobileNav(!mobileNav)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMobileNav(!mobileNav)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/menu" onClick={() => setMobileNav(!mobileNav)}>
                Menu
              </Link>
            </li>
            <li>
              <Link to="/reservations" onClick={() => setMobileNav(!mobileNav)}>
                Reservations
              </Link>
            </li>
            <li className="bg-[#f4ce14] px-4 py-1 rounded-2xl text-black">
              <Link to="/order" onClick={() => setMobileNav(!mobileNav)}>
                Order Online
              </Link>
            </li>
          </ul>
        )}
      </div>
      <ul className="hidden lg:flex gap-4 items-center font-semibold text-[#495e57]">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/reservations">Reservations</Link>
        </li>
        <li className="bg-[#495e57] px-4 py-1 rounded-2xl text-white">
          <Link to="/order">Order Online</Link>
        </li>
        <li>
          <Link to="/cart">
            <MdAddShoppingCart size={25} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
