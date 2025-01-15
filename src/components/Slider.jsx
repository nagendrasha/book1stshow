import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import 'swiper/css/pagination';

const Slider = () => {
  return (
    <div className="bg-gray-100 py-5">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="flex items-center  bg-gray-900 text-white p-5 rounded-lg shadow-lg">
            <img
              src={banner1} 
              alt="Satinder Sartaaj"
              className="h-100 rounded-md shadow-md w-full"

            />
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="flex items-center justify-between bg-gray-900 text-white p-5 rounded-lg shadow-lg">
            
            <img
              src={banner2} 
              alt="Event"
              className="h-100 rounded-md shadow-md w-full"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
