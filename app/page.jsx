import HeroSection from '@/components/HeroSection';
import Image from 'next/image';
import TabSection from '@/components/TabSection';
import { MdDeliveryDining } from 'react-icons/md';
import { FaAward } from 'react-icons/fa';
import { PiShoppingBagOpenFill } from 'react-icons/pi';
import ReservationForm from '@/components/ReservationForm';

export default function Home() {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#BD1F17] to-[#A51D13] h-screen flex justify-center items-center mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-6 max-w-7xl justify-center items-center overflow-hidden">
          <div className="col-span-4 items-center text-center lg:text-start z-20">
            <div>
              <h1 className="text-white text-4xl sm:text-5xl md:text-[66px] lg:text-[76px] font-bold bg-[#BD1F17] bg-opacity-60">
                TASTE THE AUTHENTIC SAUDI CUISINE
              </h1>
              <p className="text-white text-2xl my-9">
                Among the best Saudi chefs in the world, serving you something
                beyond flavor.
              </p>
              <HeroSection />
            </div>
          </div>
          <div className="w-[300px] sm:w-[500px] lg:w-[900px] mx-auto">
            <Image
              src="/hero.png"
              alt="Hero Image"
              width={500}
              height={500}
              className="relative top-14 lg:top-0 lg:right-36 z-0"
            />
          </div>
        </div>
      </section>

      {/* About  */}
      <section id="about">
        <div className="flex justify-center my-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl justify-center items-center">
            <div className="mx-5">
              <Image
                src="/hero.png"
                alt="Hero Image"
                width={500}
                height={500}
                className="w-full"
              />
            </div>
            <div className="mx-5 flex place-self-start">
              <TabSection />
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-black gap-4 max-w-7xl w-full">
            <div className="flex flex-row items-center space-x-4">
              <MdDeliveryDining className="shadow-lg rounded-full p-6 text-8xl text-[#BD1F17]" />
              <div className="text-left">
                <h1 className="text-2xl font-bold text-black px-2">
                  FAST DELIVERY
                </h1>
                <p className="px-2">Within 30 Minutes</p>
              </div>
            </div>
            <div className="flex flex-row items-center space-x-4">
              <FaAward className="shadow-lg rounded-full p-6 text-8xl text-[#BD1F17]" />
              <div className="text-left">
                <h1 className="text-2xl font-bold text-black px-2">
                  ABSOLUTE DINING
                </h1>
                <p className="px-2">Best buffet restaurant</p>
              </div>
            </div>
            <div className="flex flex-row items-center space-x-4">
              <PiShoppingBagOpenFill className="shadow-lg rounded-full p-6 text-8xl text-[#BD1F17]" />
              <div className="text-left">
                <h1 className="text-2xl font-bold text-black px-2">
                  PICKUP DELIVERY
                </h1>
                <p className="px-2">Grab your food order</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu  */}
      <section id="menu" className="bg-[#FBF7F2]">
        <div className="flex justify-center items-center">
          <div className="p-10 grid grid-cols-6 max-w-7xl">
            <div className="col-span-2">
              <p className="text-[#BD1F17] font-bold">
                Crispy, Every Bite Taste
              </p>
              <h1 className="text-4xl font-bold text-[#BD1F17] my-2">
                POPULAR FOOD ITEMS
              </h1>
            </div>
          </div>
        </div>
        <div className=" ">
          <h1 className="text-3xl text-center font-bold py-10">
            Our Food Menu
          </h1>
        </div>
      </section>

      {/* Contact  */}
      <section id="contact" className="">
        <ReservationForm />
        <div></div>
      </section>

      <section></section>

      {/* Footer  */}
      <footer className="bg-[#BD1F17] text-white text-center py-4">
        <p>&copy; 2022 Restaurant</p>
      </footer>
    </div>
  );
}
