import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="py-5" style={{ backgroundColor: "#102E7D" }}>
        <nav className="container mx-3 flex justify-between items-center">
          {/* Logo */} 
          <div className="text-lg font-bold text-white">Logo</div>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-white hover:text-gray-300">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Services
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              About
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Contact
            </a>
          </div>

          {/* Get in Touch Button */}
          <button className="bg-sky-500 text-white border border-white px-6 mx-8 py-2 rounded transition duration-300 ease-in-out hover:bg-sky-400 hover:shadow-lg hover:scale-105">
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
              <a href="#" className="text-white hover:text-gray-300">
                Home
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                Services
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                About
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                Contact
              </a>
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
