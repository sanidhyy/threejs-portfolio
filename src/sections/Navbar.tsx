import { useState } from "react";

import { navLinks } from "../constants";
import { cn } from "../lib/utils";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prevOpen) => !prevOpen);

  const NavItems = () => (
    <ul className="nav-ul">
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className="nav-li">
          <a href={href} className="nav-li_a" onClick={() => setIsOpen(false)}>
            {name}
          </a>
        </li>
      ))}

      <li className="nav-li">
        <a
          href="https://github.com/sanidhyy/threejs-portfolio"
          target="_blank"
          rel="noreferrer noopener"
          className="nav-li_a"
          onClick={() => setIsOpen(false)}
        >
          Source Code
        </a>
      </li>
    </ul>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            Shubham
          </a>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white sm:hidden flex"
            aria-label="Toggle Menu"
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              alt="Toggle"
              className="size-6"
            />
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={cn("nav-sidebar", isOpen ? "max-h-screen" : "max-h-0")}>
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};
