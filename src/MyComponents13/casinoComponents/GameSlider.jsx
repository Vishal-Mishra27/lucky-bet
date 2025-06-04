
import React, { useState, useRef, useEffect } from "react";
import "./GameSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// [Icons list omitted for brevity]
import {
  faFutbol,
  faBasketballBall,
  faGamepad,
  faTableTennis,
  faFlagCheckered,
  faFistRaised,
  faHeadset,
  faVolleyballBall,
  faHockeyPuck,
  faBaseballBall,
  faTableTennisPaddleBall,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { getGameMenuItems } from "../../MyComponent/Data";

export default function GameSlider() {
  const { t } = useTranslation();
    const gameMenuItems = getGameMenuItems(t); // ✅ now valid

  const [selectedGame, setSelectedGame] = useState(gameMenuItems[0].id);

  const scrollContainerRef = useRef(null);
  const selectedItemRef = useRef(null);

  const getGameIcon = (gameName) => {
    if (typeof gameName !== 'string') return faGamepad;
    const name = gameName.toLowerCase();
    if (name.includes("football") && !name.includes("e-football")) return faFutbol;
    if (name.includes("basketball")) return faBasketballBall;
    if (name.includes("tennis") && !name.includes("table")) return faTableTennis;
    if (name.includes("volleyball")) return faVolleyballBall;
    if (name.includes("ice hockey")) return faHockeyPuck;
    if (name.includes("baseball")) return faBaseballBall;
    if (name.includes("table tennis")) return faTableTennisPaddleBall;
    if (name.includes("badminton")) return faTableTennis; // Using TableTennis as placeholder
    if (name.includes("cricket")) return faGamepad;
    if (name.includes("darts")) return faUsers;
    if (name.includes("counter strike") || name.includes("dota") || name.includes("league of legends") || name.includes("king of glory") || name.includes("e-football")) return faHeadset;
    if (name.includes("sports")) return faHeadset; // General E-Sports
    if (name.includes("racing")) return faFlagCheckered;
    if (name.includes("boxing")) return faFistRaised;
    return faGamepad;
  };

  const handleGameSelect = (gameId) => {
    setSelectedGame(gameId);
    console.log("selectedGame", selectedGame)
  };

  return (
    <div className="relative text-white py-2 lg:px-4">
      {/* Left Scroll Button */}

      {/* Scrollable Game Menu */}
      <div
        className="max-w-full overflow-x-auto px-1 flex gap-1 scrollbar-hide lg:pr-10 lg:pl-10"
        ref={scrollContainerRef}
      >
        {gameMenuItems.map((item) => {
          const isSelected = selectedGame === item.id;
          return (
            <div
              key={item.id}
              ref={isSelected ? selectedItemRef : null}
              onClick={() => handleGameSelect(item.id)}
              className={`h-16 rounded-lg border-2 overflow-hidden cursor-pointer flex items-center justify-center transition-all lg:h-10 lg:rounded lg:border-none lg:mt-5
              ${
                item.name?.length > 14
                  ? "min-w-[150px]"
                  : item.name?.length > 10
                  ? "min-w-[90px]"
                  : "min-w-[70px]"
              }
              ${
                isSelected
                  ? "bg-[#52b8d9] text-black sticky-item"
                  : "bg-[#1a253a] text-[#8d929d] hover:bg-[#3a404a] unselected-item"
              }
            `}
            >
              <div
                className="relative flex flex-col items-center justify-center text-center w-full px-2 py-1"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 rounded-lg transition-all duration-300" />
                <div className="relative flex flex-col lg:gap-1 items-center lg:flex-row">
                  <div className="relative inline-block mb-0">
                    <FontAwesomeIcon
                      icon={getGameIcon(item.name)}
                      className="text-2xl lg:text-[13px] transition-transform"
                      style={{
                        color: isSelected
                          ? "#000"
                          : "#8d929d",
                      }}
                    />
                  </div>
                  <h3
                    className={`text-[10px] leading-[1.2] font-bold mt-1 lg:text-[13px] ${
                      isSelected ? "text-black" : "text-[#8d929d]"
                    }`}
                  >
                    {item.name}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Right Scroll Button */}
    </div>
  );
}

