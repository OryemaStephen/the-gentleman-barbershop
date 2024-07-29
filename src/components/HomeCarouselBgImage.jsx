// import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HomeCarouselBgImage = ({
  paragraph,
  heading,
  button,
  backgroundImage,
}) => (
  <div
    className="h-full w-full flex items-center justify-center text-2xl bg-cover object-cover object-center bg-center pt-20"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="text-white text-center">
      <p className="lg:text-2xl md:text-xl text-lg pb-4">{paragraph}</p>
      <h1 className="lg:text-8xl md:text-6xl text-4xl font-normal pb-4">
        {heading}
      </h1>
      <button
        type="button"
        className="px-3 py-2 border-2 border-white rounded hover:bg-white hover:text-black transition-colors duration-500 ease-in-out"
      >
        <Link to="/services">{button}</Link>
      </button>
    </div>
  </div>
);

HomeCarouselBgImage.propTypes = {
  paragraph: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
};

export default HomeCarouselBgImage;
