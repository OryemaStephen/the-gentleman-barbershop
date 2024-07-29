import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <div className="w-full h-full">
      <div className="bg-black w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-5">
        <div className="grid-cols-1 pt-3 md:pt-1">
          <Link className="text-white font-bold text-2xl lg:text-4xl" to="/">
            <img
              src={logo}
              alt="Logo"
              className="max-w-[90px] sm:max-w-[110px] md:max-w-[130px] lg:max-w-[150px] min-w-[50px] sm:min-w-[60px] md:min-w-[70px] lg:min-w-[80px]"
            />
          </Link>
          <p className="text-white text-lg pt-5">
            Gentleman is a digital agency striving to bring your ideas to life
            by giving it that extra feel.
          </p>
        </div>
        <div className="grid-cols-1 pt-3 md:pt-1  pl-2">
          <h2 className="text-[#C3B299] md:text-2xl text-xl py-2">Browse</h2>
          <ul className="text-white text-lg">
            <li>
              <Link to="/" className="hover:text-[#C3B299]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#C3B299]">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#C3B299]">
                Services
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-[#C3B299]">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/team" className="hover:text-[#C3B299]">
                Team
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#C3B299]">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="grid-cols-1 pt-3 md:pt-1 lg:pl-2">
          <h2 className="text-[#C3B299] text-xl md:text-2xl py-2">
            Contact Us
          </h2>
          <div className="text-white text-lg">
            <span className="text-[#C3B299] flex items-center">
              <IoMail />{" "}
              <span className="text-white pl-2">
                gentlemanbarbershop@gmail.com
              </span>
            </span>
            <span className="text-[#C3B299] flex items-center">
              <MdOutlinePhoneAndroid />{" "}
              <span className="text-white pl-2">+256 777 777000</span>
            </span>
            <span className="text-[#C3B299] flex items-center">
              <FaLocationDot />{" "}
              <span className="text-white pl-2">Kampala, Uganda</span>
            </span>
          </div>
        </div>
        <div className="grid-cols-1 pt-3 md:pt-1 pl-2">
          <h2 className="text-[#C3B299]text-xl md:text-2xl py-2">
            Stay In Touch
          </h2>
          <p className="text-white text-lg">
            Sign up for the Gentleman&apos;s newsletter to stay up to date
          </p>
          <form className="text-lg text-white">
            <input
              type="text"
              placeholder="Email"
              className="border-none border-b-2 border-[grey] mb-2 p-1"
            />
            <br />
            <button
              type="submit"
              className="bg-[#C3B299] text-black p-2 rounded"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="text-center py-8">
        <span>&copy; {year} .</span>
        <span>All Reserved. </span>
        <a
          href="https://oryemasteph.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Stephen Oryema
        </a>
      </div>
    </div>
  );
};

export default Footer;
