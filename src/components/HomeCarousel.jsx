import { useState, useEffect } from "react";
import HomeCarouselBgImage from "./HomeCarouselBgImage";
import image1 from "../assets/slider01.jpg";
import image2 from "../assets/slider02.jpg";
import image3 from "../assets/slider03.jpg";
// import {
//   MdOutlineArrowForwardIos,
//   MdOutlineArrowBackIos,
// } from "react-icons/md";

const HomeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      heading: "The Barber Shop",
      paragraph: "Welcome to Gentleman",
      button: "See what we do",
      backgroundImage: image1,
    },
    {
      heading: "The Perfect Haircut",
      paragraph: "Welcome to Gentleman",
      button: "See what we do",
      backgroundImage: image2,
    },
    {
      heading: "Fresh New Look",
      paragraph: "Welcome to Gentleman",
      button: "See what we do",
      backgroundImage: image3,
    },
  ];

  // const nextSlide = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === slides.length - 1 ? 0 : prevIndex + 1,
  //   );
  // };

  // const prevSlide = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? slides.length - 1 : prevIndex - 1,
  //   );
  // };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [slides.length]);

  return (
    <div className="relative w-full pb-4 h-screen overflow-hidden">
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <HomeCarouselBgImage
              paragraph={slide.paragraph}
              heading={slide.heading}
              button={slide.button}
              backgroundImage={slide.backgroundImage}
            />
          </div>
        ))}
      </div>
      {/* <button
        onClick={prevSlide}
        className="ml-1 text-3xl absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded"
      >
        <MdOutlineArrowBackIos />
      </button>
      <button
        onClick={nextSlide}
        className="mr-1 text-3xl absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded"
      >
        <MdOutlineArrowForwardIos />
      </button> */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HomeCarousel;
