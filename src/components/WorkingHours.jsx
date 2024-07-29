// import React from 'react'
import bg from "../assets/workinghours.jpg";

const WorkingHours = () => {
  return (
    <div className="relative w-full h-[60vh] md:h-[80vh]">
      <div
        className="w-full h-full bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      ></div>
      <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full text-white">
        <div className="flex flex-col justify-around w-full h-full pt-20 pb-20 text-center ">
          <h3 className="text-[#C3B299] text-3xl md:text-5xl pb-10 font-bold">
            We Are Working 24/7
          </h3>
          <h5 className="pb-5 text-xl md:text-2xl ">Special opening hours</h5>
          <div className="flex-grow w-1/4 mx-auto border-t-2 border-gray-300"></div>
          <p className="pt-5 text-lg md:text-xl">
            Saturday 17th December: 9:30am - 8pm; <br />
            Saturday 24th December: 9:30am - 4pm; <br />
            Saturday 31th December: 9:30am - 4pm
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkingHours;
