import React from "react";

import SearchBar from "./SearchBar";
import HeaderTabs from "./HeaderTabs";
import SlideEsport from "./SlideEsport";
import MarketSelector from "./MarketSelector";
import Result from "./ResultofEsport";
// import MarketGameCard from "./BettingCard";

export default function ResultEsport() {
  return (
    <div className="bg-[#0B1120]  text-hederColor3">
      {/* Filters and Search */}
      <div className="p-2 space-y-4">
        <div>
          <SearchBar />
        </div>
      </div>

      {/* Full-width Tabs */}
      <div className="w-full">
        <HeaderTabs />
      </div>

      <div className="w-full">
        <Result />
      </div>
    </div>
  );
}
