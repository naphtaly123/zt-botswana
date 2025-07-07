import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import GetStartedBtn from "../forms/get-started-popup";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#_");
  const [isJoinUsHovered, setIsJoinUsHovered] = useState(false);
  const location = useLocation();
  const scrollTimeout = useRef<number | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = window.setTimeout(() => {
        const sections = document.querySelectorAll<HTMLElement>("section[id]");
        let currentSection = "#_";

        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const scrollPosition = window.scrollY + 100;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            currentSection = `#${section.id}`;
          }
        });

        setActiveSection(currentSection);
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  // Enhanced isActive function with hash and scroll handling
  const isActive = (path: string) => {
    // If we're not on the home page, only check pathname matches
    if (location.pathname !== "/") {
      return path === location.pathname;
    }

    // Home page behavior - combine scroll position and hash
    if (path === "/#_") {
      // Home is active if we're at top or no hash
      return activeSection === "#_" || !location.hash;
    }
    
    if (path === "/#services") {
      // Services is active if scrolled to services or hash matches
      return activeSection === "#services" || location.hash === "#services";
    }

    return false;
  };

  return (
    <>
      <header className="py-5 fixed w-full top-0 z-20 px-10 shadow" style={{ backgroundColor: "#6496B3" }}>
        <nav className="container mx-10 justify-between items-center flex">
          {/* Logo */}
          <Link to="/#_">
            <img src={logo} alt="Logo" className="h-12 mx-6" />
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-6">
            <Link 
              to="/#_" 
              className={`relative text-white hover:text-gray-300 text-xl transition-colors duration-300 ${isActive("/#_") ? "active-link" : ""}`}
            >
              Home
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${isActive("/#_") ? "w-full" : "w-0"}`}></span>
            </Link>
            <Link 
              to="/services" 
              className={`relative text-white hover:text-gray-300 text-xl transition-colors duration-300 ${isActive("/services") ? "active-link" : ""}`}
            >
              Services
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${isActive("/services") ? "w-full" : "w-0"}`}></span>
            </Link>
            <Link 
              to="/about" 
              className={`relative text-white hover:text-gray-300 text-xl transition-colors duration-300 ${isActive("/about") ? "active-link" : ""}`}
            >
              About
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${isActive("/about") ? "w-full" : "w-0"}`}></span>
            </Link>
            <Link 
              to="/contact" 
              className={`relative text-white hover:text-gray-300 text-xl transition-colors duration-300 ${isActive("/contact") ? "active-link" : ""}`}
            >
              Contact
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${isActive("/contact") ? "w-full" : "w-0"}`}></span>
            </Link>
            
            {/* Join Us with Dropdown */}
            <div 
              className="relative "
              onMouseEnter={() => setIsJoinUsHovered(true)}
              onMouseLeave={() => setIsJoinUsHovered(false)}
            >
              <Link 
                to="/join-us" 
                className={`relative text-white hover:text-gray-300 text-xl transition-colors duration-300 ${isActive("/join-us") ? "active-link" : ""}`}
              >
                Join Us
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${isActive("/join-us") ? "w-full" : "w-0"}`}></span>
              </Link>
              
              {/* Dropdown Menu */}
              {isJoinUsHovered && (
                <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg z-30">
                  <div className="py-1">
                    <Link 
                      to="/join-us#_" 
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition-colors duration-300"
                    >
                      Careers
                    </Link>
                    <Link 
                      to="/join-us#it-capacity-building" 
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition-colors duration-300"
                    >
                      IT Capacity Building
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Get in Touch Button */}
          <div>
            <GetStartedBtn />
          </div>

          {/* Hamburger Menu (Mobile) */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label="Toggle Navigation"
          >
            ☰
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#102E7D] transition-all duration-300 ease-in-out">
            <nav className="flex flex-col space-y-6 text-center py-4 px-4">
              <Link 
                to="/#_" 
                className={`relative text-white hover:text-gray-300 py-2 transition-colors duration-300 ${isActive("/#_") ? "active-link" : ""}`}
              >
                Home
                <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-white transition-all duration-300 ${isActive("/#_") ? "w-3/4" : "w-0"}`}></span>
              </Link>
              <Link 
                to="/#services" 
                className={`relative text-white hover:text-gray-300 py-2 transition-colors duration-300 ${isActive("/#services") ? "active-link" : ""}`}
              >
                Services
                <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-white transition-all duration-300 ${isActive("/#services") ? "w-3/4" : "w-0"}`}></span>
              </Link>
              <Link 
                to="/about" 
                className={`relative text-white hover:text-gray-300 py-2 transition-colors duration-300 ${isActive("/about") ? "active-link" : ""}`}
              >
                About
                <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-white transition-all duration-300 ${isActive("/about") ? "w-3/4" : "w-0"}`}></span>
              </Link>
              <Link 
                to="/contact" 
                className={`relative text-white hover:text-gray-300 py-2 transition-colors duration-300 ${isActive("/contact") ? "active-link" : ""}`}
              >
                Contact
                <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-white transition-all duration-300 ${isActive("/contact") ? "w-3/4" : "w-0"}`}></span>
              </Link>
              <div className="relative">
                <Link 
                  to="/join-us" 
                  className={`relative text-white hover:text-gray-300 py-2 transition-colors duration-300 ${isActive("/join-us") ? "active-link" : ""}`}
                >
                  Join us
                  <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-white transition-all duration-300 ${isActive("/join-us") ? "w-3/4" : "w-0"}`}></span>
                </Link>
                <div className="pl-4 pt-2">
                  <Link 
                    to="/carriers" 
                    className="block text-white hover:text-gray-300 py-1 transition-colors duration-300"
                  >
                    Carriers
                  </Link>
                  <Link 
                    to="/it-capacity-building" 
                    className="block text-white hover:text-gray-300 py-1 transition-colors duration-300"
                  >
                    IT Capacity Building
                  </Link>
                </div>
              </div>
              <div className="pt-2">
                <GetStartedBtn />
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

export default Nav;