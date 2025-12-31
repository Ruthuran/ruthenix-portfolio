import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md shadow-md border-b border-blue-500/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 tracking-wider font-[Rajdhani] drop-shadow-glow">
          RUTHENIX
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 md:space-x-10 text-white font-[Rajdhani] text-base md:text-lg font-semibold tracking-wide">
          {navItems.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="relative transition-all duration-300 hover:text-cyan-400"
              >
                {label}
                <span className="block h-0.5 w-0 bg-cyan-400 transition-all duration-300 hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-3xl focus:outline-none"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-black/90 backdrop-blur-md border-t border-blue-500/20 w-full flex flex-col items-center space-y-4 py-6 text-white font-[Rajdhani] text-lg font-semibold">
          {navItems.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="transition-all duration-300 hover:text-cyan-400"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
