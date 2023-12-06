import React from "react";

const Hero = () => {
  return (
    <div className="w-[90%] lg:h-96 rounded-2xl p-8 mx-auto bg-[#495e57]  text-white flex gap-4 flex-col-reverse lg:flex-row items-center justify-center">
      <div>
        <h1 className="text-4xl text-[#f4ce14] font-semibold">Little Lemon</h1>
        <h3 className="text-2xl py-2">Chicago</h3>
        <p className="text-md my-2 w-[90%] lg:w-[70%]">
          We are a family owned mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <a
          href="/booking"
          className="inline-block px-5 py-2 my-4 bg-[#f4ce14] text-black rounded-2xl font-semibold"
        >
          Reserve a table
        </a>
      </div>
      <div className="w-full h-60 lg:h-full">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src="./dish-1.jpg"
          alt="featured dish"
        />
      </div>
    </div>
  );
};

export default Hero;
