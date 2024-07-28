import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setActiveSection(location.pathname);
  }, [location]);

  const handleLinkClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const getLinkClass = (path) => {
    return activeSection === path
      ? "text-coffee-brown border-b border-[#C3B299]"
      : "text-white";
  };

  return (
    <nav className="bg-black fixed w-full z-10 top-0 shadow">
      <div className="container mx-auto flex flex-wrap items-center justify-between py-2 px-4">
        <div className="flex items-center">
          <Link
            className="text-white font-bold text-2xl lg:text-4xl"
            to="/"
            onClick={handleLinkClick}
          >
            <img
              src={logo}
              alt="Logo"
              className="max-w-[70px] sm:max-w-[90px] md:max-w-[100px] lg:max-w-[120px] min-w-[40px] sm:min-w-[50px] md:min-w-[60px] lg:min-w-[70px]"
            />
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none hover:text-[#C3B299] text-xl focus:shadow-outline"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div
          className={`w-full transition-transform duration-500 ease-in-out lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-6 mt-2 lg:mt-0">
            <li>
              <Link
                className={`w-full block lg:inline-block text-xl font-medium no-underline py-2 px-4 ${getLinkClass("/")}`}
                to="/"
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`block lg:inline-block text-xl no-underline py-2 px-4 ${getLinkClass("/about")}`}
                to="/about"
                onClick={handleLinkClick}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={`block lg:inline-block text-xl no-underline py-2 px-4 ${getLinkClass("/services")}`}
                to="/services"
                onClick={handleLinkClick}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className={`block lg:inline-block text-xl no-underline py-2 px-4 ${getLinkClass("/gallery")}`}
                to="/gallery"
                onClick={handleLinkClick}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                className={`block lg:inline-block text-xl no-underline py-2 px-4 ${getLinkClass("/team")}`}
                to="/team"
                onClick={handleLinkClick}
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                className={`block lg:inline-block text-xl no-underline py-2 px-4 ${getLinkClass("/contact")}`}
                to="/contact"
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
