import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

function Navbar() {
  return (
    <header className="flex items-center gap-[70vh]   mt-10">
      <p className="text-2xl">JoaquinBianchi</p>
      <nav>
        <ul className="flex items-center gap-4 text-lg font-semibold">
          <li>
            <a href="#" className="text-[#ff5a0a]">
              Inicio
            </a>
          </li>
          <li>
            <a href="#">Acerca de</a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-4 text-xl text-black rounded-sm px-9    py-3 bg-[#ff5a0a]"
            >
              <span className="text-lg text-white">My Porfolio</span>
              <FaExternalLinkAlt />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-2  text-xl text-white rounded-sm px-10 py-3 bg-black"
            >
              <FaGithub />
              <span className="text-lg text-white">GitHub</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
