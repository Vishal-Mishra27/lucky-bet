
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../i18";

export default function FilterOption() {
  const { t, i18n } = useTranslation();
  const { SelectProvider } = t("Filter");
  const { Context7 } = t("Context");

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [showGamesText, setShowGamesText] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isGridView, setIsGridView] = useState(true); // default to grid view
  

  const toggleSearch = () => {
    if (isSearchOpen) {
      setTimeout(() => setShowGamesText(true), 1000);
    } else {
      setShowGamesText(false);
    }
    setIsSearchOpen((prev) => !prev);
    if (isSearchOpen) setQuery("");
  };

  return (
    <>
      <div className="flex flex-wrap items-center justify-between p-2 w-full gap-2 lg:hidden">
        {showGamesText && (
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 px-2 py-2 text-slectedProviderText text-sm uppercase transition-all duration-300 bg-slectedProvider rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 13.414V19a1 1 0 01-1.447.894l-4-2A1 1 0 019 17v-3.586L3.293 6.707A1 1 0 013 6V4z"
              />
            </svg>
            <span>{SelectProvider}</span>
          </button>
        )}

        <div className="flex items-center gap-2 flex-1 justify-end">
          <div className="flex items-center gap-0 bg-headerBgSelected2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={Context7}
              className={`transition-all duration-[1000ms] ease-in-out bg-headerBgSelected2 border border-none hover:border-borderColor rounded-lg text-white text-xsm
                ${
                  isSearchOpen
                    ? "w-[80vw] l:w-[90vw] opacity-100 p-2 !rounded-[5px]"
                    : "w-0 opacity-0 overflow-hidden"
                }`}
              style={{ transitionProperty: "width, opacity" }}
              autoFocus={isSearchOpen}
            />
            <button
              onClick={toggleSearch}
              className="p-2 border border-borderColor hover:bg-[#1a1f2e] rounded-lg lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isSearchOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.65 6.15z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Sliding Modal */}
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-60 transition-opacity duration-500 ${
          showModal
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setShowModal(false)}
      >
        <div
          className={`absolute  right-0 w-full top-[3.22rem] h-full bg-[#0A122C] p-4 transition-transform duration-500 ${
            showModal ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()} // prevent background click from closing
        >
          {/* Back Button */}
          <button
            onClick={() => setShowModal(false)}
            className="text-white mb-4 flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Back</span>
          </button>

          {/* Modal Content Here */}
          <div className="text-white">
            <input
              type="text"
              placeholder="Provider Search"
              className="w-full px-4 py-2 mb-4 rounded bg-[#1F2A44] text-white placeholder-gray-400"
            />
            <div className="w-full flex justify-end">
              <button
                onClick={() => setIsGridView(!isGridView)}
                className="p-2 text-white right-0"
                title="Toggle View"
              >
                {isGridView ? (
                  // List Icon
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  // Grid Icon
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h6v6H4V6zm0 8h6v6H4v-6zm8-8h6v6h-6V6zm0 8h6v6h-6v-6z"
                    />
                  </svg>
                )}
              </button>
            </div>

            {isGridView ? (
              // GRID VIEW
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#1F2A44] p-4 rounded">CREEDROOMZ</div>
                <div className="bg-[#1F2A44] p-4 rounded">Lava Gaming</div>
                <div className="bg-[#1F2A44] p-4 rounded">Fashion TV</div>
                <div className="bg-[#1F2A44] p-4 rounded">Popok Gaming</div>
              </div>
            ) : (
              // LIST VIEW
              <div className="flex flex-col gap-4">
                <div className="bg-[#1F2A44] p-4 rounded w-full">
                  CREEDROOMZ
                </div>
                <div className="bg-[#1F2A44] p-4 rounded w-full">
                  Lava Gaming
                </div>
                <div className="bg-[#1F2A44] p-4 rounded w-full">
                  Fashion TV
                </div>
                <div className="bg-[#1F2A44] p-4 rounded w-full">
                  Popok Gaming
                </div>
              </div>
            )}

            <button className="w-full mt-8 py-2 rounded bg-white text-black">
              APPLY
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
