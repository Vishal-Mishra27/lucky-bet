import React, { useState, useRef } from "react";
import "./Game1.css";
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
import { getGameMenuItems } from "./Data";

export default function GameMenu({ maxItems }) {
  const { t } = useTranslation();
  const gameMenuItems = getGameMenuItems(t); // ✅ now valid

  const [selectedGame, setSelectedGame] = useState(gameMenuItems[0].id);
  const scrollContainerRef = useRef(null);
  const selectedItemRef = useRef(null);

  const displayedItems = maxItems
    ? gameMenuItems.slice(0, maxItems)
    : gameMenuItems;

  const getGameIcon = (gameName) => {
    if (!gameName || typeof gameName !== "string") return faGamepad;
    const name = gameName.toLowerCase();
    if (name.includes("football") && !name.includes("e-football"))
      return faFutbol;
    if (name.includes("basketball")) return faBasketballBall;
    if (name.includes("tennis") && !name.includes("table"))
      return faTableTennis;
    if (name.includes("volleyball")) return faVolleyballBall;
    if (name.includes("ice hockey")) return faHockeyPuck;
    if (name.includes("baseball")) return faBaseballBall;
    if (name.includes("table tennis")) return faTableTennisPaddleBall;
    if (name.includes("badminton")) return faTableTennis;
    if (name.includes("cricket")) return faGamepad;
    if (name.includes("darts")) return faUsers;
    if (
      name.includes("counter strike") ||
      name.includes("dota") ||
      name.includes("league of legends") ||
      name.includes("king of glory") ||
      name.includes("e-football")
    )
      return faHeadset;
    if (name.includes("sports")) return faHeadset;
    if (name.includes("racing")) return faFlagCheckered;
    if (name.includes("boxing")) return faFistRaised;
    return faGamepad;
  };

  const handleGameSelect = (gameId) => {
    setSelectedGame(gameId);
    // console.log("selectedGame", selectedGame);
  };

  return (
    <div className="game-menu-wrapper">
      <div className="game-menu-outer-container">
        <div className="game-menu-container" ref={scrollContainerRef}>
          {displayedItems.map((item) => {
            const isSelected = selectedGame === item.id;

            return (
              <div
                key={item.id}
                ref={isSelected ? selectedItemRef : null}
                className={`game-item ${
                  isSelected ? "selected sticky-selected" : ""
                }`}
                onClick={() => handleGameSelect(item.id)}
                style={
                  isSelected
                    ? {
                        backgroundColor: item.selectedColor,
                        borderColor: item.selectedColor,
                      }
                    : {}
                }
              >
                <div className="game-item-content-wrapper">
                  <div className="game-item-overlay">
                    <div className="icon-container">
                      <FontAwesomeIcon
                        icon={getGameIcon(item.name)}
                        className="game-icon"
                        style={{
                          color: isSelected ? "#fff" : item.selectedColor,
                        }}
                      />
                      {item.notificationCount > 0 && (
                        <span className="notification-badge">
                          {item.notificationCount > 99
                            ? "99+"
                            : item.notificationCount}
                        </span>
                      )}
                    </div>
                    <h3
                      className="game-name"
                      style={isSelected ? { color: "#fff" } : {}}
                    >
                      {item.name}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
