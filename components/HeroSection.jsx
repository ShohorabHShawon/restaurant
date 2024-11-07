import Image from 'next/image';
import React from 'react';

function HeroSection() {
  return (
    <>
      <div className="grid grid-cols-6 items-center max-w-7xl z-20">
        <div className="col-span-4">
          <h1 className="text-white text-[76px] font-bold bg-[#BD1F17] bg-opacity-60">
            TASTE THE AUTHENTIC SAUDI CUISINE
          </h1>
          <p className="text-white text-2xl my-9">
            Among the best Saudi chefs in the world, serving you something
            beyond flavor.
          </p>
          <button className="bg-[#FEBF00] text-black font-bold px-4 py-3">
            EXPLORE MENU
          </button>
        </div>
      </div>
      <div>
        <Image
          src="/hero.png"
          alt="Hero Image"
          width={500}
          height={500}
          className="fixed right-80 top-52 z-0 w-2/6"
        />
      </div>
    </>
  );
}

export default HeroSection;
