// import React from 'react'

import WordWithLines from "./WordWithLines"

const AboutShop = () => {
  return (
    <div className="container mx-auto p-4">
      <WordWithLines text="Introducing" />
      <div className=" w-full text-center">
        <h2 className="text-5xl font-bold pb-9">The Gentleman Barber Shop</h2>
        <p className="w-2/3 mx-auto text-[#C3B299] text-xl pb-8">
            A barber is a person whose occupation is mainly to cut, 
            dress, groom, style and shave men&apos;s and boys&apos; hair. 
            A barber&apos;s place of work is known as a ``barber shop``
        </p>
        <button type="button" className="border-2 border-black px-10 py-3 rounded hover:border-[#C3B299] hover:bg-[#C3B299] transition-colors duration-500 ease-in-out">Learn More</button>
      </div>
    </div>
  )
}

export default AboutShop