// import React from 'react'

const AboutHistory = () => {
  return (
    <div className="w-full lg:grid lg:grid-cols-2 grid-cols-1">
      <div className="w-full h-screen grid-cols-1 relative">
        <img
          src="https://t4.ftcdn.net/jpg/07/43/61/37/360_F_743613715_aBd8P9sOmVo0tvywj3cxVoZYEwzjPPRF.jpg"
          alt="Chair"
          className="w-full h-full absolute object-cover object-center"
        />
      </div>
      <div className="grid-cols-1 md:px-10 p-3 md:py-20 bg-black h-full flex flex-col justify-between ">
        <p className="underline text-[#C3B299]">Since 1979</p>
        <h2 className=" text-3xl md:text-5xl font-bold py-6 text-white">
          Our History
        </h2>
        <p className="text-justify text-white text-lg md:text-xl">
          The Gentleman Barber Shop is a classic upscale barbershop. We offer a
          variety of services, catering to everyone. Hounds is a
          gentleman&apos;s shop, reminiscent of the classic barbershop. We are
          striving to bring the memories back, with solely the clientele in
          mind. People pay for quality - Hounds is where you will get it. We are
          barbers who love our craft, providing top notch service that helps men
          Stay Sharp.
        </p>
      </div>
    </div>
  );
};

export default AboutHistory;
