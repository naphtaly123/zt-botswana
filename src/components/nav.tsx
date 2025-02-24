import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="py-5 fixed w-full top-0" style={{ backgroundColor: "#6496B3" }}>
        <nav className="container mx-10 justify-between items-center flex">
          {/* Logo */}
          <Link to="/">
          <img src={logo} alt="Logo" className="h-12 mx-6" />
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-white hover:text-gray-300 text-xl">
              Home
            </Link>
            <Link to="#services" className="text-white hover:text-gray-300 text-xl">
              Services
            </Link>
            <Link to="/about" className="text-white hover:text-gray-300 text-xl">
              About
            </Link>
            <Link to="#footer" className="text-white hover:text-gray-300 text-xl">
              Contact
            </Link>
          </div>

          {/* Get in Touch Button */}
          <button className="bg-white text-[#6496B3] border border-white px-6 mx-8 py-2 rounded transition duration-300 ease-in-out hover:bg-sky-400 hover:shadow-lg hover:scale-105">
            Get in Touch
          </button>

          {/* Hamburger Menu (Mobile) */}
          <button
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label="Toggle Navigation"
          >
            ☰
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#102E7D]">
            <nav className="flex flex-col space-y-4 text-center py-4">
              <Link to="/" className="text-white hover:text-gray-300">
                Home
              </Link>
              <a href="#services" className="text-white hover:text-gray-300">
                Services
              </a>
              <Link to="/about" className="text-white hover:text-gray-300">
                About
              </Link>
              <Link to="#footer" className="text-white hover:text-gray-300">
                Contact
              </Link>
              <button className="bg-sky-500 border border-white text-white px-6 py-2 rounded">
                Get in Touch
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

export default Nav;
