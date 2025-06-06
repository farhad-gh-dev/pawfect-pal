import React from "react";
import { NavLink } from "../../components/nav-link";

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-white px-16 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-[550] text-gray-600">PAWFECT PAL</span>
        </div>

        <div className="hidden md:flex space-x-8">
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">Services</NavLink>
          <NavLink href="#">About</NavLink>
          <NavLink href="#">Contact</NavLink>
        </div>

        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 text-md font-[500] text-gray-600">
            (012) 345-6789
          </button>
          <button className="px-5 py-2.5 text-md font-[500] bg-transparent text-gray-600 border-2 border-gray-200 rounded-full hover:bg-gray-50 transition">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};
