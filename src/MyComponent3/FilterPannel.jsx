import { useState, useRef } from "react";
import { Listbox } from "@headlessui/react";
import { Filter, CalendarDays, ChevronDown, ChevronUp, X } from "lucide-react";

const allSports = [
  "Football",
  "Ice Hockey",
  "Basketball",
  "Tennis",
  "Volleyball",
  "American Football",
  "Aussie Rules",
  "Badminton",
  "Baseball",
];

const competitions = ["All", "Champions League", "Premier League", "La Liga"];


export default function FilterPannel() {
  const [startDate, setStartDate] = useState("2025-05-24");
  const [endDate, setEndDate] = useState("2025-05-24");
  const [selectedSport, setSelectedSport] = useState("Football");
  const [selectedCompetition, setSelectedCompetition] = useState("All");
  const [isExpanded, setIsExpanded] = useState(false);
  const [sportQuery, setSportQuery] = useState("");

  const startDateRef = useRef(null);
  const endDateRef = useRef(null);

  const resetFilters = () => {
    setStartDate("2025-05-24");
    setEndDate("2025-05-24");
    setSelectedSport("Football");
    setSelectedCompetition("All");
    setSportQuery("");
  };

  const filteredSports = allSports.filter((sport) =>
    sport.toLowerCase().includes(sportQuery.toLowerCase())
  );

const [isSportOpen, setIsSportOpen] = useState(false); 

const [competitionQuery, setCompetitionQuery] = useState("");
const [isCompetitionOpen, setIsCompetitionOpen] = useState(false);

const filteredCompetitions = competitions.filter((comp) =>
  comp.toLowerCase().includes(competitionQuery.toLowerCase())
);


  return (
    <div className="p-4 rounded-lg w-100">
      <div className="flex items-center gap-2 text-[12px] font-100 border-gray-600 pt-[8px] pl-[5px] pr-[5px] pb-[7px] justify-between w-90 bg-headerBg rounded-[5px]">
        <div className="flex gap-2 text-white">
          <Filter className="h-5 w-5" />
          <span>Filter</span>
        </div>
        <div>
          <button onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? (
              <ChevronUp className="h-5 w-5 text-white" />
            ) : (
              <ChevronDown className="h-5 w-5 text-white" />
            )}
          </button>
        </div>
      </div>

      {isExpanded && (
        <>
          <div className="bg-headerBg">
            <div className="grid grid-cols-2 gap-2 w-100 m-2">
              <div className="w-50 bg-headerbg3 rounded-lg mt-2">
                <label className="text-sm block pt-2 pl-2 text-hederColor2">
                  Start Date
                </label>
                <div className="relative">
                  <input
                    ref={startDateRef}
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full p-2 rounded bg-headerbg3 text-white focus:outline-none"
                  />
                  <CalendarDays
                    className="absolute right-2 top-2.5 h-5 w-5 text-gray-400 cursor-pointer"
                    onClick={() => startDateRef.current?.showPicker()}
                  />
                </div>
              </div>

              <div className="w-50 bg-headerbg3 rounded-lg mt-2">
                <label className="text-sm block pt-2 pl-2 text-hederColor2">
                  End Date
                </label>
                <div className="relative">
                  <input
                    ref={endDateRef}
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full p-2 rounded bg-headerbg3 text-white focus:outline-none"
                  />
                  <CalendarDays
                    className="absolute right-2 top-2.5 h-5 w-5 text-gray-400 cursor-pointer"
                    onClick={() => endDateRef.current?.showPicker()}
                  />
                </div>
              </div>
            </div>

            {/* Sport Dropdown with Search */}
            {/* Sport Dropdown with Search and Modal Style */}
            <div className="bg-headerBg">
              <div className="w-100 m-2">
                <div className="relative z-50 w-50 bg-headerbg3 rounded-lg mt-2">
                  <label className="text-sm block pt-2 pl-2 text-hederColor2">
                    Sport
                  </label>
                  <Listbox
                    value={selectedSport}
                    onChange={(value) => {
                      setSelectedSport(value);
                      setIsSportOpen(false); // Close on selection
                    }}
                    as="div"
                    open={isSportOpen}
                    onClose={() => setIsSportOpen(false)} // Headless UI callback
                  >
                    <div className="relative">
                      <Listbox.Button
                        className="w-full p-2 rounded bg-gray-800 text-white flex justify-between items-center"
                        onClick={() => setIsSportOpen(!isSportOpen)} // Toggle open/close
                      >
                        {selectedSport}
                        <ChevronDown className="h-4 w-4 text-gray-400 pointer-events-none" />
                      </Listbox.Button>

                      <Listbox.Options className="absolute left-0 mt-2 w-full bg-[#0c1327] rounded-lg shadow-lg max-h-60 overflow-auto z-50">
                        <div className="flex items-center p-2 border-b border-gray-700 bg-[#1c253f] rounded-t-lg">
                          <input
                            type="text"
                            placeholder="Search Sport"
                            value={sportQuery}
                            onChange={(e) => setSportQuery(e.target.value)}
                            className="flex-grow bg-[#1c253f] text-white p-2 rounded focus:outline-none placeholder-gray-400"
                          />
                          <button
                            className="ml-2"
                            onClick={() => {
                              setSportQuery("");
                              setIsSportOpen(false); // 👈 Close dropdown on clear
                              setIsSportOpen(!isSportOpen); // 👈 Close dropdown on clear
                            }}
                          >
                            <X className="w-5 h-5 text-gray-400 hover:text-white" />
                          </button>
                        </div>

                        {filteredSports.length > 0 ? (
                          filteredSports.map((sport) => (
                            <Listbox.Option
                              key={sport}
                              value={sport}
                              className="cursor-pointer px-4 py-3 text-white hover:bg-[#1e293b]"
                            >
                              {sport}
                            </Listbox.Option>
                          ))
                        ) : (
                          <div className="text-white px-4 py-3">
                            No matches found
                          </div>
                        )}
                      </Listbox.Options>
                    </div>
                  </Listbox>
                </div>
              </div>
            </div>

            {/* Competition Dropdown */}
            <div className="bg-headerBg">
              <div className="w-100 m-2">
                <div className="relative w-50 bg-headerbg3 rounded-lg mt-2">
                  <label className="text-sm block pt-2 pl-2 text-hederColor2">
                    Competition
                  </label>
                  <Listbox
                    value={selectedCompetition}
                    onChange={setSelectedCompetition}
                  >
                    <div className="relative">
                      <Listbox.Button className="w-full p-2 rounded bg-gray-700 text-white flex justify-between items-center">
                        {selectedCompetition}
                        <ChevronDown className="h-4 w-4 text-gray-400 pointer-events-none" />
                      </Listbox.Button>
                      <Listbox.Options className="absolute left-0 mt-2 w-full bg-[#0c1327] rounded-lg shadow-lg max-h-60 overflow-auto z-50">
                        <div className="flex items-center p-2 border-b border-gray-700 bg-[#1c253f] rounded-t-lg">
                          <input
                            type="text"
                            placeholder="Search Competition"
                            value={competitionQuery}
                            onChange={(e) =>
                              setCompetitionQuery(e.target.value)
                            }
                            className="flex-grow bg-[#1c253f] text-white p-2 rounded focus:outline-none placeholder-gray-400"
                          />
                          <button
                            className="ml-2"
                            onClick={() => {
                              setCompetitionQuery("");
                              setIsCompetitionOpen(false);
                              setIsCompetitionOpen(true); // Re-open to refresh list
                            }}
                          >
                            <X className="w-5 h-5 text-gray-400 hover:text-white" />
                          </button>
                        </div>

                        {filteredCompetitions.length > 0 ? (
                          filteredCompetitions.map((comp) => (
                            <Listbox.Option
                              key={comp}
                              value={comp}
                              className="cursor-pointer px-4 py-3 text-white hover:bg-[#1e293b]"
                            >
                              {comp}
                            </Listbox.Option>
                          ))
                        ) : (
                          <div className="text-white px-4 py-3">
                            No matches found
                          </div>
                        )}
                      </Listbox.Options>
                    </div>
                  </Listbox>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col items-center gap-2 mt-2 ">
              <button
                onClick={resetFilters}
                className="w-[21.5rem] p-2 border border-gray-500 rounded text-white"
              >
                RESET
              </button>
              <button className="w-[21.5rem] p-2 bg-sky-500 hover:bg-sky-600 rounded text-white mb-2">
                SHOW
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
