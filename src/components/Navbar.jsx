import React from "react";
import Logo from "./Logo";
import Search from "./Search";

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-black p-4">
      <Logo />
      <Search />
    </nav>
  );
}

export default Navbar;
