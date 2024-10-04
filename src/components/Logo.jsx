import React from "react";
import logoImg from "../assets/americano2.jpg";

function Logo() {
  return (
    <div className="w-[30%] shadow-sm">
      <div className="flex items-center space-x-4 ml-4">
        <img
          src={logoImg}
          alt="news picture"
          className="rounded-full w-12 h-12 object-cover"
        />
        <h1 className="font-extrabold text-lg">News feed</h1>
      </div>
    </div>
  );
}

export default Logo;
