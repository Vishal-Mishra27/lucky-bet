

import React, { useState } from "react";
import "./Option.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faGlobe,
  faSearch,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import "../i18";

export default function Option() {
   const { t, i18n } = useTranslation();
      const { Context3 } = t("Context");

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
    if (isSearchOpen) setQuery(""); // clear query when closing
  };

  return (
    <div className="options-bar-container">
      {!isSearchOpen && (
        <div className="options-left">
          <button className="option-button" aria-label="Video Call">
            <FontAwesomeIcon icon={faVideo} className="option-icon" />
          </button>
          <button className="option-button" aria-label="Web/Browse">
            <FontAwesomeIcon icon={faGlobe} className="option-icon" />
          </button>
        </div>
      )}

      <div className="options-right" style={{ flex: 1 }}>
        <div className="search-container">
          <div className={`search-wrapper ${isSearchOpen ? "show" : "hide"}`}>
            <input
              type="text"
              className="search-input !bg-mainBg"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={Context3}
            />
          </div>

          <button
            className="option-button search-button"
            aria-label="Search"
            onClick={toggleSearch}
          >
            <FontAwesomeIcon
              icon={isSearchOpen ? faTimes : faSearch}
              className="option-icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
}


// import React, { useState } from "react";
// import "./Option.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faVideo,
//   faGlobe,
//   faSearch,
//   faTimes,
// } from "@fortawesome/free-solid-svg-icons";

// export default function Option() {
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [query, setQuery] = useState("");

//   const toggleSearch = () => {
//     setIsSearchOpen((prev) => !prev);
//     if (isSearchOpen) setQuery("");
//   };

//   return (
//     <div className="options-bar-container">
//       {!isSearchOpen && (
//         <div className="options-left">
//           <button className="option-button" aria-label="Video Call">
//             <FontAwesomeIcon icon={faVideo} className="option-icon" />
//           </button>
//           <button className="option-button" aria-label="Web/Browse">
//             <FontAwesomeIcon icon={faGlobe} className="option-icon" />
//           </button>
//         </div>
//       )}

//       <div className="options-right">
//         <div className="search-container">
//           <div className={`search-slide ${isSearchOpen ? "show" : "hide"}`}>
//             <input
//               type="text"
//               className="search-input"
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               placeholder="Search for a competition or team"
//             />
//           </div>
//           <button
//             className="option-button search-button"
//             aria-label="Search"
//             onClick={toggleSearch}
//           >
//             <FontAwesomeIcon
//               icon={isSearchOpen ? faTimes : faSearch}
//               className="option-icon"
//             />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
