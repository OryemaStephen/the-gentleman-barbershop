const Navbar = () => {
  return (
    <nav className="bg-blue-500 fixed w-full z-10 top-0 shadow">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <a className="text-white font-bold text-2xl lg:text-4xl" href="#">
            Logo
          </a>
        </div>
        <div className="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            className="flex items-center p-1 text-white hover:text-gray-300"
          >
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-blue-500 z-20"
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <a
                className="inline-block py-2 px-4 text-white no-underline hover:text-gray-300"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block py-2 px-4 text-white no-underline hover:text-gray-300"
                href="#"
              >
                About
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block py-2 px-4 text-white no-underline hover:text-gray-300"
                href="#"
              >
                Services
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block py-2 px-4 text-white no-underline hover:text-gray-300"
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
