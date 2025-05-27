import React from "react";
import TimeFilterDropdown from "./TimeFilterDropdown";
import SearchBar from "./SearchBar";
import HeaderTabs from "./HeaderTabs";
import SlideEsport from "./SlideEsport";
import MarketSelector from "./MarketSelector";
import MarketGameCard from "./BettingCard";

export default function ESports() {
  return (
    <div className="bg-[#0B1120]  text-hederColor3">
      {/* Filters and Search */}
      <div className="p-2 space-y-4">
        <div className="flex justify-start">
          <TimeFilterDropdown />
        </div>
        <div>
          <SearchBar />
        </div>
      </div>

      {/* Full-width Tabs */}
      <div className="w-full">
        <HeaderTabs />
      </div>
      <div className="w-full">
        <SlideEsport />
      </div>
      <div className="w-full">
        <MarketSelector />
      </div>
      <div className="w-full">
        <MarketGameCard />
      </div>
    </div>
  );
}
