import React, { useState, useEffect, useRef } from "react";
import "./Table.css"; // Assuming your CSS is named Table.css
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faLock,
  faCircle, 
} from "@fortawesome/free-solid-svg-icons";

const marketOptions = [
  { id: "WINNER", label: "WINNER", headers: ["W1", "X", "W2"] },
  { id: "HANDICAP", label: "HANDICAP", headers: ["HOME", "AWAY"] },
  { id: "TOTAL", label: "TOTAL", headers: ["OVER", "UNDER"] },
];


const sampleMatchData = {
  1: [
    // Corresponds to Russia, Liga Pro (league.id)
    {
      id: "match1",
      team1: "Izumrud-pro",
      team2: "Djoker-pro",
      score1: "0",
      score2: "0",
      time: "0:0, (0:0) 3'",
      odds: [null, null, null],
      isLive: true,
      isLocked: false,
      lockedValue: "+35",
    },
  ],
  2: [
    // Ethiopia
    {
      id: "match2",
      team1: "Ethiopian Coffee",
      team2: "Saint George",
      score1: "1",
      score2: "1",
      time: "2nd Half,7:5, (4:2) 5'",
      odds: ["1.85", "3.20", "4.00"],
      isLive: true,
      isLocked: true,
      lockedValue: "+40",
    },
  ],
  3: [
    // Indonesia
    {
      id: "match2",
      team1: "Indonesia Coffee",
      team2: "Saint George",
      score1: "10",
      score2: "5",
      time: "FT",
      odds: ["2.05", "4.20", "2.00"],
      isLive: false,
      isLocked: true,
      lockedValue: "+55",
    },
  ],
  4: [
    // Nepal
    {
      id: "match2",
      team1: "Nepal Coffee",
      team2: "Saint George",
      score1: "10",
      score2: "5",
      time: "FT",
      odds: ["2.05", "4.20", "2.00"],
      isLive: false,
      isLocked: true,
      lockedValue: "+15",
    },
  ],
  // Add match data for other league IDs
};

const leagueData = [
  {
    id: "1",
    country: "Russia",
    league: "Liga Pro",
    flag: "../public/flag/Russia flag.png",
  },
  {
    id: "2",
    country: "Ethiopia",
    league: "Premier League",
    flag: "../public/flag/Ethiopia flag.png",
  },
  {
    id: "3",
    country: "Indonesia",
    league: "Liga 4",
    flag: "../public/flag/Indonasia flag.png", // Corrected path
  },
  {
    id: "4",
    country: "Nepal",
    league: "B-Division League",
    flag: "../public/flag/nepal flag.jpeg", // Corrected path
  },
];

export default function Table() {
  const [selectedMarket, setSelectedMarket] = useState(marketOptions[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // State to manage which league items are expanded
  const [expandedLeagues, setExpandedLeagues] = useState({});

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleMarketSelect = (market) => {
    setSelectedMarket(market);
    setIsDropdownOpen(false);
  };

  // Function to toggle league expansion
  const toggleLeagueExpansion = (leagueId) => {
    setExpandedLeagues((prev) => ({
      ...prev,
      [leagueId]: !prev[leagueId],
    }));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="market-display-wrapper">
      <div className="market-header">
        <div className="market-selector-container" ref={dropdownRef}>
          <button className="market-selector-button" onClick={toggleDropdown}>
            <span>{selectedMarket.label}</span>
            <FontAwesomeIcon
              icon={isDropdownOpen ? faChevronUp : faChevronDown}
              className="dropdown-chevron"
            />
          </button>
          {isDropdownOpen && (
            <ul className="market-dropdown-list">
              {marketOptions.map((option) => (
                <li
                  key={option.id}
                  onClick={() => handleMarketSelect(option)}
                  className={selectedMarket.id === option.id ? "active" : ""}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="column-headers">
          {selectedMarket.headers.map((header) => (
            <span key={header} className="column-header-item">
              {header}
            </span>
          ))}
        </div>
      </div>

      {/* MODIFIED LEAGUE LIST SECTION */}
      <div className="market-league-separator"></div>
      <div className="league-list">
        {leagueData.map((league) => {
          const isExpanded = !!expandedLeagues[league.id];
          const matches = sampleMatchData[league.id] || []; // Get matches for this league

          return (
            <div key={league.id} className="league-item-container">
              <div
                className="league-item-header"
                onClick={() => toggleLeagueExpansion(league.id)}
              >
                <div className="league-info-left">
                  <img
                    src={league.flag}
                    alt={`${league.country} flag`}
                    className="country-flag"
                  />
                  <div className="league-text">
                    <span className="country-name">{league.country}</span>
                    <span className="league-name">{league.league}</span>
                  </div>
                </div>
                <FontAwesomeIcon
                  icon={isExpanded ? faChevronUp : faChevronDown} // Dynamic icon
                  className="league-expansion-chevron"
                />
              </div>
              {isExpanded && matches.length > 0 && (
                <div className="match-details-container">
                  {matches.map((match) => (
                    <div key={match.id} className="match-row">
                      <div className="match-info">
                        {/* ... team names and scores ... */}
                        <div className="team-names">
                          <span>{match.team1}</span>
                          <span>{match.team2}</span>
                        </div>
                        <div className="team-scores">
                          <span>{match.score1}</span>
                          <span>{match.score2}</span>
                        </div>
                      </div>

                      {/* THIS IS THE CORRECTED SECTION */}
                      <div
                        className={`match-odds headers-${selectedMarket.headers.length}`}
                      >
                        {selectedMarket.headers.map((headerKey, index) => (
                          <div key={headerKey} className="odds-box">
                            {match.odds &&
                            match.odds[index] !== null &&
                            match.odds[index] !== undefined
                              ? match.odds[index]
                              : ""}
                          </div>
                        ))}
                      </div>
                      {/* END OF CORRECTED SECTION */}

                      <div className="match-footer">
                        {/* ... match time and lock icon ... */}
                        <div className="match-time">
                          {match.isLive && (
                            <FontAwesomeIcon
                              icon={faCircle}
                              className="live-indicator"
                            />
                          )}
                          <span>{match.time}</span>
                        </div>
                        {match.isLocked ? (
                          <FontAwesomeIcon
                            icon={faLock}
                            className="lock-icon"
                          />
                        ) : (
                          <span className="unlocked-value">
                            {match.lockedValue}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                  {/* <div className="market-league-separator"></div> */}
                </div>
              )}
              {isExpanded && matches.length === 0 && (
                <div className="no-matches-message">
                  No matches available for this league.
                </div>
              )}
              <div className="market-league-separator-data"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
