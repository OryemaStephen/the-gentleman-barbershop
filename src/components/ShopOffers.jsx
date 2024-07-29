// import React from 'react'

import WordWithLeftLines from "./WordWithLeftLine";

const ShopOffers = () => {
  return (
    <div className="bg-black px-5 pt-5">
      <WordWithLeftLines text="Hot Prices" />
      <div className="pt-5">
        <h2 className="text-3xl md:text-5xl font-bold text-white md:pb-10">
          Our Offers
        </h2>
        <div className="w-full pb-5 text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto">
          <div className="grid-cols-1 text-center py-10 border-b-[1px] sm:border-b-0 md:border-l-[1px] border-[#C3B299]">
            <h2 className="text-[#C3B299] text-2xl md:text-3xl pb-5">
              Hair Cut - Bread Trim $20
            </h2>
            <p className="text-base md:text-lg pb-3">Haircut & Bread Trim</p>
            <p className="text-base md:text-lg pb-3">In special offer</p>
            <p className="text-base md:text-lg pb-3">Until 30th June</p>
          </div>
          <div className="grid-cols-1 text-center py-10 border-b-[1px] sm:border-b-0 md:border-l-[1px] md:border-r-[1px] border-[#C3B299]">
            <h2 className="text-[#C3B299] text-2xl md:text-3xl pb-5">
              Head Massage $10
            </h2>
            <p className="text-base md:text-lg pb-3">Head Massage</p>
            <p className="text-base md:text-lg pb-3">In special offer</p>
            <p className="text-base md:text-lg pb-3">Until 09th July</p>
          </div>
          <div className="grid-cols-1 text-center py-10 border-b-[1px] sm:border-b-0 md:border-r-[1px] border-[#C3B299]">
            <h2 className="text-[#C3B299] text-2xl md:text-3xl pb-5">
              Mouslache Trim $8
            </h2>
            <p className="text-base md:text-lg pb-3">Moustache Trim</p>
            <p className="text-base md:text-lg pb-3">In special offer</p>
            <p className="text-base md:text-lg pb-3">Until 09th July</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopOffers;
