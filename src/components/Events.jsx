import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import fateh from '../assets/fatesh.jpg';
import gamechanger from '../assets/gamechanger.jpg';
import puspa2 from '../assets/puspa2.jpg';
import mufasa from '../assets/mufasa.jpg';
import marco from '../assets/marco.jpg';

const events = [
  {
    title: "Fateh",
    rating: "8.6/10",
    votes: "2.6K Votes",
    genre: "Action/Thriller",
    img: fateh, // Replace with actual image
    promoted: true,
  },
  {
    title: "Game Changer",
    rating: "7.5/10",
    votes: "37.2K Votes",
    genre: "Action/Drama/Political",
    img:gamechanger,
  },
  {
    title: "Pushpa 2: The Rule",
    rating: "8.3/10",
    votes: "438.7K Votes",
    genre: "Action/Thriller",
    img: puspa2,
  },
  {
    title: "Mufasa: The Lion King",
    rating: "8.4/10",
    votes: "63.4K Votes",
    genre: "Adventure/Animation/Drama",
    img: mufasa,
  },
  {
    title: "Marco",
    rating: "8.6/10",
    votes: "95.4K Votes",
    genre: "Action/Thriller",
    img: marco,
  },
];

const Events = () => (
  <div className="bg-gray-100 py-10 px-10">
    <div className="flex justify-between items-center mb-5">
      <h2 className="text-2xl font-semibold">The Best of Live Events</h2>
      <a href="#" className="text-red-500 text-sm hover:underline">
        See All &raquo;
      </a>
    </div>
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      }}
      className="w-full"
    >
      {events.map((event, index) => (
        <SwiperSlide key={index} className="flex">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img
                src={event.img}
                alt={event.title}
                className="w-100 h-100 object-cover"
              />
              {event.promoted && (
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  PROMOTED
                </span>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">{event.title}</h3>
              <p className="text-sm text-gray-600">{event.genre}</p>
              <div className="flex items-center mt-2">
                <span className="text-red-500 font-semibold mr-1">&#9733;</span>
                <span className="text-sm font-medium text-gray-700">
                  {event.rating}
                </span>
              </div>
              <p className="text-sm text-gray-500">{event.votes}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default Events;
