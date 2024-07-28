// import React from 'react'

import { GiRazor } from "react-icons/gi";
import WordWithLines from "./WordWithLines";
import { MdChair } from "react-icons/md";
import { TbMassage, TbRazorElectric } from "react-icons/tb";
import { RiScissors2Fill } from "react-icons/ri";
import { FaCrutch } from "react-icons/fa";

const Service = () => {
  return (
    <div className="py-10">
      <WordWithLines text="Features" />
      <div className="w-full text-center">
        <h2 className="text-5xl font-bold pb-9">Our Services & Prices</h2>
        <p className="w-full md:w-2/3 mx-auto text-[#C3B299] text-xl pb-8">
          Wash + Cut, $13 . Wash and cut with electric trimmer and / or scissors
          with a razor finish. Shave, $15 . With blade. Preparation with foam
          and hot towel.
        </p>
      </div>
      <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-10 px-3 md:px-5">
        <div className="grid-cols-1 text-center pl-14 pr-10">
          <span className="text-center text-6xl w-full flex justify-center items-start">
            <MdChair />
          </span>
          <h3 className="text-3xl font-bold py-4">Hair Cut</h3>
          <p className="text-lg text-gray-600 ">
            Awesome and professional Haircut for only $15.
          </p>
        </div>
        <div className="grid-cols-1 text-center pl-14 pr-10">
          <span className="text-center text-6xl w-full flex justify-center items-start">
            <GiRazor />
          </span>
          <h3 className="text-3xl font-bold py-4">Moustache Trim</h3>
          <p className="text-lg text-gray-600">
            Awesome and professional Moustache Trim for only $7.
          </p>
        </div>
        <div className="grid-cols-1 text-center pl-14 pr-10">
          <span className="text-6xl text-center w-full flex justify-center items-start">
            <FaCrutch />
          </span>
          <h3 className="text-3xl font-bold py-4">Face Shave</h3>
          <p className="text-lg text-gray-600">
            Awesome and professional Facial Massage for only $20
          </p>
        </div>
        <div className="grid-cols-1 text-center pl-14 pr-10">
          <span className=" text-6xl text-center w-full flex justify-center items-start">
            <TbRazorElectric />
          </span>
          <h3 className="text-3xl font-bold py-4">Beard Trim</h3>
          <p className="text-lg text-gray-600">
            Awesome and professional BreadTrim for only $8
          </p>
        </div>
        <div className="grid-cols-1 text-center pl-14 pr-10">
          <span className="text-6xl text-center w-full flex justify-center items-start">
            <RiScissors2Fill />
          </span>
          <h3 className="text-3xl font-bold py-4">Clipper Cut</h3>
          <p className="text-lg text-gray-600">
            Awesome and professional Clipper Cut for only $14.
          </p>
        </div>
        <div className="grid-cols-1 text-center pl-14 pr-10">
          <span className="text-6xl text-center w-full flex justify-center items-start">
            <TbMassage />
          </span>
          <h3 className="text-3xl font-bold py-4">Facial Massage</h3>
          <p className="text-lg text-gray-600">
            Awesome and professional Facial Massage for only $20.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
