import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import navbar from "../data/navbar";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-400 px-16 py-6 text-black backdrop-blur-md md:justify-evenly">
      <a
        href="#home"
        className="bg-gradient-to-r from-blue-900 to-blue-300 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100"
      >
        Jiyun
      </a>
      <ul className="hidden md:flex gap-10">
        {navbar.map((item) => (
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 ${isActive ? "text-blue-700" : ""}`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </ul>

      <ul className="hidden md:flex gap-5">
        <li className="cursor-pointer opacity-70 transition-all duration-300 hover:text-blue-700 hover:opacity-100 text-2xl">
          <a href="https://github.com/ImJiyun">
            <BsGithub />
          </a>
        </li>
      </ul>

      {isMobileMenuOpen ? (
        <BiX
          className="cursor-pointer block md:hidden text-4xl"
          onClick={toggleMobileMenu}
        />
      ) : (
        <BiMenu
          className="cursor-pointer block md:hidden text-4xl"
          onClick={toggleMobileMenu}
        />
      )}

      {isMobileMenuOpen && (
        <div
          className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-l-gray-400 bg-sky-100/90 p-12 ${isMobileMenuOpen ? "block" : "hidden"}`}
        >
          <ul className="flex flex-col items-center gap-8">
            {navbar.map((item) => (
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 ${isActive ? "text-blue-700" : ""}`
                }
                onClick={toggleMobileMenu}
              >
                {item.name}
              </NavLink>
            ))}
          </ul>
          <ul className="flex items-center">
            <li className="cursor-pointer opacity-70 transition-all duration-300 hover:text-blue-700 hover:opacity-100 text-2xl">
              <a href="https://github.com/ImJiyun">
                <BsGithub />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
