import React, { useState } from "react";
import SliderImage1 from "../assets/sliderImage1.webp";
import SliderImage2 from "../assets/sliderImage2.webp";
import SliderImage3 from "../assets/sliderImage3.webp";

import GameGallery1 from "../assets/GameGalleryImage1.webp";
import GameGallery2 from "../assets/GameGalleryImage2.webp";
import GameGallery3 from "../assets/GameGalleryImage3.webp";
import GameGallery4 from "../assets/GameGalleryImage4.webp";
import GameGallery5 from "../assets/GameGalleryImage5.webp";
import GameGallery6 from "../assets/GameGalleryImage6.gif";
import GameGallery7 from "../assets/GameGalleryImage7.gif";

const images = [
  { src: GameGallery1, title: "Richie Fruits Roulette" },
  { src: GameGallery7, title: "Poly Blackjack" },
  { src: GameGallery2, title: "Poly Roulette" },
  { src: GameGallery3, title: "Dreamz Blackjack" },
  { src: GameGallery6, title: "Dreamz Roulette" },
  { src: GameGallery4, title: "Dreamz Roulette" },
  { src: GameGallery5, title: "Dreamz Roulette" },
  { src: SliderImage3, title: "VIP Ortak" },
  { src: SliderImage1, title: "Richie Wheel" },
  { src: SliderImage2, title: "Dreamz Dealer" },
  { src: GameGallery1, title: "Richie Fruits Roulette" },
  { src: GameGallery7, title: "Poly Blackjack" },
  { src: GameGallery2, title: "Poly Roulette" },
  { src: GameGallery3, title: "Dreamz Blackjack" },
  { src: GameGallery6, title: "Dreamz Roulette" },
  { src: GameGallery4, title: "Dreamz Roulette" },
];

const GameGallery = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="p-4">
      <div
        className="grid gap-4 
        grid-cols-1 
  xs3:grid-cols-2 
  sm3:grid-cols-3 
  sm:grid-cols-4 
  x5:grid-cols-5 
  x6:grid-cols-6 
  x7:grid-cols-7 
  x8:grid-cols-8 
   mx-auto"
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="relative rounded-[10px] overflow-hidden shadow-lg cursor-pointer aspect-[4/3]"
            onClick={() => handleClick(index)}
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-full object-cover"
            />
            {activeIndex === index && (
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white  p-2">
                <div className="absolute top-2 left-2 text-xl">☆</div>
                <div className="absolute top-2 right-1 text-xl">ⓘ</div>
                <div className="text-xsm m-auto text-center">{img.title}</div>
                <button className="bg-sky-400 px-6 py-2   rounded text-black font-[100px] hover:bg-sky-300 w-[144px] h-[37px]">
                  PLAY
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameGallery;
