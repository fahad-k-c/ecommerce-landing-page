import React, { useState } from "react";
import { CiShoppingCart, CiSearch } from "react-icons/ci";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white relative">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12 mr-2">
            {/* Logo */}
            <a className="block text-gray-900 font-bold text-xl" href="#">
              <span className="sr-only">Home</span>
              HealthPlus
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <nav>
              <ul className="flex items-center gap-6 text-md font-medium">
                {[
                  "Home",
                  "Services",
                  "Doctors",
                  "Appointments",
                  "Health",
                  "Contact",
                ].map((item) => (
                  <li key={item}>
                    <a
                      className="text-gray-500 transition hover:text-gray-900"
                      href="#"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Search and Cart */}
          <div className="flex items-center gap-2 ">
            <div className="border-[0.5px] border-gray-400 rounded-full px-3 py-2 text-sm font-medium text-gray-400 hover:text-gray-900 hover:scale-105 cursor-pointer transition-all duration-300 ">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1">
                  <CiSearch className="text-lg" />
                  <input
                    type="text"
                    className="max-w-[90px] focus:outline-none focus:ring-0"
                    placeholder="Search "
                  />
                </div>
                <CiShoppingCart className="text-lg" />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="block md:hidden">
              <button
                className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={
                      isMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg absolute top-20 left-0 w-full z-[1000]">
          <ul className="flex flex-col items-center gap-6 py-4 text-sm font-medium">
            {[
              "Home",
              "Services",
              "Doctors",
              "Appointments",
              "Health",
              "Contact",
            ].map((item) => (
              <li key={item}>
                <a
                  className="text-gray-500 transition hover:text-gray-900"
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
