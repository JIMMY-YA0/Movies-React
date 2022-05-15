import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="bg-black sticky z-20 top-0 left-0 right-0 ">
      <header className="text-white flex justify-between px-8 pt-2 ">
        <Link to="/">
          <h1 className=" sticky text-red-600 font-bold text-4xl cursor-pointer">NETFLIX</h1>
        </Link>
        <div className="flex items-center py-2">
          <p className="hidden md:flex text-white text-l mr-4">UNLIMITE TV SHOWS & MOIVES</p>
          <Link to="/signup">
            <button className="text-white text-xs sm:text-l bg-red-600 rounded px-5 py-2 mr-4 ">
              JOIN NOW
            </button>
          </Link>
          <Link to="/login">
            <button className="text-white text-xs sm:text-l bg-red-600 rounded px-4 py-2">
              SIGN IN
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
