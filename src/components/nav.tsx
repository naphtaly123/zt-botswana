// import { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/logo.png"

// function Nav() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <header className="py-5 fixed w-full top-0 z-20 px-10" style={{ backgroundColor: "#6496B3" }}>
//         <nav className="container mx-10 justify-between items-center flex">
//           {/* Logo */}
//           <Link to="/">
//           <img src={logo} alt="Logo" className="h-12 mx-6 w-36" />
//           </Link>

//           {/* Nav Links */}
//           <div className="hidden md:flex space-x-9">
//             <Link to="/#" className="text-white hover:text-gray-300 text-xl">
//               Home
//             </Link>
//             <Link to="/#services" className="text-white hover:text-gray-300 text-xl">
//               Services
//             </Link>
//             <Link to="/about#_" className="text-white hover:text-gray-300 text-xl">
//               About
//             </Link>

//           </div>

//           {/* Get in Touch Button */}
//           <Link to="/about#footer" className="bg-white text-[#6496B3] sm:text-sm border-white px-6 mx-8 py-2 rounded transition duration-300 ease-in-out hover:bg-sky-400 hover:shadow-lg hover:scale-105">
//             Get in Touch
//           </Link>

//           {/* Hamburger Menu (Mobile) */}
//           <button
//             className="md:hidden text-white"
//             onClick={toggleMenu}
//             aria-expanded={isOpen}
//             aria-label="Toggle Navigation"
//           >
//             ☰
//           </button>
//         </nav>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden bg-[#102E7D]">
//             <nav className="flex flex-col space-y-4 text-center py-4">
//               <Link to="/" className="text-white hover:text-gray-300">
//                 Home
//               </Link>
//               <Link to="#services" className="text-white hover:text-gray-300">
//                 Services
//               </Link>
//               <Link to="/about" className="text-white hover:text-gray-300">
//                 About
//               </Link>

//               <button className="bg-sky-500 border border-white text-white px-6 py-2 rounded">
//                 Get in Touch
//               </button>
//             </nav>
//           </div>
//         )}
//       </header>
//     </>
//   );
// }

// export default Nav;
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaPhone } from "react-icons/fa";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header
        className="py-5 fixed w-full top-0 z-20 px-10"
        style={{ backgroundColor: "#6496B3" }}
      >
        <nav className="container mx-10 justify-between items-center flex">
          {/* Logo */}
          <NavLink to="/">
            <img src={logo} alt="Logo" className="h-12 mx-6 w-36" />
          </NavLink>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-9">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/#services"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/about#footer"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Get in Touch Button */}
          {/* <NavLink
            to="/about#footer"
            className="bg-white text-[#6496B3] sm:text-sm border-white px-6 mx-8 py-2 rounded transition duration-300 ease-in-out hover:bg-sky-400 hover:shadow-lg hover:scale-105"
          >
            Get in Touch
          </NavLink> */}
          <div className="flex items-center bg-transparent transition duration-300 ease-in-out">
    <FaPhone
      className="text-white mr-2 border border-white rounded-full px-1 mx-1 py-2 hover:bg-sky-400 hover:shadow-lg hover:scale-105"
      size={36} // Increase the size of the icon
    />{" "}
    {/* Phone icon outside NavLink */}
    <NavLink
      to="tel:2673980459"
      className="text-white sm:text-sm lg:text-base text-lg border border-white rounded-full px-6 mx-2 py-2 hover:bg-sky-400 hover:shadow-lg hover:scale-105"
    >
      (267) 398-0459
    </NavLink>
  </div>

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
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/#services"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Services
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                About
              </NavLink>
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
