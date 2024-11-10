import HeroSection from '@/components/HeroSection';
import Image from 'next/image';
import TabSection from '@/components/TabSection';
import { MdDeliveryDining } from 'react-icons/md';
import { FaAward } from 'react-icons/fa';
import { PiShoppingBagOpenFill } from 'react-icons/pi';
import FoodMenuSlider from '@/components/FoodMenuSlider';

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
          <div className="w-[300px] sm:w-[500px] lg:w-[900px] h-auto mx-auto">
            <Image
              src="/hero.png"
              alt="Hero Image"
              width={700}
              height={700}
              className="relative top-14 lg:top-0 lg:right-36 z-0"
            />
          </div>
        </div>
        <Image
          src="/off.svg"
          alt="Hero Image"
          width={150}
          height={150}
          className="absolute top-[76%] sm:top-[82%] md:top-[80%] lg:top-[68%] right-8 sm:right-10 md:right-44 lg:right-72 z-20 w-20 sm:w-24 md:w-28 lg:w-32"
        />
      </section>

      {/* About  */}
      <section id="about">
        <div className="flex justify-center items-center my-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl justify-center items-center">
            <div className="object-cover w-full h-full">
              <Image
                src="/about.png"
                alt="Hero Image"
                width={500}
                height={500}
                className="w-full"
              />
            </div>
            <div className="flex place-self-start">
              <TabSection />
            </div>
          </div>
        </div>

        {/* 3 icons */}
        <div className="flex justify-center items-center mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-black gap-4 max-w-7xl w-full">
            <div className="flex items-center space-x-4 ml-8">
              <MdDeliveryDining className="shadow-lg rounded-full p-6 text-8xl text-[#BD1F17]" />
              <div className="text-left">
                <h1 className="text-2xl font-bold text-black px-2">
                  FAST DELIVERY
                </h1>
                <p className="px-2">Within 30 Minutes</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 ml-8">
              <FaAward className="shadow-lg rounded-full p-6 text-8xl text-[#BD1F17]" />
              <div className="text-left">
                <h1 className="text-2xl font-bold text-black px-2">
                  ABSOLUTE DINING
                </h1>
                <p className="px-2">Best buffet restaurant</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 ml-8">
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
      <section id="menu" className="bg-[#FBF7F2] py-20">
        <div className="flex justify-center items-center">
          <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 max-w-7xl px-4">
            <div className="col-span-1 sm:col-span-2 md:col-span-2">
              <p className="text-[#BD1F17] font-bold text-center sm:text-left">
                🍕 Crispy, Every Bite Taste
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#BD1F17] my-2 text-center sm:text-left">
                POPULAR FOOD ITEMS
              </h1>
            </div>
          </div>
        </div>

        <div className="m-10">
          <FoodMenuSlider className="m-10 p-6" />
        </div>
      </section>

      {/* Contact Form  */}
      <section id="contact" className="">
        <div
          className="w-full h-auto bg-cover bg-center"
          style={{ backgroundImage: "url('/formbg.png')" }}
        >
          <div className="w-full h-full">{/* Your content here */}</div>
        </div>
      </section>

      {/* Review Section */}
      <section>
        <div className="flex justify-center items-center">
          <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 max-w-7xl px-4">
            <div className="col-span-1 sm:col-span-2 md:col-span-2">
              <p className="text-[#BD1F17] font-bold text-center sm:text-left">
                🍕 Crispy, Every Bite Taste
              </p>
              <h1 className="uppercase text-3xl sm:text-4xl font-bold text-[#BD1F17] my-2 text-center sm:text-left">
                What Some of my Customers Say
              </h1>
            </div>
          </div>
        </div>

        <div className="flex justify-center my-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 max-w-7xl justify-center items-center bg-[#FEBF00] bg-full">
            {/* Text */}
            <div className="pt-8 px-8 col-span-1 flex flex-col justify-center space-y-4">
              <p className="font-medium text-xl text-wrap">
                <span className="text-2xl">"</span>Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Nihil alias repellat eius
                doloribus eveniet nulla provident excepturi in soluta quibusdam
                facilis molestiae sed nostrum, repudiandae atque ipsa suscipit
                quo.
              </p>

              <div className="flex justify-between items-center pt-10">
                <div>
                  <h1 className="text-xl font-bold uppercase">
                    Shohorab H Shawon
                  </h1>
                  <h2 className="font-medium">Uttara, Dhaka</h2>
                </div>
                <div className="">
                  <Image
                    src="/profile.jpg"
                    alt="Hero Image"
                    width={44}
                    height={44}
                    className="rounded-full"
                  />
                </div>
              </div>

              <div className="">
                <div className="flex justify-end">
                  <hr className="w-12 h-1 bg-red-700 border-0 " />
                </div>
                <div className="">
                  <hr className="w-full h-0.5 mx-auto mb-4 bg-black border-0" />
                </div>
              </div>
            </div>

            {/* Video */}
            <div className="flex justify-center items-center h-full overflow-hidden col-span-2">
              <div className="relative w-full h-full">
                <video
                  className="object-cover w-full h-full pointer-events-none"
                  autoPlay
                  loop
                  muted
                  controls={false}
                  playsInline
                >
                  <source src="/video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-0 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer  */}
      <footer className="bg-[#BD1F17] text-white text-center py-4">
        <p>&copy; 2024 Restaurant</p>
      </footer>
    </div>
  );
}
