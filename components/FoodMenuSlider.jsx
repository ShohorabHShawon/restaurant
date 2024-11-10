'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

const foodItems = [
  {
    image: '/pizza.png',
    title: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
  },
  {
    image: '/burger.png',
    title: 'Cheeseburger',
    description: 'Juicy beef patty with cheddar, lettuce, and tomato.',
  },
  {
    image: '/pizza.png',
    title: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
  },
  {
    image: '/burger.png',
    title: 'Cheeseburger',
    description: 'Juicy beef patty with cheddar, lettuce, and tomato.',
  },
  {
    image: '/pizza.png',
    title: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
  },
  {
    image: '/burger.png',
    title: 'Cheeseburger',
    description: 'Juicy beef patty with cheddar, lettuce, and tomato.',
  },
  {
    image: '/pizza.png',
    title: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
  },
  {
    image: '/burger.png',
    title: 'Cheeseburger',
    description: 'Juicy beef patty with cheddar, lettuce, and tomato.',
  },
  {
    image: '/pizza.png',
    title: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
  },
  {
    image: '/burger.png',
    title: 'Cheeseburger',
    description: 'Juicy beef patty with cheddar, lettuce, and tomato.',
  },
];

const FoodMenuSlider = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        style={{
          '--swiper-navigation-color': '#BD1F17',
          '--swiper-navigation-size': '24px',
          '--swiper-pagination-color': '#BD1F17',
          '--swiper-pagination-bullet-inactive-color': '#ddd',
          '--swiper-pagination-bullet-inactive-opacity': '0.5',
        }}
      >
        {foodItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center justify-center text-center mb-24 p-4 bg-white rounded-lg shadow-md h-full">
              <div className="flex justify-center items-center w-full h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
              <hr className="w-20 h-2 mx-auto my-4 bg-red-600 border-0" />
              <h3 className="text-lg font-bold mt-4">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FoodMenuSlider;
