import React from "react";
import Logo from "./Logo";
import Search from "./Search";

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-black p-4">
      <Logo />
      <Search />
      <img
        src=""
        alt=""
        className="object-cover h-16 w-16 shrink-0 rounded-full sm:h-12 sm:w-12"
      ></img>
    </nav>
  );
}

export default Navbar;
