// import React from 'react'
import bg from "../assets/workinghours.jpg";

const WorkingHours = () => {
  return (
    <div className="relative w-full h-[80vh]">
      <div
        className="w-full h-full bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white">
        <div className="w-full h-full text-center flex flex-col justify-between py-10 md:py-20 ">
          <h3 className="text-[#C3B299] text-3xl md:text-5xl pb-10 font-bold">
            We Are Working 24/7
          </h3>
          <h5 className="text-xl md:text-2xl pb-5 ">Special opening hours</h5>
          <div className="flex-grow border-t-2 w-1/4 mx-auto border-gray-300"></div>
          <p className="text-lg md:text-xl pt-5">
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
