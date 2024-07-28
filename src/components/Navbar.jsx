import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 fixed w-full z-10 top-0 shadow">
      <div className="container mx-auto flex flex-wrap items-center justify-between py-2 px-4">
        <div className="flex items-center">
          <a className="text-white font-bold text-2xl lg:text-4xl" href="#">
            The Gentleman
          </a>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:shadow-outline"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div
          className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-6 mt-2 lg:mt-0">
            <li>
              <a
                className="block lg:inline-block text-white no-underline py-2 px-4"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="block lg:inline-block text-white no-underline py-2 px-4"
                href="#"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="block lg:inline-block text-white no-underline py-2 px-4"
                href="#"
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="block lg:inline-block text-white no-underline py-2 px-4"
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
