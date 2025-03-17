import { Link, useParams } from "react-router-dom";
import ContactUsFooter from "../forms/contact-us-footer.tsx";
import logo from "../assets/logo.png";

function Footer() {
  const { id } = useParams();

  return (
    <footer id="footer" className="font-sans">
      <section className="bg-gray-100 text-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          {/* Logo + Address */}
          <div className="text-[15px] font-semibold">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="h-10 mb-3 hover:scale-105 transition-transform"
              />
            </Link>
            <p className="leading-relaxed">
              Sunshine Office Park, Fairgrounds{id}<br />
              Plot 50361, Block C <br />
              Gaborone<br />
              Botswana
            </p>
            <p className="mt-2">
              (+267) 3980469 | 3980416<br />
              (+267) 79127013
            </p>

            {/* Social Icons */}
            <div className="flex mt-4 space-x-3 text-[16px]">
              <a
                href="https://www.facebook.com/profile.php?id=100065402172648"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <i className="fab fa-facebook-f text-lg"></i>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-400 transition-colors"
              >
                <i className="fab fa-twitter text-lg"></i>
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h2 className="text-lg font-semibold text-blue-700 mb-4">
              Useful Links
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/#hero"
                  className="hover:text-blue-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/#services"
                  className="hover:text-blue-500 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about#_"
                  className="hover:text-blue-500 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact#_"
                  className="hover:text-blue-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-lg font-semibold text-blue-700 mb-4">
              Services
            </h2>
            <ul className="space-y-2 text-sm">
              <li>SAP ERP</li>
              <li>Cloud Advisory & Implementation</li>
              <li>System Assessments</li>
              <li>EA Review & Implementation</li>
              <li>
                <Link
                  to="/#services"
                  className="text-blue-600 hover:underline"
                >
                  See More
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-lg font-semibold text-blue-700 mb-4">
              Contact Us
            </h2>
            <ContactUsFooter />
          </div>
        </div>
      </section>

      {/* Bottom Bar */}
      <div className="bg-blue-700 text-white py-3 text-center text-sm">
        © 2025 Zimele Technologies Botswana. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
