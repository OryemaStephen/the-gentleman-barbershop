// import React from 'react'

import { FaFacebook, FaLinkedin, FaSnapchat, FaTwitter } from "react-icons/fa";
import WordWithLines from "./WordWithLines";

const ContactSocial = () => {
  return (
    <div className="py-5">
      <WordWithLines text="Connect With Us" />
      <div className="w-full md:w-1/2 h-full flex justify-around items-center mx-auto py-10">
        <span className=" text-3xl md:text-5xl text-[#767675] hover:text-[#C3B299]">
          <a href="#">
            <FaFacebook />
          </a>
        </span>
        <span className="text-3xl md:text-5xl text-[#767675] hover:text-[#C3B299]">
          <a href="#">
            <FaTwitter />
          </a>
        </span>
        <span className="text-3xl md:text-5xl text-[#767675] hover:text-[#C3B299]">
          <a href="#">
            <FaSnapchat />
          </a>
        </span>
        <span className="text-3xl md:text-5xl text-[#767675] hover:text-[#C3B299]">
          <a href="#">
            <FaLinkedin />
          </a>
        </span>
      </div>
    </div>
  );
};

export default ContactSocial;
