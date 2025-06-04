import React, { useState, useRef, useEffect } from "react";
import './SliderGame.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
import { getGameMenuItems } from "../MyComponent/Data";

export default function GameMenu() {
    const { t } = useTranslation();
    const gameMenuItems = getGameMenuItems(t); // ✅ now valid


  const [selectedGame, setSelectedGame] = useState(gameMenuItems[0].id);
  const [isSticky, setIsSticky] = useState(false);
  const scrollContainerRef = useRef(null);
  const selectedItemRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const selected = selectedItemRef.current;
      const container = scrollContainerRef.current;
      if (!selected || !container) return;

      const selectedRect = selected.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      const touchingLeft = selectedRect.left <= containerRect.left + 1;
      const touchingRight = selectedRect.right >= containerRect.right - 1;

      selected.classList.toggle("sticky-left", touchingLeft);
      selected.classList.toggle("sticky-right", touchingRight);
    };

    const container = scrollContainerRef.current;
    container?.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => container?.removeEventListener("scroll", handleScroll);
  }, [selectedGame]);
  

  const getGameIcon = (name) => {
    if (typeof name !== "string") return faGamepad;

    const lower = name.toLowerCase();
    if (lower.includes("football") && !lower.includes("e-football"))
      return faFutbol;
    if (lower.includes("basketball")) return faBasketballBall;
    if (lower.includes("tennis") && !lower.includes("table"))
      return faTableTennis;
    if (lower.includes("volleyball")) return faVolleyballBall;
    if (lower.includes("ice hockey")) return faHockeyPuck;
    if (lower.includes("baseball")) return faBaseballBall;
    if (lower.includes("table tennis")) return faTableTennisPaddleBall;
    if (lower.includes("badminton")) return faTableTennis;
    if (lower.includes("cricket")) return faGamepad;
    if (lower.includes("darts")) return faUsers;
    if (
      lower.includes("counter strike") ||
      lower.includes("dota") ||
      lower.includes("league") ||
      lower.includes("king") ||
      lower.includes("e-football")
    )
      return faHeadset;
    if (lower.includes("racing")) return faFlagCheckered;
    if (lower.includes("boxing")) return faFistRaised;
    return faGamepad;
  };

  useEffect(() => {
    if (selectedItemRef.current) {
      selectedItemRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center", // or 'start', 'nearest', etc.
        block: "nearest",
      });
    }
  }, [selectedGame]);
  

  const handleGameSelect = (gameId) => {
    setSelectedGame(gameId);
  };

  const [showLeftButton, setShowLeftButton] = useState(false);
  useEffect(() => {
    const container = scrollContainerRef.current;

    const checkScrollPosition = () => {
      if (!container) return;
      setShowLeftButton(container.scrollLeft > 10); // 10px buffer
    };

    container?.addEventListener("scroll", checkScrollPosition);
    checkScrollPosition(); // Initial check

    return () => container?.removeEventListener("scroll", checkScrollPosition);
  }, []);
  
  return (
    <div className="relative text-white py-2 lg:px-4">
      {/* Left Scroll Button */}
      {showLeftButton &&  <button
        onClick={() =>
          scrollContainerRef.current.scrollBy({
            left: -150,
            top:100,
            behavior: "smooth",
          })
        }
        className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#07122C] hover:bg-[#11264d] p-2 rounded-full shadow-md mt-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>}

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
                <div
                  className={`absolute inset-0 rounded-lg transition-all duration-300`}
                ></div>
                <div className="relative flex flex-col lg:gap-1 items-center lg:flex-row">
                  <div className="relative inline-block mb-0">
                    <FontAwesomeIcon
                      icon={getGameIcon(item.name)}
                      className="text-2xl lg:text-[13px] transition-transform"
                      style={{ color: isSelected ? "black" : "#8d929d" }}
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
      <button
        onClick={() =>
          scrollContainerRef.current.scrollBy({ left: 150, behavior: "smooth" })
        }
        className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#07122C] hover:bg-[#11264d] p-2 rounded-full shadow-md mt-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
