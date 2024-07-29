// import React from 'react'

import WordWithLines from "./WordWithLines";
import client1 from "../assets/client1.jpg";
import client2 from "../assets/client2.jpg";
import client3 from "../assets/client3.jpg";
import client4 from "../assets/client4.jpg";

const Brands = () => {
  const clients = [
    { client: client1 },
    { client: client2 },
    { client: client3 },
    { client: client4 },
  ];
  return (
    <div className="w-full h-full p-5">
      <WordWithLines text="Brands" />
      <div className="w-full">
        <p className="text-[#C3B299] md:text-3xl text-xl text-center">
          we believe good service is good business
        </p>
        <div className="flex justify-around flex-wrap items-center gap-5 pt-10">
          {clients.map((client, index) => (
            <div key={index}>
              <img src={client.client} alt="Client" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
