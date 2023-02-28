import React from "react";
import { Link, useLocation } from "react-router-dom";
import Auth from "./Auth";

function Navbar() {
  const location = useLocation();
  const path = location.pathname;

  const active = "p-2 px-5 font-semibold text-lg";
  const InActive = "p-2 px-5 font-light text-lg";

  if (
    path === "/login" ||
    path === "/register" ||
    path === "/forgot-password"
  ) {
    return false;
  }

  return (
    <header className="h-[70px] bg-[#219653] text-white flex items-center sticky top-0 z-10 shadow-lg">
      <div className="w-10/12 mx-auto flex justify-between items-center">
        <Link to="/" className="flex text-xl font-bold">
          HELLO UDA
        </Link>
        <ul className="flex gap-2">
          <li>
            <Link to="/" className={path === "/" ? active : InActive}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="events"
              className={path === "/events" ? active : InActive}
            >
              Events
            </Link>
          </li>
          <li>
            <Link to="books" className={path === "/books" ? active : InActive}>
              Books
            </Link>
          </li>
          <li>
            <Link
              to="tshirts"
              className={path === "/tshirts" ? active : InActive}
            >
              T-Shirts
            </Link>
          </li>
        </ul>
        <Auth authentication={false} />
      </div>
    </header>
  );
}

export default Navbar;
