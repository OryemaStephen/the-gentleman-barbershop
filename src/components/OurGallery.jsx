// import React from 'react'
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";
import gallery6 from "../assets/gallery6.jpg";
import gallery7 from "../assets/gallery7.jpg";
import gallery8 from "../assets/gallery8.jpg";

const OurGallery = () => {
  const galleryImages = [
    { src: gallery1, title: "Workshop for Haircut", paragraph: "Hair Shop" },
    { src: gallery2, title: "Hair cut Designer", paragraph: "New Style" },
    { src: gallery3, title: "Barber Shop", paragraph: "Moment" },
    { src: gallery4, title: "Trim Your Beard", paragraph: "Hair Shop" },
    {
      src: gallery5,
      title: "New Design for Haircut shop 5",
      paragraph: "New Style",
    },
    { src: gallery6, title: "Ready to go with us", paragraph: "Moment" },
    { src: gallery7, title: "Prepare a barber shop", paragraph: "New Style" },
    {
      src: gallery8,
      title: "Best design for your beard",
      paragraph: "Hair Shop",
    },
  ];

  return (
    <div className="w-full h-full bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {galleryImages.map((image, index) => (
        <div key={index} className="relative group overflow-hidden grid-cols-1">
          <img
            src={image.src}
            alt={image.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center text-white flex-col justify-center transition-transform duration-500 transform translate-y-full group-hover:translate-y-0">
            <h2 className="text-white text-3xl pb-10">{image.title}</h2>
            <p className="text-lg pb-10">{image.paragraph}</p>
            <button
              type="button"
              className="px-5 py-2 border-[1px] border-white bg-white text-black hover:bg-black hover:border-black hover:text-white transition-colors duration-500 ease-in-out"
            >
              View More Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurGallery;
